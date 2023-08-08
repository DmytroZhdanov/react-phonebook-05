import { Contact } from 'components/Contact/Contact';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {filteredContacts.map(({ name, number, id }) => {
        return <Contact key={id} id={id} name={name} number={number} />;
      })}
    </ul>
  );
};
