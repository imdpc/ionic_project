import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useState } from "react";
import "./Manage.css";
const Manage: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState<string>("");
  const [availableTemplates, setAvailableTemplates] = useState<
    string | undefined
  >();

  const handleSelection = (
    value: string,
    setState: React.Dispatch<React.SetStateAction<string | undefined>>
  ) => {
    setState(value);
  };
  return (
    <IonPage className="ion-padding">
      <IonContent>
        <p>Account Logged In</p>
        <div className="available-templates-container">
          <p>Avaialble Templates</p>
          <IonSelect
            value={availableTemplates}
            placeholder="Select One"
            onIonChange={(e) =>
              handleSelection(e.detail.value, setAvailableTemplates)
            }
            interface="popover"
          >
            {[
              "Avaialble Templates",
              "Avaialble Templates",
              "Avaialble Templates",
            ].map((option) => (
              <IonSelectOption key={option} value={option}>
                {option}
              </IonSelectOption>
            ))}
          </IonSelect>
          <IonItem>
            {/* <IonLabel position="floating">Password</IonLabel> */}
            <IonInput placeholder="Name the inspection" />
          </IonItem>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam
            explicabo modi porro fuga veniam, aspernatur earum, alias ipsum ipsa
            ex beatae quasi reprehenderit. Officiis quis expedita debitis illo
            omnis sed.
          </p>
        </div>
        <div className="ion-flex-btns">
          <IonButton
            className="ion-button-submit-download"
            expand="block"
            // onClick={handleSubmit}
          >
            Create
          </IonButton>
          <IonButton
            className="ion-button-submit-download"
            expand="block"
            // onClick={handleSubmit}
          >
            Delete
          </IonButton>
        </div>
        <div className="available-templates-container">
          <p>Client Presentation</p>{" "}
          <p>Manage Macj Client/Team Inspecction Session</p>
          <IonButton
            className="ion-button-Start-Macj-Client-Team-Inspection"
            expand="block"
            // onClick={handleSubmit}
          >
            Start Macj Client/Team Inspection
          </IonButton>
        </div>
        <div className="available-templates-container">
          <p>Avaialble Inspection</p>

          <p>
            Select an existing inspection to continue working on it. When you're
            done go to the Sync tab to upload it to the cloud
          </p>
          <div className="ion-flex-btns">
            <IonButton
              className="ion-button-submit-download"
              expand="block"
              // onClick={handleSubmit}
            >
              Open
            </IonButton>
            <IonButton
              className="ion-button-submit-download"
              expand="block"
              // onClick={handleSubmit}
            >
              Options
            </IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Manage;
