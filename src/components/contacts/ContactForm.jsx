import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as css from './contacts.styled';
import { Notify } from 'notiflix/build/notiflix-notify-aio';


import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux'
import { add } from '../../redux/contact/contactSlice';

const ContactForm = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const addContact = () => {

        const contact = {
            id: nanoid(),
            name,
            number,
        }

        if (name === '' || number === '') {
            Notify.failure(`Enter the contact's name and phone number.`);
            return;
        }
        dispatch(add(contact))
        setName('');
        setNumber('');

        return contact;

    }


    return (
        <css.DivContactForm>
            <label htmlFor="name">
                Name
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    value={name}
                    onChange={(e) => { setName(e.target.value) }}
                    required
                />
            </label>
            <label htmlFor="number">Number
                <input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    value={number}
                    onChange={(e) => { setNumber(e.target.value) }}
                    required
                /></label>
            <button type='button' onClick={addContact}>Add contact</button>
        </css.DivContactForm>
    )


}


ContactForm.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ),
};

export default ContactForm;