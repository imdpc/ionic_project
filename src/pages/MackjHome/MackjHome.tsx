import React, { useState } from "react";
import {
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonButton,
  IonPage,
  IonSelect,
  IonSelectOption,
  IonHeader,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./MackjHome.css";

const MackjHome: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedValue, setSelectedValue] = useState<string>("");
  const [templateFromCloud, setTemplateFromCloud] = useState<
    string | undefined
  >();
  const handleSelectionChange = (event: CustomEvent) => {
    setSelectedValue(event.detail.value);
  };
  const handleSelection = (
    value: string,
    setState: React.Dispatch<React.SetStateAction<string | undefined>>
  ) => {
    setState(value);
  };
  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    // Here you can handle form submission, such as validation or sending data to a server
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <>
      <IonPage className="ion-padding fsdfsdfdsfd">
        <IonContent>
          <p>Account Logged In</p>
          {/* Your content here */}
          <div className="form-container">
            <IonItem>
              {/* <IonLabel position="floating">User Id</IonLabel> */}
              <IonInput
                placeholder="User Id"
                type="email"
                value={email}
                onIonChange={handleEmailChange}
              />
            </IonItem>
            <IonItem>
              {/* <IonLabel position="floating">Password</IonLabel> */}
              <IonInput
                placeholder="Password"
                type="password"
                value={password}
                onIonChange={handlePasswordChange}
              />
            </IonItem>
            <IonButton expand="block" onClick={handleSubmit}>
              Submit
            </IonButton>
            <IonButton expand="block" onClick={handleSubmit}>
              Create New Account
            </IonButton>
          </div>
          <div className="download-template-container-from-cloud">
            <p>Download Template From Cloud</p>
            <IonSelect
              value={templateFromCloud}
              placeholder="Select One"
              onIonChange={(e) =>
                handleSelection(e.detail.value, setTemplateFromCloud)
              }
              interface="popover"
            >
              {[
                "Template From Cloud",
                "Template From Cloud",
                "Template From Cloud",
                "Template From Cloud",
              ].map((option) => (
                <IonSelectOption key={option} value={option}>
                  {option}
                </IonSelectOption>
              ))}
            </IonSelect>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
              id quas exercitationem in accusantium,
            </p>
          </div>
          <div className="ion-flex-btns">
            <IonButton
              className="ion-button-submit-download"
              expand="block"
              onClick={handleSubmit}
            >
              Refresh
            </IonButton>
            <IonButton
              className="ion-button-submit-download"
              expand="block"
              onClick={handleSubmit}
            >
              Download
            </IonButton>
          </div>
          <div className="download-template-container-from-cloud">
            <p>Download Template From Cloud</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
              id quas exercitationem in accusantium,
            </p>
          </div>
          <IonButton expand="block">Upload</IonButton>
        </IonContent>
      </IonPage>
    </>
  );
};

export default MackjHome;
