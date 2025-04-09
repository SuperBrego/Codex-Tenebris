// components/Character/Header/HeaderAutoRenderer.tsx
import { Form } from 'react-bootstrap';
import { useCharacter } from '../../../hooks/useCharacter';
import { headerFieldsByTemplate } from '../../../config/HeaderConfig';
import FormField from '../../../shared/FormFieldProps';
import FieldRow from '../../../shared/FieldRow';

export default function HeaderAutoRenderer() {
  const { character } = useCharacter();
  const config = headerFieldsByTemplate[character.template];

  if (!config) return null;

  return (
    <Form className="border rounded p-3 mb-4">
      {config.map((row, i) => (
        <FieldRow key={i}>
          {row.map((field, j) => (
            <FormField key={j} {...field} />
          ))}
        </FieldRow>
      ))}
    </Form>
  );
}
