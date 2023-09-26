import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";

// context creation
export const AppContext = createContext();

// create Provider
export function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  // data filling (calling api)
  async function fetchBlogPosts(page = 1) {
    setLoading(true);

    let url = `${baseUrl}?page=${page}`;

    try {
      const result = await fetch(url);
      const data = await result.json();
      setPage(data.page);
      setPosts(data.posts);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.log("Error in fetching data!");
      setPage(1);
      setPosts([]);
      setTotalPages(null);
    }
    setLoading(false);
  }

  function handlePageChange(page) {
    setPage(page);
    fetchBlogPosts(page);
  }

  // object which contains all the required data
  const value = {
    loading,
    setLoading,
    posts,
    setPosts,
    setPage,
    page,
    totalPages,
    setTotalPages,
    fetchBlogPosts,
    handlePageChange,
  };

  // returning the provider
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
