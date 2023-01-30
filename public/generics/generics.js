// creating a function with a parameter of generic type object.
export const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
// creating a function with a generic type of parameter object and must have a property of name of type of string.
export const add_with_name_property = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
