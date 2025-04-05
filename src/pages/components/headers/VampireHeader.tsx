import { Form } from 'react-bootstrap';
import FieldRow from '../../../shared/FieldRow';
import FormField from '../../../shared/FormFieldProps';
import { useField } from '../../../hooks/useField';
import { useTraitField } from '../../../hooks/useTraitField';

export default function VampireHeader() {
  return (
    <Form className="border rounded p-3 mb-4">
      <FieldRow>
        <FormField labelKey="name" use={() => useField('name')} />
        <FormField labelKey="mask" use={() => useTraitField('mask')} />
        <FormField
          labelKey="clan"
          use={() => useTraitField('clan')}
          type="select"
          options={['Daeva', 'Gangrel', 'Mekhet', 'Nosferatu', 'Ventrue']}
        />
      </FieldRow>

      <FieldRow>
        <FormField labelKey="player" use={() => useField('player')} />
        <FormField labelKey="dirge" use={() => useTraitField('dirge')} />
        <FormField labelKey="bloodline" use={() => useTraitField('bloodline')} />
      </FieldRow>

      <FieldRow>
        <FormField labelKey="chronicle" use={() => useField('chronicle')} />
        <FormField labelKey="concept" use={() => useField('concept')} />
        <FormField labelKey="covenant" use={() => useTraitField('covenant')} />
      </FieldRow>
    </Form>
  );
}
