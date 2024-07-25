import React from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';

const { Option } = Select;

const YearSelector = ({ years, selectedYear, handleYearChange }) => {
  return (
    <div>
      <label htmlFor='year-select'>Année : </label>
      <Select id='year-select' value={selectedYear} onChange={handleYearChange} style={{ width: 100}}>
        {years.map(year => (
          <Option key={year} value={year}>
            {year}
          </Option>
        ))}
      </Select>
    </div>
  );
};

YearSelector.propTypes = {
  years: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedYear: PropTypes.string.isRequired,
  handleYearChange: PropTypes.func.isRequired
};

export default YearSelector;
