import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, addContact } from '../../redux/slice';

import PropTypes from 'prop-types';
import css from './ContactForm.module.css';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const contact = {
      id: nanoid(),
      name,
      number,
  };

  const addContacts = contacts.some(
    contact =>
      (contact.name.toLowerCase() === name.toLowerCase() || contact.number === number) ||
      contact.number === number
  );
  addContacts
    ? alert(`${name} or ${number} is already in contacts`)
    : dispatch(addContact(contact));

  setName('');
  setNumber('');
};

    return (
      <form onSubmit={handleSubmit} className={css.form} >
        <div className={css.nameInput}>
        <label  className={css.label}>
            Name
           </label>
          <input
             type="text"
             autoComplete="off"
             name="name"
            value={name}
            onChange={handleChange}
           pattern="^[a-zA-Z\s]+$"
            title="Name may contain only latin letters"
            required
           className={css.input}
           />
        </div>
        
        <div className={css.numberInput}>
        <label  className={css.label}>
            Number
          </label>
           <input
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
            pattern="^\d{3}-\d{2}-\d{2}$"
            title="The phone number should look like this: 012-34-56"
            required
            className={css.input}
          />
        </div>
        
        <button type="submit" className={css.btnAddContact}>Add contact</button>
      </form>
    );
  };

ContactForm.prototypes = {
  onSubmit: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired,
}