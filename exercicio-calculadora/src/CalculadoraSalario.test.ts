import { Funcionario, Cargo, calcularSalarioLiquido } from './CalculadoraSalario';

describe('Calculadora de Salário', () => {
  test('DESENVOLVEDOR com salário >= 3000 deve ter 20% de desconto', () => {
    const funcionario = new Funcionario('João', 'joao@empresa.com', 3000, Cargo.DESENVOLVEDOR);
    expect(calcularSalarioLiquido(funcionario)).toBe(2400);
  });

  test('DESENVOLVEDOR com salário < 3000 deve ter 10% de desconto', () => {
    const funcionario = new Funcionario('Maria', 'maria@empresa.com', 2500, Cargo.DESENVOLVEDOR);
    expect(calcularSalarioLiquido(funcionario)).toBe(2250);
  });

  test('DBA com salário >= 2000 deve ter 25% de desconto', () => {
    const funcionario = new Funcionario('Carlos', 'carlos@empresa.com', 2000, Cargo.DBA);
    expect(calcularSalarioLiquido(funcionario)).toBe(1500);
  });

  test('DBA com salário < 2000 deve ter 15% de desconto', () => {
    const funcionario = new Funcionario('Ana', 'ana@empresa.com', 1500, Cargo.DBA);
    expect(calcularSalarioLiquido(funcionario)).toBe(1275);
  });

  test('TESTADOR com salário >= 2000 deve ter 25% de desconto', () => {
    const funcionario = new Funcionario('Pedro', 'pedro@empresa.com', 2500, Cargo.TESTADOR);
    expect(calcularSalarioLiquido(funcionario)).toBe(1875);
  });

  test('TESTADOR com salário < 2000 deve ter 15% de desconto', () => {
    const funcionario = new Funcionario('Lucia', 'lucia@empresa.com', 1800, Cargo.TESTADOR);
    expect(calcularSalarioLiquido(funcionario)).toBe(1530);
  });

  test('GERENTE com salário >= 5000 deve ter 30% de desconto', () => {
    const funcionario = new Funcionario('Fernanda', 'fernanda@empresa.com', 5000, Cargo.GERENTE);
    expect(calcularSalarioLiquido(funcionario)).toBe(3500);
  });

  test('GERENTE com salário < 5000 deve ter 20% de desconto', () => {
    const funcionario = new Funcionario('Ricardo', 'ricardo@empresa.com', 4000, Cargo.GERENTE);
    expect(calcularSalarioLiquido(funcionario)).toBe(3200);
  });
});