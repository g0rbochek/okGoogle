import { List } from './ContactList.styled';

export const ContactList = ({ onFindContact, onDeleteContact }) => {
  const filterContact = onFindContact();

  return (
    <List>
      {[
        filterContact.map(({ id, name, number }) => {
          return (
            <li key={id}>
              {name}: {number}
              <button onClick={() => onDeleteContact(id)}>Delete</button>
            </li>
          );
        }),
      ]}
    </List>
  );
};
