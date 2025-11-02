import { ITenant } from "./ITenant";

export interface IPage<T> {
    content: Array<T>,
    totalPages: number,
}