'use client'

import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

interface ContactFormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
  kvkk: boolean
  commercial: boolean
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: 'Diğer',
    message: '',
    kvkk: false,
    commercial: false
  })

  // Focus stateleri
  const [focus, setFocus] = useState({
    name: false,
    email: false,
    phone: false,
    message: false,
    subject: false
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: checked
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form gönderme işlemi burada yapılacak
    console.log('Form data:', formData)
  }

  return (
    <div className=" bg-gray-50 sm:py-20 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            {/* Sol Panel - İletişim Bilgileri */}
            <div className="bg-[#262163] col-span-2   p-8 lg:p-12 text-white">
              <div className="h-full flex flex-col justify-between">
                <div>
                    <h2 className="text-4xl lg:text-5xl font-bold mb-4">İletişim</h2>
                <p className="text-lg text-purple-100 mb-12">
                  Tüm sorularınız için bize ulaşabilirsiniz.
                </p>
                </div>
                
                
                <div className="space-y-8">
                  {/* Telefon */}
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <FontAwesomeIcon icon={faPhone} className="text-red-500 text-lg" />
                    </div>
                    <div>
                      <p className="text-lg font-medium">0539 856 7299</p>
                    </div>
                  </div>

                  {/* E-posta */}
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <FontAwesomeIcon icon={faEnvelope} className="text-red-500 text-lg" />
                    </div>
                    <div>
                      <p className="text-lg font-medium">sigortanikarsilastir@gmail.com</p>
                    </div>
                  </div>

                  {/* Adres */}
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <FontAwesomeIcon icon={faMapMarkerAlt} className="text-red-500 text-lg" />
                    </div>
                    <div>
                      <p className="text-lg font-medium">
                        132 Dartmouth Street Boston,<br />
                        Massachusetts 02156 United States
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sağ Panel - Form */}
            <div className="p-8 lg:p-12 col-span-3">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Ad Soyad */}
                  <div className="relative h-14">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      onFocus={() => setFocus(f => ({ ...f, name: true }))}
                      onBlur={() => setFocus(f => ({ ...f, name: false }))}
                      className={`peer w-full px-0 py-3 border-0 border-b-2 border-gray-300 bg-transparent focus:outline-none focus:ring-0 focus:border-[#262163] transition-all duration-200 ${formData.name ? 'border-[#262163]' : ''}`}
                      required
                      autoComplete="off"
                      placeholder=" "
                    />
                    <label
                      htmlFor="name"
                      className={`absolute left-0 transition-all duration-200 origin-left
                        ${(focus.name || formData.name)
                          ? '-top-4 text-xs text-[#262163]'
                          : 'top-3 text-gray-500 text-sm'}
                      `}
                    >
                      Ad Soyad
                    </label>
                  </div>
                  {/* E-posta */}
                  <div className="relative h-14">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onFocus={() => setFocus(f => ({ ...f, email: true }))}
                      onBlur={() => setFocus(f => ({ ...f, email: false }))}
                      className={`peer w-full px-0 py-3 border-0 border-b-2 border-gray-300 bg-transparent focus:outline-none focus:ring-0 focus:border-[#262163] transition-all duration-200 ${formData.email ? 'border-[#262163]' : ''}`}
                      required
                      autoComplete="off"
                      placeholder=" "
                    />
                    <label
                      htmlFor="email"
                      className={`absolute left-0 transition-all duration-200 origin-left
                        ${(focus.email || formData.email)
                          ? '-top-4 text-xs text-[#262163]'
                          : 'top-3 text-gray-500 text-sm'}
                      `}
                    >
                      E-posta
                    </label>
                  </div>
                  {/* Telefon */}
                  <div className="relative h-14">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      onFocus={() => setFocus(f => ({ ...f, phone: true }))}
                      onBlur={() => setFocus(f => ({ ...f, phone: false }))}
                      className={`peer w-full px-0 py-3 border-0 border-b-2 border-gray-300 bg-transparent focus:outline-none focus:ring-0 focus:border-[#262163] transition-all duration-200 ${formData.phone ? 'border-[#262163]' : ''}`}
                      required
                      autoComplete="off"
                      placeholder=" "
                    />
                    <label
                      htmlFor="phone"
                      className={`absolute left-0 transition-all duration-200 origin-left
                        ${(focus.phone || formData.phone)
                          ? '-top-4 text-xs text-[#262163]'
                          : 'top-3 text-gray-500 text-sm'}
                      `}
                    >
                      Telefon
                    </label>
                  </div>
                  {/* Konu */}
                  <div className="relative h-14">
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      onFocus={() => setFocus(f => ({ ...f, subject: true }))}
                      onBlur={() => setFocus(f => ({ ...f, subject: false }))}
                      className="peer w-full px-0 py-3 border-0 border-b-2 border-gray-300 bg-transparent focus:outline-none focus:ring-0 focus:border-[#262163] transition-all duration-200 appearance-none"
                      required
                    >
                      <option value="" disabled hidden>Konu</option>
                      <option value="Sigorta Teklifi">Sigorta Teklifi</option>
                      <option value="Şikayet">Şikayet</option>
                      <option value="Bilgi Talebi">Bilgi Talebi</option>
                      <option value="İş Birliği">İş Birliği</option>
                      <option value="Diğer">Diğer</option>
                    </select>
                    <span
                      className={`absolute left-0 transition-all duration-200 origin-left pointer-events-none
                        ${((focus.subject || formData.subject) && formData.subject !== '')
                          ? '-top-4 text-xs text-[#262163]'
                          : 'top-3 text-gray-500 text-sm'}
                      `}
                    >
                      Konu
                    </span>
                  </div>
                  {/* Mesaj */}
                  <div className="relative md:col-span-2">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      onFocus={() => setFocus(f => ({ ...f, message: true }))}
                      onBlur={() => setFocus(f => ({ ...f, message: false }))}
                      rows={3}
                      className={`peer w-full px-0 py-3 border-0 border-b-2 border-gray-300 bg-transparent focus:outline-none focus:ring-0 focus:border-[#262163] transition-all duration-200 resize-none ${formData.message ? 'border-[#262163]' : ''}`}
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="message"
                      className={`absolute left-0 transition-all duration-200 origin-left
                        ${(focus.message || formData.message)
                          ? '-top-4 text-xs text-[#262163]'
                          : 'top-3 text-gray-500 text-sm'}
                      `}
                    >
                      Mesajınız
                    </label>
                  </div>
                </div>
                {/* Checkboxlar */}
                <div className="space-y-4 mt-4">
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="kvkk"
                      name="kvkk"
                      checked={formData.kvkk}
                      onChange={handleCheckboxChange}
                      className="mt-1 w-4 h-4 text-[#262163] border-gray-300 rounded focus:ring-purple-500"
                      required
                    />
                    <label htmlFor="kvkk" className="text-sm text-gray-700">
                      KVKK Aydınlatma Metni'ni okudum, onaylıyorum
                    </label>
                  </div>
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="commercial"
                      name="commercial"
                      checked={formData.commercial}
                      onChange={handleCheckboxChange}
                      className="mt-1 w-4 h-4 text-[#262163] border-gray-300 rounded focus:ring-purple-500"
                      required
                    />
                    <label htmlFor="commercial" className="text-sm text-gray-700">
                      Ticari Elektronik İleti Metni 'ni okudum, onaylıyorum.
                    </label>
                  </div>
                </div>
                {/* Gönder Butonu */}
                <div className="flex justify-end mt-4">
                  <button
                    type="submit"
                    className="text-white px-8 py-3 rounded-lg font-medium bg-[#262163] transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    Gönder
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm 