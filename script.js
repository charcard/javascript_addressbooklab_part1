"use strict";

//None of my stuff worked so I deleted most of it and tried to start again like 20 times.  
class AddressBook {
    constructor(contacts) {
        this.contacts = [];
    }   
    
      add() {
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let phone = document.getElementById("phone").value;
        let relation = document.getElementById("relation").value;
        let newContact = new Contacts(name.add, email.add, phone.add, relation.add);

        NewAddressBook.contacts.push(Contacts);

    
      display(){
    
      }
    
    
      deleteAt(index) {
        this.contacts.splice(index, 1);
      }
    }
    
        class Contacts {
        constructor(name, email, phone, relation) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.relation = relation;
      }
    }
    
    const NewAddressBook = new AddressBook();
    
    document.getElementById("add").addEventListener("click", NewAddressBook.add); 
    
    NewAddressBook.display();