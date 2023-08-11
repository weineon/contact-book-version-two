import React, { useCallback, useState } from 'react';
import { SCreateContact } from './styled';

const CreateContact = ({ onSubmit }) => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleNameChange = useCallback((event) => {
        const { value } = event.target;
        setName(value);
    }, []);

    const handleNumberChange = useCallback((event) => {
        const { value } = event.target;
        setNumber(value);
    }, []);

    const handleSubmit = useCallback((event) => {
        event.preventDefault();
        onSubmit(name, number);
        setName('');
        setNumber('');
    }, [onSubmit, name, number]);

    return (
        <SCreateContact.Container>
           <SCreateContact.Input
                placeholder='Name'
                value={name}
                onChange={handleNameChange}
            />
           <SCreateContact.Input
                placeholder='Number'
                value={number}
                onChange={handleNumberChange}
            /> 
           <SCreateContact.Button type='button' onClick={handleSubmit}>Add Contact</SCreateContact.Button>
        </SCreateContact.Container>
    );
};

export default CreateContact;