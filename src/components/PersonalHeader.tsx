import { ReactElement, useState } from "react";
import { SupernaturalTemplatesIDs } from "../enum/SupernaturalTemplates";
import { useCharacter } from "../hooks/useCharacter";
import MortalHeader from "./headers/MortalHeader";
import VampireHeader from "./headers/VampireHeader";
import { Col, Row } from "react-bootstrap";
import GalleryImageSlot from "../shared/GallleryImage/GalleryImageSlot";
import GalleryImage from "../interfaces/GalleryImage";

export default function PersonalHeader() {
  const { character, updateCharacter } = useCharacter();
  const [image, setImage] = useState<GalleryImage>(character.gallery[0]);

  function headerInfo(): ReactElement {
    switch (character.template) {
      case SupernaturalTemplatesIDs.Vampire: return <VampireHeader />;
      default: return <MortalHeader />;
    }
  }

  const handleClearImage = () => {
    const img = image;
    img.src = '';
    setImage(img);
    updateCharacter({gallery: [img]});
  }

  const updateAvatar = (file: File) => {
    const id = 'image-avatar'
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result as string;
      const updatedGallery = character.gallery.map((img) =>
        img.id === id ? { ...img, src: base64 } : img
      );
      updateCharacter({ gallery: updatedGallery });
      setImage(updatedGallery[0]);
    };
    reader.readAsDataURL(file);
  }

  return <>
    <Row className="mt-2 mb-2">
      <Col md={8}> {headerInfo()} </Col>
      <Col md={4} className="d-flex justify-content-center">
        <GalleryImageSlot
          image={image}
          onClearImage={handleClearImage}
          onImageChange={(file) => updateAvatar(file)}
          editableCaption={false}
          onUpdateCaption={() => {}}
        />
      </Col>
    </Row>
  </>
}
