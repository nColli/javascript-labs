import { getNombreEjemploUsuario } from './index'

test('nombre debe ser Juan', () => {
    expect(getNombreEjemploUsuario()).toBe('Juan')
})