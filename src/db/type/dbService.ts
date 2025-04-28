import { Employee } from "../../types/db/employee";

export interface IDBService {
    findEmployeeByCredentials(username: string, password: string): Promise<Employee | null>;
}