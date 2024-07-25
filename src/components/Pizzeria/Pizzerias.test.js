import Pizzerias from './pizzeriasData';
import { yearCalculator } from '../../utils/tools/yearCalculator';
import { isValidPizzeria } from '../../utils/validations/validPizzeria';
import { calculateYearlyData } from './Pizzerias';

test('when calculate total revenue for the year 2024', () => {
  const data = calculateYearlyData(Pizzerias);
  const total2024 = Pizzerias['2024'].reduce((sum, pizzeria) => sum + parseFloat(yearCalculator(pizzeria.revenue)), 0);
  expect(data['2024'].total).toBe(total2024);
});

test('when calculate average revenue for the year 2024', () => {
  const data = calculateYearlyData(Pizzerias);
  const total2024 = Pizzerias['2024'].reduce((sum, pizzeria) => sum + parseFloat(yearCalculator(pizzeria.revenue)), 0);
  const average2024 = total2024 / Pizzerias['2024'].length;
  expect(data['2024'].average).toBe(average2024);
});

test('when count the number of valid pizzerias for the year 2024', () => {
  const data = calculateYearlyData(Pizzerias);
  const validPizzerias2024 = Pizzerias['2024'].filter(isValidPizzeria).length;
  expect(data['2024'].count).toBe(validPizzerias2024);
});

test('when something went wrong: catch error', () => {
  console.error = jest.fn(); // Mock console.error
  const erroneousData = {
    2024: [ 
      ...Pizzerias['2024'], {
        title: 'Nope',
        revenue: {
          jan: '1284',
          feb: 50.75,
          mar: 0,
          apr: -40453.17,
          may: 150,
          jun: 97.50,
          jul: 562.95,
          aug: 1779,
          sep: 127.67,
          oct: 676.75,
          nov: null,
          dec: 715.81
        },
      },
    ]
  };

  const data = calculateYearlyData(erroneousData);
  const validPizzerias2024 = Pizzerias['2024'].filter(isValidPizzeria).length;
  expect(console.error).toHaveBeenCalled();
  //data['2024'].count = 0 beacause it's Erroneous Pizzeria data
  //there are 3 valid pizzerias data in PizzeriaData.js
  //expect(0+3).toBe(3)
  expect((data['2024'].count) + validPizzerias2024).toBe(validPizzerias2024);
});
