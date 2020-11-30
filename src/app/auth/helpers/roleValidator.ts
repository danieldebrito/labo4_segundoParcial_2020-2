import { User } from 'src/app/auth/models/user.interface';

export class RoleValidator {
    isPaciente(user): boolean {
        return user.role === 'PACIENTE';
    }

    isAdministrador(user): boolean {
        return user.role === 'ADMINISTRADOR';
    }

    isProfecional(user): boolean {
        return user.role === 'PROFECIONAL';
    }
}
