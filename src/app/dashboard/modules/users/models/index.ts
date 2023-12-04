//Interfaz que determina las caracteristicas que debe tener un usuario 
export interface User {
    id: number
    name: string
    lastName: string
    password: string
    grade: number
    email: string
    token?: string
    role?: 'admin' | "estudiante" | 'profesor' 
}

export interface userPermits {
    value: string;
    viewValue: string;
  }