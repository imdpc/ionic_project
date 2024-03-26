import {
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { chevronDown } from "ionicons/icons";
import React, { useState } from "react";

const Setting: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState<string | undefined>();
  const [selectedColor, setSelectedColor] = useState<string | undefined>();

  const handleSelection = (value: string) => {
    setSelectedValue(value);
    setSelectedColor(getColor(value));
  };
  const getColor = (value: string) => {
    switch (value) {
      case "option1":
        return "red";
      case "option2":
        return "pink";
      case "option3":
        return "orange";
      case "option4":
        return "brown";
      case "option5":
        return "yellow";
      case "option6":
        return "gray";
      case "option7":
        return "green";
      case "option8":
        return "cyan";
      case "option9":
        return "blue";
      case "option10":
        return "white";
      case "option11":
        return "black";
      default:
        return "black";
    }
  };
  return (
    <IonPage>
      <IonContent className="ion-padding">
        <div className="input-fields-for-setting">
          <p>ISN Username</p>
          <IonItem>
            <IonInput placeholder="Enter text"></IonInput>
          </IonItem>{" "}
          <p>ISN Password</p>
          <IonItem>
            <IonInput placeholder="Enter text"></IonInput>
          </IonItem>{" "}
          <p>ISN Company</p>
          <IonItem>
            <IonInput placeholder="Enter text"></IonInput>
          </IonItem>
        </div>
        <div className="input-fields-for-setting">
          <p>Lines per Caption</p>
          <IonSelect
            value={selectedValue}
            placeholder="Select One"
            onIonChange={(e) => handleSelection(e.detail.value)}
            interface="popover"
          >
            <IonSelectOption value="option1">1</IonSelectOption>
            <IonSelectOption value="option2">2</IonSelectOption>
            <IonSelectOption value="option3">3</IonSelectOption>
            <IonSelectOption value="option3">4</IonSelectOption>
            <IonSelectOption value="option3">5</IonSelectOption>
          </IonSelect>
          {selectedValue && (
            <div style={{ marginTop: "20px" }}>
              {/* <p>Selected Value: {selectedValue}</p> */}
            </div>
          )}{" "}
          <p>Lines per Caption</p>
          <IonSelect
            value={selectedValue}
            placeholder="Select One"
            onIonChange={(e) => handleSelection(e.detail.value)}
            interface="popover"
          >
            <IonSelectOption value="option1">1</IonSelectOption>
            <IonSelectOption value="option2">2</IonSelectOption>
            <IonSelectOption value="option3">3</IonSelectOption>
            <IonSelectOption value="option3">4</IonSelectOption>
            <IonSelectOption value="option3">5</IonSelectOption>
          </IonSelect>
          {selectedValue && (
            <div style={{ marginTop: "20px" }}>
              {/* <p>Selected Value: {selectedValue}</p> */}
            </div>
          )}{" "}
          <p>Caption Popup List Order</p>
          <IonSelect
            value={selectedValue}
            placeholder="Select One"
            onIonChange={(e) => handleSelection(e.detail.value)}
            interface="popover"
          >
            <IonSelectOption value="option1">
              Common Caption First
            </IonSelectOption>
            <IonSelectOption value="option2">Narrative First</IonSelectOption>
          </IonSelect>
          {selectedValue && (
            <div style={{ marginTop: "20px" }}>
              {/* <p>Selected Value: {selectedValue}</p> */}
            </div>
          )}
        </div>
        <div className="color-preview-drop-downs">
          <p>Completed Color</p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1em",
              justifyContent: "space-between",
            }}
          >
            {selectedColor && (
              <div
                style={{
                  marginLeft: "auto",
                  width: "20px",
                  height: "20px",
                  backgroundColor: selectedColor,
                  border: "1px solid #000",
                  borderRadius: "4px",
                  // marginLeft: "10px",
                }}
              ></div>
            )}
            <IonSelect
              value={selectedValue}
              placeholder="Select One"
              onIonChange={(e) => handleSelection(e.detail.value)}
              interface="popover"
            >
              <IonSelectOption value="option1">Red</IonSelectOption>
              <IonSelectOption value="option2">Pink</IonSelectOption>
              <IonSelectOption value="option3">Orange</IonSelectOption>
              <IonSelectOption value="option4">Brown</IonSelectOption>
              <IonSelectOption value="option5">Yellow</IonSelectOption>
              <IonSelectOption value="option6">Gray</IonSelectOption>
              <IonSelectOption value="option7">Green</IonSelectOption>
              <IonSelectOption value="option8">Cyan</IonSelectOption>
              <IonSelectOption value="option9">Blue</IonSelectOption>
              <IonSelectOption value="option10">White</IonSelectOption>
              <IonSelectOption value="option11">Black</IonSelectOption>
            </IonSelect>
          </div>
          <p>Single Click Color</p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1em",
              justifyContent: "space-between",
            }}
          >
            {selectedColor && (
              <div
                style={{
                  marginLeft: "auto",
                  width: "20px",
                  height: "20px",
                  backgroundColor: selectedColor,
                  border: "1px solid #000",
                  borderRadius: "4px",
                  // marginLeft: "10px",
                }}
              ></div>
            )}
            <IonSelect
              value={selectedValue}
              placeholder="Select One"
              onIonChange={(e) => handleSelection(e.detail.value)}
              interface="popover"
            >
              <IonSelectOption value="option1">Red</IonSelectOption>
              <IonSelectOption value="option2">Pink</IonSelectOption>
              <IonSelectOption value="option3">Orange</IonSelectOption>
              <IonSelectOption value="option4">Brown</IonSelectOption>
              <IonSelectOption value="option5">Yellow</IonSelectOption>
              <IonSelectOption value="option6">Gray</IonSelectOption>
              <IonSelectOption value="option7">Green</IonSelectOption>
              <IonSelectOption value="option8">Cyan</IonSelectOption>
              <IonSelectOption value="option9">Blue</IonSelectOption>
              <IonSelectOption value="option10">White</IonSelectOption>
              <IonSelectOption value="option11">Black</IonSelectOption>
            </IonSelect>
          </div>
          <p>Double Click Color</p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1em",
              justifyContent: "space-between",
            }}
          >
            {selectedColor && (
              <div
                style={{
                  marginLeft: "auto",
                  width: "20px",
                  height: "20px",
                  backgroundColor: selectedColor,
                  border: "1px solid #000",
                  borderRadius: "4px",
                  // marginLeft: "10px",
                }}
              ></div>
            )}
            <IonSelect
              value={selectedValue}
              placeholder="Select One"
              onIonChange={(e) => handleSelection(e.detail.value)}
              interface="popover"
            >
              <IonSelectOption value="option1">Red</IonSelectOption>
              <IonSelectOption value="option2">Pink</IonSelectOption>
              <IonSelectOption value="option3">Orange</IonSelectOption>
              <IonSelectOption value="option4">Brown</IonSelectOption>
              <IonSelectOption value="option5">Yellow</IonSelectOption>
              <IonSelectOption value="option6">Gray</IonSelectOption>
              <IonSelectOption value="option7">Green</IonSelectOption>
              <IonSelectOption value="option8">Cyan</IonSelectOption>
              <IonSelectOption value="option9">Blue</IonSelectOption>
              <IonSelectOption value="option10">White</IonSelectOption>
              <IonSelectOption value="option11">Black</IonSelectOption>
            </IonSelect>
          </div>
          <p>Comment FG Color</p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1em",
              justifyContent: "space-between",
            }}
          >
            {selectedColor && (
              <div
                style={{
                  marginLeft: "auto",
                  width: "20px",
                  height: "20px",
                  backgroundColor: selectedColor,
                  border: "1px solid #000",
                  borderRadius: "4px",
                  // marginLeft: "10px",
                }}
              ></div>
            )}
            <IonSelect
              value={selectedValue}
              placeholder="Select One"
              onIonChange={(e) => handleSelection(e.detail.value)}
              interface="popover"
            >
              <IonSelectOption value="option1">Red</IonSelectOption>
              <IonSelectOption value="option2">Pink</IonSelectOption>
              <IonSelectOption value="option3">Orange</IonSelectOption>
              <IonSelectOption value="option4">Brown</IonSelectOption>
              <IonSelectOption value="option5">Yellow</IonSelectOption>
              <IonSelectOption value="option6">Gray</IonSelectOption>
              <IonSelectOption value="option7">Green</IonSelectOption>
              <IonSelectOption value="option8">Cyan</IonSelectOption>
              <IonSelectOption value="option9">Blue</IonSelectOption>
              <IonSelectOption value="option10">White</IonSelectOption>
              <IonSelectOption value="option11">Black</IonSelectOption>
            </IonSelect>
          </div>
          <p>Comment BG Color</p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1em",
              justifyContent: "space-between",
            }}
          >
            {selectedColor && (
              <div
                style={{
                  marginLeft: "auto",
                  width: "20px",
                  height: "20px",
                  backgroundColor: selectedColor,
                  border: "1px solid #000",
                  borderRadius: "4px",
                  // marginLeft: "10px",
                }}
              ></div>
            )}
            <IonSelect
              value={selectedValue}
              placeholder="Select One"
              onIonChange={(e) => handleSelection(e.detail.value)}
              interface="popover"
            >
              <IonSelectOption value="option1">Red</IonSelectOption>
              <IonSelectOption value="option2">Pink</IonSelectOption>
              <IonSelectOption value="option3">Orange</IonSelectOption>
              <IonSelectOption value="option4">Brown</IonSelectOption>
              <IonSelectOption value="option5">Yellow</IonSelectOption>
              <IonSelectOption value="option6">Gray</IonSelectOption>
              <IonSelectOption value="option7">Green</IonSelectOption>
              <IonSelectOption value="option8">Cyan</IonSelectOption>
              <IonSelectOption value="option9">Blue</IonSelectOption>
              <IonSelectOption value="option10">White</IonSelectOption>
              <IonSelectOption value="option11">Black</IonSelectOption>
            </IonSelect>
          </div>
          <p>Default Photo Edit Color</p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1em",
              justifyContent: "space-between",
            }}
          >
            {selectedColor && (
              <div
                style={{
                  marginLeft: "auto",
                  width: "20px",
                  height: "20px",
                  backgroundColor: selectedColor,
                  border: "1px solid #000",
                  borderRadius: "4px",
                  // marginLeft: "10px",
                }}
              ></div>
            )}
            <IonSelect
              value={selectedValue}
              placeholder="Select One"
              onIonChange={(e) => handleSelection(e.detail.value)}
              interface="popover"
            >
              <IonSelectOption value="option1">Red</IonSelectOption>
              <IonSelectOption value="option2">Pink</IonSelectOption>
              <IonSelectOption value="option3">Orange</IonSelectOption>
              <IonSelectOption value="option4">Brown</IonSelectOption>
              <IonSelectOption value="option5">Yellow</IonSelectOption>
              <IonSelectOption value="option6">Gray</IonSelectOption>
              <IonSelectOption value="option7">Green</IonSelectOption>
              <IonSelectOption value="option8">Cyan</IonSelectOption>
              <IonSelectOption value="option9">Blue</IonSelectOption>
              <IonSelectOption value="option10">White</IonSelectOption>
              <IonSelectOption value="option11">Black</IonSelectOption>
            </IonSelect>
          </div>
          <p>Default Photo Edit Text Color</p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1em",
              justifyContent: "space-between",
            }}
          >
            {selectedColor && (
              <div
                style={{
                  marginLeft: "auto",
                  width: "20px",
                  height: "20px",
                  backgroundColor: selectedColor,
                  border: "1px solid #000",
                  borderRadius: "4px",
                  // marginLeft: "10px",
                }}
              ></div>
            )}
            <IonSelect
              value={selectedValue}
              placeholder="Select One"
              onIonChange={(e) => handleSelection(e.detail.value)}
              interface="popover"
            >
              <IonSelectOption value="option1">Red</IonSelectOption>
              <IonSelectOption value="option2">Pink</IonSelectOption>
              <IonSelectOption value="option3">Orange</IonSelectOption>
              <IonSelectOption value="option4">Brown</IonSelectOption>
              <IonSelectOption value="option5">Yellow</IonSelectOption>
              <IonSelectOption value="option6">Gray</IonSelectOption>
              <IonSelectOption value="option7">Green</IonSelectOption>
              <IonSelectOption value="option8">Cyan</IonSelectOption>
              <IonSelectOption value="option9">Blue</IonSelectOption>
              <IonSelectOption value="option10">White</IonSelectOption>
              <IonSelectOption value="option11">Black</IonSelectOption>
            </IonSelect>
          </div>
          <p>Default Photo Edit Text Background Color</p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1em",
              justifyContent: "space-between",
            }}
          >
            {selectedColor && (
              <div
                style={{
                  marginLeft: "auto",
                  width: "20px",
                  height: "20px",
                  backgroundColor: selectedColor,
                  border: "1px solid #000",
                  borderRadius: "4px",
                  // marginLeft: "10px",
                }}
              ></div>
            )}
            <IonSelect
              value={selectedValue}
              placeholder="Select One"
              onIonChange={(e) => handleSelection(e.detail.value)}
              interface="popover"
            >
              <IonSelectOption value="option1">Red</IonSelectOption>
              <IonSelectOption value="option2">Pink</IonSelectOption>
              <IonSelectOption value="option3">Orange</IonSelectOption>
              <IonSelectOption value="option4">Brown</IonSelectOption>
              <IonSelectOption value="option5">Yellow</IonSelectOption>
              <IonSelectOption value="option6">Gray</IonSelectOption>
              <IonSelectOption value="option7">Green</IonSelectOption>
              <IonSelectOption value="option8">Cyan</IonSelectOption>
              <IonSelectOption value="option9">Blue</IonSelectOption>
              <IonSelectOption value="option10">White</IonSelectOption>
              <IonSelectOption value="option11">Black</IonSelectOption>
            </IonSelect>
          </div>
        </div>{" "}
        <div className="input-fields-for-setting">
          <p>Default Photo Editor Shape Width</p>
          <IonSelect
            value={selectedValue}
            placeholder="Select One"
            onIonChange={(e) => handleSelection(e.detail.value)}
            interface="popover"
          >
            <IonSelectOption value="option1">1</IonSelectOption>
            <IonSelectOption value="option2">2</IonSelectOption>
            <IonSelectOption value="option3">3</IonSelectOption>
            <IonSelectOption value="option3">4</IonSelectOption>
            <IonSelectOption value="option3">5</IonSelectOption>{" "}
            <IonSelectOption value="option1">6</IonSelectOption>
            <IonSelectOption value="option2">7</IonSelectOption>
            <IonSelectOption value="option3">8</IonSelectOption>
            <IonSelectOption value="option3">9</IonSelectOption>
            <IonSelectOption value="option3">10</IonSelectOption>
          </IonSelect>
          {selectedValue && (
            <div style={{ marginTop: "20px" }}>
              {/* <p>Selected Value: {selectedValue}</p> */}
            </div>
          )}{" "}
          <p>Lines per Caption</p>
          <IonSelect
            value={selectedValue}
            placeholder="Select One"
            onIonChange={(e) => handleSelection(e.detail.value)}
            interface="popover"
          >
            <IonSelectOption value="option1">1</IonSelectOption>
            <IonSelectOption value="option2">2</IonSelectOption>
            <IonSelectOption value="option3">3</IonSelectOption>
            <IonSelectOption value="option3">4</IonSelectOption>
            <IonSelectOption value="option3">5</IonSelectOption>
          </IonSelect>
          {selectedValue && (
            <div style={{ marginTop: "20px" }}>
              {/* <p>Selected Value: {selectedValue}</p> */}
            </div>
          )}{" "}
          <p>Caption Popup List Order</p>
          <IonSelect
            value={selectedValue}
            placeholder="Select One"
            onIonChange={(e) => handleSelection(e.detail.value)}
            interface="popover"
          >
            <IonSelectOption value="option1">
              Common Caption First
            </IonSelectOption>
            <IonSelectOption value="option2">Narrative First</IonSelectOption>
          </IonSelect>
          {selectedValue && (
            <div style={{ marginTop: "20px" }}>
              {/* <p>Selected Value: {selectedValue}</p> */}
            </div>
          )}{" "}
          <p>Caption Popup List Order</p>
          <IonSelect
            value={selectedValue}
            placeholder="Select One"
            onIonChange={(e) => handleSelection(e.detail.value)}
            interface="popover"
          >
            <IonSelectOption value="option1">
              Common Caption First
            </IonSelectOption>
            <IonSelectOption value="option2">Narrative First</IonSelectOption>
          </IonSelect>
          {selectedValue && (
            <div style={{ marginTop: "20px" }}>
              {/* <p>Selected Value: {selectedValue}</p> */}
            </div>
          )}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Setting;
