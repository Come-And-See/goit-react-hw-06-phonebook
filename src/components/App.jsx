import React from 'react';
import { ContactList } from './contacts/ContactList';
import { Filter } from './contacts/Filter';
import ContactForm from './contacts/ContactForm';
import * as css from './contacts/contacts.styled';
import { useDispatch, useSelector } from 'react-redux'
import { filters } from '../redux/contact/contactSlice';



const App = () => {
  const contacts = useSelector((state) => state.contact.contacts)
  const filterValue = useSelector((state) => state.contact.filter)
  const dispatch = useDispatch();


  const changeFilter = (e) => {
    dispatch(filters(e.currentTarget.value))
  }

  const resultFilter = () => {
    if (!filterValue) {
      return contacts;
    }

    return contacts.filter(contact => (
      contact.name.toLocaleLowerCase().includes(filterValue.toLocaleLowerCase())
    ));
  }



  return (
    <css.DivAll>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter changeFilter={changeFilter} />
      <ContactList data={resultFilter()} />
    </css.DivAll>
  )
};



export default App;

