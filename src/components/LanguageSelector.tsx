import { useTranslation } from 'react-i18next';
import { Form } from 'react-bootstrap';

export default function LanguageSelector() {
  const { i18n } = useTranslation();

  return (
    <Form.Select
      onChange={(e) => i18n.changeLanguage(e.target.value)}
      value={i18n.language}
      style={{ maxWidth: 150 }}
    >
      <option value="pt">🇧🇷 Português</option>
      <option value="en">🇺🇸 English</option>
    </Form.Select>
  );
}
// This component is a language selector that allows users to switch between Portuguese and English.
// It uses the `useTranslation` hook from the `react-i18next` library to manage language changes.