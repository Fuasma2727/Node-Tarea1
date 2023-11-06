const fs = require("fs");
const path = require("path");
const contactsPath = "./db/contacts.json";



// TODO: documenta cada función
function listContacts() {
  fs.readFile(path.join(__dirname, contactsPath),"utf-8",(err,data)=>{
    if (err){
console.error("error", err);
   return;
}
const contactList = JSON.parse(data);
const names = contactList.map(contact=>contact.name);
console.log(names);

  });


    }


  
  function getContactById(contactId) {

    fs.readFile(path.join(__dirname, contactsPath),"utf-8", (err,data)=>{
      if (err){
        console.error("error", err);
           return;
        }
      const contacts = JSON.parse(data);
      const contact = contacts.find((cont)=>cont.id === contactId);
      if (contact){
        console.log(contact);
      }
      else{
        console.log("contact not found");
      }
    });
  }




  function removeContact(contactId) {
    fs.readFile(path.join(__dirname, contactsPath), (err,data)=>{
      if (err) {
        console.error("Error reading contacts file", err);
        return;
      }
  
      let contacts = JSON.parse(data);
      const index = contacts.findIndex((contact) => contact.id === contactId);
  
      if (index !== -1) {
        // El contacto fue encontrado, lo eliminamos del array.
        contacts.splice(index, 1);
  
        fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2), (writeErr) => {
          if (writeErr) {
            console.error("Error writing contacts file", writeErr);
          } else {
            console.log("Contact removed successfully");
          }
        });
      } else {
        console.log("Contact not found");
      }
    });
  }


    
    // ...tu código
  
  
    function addContact(name, email, phone) {
      const newContact = {
        id: "AeHIrLTr6JkxGE6SN-0Rwkk",
        name: name,
        email: email,
        phone: phone
      };
    
      const newContactString = JSON.stringify(newContact) + '\n'; // Agrega un salto de línea
    
      fs.appendFile(contactsPath, newContactString, (err) => {
        if (err) {
          console.error("Error appending contact to the file", err);
        } else {
          console.log("Contact added successfully");
        }
      });
    }
    



    module.exports = {
      listContacts,
      getContactById,
      removeContact,
      addContact,
    };