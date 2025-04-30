import { Person, Email, PersonDAO } from './PersonDAO';

describe('PersonDAO.isValidToInclude', () => {
    let dao: PersonDAO;

    beforeEach(() => {
        dao = new PersonDAO();
    });

    test('deve retornar array vazio para pessoa válida', () => {
        const pessoaValida = new Person(
            1,
            'João Silva',
            30,
            [new Email(1, 'joao@exemplo.com')]
        );
        expect(dao.isValidToInclude(pessoaValida)).toEqual([]);
    });

    test('deve retornar erro para nome com menos de 2 partes', () => {
        const pessoa = new Person(
            1,
            'João',
            30,
            [new Email(1, 'joao@exemplo.com')]
        );
        expect(dao.isValidToInclude(pessoa)).toContain('O nome deve ser composto por ao menos 2 partes');
    });

    test('deve retornar erro para nome com caracteres não alfabéticos', () => {
        const pessoa = new Person(
            1,
            'João 123',
            30,
            [new Email(1, 'joao@exemplo.com')]
        );
        expect(dao.isValidToInclude(pessoa)).toContain('O nome deve conter apenas letras');
    });

    test('deve retornar erro para idade abaixo de 1', () => {
        const pessoa = new Person(
            1,
            'João Silva',
            0,
            [new Email(1, 'joao@exemplo.com')]
        );
        expect(dao.isValidToInclude(pessoa)).toContain('A idade deve estar entre 1 e 200');
    });

    test('deve retornar erro para idade acima de 200', () => {
        const pessoa = new Person(
            1,
            'João Silva',
            201,
            [new Email(1, 'joao@exemplo.com')]
        );
        expect(dao.isValidToInclude(pessoa)).toContain('A idade deve estar entre 1 e 200');
    });

    test('deve retornar erro quando não houver emails', () => {
        const pessoa = new Person(1, 'João Silva', 30);
        expect(dao.isValidToInclude(pessoa)).toContain('Deve haver pelo menos um email associado');
    });

    test('deve retornar erro para formato de email inválido', () => {
        const pessoa = new Person(
            1,
            'João Silva',
            30,
            [new Email(1, 'joao@exemplo')]
        );
        expect(dao.isValidToInclude(pessoa)).toContain('O email "joao@exemplo" não está no formato válido');
    });

    test('deve retornar múltiplos erros para múltiplas violações', () => {
        const pessoa = new Person(
            1,
            'João',
            0
        );
        const erros = dao.isValidToInclude(pessoa);
        expect(erros).toContain('O nome deve ser composto por ao menos 2 partes');
        expect(erros).toContain('A idade deve estar entre 1 e 200');
        expect(erros).toContain('Deve haver pelo menos um email associado');
    });
});