import { PropertyStatus } from "@owner/types/PropertyStatus";

export interface IProperties {
    identifier: string;
    description: string;
    address: string;
    area: number;
    status: PropertyStatus;
    price: number;
    contracts: [];
}