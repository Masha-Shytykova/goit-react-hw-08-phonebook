import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v1 as uuidv1 } from 'uuid';
import { addContacts } from '../../redux/operations';
import { getContactsList } from '../../redux/selectors';
import s from './ContactForm.module.css';

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const items = useSelector(getContactsList);
  const id = uuidv1();

  const onSubmit = () => {
    dispatch(addContacts({ name, number, id }));
  };

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
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const isContactExist = name => {
      return items.some(item => item.name.toLowerCase() === name.toLowerCase());
    };
    isContactExist(name)
      ? alert(`${name} is already in contacts.`)
      : onSubmit(name, number);

    setName('');
    setNumber('');
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.form__label}>
        Name
        <input
          className={s.form__input}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={handleChange}
        />
      </label>
      <label className={s.form__label}>
        Phone number
        <input
          className={s.form__input}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={handleChange}
        />
      </label>

      <button className={s.form__btn} type="submit">
        Add contact
      </button>
    </form>
  );
}

export default ContactForm;
