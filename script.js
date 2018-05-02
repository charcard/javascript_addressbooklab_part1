"use strict";
class AddressBook {
    constructor() {
        this.contacts = [];
    }

    add(info) {
        let newPerson = new Contacts(info.name, info.email, info.phone, info.occupation);
        this.contacts.push(newPerson);
        console.log(this.contacts);
    }
    deleteAt(index) {
        this.contacts.splice(index, 1);
    }
    print() {
        for (let i = 0; i < this.contacts.length; i++) {
            console.log(this.contacts[i]);
        }
    }
}

const NewAddressBook = new AddressBook();

class Contacts {
    constructor(name, email, phone, relation) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.relation = relation;
    }
}
console.log(NewAddressBook);

while (true) {
    let userInput = prompt("Would you like to add, delete, print, or quit?");
if (userInput.toLowerCase() === "add") {
    let info = {
        name: prompt("Enter your full name."),
        phone: prompt("Enter you phone number."),
        email: prompt("Enter your email."),
        relation: prompt("Enter your relation."),
    };
        NewAddressBook.add(info);

    }else if (userInput.toLowerCase() === "delete") {
        let index = prompt("Which index would you like to remove?");
        NewAddressBook.deleteAt(index);

        }else if (userInput.toLowerCase() === "print") {
            NewAddressBook.print();

            }else if (userInput.toLowerCase() === "quit") {
            break;
            }
}