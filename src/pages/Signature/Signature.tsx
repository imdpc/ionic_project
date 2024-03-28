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
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);

  const startDrawing = (event: React.TouchEvent | React.MouseEvent) => {
    setIsDrawing(true);
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x =
      event.type === "touchstart" ? event.touches[0].clientX : event.clientX;
    const y =
      event.type === "touchstart" ? event.touches[0].clientY : event.clientY;
    setStartX(x - rect.left);
    setStartY(y - rect.top);
  };

  const endDrawing = () => {
    setIsDrawing(false);
  };

  const draw = (event: React.TouchEvent | React.MouseEvent) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x =
      event.type === "touchmove" ? event.touches[0].clientX : event.clientX;
    const y =
      event.type === "touchmove" ? event.touches[0].clientY : event.clientY;

    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(x - rect.left, y - rect.top);
    ctx.stroke();
    setStartX(x - rect.left);
    setStartY(y - rect.top);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const saveSignature = () => {
    const canvas = canvasRef.current;
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
          ref={canvasRef}
          width={window.innerWidth}
          height={window.innerHeight - 120} // Adjust height as needed
          onTouchStart={startDrawing}
          onTouchEnd={endDrawing}
          onTouchMove={draw}
          onMouseDown={startDrawing}
          onMouseUp={endDrawing}
          onMouseMove={draw}
          style={{
            border: "1px solid black",
            marginBottom: "20px",
            width: "100%",
            height: "80%",
          }}
        ></canvas>
        <div className="clear-save-btn-for-signature">
          <IonButton onClick={clearCanvas}>Clear</IonButton>
          <IonButton onClick={saveSignature}>Save</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default SignaturePage;
