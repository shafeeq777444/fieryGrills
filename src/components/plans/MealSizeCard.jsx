import React, { useState } from "react";
import { LuUserRound,LuUsersRound } from "react-icons/lu";
import { RiHomeLine } from "react-icons/ri";
const MealSizeCard = ({ plan, buttonText = "Choose Plan", primaryColor = "bg-blue-600" }) => {
    // buttonText = "Choose Plan",
    // primaryColor = "bg-blue-600",
    const [selectedPlan, setSelectedPlan] = useState(null);
    const handleSelectPlan = (planId) => {
        setSelectedPlan(planId);
        // onSelectPlan(planId);
    };

    // Map icon names to emoji representations (since we don't have access to the actual icon library)
    const getIconEmoji = (plan) => {
        switch (plan) {
            case "single":
                return <LuUserRound color="blue" />;
            case "couple":
                return <LuUsersRound color="blue" />;
            case "family":
                return <RiHomeLine color="green" />;
            default:
                return "📦";
        }
    };
    const getIconBackground = (plan) => {
        switch (plan) {
            case "single":
                return "bg-blue-100";
            case "couple":
                return "bg-blue-100";
            case "family":
                return "bg-blue-100";
            default:
                return "bg-blue-100";
        }
    };
    return (
        <div>
            <div
                key={plan.id}
                className={`bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 transition-all duration-300 ${
                    selectedPlan === plan.id ? "ring-2 ring-blue-500 transform scale-105" : ""
                } ${plan.popular ? "transform scale-105 relative" : ""}`}
                onClick={() => handleSelectPlan(plan.id)}
            >
                {plan.popular && (
                    <div className={`absolute top-0 right-0 ${primaryColor} text-white px-4 py-1 text-sm font-medium`}>
                        Most Popular
                    </div>
                )}
                <div className="p-6">
                    <div className="flex items-center mb-6">
                        <div
                            className={`w-12 h-12 ${getIconBackground(
                                plan.plan
                            )} rounded-full flex items-center justify-center  mr-4`}
                        >
                            <span className="text-xl">{getIconEmoji(plan.plan)}</span>
                        </div>
                        <h3 className="text-2xl font-semibold first-letter:uppercase text-gray-900">{plan.plan} Plan</h3>
                    </div>
                    <div className="mb-6">
                        <div className="text-3xl font-bold text-gray-900 mb-2">
                            {plan.basePrice} <span className="text-lg font-normal text-gray-600">/Week</span>
                        </div>
                        <p className="text-gray-600">{plan.description}</p>
                    </div>
                    <ul className="mb-6 space-y-3">
                        {plan.features.map((feature, index) => (
                            <li key={index} className="flex items-center">
                                <div className="w-6 h-6 flex items-center justify-center text-green-500 mr-2">✓</div>
                                <span className="text-gray-700">{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                {selectedPlan === plan.id && (
                    <div className={`px-6 py-3 ${primaryColor} text-white text-center`}>{buttonText}</div>
                )}
            </div>
        </div>
    );
};

export default MealSizeCard;
