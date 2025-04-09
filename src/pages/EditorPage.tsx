import { Col, Container, Row, ThemeProvider } from "react-bootstrap";
import CharacterNavbar from "../components/CharacterNavbar";
import SupernaturalTemplateSelect from "../components/SupernaturalTemplateSelect";
import PersonalHeader from "../components/PersonalHeader";
import AttributeSection from "../components/sections/AttributesSection";
import SkillsSection from "../components/sections/SkillsSection";
import MeritsSection from "../components/sections/MeritsSection";
import CharacterSummary from "./CharacterSummary";
import StatusPanel from "../components/sections/StatusPanel";

export default function EditorPage() {
  
  return (
    <ThemeProvider>
      <CharacterNavbar />
      
      <Container className="mt-4" fluid>
        <SupernaturalTemplateSelect />
        <PersonalHeader />
        <AttributeSection />

        <Row className="mt-4">
          {/* Coluna de Habilidades */}
          <Col md={4}> 
            <SkillsSection /> 
          </Col>
          {/* Vantagens */}
          <Col md={8}>
            <Row>
              {/* Vantagens */}
              <Col md={7}> <MeritsSection /> </Col>
              <Col md={5}> <StatusPanel /> </Col>
            </Row>
          </Col>
          
        </Row>
      </Container>
      <div className="p-2">
        <CharacterSummary />
      </div>
    </ThemeProvider>
  );
}