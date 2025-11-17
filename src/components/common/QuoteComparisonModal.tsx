"use client";
import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Button,
  Box,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  Card,
  CardContent,
  alpha,
  useTheme,
  styled,
  Checkbox,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useAgencyConfig } from '@/context/AgencyConfigProvider';

// Styled components
const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    borderRadius: 16,
    boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
    overflow: 'hidden',
  }
}));

const CompanyCard = styled(Card)(({ theme, selected }: { theme?: any; selected: boolean }) => ({
  border: selected ? `2px solid ${theme?.palette?.primary?.main}` : '2px solid transparent',
  borderRadius: 12,
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  position: 'relative',
  '&:hover': {
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
    transform: 'translateY(-2px)',
  },
  backgroundColor: selected ? alpha(theme?.palette?.primary?.main || '#1976d2', 0.05) : 'inherit',
}));

// Interfaces
export interface Premium {
  installmentNumber: number;
  netPremium: number;
  grossPremium: number;
  commission: number;
  exchangeRate: number;
  currency: string;
  insuranceCompanyProposalNumber: string;
  formattedNetPremium?: string;
  formattedGrossPremium?: string;
}

export interface Guarantee {
  insuranceGuaranteeId: string;
  label: string;
  valueText: string | null;
  amount: number;
}

export interface QuoteForComparison {
  id: string;
  company?: string;
  logo?: string;
  premiums: Premium[];
  insuranceCompanyGuarantees?: Guarantee[];
  coverageGroupName?: string;
  selectedInstallmentNumber: number;
}

interface QuoteComparisonModalProps {
  open: boolean;
  onClose: () => void;
  quotes: QuoteForComparison[];
  title: string;
  onPurchase?: (quoteId: string) => void;
  maxQuotes?: number;
}

