import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolledToHighlights, setIsScrolledToHighlights] = useState(false);
  const [isScrolledToStatistics, setIsScrolledToStatistics] = useState(false);
  const [isScrolledToPengumuman, setIsScrolledToPengumuman] = useState(false);

  const handleDropdownClick = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleScroll = () => {
    const highlightsSection = document.getElementById('highlights-section');
    const statisticsSection = document.getElementById('statistics-section');
    const pengumumanSection = document.getElementById('pengumuman-section');
    const navbarHeight = document.querySelector('nav').offsetHeight;

    if (highlightsSection) {
      const rect = highlightsSection.getBoundingClientRect();
      setIsScrolledToHighlights(rect.top <= navbarHeight && rect.bottom >= 0);
    }

    if (statisticsSection) {
      const rect = statisticsSection.getBoundingClientRect();
      setIsScrolledToStatistics(rect.top <= navbarHeight && rect.bottom >= 0);
    }

    if (pengumumanSection) {
      const rect = pengumumanSection.getBoundingClientRect();
      setIsScrolledToPengumuman(rect.top <= navbarHeight && rect.bottom >= 0);
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarBackgroundClass = isMobileMenuOpen ? 'bg-[#063970] text-white' : isScrolledToHighlights || isScrolledToStatistics || isScrolledToPengumuman ? 'bg-[#173D80] text-white shadow-lg' : 'bg-transparent text-white';

  return (
    <nav className={`py-2 px-4 md:flex md:items-center md:justify-between w-full z-50 fixed top-0 left-0 right-0 transition-all duration-500 ease-in-out ${navbarBackgroundClass}`}>
      <div className="flex justify-between items-center w-full md:w-auto">
        <img src="/assets/tulisan.png" alt="Logo" className="h-6 md:h-14 transition-all duration-500 ease-in-out" />
        <button className="block md:hidden focus:outline-none" onClick={toggleMobileMenu}>
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            {isMobileMenuOpen ? <path fillRule="evenodd" clipRule="evenodd" d="M6 18L18 6M6 6l12 12" /> : <path fillRule="evenodd" clipRule="evenodd" d="M4 5h16v2H4V5zm0 6h16v2H4v-2zm0 6h16v2H4v-2z" />}
          </svg>
        </button>
      </div>

      <div className={`md:flex md:items-center md:space-x-6 mt-4 md:mt-0 ${isMobileMenuOpen ? 'block' : 'hidden'} w-full md:w-auto`}>
        <div className="relative navbar-item">
          <button
            onClick={() => handleDropdownClick('beranda')}
            className={`font-medium focus:outline-none px-2 py-1 rounded transition-colors duration-300 ${activeDropdown === 'beranda' ? 'bg-[#173D80] text-white' : 'hover:bg-[#f0f0f0] hover:text-[#173D80]'}`}
          >
            Beranda
          </button>
        </div>

        <div className="relative navbar-item">
          <button
            onClick={() => handleDropdownClick('pemerintahan')}
            className={`font-medium focus:outline-none px-2 py-1 rounded transition-colors duration-300 ${activeDropdown === 'pemerintahan' ? 'bg-[#173D80] text-white' : 'hover:bg-[#f0f0f0] hover:text-[#173D80]'}`}
          >
            Pemerintahan
          </button>
          {activeDropdown === 'pemerintahan' && (
            <div className="absolute left-0 mt-2 py-2 w-48 bg-white text-gray-900 rounded-lg shadow-lg z-10 transition-all duration-300 ease-in-out">
              <Link to="/sejarah" className="block px-4 py-2 hover:bg-[#173D80] hover:text-white">
                Sejarah
              </Link>
              <Link to="/visi-misi" className="block px-4 py-2 hover:bg-[#173D80] hover:text-white">
                Visi dan Misi
              </Link>
              <Link to="/logo" className="block px-4 py-2 hover:bg-[#173D80] hover:text-white">
                Logo
              </Link>
              <Link to="/perangkat-daerah" className="block px-4 py-2 hover:bg-[#173D80] hover:text-white">
                Perangkat Daerah
              </Link>
              <Link to="/kepala-daerah" className="block px-4 py-2 hover:bg-[#173D80] hover:text-white">
                Kepala Daerah
              </Link>
            </div>
          )}
        </div>

        <div className="relative navbar-item">
          <button
            onClick={() => handleDropdownClick('layanan')}
            className={`font-medium focus:outline-none px-2 py-1 rounded transition-colors duration-300 ${activeDropdown === 'layanan' ? 'bg-[#173D80] text-white' : 'hover:bg-[#f0f0f0] hover:text-[#173D80]'}`}
          >
            Layanan
          </button>
        </div>

        <div className="relative navbar-item">
          <button
            onClick={() => handleDropdownClick('informasiPublik')}
            className={`font-medium focus:outline-none px-2 py-1 rounded transition-colors duration-300 ${activeDropdown === 'informasiPublik' ? 'bg-[#173D80] text-white' : 'hover:bg-[#f0f0f0] hover:text-[#173D80]'}`}
          >
            Informasi Publik
          </button>
          {activeDropdown === 'informasiPublik' && (
            <div className="absolute left-0 mt-2 py-2 w-48 bg-white text-gray-900 rounded-lg shadow-lg z-10 transition-all duration-300 ease-in-out">
              <Link to="/berita" className="block px-4 py-2 hover:bg-[#173D80] hover:text-white">
                Berita
              </Link>
              <Link to="/pengumuman" className="block px-4 py-2 hover:bg-[#173D80] hover:text-white">
                Pengumuman
              </Link>
              <Link to="/agenda" className="block px-4 py-2 hover:bg-[#173D80] hover:text-white">
                Agenda
              </Link>
              <Link to="/statistik" className="block px-4 py-2 hover:bg-[#173D80] hover:text-white">
                Statistik
              </Link>
            </div>
          )}
        </div>

        <div className="relative navbar-item">
          <button
            onClick={() => handleDropdownClick('Dokumen&Peraturan')}
            className={`font-medium focus:outline-none px-2 py-1 rounded transition-colors duration-300 ${activeDropdown === 'Dokumen&Peraturan' ? 'bg-[#173D80] text-white' : 'hover:bg-[#f0f0f0] hover:text-[#173D80]'}`}
          >
            Dokumen & Peraturan
          </button>
          {activeDropdown === 'Dokumen&Peraturan' && (
            <div className="absolute left-0 mt-2 py-2 w-48 bg-white text-gray-900 rounded-lg shadow-lg z-10 transition-all duration-300 ease-in-out">
              <Link to="/apbd-2024" className="block px-4 py-2 hover:bg-[#173D80] hover:text-white">
                Perda APBD 2024
              </Link>
              <Link to="/apbd-2023" className="block px-4 py-2 hover:bg-[#173D80] hover:text-white">
                Perda APBD 2023
              </Link>
              <Link to="/apbd-2022" className="block px-4 py-2 hover:bg-[#173D80] hover:text-white">
                APBD Kepri 2022
              </Link>
              <Link to="/opini-bpk" className="block px-4 py-2 hover:bg-[#173D80] hover:text-white">
                Opini BPK RI 2023
              </Link>
              <Link to="/ipkd-report" className="block px-4 py-2 hover:bg-[#173D80] hover:text-white">
                Laporan IPKD
              </Link>
              <Link to="/produk-hukum" className="block px-4 py-2 hover:bg-[#173D80] hover:text-white">
                Produk Hukum (JDIH)
              </Link>
            </div>
          )}
        </div>

        <div className="relative navbar-item">
          <button
            onClick={() => handleDropdownClick('gallery')}
            className={`font-medium focus:outline-none px-2 py-1 rounded transition-colors duration-300 ${activeDropdown === 'gallery' ? 'bg-[#173D80] text-white' : 'hover:bg-[#f0f0f0] hover:text-[#173D80]'}`}
          >
            Gallery
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
