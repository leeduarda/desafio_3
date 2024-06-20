//Transformando o preço para Rp

export const formatPrice = (num: number) => 
    new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
}).format(num);