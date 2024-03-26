import {
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonRange,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { earth } from "ionicons/icons";
import React from "react";
import "./Inspect.css";
const Inspect: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="ion-padding">
        <div className="progress-bar-and-earth-icon">
          <IonRange labelPlacement="stacked"></IonRange>
          <IonIcon
            icon={earth}
            // className="earth-icon"
            style={{ width: "40px", height: "40px" }}
          />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Inspect;
