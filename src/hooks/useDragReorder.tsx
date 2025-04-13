import { useState } from "react";

export function useDragReorder<T extends { src?: string }>(
  items: T[],
  onReorder: (newItems: T[]) => void
) {
  const [draggingIndex, setDraggingIndex] = useState<number | null>(null);

  const swapImages = (fromIndex: number, toIndex: number) => {
    const updated = [...items];

    if (toIndex === 0) {
      // Troca apenas os src
      const tempSrc = updated[0].src;
      updated[0].src = updated[fromIndex].src;
      updated[fromIndex].src = tempSrc;
    } else {
      const [moved] = updated.splice(fromIndex, 1);
      updated.splice(toIndex, 0, moved);
    }

    onReorder(updated);
  };

  const handleDragStart = (index: number) => {
    setDraggingIndex(index);
  };

  const handleDrop = (targetIndex: number) => {
    if (draggingIndex === null || draggingIndex === targetIndex) return;
    swapImages(draggingIndex, targetIndex);
    setDraggingIndex(null);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  return {
    draggingIndex,
    handleDragStart,
    handleDrop,
    handleDragOver,
    swapImages,
  };
}
