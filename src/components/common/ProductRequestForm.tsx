'use client'

import Link from 'next/link'
import React, { useEffect, useMemo, useState } from 'react'
import { API_ENDPOINTS } from '@/config/api'
import { agencyConfig } from '@/config/agencyConfig'
import { heroCards } from '@/data/mainpage'
import { fetchWithAuth } from '@/services/fetchWithAuth'
import { validatePhone } from '@/utils/validators'

type ProductRequestFormProps = {
  defaultProduct?: string
  className?: string
}

type FormErrors = {
  fullName?: string
  phone?: string
  product?: string
  kvkk?: string
}

const splitFullName = (fullName: string) => {
  const parts = fullName.trim().split(/\s+/).filter(Boolean)
  const firstName = parts.shift() || ''
  const lastName = parts.join(' ')

  return { firstName, lastName }
}

const normalizePhoneNumber = (value: string) => {
  const digits = value.replace(/\D/g, '')

  if (digits.startsWith('90')) {
    return digits.slice(2, 12)
  }

  if (digits.startsWith('0')) {
    return digits.slice(1, 11)
  }

  return digits.slice(0, 10)
}

const formatPhoneNumber = (value: string) => {
  let digits = value.replace(/\D/g, '')

  if (digits.startsWith('90')) {
    digits = digits.slice(2)
  }

  if (digits && !digits.startsWith('0')) {
    digits = `0${digits}`
  }

  const maskedDigits = digits.slice(0, 11)
  const first = maskedDigits.slice(0, 4)
  const second = maskedDigits.slice(4, 7)
  const third = maskedDigits.slice(7, 9)
  const fourth = maskedDigits.slice(9, 11)

  return [first, second, third, fourth].filter(Boolean).join(' ')
}

