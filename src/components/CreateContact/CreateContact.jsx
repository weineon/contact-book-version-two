import React from 'react';
import { SCreateContact } from './styled';
import { Controller, useForm } from 'react-hook-form';
import AppInput from '../UI/AppInput/AppInput';
import { createContactFields } from './config';

const CreateContact = ({ onSubmit, clearFields }) => {
  const validateName = (name) => {
    if (!name) {
      return 'Name is required';
    }
    if (name.length < 3) {
      return 'Name should be at least 3 characters long';
    }
    if (name.length > 20) {
      return 'Name should be at most 20 characters long';
    }
    return '';
  };

  const validateNumber = (number) => {
    if (!number) {
      return 'Number is required';
    }
    if (number.length < 10) {
      return 'Number should be at least 10 characters long';
    }
    if (number.length > 50) {
      return 'Number should be at most 50 characters long';
    }
    return '';
  };

  const { handleSubmit, control } = useForm();

  const submitForm = (data) => {
    console.log('Submitting form with data:', data);
    onSubmit(data.name, data.phone);
    clearFields();
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
              errorTitle={
                name === 'name'
                  ? validateName(field.value)
                  : validateNumber(field.value)
              }
              {...field}
            />
          )}
        />
      ))}
      <SCreateContact.Button type='submit'>Add Contact</SCreateContact.Button>
    </SCreateContact.Form>
  );
};

export default CreateContact;
