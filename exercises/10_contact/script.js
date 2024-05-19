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

const name = prompt('Insert name:');
const email = prompt('Insert email:');
const phone = prompt('Insert phone:');
const contact = new Contact(name, email, phone);
alert(contact.displayDetails());
