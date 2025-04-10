export default interface GalleryImage {
  id: string;        // ID único (pode ser UUID ou timestamp)
  src: string;       // URL ou base64 da imagem
  caption: string;   // Legenda descritiva, como "Forma Heroica"
}
