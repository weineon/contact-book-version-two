import React, { useState, useReducer, useCallback, useEffect } from 'react';
import ContactList from '../ContactList/ContactList';
import CreateContact from '../CreateContact/CreateContact';

import { SContacts } from './styled';
import { initialState, reducer } from '../reducer';

const Contacts = () => {

    // const [contacts, setContacts] = useState("")
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')

    const [state, dispatch] = useReducer(reducer, initialState);

    const onSubmit = (name, number) => {  
        const newContact = { id: state.contacts.length + 1, name, number };
    
        dispatch({
            type: 'ADD_CONTACT',
            payload: newContact,
        });
    }

    // useEffect(() => {
    //     console.log(state.contacts);
    // }, [state.contacts]);
    
    const deleteContact = id => {
        // console.log(id)
        dispatch({ type: "DELETE_CONTACT", payload: id });
    };

    // const removeContacts = id => {
    //     setContacts([...contacts].filter(c => c.id !== id))
    // }

    return (
        <SContacts.Container>
            <SContacts.H1>Contact Book</SContacts.H1>
            <CreateContact onSubmit={onSubmit} clearFields={() => { setName(''); setNumber('') }}/>
            {state.contacts.map(contact => 
                <ContactList 
                    key={contact.id} 
                    contact={contact}
                    deleteContact={deleteContact}
                />
            )}
        </SContacts.Container>
    );
};

export default Contacts;