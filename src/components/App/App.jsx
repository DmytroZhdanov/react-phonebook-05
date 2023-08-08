import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { Container, Message, Title1, Title2, Wrapper } from './App.styled';

export const App = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Container>
      <Title1>Phonebook</Title1>
      <ContactForm />
      <Title2>Contacts</Title2>
      <Wrapper>
        {contacts.length > 0 ? (
          <>
            <Filter />
            {filteredContacts.length > 0 ? (
              <ContactList />
            ) : (
              <Message>
                Sorry, we didn't find any contacts matching your query
              </Message>
            )}
          </>
        ) : (
          <Message>You don't have any contacts yet</Message>
        )}
      </Wrapper>
    </Container>
  );
};
