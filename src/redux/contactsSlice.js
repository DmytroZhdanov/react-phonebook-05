import { createSlice, nanoid } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const contactsInitialState = {
  contacts: [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
      prepare({ name, number }) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },
    removeContact(state, action) {
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload
      );
      state.contacts.splice(index, 1);
    },
  },
});

const contactsPersistConfig = {
  key: 'contacts',
  storage,
};

export const contactsReducer = persistReducer(
  contactsPersistConfig,
  contactsSlice.reducer
);

export const { addContact, removeContact } = contactsSlice.actions;
