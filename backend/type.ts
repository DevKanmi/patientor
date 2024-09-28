export interface patient {
        id: string,
        name:string,
        dateOfBirth: string,
        ssn:string,
        gender: string,
        occupation: string
} 

export interface Diagnosis{
    code: string,
    name: string,
    latin?: string
}

export type Nonsensitve = Omit<patient, 'ssn'>;