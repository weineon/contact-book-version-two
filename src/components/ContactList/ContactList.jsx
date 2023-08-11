import React from 'react';
import { SContactList } from './styled';
import { BsTrash3 } from 'react-icons/bs';

const ContactList = ({ contact, deleteContact }) => {
    const { id, name, number } = contact

    return (
        <SContactList.Container key={id}>
            <SContactList.H2>{name}</SContactList.H2>
            <SContactList.P>{number}</SContactList.P>
            <SContactList.Button onClick={() => deleteContact(contact.id)}><BsTrash3/></SContactList.Button>
        </SContactList.Container>
    );
};

export default ContactList;