export class Triangulo {
    static verificarTipo(a: number, b: number, c: number): string {
        if (a <= 0 || b <= 0 || c <= 0) {
            return "Não é um triângulo válido (valor zero ou negativo)";
        }
        
        if (a + b <= c || a + c <= b || b + c <= a) {
            return "Não é um triângulo válido (a soma de dois lados não é maior que o terceiro)";
        }
        
        if (a === b && b === c) {
            return "Triângulo equilátero";
        } else if (a === b || a === c || b === c) {
            return "Triângulo isósceles";
        } else {
            return "Triângulo escaleno";
        }
    }
}