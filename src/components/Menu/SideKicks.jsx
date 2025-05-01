import React from 'react'

const SideKicks = () => {
  const punjabiSidekicks = [
    'Laccha Pyaaz',
    'Kachumber Salad',
    'Boondi Raita',
    'Mint Chutney',
    'Green Chilli Pickle',
    'Mix Veg Pickle',
    'Cucumber Raita',
    'Aloo Raita',
    'Gajar-Mooli Salad',
  ]

  return (
    <div className="p-6 bg-gradient-to-br from-rose-50 to-yellow-50 shadow-lg rounded-2xl border border-red-100 max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-rose-800 mb-4 tracking-wide border-b border-rose-200 pb-2">
        Punjabi Sidekicks 🍴
      </h2>
      <ul className="space-y-2 text-gray-700 font-medium">
        {punjabiSidekicks.map((item, index) => (
          <li
            key={index}
            className="flex items-center gap-2 bg-white hover:bg-rose-50 transition-colors px-3 py-2 rounded shadow-sm"
          >
            <span className="text-rose-600">•</span> {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SideKicks
