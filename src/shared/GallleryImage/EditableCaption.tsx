import { Edit } from "lucide-react";
import { useState } from "react";
import { Form, OverlayTrigger, Tooltip } from "react-bootstrap";

interface Props {
  caption?: string;
  editable: boolean;
  onUpdate?: (caption: string) => void;
}

export default function EditableCaption({ caption, editable, onUpdate }: Props) {
  const [isEditing, setIsEditing] = useState(false);

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    onUpdate?.(e.target.value);
    setIsEditing(false);
  };

  if (!editable) {
    return <small>{caption || <em>(sem legenda)</em>}</small>;
  }

  if (isEditing) {
    return (
      <Form.Control
        type="text"
        size="sm"
        autoFocus
        defaultValue={caption}
        onBlur={handleBlur}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            (e.target as HTMLInputElement).blur();
          }
        }}
      />
    );
  }

  return (
    <OverlayTrigger placement="top" overlay={<Tooltip>Editar Legenda...</Tooltip>}>
      <small
        style={{ cursor: "pointer" }}
        onClick={() => setIsEditing(true)}
      >
        {caption || <em>(sem legenda)</em>} <Edit size={12} />
      </small>
    </OverlayTrigger>
  );
}
