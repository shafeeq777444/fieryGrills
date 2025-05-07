import React, { useState } from "react";
import { ChevronRight, Check } from "lucide-react";

const About = () => {
    const [selectedPlan, setSelectedPlan] = useState("premium");
    const [includeSaturday, setIncludeSaturday] = useState(true);
    const [email, setEmail] = useState("");

    const getActiveDays = () => {
        return includeSaturday ? 6 : 5;
    };

    const calculatePrice = () => {
        const basePrice = 200;
        return includeSaturday ? basePrice + 50 : basePrice;
    };

    return (
        <div>
            {/* Tiffin Summary */}
            

            {/* Community/Newsletter Section */}
            <div className="bg-gray-50 rounded-lg p-16 text-center ">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Tiffin Community</h2>
                <p className="text-gray-700 max-w-2xl mx-auto mb-8">
                    Subscribe to receive weekly menus, updates on special festive meals, and exclusive discounts.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                    <input
                        type="email"
                        placeholder="Your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                    <button className="bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-6 rounded-lg transition-colors">
                        Subscribe
                    </button>
                </div>
                <p className="text-gray-500 text-sm mt-4">We respect your privacy and will never share your information.</p>
            </div>
        </div>
    );
};

export default About;
