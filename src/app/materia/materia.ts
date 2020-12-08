import { User } from 'src/app/auth/models/user.interface'

export class Materia {
    constructor(
        public id?: string,
        public nombre?: string,
        public cuatrimestre?: string,
        public cupo?: string,
        public anio?: string,
        public profesorfoto?: string,
        public profesores?: User[],
    ) { }
}
