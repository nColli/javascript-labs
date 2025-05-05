"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const suma_1 = require("./suma");
test('suma de 2 + 4 debe ser 6', () => {
    expect((0, suma_1.suma)(2, 4)).toBe(6);
});
describe('multiples sumas', () => {
    test('sumar 1 + 1 debe dar 2', () => {
        expect((0, suma_1.suma)(1, 1)).toBe(2);
    });
    test('sumar 0 + 0 debe dar 0', () => {
        expect((0, suma_1.suma)(0, 0)).toBe(0);
    });
});
