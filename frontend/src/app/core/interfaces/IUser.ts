import { Role } from "@auth/types/role";

export interface IUser {
    fullName: string;
    username: string;
    tel: string;
    role: Role;
}