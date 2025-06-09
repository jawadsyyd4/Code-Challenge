import React from 'react';

// Progress Step Component
const ProgressStep = ({ title, isActive, isCompleted, icon }) => (
    <div className="flex items-center">
        <div className={`flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full ${isCompleted ? "bg-blue-600" : isActive ? "bg-blue-500" : "bg-gray-700"
            }`}>
            {icon}
        </div>
        <span className={`ml-2 text-xs md:text-sm ${isActive ? "text-blue-500" : "text-gray-400"}`}>
            {title}
        </span>
        {title !== "Payment" && (
            <div className={`hidden md:block h-1 w-12 md:w-24 mx-2 md:mx-4 ${isCompleted ? "bg-blue-600" : "bg-gray-700"}`} />
        )}
    </div>
);

const ProgressBar = () => {
    return (
        <div className="bg-black p-4 md:p-6 shadow-lg sticky top-0 z-10">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center overflow-x-hidden">
                    <ProgressStep
                        title="Postcode"
                        isCompleted={true}
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-4 md:h-5 md:w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>}
                    />
                    <ProgressStep
                        title="Waste Type"
                        isCompleted={true}
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-4 md:h-5 md:w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3 1h10v8H5V6z" clipRule="evenodd" />
                        </svg>}
                    />
                    <ProgressStep
                        title="Select Skip"
                        isActive={true}
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-4 md:h-5 md:w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3z" />
                        </svg>}
                    />
                    <ProgressStep
                        title="Permit Check"
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-4 md:h-5 md:w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>}
                    />
                    <ProgressStep
                        title="Choose Date"
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-4 md:h-5 md:w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>}
                    />
                    <ProgressStep
                        title="Payment"
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-4 md:h-5 md:w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                            <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
                        </svg>}
                    />
                </div>
            </div>
        </div>
    );
};

export default ProgressBar; 