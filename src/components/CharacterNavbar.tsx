import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';
import { Trash2, Plus, Upload } from 'lucide-react';
import {
  Navbar,
  Container,
  Nav,
  Form,
  Button,
  ButtonGroup,
} from 'react-bootstrap';
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
    save,
  } = usePortfolio();

  const theme = useTheme();

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = e.target.value;
    setActiveCharacter(selectedId);
  };

  return (
    <>
      <div style={{ height: '72px' }} />

      <Navbar
        expand="lg"
        fixed="top"
        style={{
          backgroundColor: theme.colors.background,
          borderBottom: `1px solid ${theme.colors.border}`,
        }}
        variant="dark"
      >
        <Container fluid>
          <Navbar.Brand style={{ color: theme.colors.primaryText, fontWeight: 'bold' }}>
            Codex Tenebris
          </Navbar.Brand>

          <Form.Select
            value={active?.id ?? ''}
            onChange={handleSelect}
            style={{
              backgroundColor: theme.colors.background,
              borderColor: theme.colors.border,
              color: '#E6EEF9',
              width: 'auto',
            }}
            className="me-3 w-25"
          >
            {characters.map((char) => (
              <option key={char.id} value={char.id} style={{ color: theme.colors.primaryText }} >
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
                className="btn btn-sm"
                style={{
                  backgroundColor: theme.colors.background,
                  color: theme.colors.primaryText,
                  borderColor: theme.colors.border,
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
                  onChange={async (e: any) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      try {
                        const imported = await importPortfolioFile(file);
                        setPortfolio(imported);
                        save(imported);
                      } catch (err) {
                        alert('Erro ao importar personagem.');
                        console.error(err);
                      }
                    }
                  }}
                />
              </Form.Label>

              <Button
                style={{ backgroundColor: theme.colors.background, borderColor: theme.colors.border }}
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
