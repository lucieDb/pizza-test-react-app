//validations for pizzeria fields
// @param {string} title 
// @param {number, non-zero decimal} jan -> dec 

import PropTypes from 'prop-types';
import { pizzeriaShape } from './propTypesPizzeria';

// Regular expression to check if a number is a non-zero decimal
const decimalRegex = /^-?\d+(\.\d+)?$/;

// Validate PropTypes
const validatePropTypes = (propTypes, values, componentName) => {
  const propTypeError = PropTypes.checkPropTypes(propTypes, values, 'prop', componentName);
  if (propTypeError) {
    console.error(`PropTypes validation error: ${propTypeError}`);
    return false;
  }
  return true;
};

export const isValidPizzeria = (pizzeria) => {
  let isValid = true;

  // Validate with PropTypes
  const propTypesValid = validatePropTypes({ pizzeria: pizzeriaShape }, { pizzeria }, 'isValidPizzeria');
  if (!propTypesValid) {
    isValid = false;
  }

  // Additional custom validation for non-zero decimal numbers and unique/unempty/string type for title
  Object.keys(pizzeria.revenue).forEach(field => {

    const revenueValue = pizzeria.revenue[field];
    const titleValue = pizzeria.title;
    if (typeof revenueValue !== 'number' || isNaN(revenueValue) || !decimalRegex.test(revenueValue.toString()) || revenueValue === 0 ) {
      throw new Error(`Invalid Pizzeria data for field ${field}, it must be a non-zero decimal number:`, pizzeria);
    }
    if (typeof titleValue !== 'string' || titleValue.length === 0 ) {
      throw new Error(`Invalid Pizzeria data for field title, it must be a string type:`, pizzeria);
    }
  });

  return isValid;
};
