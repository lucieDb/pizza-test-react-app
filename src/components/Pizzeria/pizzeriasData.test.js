import Pizzerias from './pizzeriasData';

test('should have data for 2024 and 2023', () => {
  expect(Pizzerias).toHaveProperty('2024');
  expect(Pizzerias).toHaveProperty('2023');
});

test('2024 data should contain 3 pizzerias', () => {
  expect(Pizzerias['2024']).toHaveLength(3);
});

test('2023 data should contain 3 pizzerias', () => {
  expect(Pizzerias['2023']).toHaveLength(2);
});

test('Pizzeria A revenue for January 2024 should be 4578.57', () => {
  const pizzeriaA = Pizzerias['2024'].find(p => p.title === 'Pizzeria A');
  expect(pizzeriaA.revenue.jan).toBe(4578.57);
});

test('Pizzeria B revenue for December 2024 should be 715.81', () => {
  const pizzeriaB = Pizzerias['2024'].find(p => p.title === 'Pizzeria B');
  expect(pizzeriaB.revenue.dec).toBe(715.81);
});

test('Pizzeria C revenue for October 2024 should be 7866.05', () => {
  const pizzeriaC = Pizzerias['2024'].find(p => p.title === 'Pizzeria C');
  expect(pizzeriaC.revenue.oct).toBe(7866.05);
});

test('Pizzeria Y revenue for March 2023 should be 183', () => {
  const pizzeriaY = Pizzerias['2023'].find(p => p.title === 'Pizzeria Y');
  expect(pizzeriaY.revenue.mar).toBe(183);
});

test('Pizzeria Z revenue for January 2023 should be 1284', () => {
  const pizzeriaZ = Pizzerias['2023'].find(p => p.title === 'Pizzeria Z');
  expect(pizzeriaZ.revenue.jan).toBe(1284);
});
