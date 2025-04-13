import { Button, Card, Col, Row } from "react-bootstrap";
import { useCharacter } from "../hooks/useCharacter";
import { Plus, Trash2 } from "lucide-react";
import GalleryImageSlot from "../shared/GallleryImage/GalleryImageSlot";
import { useTheme } from "../context/ThemeContext";

export default function GallerySection() {
  const { character, updateCharacter } = useCharacter();
  const { colors } = useTheme();

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
      <Card.Header style={{ backgroundColor: colors.primary, color: colors.primaryText }}>
        Galeria
      </Card.Header>
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
            <Col md={4} key={image.id}>
              <GalleryImageSlot
                image={image}
                onImageChange={(file: any) => updateGalleryImage(image.id, file)}
                onClearImage={() => clearGalleryImage(image.id)}
                editableCaption={index >= 1}
                onUpdateCaption={(caption: string) => updateGalleryCaption(image.id, caption)}
              />
              {index >= 1 && (
                <div className="text-end mt-1">
                  <Button
                    variant="outline-danger"
                    size="sm"
                    onClick={() => removeGalleryImage(image.id)}
                  >
                    <Trash2 className="me-1" /> Remover
                  </Button>
                </div>
              )}
            </Col>
          ))}
        </Row>
      </Card.Body>
    </Card>
  );
}
