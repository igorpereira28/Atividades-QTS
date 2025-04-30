export class Person {
    id: number;
    name: string;
    age: number;
    emails: Email[];

    constructor(id: number, name: string, age: number, emails: Email[] = []) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.emails = emails;
    }
}

export class Email {
    id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}

export class PersonDAO {
    save(p: Person): void {
    }

    isValidToInclude(p: Person): string[] {
        const errors: string[] = [];
        
        // Validar nome
        const nameParts = p.name.trim().split(/\s+/);
        if (nameParts.length < 2) {
            errors.push("O nome deve ser composto por ao menos 2 partes");
        }
        
        if (!/^[a-zA-ZÀ-ÿ\s]+$/.test(p.name)) {
            errors.push("O nome deve conter apenas letras");
        }
        
        if (p.age < 1 || p.age > 200) {
            errors.push("A idade deve estar entre 1 e 200");
        }
        
        if (p.emails.length === 0) {
            errors.push("Deve haver pelo menos um email associado");
        } else {
            const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
            for (const email of p.emails) {
                if (!emailRegex.test(email.name)) {
                    errors.push(`O email "${email.name}" não está no formato válido`);
                    break;
                }
            }
        }
        
        return errors;
    }
}