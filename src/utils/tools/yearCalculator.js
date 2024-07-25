// @param {object} item to calculate 
// @returns {string} - month's sum
 
export const yearCalculator = (data) => {
  return Object.values(data).reduce((sum, value) => sum + value, 0);
};
