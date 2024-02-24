import TitlePhonebook from './TitlePhonebook/TitlePhonebook';
import { ContactForm } from './ContactForm/ContactForm';
import { TitleContacts } from './TitleContext/TitleContext';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import runtime from './runtime.js';

export const App = () => {
  // const [contacts, setContacts] = useState(
  //   JSON.parse(localStorage.getItem('contacts')) || []
  // );
  // const [filter, setFilter] = useState('');
  // useEffect(() => {
  //   const contactsFromLS = JSON.parse(localStorage.getItem('contacts')) || [];
  //   setContacts(contactsFromLS);
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const formSubmitHandler = formState => {
  //   const contactId = nanoid(5);
  //   formState.id = contactId;
  //   if (
  //     contacts.find(
  //       ({ name }) => formState.name.toLowerCase() === name.toLowerCase()
  //     )
  //   ) {
  //     alert(`${formState.name} is already in contacts`);
  //     return;
  //   }
  //   setContacts(prevState => [...prevState, formState]);
  // };

  // const changeInput = input => {
  //   setFilter(input.value);
  // };

  // const deleteContact = contactId => {
  //   setContacts(prevState =>
  //     prevState.filter(contact => contact.id !== contactId)
  //   );
  // };

  // const findContact = () => {
  //   const filterContact = contacts.filter(({ name }) => {
  //     return name.includes(filter);
  //   });
  //   return filterContact;
  // };

  return (
    <>
      <TitlePhonebook title="Phonebook" />
      <ContactForm />
      <TitleContacts title="Contacts" />
      <Filter />
      <ContactList />
    </>
  );
};
