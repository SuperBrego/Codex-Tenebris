import { ReactElement } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useCharacter } from "../hooks/useCharacter";
import { PlusCircle, Trash2 } from "lucide-react";
import { useTranslation } from "react-i18next";

interface BaseProps { 
  list: string[];
  label: string;
  placeholder?: string;
}

type Props = | (BaseProps & { trait: string; templateTrait?: never }) | (BaseProps & { trait?: never; templateTrait: string });

export default function TextListCard({ label, trait, templateTrait, list, placeholder = 'Descrição' }: Props): ReactElement {
  const { character, updateCharacter } = useCharacter();
  const { t } = useTranslation();

  const handleAdd = () => {
    const updated = [...list, ''];

    if(trait) updateCharacter({ [trait]: updated });
    if(templateTrait) updateCharacter({ templateTraits: {
      ...character.templateTraits,
      [templateTrait]: updated
    } });
  };

  const handleUpdate = (index: number, value: string) => {
    const updated = [...list];
    updated[index] = value;

    if(trait) updateCharacter({ [trait]: updated });
    if(templateTrait) updateCharacter({ templateTraits: {
      ...character.templateTraits,
      [templateTrait]: updated
    } });
  };

  const removeCondition = (index: number) => {
    const updated = list.filter((_, i) => i !== index);
    
    if(trait) updateCharacter({ [trait]: updated });
    if(templateTrait) updateCharacter({ templateTraits: {
      ...character.templateTraits,
      [templateTrait]: updated
    } });
  };

  return <>
    <Card className="mb-3">
      <Card.Header>
        {label}
      </Card.Header>
      <Card.Body>
        {list.map((traitText, index) => (
            <div key={index} className="input-group">
              <Form.Control
                value={traitText}
                onChange={(e) => handleUpdate(index, e.target.value)}
                placeholder={placeholder}
              />
              <Button 
                variant="outline-danger"
                onClick={() => removeCondition(index)}
                title="Remover"
              >
                <Trash2 size={18} />
              </Button>
            </div>
          ))}

          <Button 
            variant="outline-primary"
            className="d-flex align-items-center gap-2 mt-2"
            onClick={handleAdd}
          >
            <PlusCircle size={18} /> {t("add")} {label}
          </Button>
      </Card.Body>
    </Card>
  </>;
}