const QuoteComparisonModal: React.FC<QuoteComparisonModalProps> = ({
  open,
  onClose,
  quotes,
  title,
  onPurchase,
  maxQuotes = 3
}) => {
  const [selectedQuotes, setSelectedQuotes] = useState<string[]>([]);
  const theme = useTheme();
  const agencyConfig = useAgencyConfig();

  // Initialize selected quotes - başlangıçta hiçbiri seçili değil
  // Only reset when modal opens/closes, not when quotes update
  useEffect(() => {
    if (open) {
      setSelectedQuotes([]);
    }
  }, [open]);

  const handleQuoteSelection = (quoteId: string) => {
    setSelectedQuotes(prev => {
      if (prev.includes(quoteId)) {
        return prev.filter(id => id !== quoteId);
      } else if (prev.length < maxQuotes) {
        return [...prev, quoteId];
      } else {
        // 3 seçimden sonra yeni seçim, ilkini çıkar ve yenisini ekle
        return [...prev.slice(1), quoteId];
      }
    });
  };

  const getSelectedPremium = (quote: QuoteForComparison): Premium | undefined => {
    return quote.premiums.find(p => p.installmentNumber === quote.selectedInstallmentNumber);
  };

  const formatGuaranteeValue = (guarantee: Guarantee): string => {
    if (guarantee.valueText) {
      return guarantee.valueText;
    }
    if (guarantee.amount) {
      return guarantee.amount.toLocaleString('tr-TR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }) + ' ₺';
    }
    return '-';
  };

  // Get all unique guarantees from selected quotes
  const getAllGuarantees = () => {
    const allGuarantees = new Map<string, Guarantee>();
    
    selectedQuotes.forEach(quoteId => {
      const quote = quotes.find(q => q.id === quoteId);
      if (quote?.insuranceCompanyGuarantees) {
        quote.insuranceCompanyGuarantees.forEach(guarantee => {
          if (!allGuarantees.has(guarantee.label)) {
            allGuarantees.set(guarantee.label, guarantee);
          }
        });
      }
    });

    return Array.from(allGuarantees.values())
      .filter(guarantee => {
        const value = formatGuaranteeValue(guarantee);
        return value !== 'Belirsiz';
      })
      .sort((a, b) => a.label.localeCompare(b.label));
  };

  const getGuaranteeForQuote = (quoteId: string, guaranteeLabel: string): Guarantee | undefined => {
    const quote = quotes.find(q => q.id === quoteId);
    return quote?.insuranceCompanyGuarantees?.find(g => g.label === guaranteeLabel);
  };

  const selectedQuoteObjects = quotes.filter(quote => selectedQuotes.includes(quote.id));
  const allGuarantees = getAllGuarantees();

  return (
    <StyledDialog
      open={open}
      onClose={onClose}
      maxWidth="lg"
      fullWidth
      fullScreen={false}
      PaperProps={{
        sx: {
          maxHeight: { xs: '100vh', sm: '90vh' },
          width: { xs: '100vw', sm: '90vw', md: '85vw' },
          maxWidth: { xs: 'none', sm: '1200px' },
          borderRadius: { xs: 0, sm: 4 },
          height: { xs: '100vh', sm: 'auto' },
        }
      }}
    >
      <DialogTitle
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          bgcolor: alpha(agencyConfig.theme.primaryColor, 0.05),
          borderBottom: '1px solid',
          borderColor: 'divider',
          py: 2,
          px: 3,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <CompareArrowsIcon color="primary" />
          <Typography variant="h6" fontWeight="bold">
            {title} Karşılaştırması
          </Typography>
        </Box>
        <IconButton
          onClick={onClose}
          sx={{
            color: theme.palette.grey[500],
            '&:hover': { bgcolor: alpha(theme.palette.grey[500], 0.1) }
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ p: 0 }}>
        {/* Quote Selection Section */}
        <Box sx={{ px: 3, py: 3 }}>
          <Typography variant="h6" fontWeight="medium" gutterBottom>
            Karşılaştırmak İstediğiniz Teklifleri Seçin
          </Typography>
          
          {/* Uyarı Mesajı */}
          <Box sx={{
            bgcolor: alpha(theme.palette.info.main, 0.1),
            border: '1px solid',
            borderColor: alpha(theme.palette.info.main, 0.2),
            borderRadius: 1,
            p: 2,
            mb: 2,
            display: 'flex',
            alignItems: 'center',
            gap: 1
          }}>
            <Typography variant="body2" color="info.main">
              ℹ️ En fazla 3 teklif seçebilirsiniz. Dördüncü teklifi seçtiğinizde, ilk seçtiğiniz teklif otomatik olarak kaldırılacaktır.
            </Typography>
          </Box>
          
          {/* Desktop Cards */}
          <Box sx={{ 
            display: { xs: 'none', sm: 'flex' }, 
            flexWrap: 'wrap', 
            gap: 2, 
            mb: 3,
            justifyContent: 'center'
          }}>
            {quotes.map((quote, index) => (
              <CompanyCard
                key={quote.id}
                selected={selectedQuotes.includes(quote.id)}
                onClick={() => handleQuoteSelection(quote.id)}
                sx={{ 
                  width: 220, 
                  flexShrink: 0 
                }}
              >
                {/* Sıra Numarası Badge */}
                <Chip
                  label={`#${index + 1}`}
                  size="small"
                  sx={{
                    position: 'absolute',
                    top: 8,
                    left: 8,
                    backgroundColor: agencyConfig.theme.primaryColor,
                    color: 'white',
                    fontSize: '0.7rem',
                    height: 20,
                    zIndex: 1,
                    fontWeight: 'bold'
                  }}
                />
                
                <CardContent sx={{ p: 2, pt: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                    <Checkbox
                      checked={selectedQuotes.includes(quote.id)}
                      onChange={() => handleQuoteSelection(quote.id)}
                      disabled={false}
                      color="primary"
                      size="small"
                      sx={{ '& .MuiSvgIcon-root': { fontSize: 24 } }}
                    />
                    {quote.logo && (
                      <Box
                        component="img"
                        src={quote.logo}
                        alt={quote.company}
                        sx={{ height: 24, maxWidth: 60, objectFit: 'contain' }}
                      />
                    )}
                  </Box>
                  
                  <Typography variant="subtitle2" fontWeight="bold" gutterBottom sx={{ fontSize: '0.875rem' }}>
                    {quote.company}
                  </Typography>
                  
                  {quote.coverageGroupName && (
                    <Chip
                      label={quote.coverageGroupName}
                      size="small"
                      sx={{
                        backgroundColor: '#ef2027',
                        color: 'white',
                        fontSize: '0.7rem',
                        height: 20,
                        mb: 1
                      }}
                    />
                  )}
                  
                  <Typography variant="h6" color="primary" fontWeight="bold" sx={{ fontSize: '1.25rem' }}>
                    {getSelectedPremium(quote)?.formattedGrossPremium} ₺
                  </Typography>
                  
                  <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.75rem' }}>
                    {quote.selectedInstallmentNumber === 1 
                      ? 'Peşin Ödeme' 
                      : `${quote.selectedInstallmentNumber} Taksit`
                    }
                  </Typography>
                </CardContent>
              </CompanyCard>
            ))}
          </Box>

          {/* Mobile Horizontal Cards */}
          <Box sx={{ display: { xs: 'flex', sm: 'none' }, flexDirection: 'column', gap: 1, mb: 3 }}>
            {quotes.map((quote, index) => (
              <Card 
                key={quote.id}
                onClick={() => handleQuoteSelection(quote.id)}
                sx={{ 
                  border: selectedQuotes.includes(quote.id) ? `2px solid ${agencyConfig.theme.primaryColor}` : '2px solid transparent',
                  backgroundColor: selectedQuotes.includes(quote.id) ? alpha(agencyConfig.theme.primaryColor, 0.05) : 'inherit',
                  cursor: 'pointer',
                  position: 'relative',
                  '&:hover': {
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  },
                }}
              >
                {/* Sıra Numarası Badge */}
                <Chip
                  label={`#${index + 1}`}
                  size="small"
                  sx={{
                    position: 'absolute',
                    top: 8,
                    left: 8,
                    backgroundColor: agencyConfig.theme.primaryColor,
                    color: 'white',
                    fontSize: '0.6rem',
                    height: 18,
                    zIndex: 1,
                    fontWeight: 'bold'
                  }}
                />

                <CardContent sx={{ p: 1.5, pt: 2.5 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    {/* Sol taraf - Checkbox, Logo, Company */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flex: 1 }}>
                      <Checkbox
                        checked={selectedQuotes.includes(quote.id)}
                        onChange={() => handleQuoteSelection(quote.id)}
                        disabled={false}
                        color="primary"
                        size="small"
                        sx={{ '& .MuiSvgIcon-root': { fontSize: 18 } }}
                      />
                      {quote.logo && (
                        <Box
                          component="img"
                          src={quote.logo}
                          alt={quote.company}
                          sx={{ height: 20, maxWidth: 50, objectFit: 'contain' }}
                        />
                      )}
                      <Box>
                        <Typography variant="subtitle2" fontWeight="bold" sx={{ fontSize: '0.8rem', lineHeight: 1.2 }}>
                          {quote.company}
                        </Typography>
                        {quote.coverageGroupName && (
                          <Chip
                            label={quote.coverageGroupName}
                            size="small"
                            sx={{
                              backgroundColor: '#ef2027',
                              color: 'white',
                              fontSize: '0.55rem',
                              height: 16,
                              mt: 0.5
                            }}
                          />
                        )}
                      </Box>
                    </Box>

                    {/* Sağ taraf - Fiyat */}
                    <Box sx={{ textAlign: 'right' }}>
                      <Typography variant="h6" color="primary" fontWeight="bold" sx={{ fontSize: '0.9rem' }}>
                        {getSelectedPremium(quote)?.formattedGrossPremium} ₺
                      </Typography>
                      <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.7rem' }}>
                        {quote.selectedInstallmentNumber === 1 
                          ? 'Peşin' 
                          : `${quote.selectedInstallmentNumber} Taksit`
                        }
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>

        {/* Comparison Table - only show if quotes are selected */}
        {selectedQuotes.length > 0 && (
          <Box sx={{ px: 3, pb: 3 }}>
            <Typography variant="h6" fontWeight="medium" gutterBottom>
              Seçili Teklifler Karşılaştırması
            </Typography>

            {/* Desktop Table */}
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
              <TableContainer component={Paper} sx={{ borderRadius: 2, overflow: 'hidden' }}>
                <Table stickyHeader>
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{ fontWeight: 'bold', bgcolor: 'grey.50', minWidth: 200 }}>
                        Özellik / Teminat
                      </TableCell>
                      {selectedQuoteObjects.map((quote) => (
                        <TableCell
                          key={quote.id}
                          align="center"
                          sx={{ fontWeight: 'bold', bgcolor: 'grey.50', minWidth: 180 }}
                        >
                          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1, position: 'relative' }}>
                            {/* Sıra Numarası */}
                            <Chip
                              label={`#${quotes.findIndex(q => q.id === quote.id) + 1}`}
                              size="small"
                              sx={{
                                position: 'absolute',
                                top: -12,
                                left: '50%',
                                transform: 'translateX(-50%)',
                                backgroundColor: agencyConfig.theme.primaryColor,
                                color: 'white',
                                fontSize: '0.7rem',
                                height: 20,
                                fontWeight: 'bold'
                              }}
                            />
                            {quote.logo && (
                              <Box
                                component="img"
                                src={quote.logo}
                                alt={quote.company}
                                sx={{ height: 24, maxWidth: 80, objectFit: 'contain', mt: 1 }}
                              />
                            )}
                            <Typography variant="subtitle2" fontWeight="bold">
                              {quote.company}
                            </Typography>
                            {quote.coverageGroupName && (
                              <Chip
                                label={quote.coverageGroupName}
                                size="small"
                                sx={{
                                  backgroundColor: '#ef2027',
                                  color: 'white',
                                  fontSize: '0.7rem',
                                  height: 20
                                }}
                              />
                            )}
                          </Box>
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {/* Price Row */}
                    <TableRow sx={{ bgcolor: alpha(theme.palette.primary.main, 0.05) }}>
                      <TableCell sx={{ fontWeight: 'bold' }}>
                        Fiyat
                      </TableCell>
                      {selectedQuoteObjects.map((quote) => (
                        <TableCell key={quote.id} align="center">
                          <Typography variant="h6" color="primary" fontWeight="bold">
                            {getSelectedPremium(quote)?.formattedGrossPremium} ₺
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            {quote.selectedInstallmentNumber === 1 
                              ? 'Peşin Ödeme' 
                              : `${quote.selectedInstallmentNumber} Taksit`
                            }
                          </Typography>
                        </TableCell>
                      ))}
                    </TableRow>

                    {/* Guarantee Rows */}
                    {allGuarantees.map((guarantee) => (
                      <TableRow key={guarantee.label}>
                        <TableCell sx={{ fontWeight: 'medium' }}>
                          {guarantee.label}
                        </TableCell>
                        {selectedQuoteObjects.map((quote) => {
                          const quoteGuarantee = getGuaranteeForQuote(quote.id, guarantee.label);
                          const value = quoteGuarantee ? formatGuaranteeValue(quoteGuarantee) : '-';
                          const isIncluded = value !== '-' && value !== 'Dahil Değil' && value !== 'Yok';
                          
                          return (
                            <TableCell key={quote.id} align="center">
                              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0.5 }}>
                                {isIncluded && (
                                  <CheckCircleIcon 
                                    color="success" 
                                    fontSize="small" 
                                  />
                                )}
                                <Typography 
                                  variant="body2" 
                                  color={isIncluded ? 'text.primary' : 'text.secondary'}
                                  fontWeight={isIncluded ? 'medium' : 'normal'}
                                >
                                  {value}
                                </Typography>
                              </Box>
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>

            {/* Mobile Table with Fixed Left Column */}
            <Box sx={{ display: { xs: 'block', md: 'none' } }}>
              <Box sx={{ 
                overflowX: 'auto',
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 1
              }}>
                <Box sx={{ 
                  display: 'table',
                  width: 'max-content',
                  minWidth: '100%'
                }}>
                  
                  {/* Header Row */}
                  <Box sx={{ display: 'table-row', bgcolor: 'grey.100' }}>
                    <Box sx={{ 
                      display: 'table-cell',
                      width: 120,
                      p: 1,
                      borderRight: '1px solid',
                      borderBottom: '1px solid',
                      borderColor: 'divider',
                      verticalAlign: 'middle'
                    }}>
                      <Typography variant="subtitle2" fontWeight="bold" fontSize="0.75rem">
                        Özellik / Teminat
                      </Typography>
                    </Box>
                    {selectedQuoteObjects.map((quote) => (
                      <Box key={quote.id} sx={{ 
                        display: 'table-cell',
                        minWidth: 140,
                        p: 1,
                        borderRight: '1px solid',
                        borderBottom: '1px solid',
                        borderColor: 'divider',
                        verticalAlign: 'middle',
                        textAlign: 'center'
                      }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0.5 }}>
                          <Chip
                            label={`#${quotes.findIndex(q => q.id === quote.id) + 1}`}
                            size="small"
                            sx={{
                              backgroundColor: agencyConfig.theme.primaryColor,
                              color: 'white',
                              fontSize: '0.6rem',
                              height: 16,
                              fontWeight: 'bold'
                            }}
                          />
                          {quote.logo && (
                            <Box component="img" src={quote.logo} alt={quote.company} sx={{ height: 14, maxWidth: 45, objectFit: 'contain' }} />
                          )}
                          <Typography variant="caption" fontWeight="bold" fontSize="0.65rem" textAlign="center" lineHeight={1.1}>
                            {quote.company}
                          </Typography>
                          {quote.coverageGroupName && (
                            <Chip
                              label={quote.coverageGroupName}
                              size="small"
                              sx={{ backgroundColor: '#ef2027', color: 'white', fontSize: '0.55rem', height: 14 }}
                            />
                          )}
                        </Box>
                      </Box>
                    ))}
                  </Box>

                  {/* Price Row */}
                  <Box sx={{ display: 'table-row', bgcolor: alpha(theme.palette.primary.main, 0.05) }}>
                    <Box sx={{ 
                      display: 'table-cell',
                      p: 1.5,
                      borderRight: '1px solid',
                      borderBottom: '1px solid',
                      borderColor: 'divider',
                      verticalAlign: 'middle'
                    }}>
                      <Typography variant="body2" fontWeight="bold" fontSize="0.75rem">
                        Fiyat
                      </Typography>
                    </Box>
                    {selectedQuoteObjects.map((quote) => (
                      <Box key={quote.id} sx={{ 
                        display: 'table-cell',
                        p: 1.5,
                        borderRight: '1px solid',
                        borderBottom: '1px solid',
                        borderColor: 'divider',
                        verticalAlign: 'middle',
                        textAlign: 'center'
                      }}>
                        <Typography variant="body2" color="primary" fontWeight="bold" fontSize="0.75rem">
                          {getSelectedPremium(quote)?.formattedGrossPremium} ₺
                        </Typography>
                        <Typography variant="caption" color="text.secondary" fontSize="0.65rem">
                          {quote.selectedInstallmentNumber === 1 ? 'Peşin' : `${quote.selectedInstallmentNumber} Taksit`}
                        </Typography>
                      </Box>
                    ))}
                  </Box>

                  {/* Guarantee Rows */}
                  {allGuarantees.map((guarantee, index) => (
                    <Box key={guarantee.label} sx={{ display: 'table-row' }}>
                      <Box sx={{ 
                        display: 'table-cell',
                        p: 1.5,
                        borderRight: '1px solid',
                        borderBottom: index < allGuarantees.length - 1 ? '1px solid' : 'none',
                        borderColor: 'divider',
                        verticalAlign: 'middle'
                      }}>
                        <Typography variant="body2" fontWeight="medium" fontSize="0.7rem" lineHeight={1.2}>
                          {guarantee.label}
                        </Typography>
                      </Box>
                      {selectedQuoteObjects.map((quote) => {
                        const quoteGuarantee = getGuaranteeForQuote(quote.id, guarantee.label);
                        const value = quoteGuarantee ? formatGuaranteeValue(quoteGuarantee) : '-';
                        const isIncluded = value !== '-' && value !== 'Dahil Değil' && value !== 'Yok';

                        return (
                          <Box key={quote.id} sx={{ 
                            display: 'table-cell',
                            p: 1.5,
                            borderRight: '1px solid',
                            borderBottom: index < allGuarantees.length - 1 ? '1px solid' : 'none',
                            borderColor: 'divider',
                            verticalAlign: 'middle',
                            textAlign: 'center'
                          }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                              {isIncluded && (
                                <CheckCircleIcon color="success" sx={{ fontSize: 14, mb: 0.5 }} />
                              )}
                              <Typography 
                                variant="body2" 
                                color={isIncluded ? 'text.primary' : 'text.secondary'}
                                fontWeight={isIncluded ? 'medium' : 'normal'}
                                fontSize="0.7rem"
                                lineHeight={1.2}
                              >
                                {value}
                              </Typography>
                            </Box>
                          </Box>
                        );
                      })}
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          </Box>
        )}
      </DialogContent>

      <DialogActions sx={{ p: 3, bgcolor: 'grey.50' }}>
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          width: '100%',
          flexDirection: { xs: 'column', sm: 'row' },
          gap: 2
        }}>
          <Typography variant="caption" color="text.secondary" sx={{ maxWidth: 400 }}>
            Karşılaştırma tablosu, seçtiğiniz tekliflerin teminat detaylarını gösterir. 
            Satın almak istediğiniz teklifi seçerek devam edebilirsiniz.
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button variant="outlined" onClick={onClose}>
              Kapat
            </Button>
          </Box>
        </Box>
      </DialogActions>
    </StyledDialog>
  );
};

export default QuoteComparisonModal;