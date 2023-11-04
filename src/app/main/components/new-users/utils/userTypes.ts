export interface newUserType {
    "id": string;
    "picture": string;
    "name": string;
    "isActive": boolean;
    "country": string;
    "progress": number;
    "barColor": string;
}

export interface newUserTypeWithoutColor {
    "id": string;
    "picture": string;
    "name": string;
    "isActive": boolean;
    "country": string;
    "progress": number;
}