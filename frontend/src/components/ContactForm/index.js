import { useState } from 'react';
import PropTypes from 'prop-types';

import { Form, ButtonContainer } from './styles';

import Input from '../Input';
import Select from '../Select';
import Button from '../Button';

import FormGroup from '../FormGroup';

export default function ContactForm({ buttonLabel }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    console.log(event);
    console.log({
      name, email, phone, category,
    });
  }

  return (
    <Form onSubmit={(event) => handleSubmit(event)}>
      <FormGroup>
        <Input
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}

        />
      </FormGroup>

      <FormGroup>
        <Input
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <Input
          placeholder="Telefone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <Select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Categoria</option>
          <option value="Discord">Discord</option>
          <option value="Instagram">Instagram</option>
        </Select>
      </FormGroup>

      <ButtonContainer>
        <Button type="submit">
          {buttonLabel}
        </Button>
      </ButtonContainer>

    </Form>
  );
}

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};
