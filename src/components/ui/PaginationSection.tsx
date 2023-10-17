import React from 'react'

export default function PaginationSection({
  totalData,
  dataPerPage,
  setCurrentPage,
  currentPage,
}: {
  totalData: number;
  dataPerPage: number;
  setCurrentPage: ((page: number) => void);
  currentPage: number;
}) {

    let pages = [];

    for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
      pages.push(i);
    }
  return (
    <div className="flex justify-center m-6">
      <div className="flex flex-row items-center justify-center space-x-4">
        {pages.map((page, index) => {
          return (
            <button
              key={index}
              onClick={() => setCurrentPage(page)}
              className={`${
                page === currentPage ? "text-white" : "text-gray-800"
              } text-lg transition duration-150 hover:bg-[#127A9E] bg-[#074c7d] font-semibold py-2 p-4 rounded-lg`}
            >
              {page}
            </button>
          );
        })}
      </div>
    </div>
  );
}
