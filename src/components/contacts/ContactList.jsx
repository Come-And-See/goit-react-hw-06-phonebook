import PropTypes from 'prop-types';
import * as css from './contacts.styled';
import { useDispatch } from 'react-redux'
import { remove } from '../../redux/contact/contactSlice';




export const ContactList = ({ data }) => {
    const dispatch = useDispatch();

    return (
        <css.UlContactList>
            {data.map((contact) => (
                <li key={contact.id}>
                    {contact.name}: {contact.number}
                    <button type='button' onClick={() => dispatch(remove(contact.id))}>Delete</button>
                </li>))}
        </css.UlContactList>
    )

}

ContactList.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ).isRequired,
};