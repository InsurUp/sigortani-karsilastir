'use client'

import Image from 'next/image'
import React, { useMemo, useState } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormHelperText from '@mui/material/FormHelperText'
import Button from '@mui/material/Button'
import { useRouter } from 'next/navigation'
import { validateTCKNFull, validateTurkishPhoneStrict } from '@/utils/validators'
import { ProductData } from '@/data/products'
import { OFFLINE_FORM_CONFIG, resolveOfflineFormConfig } from '@/constants/offlineForms'

interface BannerProps {
  productData?: ProductData
}

function Banner({ productData }: BannerProps) {
    const router = useRouter()
    const [formValues, setFormValues] = useState({
        identityNumber: '',
        phoneNumber: '',
        acceptKvkk: false,
        acceptCommercial: false,
    })
    const [formErrors, setFormErrors] = useState<{
        identityNumber?: string
        phoneNumber?: string
        acceptKvkk?: string
    }>({})
    const [isSubmitting, setIsSubmitting] = useState(false)

    // Varsayılan değerler
    const defaultData = {
        icon: "/images/product/icon/kasko.svg",
        title: "Kasko Sigortası Teklifi Al!",
        description: "Kasko sigortası teklifi almak için lütfen aşağıdaki formu doldurunuz.",
        bgImage: "/images/product/banner/kasko_bg.webp"
    }

    const resolvedForm = useMemo(() => {
        return resolveOfflineFormConfig(productData?.slug, productData?.name)
    }, [productData?.slug, productData?.name])

    const activeFormConfig = resolvedForm?.config
    const activeFormKey = resolvedForm?.key

    // Ürün verilerinden dinamik değerleri al
    const icon = productData?.slug === 'kasko' ? "/images/product/icon/kasko.svg" : 
                 productData?.slug === 'trafik' ? "/images/product/icon/trafik.svg" :
                 productData?.slug === 'dask' ? "/images/product/icon/dask.svg" :
                 productData?.slug === 'konut' ? "/images/product/icon/konut.svg" :
                 productData?.slug === 'imm' ? "/images/product/icon/imm.svg" :
                 productData?.slug === 'saglik' ? "/images/product/icon/saglik.svg" :
                 defaultData.icon

    const title = productData?.banner?.title || defaultData.title
    const description = productData?.banner?.description || defaultData.description
    const bgImage = productData?.slug === 'kasko' ? "/images/product/banner/kasko_bg.webp" :
                    productData?.slug === 'trafik' ? "/images/product/banner/trafik_bg.webp" :
                    productData?.slug === 'dask' ? "/images/product/banner/dask_bg.webp" :
                    productData?.slug === 'konut' ? "/images/product/banner/konut_bg.webp" :
                    productData?.slug === 'imm' ? "/images/product/banner/imm_bg.webp" :
                    productData?.slug === 'saglik' ? "/images/product/banner/saglik_bg.webp" :
                    defaultData.bgImage

    const handleInputChange = (field: 'identityNumber' | 'phoneNumber') => (event: React.ChangeEvent<HTMLInputElement>) => {
        const rawValue = event.target.value
        const digitsOnly = rawValue.replace(/\D/g, '')
        setFormValues(prev => ({
            ...prev,
            [field]: field === 'phoneNumber' ? digitsOnly.slice(0, 10) : digitsOnly.slice(0, 11)
        }))
        if (formErrors[field]) {
            setFormErrors(prev => ({ ...prev, [field]: undefined }))
        }
    }

    const handleCheckboxChange = (field: 'acceptKvkk' | 'acceptCommercial') => (_: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
        setFormValues(prev => ({ ...prev, [field]: checked }))
        if (field === 'acceptKvkk' && formErrors.acceptKvkk) {
            setFormErrors(prev => ({ ...prev, acceptKvkk: undefined }))
        }
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if (!activeFormConfig || !activeFormKey) {
            return
        }

        const validationErrors: typeof formErrors = {}

        const tcValidation = validateTCKNFull(formValues.identityNumber)
        if (!tcValidation.isValid) {
            validationErrors.identityNumber = tcValidation.message || 'Geçerli bir T.C. Kimlik No giriniz.'
        }

        const phoneValidation = validateTurkishPhoneStrict(formValues.phoneNumber)
        if (!phoneValidation.isValid) {
            validationErrors.phoneNumber = phoneValidation.message || 'Geçerli bir telefon numarası giriniz.'
        }

        if (!formValues.acceptKvkk) {
            validationErrors.acceptKvkk = 'Devam etmek için KVKK onayını vermeniz gerekir.'
        }

        if (Object.keys(validationErrors).length > 0) {
            setFormErrors(validationErrors)
            return
        }

        try {
            setIsSubmitting(true)
            if (typeof window !== 'undefined') {
                const payload = {
                    identityNumber: formValues.identityNumber,
                    phoneNumber: formValues.phoneNumber,
                    acceptKvkk: formValues.acceptKvkk,
                    acceptCommercial: formValues.acceptCommercial,
                    createdAt: Date.now(),
                }
                localStorage.setItem(activeFormConfig.storageKey, JSON.stringify(payload))
            }
            const searchParams = new URLSearchParams({
                kaynak: 'banner',
                urun: activeFormKey,
            })
            router.push(`${activeFormConfig.targetPath}?${searchParams.toString()}`)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <section 
            className='relative md:py-[100px] py-[50px] bg-[#D9EDFA] before:content-[""] before:absolute before:inset-0 before:z-0 before:bg-cover before:bg-center before:pointer-events-none'
            style={{
                backgroundImage: `url("${bgImage}")`
            }}
        >
            <div className='container relative z-[1]'>
                <div className='grid lg:grid-cols-5 gap-10 bg-white rounded-lg sm:px-10 px-5 sm:py-[40px] py-[25px]'>
                    <div className='lg:col-span-2'>
                        <Image src={icon} width={85} height={85} className='object-contain' alt='banner' />
                        <h1 className='text-3xl font-bold my-4'>{title}</h1>
                        <p className='text-sm text-[#223140]'>
                            {description}
                        </p>
                    </div>
                    <div className='lg:col-span-3'>
                        <Box
                            component='form'
                            onSubmit={handleSubmit}
                            className='bg-[#262163] '
                            sx={{ p: { xs: '30px 25px', md: '45px 50px 30px' }, borderRadius: '10px' }}
                        >
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-[25px]'>
                                <TextField
                                    fullWidth
                                    placeholder='TC Kimlik No'
                                    variant='outlined'
                                    value={formValues.identityNumber}
                                    onChange={handleInputChange('identityNumber')}
                                    error={Boolean(formErrors.identityNumber)}
                                    helperText={formErrors.identityNumber}
                                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*', maxLength: 11 }}
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            backgroundColor: '#fff',
                                            borderRadius: '7px',
                                            height: 50,
                                        },
                                        '& .MuiInputBase-input': {
                                            fontSize: '14px',
                                            fontWeight: 700,
                                            color: '#223140',
                                            height: 50,
                                            boxSizing: 'border-box',
                                            padding: '0 14px',
                                        },
                                        '& .MuiOutlinedInput-notchedOutline': {
                                            borderColor: 'rgba(0, 0, 0, 0.23)'
                                        },
                                        '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
                                            borderColor: 'rgba(0, 0, 0, 0.23)'
                                        },
                                        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                            borderColor: 'rgba(0, 0, 0, 0.23)'
                                        },
                                        '& .MuiInputBase-input::placeholder': {
                                            color: '#223140',
                                            opacity: 1,
                                            fontWeight: 700,
                                        },
                                    }}
                                />
                                <TextField
                                    fullWidth
                                    placeholder='Telefon Numarası'
                                    variant='outlined'
                                    value={formValues.phoneNumber}
                                    onChange={handleInputChange('phoneNumber')}
                                    error={Boolean(formErrors.phoneNumber)}
                                    helperText={formErrors.phoneNumber}
                                    inputProps={{ inputMode: 'tel', maxLength: 10 }}
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            backgroundColor: '#fff',
                                            borderRadius: '7px',
                                            height: 50,
                                        },
                                        '& .MuiInputBase-input': {
                                            fontSize: '14px',
                                            fontWeight: 700,
                                            color: '#223140',
                                            height: 50,
                                            boxSizing: 'border-box',
                                            padding: '0 14px',
                                        },
                                        '& .MuiOutlinedInput-notchedOutline': {
                                            borderColor: 'rgba(0, 0, 0, 0.23)'
                                        },
                                        '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
                                            borderColor: 'rgba(0, 0, 0, 0.23)'
                                        },
                                        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                            borderColor: 'rgba(0, 0, 0, 0.23)'
                                        },
                                        '& .MuiInputBase-input::placeholder': {
                                            color: '#223140',
                                            opacity: 1,
                                            fontWeight: 700,
                                        },
                                    }}
                                />
                            </div>
                            <div className='mt-6 grid grid-cols-1 md:grid-cols-3 gap-[25px] items-center'>
                                <div className='md:col-span-2'>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={formValues.acceptKvkk}
                                                onChange={handleCheckboxChange('acceptKvkk')}
                                                sx={{
                                                    color: '#fff',
                                                    '&.Mui-checked': { color: '#fff' },
                                                    '& .MuiSvgIcon-root': { width: 25, height: 25 },
                                                }}
                                            />
                                        }
                                        label='KVKK Aydınlatma Metni’ni okudum, kabul ediyorum.'
                                        sx={{
                                            color: '#fff',
                                            '& .MuiFormControlLabel-label': { fontSize: '12px' },
                                        }}
                                    />
                                    {formErrors.acceptKvkk && (
                                        <FormHelperText sx={{ color: '#ffb4b4', mt: -1, mb: 1 }}>
                                            {formErrors.acceptKvkk}
                                        </FormHelperText>
                                    )}
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={formValues.acceptCommercial}
                                                onChange={handleCheckboxChange('acceptCommercial')}
                                                sx={{
                                                    color: '#fff',
                                                    '&.Mui-checked': { color: '#fff' },
                                                    '& .MuiSvgIcon-root': { width: 25, height: 25 },
                                                }}
                                            />
                                        }
                                        label='Ticari elektronik ileti almak için iznim bulunmaktadır.'
                                        sx={{
                                            color: '#fff',
                                            '& .MuiFormControlLabel-label': { fontSize: '12px' },
                                        }}
                                    />
                                </div>
                                <Button
                                    variant='contained'
                                    fullWidth
                                    type='submit'
                                    disabled={isSubmitting || !activeFormConfig}
                                    sx={{
                                        height: 50,
                                        borderRadius: '7px',
                                        backgroundColor: '#ED1D24',
                                        textTransform: 'none',
                                        fontSize: '14px',
                                        color: '#fff',
                                        boxShadow: 'none',
                                        '&:hover': { backgroundColor: '#d01a20' },
                                    }}
                                    className='md:w-auto w-full'
                                >
                                    {isSubmitting ? 'Yönlendiriliyor...' : 'Gönder'}
                                </Button>
                            </div>
                        </Box>
                    </div>
                </div>
            </div>
        </section>
    )
}

export { Banner }