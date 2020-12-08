import { User } from 'src/app/users/user'

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
