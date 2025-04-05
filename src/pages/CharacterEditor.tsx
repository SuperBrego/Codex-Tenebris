import { ThemeProvider } from "react-bootstrap";
import CharacterNavbar from "./components/CharacterNavbar";
import PersonalHeader from "./components/PersonalHeader";
import SupernaturalTemplateSelect from "../components/SupernaturalTemplateSelect";

export default function CharacterEditor() {
  
  return (
    <ThemeProvider>
      <CharacterNavbar />
      <SupernaturalTemplateSelect />
      <PersonalHeader />
      {/* outras seções */}
    </ThemeProvider>
  );
}