import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Pagination = () => {
  const { page, handlePageChange, totalPages } = useContext(AppContext);
  return (
    <div className="flex justify-center border shadow-md">
      <div className="max-sm:w-3/4 max-md:w-3/4 w-[640px] mt-2">
        <div className="flex justify-between px-2">
          <div className=" flex gap-5">
            {page > 1 && (
              <button
                className="border rounded-md p-2 bg-blue-300 font-semibold"
                onClick={() => handlePageChange(page - 1)}
              >
                Previous
              </button>
            )}

            {page < totalPages && (
              <button
                className="border rounded-md p-2 bg-blue-300 font-semibold"
                onClick={() => handlePageChange(page + 1)}
              >
                Next
              </button>
            )}
          </div>
          <p className="p-2 font-semibold">
            Page {page} of {totalPages}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
