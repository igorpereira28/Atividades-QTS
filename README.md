# Atividades-QTS
Ativiade - Qualidade de teste de software

Para rodar o projeto, é muito simples, só precisa entrar no arquivo que deseja testar, executar npm install e e depois npm run test.

Após isso, os testes serão realizados e se passarem, vai aparecer uma mensagem indicando isso, 
exemplos:

exercicio - triângulo:
> exercicio-triangulo@1.0.0 test
> jest

 PASS  src/triangulo.test.ts
  Testes para Triângulos
    √ CT1: Triângulo escaleno válido (3, 4, 5) (3 ms)                                                               
    √ CT2: Triângulo isósceles válido (5, 5, 7)                                                                     
    √ CT3: Triângulo equilátero válido (6, 6, 6)                                                                    
    √ CT4.1: Isósceles válido (a=b) (5, 5, 7)                                                                       
    √ CT4.2: Isósceles válido (a=c) (5, 7, 5)                                                                       
    √ CT4.3: Isósceles válido (b=c) (7, 5, 5)                                                                       
    √ CT5: Valor zero (0, 4, 5) (1 ms)                                                                              
    √ CT6: Valor negativo (3, -4, 5)                                                                                
    √ CT7.1: a + b = c (2, 3, 5)                                                                                    
    √ CT7.2: a + c = b (2, 5, 3)                                                                                    
    √ CT7.3: b + c = a (5, 2, 3)                                                                                    
    √ CT9.1: a + b < c (1, 2, 5)                                                                                    
    √ CT9.2: a + c < b (1, 5, 2)                                                                                    
    √ CT9.3: b + c < a (5, 1, 2)                                                                                    
    √ CT11: Todos zeros (0, 0, 0)                                                                                   
                                                                                                                    
Test Suites: 1 passed, 1 total
Tests:       15 passed, 15 total
Snapshots:   0 total
Time:        2.848 s, estimated 3 s

exercicio 2:
> exercicio-calculadora@1.0.0 test
> jest
    √ deve retornar array vazio para pessoa válida (4 ms)                                                           
    √ deve retornar erro para nome com menos de 2 partes (1 ms)
    √ deve retornar erro para nome com caracteres não alfabéticos (1 ms)                                            
    √ deve retornar erro para idade abaixo de 1 (1 ms)                                                              
    √ deve retornar erro para idade acima de 200                                                                    
    √ deve retornar erro quando não houver emails                                                                   
    √ deve retornar erro para formato de email inválido                                                             
    √ deve retornar múltiplos erros para múltiplas violações  

exercicio - calculadora
> exercicio-calculadora@1.0.0 test
> jest

 PASS  src/CalculadoraSalario.test.ts
  Calculadora de Salário
    √ DESENVOLVEDOR com salário >= 3000 deve ter 20% de desconto (3 ms)                                             
    √ DESENVOLVEDOR com salário < 3000 deve ter 10% de desconto                                                     
    √ DBA com salário >= 2000 deve ter 25% de desconto (1 ms)                                                       
    √ DBA com salário < 2000 deve ter 15% de desconto (1 ms)                                                        
    √ TESTADOR com salário >= 2000 deve ter 25% de desconto                                                         
    √ TESTADOR com salário < 2000 deve ter 15% de desconto                                                          
    √ GERENTE com salário >= 5000 deve ter 30% de desconto
    √ GERENTE com salário < 5000 deve ter 20% de desconto                                                           
                                                                                                                    
Test Suites: 1 passed, 1 total                                                                                      
Tests:       8 passed, 8 total                                                                                      
Snapshots:   0 total
Time:        2.975 s
