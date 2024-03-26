import {
  IonAvatar,
  IonButton,
  IonContent,
  IonDatetimeButton,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonModal,
  IonPage,
  IonTextarea,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { Icon } from "ionicons/dist/types/components/icon/icon";
import { phonePortrait, phonePortraitSharp, square } from "ionicons/icons";
import React, { useState } from "react";
import "./ClientInfo.css";
import { IonDatetime } from "@ionic/react";

const ClientInfo: React.FC = () => {
  return (
    <>
      <IonPage>
        <IonContent className="ion-padding">
          <div className="client-info-main-first-div">
            <IonButton
              className="ion-button-import-from-isn-macj-offic"
              expand="block"
              // onClick={handleSubmit}
            >
              Import from ISN
            </IonButton>
            <IonButton
              className="ion-button-import-from-isn-macj-offic"
              expand="block"
              // onClick={handleSubmit}
            >
              Import from Macj Office
            </IonButton>
            <IonItem className="item-for-empty-square">
              <IonIcon icon={square} className="square-icon-width" />
            </IonItem>
          </div>
          <div className="all-the-input-fields-in-client-info-screen">
            <IonItem>
              {/* <IonLabel position="floating">User Id</IonLabel> */}
              <IonInput
                placeholder="Client First Name"
                type="text"
                // value={text}
                // onIonChange={handletextChange}
              />
            </IonItem>
            <IonItem>
              {/* <IonLabel position="floating">User Id</IonLabel> */}
              <IonInput
                placeholder="Client Last Name"
                type="text"
                // value={text}
                // onIonChange={handletextChange}
              />
            </IonItem>
            <IonItem>
              {/* <IonLabel position="floating">User Id</IonLabel> */}
              <IonInput
                placeholder="Phone Number"
                type="text"
                // value={text}
                // onIonChange={handletextChange}
              />
            </IonItem>
            <IonItem>
              {/* <IonLabel position="floating">User Id</IonLabel> */}
              <IonInput
                placeholder="Fax Number"
                type="text"
                // value={text}
                // onIonChange={handletextChange}
              />
            </IonItem>
            <IonItem>
              {/* <IonLabel position="floating">User Id</IonLabel> */}
              <IonInput
                placeholder="Email"
                type="email"
                // value={text}
                // onIonChange={handletextChange}
              />
            </IonItem>
            <IonItem>
              {/* <IonLabel position="floating">User Id</IonLabel> */}
              <IonInput
                placeholder="Inspection Address"
                type="text"
                // value={text}
                // onIonChange={handletextChange}
              />
            </IonItem>
            <IonItem>
              {/* <IonLabel position="floating">User Id</IonLabel> */}
              <IonInput
                placeholder="Address (Line 2)"
                type="text"
                // value={text}
                // onIonChange={handletextChange}
              />
            </IonItem>
            <IonItem>
              {/* <IonLabel position="floating">User Id</IonLabel> */}
              <IonInput
                placeholder="City"
                type="text"
                // value={text}
                // onIonChange={handletextChange}
              />
            </IonItem>
            <IonItem>
              {/* <IonLabel position="floating">User Id</IonLabel> */}
              <IonInput
                placeholder="State"
                type="text"
                // value={text}
                // onIonChange={handletextChange}
              />
            </IonItem>
            <IonItem>
              {/* <IonLabel position="floating">User Id</IonLabel> */}
              <IonInput
                placeholder="Zip Code"
                type="text"
                // value={text}
                // onIonChange={handletextChange}
              />
            </IonItem>
          </div>
          <div className="date-and-time-picker-client-info">
            <p>Date Of Inspection</p>
            <IonDatetimeButton datetime="datetime"></IonDatetimeButton>
            <IonModal keepContentsMounted={true}>
              <IonDatetime id="datetime"></IonDatetime>
            </IonModal>
          </div>
          <div className="all-the-input-fields-in-client-info-screen">
            <IonItem>
              {/* <IonLabel position="floating">User Id</IonLabel> */}
              <IonInput
                placeholder="Time"
                type="text"
                // value={text}
                // onIonChange={handletextChange}
              />
            </IonItem>{" "}
            <IonItem>
              {/* <IonLabel position="floating">User Id</IonLabel> */}
              <IonInput
                placeholder="Age Of Home"
                type="text"
                // value={text}
                // onIonChange={handletextChange}
              />
            </IonItem>{" "}
            <IonItem>
              {/* <IonLabel position="floating">User Id</IonLabel> */}
              <IonInput
                placeholder="Size"
                type="text"
                // value={text}
                // onIonChange={handletextChange}
              />
            </IonItem>{" "}
            <IonItem>
              {/* <IonLabel position="floating">User Id</IonLabel> */}
              <IonInput
                placeholder="Inspection Fee"
                type="text"
                // value={text}
                // onIonChange={handletextChange}
              />
            </IonItem>{" "}
            <IonItem>
              {/* <IonLabel position="floating">User Id</IonLabel> */}
              <IonInput
                placeholder="Weather"
                type="text"
                // value={text}
                // onIonChange={handletextChange}
              />
            </IonItem>
            <IonTextarea
              label="Type here..."
              labelPlacement="floating"
              counter={true}
              maxlength={20}
              style={{ height: "10em" }}
            ></IonTextarea>
            <p>SINGATURE SECTION</p>
            <IonButton
              className="ion-button-import-from-isn-macj-offic"
              expand="block"
              // onClick={handleSubmit}
            >
              Signature
            </IonButton>
          </div>
        </IonContent>
      </IonPage>
    </>
  );
};

export default ClientInfo;
