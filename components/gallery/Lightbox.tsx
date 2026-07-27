"use client";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

type Props = {
  images: string[];
  selected: number | null;
  onClose: () => void;
};

export default function GalleryLightbox({
  images,
  selected,
  onClose,
}: Props) {
  return (
    <Lightbox
      open={selected !== null}
      close={onClose}
      index={selected ?? 0}
      slides={images.map((src) => ({ src }))}
      carousel={{
        finite: false,
      }}
      controller={{
        closeOnBackdropClick: true,
      }}
    />
  );
}