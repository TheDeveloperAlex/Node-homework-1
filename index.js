const contactsFn = require('./contacts');
// const argv = require('yargs').argv;

// function invokeAction({ action, id, name, email, phone }) {
//     switch (action) {
//       case 'list':
//         // ...
//         contactsFn.listContacts();
//         break;
  
//       case 'get':
//         // ... id
//         contactsFn.getContactById(id);
//         break;
  
//       case 'add':
//         // ... name email phone
//         contactsFn.addContact(name, email, phone);
//         break;
  
//       case 'remove':
//         // ... id
//         contactsFn.removeContact(id);
//         break;
  
//       default:
//         console.warn('\x1B[31m Unknown action type!');
//     }
//   }
  
//   invokeAction(argv);



// =======================================================================================================================

const { Command } = require('commander');
const program = new Command();
program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);

const argv = program.opts();

// TODO: рефакторить
function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      // ...
      contactsFn.listContacts();
      break;

    case 'get':
      // ... id
      contactsFn.getContactById(id);
      break;

    case 'add':
      // ... name email phone
      contactsFn.addContact(name, email, phone);
      break;

    case 'remove':
      // ... id
      contactsFn.removeContact(id);
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);

