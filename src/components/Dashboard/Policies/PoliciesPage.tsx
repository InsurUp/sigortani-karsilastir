import { format } from 'date-fns';
import { tr } from 'date-fns/locale';
import { FileText } from 'lucide-react';
import { useQuery, useMutation, gql } from '@apollo/client';
import { Badge } from '@/components/ui/badge';
import { API_ENDPOINTS } from '@/config/api';

const GET_POLICIES = gql`
  query GetPolicies {
    policies(skip: 0, take: 10, order: [{ createdAt: DESC }]) {
      totalCount
      items {
        id
        state
        productBranch
        startDate
        endDate
        insuranceCompanyLogo
        insuranceCompanyPolicyNumber
        insuranceCompanyName
        productName
        grossPremium
        netPremium
        insuredCustomerName
        insuredCustomerIdentity
        insuredCustomerType
        arrangementDate
        createdAt
        createdBy {
          name
        }
        vehicleModel {
          brand {
            text
            value
          }
          year
        }
        channel
        insuredCustomerId
        vehicleId
        propertyId
      }
    }
  }
`;

const GET_POLICY_DOCUMENT = gql`
  mutation GetPolicyDocument($policyId: String!) {
    getPolicyDocument(policyId: $policyId) {
      url
    }
  }
`;

interface Policy {
  id: string;
  state: string;
  productBranch: string;
  startDate: string;
  endDate: string;
  insuranceCompanyLogo: string | null;
  insuranceCompanyPolicyNumber: string;
  insuranceCompanyName: string;
  productName: string;
  grossPremium: number;
  netPremium: number;
  insuredCustomerName: string;
  insuredCustomerIdentity: string;
  insuredCustomerType: string;
  arrangementDate: string | null;
  createdAt: string;
  createdBy: {
    name: string;
  };
  vehicleModel: {
    brand: {
      text: string;
      value: string;
    };
    year: number;
  } | null;
  channel: string;
  insuredCustomerId: string;
  vehicleId: string | null;
  propertyId: string | null;
}

