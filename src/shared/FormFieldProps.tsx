// components/common/FormField.tsx
import { Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

type UseHook<T = string> = () => [T, (value: T) => void];

interface FormFieldProps<T = string> {
  labelKey: string;
  use: UseHook<T>;
  type?: 'text' | 'number' | 'select';
  options?: string[];
}

export default function FormField<T = string>({
  labelKey,
  use,
  type = 'text',
  options,
}: FormFieldProps<T>) {
  const { t } = useTranslation();
  const [value, setValue] = use();

  if (type === 'select') {
    return (
      <Form.Group className="mb-2">
        <Form.Label>{t(labelKey)}</Form.Label>
        <Form.Select value={value as string} onChange={(e) => setValue(e.target.value as T)} size={'sm'}>
          <option value={''} disabled>Selecione uma opção...</option>
          {options?.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </Form.Select>
      </Form.Group>
    );
  }

  return (
    <Form.Group className="mb-2">
      <Form.Label>{t(labelKey)}</Form.Label>
      <Form.Control
        type={type}
        size={'sm'}
        value={value as any}
        onChange={(e) => {
          const parsed = type === 'number' ? Number(e.target.value) : e.target.value;
          setValue(parsed as T);
        }}
      />
    </Form.Group>
  );
}
