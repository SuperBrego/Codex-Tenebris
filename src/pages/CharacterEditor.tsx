import { Col, Container, Row, ThemeProvider } from "react-bootstrap";
import CharacterNavbar from "./components/CharacterNavbar";
import PersonalHeader from "./components/PersonalHeader";
import SupernaturalTemplateSelect from "../components/SupernaturalTemplateSelect";
import SkillsSection from "./components/sections/SkillsSection";
import AttributeSection from "./components/sections/AttributesSection";
import CharacterSummary from "./CharacterSummary";

export default function CharacterEditor() {
  
  return (
    <ThemeProvider>
      <CharacterNavbar />
      
      <Container className="mt-4" fluid>
        <SupernaturalTemplateSelect />
        <PersonalHeader />
        <AttributeSection />

        <Row className="mt-4">
          {/* Coluna de Habilidades */}
          <Col> <SkillsSection /> </Col>
          <Col>
            {/* Todo resto de conteúdo. */}
          </Col>
        </Row>
      </Container>
      <div className="p-2">
        <CharacterSummary />
      </div>
    </ThemeProvider>
  );
}