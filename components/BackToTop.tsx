'use client';

import { FaArrowUp } from 'react-icons/fa';
import { useEffect, useState } from 'react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  const scrollToTop = () => {
    const header = document.getElementById('header');
    if (header) {
      header.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-opacity duration-300 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <button
        onClick={scrollToTop}
        className="bg-[#0B96F3] text-white p-3 rounded-full shadow-lg hover:bg-[#066bb3] transition transform hover:scale-110"
        aria-label="Back to Top"
      >
        <FaArrowUp size={20} />
      </button>
    </div>
  );
}
