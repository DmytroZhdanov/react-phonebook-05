import { Contact } from 'components/Contact/Contact';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <ul>
      {contacts.map(({ name, phone, id }) => {
        return <Contact key={id} id={id} name={name} phone={phone} />;
      })}
    </ul>
  );
};