const ProductRequestForm: React.FC<ProductRequestFormProps> = ({
  defaultProduct = '',
  className = '',
}) => {
  const productOptions = useMemo(
    () => Array.from(
      new Set(
        [defaultProduct, ...heroCards.map((card) => card.title)].filter(
          (product): product is string => Boolean(product)
        )
      )
    ),
    [defaultProduct]
  )

  const initialProduct = productOptions.includes(defaultProduct) ? defaultProduct : ''
  const [fullName, setFullName] = useState('')
  const [phone, setPhone] = useState('')
  const [selectedProduct, setSelectedProduct] = useState(initialProduct)
  const [kvkkConsent, setKvkkConsent] = useState(false)
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)
  const [submitMessage, setSubmitMessage] = useState('')

  useEffect(() => {
    setSelectedProduct(productOptions.includes(defaultProduct) ? defaultProduct : '')
  }, [defaultProduct, productOptions])

  const validateForm = () => {
    const nextErrors: FormErrors = {}
    const nameParts = fullName.trim().split(/\s+/).filter(Boolean)
    const normalizedPhone = normalizePhoneNumber(phone)
    const phoneResult = validatePhone(normalizedPhone)

    if (nameParts.length < 2) {
      nextErrors.fullName = 'Ad Soyad en az iki kelime olmalıdır.'
    }

    if (!phoneResult.isValid) {
      nextErrors.phone = phoneResult.message || 'Geçerli bir telefon numarası giriniz.'
    }

    if (!selectedProduct) {
      nextErrors.product = 'Lütfen istenilen ürünü seçiniz.'
    }

    if (!kvkkConsent) {
      nextErrors.kvkk = 'KVKK onayı zorunludur.'
    }

    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setSubmitStatus(null)
    setSubmitMessage('')

    if (!validateForm()) {
      return
    }

    const { firstName, lastName } = splitFullName(fullName)
    const payload = {
      firstName,
      lastName,
      phoneNumber: normalizePhoneNumber(phone),
      subject: selectedProduct,
      message: `İstenilen ürün: ${selectedProduct}`,
      kvkkConsent: true,
      agentId: agencyConfig.agency.id,
    }

    setIsSubmitting(true)

    try {
      const response = await fetchWithAuth(API_ENDPOINTS.CONTACT_FORM, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        const errorText = await response.text()
        let errorMessage = `Talep gönderilemedi: ${response.status} ${response.statusText}`

        try {
          const errorData = JSON.parse(errorText)
          errorMessage = errorData.message || errorData.error || errorData.errors?.[0] || errorMessage
        } catch {
          if (errorText) {
            errorMessage = errorText
          }
        }

        throw new Error(errorMessage)
      }

      setFullName('')
      setPhone('')
      setSelectedProduct(initialProduct)
      setKvkkConsent(false)
      setErrors({})
      setSubmitStatus('success')
      setSubmitMessage('Talebiniz başarıyla gönderildi.')
    } catch (error) {
      setSubmitStatus('error')
      setSubmitMessage(error instanceof Error ? error.message : 'Talep gönderilirken bir hata oluştu.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`w-full rounded-2xl bg-white p-6 shadow-xl ${className}`}
      noValidate
    >
      <div className="mb-5">
        <h3 className="text-2xl font-bold text-[#0D0D0D]">Teklif Talebi</h3>
        <p className="mt-2 text-sm leading-6 text-[#223140]/70">
          Bilgilerinizi bırakın, seçtiğiniz ürün için ekibimiz sizinle iletişime geçsin.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <label htmlFor="product-request-name" className="mb-2 block text-sm font-medium text-[#223140]">
            Ad Soyad
          </label>
          <input
            id="product-request-name"
            type="text"
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-[#262163] focus:ring-2 focus:ring-[#262163]/10"
            autoComplete="name"
            placeholder="Adınız Soyadınız"
            aria-invalid={Boolean(errors.fullName)}
          />
          {errors.fullName && <p className="mt-1 text-xs text-red-600">{errors.fullName}</p>}
        </div>

        <div>
          <label htmlFor="product-request-phone" className="mb-2 block text-sm font-medium text-[#223140]">
            Telefon
          </label>
          <input
            id="product-request-phone"
            type="tel"
            value={phone}
            onChange={(event) => setPhone(formatPhoneNumber(event.target.value))}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-[#262163] focus:ring-2 focus:ring-[#262163]/10"
            autoComplete="tel"
            inputMode="numeric"
            placeholder="05xx xxx xx xx"
            aria-invalid={Boolean(errors.phone)}
          />
          {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
        </div>

        <div>
          <label htmlFor="product-request-product" className="mb-2 block text-sm font-medium text-[#223140]">
            İstenilen Ürün
          </label>
          <select
            id="product-request-product"
            value={selectedProduct}
            onChange={(event) => setSelectedProduct(event.target.value)}
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#262163] focus:ring-2 focus:ring-[#262163]/10"
            aria-invalid={Boolean(errors.product)}
          >
            <option value="">Ürün seçiniz</option>
            {productOptions.map((product) => (
              <option key={product} value={product}>
                {product}
              </option>
            ))}
          </select>
          {errors.product && <p className="mt-1 text-xs text-red-600">{errors.product}</p>}
        </div>

        <div>
          <label className="flex items-start gap-3 text-sm text-gray-700">
            <input
              type="checkbox"
              checked={kvkkConsent}
              onChange={(event) => setKvkkConsent(event.target.checked)}
              className="mt-1 h-4 w-4 rounded border-gray-300 text-[#262163] focus:ring-[#262163]"
              aria-invalid={Boolean(errors.kvkk)}
            />
            <span>
              <Link href="/kvkk" className="font-medium text-[#262163] underline">
                KVKK Aydınlatma Metni
              </Link>
              &apos;ni okudum, onaylıyorum.
            </span>
          </label>
          {errors.kvkk && <p className="mt-1 text-xs text-red-600">{errors.kvkk}</p>}
        </div>

        {submitMessage && (
          <div
            className={`rounded-lg px-4 py-3 text-sm ${
              submitStatus === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
            }`}
            role={submitStatus === 'error' ? 'alert' : 'status'}
          >
            {submitMessage}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          aria-busy={isSubmitting}
          className="w-full rounded-lg bg-[#262163] px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? 'Gönderiliyor...' : 'Talep Gönder'}
        </button>
      </div>
    </form>
  )
}

export default ProductRequestForm
