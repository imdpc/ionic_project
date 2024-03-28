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
  IonActionSheet,
  IonDatetime,
} from "@ionic/react";
import { Icon } from "ionicons/dist/types/components/icon/icon";
import {
  phonePortrait,
  phonePortraitSharp,
  square,
  camera,
  images,
} from "ionicons/icons";
import React, { useState } from "react";
import "./ClientInfo.css";
import SignaturePage from "../Signature/Signature";
import { Link } from "react-router-dom";

const ClientInfo: React.FC = () => {
  const [showSignaturePage, setShowSignaturePage] = useState(false);

  const handleSignatureButtonClick = () => {
    setShowSignaturePage(true);
  };

  const handleCloseSignaturePage = () => {
    setShowSignaturePage(false);
  };
  // State to hold input field values
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    // Add more fields as needed
  });

  // Function to handle input change
  const handleInputChange = (key: string, value: string) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };
  const [showActionSheet, setShowActionSheet] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleActionSheet = () => {
    setShowActionSheet(true);
  };

  const handleActionSheetCancel = () => {
    setShowActionSheet(false);
  };

  const handleCameraClick = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      const video = document.createElement("video");
      video.srcObject = stream;
      video.play();
      const canvas = document.createElement("canvas");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const context = canvas.getContext("2d");
      context?.drawImage(video, 0, 0, canvas.width, canvas.height);
      const imageData = canvas.toDataURL("image/png");
      setSelectedImage(imageData);
      stream.getVideoTracks()[0].stop();
    } catch (error) {
      console.error("Error accessing camera:", error);
    } finally {
      setShowActionSheet(false);
    }
  };
  const handleGalleryClick = () => {
    const inputElement = document.createElement("input");
    inputElement.type = "file";
    inputElement.accept = "image/*";
    inputElement.onchange = (event) => {
      const file = (event.target as HTMLInputElement)?.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          const result = reader.result as string;
          setSelectedImage(result);
          setShowActionSheet(false);
        };
        reader.readAsDataURL(file);
      }
    };
    inputElement.click();
  };
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setSelectedImage(result);
      };
      reader.readAsDataURL(file);
    }
  };
  // Function to save form data to local storage
  // const saveDataToLocal = () => {
  //   localStorage.setItem("clientFormData", JSON.stringify(formData));
  // };

  // // Function to display saved data in an alert box
  // const displayDataInAlert = () => {
  //   const savedData = localStorage.getItem("clientFormData");
  //   if (savedData) {
  //     alert(savedData);
  //   } else {
  //     alert("No data saved yet.");
  //   }
  // };
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
            {/* <IonItem className="item-for-empty-square">
              <IonIcon icon={square} className="square-icon-width" />
            </IonItem> */}
            <div className="cover-photo-section-upload">
              <IonItem
                className="item-for-empty-square"
                onClick={handleActionSheet}
              >
                {selectedImage ? (
                  <img
                    src={selectedImage}
                    alt="Selected"
                    className="selected-image"
                  />
                ) : (
                  <IonIcon icon={square} className="square-icon-width" />
                )}
              </IonItem>

              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                style={{ display: "none" }}
                id="file-input"
              />

              <IonActionSheet
                isOpen={showActionSheet}
                onDidDismiss={handleActionSheetCancel}
                buttons={[
                  {
                    text: "Take Photo",
                    icon: camera,
                    handler: handleCameraClick,
                  },
                  {
                    text: "Choose from Gallery",
                    icon: images,
                    handler: handleGalleryClick,
                  },
                  {
                    text: "Cancel",
                    role: "cancel",
                    handler: handleActionSheetCancel,
                  },
                ]}
              ></IonActionSheet>
            </div>
          </div>
          <div className="all-the-input-fields-in-client-info-screen">
            <IonItem>
              {/* <IonLabel position="floating">User Id</IonLabel> */}
              <IonInput
                placeholder="Client First Name"
                type="text"
                value={formData.firstName}
                onIonChange={(e) =>
                  handleInputChange("firstName", e.detail.value!)
                }
                // value={text}
                // onIonChange={handletextChange}
              />
            </IonItem>
            <IonItem>
              {/* <IonLabel position="floating">User Id</IonLabel> */}
              <IonInput
                placeholder="Client Last Name"
                type="text"
                value={formData.lastName}
                onIonChange={(e) =>
                  handleInputChange("lastName", e.detail.value!)
                }
                // value={text}
                // onIonChange={handletextChange}
              />
            </IonItem>
            <IonItem>
              {/* <IonLabel position="floating">User Id</IonLabel> */}
              <IonInput
                placeholder="Phone Number"
                type="text"
                value={formData.phoneNumber}
                onIonChange={(e) =>
                  handleInputChange("phoneNumber", e.detail.value!)
                }
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
            <Link to="./signature">
              <IonButton
                onClick={handleSignatureButtonClick}
                className="ion-button-import-from-isn-macj-offic"
                expand="block"
                // onClick={handleSubmit}
              >
                Signature
              </IonButton>
            </Link>
            {showSignaturePage && (
              <SignaturePage onClose={handleCloseSignaturePage} />
            )}
          </div>
          {/* Button to save data and display in alert
          <IonButton expand="block" onClick={saveDataToLocal}>
            Save Data to Local Storage
          </IonButton>
          <IonButton expand="block" onClick={displayDataInAlert}>
            Display Data from Local Storage
          </IonButton> */}
        </IonContent>
      </IonPage>
    </>
  );
};

export default ClientInfo;
