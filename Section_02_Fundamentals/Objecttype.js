let emptyObject = {};
//The following example defines the person object with two properties: firstName and lastName
let person = {
    firstName: 'John',
    lastName: 'Doe'
};
/* A property name of an object can be any string. 
You can use quotes around the property name if it is not a valid identifier.
For example, if the person object has a property first-name, 
you must place it in the quotes such as "first-name".
A property of an object can hold an object. For example: */
let contact = {
    firstName: 'John', lastName: 'Doe',
    email: 'john.doe@example.com', phone: '(408)-555-9999',
    address: {
        building: '4000',
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA'
    }
}
//Access a Objects Property
console.log(contact.firstName);
console.log(contact.lastName);
console.log(contact.age); // undefined
console.log(contact['phone']); // '(408)-555-9999'
console.log(contact['email']); // 'john.doe@example.com'