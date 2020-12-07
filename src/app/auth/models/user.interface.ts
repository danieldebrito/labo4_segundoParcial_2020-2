export type Roles = 'ALUMNO' | 'PROFESOR' | 'ADMINISTRADOR';

export interface User {
  uid: string;
  nombre?: string;
  apellido?: string;
  dni?: number;
  email: string;
  password?: string;
  displayName?: string;
  emailVerified: boolean;
  photoURL?: string;
  role?: Roles;
}
