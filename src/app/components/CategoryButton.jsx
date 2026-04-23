"use client";
import { useState, useEffect, useRef } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const CategoryButton = ({ onCategorySelect }) => {
  const [open, setOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (open && categories.length === 0) {
      setLoading(true);
      fetch("https://dummyjson.com/products/category-list")
        .then((res) => res.json())
        .then((data) => {
          setCategories(data);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [open]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (category) => {
    setSelected(category);
    setOpen(false);
    if (onCategorySelect) onCategorySelect(category);
  };

  const handleReset = () => {
    setSelected(null);
    setOpen(false);
    if (onCategorySelect) onCategorySelect(null);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="bg-[#153243] text-white py-2 px-4 rounded-full hover:bg-[#153243]/90 font-text cursor-pointer flex items-center justify-between gap-1 w-full"
      >
        {selected
          ? selected.charAt(0).toUpperCase() + selected.slice(1)
          : "Vælg kategori"}
        <MdOutlineKeyboardArrowDown
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute left-0 mt-2 min-w-[180px] bg-white rounded-xl shadow-lg border border-gray-100 z-50 overflow-hidden">
          {loading ? (
            <div className="px-4 py-3 text-sm text-gray-500">
              Henter kategorier...
            </div>
          ) : (
            <ul className="py-1">
              {selected && (
                <li>
                  <button
                    onClick={handleReset}
                    className="w-full text-left px-4 py-2 text-sm text-gray-400 hover:bg-gray-50 italic"
                  >
                    Alle kategorier
                  </button>
                </li>
              )}
              {categories.map((category) => (
                <li key={category}>
                  <button
                    onClick={() => handleSelect(category)}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-[#EEF0EB] transition-colors ${
                      selected === category
                        ? "text-[#153243] font-semibold"
                        : "text-gray-700"
                    }`}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default CategoryButton;
