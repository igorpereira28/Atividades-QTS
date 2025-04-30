import { Triangulo } from './triangulo';

describe('Testes para Triângulos', () => {
    // Requisito 1
    test('CT1: Triângulo escaleno válido (3, 4, 5)', () => {
        expect(Triangulo.verificarTipo(3, 4, 5)).toBe("Triângulo escaleno");
    });

    // Requisito 2
    test('CT2: Triângulo isósceles válido (5, 5, 7)', () => {
        expect(Triangulo.verificarTipo(5, 5, 7)).toBe("Triângulo isósceles");
    });

    // Requisito 3
    test('CT3: Triângulo equilátero válido (6, 6, 6)', () => {
        expect(Triangulo.verificarTipo(6, 6, 6)).toBe("Triângulo equilátero");
    });

    // Requisito 4
    test('CT4.1: Isósceles válido (a=b) (5, 5, 7)', () => {
        expect(Triangulo.verificarTipo(5, 5, 7)).toBe("Triângulo isósceles");
    });

    test('CT4.2: Isósceles válido (a=c) (5, 7, 5)', () => {
        expect(Triangulo.verificarTipo(5, 7, 5)).toBe("Triângulo isósceles");
    });

    test('CT4.3: Isósceles válido (b=c) (7, 5, 5)', () => {
        expect(Triangulo.verificarTipo(7, 5, 5)).toBe("Triângulo isósceles");
    });

    // Requisito 5
    test('CT5: Valor zero (0, 4, 5)', () => {
        expect(Triangulo.verificarTipo(0, 4, 5)).toBe("Não é um triângulo válido (valor zero ou negativo)");
    });

    // Requisito 6
    test('CT6: Valor negativo (3, -4, 5)', () => {
        expect(Triangulo.verificarTipo(3, -4, 5)).toBe("Não é um triângulo válido (valor zero ou negativo)");
    });

    // Requisito 7
    test('CT7.1: a + b = c (2, 3, 5)', () => {
        expect(Triangulo.verificarTipo(2, 3, 5)).toBe("Não é um triângulo válido (a soma de dois lados não é maior que o terceiro)");
    });

    test('CT7.2: a + c = b (2, 5, 3)', () => {
        expect(Triangulo.verificarTipo(2, 5, 3)).toBe("Não é um triângulo válido (a soma de dois lados não é maior que o terceiro)");
    });

    test('CT7.3: b + c = a (5, 2, 3)', () => {
        expect(Triangulo.verificarTipo(5, 2, 3)).toBe("Não é um triângulo válido (a soma de dois lados não é maior que o terceiro)");
    });

    // Requisito 9
    test('CT9.1: a + b < c (1, 2, 5)', () => {
        expect(Triangulo.verificarTipo(1, 2, 5)).toBe("Não é um triângulo válido (a soma de dois lados não é maior que o terceiro)");
    });

    test('CT9.2: a + c < b (1, 5, 2)', () => {
        expect(Triangulo.verificarTipo(1, 5, 2)).toBe("Não é um triângulo válido (a soma de dois lados não é maior que o terceiro)");
    });

    test('CT9.3: b + c < a (5, 1, 2)', () => {
        expect(Triangulo.verificarTipo(5, 1, 2)).toBe("Não é um triângulo válido (a soma de dois lados não é maior que o terceiro)");
    });

    // Requisito 11
    test('CT11: Todos zeros (0, 0, 0)', () => {
        expect(Triangulo.verificarTipo(0, 0, 0)).toBe("Não é um triângulo válido (valor zero ou negativo)");
    });
});