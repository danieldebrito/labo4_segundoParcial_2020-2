import { User } from 'src/app/auth/models/user.interface'

export class Materia {
    constructor(
        public id?: string,
        public nombre?: string,
        public cuatrimestre?: string,
        public cupo?: number,
        public anio?: string,
        public foto?: string,
        public profesorfoto?: string,
        public profesor?: User,
        public alumnos?: User[],
    ) { }
}
