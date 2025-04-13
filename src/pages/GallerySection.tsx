import { Button, Card, Col, Row } from "react-bootstrap";
import { useCharacter } from "../hooks/useCharacter";
import { Plus } from "lucide-react";
import ReorderableGalleryItem from "../shared/GallleryImage/ReorderableGalleryItem";
import { useDragReorder } from "../hooks/useDragReorder";

export default function GallerySection() {
  const { character, updateCharacter } = useCharacter();
  
  const {
    draggingIndex,
    handleDragStart,
    handleDrop,
    handleDragOver,
    swapImages,
  } = useDragReorder(character.gallery, (updated) => updateCharacter({ gallery: updated }));
  

  const updateGalleryImage = (id: string, file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result as string;
      const updatedGallery = character.gallery.map((img) =>
        img.id === id ? { ...img, src: base64 } : img
      );
      updateCharacter({ gallery: updatedGallery });
    };
    reader.readAsDataURL(file);
  };

  const clearGalleryImage = (id: string) => {
    const updatedGallery = character.gallery.map((img) =>
      img.id === id ? { ...img, src: "" } : img
    );
    updateCharacter({ gallery: updatedGallery });
  };

  const removeGalleryImage = (id: string) => {
    const updatedGallery = character.gallery.filter((img) => img.id !== id);
    updateCharacter({ gallery: updatedGallery });
  };

  const updateGalleryCaption = (id: string, caption: string) => {
    const updatedGallery = character.gallery.map((img) =>
      img.id === id ? { ...img, caption } : img
    );
    updateCharacter({ gallery: updatedGallery });
  };

  const addGalleryImage = () => {
    const newId = `extra-${Date.now()}`;
    const newImage = {
      id: newId,
      src: "",
      caption: "Nova Imagem",
    };
    updateCharacter({ gallery: [...character.gallery, newImage] });
  };

  return (
    <Card>
      <Card.Header> Galeria </Card.Header>
      <Card.Body>
        <Row className="mb-3">
          <Col md={12}>
            <Button variant="outline-primary" onClick={addGalleryImage}>
              <Plus className="me-1" /> Adicionar Imagem
            </Button>
          </Col>
        </Row>

        <Row className="g-3">
          {character.gallery.map((image, index) => (
            <ReorderableGalleryItem
              key={image.id}
              index={index}
              image={image}
              isFirst={index === 0}
              onImageChange={(file) => updateGalleryImage(image.id, file)}
              onClearImage={() => clearGalleryImage(image.id)}
              onUpdateCaption={(caption) => updateGalleryCaption(image.id, caption)}
              onRemove={index > 0 ? () => removeGalleryImage(image.id) : undefined}
              onMoveUp={index > 1 ? () => swapImages(index, index - 1) : undefined}
              onMoveDown={index < character.gallery.length - 1 ? () => swapImages(index, index + 1) : undefined}
              onDragStart={() => handleDragStart(index)}
              onDrop={() => handleDrop(index)}
              onDragOver={handleDragOver}
              isDragging={draggingIndex === index}
            />
          ))}
        </Row>
      </Card.Body>
    </Card>
  );
}
