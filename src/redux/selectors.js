// import { createSelector } from "@reduxjs/toolkit";

export const getContacts = state => state.contacts.contacts;
export const getFilter = state => state.filter.filter;

// export const selectVisibleContacts = createSelector(
//   [selectContacts, selectFilter],
//   (contacts, filter) => {
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filter.toLowerCase())
//     );
//   }
// );