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
import { Link } from "react-router-dom";
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
        <div className="list-of-sub-menu-items-for-inspection">
          <Link to="./submenulist" style={{ textDecoration: "none" }}>
            <p>6.5.1 Roof</p>
          </Link>
          <p>6.5.1 Exterior</p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Inspect;
