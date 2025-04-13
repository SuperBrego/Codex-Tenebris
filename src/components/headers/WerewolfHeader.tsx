import { ReactElement } from "react";
import { Form } from "react-bootstrap";
import FieldRow from "../../shared/FieldRow";
import FormField from "../../shared/FormFieldProps";
import { useField } from "../../hooks/useField";
import { useTraitField } from "../../hooks/useTraitField";

export default function WerewolfHeader(): ReactElement {
  return <>
  <Form className="border rounded p-3 mb-4">
    <FieldRow>
      <FormField labelKey="name" use={() => useField('name')} />
      <FormField labelKey="blood" use={() => useTraitField('blood')} />
      <FormField
        labelKey="auspice"
        use={() => useTraitField('auspice')}
        type="select"
        options={['Cahalith', 'Elodoth', 'Irraka', 'Ithaeur']}
      />
    </FieldRow>

    <FieldRow>
      <FormField labelKey="player" use={() => useField('player')} />
      <FormField labelKey="bone" use={() => useTraitField('bone')} />
      <FormField labelKey="tribe" use={() => useTraitField('tribe')} />
    </FieldRow>

    <FieldRow>
      <FormField labelKey="chronicle" use={() => useField('chronicle')} />
      <FormField labelKey="concept" use={() => useField('concept')} />
      <FormField labelKey="lodge" use={() => useTraitField('lodge')} />
    </FieldRow>
  </Form>
  </>
}