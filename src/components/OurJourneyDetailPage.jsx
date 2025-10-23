import React, { useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom";
import data from '../data/data.json'

function OurJourneyDetailPage() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
    const { id } = useParams();
    const navigate = useNavigate();
    const item = data.find((d) => d.id === parseInt(id));

    if (!item) {
        return (
            <div className="p-10 text-center">
                <h2 className="text-red-600 text-2xl font-bold">Content Not Found</h2>
                <button
                    onClick={() => navigate("/")}
                    className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg"
                >
                    Go Back
                </button>
            </div>
        );
    }

    return (
        <div className="p-10 max-w-4xl mx-auto">
            <img
                src={item.image}
                alt={item.header}
                className="w-full h-80 object-cover rounded-2xl mb-6"
            />
            <h1 className="text-3xl font-bold mb-4">{item.header}</h1>
            <p className="text-gray-700 text-lg leading-relaxed">{item.paragraph}</p>

            <button
                onClick={() => navigate("/")}
                className="mt-6 bg-gray-800 text-white px-6 py-2 rounded-lg"
            >
                Back to Home
            </button>
        </div>
    );
}

export default OurJourneyDetailPage