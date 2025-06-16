import React, { useState } from 'react';

export const Pagination: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 14;

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handlePrevious = () => {
    handlePageChange(currentPage - 1);
  };

  const handleNext = () => {
    handlePageChange(currentPage + 1);
  };

  const renderPageNumbers = () => {
    const pages = [];
    
    // Always show first few pages
    for (let i = 1; i <= Math.min(4, totalPages); i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`h-[38px] px-3 py-2 text-[15px] font-normal whitespace-nowrap text-center leading-none border-[1.042px] border-solid border-[#DCDCDC] transition-colors ${
            currentPage === i 
              ? 'bg-[#F6F6F6] text-[rgba(41,41,41,1)]' 
              : 'bg-white text-[rgba(41,41,41,1)] hover:bg-[#F0F0F0]'
          }`}
        >
          {i}
        </button>
      );
    }

    // Add ellipsis if needed
    if (totalPages > 6) {
      pages.push(
        <div
          key="ellipsis"
          className="h-[38px] w-[38px] flex items-center justify-center text-[15px] font-normal text-center border-[1.042px] border-solid border-[#DCDCDC] bg-white"
        >
          ...
        </div>
      );
    }

    // Show last few pages
    for (let i = Math.max(totalPages - 1, 5); i <= totalPages; i++) {
      if (i > 4) {
        pages.push(
          <button
            key={i}
            onClick={() => handlePageChange(i)}
            className={`h-[38px] px-3 py-2 text-[15px] font-normal whitespace-nowrap text-center leading-none border-[1.042px] border-solid border-[#DCDCDC] transition-colors ${
              currentPage === i 
                ? 'bg-[#F6F6F6] text-[rgba(41,41,41,1)]' 
                : 'bg-white text-[rgba(41,41,41,1)] hover:bg-[#F0F0F0]'
            }`}
          >
            {i}
          </button>
        );
      }
    }

    return pages;
  };

  return (
    <div className="flex w-full items-center justify-center flex-wrap px-[17px] py-[25px] max-md:max-w-full max-md:mr-2.5">
      <nav className="flex items-center" aria-label="Pagination Navigation">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className="justify-center items-center rounded-[6.251px_0px_0px_6.251px] flex min-h-[38px] pl-[13px] pr-3 py-2 border-[1.042px] border-solid border-[#DCDCDC] bg-white hover:bg-[#F0F0F0] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          aria-label="Go to previous page"
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/8b21ee557b7745c5a48d7a254ebad4cd/42a51d1c32254d9ed9c4e4b0044c809c76225286?placeholderIfAbsent=true"
            alt="Previous"
            className="aspect-[1] object-contain w-[17px] mr-2"
          />
          <span className="text-[rgba(41,41,41,1)] text-[15px] font-normal leading-none text-center">
            Previous
          </span>
        </button>

        <div className="flex items-center text-[15px] text-[rgba(41,41,41,1)] font-normal whitespace-nowrap text-center leading-none">
          {renderPageNumbers()}
        </div>

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="justify-center items-center flex min-h-[38px] px-3 py-2 rounded-[0px_6.194px_6.194px_0px] border-[1.042px] border-solid border-[#DCDCDC] bg-white hover:bg-[#F0F0F0] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          aria-label="Go to next page"
        >
          <span className="text-[rgba(41,41,41,1)] text-[15px] font-normal leading-none text-center mr-2">
            Next
          </span>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/8b21ee557b7745c5a48d7a254ebad4cd/9350511a2ededde9d3ef8199b1ce3d3df2f9d89b?placeholderIfAbsent=true"
            alt="Next"
            className="aspect-[0.94] object-contain w-4"
          />
        </button>
      </nav>
      
      <div className="text-[rgba(13,16,196,1)] text-[23px] font-medium ml-auto">
        <button className="hover:text-[rgba(13,16,196,0.8)] transition-colors">
          Talk to Alisha
        </button>
      </div>
    </div>
  );
};
