const fs = require("fs").promises;
const path = require("path");
const contactsPath = path.join(__dirname, "./db/contacts.json");

async function listContacts() {
  // ...твой код
  const contacts = JSON.parse(await fs.readFile(contactsPath, "utf-8"));
  //   console.log(contacts);
  const res = contacts.map((item) => {
    return {
      Id: item.id,
      Name: item.name,
      Email: item.email,
      Phone: item.phone,
    };
  });
  return console.table(res);
}

async function getContactById(contactId) {
  const contacts = JSON.parse(await fs.readFile(contactsPath, "utf-8"));
  // ...твой код
  const currentContact = contacts.filter((item) => {
    if (item.id === Number(contactId)) {
      return {
        Id: item.id,
        Name: item.name,
        Email: item.email,
        Phone: item.phone,
      };
    }
  });
  return console.table(currentContact);
};

async function removeContact(contactId) {
  // ...твой код
  const contacts = JSON.parse(await fs.readFile(contactsPath, "utf-8"));
  const res = contacts.filter((item) => {
    if (item.id !== Number(contactId)) {
      return {
        Id: item.id,
        Name: item.name,
        Email: item.email,
        Phone: item.phone,
      };
    }
  });
  fs.writeFile(contactsPath, JSON.stringify(res));
  return console.table(res);
};

async function addContact(name, email, phone) {
    const contacts = JSON.parse(await fs.readFile(contactsPath, "utf-8"));
    // "id": 1,
    // "name": "Allen Raymond",
    // "email": "nulla.ante@vestibul.co.uk",
    // "phone": "(992) 914-3792"
    const id = contacts.length + 1;
    const contact = {
        id,
        name,
        email,
        phone,
    }
    const res = [...contacts, contact];
    fs.writeFile(contactsPath, JSON.stringify(res));
    return console.table(res);
  // ...твой код
};

// addContact("Alex", "alex@gmail.com", "(333) 333-333");
// getContactById(1);

// removeContact(11);
// listContacts();
module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact,
};

