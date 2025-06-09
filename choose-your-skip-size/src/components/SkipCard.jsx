import React from 'react';

const SkipCard = ({ skip, isSelected, onSelect, isListView }) => {
    const totalPrice = (skip.price_before_vat + (skip.price_before_vat * skip.vat) / 100).toFixed(2);

    return (
        <div
            onClick={onSelect}
            className={`relative overflow-hidden rounded-2xl transition-all duration-300 cursor-pointer ${isSelected ? "ring-4 ring-blue-500 transform scale-[1.02]" : "hover:scale-[1.01]"
                } ${isListView ? "flex gap-6" : ""}`}
        >
            <div className={`bg-gray-800 p-6 h-full flex ${isListView ? "flex-row items-center w-full" : "flex-col"}`}>
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                    {skip.size} Yards
                </div>

                <div className={`${isListView ? "w-1/4" : "w-full"}`}>
                    <div className="w-full aspect-square flex items-center justify-center mb-4">
                        <svg className="w-24 h-24 md:w-32 md:h-32 text-yellow-500" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M4 6H20V16H4V6M20 18C20 19.1 19.1 20 18 20H6C4.9 20 4 19.1 4 18V16H20V18Z" />
                        </svg>
                    </div>
                </div>

                <div className={`flex-1 ${isListView ? "flex justify-between items-center gap-6" : ""}`}>
                    <div className={`${isListView ? "flex-1" : ""}`}>
                        <h3 className="text-lg md:text-xl font-bold text-white mb-2">{skip.size} Yard Skip</h3>
                        <p className="text-gray-400 text-sm md:text-base">{skip.hire_period_days} day hire period</p>

                        <div className={`mt-4 space-y-2 ${isListView ? "flex gap-4 space-y-0" : ""}`}>
                            <div className="flex items-center text-sm text-gray-400">
                                <svg className={`w-5 h-5 mr-2 ${skip.allowed_on_road ? "text-green-500" : "text-red-500"}`} fill="currentColor" viewBox="0 0 20 20">
                                    {skip.allowed_on_road ? (
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    ) : (
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                    )}
                                </svg>
                                <span className="hidden md:inline">{skip.allowed_on_road ? "Road Placement Allowed" : "No Road Placement"}</span>
                                <span className="md:hidden">{skip.allowed_on_road ? "Road OK" : "No Road"}</span>
                            </div>
                            <div className="flex items-center text-sm text-gray-400">
                                <svg className={`w-5 h-5 mr-2 ${skip.allows_heavy_waste ? "text-green-500" : "text-red-500"}`} fill="currentColor" viewBox="0 0 20 20">
                                    {skip.allows_heavy_waste ? (
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    ) : (
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                    )}
                                </svg>
                                <span className="hidden md:inline">{skip.allows_heavy_waste ? "Heavy Waste Allowed" : "No Heavy Waste"}</span>
                                <span className="md:hidden">{skip.allows_heavy_waste ? "Heavy OK" : "No Heavy"}</span>
                            </div>
                        </div>
                    </div>

                    <div className={`${isListView ? "flex flex-col items-end justify-between" : "mt-6"}`}>
                        <div className="text-xl md:text-2xl font-bold text-blue-400 mb-4">
                            £{totalPrice}
                            <span className="text-xs md:text-sm text-gray-400 ml-2">inc. VAT</span>
                        </div>
                        <div
                            className={`w-full md:w-48 py-3 px-4 rounded-lg font-medium transition-colors duration-200 text-center ${isSelected
                                    ? "bg-blue-600 text-white"
                                    : "bg-gray-700 text-white"
                                }`}
                        >
                            {isSelected ? "Selected" : "Select This Skip"}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkipCard; 