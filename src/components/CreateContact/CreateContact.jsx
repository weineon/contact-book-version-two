import React, { useCallback, useState } from 'react';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { SCreateContact } from './styled';
import { useForm, Controller } from 'react-hook-form';
import AppInput from '../UI/AppInput/AppInput';
import { createContactFields } from './config';

const CreateContact = ({ onSubmit, clearFields }) => {
    // const [name, setName] = useState('');
    // const [number, setNumber] = useState('');

    // const handleNameChange = useCallback((event) => {
    //     const { value } = event.target;
    //     setName(value);
    // }, []);

    // const handleNumberChange = useCallback((event) => {
    //     const { value } = event.target;
    //     setNumber(value);
    // }, []);

    // const handleKeyDown = useCallback((event) => {
    //     if(event.key === "Enter") {
    //         onSubmit(name, number);
    //         setName('');
    //         setNumber('');
    //     }
    // }, [onSubmit, name, number])

    const schema = yup.object().shape({
        name: yup.string()
            .required()
            .min(3)
            .max(20),
        number: yup.number()
            .required()
            .min(10)
            .max(50),
    })

    const {
        control,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm({
        resolver: yupResolver(schema)
    })

    const submitForm = (data) => {
        console.log('Submitting form with data:', data);
        onSubmit(data.name, data.number);
        clearFields()
    };
    
    return (
        <SCreateContact.Form onSubmit={handleSubmit(submitForm)}>
            {createContactFields.map(({ name, placeholder, type, label }) => (
                <Controller
                    key={name}
                    control={control}
                    name={name}
                    render={({ field }) => (
                        <AppInput
                            placeholder={placeholder}
                            value={field.value}
                            type={type}
                            label={label}
                            errorTitle={errors[name]?.message || ''}
                            {...field} />
                    )} 
                /> 
            ))}          
           <SCreateContact.Button type='submit'>
                Add Contact
           </SCreateContact.Button>
        </SCreateContact.Form>
    );
};

export default CreateContact;