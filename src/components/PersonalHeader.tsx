import { ReactElement } from "react";
import { SupernaturalTemplatesIDs } from "../enum/SupernaturalTemplates";
import { useCharacter } from "../hooks/useCharacter";
import MortalHeader from "./headers/MortalHeader";
import VampireHeader from "./headers/VampireHeader";
import { Col, Row } from "react-bootstrap";
import GalleryImageSlot from "../shared/GallleryImage/GalleryImageSlot";
import WerewolfHeader from "./headers/WerewolfHeader";

export default function PersonalHeader() {
  const { character, updateCharacter } = useCharacter();
  const avatar = character.gallery.find(img => img.id === 'image-avatar')!;

  function headerInfo(): ReactElement {
    switch (character.template) {
      case SupernaturalTemplatesIDs.Vampire: return <VampireHeader />;
      case SupernaturalTemplatesIDs.Werewolf: return <WerewolfHeader />;
      // case SupernaturalTemplatesIDs.Mage: return <MageHeader />;
      // case SupernaturalTemplatesIDs.Mummy: return <MummyHeader />;
      // case SupernaturalTemplatesIDs.Changeling: return <ChangelingHeader />;
      // case SupernaturalTemplatesIDs.Demon: return <DemonHeader />;
      // case SupernaturalTemplatesIDs.Hunter: return <HunterHeader />;
      // case SupernaturalTemplatesIDs.Deviant: return <DeviantHeader />;
      default: return <MortalHeader />;
    }
  }

  const handleClearImage = () => {
    const updatedGallery = character.gallery.map((img) =>
      img.id === 'image-avatar' ? { ...img, src: '' } : img
    );
    updateCharacter({ gallery: updatedGallery });
  };
  
  const updateAvatar = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result as string;
      const updatedGallery = character.gallery.map((img) =>
        img.id === 'image-avatar' ? { ...img, src: base64 } : img
      );
      updateCharacter({ gallery: updatedGallery });
    };
    reader.readAsDataURL(file);
  };
  

  return <>
    <Row className="mt-2 mb-2">
      <Col md={8}> {headerInfo()} </Col>
      <Col md={4} className="d-flex justify-content-center">
        <GalleryImageSlot
          image           = {avatar}
          onClearImage    = {handleClearImage}
          onImageChange   = {(file) => updateAvatar(file)}
          editableCaption = {false}
          onUpdateCaption = {() => {}}
        />
      </Col>
    </Row>
  </>
}
