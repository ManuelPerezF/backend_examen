import { IDBService } from "../db/type/dbService";
import { Employee } from "../types/db/employee";

export class AuthController {
    dbService: IDBService;

    constructor(dbService: IDBService) {
        this.dbService = dbService;
    }

    async login(username: string, password: string): Promise<Employee | null> {
        return this.dbService.findEmployeeByCredentials(username, password);
    }

}