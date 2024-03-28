import React, { useRef, useState } from "react";
import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

const SignaturePage: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);

  const startDrawing = (event: React.TouchEvent | React.MouseEvent) => {
    setIsDrawing(true);
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const { offsetX, offsetY } = event.nativeEvent;
    ctx.beginPath();
    ctx.moveTo(offsetX, offsetY);
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

    const { offsetX, offsetY } = event.nativeEvent;
    ctx.lineTo(offsetX, offsetY);
    ctx.stroke();
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const saveSignature = () => {
    // Implement logic to save the signature, e.g., send it to the server
    onClose();
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Signature</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
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
          style={{ border: "1px solid black" }}
        ></canvas>
        <IonButton onClick={clearCanvas}>Clear</IonButton>
        <IonButton onClick={saveSignature}>Done</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default SignaturePage;
