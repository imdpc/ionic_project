import React, { useRef, useState } from "react";
import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Signature.css";
const SignaturePage: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [signatures, setSignatures] = useState<string[]>([]);
  const canvasRefs = useRef<HTMLCanvasElement[]>([]);

  const startDrawing = (
    index: number,
    event: React.TouchEvent | React.MouseEvent
  ) => {
    const canvas = canvasRefs.current[index];
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x =
      event.type === "touchstart" ? event.touches[0].clientX : event.clientX;
    const y =
      event.type === "touchstart" ? event.touches[0].clientY : event.clientY;
    ctx.beginPath();
    ctx.moveTo(x - rect.left, y - rect.top);
  };

  const endDrawing = () => {
    // Optional: Add logic to handle end of drawing
  };

  const draw = (index: number, event: React.TouchEvent | React.MouseEvent) => {
    const canvas = canvasRefs.current[index];
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x =
      event.type === "touchmove" ? event.touches[0].clientX : event.clientX;
    const y =
      event.type === "touchmove" ? event.touches[0].clientY : event.clientY;
    ctx.lineTo(x - rect.left, y - rect.top);
    ctx.stroke();
  };

  const clearCanvas = (index: number) => {
    const canvas = canvasRefs.current[index];
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const saveSignature = (index: number) => {
    const canvas = canvasRefs.current[index];
    if (!canvas) return;

    const signature = canvas.toDataURL(); // Get the signature as a data URL
    setSignatures((prevSignatures) => [...prevSignatures, signature]);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Signature</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {signatures.map((signature, index) => (
          <div key={index}>
            <img src={signature} alt={`Signature ${index}`} />
          </div>
        ))}
        <canvas
          ref={(ref) => (canvasRefs.current[0] = ref)}
          width={window.innerWidth}
          height={window.innerHeight - 120} // Adjust height as needed
          onTouchStart={(event) => startDrawing(0, event)}
          onTouchEnd={endDrawing}
          onTouchMove={(event) => draw(0, event)}
          onMouseDown={(event) => startDrawing(0, event)}
          onMouseUp={endDrawing}
          onMouseMove={(event) => draw(0, event)}
          style={{
            border: "1px solid black",
            marginBottom: "20px",
            width: "100%",
            height: "80%",
          }}
        ></canvas>
        <div className="clear-save-btn-for-signature">
          <IonButton onClick={() => clearCanvas(0)}>Clear</IonButton>
          <IonButton onClick={() => saveSignature(0)}>Save</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default SignaturePage;
