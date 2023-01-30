import { ResouceType } from "../Enums/enums";

// creating a function with a parameter of generic type object.
export const addUID = <T extends object>(obj: T) => {
    let uid = Math.floor(Math.random() * 100);
    return { ...obj, uid };
};

// creating a function with a generic type of parameter object and must have a property of name of type of string.
export const add_with_name_property = <T extends { name: string }>(obj: T) => {
    let uid = Math.floor(Math.random() * 100);
    return { ...obj, uid };
};

// creating an interface with generic type.
export interface Resource<T> {
    uid: number;
    resourceType: ResouceType;
    data: T;
}
