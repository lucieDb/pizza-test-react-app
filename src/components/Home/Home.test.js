import Home from './Home';
import { render, screen, fireEvent } from '@testing-library/react';
import { formatCurrency } from 'utils/tools/formatCurrency';

test('renders Home component with initial data', () => {
  const mockYearlyData = {
    2024: {
      data: [
        {
          title: 'Pizzeria A',
          revenue: { jan: 4578.57, feb: 559557, mar: 45.75, apr: 85, may: 1560.85, jun: 1.50, jul: 562.95, aug: 99.99, sep: 74.5, oct: 66.05, nov: 74.63, dec: 3495.15 },
          totalRevenue: 567045.39
        },
        {
          title: 'Pizzeria B',
          revenue: { jan: 4578.57, feb: 559557, mar: 45.75, apr: 85, may: 1560.85, jun: 1.50, jul: 562.95, aug: 99.99, sep: 74.5, oct: 66.05, nov: 74.63, dec: 3495.15 },
          totalRevenue: 567045.39
        },
      ],
      count: 2,
      average: 567045.39,
      total: 12
    }
  };

  console.log("mockYearlyData value: ", mockYearlyData)
  render(<Home yearlyData={mockYearlyData} />);

  expect(screen.getByText(/Chiffre d'affaire/i)).toBeInTheDocument();
  expect(screen.getByText(/2 pizzerias trouvées/i)).toBeInTheDocument();
  expect(screen.getByRole('table')).toBeInTheDocument();
  expect(screen.getByText(/CA Moyen/i)).toBeInTheDocument();
});

test('changes year and updates data', () => {
  const mockYearlyData = {
    2024: {
      data: [{ title: 'Pizzeria A', revenue: { jan: 4578.57, feb: 559557, mar: 45.75, apr: 85, may: 1560.85, jun: 1.50, jul: 562.95, aug: 99.99, sep: 74.5, oct: 66.05, nov: 74.63, dec: 3495.15 }, totalRevenue: 567045.39 }],
      count: 1,
      average: 567045.39,
      total: 12
    }
  };

  render(<Home yearlyData={mockYearlyData} />);

  // simulate user's choice with fireEvent
  fireEvent.change(screen.getByRole('combobox'), { target: { value: '2023' } });
  expect(screen.getByText(/1 pizzerias trouvées/i)).toBeInTheDocument();
  expect(screen.getByText(/CA Moyen/i)).toBeInTheDocument();
});

test('renders table columns correctly', () => {
  const mockYearlyData = {
    2024: {
      data: [{ title: 'Pizzeria A', revenue: { jan: 4578.57, feb: 559557, mar: 45.75, apr: 85, may: 1560.85, jun: 1.50, jul: 562.95, aug: 99.99, sep: 74.5, oct: 66.05, nov: 74.63, dec: 3495.15 }, totalRevenue: 567045.39 }],
      count: 1,
      average: 567045.39,
      total: 12
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
