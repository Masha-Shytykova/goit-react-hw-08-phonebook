import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import ContactListItem from '../ContactListItem/ContactListItem';
import { deleteContacts, getContacts } from '../../redux/operations';
import { getContactsFilter, getContactsList } from '../../redux/selectors';

function ContactList() {
  const filter = useSelector(getContactsFilter);
  const contacts = useSelector(getContactsList);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <ul>
      {contacts
        .filter(item => item.name.toLowerCase().includes(filter.toLowerCase()))
        .map(({ name, id, number }) => (
          <ContactListItem
            key={id}
            name={name}
            number={number}
            onDeleteContact={() => dispatch(deleteContacts(id))}
          />
        ))}
    </ul>
  );
}

export default ContactList;
