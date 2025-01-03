import React from 'react';

const Pagination = ({currentPage, totalPages, onPageChange}) => {
    const handlePrevious = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    return (
        <div className="flex items-center justify-center space-x-16 m-4">
            <button
                onClick={handlePrevious}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded bg-primary text-white hover:bg-blue-500 disabled:bg-gray-400 disabled:cursor-not-allowed`}>
                Previous
            </button>
            <span className="text-lg font-semibold">{currentPage} of {totalPages}</span>
            <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded bg-primary text-white hover:bg-blue-500 disabled:bg-gray-400 disabled:cursor-not-allowed`}>
                Next
            </button>
        </div>

    );
};

export default Pagination;
