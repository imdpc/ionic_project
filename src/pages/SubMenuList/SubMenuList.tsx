import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonPage,
  IonRange,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import {
  camera,
  cameraOutline,
  chevronDown,
  chevronDownSharp,
  informationCircle,
  informationCircleOutline,
  informationSharp,
  logoClosedCaptioning,
  search,
} from "ionicons/icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const SubMenuList: React.FC = () => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    // Implement search functionality here
    console.log("Searching for:", searchText);
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>6.5.1 Roof</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div
          style={{ display: "flex", alignItems: "center", marginBottom: "1em" }}
        >
          <input
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            style={{ flex: 1, marginRight: "8px", padding: "7px" }}
          />
          <IonButton onClick={handleSearch} color="primary">
            <IonIcon icon={search} />
          </IonButton>
        </div>
        <Link to="/submenulistdetails" style={{ textDecoration: "none" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              borderBottom: "1px solid",
            }}
          >
            <span style={{ flex: 1 }}>Roof Covering</span>
            <div style={{ position: "relative" }}>
              <IonIcon
                style={{ width: "3em", height: "2em" }}
                icon={cameraOutline}
              />
              <span style={countBadgeStyle}>1</span>
            </div>
            <div style={{ position: "relative" }}>
              <IonIcon
                style={{ width: "3em", height: "2em" }}
                icon={informationCircleOutline}
              />
              <span style={countBadgeStyle}>2</span>
            </div>
            <div style={{ position: "relative" }}>
              <IonIcon
                style={{ width: "2em", height: "1.5em" }}
                icon={chevronDownSharp}
              />
            </div>
          </div>
        </Link>
      </IonContent>
    </IonPage>
  );
};
const countBadgeStyle: React.CSSProperties = {
  position: "absolute",
  top: "0",
  right: "0",
  backgroundColor: "black",
  color: "white",
  borderRadius: "50%",
  padding: "2px 5px",
  fontSize: "12px",
};
export default SubMenuList;
