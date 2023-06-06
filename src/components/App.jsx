import React, { useState } from 'react';
import { ContactList } from './contacts/ContactList';
import { Filter } from './contacts/Filter';
import ContactForm from './contacts/ContactForm';
import * as css from './contacts/contacts.styled';
import { useSelector } from 'react-redux'



const App = () => {
  const contacts = useSelector((state) => state.contact.contacts)
  const [filter, setFilter] = useState('');

  const changeFilter = (e) => {
    setFilter(e.currentTarget.value)
  }


  const resultFilter = () => {
    if (!filter) {
      return contacts;
    }

    return contacts.filter(contact => (
      contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
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

