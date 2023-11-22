export interface User {
    id: string;
    fullName: string;
    email: string;
    password: string
}

export interface EmployeeRequest {
    first: number;
    rows: number;
    sortField: string | string[];
    sortOrder: number;
    filter?: {
        FirstName: string,
        LastName:string
    }
}
