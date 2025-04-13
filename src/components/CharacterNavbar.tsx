import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';
import { Trash2, Plus, Upload } from 'lucide-react';
import { Navbar, Container, Nav, Form, Button, ButtonGroup } from 'react-bootstrap';
import { usePortfolio } from '../hooks/usePortfolio';
import { useTheme } from '../context/ThemeContext';
import { importPortfolioFile } from '../Utils/PortfolioUtils';
import { Character } from '../classes/Character';
import ExportButton from './ExportButton';

export default function CharacterNavbar() {
  const { t } = useTranslation()

  const {
    characters,
    active,
    setActiveCharacter,
    addCharacter,
    removeCharacter,
    setPortfolio,
    save
  } = usePortfolio();

  const { colors } = useTheme();

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = e.target.value;
    setActiveCharacter(selectedId);
  };

  async function handlePortfolioImport(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
  
    try {
      const imported = await importPortfolioFile(file);

      // Isso assegura que o active está corretamente configurado ANTES de jogar no Jotai
      imported.setActive(imported.activeId || imported.characters[0]?.id || '');
      setPortfolio(imported);
      save(imported);
    } catch (err) {
      alert('Erro ao importar personagem.');
      console.error(err);
    }
  }  

  return (
    <>
      <div style={{ height: '45px' }} />

      <Navbar
        expand="lg"
        fixed="top"
        style={{
          backgroundColor: colors.background,
          borderBottom: `1px solid ${colors.border}`,
          zIndex: 1030, // igual ao padrão do Bootstrap para .navbar
        }}
        variant="dark"
      >
        <Container fluid>
          <Navbar.Brand style={{ color: colors.primaryText, fontWeight: 'bold' }}>
            Codex Tenebris
          </Navbar.Brand>

          <Form.Select
            value={active?.id ?? ''}
            onChange={handleSelect}
            style={{
              backgroundColor: colors.background,
              borderColor: colors.border,
              color: colors.primaryText,
              width: 'auto',
            }}
            className="me-3 w-25"
          >
            {characters.map((char) => (
              <option key={char.id} value={char.id} style={{ color: colors.primaryText }} >
                {char.name || 'Sem nome'} - {t(char.templateTraits.name)}
              </option>
            ))}
          </Form.Select>

          {active && (
            <Button
              variant="outline-danger"
              size="sm"
              onClick={() => removeCharacter(active.id)}
              className="me-3"
              disabled={characters.length <= 1}
            >
              <Trash2 size={16} />
            </Button>
          )}

          <Nav className="ms-auto d-flex align-items-center gap-2">
            <ButtonGroup>
              <ExportButton />

              <Form.Label
                className="btn btn-sm btn-outline-primary"
                style={{
                  marginBottom: 0,
                  cursor: 'pointer',
                }}
              >
                <Upload size={16} className="me-1" />
                {t('import')}
                <Form.Control
                  type="file"
                  accept="application/json"
                  hidden
                  onChange={handlePortfolioImport}
                />
              </Form.Label>

              <Button
                variant='outline-primary'
                size="sm"
                onClick={() => addCharacter(new Character())}
              >
                <Plus size={16} className="me-1" />
                {t('new')}
              </Button>
            </ButtonGroup>

            <LanguageSelector />
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
