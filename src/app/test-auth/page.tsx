'use client';

import { useAuthStore } from '@/store/useAuthStore';

export default function TestAuthPage() {
  const { accessToken, isAuthenticated, setToken, logout } = useAuthStore();

  const handleLogin = () => {
    // Test için dummy token
    setToken('dummy-access-token-123');
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Auth Test Sayfası</h1>
      
      <div className="space-y-4">
        <div>
          <p><strong>Login Durumu:</strong> {isAuthenticated ? 'Giriş Yapılmış' : 'Giriş Yapılmamış'}</p>
          <p><strong>Token:</strong> {accessToken || 'Yok'}</p>
        </div>
        
        <div className="space-x-4">
          <button 
            onClick={handleLogin}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            disabled={isAuthenticated}
          >
            Test Login
          </button>
          
          <button 
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            disabled={!isAuthenticated}
          >
            Logout
          </button>
        </div>
        
        <div className="mt-8">
          <p className="text-sm text-gray-600">
            Bu sayfada login/logout test edebilirsiniz. Header'daki "Giriş Yap" butonu duruma göre değişecektir.
          </p>
        </div>
      </div>
    </div>
  );
}

