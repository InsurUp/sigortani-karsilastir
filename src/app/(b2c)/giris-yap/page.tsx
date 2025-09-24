'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Shield } from 'lucide-react';
import { useAuthStore } from '@/store/useAuthStore';
import { fetchWithAuth } from '@/services/fetchWithAuth';
import { API_ENDPOINTS } from '@/config/api';
import { CustomerProfile } from '@/services/fetchWithAuth';
import AuthForm from '@/components/Auth/AuthForm';
import VerificationForm from '@/components/Auth/PhoneVerification/VerificationForm';
import { updateCustomerProfile } from '@/utils/authHelper';
import '@/styles/form-style.css';

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [showVerification, setShowVerification] = useState(false);
  const [tempToken, setTempToken] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [userFormData, setUserFormData] = useState<any>(null);
  const { setUser, setCustomerId, setTokens } = useAuthStore();

  const handleLogoClick = () => {
    router.push('/');
  };

  // Profil güncelleme fonksiyonu
  const updateUserProfileWithMeData = async (
    currentProfile: CustomerProfile, 
    meData: CustomerProfile,
    userRegistrationData?: any
  ): Promise<void> => {
    try {
      
      // Mevcut profil verilerini base al ve /me'den gelen bilgileri ekle
      const updatePayload: any = {
        ...currentProfile,
        // /me'den gelen yeni bilgiler
        fullName: meData.fullName || currentProfile.fullName,
        cityReference: (typeof meData.city === 'object' && meData.city) 
          ? meData.city.value 
          : meData.city || 
            (typeof currentProfile.city === 'object' && currentProfile.city ? currentProfile.city.value : currentProfile.city),
        districtReference: (typeof meData.district === 'object' && meData.district) 
          ? meData.district.value 
          : meData.district || 
            (typeof currentProfile.district === 'object' && currentProfile.district ? currentProfile.district.value : currentProfile.district),
        gender: meData.gender || currentProfile.gender,
        
        // Kullanıcının kayıt sırasında girdiği bilgiler (varsa)
        identityNumber: userRegistrationData?.identityNumber || currentProfile.identityNumber,
        birthDate: userRegistrationData?.birthDate || currentProfile.birthDate,
        primaryPhoneNumber: userRegistrationData?.phoneNumber || currentProfile.primaryPhoneNumber,
      };
      
      // Gereksiz alanları temizle
      delete updatePayload.id;
      delete updatePayload.createdAt;
      if (updatePayload.updatedAt) delete updatePayload.updatedAt;
      
      
      // Profili güncelle - authHelper kullanarak
      await updateCustomerProfile(updatePayload, currentProfile.id);
      
    } catch (error) {
      throw error;
    }
  };

  const handleVerificationSuccess = async (userData: any, accessToken: string, refreshToken: string) => {
    setIsLoading(true);
    
    try {
      // Token'ları store'a kaydet
      setTokens(accessToken, refreshToken);
      
      // CustomerId'yi kaydet
      setCustomerId(userData.id);
      
      // Güncel bilgileri /me endpoint'inden al
      let finalUserData: CustomerProfile | null = null;
      
      try {
        const rawMeResponse = await fetchWithAuth(API_ENDPOINTS.CUSTOMER_ME);
        if (rawMeResponse.ok) {
          finalUserData = await rawMeResponse.json() as CustomerProfile;
        }
      } catch (error) {
      }

      // Eğer üye ol modunda ise ve /me'den bilgiler geldiyse profili güncelle
      if (isRegistering && finalUserData) {
        const hasNewDataFromMe = finalUserData.fullName || 
          (typeof finalUserData.city === 'object' && finalUserData.city?.value) ||
          (typeof finalUserData.district === 'object' && finalUserData.district?.value) ||
          finalUserData.gender;
          
        if (hasNewDataFromMe) {
          
          try {
            await updateUserProfileWithMeData(
              userData, // mevcut profil bilgileri
              finalUserData, // /me'den gelen bilgiler  
              userFormData // kullanıcının kayıt sırasında girdiği bilgiler
            );
            
            // Güncellenmiş profili tekrar al
            const updatedProfileResponse = await fetchWithAuth(API_ENDPOINTS.CUSTOMER_ME);
            if (updatedProfileResponse.ok) {
              finalUserData = await updatedProfileResponse.json() as CustomerProfile;
            }
          } catch (updateError) {
            // Hata durumunda da devam et
          }
        }
      }

      // Kullanıcı bilgilerini store'a kaydet
      const userDataToSet = finalUserData || userData;
      
      setUser({
        id: userDataToSet.id,
        name: userDataToSet.fullName || userData.fullName,
        email: userDataToSet.primaryEmail || userData.primaryEmail,
        phone: userDataToSet.primaryPhoneNumber?.number || userData.primaryPhoneNumber?.number,
      });

      
      // Yönlendirme
      const redirectUrl = searchParams.get('redirect') || '/dashboard/profile';
      router.push(redirectUrl);
      
    } catch (error) {
      
      // Hata durumunda da temel bilgileri kaydet ve yönlendir
    setUser({
      id: userData.id,
      name: userData.fullName,
      email: userData.primaryEmail,
      phone: userData.primaryPhoneNumber.number,
    });

    const redirectUrl = searchParams.get('redirect') || '/dashboard/profile';
    router.push(redirectUrl);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-br flex  items-center justify-center from-primary/10 to-white " style={{ paddingTop: '50px',paddingBottom:'50px' }}>
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className=" flex cursor-pointer justify-center" onClick={handleLogoClick}>
          <div className="mb-4 inline-block rounded-full bg-white p-3 shadow-md">
            <Shield className=" h-10 w-10" />
          </div>
        </div>

        {/* Welcome Text */}
        <div className="mb-8 text-center">
          <span className="text-2xl font-bold text-gray-900">Hesabınıza Giriş Yapın</span>
          <p className="text-gray-600">
            Giriş yapmak veya üye olmak için aşağıdaki alanları doldurunuz.
          </p>
        </div>


        {/* Auth Form */}
        {!showVerification ? (
          <AuthForm
            isRegistering={true}
            onSuccess={(token, phone) => {
              setTempToken(token);
              setPhoneNumber(phone);
              setShowVerification(true);
            }}
            onFormModeChange={(registering: boolean, formData: any) => {
              setIsRegistering(registering);
              setUserFormData(formData);
            }}
          />
        ) : (
          <VerificationForm
            token={tempToken}
            phoneNumber={phoneNumber}
            onBack={() => {
              setShowVerification(false);
              setTempToken('');
            }}
            onResend={async () => {
              // Kod tekrar gönder - temelde AuthForm'un yeniden submit edilmesi gerekir
              return Promise.resolve({ newToken: tempToken });
            }}
            onSuccess={async (userData) => {
              // VerificationForm'dan gelen userData ile birlikte token bilgilerini al
              const { accessToken, refreshToken } = useAuthStore.getState();
              if (accessToken && refreshToken) {
                await handleVerificationSuccess(userData, accessToken, refreshToken);
              }
            }}
          />
        )}
      </div>
    </div>
  );
} 