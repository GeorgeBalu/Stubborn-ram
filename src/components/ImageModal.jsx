import { useEffect } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import "./ImageModal.css";

function ImageModal({ image, onClose }) {
  useEffect(() => {
    if (!image) return;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [image, onClose]);

  if (!image) return null;

  return (
    <div className="imageModalOverlay" onClick={onClose}>
      <div className="imageModalContent" onClick={(e) => e.stopPropagation()}>
        <button className="imageModalClose" onClick={onClose}>
          ×
        </button>

        <TransformWrapper
          initialScale={1}
          minScale={1}
          maxScale={5}
          centerOnInit
          doubleClick={{
            mode: "toggle",
          }}
          wheel={{
            step: 0.15,
          }}
          pinch={{
            step: 5,
          }}
        >
          <TransformComponent
            wrapperClass="viewerWrapper"
            contentClass="viewerContent"
          >
            <img src={image} alt="" className="imageModalImage" />
          </TransformComponent>
        </TransformWrapper>
      </div>
    </div>
  );
}

export default ImageModal;
