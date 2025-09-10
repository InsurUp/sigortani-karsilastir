'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useAuthStore } from '@/store/useAuthStore'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isUrunlerDropdownOpen, setIsUrunlerDropdownOpen] = useState(false)
  const [isBilgiMerkeziDropdownOpen, setIsBilgiMerkeziDropdownOpen] = useState(false)
  const [isClient, setIsClient] = useState(false)
  
  const { accessToken } = useAuthStore()
  const isLoggedIn = isClient && !!accessToken

  // Client-side hydration kontrolü
  useEffect(() => {
    setIsClient(true)
  }, [])

  const mainMenuItems = [
    { name: 'Ürünler', type: 'dropdown' },
    { name: 'Poliçe ve Hasar', href: '/police-hasar' },
    { name: 'Bilgi Merkezi', type: 'dropdown' },
    { name: 'Kampanyalar', href: '/kampanyalar' },
  ]

  const bilgiMerkeziItems = [
    { name: 'Hakkımızda', href: '/hakkimizda' },
    { name: 'İletişim', href: '/iletisim' },
    { name: 'Blog', href: '/blog' },
    { name: 'SSS', href: '/sss' },
  ]

  const productCategories = [
    {
      title: 'Aracım',
      icon: '/images/product/icon/kasko.svg',
      items: [
        { name: 'Kasko', href: '/urunler/kasko' },
        { name: 'Trafik', href: '/urunler/trafik' },
        { name: 'İMM', href: '/urunler/imm' },
      ]
    },
    {
      title: 'Evim',
      icon: '/images/product/icon/konut.svg',
      items: [
        { name: 'Konut', href: '/urunler/konut' },
        { name: 'DASK', href: '/urunler/dask' },
      ]
    },
    {
      title: 'Sağlığım',
      icon: '/images/product/icon/tss.svg',
      items: [
        { name: 'Özel Sağlık', href: '/urunler/ozel-saglik' },
        { name: 'Tamamlayıcı Sağlık', href: '/urunler/tamamlayici-saglik' },
        { name: 'Seyahat Sağlık', href: '/urunler/seyahat-saglik' },
      ]
    },
    {
      title: 'Diğer',
      icon: '/images/product/icon/telefon.svg',
      items: [
        { name: 'Cep Telefonu', href: '/urunler/cep-telefonu' },
      ]
    }
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
              {mainMenuItems.map((item) => (
                <li key={item.name} className="relative px-3 py-2">
                  {item.type === 'dropdown' ? (
                    <div 
                      className="relative"
                      onMouseEnter={() => {
                        if (item.name === 'Ürünler') setIsUrunlerDropdownOpen(true)
                        if (item.name === 'Bilgi Merkezi') setIsBilgiMerkeziDropdownOpen(true)
                      }}
                      onMouseLeave={() => {
                        if (item.name === 'Ürünler') setIsUrunlerDropdownOpen(false)
                        if (item.name === 'Bilgi Merkezi') setIsBilgiMerkeziDropdownOpen(false)
                      }}
                    >
                      <button
                        className="text-gray-700 hover:text-primary transition-colors duration-200 flex items-center"
                        style={{
                          fontSize: '14px',
                          fontWeight: '600',
                          lineHeight: '20px',
                        }}
                      >
                        {item.name}
                        <svg
                          className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                            (item.name === 'Ürünler' && isUrunlerDropdownOpen) || 
                            (item.name === 'Bilgi Merkezi' && isBilgiMerkeziDropdownOpen) 
                              ? 'rotate-180' : ''
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
                      
                      {item.name === 'Ürünler' && isUrunlerDropdownOpen && (
                        <div className="absolute top-full left-0 pt-2 z-[99999]">
                          <div className="w-96 bg-white border border-gray-200 rounded-lg shadow-lg p-4">
                          <div className="grid grid-cols-2 gap-4">
                            {productCategories.map((category) => (
                              <div key={category.title} className="border border-gray-100 rounded-lg p-3 hover:bg-gray-50 transition-colors">
                                <div className="flex items-center justify-between mb-3">
                                  <h3 className="text-sm font-bold text-gray-800">{category.title}</h3>
                                  <Image src={category.icon} alt={category.title} width={24} height={24} className="w-6 h-6" />
                                </div>
                                <ul className="space-y-2">
                                  {category.items.map((product) => (
                                    <li key={product.name}>
                                      <Link
                                        href={product.href}
                                        className="block px-2 py-1 text-sm font-medium text-black hover:text-secondary transition-colors duration-200"
                                      >
                                        {product.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                          </div>
                        </div>
                      )}

                      {item.name === 'Bilgi Merkezi' && isBilgiMerkeziDropdownOpen && (
                        <div className="absolute top-full left-0 pt-2 z-[99999]">
                          <div className="w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
                            <ul className="py-2">
                            {bilgiMerkeziItems.map((dropItem) => (
                              <li key={dropItem.name}>
                                <Link
                                  href={dropItem.href}
                                  className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors duration-200"
                                  style={{
                                    fontSize: '14px',
                                    fontWeight: '600',
                                    lineHeight: '20px',
                                  }}
                                >
                                  {dropItem.name}
                                </Link>
                              </li>
                            ))}
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href!}
                      className="text-gray-700 hover:text-primary transition-colors duration-200"
                      style={{
                        fontSize: '14px',
                        fontWeight: '600',
                        lineHeight: '20px',
                      }}
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            
            {/* Action Buttons */}
            <div className="flex items-center space-x-3">
              {/* WhatsApp Button */}
              <Link 
                href="https://wa.me/+905555555555" 
                target="_blank"
                className="bg-white text-green-500 border border-green-500 px-3 py-1.5 rounded-lg hover:bg-green-500 hover:text-white active:scale-95 transition-all duration-200 flex items-center space-x-1.5 font-medium text-sm"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                <span>WhatsApp</span>
              </Link>

              {/* Phone Button */}
              <Link 
                href="tel:+905555555555"
                className="bg-white text-red-500 border border-red-500 px-3 py-1.5 rounded-lg hover:bg-red-500 hover:text-white active:scale-95 transition-all duration-200 flex items-center space-x-1.5 font-medium text-sm"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <span>Hemen Ara</span>
              </Link>

              {/* Giriş Yap / Hesabım Button */}
              {isLoggedIn ? (
                <Link href="/dashboard" className="bg-secondary text-white px-6 py-1.5 rounded-lg hover:bg-opacity-90 active:scale-95 transition-all duration-200 font-medium text-sm min-w-[90px]">
                  Hesabım
                </Link>
              ) : (
                <Link href="/giris-yap" className="bg-secondary text-white px-6 py-1.5 rounded-lg hover:bg-opacity-90 active:scale-95 transition-all duration-200 font-medium text-sm min-w-[90px]">
                  Giriş Yap
                </Link>
              )}
            </div>
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
                  {/* Ana menü öğeleri */}
                  {mainMenuItems.map((item) => (
                    <li key={item.name}>
                      {item.type === 'dropdown' ? (
                        <>
                          <button
                            onClick={() => {
                              if (item.name === 'Ürünler') setIsUrunlerDropdownOpen(!isUrunlerDropdownOpen)
                              if (item.name === 'Bilgi Merkezi') setIsBilgiMerkeziDropdownOpen(!isBilgiMerkeziDropdownOpen)
                            }}
                            className="w-full text-left px-3 py-2 text-gray-700 hover:text-primary transition-colors duration-200 flex items-center justify-between"
                            style={{
                              fontSize: '14px',
                              fontWeight: '600',
                              lineHeight: '20px',
                            }}
                          >
                            {item.name}
                            <svg
                              className={`h-4 w-4 transition-transform duration-200 ${
                                (item.name === 'Ürünler' && isUrunlerDropdownOpen) || 
                                (item.name === 'Bilgi Merkezi' && isBilgiMerkeziDropdownOpen) 
                                  ? 'rotate-180' : ''
                              }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>
                          
                          {item.name === 'Ürünler' && isUrunlerDropdownOpen && (
                            <ul className="mt-2 ml-4 space-y-2">
                              {productCategories.map((category) => 
                                category.items.map((product) => (
                                  <li key={product.name}>
                                    <a
                                      href={product.href}
                                      className="block px-3 py-2 text-sm text-black hover:text-secondary transition-colors duration-200"
                                      onClick={() => setIsMenuOpen(false)}
                                    >
                                      {product.name}
                                    </a>
                                  </li>
                                ))
                              )}
                            </ul>
                          )}

                          {item.name === 'Bilgi Merkezi' && isBilgiMerkeziDropdownOpen && (
                            <ul className="mt-2 ml-4 space-y-2">
                              {bilgiMerkeziItems.map((dropItem) => (
                                <li key={dropItem.name}>
                                  <a
                                    href={dropItem.href}
                                    className="block px-3 py-2 text-sm text-black hover:text-secondary transition-colors duration-200"
                                    onClick={() => setIsMenuOpen(false)}
                                  >
                                    {dropItem.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          )}
                        </>
                      ) : (
                        <a
                          href={item.href}
                          className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors duration-200"
                          style={{
                            fontSize: '14px',
                            fontWeight: '600',
                            lineHeight: '20px',
                          }}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.name}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
                
                {/* Mobile Action Buttons */}
                <div className="mt-8 space-y-4">
                  {/* Mobile WhatsApp and Phone Buttons */}
                  <div className="flex space-x-3 justify-center">
                    <Link 
                      href="https://wa.me/+905555555555" 
                      target="_blank"
                      className="bg-white text-green-500 border border-green-500 px-3 py-1.5 rounded-lg hover:bg-green-500 hover:text-white active:scale-95 transition-all duration-200 flex items-center space-x-1.5 font-medium text-sm"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                      </svg>
                      <span>WhatsApp</span>
                    </Link>

                    <Link 
                      href="tel:+905555555555"
                      className="bg-white text-red-500 border border-red-500 px-3 py-1.5 rounded-lg hover:bg-red-500 hover:text-white active:scale-95 transition-all duration-200 flex items-center space-x-1.5 font-medium text-sm"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                      </svg>
                      <span>Hemen Ara</span>
                    </Link>
                  </div>

                  {/* Mobile Giriş Yap / Hesabım Button */}
                  {isLoggedIn ? (
                    <Link href="/dashboard" className="block w-full bg-secondary text-white px-6 py-1.5 rounded-lg hover:bg-opacity-90 active:scale-95 transition-all duration-200 font-medium text-sm text-center" onClick={() => setIsMenuOpen(false)}>
                      Hesabım
                    </Link>
                  ) : (
                    <Link href="/giris-yap" className="block w-full bg-secondary text-white px-6 py-1.5 rounded-lg hover:bg-opacity-90 active:scale-95 transition-all duration-200 font-medium text-sm text-center" onClick={() => setIsMenuOpen(false)}>
                      Giriş Yap
                    </Link>
                  )}
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
