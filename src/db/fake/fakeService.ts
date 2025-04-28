import { Employee } from "../../types/db/employee";

export class FakeService {
    private employees: Employee[] = [
        { username: 'jgomez', password: 'password123', name: 'Juan Gómez', email: 'jgomez@skytech.com' },
        { username: 'mlopez', password: 'pass456', name: 'María López', email: 'mlopez@skytech.com' },
        { username: 'cruiz', password: 'sky789', name: 'Carlos Ruiz', email: 'cruiz@skytech.com' },
    ];

    public findEmployeeByCredentials(username: string, password: string): Promise<Employee | null> {
        const employee = this.employees.find(emp => emp.username === username && emp.password === password);
        return Promise.resolve(employee || null);
    }
}