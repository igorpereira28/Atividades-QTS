export enum Cargo {
    DESENVOLVEDOR = 'DESENVOLVEDOR',
    DBA = 'DBA',
    TESTADOR = 'TESTADOR',
    GERENTE = 'GERENTE'
  }
  
  export class Funcionario {
    constructor(
      public nome: string,
      public email: string,
      public salarioBase: number,
      public cargo: Cargo
    ) {}
  }
  
  export function calcularSalarioLiquido(funcionario: Funcionario): number {
    switch (funcionario.cargo) {
      case Cargo.DESENVOLVEDOR:
        return funcionario.salarioBase >= 3000 
          ? funcionario.salarioBase * 0.8 
          : funcionario.salarioBase * 0.9;
      
      case Cargo.DBA:
      case Cargo.TESTADOR:
        return funcionario.salarioBase >= 2000 
          ? funcionario.salarioBase * 0.75 
          : funcionario.salarioBase * 0.85;
      
      case Cargo.GERENTE:
        return funcionario.salarioBase >= 5000 
          ? funcionario.salarioBase * 0.7 
          : funcionario.salarioBase * 0.8;
      
      default:
        throw new Error('Cargo não reconhecido');
    }
  }