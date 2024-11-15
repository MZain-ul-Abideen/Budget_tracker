import { calculateBudget } from './calculateBudget';

test('calculateBudget adds income and subtracts expenses', () => {
  const result = calculateBudget(1000, [200, 300]);
  expect(result).toBe(500);
});
