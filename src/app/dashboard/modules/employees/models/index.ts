import { Course } from "../../courses/models";
import { User } from "../../users/models";

export interface Employee {
    name: string
    email: string
    privileges:string 
}
export interface permits {
    value: string;
    viewValue: string;
  }

export interface Inscripcion {
    id: number,
    courseId: number,
    userId: number,
    user?: User,
    course?: Course
}
export interface ResponseDialogInscripcion {
    courseId: number | null
    userId: number | null 
}