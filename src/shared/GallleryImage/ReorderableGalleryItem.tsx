import { Button, Col, Stack } from "react-bootstrap";
import { ArrowUp, ArrowDown, Trash2 } from "lucide-react";
import GalleryImageSlot from "./GalleryImageSlot"; // ajuste o caminho se estiver diferente
import GalleryImage from "../../interfaces/GalleryImage";
import { useState } from "react";

interface Props {
  index: number;
  image: GalleryImage;
  isFirst: boolean;
  onImageChange: (file: File) => void;
  onClearImage: () => void;
  onUpdateCaption: (caption: string) => void;
  onRemove?: () => void;
  onMoveUp?: () => void;
  onMoveDown?: () => void;
  onDragStart: () => void;
  onDrop: () => void;
  onDragOver: (e: React.DragEvent) => void;
  isDragging: boolean;
}

export default function ReorderableGalleryItem({
  image,
  isFirst,
  onImageChange,
  onClearImage,
  onUpdateCaption,
  onRemove,
  onMoveUp,
  onMoveDown,
  onDragStart,
  onDrop,
  onDragOver,
  isDragging,
}: Props) {
  const [dragging, setIsDragging] = useState(isDragging);


  return (
    <Col
      md={4}
      className={`reorderable-slot ${dragging ? "dragging" : ""}`}
      draggable={!isFirst}
      onDragStart={() => {
        onDragStart();
        setIsDragging(true);
      }}
      onDragEnd={() => setIsDragging(false)}
      onDragOver={onDragOver}
      onDrop={() => {
        onDrop();
        setIsDragging(false);
      }}
    >
      <GalleryImageSlot
        image={image}
        onImageChange={onImageChange}
        onClearImage={onClearImage}
        editableCaption={!isFirst}
        onUpdateCaption={onUpdateCaption}
      />

      <Stack direction="horizontal" gap={1} className="justify-content-end mt-2">
        {!isFirst && (
          <>
            {onMoveUp && (
              <Button size="sm" variant="light" onClick={onMoveUp}>
                <ArrowUp size={16} />
              </Button>
            )}
            {onMoveDown && (
              <Button size="sm" variant="light" onClick={onMoveDown}>
                <ArrowDown size={16} />
              </Button>
            )}
            {onRemove && (
              <Button size="sm" variant="outline-danger" onClick={onRemove}>
                <Trash2 size={16} />
              </Button>
            )}
          </>
        )}
      </Stack>
    </Col>
  );
}
