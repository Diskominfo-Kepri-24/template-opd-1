import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

function HighlightsBerita() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3; // Sesuaikan ini dengan jumlah slide sebenarnya
  const slideContainerRef = useRef(null);
  const highlightsSectionRef = useRef(null);
  const beritaSectionRef = useRef(null);

  const handlePrevClick = () => {
    setCurrentSlide((prevSlide) => (prevSlide > 0 ? prevSlide - 1 : totalSlides - 1));
  };

  const handleNextClick = () => {
    setCurrentSlide((prevSlide) => (prevSlide < totalSlides - 1 ? prevSlide + 1 : 0));
  };

  useEffect(() => {
    slideContainerRef.current.style.transform = `translateX(-${currentSlide * 80}%)`; // Mengatur agar slide berikutnya terlihat
  }, [currentSlide]);

  useEffect(() => {
    const handleScroll = () => {
      const highlightsSection = highlightsSectionRef.current;
      const beritaSection = beritaSectionRef.current;

      if (highlightsSection) {
        const rect = highlightsSection.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          highlightsSection.classList.add('opacity-100', 'translate-y-0');
        } else {
          highlightsSection.classList.remove('opacity-100', 'translate-y-0');
        }
      }

      if (beritaSection) {
        const rect = beritaSection.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          beritaSection.classList.add('opacity-100', 'translate-y-0');
        } else {
          beritaSection.classList.remove('opacity-100', 'translate-y-0');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 pt-32 flex flex-col justify-center items-center">
      {' '}
      {/* Menggunakan pt-32 untuk padding top agar tidak tertutup navbar */}
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-8 h-full">
        {/* Bagian Highlights */}
        <div ref={highlightsSectionRef} id="highlights-section" className="md:col-span-2 highlights transition-all duration-1000 ease-in-out opacity-0 translate-y-10 flex flex-col justify-center h-full">
          <h2 className="text-4xl font-bold text-center mb-8">Highlights</h2>
          <div className="relative overflow-hidden flex-grow">
            <div ref={slideContainerRef} className="flex transition-transform duration-500 ease-in-out h-full">
              {/* Slide 1 */}
              <div className="min-w-[80%] flex-shrink-0 bg-white rounded-lg shadow-md p-4 h-full">
                <div className="h-full bg-gray-300 mb-4 flex items-center justify-center">
                  <img src="/assets/babakbelur.jpeg" alt="Babak Belur" className="h-full w-full object-cover rounded-lg" />
                </div>
                <div className="text-center text-gray-700">
                  <p>loremipsum loremipsum loremipsum</p>
                  <p>loremipsum loremipsum loremipsum</p>
                </div>
              </div>
              {/* Slide 2 */}
              <div className="min-w-[80%] flex-shrink-0 bg-white rounded-lg shadow-md p-4 h-full">
                <div className="h-full bg-gray-300 mb-4 flex items-center justify-center">
                  <img src="/assets/napibebas.jpeg" alt="Napi Bebas" className="h-full w-full object-cover rounded-lg" />
                </div>
                <div className="text-center text-gray-700">
                  <p>loremipsum loremipsum loremipsum</p>
                  <p>loremipsum loremipsum loremipsum</p>
                </div>
              </div>
              {/* Slide 3 */}
              <div className="min-w-[80%] flex-shrink-0 bg-white rounded-lg shadow-md p-4 h-full">
                <div className="h-full bg-gray-300 mb-4 flex items-center justify-center">
                  <img src="/assets/pilkada.jpeg" alt="Pilkada" className="h-full w-full object-cover rounded-lg" />
                </div>
                <div className="text-center text-gray-700">
                  <p>loremipsum loremipsum loremipsum</p>
                  <p>loremipsum loremipsum loremipsum</p>
                </div>
              </div>
            </div>
          </div>
          {/* Tombol Navigasi */}
          <div className="flex justify-center mt-8 space-x-4">
            <button onClick={handlePrevClick} className="p-4 bg-blue-500 text-white rounded-full">
              ←
            </button>
            <button onClick={handleNextClick} className="p-4 bg-blue-500 text-white rounded-full">
              →
            </button>
          </div>
        </div>

        {/* Bagian Berita */}
        <div ref={beritaSectionRef} className="berita transition-all duration-1000 ease-in-out opacity-0 translate-y-10 flex flex-col justify-center h-full">
          <h2 className="text-4xl font-bold text-center mb-8">Berita</h2>
          <div className="space-y-4 flex-grow">
            {/* Berita 1 */}
            <div className="flex items-center space-x-4 bg-white rounded-lg shadow-md p-4 transform transition-transform duration-500 ease-in-out hover:scale-105">
              <div className="h-16 w-16 bg-gray-300 flex items-center justify-center">gambar</div>
              <div>
                <p className="text-gray-700">loremipsum loremipsum loremipsum</p>
                <p className="text-sm text-gray-500">hari dan tanggal</p>
              </div>
            </div>
            {/* Berita 2 */}
            <div className="flex items-center space-x-4 bg-white rounded-lg shadow-md p-4 transform transition-transform duration-500 ease-in-out hover:scale-105">
              <div className="h-16 w-16 bg-gray-300 flex items-center justify-center">gambar</div>
              <div>
                <p className="text-gray-700">loremipsum loremipsum loremipsum</p>
                <p className="text-sm text-gray-500">hari dan tanggal</p>
              </div>
            </div>
            {/* Berita 3 */}
            <div className="flex items-center space-x-4 bg-white rounded-lg shadow-md p-4 transform transition-transform duration-500 ease-in-out hover:scale-105">
              <div className="h-16 w-16 bg-gray-300 flex items-center justify-center">gambar</div>
              <div>
                <p className="text-gray-700">loremipsum loremipsum loremipsum</p>
                <p className="text-sm text-gray-500">hari dan tanggal</p>
              </div>
            </div>
            {/* Berita 4 */}
            <div className="flex items-center space-x-4 bg-white rounded-lg shadow-md p-4 transform transition-transform duration-500 ease-in-out hover:scale-105">
              <div className="h-16 w-16 bg-gray-300 flex items-center justify-center">gambar</div>
              <div>
                <p className="text-gray-700">loremipsum loremipsum loremipsum</p>
                <p className="text-sm text-gray-500">hari dan tanggal</p>
              </div>
            </div>
          </div>
          {/* Tombol Lihat Semua Berita */}
          <div className="mt-8 text-center">
            <Link to="/all-news" className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-800 transition-colors duration-300">
              Lihat Semua Berita
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HighlightsBerita;