const PoliciesPage = () => {
  const { loading, error, data } = useQuery(GET_POLICIES, {
    fetchPolicy: 'network-only',
    errorPolicy: 'all'
  });

  const [getPolicyDocument] = useMutation(GET_POLICY_DOCUMENT);

  const formatDate = (date: string) => {
    return format(new Date(date), 'd MMMM yyyy', { locale: tr });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('tr-TR', {
      style: 'currency',
      currency: 'TRY',
    }).format(amount);
  };

  const getAssetInfo = (policy: Policy) => {
    if (policy.vehicleModel) {
      return `${policy.vehicleModel.brand.text} ${policy.vehicleModel.year}`;
    }
    if (
      policy.productBranch.toLowerCase() === 'konut' ||
      policy.productBranch.toLowerCase() === 'dask'
    ) {
      return 'Konum Bilgisi'; // Bu kısım API'den gelecek veriye göre güncellenmeli
    }
    if (policy.productBranch.toLowerCase() === 'tss') {
      return policy.productName;
    }
    return '-';
  };

  const getPolicyStatus = (policy: Policy) => {
    const endDate = new Date(policy.endDate);
    const today = new Date();
    return endDate >= today ? 'Aktif' : 'Süresi Doldu';
  };

  // Mobile Policy Card Component
  const PolicyCard = ({ policy }: { policy: Policy }) => {
    const status = getPolicyStatus(policy);
    const isActive = status === 'Aktif';

    return (
      <div className="bg-white rounded-xl border border-gray-100 p-4 space-y-4">
        {/* Header */}
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-gray-900 text-lg">
              {policy.productBranch.charAt(0).toUpperCase() +
                policy.productBranch.slice(1).toLowerCase()}
            </h3>
            <p className="text-gray-600 text-sm">{getAssetInfo(policy)}</p>
          </div>
          <Badge
            variant={isActive ? 'success' : 'secondary'}
            className="text-xs"
          >
            {status}
          </Badge>
        </div>

        {/* Insurance Company */}
        <div className="border-t border-gray-100 pt-3">
          <div className="flex justify-between items-center">
            <span className="text-gray-500 text-sm">Sigorta Şirketi:</span>
            <span className="text-gray-900 font-medium">{policy.insuranceCompanyName}</span>
          </div>
        </div>

        {/* Policy Period */}
        <div className="bg-gray-50 rounded-lg p-3">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Poliçe Süresi</h4>
          <div className="space-y-1">
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-500">Başlangıç:</span>
              <span className="text-sm font-medium text-gray-900">
                {formatDate(policy.startDate)}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-500">Bitiş:</span>
              <span className="text-sm font-medium text-gray-900">
                {formatDate(policy.endDate)}
              </span>
            </div>
          </div>
        </div>

        {/* Policy Number & Premium */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-blue-50 rounded-lg p-3">
            <h4 className="text-xs font-medium text-blue-700 mb-1">Poliçe No</h4>
            <p className="text-sm font-semibold text-blue-900 break-all">
              {policy.insuranceCompanyPolicyNumber}
            </p>
          </div>
          <div className="bg-green-50 rounded-lg p-3">
            <h4 className="text-xs font-medium text-green-700 mb-1">Prim</h4>
            <p className="text-sm font-semibold text-green-900">
              {formatCurrency(policy.grossPremium)}
            </p>
          </div>
        </div>

        {/* PDF Download Button */}
        <div className="pt-2">
          <button
            onClick={() => handleDownloadPdf(policy)}
            className="flex items-center justify-center gap-2 w-full bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg px-4 py-3 text-sm font-medium transition-colors"
          >
            <FileText className="h-4 w-4" />
            Poliçe Dökümanı İndir
          </button>
        </div>
      </div>
    );
  };

  const handleDownloadPdf = async (policy: Policy) => {
    try {
      const { data: documentData } = await getPolicyDocument({
        variables: { policyId: policy.id }
      });

      if (documentData?.getPolicyDocument?.url) {
        window.open(documentData.getPolicyDocument.url, '_blank');
      } else {
        throw new Error("Döküman URL'si bulunamadı");
      }
    } catch (error) {
      alert(error instanceof Error ? error.message : 'Döküman görüntülenirken bir hata oluştu');
    }
  };

  if (loading) return (
    <div className="flex justify-center items-center h-64">
      <div className="border-secondary h-8 w-8 animate-spin rounded-full border-b-2"></div>
    </div>
  );
  
  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-red-500">Hata: {error.message}</p>
      </div>
    );
  }

  return (
    <div className="px-5 py-5 md:py-8">
      <div className="mb-6 md:mb-8">
        <h3 className="text-xl md:text-2xl font-bold text-gray-900">Poliçelerim</h3>
        <p className="mt-1 text-sm md:text-base text-gray-500">
          Aktif ve geçmiş poliçelerinizi görüntüleyin
        </p>
      </div>

      {/* Mobile View - Card Layout */}
      <div className="md:hidden space-y-4">
        {data?.policies?.items?.length > 0 ? (
          data.policies.items.map((policy: Policy) => (
            <PolicyCard key={policy.id} policy={policy} />
          ))
        ) : (
          <div className="text-center py-8 bg-white rounded-xl border border-gray-100">
            <p className="text-gray-500">Henüz poliçe bulunmamaktadır.</p>
          </div>
        )}
      </div>

      {/* Desktop View - Table Layout */}
      <div className="hidden md:block shadow-xs rounded-xl border border-gray-100 bg-white">
        <div className="overflow-x-auto">
          <table className="w-full table-fixed">
            <colgroup>
              <col className="w-[12%]" />
              <col className="w-[15%]" />
              <col className="w-[15%]" />
              <col className="w-[20%]" />
              <col className="w-[15%]" />
              <col className="w-[12%]" />
              <col className="w-[11%]" />
            </colgroup>
            <thead>
              <tr className="border-b border-gray-100">
                <th className="whitespace-nowrap px-4 py-4 text-left text-sm font-medium text-gray-600">
                  Ürün Branşı
                </th>
                <th className="whitespace-nowrap px-4 py-4 text-left text-sm font-medium text-gray-600">
                  Varlık
                </th>
                <th className="whitespace-nowrap px-4 py-4 text-left text-sm font-medium text-gray-600">
                  Sigorta Şirketi
                </th>
                <th className="whitespace-nowrap px-4 py-4 text-left text-sm font-medium text-gray-600">
                  Süre
                </th>
                <th className="whitespace-nowrap px-4 py-4 text-left text-sm font-medium text-gray-600">
                  Poliçe
                </th>
                <th className="whitespace-nowrap py-4 pr-8 text-right text-sm font-medium text-gray-600">
                  Prim
                </th>
                <th className="whitespace-nowrap px-4 py-4 text-center text-sm font-medium text-gray-600">
                  Durum
                </th>
              </tr>
            </thead>
            <tbody>
              {data?.policies?.items?.length > 0 ? (
                data.policies.items.map((policy: Policy) => (
                  <tr key={policy.id} className="border-b border-gray-50 hover:bg-gray-50/50">
                    <td className="truncate px-4 py-4">
                      <span className="font-medium text-gray-900">
                        {policy.productBranch.charAt(0).toUpperCase() +
                          policy.productBranch.slice(1).toLowerCase()}
                      </span>
                    </td>
                    <td className="truncate px-4 py-4 text-gray-600">{getAssetInfo(policy)}</td>
                    <td className="truncate px-4 py-4 text-gray-600">
                      {policy.insuranceCompanyName}
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-gray-600">
                      {`${formatDate(policy.startDate)} – ${formatDate(policy.endDate)}`}
                    </td>
                    <td className="truncate px-4 py-4 text-gray-600">
                      <div className="flex items-center gap-2">
                        <span>{policy.insuranceCompanyPolicyNumber}</span>
                        <button
                          onClick={() => handleDownloadPdf(policy)}
                          className="group flex items-center justify-center rounded-full bg-gray-100 p-2 transition-colors hover:bg-gray-200"
                        >
                          <FileText className="text-gray-400 group-hover:text-secondary h-4 w-4" />
                        </button>
                      </div>
                    </td>
                    <td className="whitespace-nowrap py-4 pr-8 text-right font-medium text-gray-900">
                      {formatCurrency(policy.grossPremium)}
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex justify-center">
                        <Badge
                          variant={getPolicyStatus(policy) === 'Aktif' ? 'success' : 'secondary'}
                          className="text-xs"
                        >
                          {getPolicyStatus(policy)}
                        </Badge>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} className="px-4 py-8 text-center text-gray-500">
                    Henüz poliçe bulunmamaktadır.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PoliciesPage;
