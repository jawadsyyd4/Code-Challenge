import { useEffect, useState } from "react";
import axios from "axios";
import ProgressBar from "./ProgressBar";
import SkipCard from "./SkipCard";
import SelectedSkipSummary from "./SelectedSkipSummary";
import ViewToggle from "./ViewToggle";

// Main Component
const SkipSelector = () => {
    const [skips, setSkips] = useState([]);
    const [selectedId, setSelectedId] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isListView, setIsListView] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios
            .get("https://app.wewantwaste.co.uk/api/skips/by-location", {
                params: {
                    postcode: "NR32",
                    area: "Lowestoft"
                }
            })
            .then((res) => {
                setSkips(res.data || []);
                setError(null);
            })
            .catch((err) => {
                console.error("Failed to fetch skips:", err);
                setError("Failed to load skip options. Please try again later.");
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const selectedSkip = skips.find(skip => skip.id === selectedId);

    return (
        <div className="min-h-screen bg-gray-900">
            <ProgressBar />

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="flex justify-between items-center mb-12">
                    <div className="text-center flex-1">
                        <h1 className="text-2xl md:text-4xl font-bold text-white mb-4">Choose Your Skip Size</h1>
                        <p className="text-gray-400 text-sm md:text-base">Select the skip size that best suits your needs</p>
                    </div>
                    <ViewToggle isListView={isListView} onViewChange={setIsListView} />
                </div>

                {loading && (
                    <div className="flex justify-center items-center h-64">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                    </div>
                )}

                {error && (
                    <div className="text-red-500 text-center p-4 bg-red-900/20 rounded-lg">
                        {error}
                    </div>
                )}

                <div className={`grid gap-6 ${isListView ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}>
                    {skips.map((skip) => (
                        <SkipCard
                            key={skip.id}
                            skip={skip}
                            isSelected={selectedId === skip.id}
                            onSelect={() => setSelectedId(skip.id)}
                            isListView={isListView}
                        />
                    ))}
                </div>
            </div>

            <div className="text-center text-gray-500 text-xs md:text-sm mt-8 pb-8 px-4">
                Imagery and information shown throughout this website may not reflect the exact shape or size specification, colours may vary, options and/or accessories may be featured at additional cost.
            </div>

            {/* Selection Summary Overlay */}
            {selectedSkip && (
                <SelectedSkipSummary
                    skip={selectedSkip}
                    onBack={() => setSelectedId(null)}
                    onContinue={() => {
                        // Handle continue action
                        console.log('Continuing with skip:', selectedSkip);
                    }}
                />
            )}
        </div>
    );
};

export default SkipSelector;
