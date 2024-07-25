import Pizzerias from './pizzeriasData';
import { yearCalculator } from 'utils/tools/yearCalculator';
import { isValidPizzeria } from 'utils/validations/validPizzeria';

//build new array for each year with totals, averages and number of pizzerias
export const calculateYearlyData = (yearlyData) => {
  return Object.keys(yearlyData).reduce((acc, year) => {
    try {
      const dataForYear = yearlyData[year].filter(isValidPizzeria);
      // calculate totals and averages
      const totalRevenueForYear = dataForYear.reduce((sum, pizzeria) => sum + parseFloat(yearCalculator(pizzeria.revenue)), 0);
      const averageRevenueForYear = totalRevenueForYear / dataForYear.length;
  
      //add new data to the accumulator
      acc[year] = { data : dataForYear.map(pizzeria => ({
        ...pizzeria,
        totalRevenue: yearCalculator(pizzeria.revenue)
      })),
        //turnover for the year
        total: totalRevenueForYear,
        //average for the year
        average: averageRevenueForYear,
        //number of pizzerias
        count: dataForYear.length
      };      
    } catch (error) {
      console.error(`Calculation error for the year ${year}:`, error);
      acc[year] = { data: [], total: 0, average: 0, count: 0 };
    }
    return acc;
  }, {});
};

const yearlyData = calculateYearlyData(Pizzerias);

export { yearlyData };
