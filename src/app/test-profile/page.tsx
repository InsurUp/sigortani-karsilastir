'use client';

import { useAuthStore } from '@/store/useAuthStore';
import { updateCustomerProfile, CustomerType } from '@/utils/authHelper';
import React, { useState } from 'react';

export default function TestProfilePage() {
  const { accessToken, customerId, setToken, setCustomerId } = useAuthStore();
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string>('');

  const handleTestLogin = () => {
    // Test için dummy token ve customerId set et
    setToken('test_access_token_123');
    setCustomerId('test_customer_id_456');
    setResult('Test login yapıldı');
  };

  const handleTestProfileUpdate = async () => {
    if (!customerId) {
      setResult('Önce test login yapın!');
      return;
    }

    setLoading(true);
    try {
      const updateData = {
        fullName: 'Test Kullanıcı',
        primaryEmail: 'test@example.com',
        primaryPhoneNumber: {
          number: '5551234567',
          countryCode: 90,
        },
      };

      console.log('Test profile update başlıyor...');
      const result = await updateCustomerProfile(updateData, customerId, CustomerType.Individual);
      console.log('Test profile update başarılı:', result);
      setResult('Profil güncelleme başarılı!');
    } catch (error) {
      console.error('Test profile update hatası:', error);
      setResult(`Hata: ${error instanceof Error ? error.message : 'Bilinmeyen hata'}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Profil Güncelleme Test</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <div className="mb-4">
          <p><strong>Access Token:</strong> {accessToken ? 'Var' : 'Yok'}</p>
          <p><strong>Customer ID:</strong> {customerId || 'Yok'}</p>
        </div>

        <div className="space-y-4">
          <button
            onClick={handleTestLogin}
            className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Test Login
          </button>

          <button
            onClick={handleTestProfileUpdate}
            disabled={!customerId || loading}
            className="w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50"
          >
            {loading ? 'Güncelleniyor...' : 'Profil Güncelle'}
          </button>
        </div>

        {result && (
          <div className="mt-4 p-3 bg-gray-100 rounded">
            <p className="text-sm">{result}</p>
          </div>
        )}
      </div>
    </div>
  );
}



