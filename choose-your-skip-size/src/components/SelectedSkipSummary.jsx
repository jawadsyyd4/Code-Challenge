import React from 'react';

const SelectedSkipSummary = ({ skip, onBack, onContinue }) => {
    const totalPrice = (skip.price_before_vat + (skip.price_before_vat * skip.vat) / 100).toFixed(2);

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] overscroll-none overflow-y-auto">
            <div className="min-h-screen px-4 py-8 flex items-center justify-center">
                <div className="relative w-full max-w-2xl bg-gray-800 rounded-2xl p-6 m-auto animate-fade-up">
                    {/* Close button */}
                    <button
                        onClick={onBack}
                        className="absolute right-4 top-4 text-gray-400 hover:text-white"
                        aria-label="Close"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    {/* Header */}
                    <div className="mb-8">
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{skip.size} Yard Skip Selected</h3>
                        <p className="text-gray-400">{skip.hire_period_days} day hire period</p>
                    </div>

                    {/* Price */}
                    <div className="bg-gray-900/50 rounded-lg p-4 mb-6">
                        <div className="flex items-center justify-between">
                            <span className="text-gray-400">Total Price (inc. VAT)</span>
                            <div className="text-2xl sm:text-3xl font-bold text-blue-400">
                                £{totalPrice}
                            </div>
                        </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-4 mb-8">
                        <div className="flex items-center text-gray-400">
                            <svg className={`w-5 h-5 mr-3 ${skip.allowed_on_road ? "text-green-500" : "text-red-500"}`} fill="currentColor" viewBox="0 0 20 20">
                                {skip.allowed_on_road ? (
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                ) : (
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                )}
                            </svg>
                            {skip.allowed_on_road ? "Road Placement Allowed" : "No Road Placement"}
                        </div>
                        <div className="flex items-center text-gray-400">
                            <svg className={`w-5 h-5 mr-3 ${skip.allows_heavy_waste ? "text-green-500" : "text-red-500"}`} fill="currentColor" viewBox="0 0 20 20">
                                {skip.allows_heavy_waste ? (
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                ) : (
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                )}
                            </svg>
                            {skip.allows_heavy_waste ? "Heavy Waste Allowed" : "No Heavy Waste"}
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                        <button
                            onClick={onBack}
                            className="w-full sm:w-1/2 px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors font-medium"
                        >
                            Back
                        </button>
                        <button
                            onClick={onContinue}
                            className="w-full sm:w-1/2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                        >
                            Continue
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SelectedSkipSummary; 