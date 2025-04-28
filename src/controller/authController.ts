import { IDBService } from "../db/type/dbService";
import { Employee } from "../types/db/employee";

export class AuthController {
    dbService: IDBService;

    constructor(dbService: IDBService) {
        this.dbService = dbService;
    }

    async login(username: string, password: string): Promise<Employee> {
        const employee = await this.dbService.findEmployeeByCredentials(username, password);
        if (!employee) {
            throw new Error("Invalid credentials");
        }
        return employee;
    }
}