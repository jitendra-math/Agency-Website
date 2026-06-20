// src/components/faq/FAQCategories.jsx

"use client";

const categories = [
  { id: "all", label: "All Questions" },
  { id: "getting-started", label: "Getting Started" },
  { id: "pricing-payments", label: "Pricing & Payments" },
  { id: "development-process", label: "Development Process" },
  { id: "ownership-rights", label: "Ownership & Rights" },
  { id: "support-maintenance", label: "Support & Maintenance" },
  { id: "technical-questions", label: "Technical Questions" },
];

export default function FAQCategories({ activeCategory, setActiveCategory }) {
  return (
    <div className="bg-white dark:bg-[#050505] px-6 py-8 sm:py-10 transition-colors duration-500 border-b border-neutral-200/70 dark:border-neutral-800/70">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`
                px-4 sm:px-5 py-2
                rounded-full
                text-xs sm:text-sm
                font-medium
                transition-all duration-300
                ${
                  activeCategory === category.id
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                    : "bg-white/80 dark:bg-white/[0.04] text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-white/[0.08] border border-black/5 dark:border-white/10"
                }
              `}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}