import Image from 'next/image'
import React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import Button from '@mui/material/Button'

function Banner() {
    return (
        <section className='relative md:py-[100px] py-[50px] bg-[#D9EDFA] before:content-[""] before:absolute before:inset-0 before:z-0 before:bg-[url("/images/product/banner/kasko_bg.webp")] before:bg-cover before:bg-center before:pointer-events-none'>
            <div className='container relative z-[1]'>
                <div className='grid lg:grid-cols-5 gap-10 bg-white rounded-lg sm:px-10 px-5 sm:py-[40px] py-[25px]'>
                    <div className='lg:col-span-2'>
                        <Image src="/images/product/icon/kasko.svg" width={85} height={85} className='object-contain' alt='banner' />
                        <h1 className='text-3xl font-bold my-4'>Kasko Sigortası Teklifi Al!</h1>
                        <p className='text-sm text-[#223140]'>
                            Kasko sigortası teklifi almak için lütfen aşağıdaki formu doldurunuz.
                        </p>
                    </div>
                    <div className='lg:col-span-3'>
                        <Box className='bg-[#262163] ' sx={{ p: { xs: '30px 25px', md: '45px 50px 30px' }, borderRadius: '10px' }}>
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-[25px]'>
                                <TextField
                                    fullWidth
                                    placeholder='TC Kimlik No'
                                    variant='outlined'
                                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
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
                                    inputProps={{ inputMode: 'tel' }}
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
                                    <FormControlLabel
                                        control={
                                            <Checkbox
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
                                    Gönder
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