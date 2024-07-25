import PropTypes from 'prop-types';

// Define PropTypes for a single pizzeria
export const pizzeriaPropTypes = PropTypes.shape({
  title: PropTypes.string.isRequired,
  revenue: PropTypes.shape({
    jan: PropTypes.number.isRequired,
    feb: PropTypes.number.isRequired,
    mar: PropTypes.number.isRequired,
    apr: PropTypes.number.isRequired,
    may: PropTypes.number.isRequired,
    jun: PropTypes.number.isRequired,
    jul: PropTypes.number.isRequired,
    aug: PropTypes.number.isRequired,
    sep: PropTypes.number.isRequired,
    oct: PropTypes.number.isRequired,
    nov: PropTypes.number.isRequired,
    dec: PropTypes.number.isRequired,
  }).isRequired,
  totalRevenue: PropTypes.number.isRequired,
});

// Define PropTypes for the yearly data
export const yearlyDataPropTypes = PropTypes.objectOf(
  PropTypes.shape({
    data: PropTypes.arrayOf(pizzeriaPropTypes).isRequired,
    total: PropTypes.number.isRequired,
    average: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
  }).isRequired
);

// Define the shape of the revenue object
export const revenueShape = PropTypes.shape({
  jan: PropTypes.number.isRequired,
  feb: PropTypes.number.isRequired,
  mar: PropTypes.number.isRequired,
  apr: PropTypes.number.isRequired,
  may: PropTypes.number.isRequired,
  jun: PropTypes.number.isRequired,
  jul: PropTypes.number.isRequired,
  aug: PropTypes.number.isRequired,
  sep: PropTypes.number.isRequired,
  oct: PropTypes.number.isRequired,
  nov: PropTypes.number.isRequired,
  dec: PropTypes.number.isRequired,
});
  
// Define the shape of a pizzeria object
export const pizzeriaShape = PropTypes.shape({
  title: PropTypes.string.isRequired,
  revenue: revenueShape.isRequired,
});
