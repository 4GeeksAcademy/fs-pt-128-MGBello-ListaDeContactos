import { demoContacts } from "./data/demoData";
export const initialStore = () => {
  return {
    message: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ],
    contacts: [],
    search: "",
    contactSelected: null
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'add_task':

      const { id, color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };
    case 'set_contact':
      return {
        ...store,
        contacts: action.payload
      }
    case 'search':
      return {
        ...store,
        search: action.payload
      }
    case 'select_contact':
      const contactFind = store.contacts.find(contacto => contacto.id === Number(action.payload))
      return {
        ...store,
        contactSelected: contactFind || null
      }
    case 'add_to_contacts':
      return {
        ...store,
        contacts: [...store.contacts, action.payload],
        contactSelected: action.payload
      };
    case 'update_contact':
      return {
        ...store,
        contactSelected: action.payload,
        contacts: store.contacts.map(contact => {
          return contact.id === action.payload.id ? action.payload : contact
        })
      }
    case 'clear_selection':
      return {
        ...store,
        contactSelected: null
      }
    case 'delete_contact':
      const deletedContact = store.contacts.filter(contacto => contacto.id !== Number(action.payload))
      const isSelected = store.contactSelected?.id === Number(action.payload);
      return {
        ...store,
        contacts: deletedContact,
        contactSelected: isSelected ? null : store.contactSelected
      }


    case 'add_demo':
      if (store.contacts.length > 0) {
        return store;
      }
      return {
        ...store,
        contacts: action.payload
      }
    default:
      throw Error('Unknown action.');
  }
}
