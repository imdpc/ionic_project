import {
  IonContent,
  IonHeader,
  IonIcon,
  IonLabel,
  IonPage,
  IonRange,
  IonTabBar,
  IonTabButton,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import {
  barChart,
  cameraSharp,
  cloudUploadSharp,
  copySharp,
  earth,
  eyeOutline,
  folderSharp,
  person,
  settingsSharp,
  sync,
  videocamOffSharp,
  videocamSharp,
} from "ionicons/icons";
import React from "react";
import "./Inspect.css";
import { Link } from "react-router-dom";
import { Camera, CameraResultType } from "@capacitor/camera";
import { useState } from "react";

const Inspect: React.FC = () => {
  const [imageSrc, setImageSrc] = useState<string | undefined>(undefined);
  const takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
    });

    setImageSrc(image.dataUrl);
  };

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
        </div>{" "}
        {imageSrc && <img src={imageSrc} alt="Captured" />}{" "}
        {/* Display captured image */}
      </IonContent>{" "}
      <div className="bottom-section-for-camera-video-upload-tab-list">
        <IonTabBar slot="bottom">
          <IonTabButton tab="sync">
            <IonIcon icon={copySharp} />
          </IonTabButton>
          <IonTabButton tab="manage" onClick={takePicture}>
            <IonIcon icon={cameraSharp} />
          </IonTabButton>
          <IonTabButton tab="clientinfo">
            <IonIcon icon={videocamSharp} />
          </IonTabButton>
          <IonTabButton tab="inspect">
            <IonIcon icon={cloudUploadSharp} />
          </IonTabButton>
          <IonTabButton tab="setting">
            <IonIcon icon={folderSharp} />
          </IonTabButton>
        </IonTabBar>
      </div>
    </IonPage>
  );
};

export default Inspect;
