'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const menuItems = [
    { name: 'Hakkımızda', href: '/hakkimizda' },
    { name: 'Hasar ve Yardım', href: '/hasar-yardim' },
    { name: 'Blog', href: '/blog' },
    { name: 'SSS', href: '/sss' },
    { name: 'Kampanya', href: '/kampanya' },
    { name: 'İletişim', href: '/iletisim' },
  ]

  const dropdownItems = [
    { name: 'Kasko', href: '/urunler/kasko' },
    { name: 'Tamamlayıcı Sağlık', href: '/urunler/tamamlayici-saglik' },
    { name: 'Trafik', href: '/urunler/trafik' },
    { name: 'Konut', href: '/urunler/konut' },
    { name: 'İMM', href: '/urunler/imm' },
    { name: 'Seyahat Sağlık', href: '/urunler/seyahat-saglik' },
    { name: 'DASK', href: '/urunler/dask' },
    { name: 'Özel Sağlık', href: '/urunler/ozel-saglik' },
    { name: 'Komplikasyon', href: '/urunler/komplikasyon' },
    { name: 'Cep Telefonu', href: '/urunler/cep-telefonu' },
  ]

  return (
    <header className="bg-white py-5 ">
      <div className="container mx-auto ">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-primary">
              <Image src="/images/logo.png" alt="Logo" width={100} height={100} />
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-8">
            <ul className="flex items-center space-x-8">
              {/* Hakkımızda */}
              <li className="bg-[#F9F9FB] rounded-lg px-3 py-2">
                <Link
                  href="/hakkimizda"
                  className="text-gray-700 hover:text-primary transition-colors duration-200"
                  style={{
                    fontSize: '14px',
                    fontWeight: '600',
                    lineHeight: '20px',
                  }}
                >
                  Hakkımızda
                </Link>
              </li>
              
              {/* Ürünler Dropdown */}
              <li className="relative bg-[#F9F9FB] rounded-lg px-3 py-2" onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}>
                <div className="relative">
                  <button
                    className="text-gray-700 hover:text-primary transition-colors duration-200 flex items-center"
                    style={{
                      fontSize: '14px',
                      fontWeight: '600',
                      lineHeight: '20px',
                    }}
                  >
                    Ürünler
                    <svg
                      className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                        isDropdownOpen ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  
                  {isDropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                      <ul className="py-2">
                        {dropdownItems.map((item) => (
                          <li key={item.name}>
                            <Link
                              href={item.href}
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors duration-200"
                              style={{
                                fontSize: '14px',
                                fontWeight: '600',
                                lineHeight: '20px',
                              }}
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </li>
              
              {/* Diğer menü öğeleri */}
              {menuItems.slice(1).map((item) => (
                <li key={item.name} className="bg-[#F9F9FB] rounded-lg px-3 py-2">
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-primary transition-colors duration-200"
                    style={{
                      fontSize: '14px',
                      fontWeight: '600',
                      lineHeight: '20px',
                    }}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Giriş Yap Button */}
            <button className="bg-secondary text-white px-6 py-2 rounded-lg hover:bg-opacity-90 active:scale-95 transition-all duration-200 font-semibold">
              Giriş Yap
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary transition-colors duration-200"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden">
          {/* Overlay */}
          <div 
            className="fixed inset-0 bg-black z-40 animate-fadeIn"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Mobile Menu */}
          <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50 transform transition-all duration-700 ease-out ${
            isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`} style={{
            animation: isMenuOpen ? 'slideInRight 0.7s ease-out' : 'none'
          }}>
            <div className="p-6">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl font-bold text-primary">Sigortanı Karşılaştır</h2>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <nav>
                <ul className="space-y-4 max-h-[calc(100vh-200px)] overflow-y-auto pr-2" style={{
                  scrollbarWidth: 'thin',
                  scrollbarColor: '#E5E7EB #F3F4F6',
                }}>
                  <style jsx>{`
                    ul::-webkit-scrollbar {
                      width: 6px;
                    }
                    ul::-webkit-scrollbar-track {
                      background: #F3F4F6;
                      border-radius: 3px;
                    }
                    ul::-webkit-scrollbar-thumb {
                      background: #E5E7EB;
                      border-radius: 3px;
                    }
                    ul::-webkit-scrollbar-thumb:hover {
                      background: #D1D5DB;
                    }
                  `}</style>
                  {/* Hakkımızda */}
                  <li>
                    <a
                      href="/hakkimizda"
                      className="block bg-[#F9F9FB] rounded-lg px-3 py-2 text-gray-700 hover:text-primary transition-colors duration-200"
                      style={{
                        fontSize: '14px',
                        fontWeight: '600',
                        lineHeight: '20px',
                      }}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Hakkımızda
                    </a>
                  </li>
                  
                  {/* Mobile Ürünler Dropdown */}
                  <li>
                    <button
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="w-full text-left bg-[#F9F9FB] rounded-lg px-3 py-2 text-gray-700 hover:text-primary transition-colors duration-200 flex items-center justify-between"
                      style={{
                        fontSize: '14px',
                        fontWeight: '600',
                        lineHeight: '20px',
                      }}
                    >
                      Ürünler
                      <svg
                        className={`h-4 w-4 transition-transform duration-200 ${
                          isDropdownOpen ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {isDropdownOpen && (
                      <ul className="mt-2 ml-4 space-y-2">
                        {dropdownItems.map((item) => (
                          <li key={item.name}>
                            <a
                              href={item.href}
                              className="block bg-gray-50 rounded-lg px-3 py-2 text-gray-700 hover:text-primary transition-colors duration-200"
                              style={{
                                fontSize: '14px',
                                fontWeight: '600',
                                lineHeight: '20px',
                              }}
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {item.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                  
                  {/* Diğer menü öğeleri */}
                  {menuItems.slice(1).map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="block bg-[#F9F9FB] rounded-lg px-3 py-2 text-gray-700 hover:text-primary transition-colors duration-200"
                        style={{
                          fontSize: '14px',
                          fontWeight: '600',
                          lineHeight: '20px',
                        }}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
                
                {/* Mobile Giriş Yap Button */}
                <div className="mt-8">
                  <button className="w-full bg-secondary text-white px-[12px] py-[8px] rounded-lg hover:bg-opacity-90 active:scale-95 transition-all duration-200 font-bold">
                    Giriş Yap
                  </button>
                </div>
              </nav>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

  export { Header };
