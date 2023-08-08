import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import {
  selectError,
  selectIsLoading,
  selectVisibleContacts,
} from 'redux/selectors';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { Container, Message, Title1, Title2, Wrapper } from './App.styled';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectVisibleContacts);
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Title1>Phonebook</Title1>
      <ContactForm />
      <Title2>Contacts</Title2>
      <Wrapper>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {contacts.length > 0 ? (
          <>
            <Filter />
            {contacts.length > 0 ? (
              <ContactList />
            ) : (
              <Message>
                Sorry, we didn't find any contacts matching your query
              </Message>
            )}
          </>
        ) : (
          <Message>You don't have any contacts</Message>
        )}
      </Wrapper>
    </Container>
  );
};
