# React-phonebook-05

Refactored the "Contact Book" application to remove code responsible for local contact storage and incorporated interaction with a backend for contact management.

## Backend

Set up a personal backend using the UI service [mockapi.io](https://mockapi.io/). Registered with a GitHub account, created a contacts resource to establish an endpoint `/contacts`. Utilized the resource constructor to define the contact object schema.

```
Note! Currently backend for this repository is not supported,
thus you can't use it. But you may familiarize yourself with the code for your needs.
```

## State Structure

Integrated loading indicator and error handling into the Redux state. Modified the state structure to include:

```bash
{
  contacts: {
    items: [],
    isLoading: false,
    error: null
  },
  filter: ""
}
```

## Operations

Implemented `createAsyncThunk` to declare asynchronous action creators and perform HTTP requests. Managed action handling and state changes in Redux using `createSlice`.

Declared the following operations:

- `fetchContacts`: Fetches an array of contacts (GET method) via an action (`contacts/fetchAll` base type).
- `addContact`: Adds a contact (POST method) via an action (`contacts/addContact` base type).
- `deleteContact`: Removes a contact (DELETE method) via an action (`contacts/deleteContact` base type).
