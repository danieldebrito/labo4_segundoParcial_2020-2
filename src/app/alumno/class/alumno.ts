export type Roles = 'ALUMNO' | 'PROFESOR' | 'ADMINISTRADOR';

export class Alumno {
    constructor(
        public uid?: string,
        public nombre?: string,
        public apellido?: string,
        public email?: string,
        public emailVerified?: boolean,
        public displayName?: string,
        public photoURL?: string,
        public password?: string,
        public dni?: number,
        public sexo?: string,
        public fechanacimiento?: string,
        public foto?: string,
        public paisOrigen?: string,
        public role?: Roles,
    ) { }
}
