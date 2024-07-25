import React, { useState } from 'react';
import YearSelector from '../yearSelector';
import { formatCurrency  } from 'utils/tools/formatCurrency';
import { yearlyDataPropTypes } from 'utils/validations/propTypesPizzeria';
import { Table, Row, Col } from 'antd';
import { ArrowDownOutlined } from '@ant-design/icons';
import 'styles/Home.css';

const Home = ({ yearlyData }) => {
  // get current year
  const currentYear = new Date().getFullYear().toString();
  //by default current year otherwise first year available
  const initialYear = Object.keys(yearlyData).includes(currentYear) ? currentYear : Object.keys(yearlyData)[0];
  // selectedYear = actual value
  // setSelectedYear = update value
  // initialYear = init value
  const [selectedYear, setSelectedYear] = useState(initialYear);

  // change select
  const handleYearChange = (value) => {
    setSelectedYear(value);
  };

  // data for selected year
  const yearData = yearlyData[selectedYear];

  const columns = [
    { title: '', dataIndex: 'title', key: 'title', width: 150, align: 'start' },
    { title: <span className='bold-text'>Janvier</span>, dataIndex: ['revenue', 'jan'], key: 'jan', width: 150, align: 'end', render: formatCurrency },
    { title: <span className='bold-text'>Février</span>, dataIndex: ['revenue', 'feb'], key: 'feb', width: 150, align: 'end', render: formatCurrency },
    { title: <span className='bold-text'>Mars</span>, dataIndex: ['revenue', 'mar'], key: 'mar', width: 150, align: 'end', render: formatCurrency },
    { title: <span className='bold-text'>Avril</span>, dataIndex: ['revenue', 'apr'], key: 'apr', width: 150, align: 'end', render: formatCurrency },
    { title: <span className='bold-text'>Mai</span>, dataIndex: ['revenue', 'may'], key: 'may', width: 150, align: 'end', render: formatCurrency },
    { title: <span className='bold-text'>Juin</span>, dataIndex: ['revenue', 'jun'], key: 'jun', width: 150, align: 'end', render: formatCurrency },
    { title: <span className='bold-text'>Juillet</span>, dataIndex: ['revenue', 'jul'], key: 'jul',width: 150,  align: 'end', render: formatCurrency },
    { title: <span className='bold-text'>Août</span>, dataIndex: ['revenue', 'aug'], key: 'aug', width: 150, align: 'end', render: formatCurrency },
    { title: <span className='bold-text'>Septembre</span>, dataIndex: ['revenue', 'sep'], key: 'sep', width: 150, align: 'end', render: formatCurrency },
    { title: <span className='bold-text'>Octobre</span>, dataIndex: ['revenue', 'oct'], key: 'oct', width: 150, align: 'end', render: formatCurrency },
    { title: <span className='bold-text'>Novembre</span>, dataIndex: ['revenue', 'nov'], key: 'nov', width: 150, align: 'end', render: formatCurrency },
    { title: <span className='bold-text'>Décembre</span>, dataIndex: ['revenue', 'dec'], key: 'dec', width: 150, align: 'end', render: formatCurrency },
    { title: <span className='bold-text'><ArrowDownOutlined /> Total</span>, dataIndex: 'totalRevenue', key: 'totalRevenue', width: 150, align: 'center', render: (text, record) => (
      <span className={parseFloat(record.totalRevenue) > parseFloat(yearData.average) ? 'above-average' : 'below-average'}>
        {formatCurrency(record.totalRevenue)}
      </span>
    )}
  ];

  return (
    <div style={{ padding: '30px' }}>
      <h1>Chiffre d'affaire</h1>
      <Row>
        <Col span={24}>
          <YearSelector
            years={Object.keys(yearlyData)}
            selectedYear={selectedYear}
            handleYearChange={handleYearChange} 
          />
          {yearData.count === 0 ? (
            <p>Il n'y a aucune donnée pour l'année sélectionnée.</p>
          ) : (
            <>
              <p>{yearData.count} pizzerias trouvées</p>
              <Table
                columns={columns}
                dataSource={yearData.data}
                rowKey='title'
                pagination={false}
                bordered={true}
              />
              <h3 style={{ textAlign: 'end' }}>CA Moyen : {formatCurrency(yearData.average)}</h3>
            </>
          )}
        </Col>
      </Row>
    </div>
  );
};

Home.propTypes = {
  yearlyData: yearlyDataPropTypes.isRequired,
};

export default Home;
