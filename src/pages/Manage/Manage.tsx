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
import './Manage.css'
const Manage: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState<string>("");

  const handleSelectionChange = (event: CustomEvent) => {
    setSelectedValue(event.detail.value);
  };
  return (
    <IonPage className="ion-padding">
      <IonContent>
        <p>Account Logged In</p>
        <div className="available-templates-container">
          <p>Avaialble Templates</p>
          <IonItem>
            <IonLabel>Select an option</IonLabel>
            <IonSelect
              value={selectedValue}
              onIonChange={handleSelectionChange}
            >
              <IonSelectOption value="option1">Option 1</IonSelectOption>
              <IonSelectOption value="option2">Option 2</IonSelectOption>
              <IonSelectOption value="option3">Option 3</IonSelectOption>
            </IonSelect>
          </IonItem>
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
            Refresh
          </IonButton>
          <IonButton
            className="ion-button-submit-download"
            expand="block"
            // onClick={handleSubmit}
          >
            Download
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Manage;
