import { nanoid } from 'nanoid';
import { useState } from 'react';
import { Form } from './ContactForm.styled';

export const ContactForm = ({ onSubmitForm }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const submitForm = e => {
    e.preventDefault();
    onSubmitForm({ name: name, number: number });
    setName('');
    setNumber('');
  };

  const changeInput = input => {
    switch (input.name) {
      case 'name':
        setName(input.value);
        break;
      case 'number':
        setNumber(input.value);
        break;
      default:
    }
  };

  const inputNameId = nanoid(5);
  const inputNumberId = nanoid(5);

  return (
    <Form onSubmit={submitForm}>
      <label htmlFor={inputNameId}>Name</label>
      <input
        type="text"
        id={inputNameId}
        name="name"
        placeholder="Enter name ..."
        onChange={e => {
          return changeInput(e.target);
        }}
        value={name}
        required
      />
      <label>Number</label>
      <input
        type="tel"
        id={inputNumberId}
        name="number"
        placeholder="XXX-XX-XX"
        onChange={e => {
          return changeInput(e.target);
        }}
        value={number}
        required
      />
      <button type="submit">Add contact</button>
    </Form>
  );
};
