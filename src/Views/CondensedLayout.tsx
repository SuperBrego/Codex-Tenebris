import { Col, Container, Row } from "react-bootstrap";
import PersonalHeader from "../components/PersonalHeader";
import SupernaturalTemplateSelect from "../components/SupernaturalTemplateSelect";
import PersonalInfoSection from "../components/sections/PersonalInfoSection";
import AttributeSection from "../components/sections/AttributesSection";
import SkillsSection from "../components/sections/SkillsSection";
import MeritsSection from "../components/sections/MeritsSection";
import OtherTraitsSection from "../components/sections/OtherTraitsSection";
import EquipmentsSection from "../components/sections/EquipmentsSection";
import CharacterNavbar from "../components/CharacterNavbar";
import HealthSection from "../components/sections/HealthSection";
import WillpowerSection from "../components/sections/WillpowerSection";
import MoralitySection from "../components/sections/MoralitySection";
import ConditionsSection from "../components/sections/ConditionsSection";
import AspirationsSections from "../components/sections/AspirationsSection";
import GallerySection from "../pages/GallerySection";
import WerewolfForms from "../modules/werewolf/WerewolfFormsCards";
import Renown from "../modules/werewolf/Renown";
import Essence from "../modules/werewolf/Essence";
import Gifts from "../modules/werewolf/Gifts";

export default function CondensedLayout() {
  return (
    <Container fluid className="mt-4">
      {/* Cabeçalho do personagem */}
      <CharacterNavbar />
      <SupernaturalTemplateSelect />
      <PersonalHeader />

      {/* Atributos (3 colunas lado a lado) */}
      <Row className="mt-3">
        <Col><AttributeSection /></Col>
      </Row>

      {/* Habilidades + Méritos + Vantagens Derivadas */}
      <Row className="mt-3">
        <Col md={12}><SkillsSection orientation="horizontal" /></Col>
      </Row>

      {/* Informações pessoais (duas colunas pequenas) */}
      <Row className="mt-3">
        <Col md={6}> <HealthSection />   </Col>
        <Col md={6}> <WillpowerSection /> </Col>
        <Col md={6}>
          {/* Para Lobisomem */}
          <Renown />
          <Essence />
          <Gifts />

          {/* Condições */}
          <ConditionsSection />
    
          {/* Aspirações */}
          <AspirationsSections />

        </Col>
        <Col md={6}>
          <MoralitySection />
        </Col>
      </Row>

      <Row className="mt-3">
        <Col md={6}><MeritsSection /></Col>
        <Col md={6}><OtherTraitsSection /></Col>
      </Row>
      
      <Row className="mt-3">
        <Col md={12}> <WerewolfForms /> </Col>
      </Row>

      <Row className="mt-3">
        <Col md={2}> 
          
        </Col>
      </Row>

      {/* Equipamentos: Ataques, Armaduras, Gerais */}
      <Row className="mt-3">
        <Col><EquipmentsSection /></Col>
      </Row>

      {/* Descrição física e história */}
      <Row className="mt-3">
        <Col> <PersonalInfoSection /> </Col>
      </Row>
      
      {/* Galeria */}
      <Row className="mt-3">
        <Col> <GallerySection /> </Col>
      </Row>
    </Container>
  );
}
