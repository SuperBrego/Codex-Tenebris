import { ReactElement, useState } from "react";
import { SupernaturalTemplatesIDs } from "../enum/SupernaturalTemplates";
import { useCharacter } from "../hooks/useCharacter";
import MortalHeader from "./headers/MortalHeader";
import VampireHeader from "./headers/VampireHeader";
import { Col, Row } from "react-bootstrap";
import GalleryImageSlot from "../shared/GallleryImage/GalleryImageSlot";
import GalleryImage from "../interfaces/GalleryImage";

export default function PersonalHeader() {
  const { character } = useCharacter();
  const [image, setImage] = useState<GalleryImage | undefined>(character.gallery[0] ?? undefined);

  function headerInfo(): ReactElement {
    switch (character.template) {
      case SupernaturalTemplatesIDs.Vampire: return <VampireHeader />;
      default: return <MortalHeader />;
    }
  }

  return <>
    <Row>
      <Col> {headerInfo()} </Col>
      <Col> <GalleryImageSlot image={''} onClearImage={} /> </Col>
    </Row>
  </>
}
