import { Form } from 'react-bootstrap';
import FieldRow from '../../../shared/FieldRow';
import FormField from '../../../shared/FormFieldProps';
import { useField } from '../../../hooks/useField';
import { useTraitField } from '../../../hooks/useTraitField';

export default function MortalHeader() {
  return (
    <Form className="border rounded p-3 mb-4">
      <FieldRow>
        <FormField labelKey="name" use={() => useField('name')} />
        <FormField labelKey="virtue" use={() => useTraitField('virtue')} />
        <FormField labelKey="chronicle" use={() => useField('chronicle')} />
      </FieldRow>

      <FieldRow>
        <FormField labelKey="age" use={() => useField('age')} type="number" />
        <FormField labelKey="vice" use={() => useTraitField('vice')} />
        <FormField labelKey="faction" use={() => useTraitField('faction')} />
      </FieldRow>

      <FieldRow>
        <FormField labelKey="player" use={() => useField('player')} />
        <FormField labelKey="concept" use={() => useField('concept')} />
        <FormField labelKey="group" use={() => useField('group')} />
      </FieldRow>
    </Form>
  );
}
