import { Role } from "@/types/role";

export interface IUser {
    fullName: string;
    username: string;
    tel: string;
    role: Role;
}