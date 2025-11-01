import { ITenant } from "./ITenant";

export interface IPage {
    content: ITenant[],
    totalPages: number,
    totalElements: number,
}