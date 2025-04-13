import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import CondensedLayout from "../Views/CondensedLayout";
import OriginalLayout from "../Views/OriginalLayout";

const STORAGE_KEY = "layoutMode";

export default function EditorPage() {
  const [layoutMode, setLayoutMode] = useState<'original' | 'condensado'>('original');

  // Carrega do localStorage ao montar
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'original' || saved === 'condensado') {
      setLayoutMode(saved);
    }
  }, []);

  // Salva no localStorage sempre que mudar
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, layoutMode);
  }, [layoutMode]);
  
  return (
    <>
      {/* Botão fixo abaixo do navbar */}
      <div
        style={{
          position: 'fixed',
          top: '72px',
          right: '16px',
          zIndex: 1025, // abaixo do navbar
        }}
      >
        <Button
          size="sm"
          variant="secondary"
          onClick={() => setLayoutMode((prev) => (prev === 'original' ? 'condensado' : 'original')) }
        >
          Trocar para Layout {layoutMode === 'original' ? 'Condensado' : 'Original'}
        </Button>
      </div>
      
      {layoutMode === 'original' ? <OriginalLayout /> : <CondensedLayout />}
    </>
  );
}