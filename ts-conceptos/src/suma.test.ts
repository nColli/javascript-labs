import { suma } from "./suma";

test('suma de 2 + 4 debe ser 6', () => {
  expect(suma(2, 4)).toBe(6);
});


describe('multiples sumas', () => {
  test('sumar 1 + 1 debe dar 2', () => {
    expect(suma(1, 1)).toBe(2);
  })

  test('sumar 0 + 0 debe dar 0', () => {
    expect(suma(0, 0)).toBe(0);
  })
})