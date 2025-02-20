import Home from './Home';
import { render, screen, fireEvent } from '@testing-library/react';
import { formatCurrency } from 'utils/tools/formatCurrency';

//TODO : fix alias for the test part
//If you want to run the tests, please change the path import by the complet
//path in Home.test.js and Home.js,
//e.g :
//from `import { formatCurrency } from 'utils/tools/formatCurrency';`
//to `import { formatCurrency } from '../../utils/tools/formatCurrency';`

test('renders Home component with initial data', () => {
  const mockYearlyData = {
    2024: {
      data:
        [
          {
            title: 'Pizzeria A',
            revenue: { jan: 4578.57, feb: 559557, mar: 45.75, apr: 85, may: 1560.85, jun: 1.50, jul: 562, aug: 99, sep: 74.5, oct: 66.05, nov: 74, dec: 349 },
            totalRevenue: 567053.22
          },
          {
            title: 'Pizzeria B',
            revenue: { jan: 4578.57, feb: 559557, mar: 1, apr: 85, may: 1560.85, jun: 1.50, jul: 562, aug: 99, sep: 74.5, oct: 66.05, nov: 74, dec: 349 },
            totalRevenue: 567008.47
          }
        ],
      count: 2,
      average: 567030.84,
      total: 1134061.69
    }
  };

  render(<Home yearlyData={mockYearlyData} />);

  expect(screen.getByText(/Chiffre d'affaire/i)).toBeInTheDocument();
  expect(screen.getByText(/2 pizzerias trouvées/i)).toBeInTheDocument();
  expect(screen.getByRole('table')).toBeInTheDocument();
  expect(screen.getByText(/CA Moyen/i)).toBeInTheDocument();
});

test('changes year and updates data', () => {
  const mockYearlyData = {
    2023: {
      data:
        [
          {
            title: 'Pizzeria R',
            revenue: { jan: 4578.57, feb: 559557, mar: 45.75, apr: 85, may: 1560.85, jun: 1.50, jul: 562, aug: 99, sep: 74.5, oct: 66.05, nov: 74, dec: 349 },
            totalRevenue: 567053.22
          }
        ],
      count: 1,
      average: 567053.22,
      total: 567053.22
    },
    2024: {
      data:
        [
          {
            title: 'Pizzeria Z',
            revenue: { jan: 4578.57, feb: 559557, mar: 1, apr: 85, may: 1560.85, jun: 1.50, jul: 562, aug: 99, sep: 74.5, oct: 66.05, nov: 74, dec: 349 },
            totalRevenue: 567008.47
          }
        ],
      count: 1,
      average: 567008.47,
      total: 567008.47
    }
  };

  render(<Home yearlyData={mockYearlyData} />);

  // simulate user's choice with fireEvent
  // combobox : it's able to select '2023' in the selectorYear
  fireEvent.change(screen.getByRole('combobox'), { target: { value: '2023' } });
  expect(screen.getByText(/1 pizzerias trouvées/i)).toBeInTheDocument();
  expect(screen.getByText(/CA Moyen/i)).toBeInTheDocument();
});

test('renders table columns correctly', () => {
  const mockYearlyData = {
    2024: {
      data:
        [
          {
            title: 'Pizzeria B',
            revenue: { jan: 4578.57, feb: 559557, mar: 1, apr: 85, may: 1560.85, jun: 1.50, jul: 562, aug: 99, sep: 74.5, oct: 66.05, nov: 74, dec: 349 },
            totalRevenue: 567008.47
          }
        ],
      count: 1,
      average: 567008.47,
      total: 567008.47
    }
  };

  render(<Home yearlyData={mockYearlyData} />);

  // Verify table's column
  expect(screen.getByText(/Janvier/i)).toBeInTheDocument();
  expect(screen.getByText(/Février/i)).toBeInTheDocument();
  expect(screen.getByText(/Mars/i)).toBeInTheDocument();
  expect(screen.getByText(/Avril/i)).toBeInTheDocument();
  expect(screen.getByText(/Mai/i)).toBeInTheDocument();
  expect(screen.getByText(/Juin/i)).toBeInTheDocument();
  expect(screen.getByText(/Juillet/i)).toBeInTheDocument();
  expect(screen.getByText(/Août/i)).toBeInTheDocument();
  expect(screen.getByText(/Septembre/i)).toBeInTheDocument();
  expect(screen.getByText(/Octobre/i)).toBeInTheDocument();
  expect(screen.getByText(/Novembre/i)).toBeInTheDocument();
  expect(screen.getByText(/Décembre/i)).toBeInTheDocument();
});

test('formats number to currency correctly', () => {
  const amount = 1207.6;
  const formattedAmount = formatCurrency(amount);
  
  // // Define the expected result with a non-breaking space
  const expectedFormattedAmount = '1\u202f207,60\xa0€';
  
  expect(formattedAmount).toBe(expectedFormattedAmount);
});

test('formatCurrency : values are rendered correctly', () => {
  const mockYearlyData = {
    2024: {
      data:
        [
          {
            title: 'Pizzeria B',
            revenue: { jan: 4578.57, feb: 559557, mar: 1, apr: 85, may: 1560.85, jun: 1.50, jul: 562, aug: 99, sep: 74.5, oct: 66.05, nov: 74, dec: 349 },
            totalRevenue: 567008.47
          }
        ],
      count: 1,
      average: 567008.47,
      total: 567008.47
    }
  };

  render(<Home yearlyData={mockYearlyData} />);

  expect(screen.getByText('567 008,47 €')).toBeInTheDocument();
  expect(screen.getByText('1,00 €')).toBeInTheDocument();
  expect(screen.getByText('74,50 €')).toBeInTheDocument();
});
