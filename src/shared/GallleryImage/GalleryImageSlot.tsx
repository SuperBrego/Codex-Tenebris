import { useRef, useState } from "react";
import { Button } from "react-bootstrap";
import GalleryImage from "../../interfaces/GalleryImage";
import EditableCaption from "./EditableCaption";
import ImageModalViewer from "./ImageModalViewer";
import { Plus, X, ZoomIn } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

interface GalleryImageSlotProps {
  image: GalleryImage;
  onImageChange: (file: File) => void;
  onClearImage: () => void;
  editableCaption?: boolean;
  onUpdateCaption?: (caption: string) => void;
}

export default function GalleryImageSlot({
  image,
  onImageChange,
  onClearImage,
  editableCaption = false,
  onUpdateCaption,
}: GalleryImageSlotProps) {
  const { colors } = useTheme(); 
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [showModal, setShowModal] = useState(false);

  const triggerFileInput = () => inputRef.current?.click();
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) onImageChange(file);
    // Resetar o valor do input para permitir reescolher a mesma imagem
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <div className="text-center">
      <div
        onClick={triggerFileInput}
        className="border border-secondary rounded d-flex align-items-center justify-content-center mb-1 position-relative"
        style={{ minWidth: '260px', width: "100%", height: "280px", cursor: "pointer", backgroundColor: colors.background }}
      >
        {image.src ? (
          <>
            <img
              src={image.src}
              alt={image.caption}
              className="img-fluid h-100 w-100 object-fit-cover rounded"
              style={{ objectFit: "cover" }}
            />
            <Button
              variant="light"
              size="sm"
              className="position-absolute top-0 end-0 m-1 p-1"
              onClick={(e) => {
                e.stopPropagation();
                onClearImage();
              }}
            >
              <X size={16} />
            </Button>
          </>
        ) : (
          <Plus size={32} className="text-secondary" />
        )}
      </div>

      <div className="d-flex justify-content-between align-items-center">
        <EditableCaption
          caption={image.caption}
          editable={editableCaption}
          onUpdate={onUpdateCaption}
        />
        {image.src && (
          <Button variant="link" size="sm" className="p-0 ms-2" onClick={() => setShowModal(true)}>
            <ZoomIn className="me-1" />
            Ver maior
          </Button>
        )}
      </div>

      <input
        type="file"
        accept="image/*"
        hidden
        ref={inputRef}
        onChange={handleFileChange}
      />

      <ImageModalViewer src={image.src} show={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}
