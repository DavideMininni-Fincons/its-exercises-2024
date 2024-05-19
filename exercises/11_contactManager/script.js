// Object template for Contact
function Contact(name, email, phone) {
    this.name = name;
    this.email = email;
    this.phone = phone;
}

// Method to display details of the contact
Contact.prototype.displayDetails = function() {
    return `Name: ${this.name}, Email: ${this.email}, Phone: ${this.phone}`;
}

// Object for ContactManager
const ContactManager = {
    contacts: {},

    get contactList() {
        let str = '';
        for (const contactsKey in this.contacts) {
            str += `${this.contacts[contactsKey].displayDetails()}\n`;
        }
        return str;
    },

    get contactListAdvanced() {
        return Object.keys(this.contacts).map(e => this.contacts[e].displayDetails()).join('\n')
    },

    // Method to add a new contact to the collection
    addContact: function(contact) {
        this.contacts[contact.name] = contact;
        console.log(`Contact "${contact.name}" has been added.`);
    },

    // Method to find a contact by name
    findContactByName: function(name) {
        const foundContact = this.contacts[name];
        if (foundContact) {
            return foundContact;
        } else {
            return `Contact with name "${name}" not found.`;
        }
    },

    // Method to delete a contact by name
    deleteContact: function(name) {
        if (this.contacts[name]) {
            delete this.contacts[name];
            console.log(`Contact "${name}" has been deleted.`);
        } else {
            console.log(`Contact with name "${name}" not found.`);
        }
    }
}

// Create instances of Contact representing different contacts
const contact1 = new Contact("Alice", "alice@example.com", "123-456-7890");
const contact2 = new Contact("Bob", "bob@example.com", "987-654-3210");
const contact3 = new Contact("Charlie", "charlie@example.com", "456-789-0123");

// Add contacts to the contact manager
ContactManager.addContact(contact1);
ContactManager.addContact(contact2);
ContactManager.addContact(contact3);

// Find a contact by name
const foundContact = ContactManager.findContactByName("Bob");
if (foundContact) {
    console.log("Found contact: ", foundContact.displayDetails());
}

// Display all contacts in the contact manager
console.log("All Contacts:")
console.log(ContactManager.contactListAdvanced);

// Delete a contact by name
ContactManager.deleteContact("Charlie");

// Display all contacts in the contact manager
console.log("All Contacts:");
console.log(ContactManager.contactList);
