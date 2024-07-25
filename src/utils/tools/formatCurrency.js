// @param {number|string} amount 
// @returns {string} - formatted amount with the € sign
 
export const formatCurrency = (amount) => {
  const formatter = new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
  });

  return formatter.format(amount);
};
