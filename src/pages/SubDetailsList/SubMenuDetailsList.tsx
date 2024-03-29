import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { pencilOutline, search } from "ionicons/icons";

import "./SubMenuDetailsList.css";

const SubMenuDetailsList: React.FC = () => {
  const [searchText, setSearchText] = useState("");
  const [points, setPoints] = useState<string[]>([]); // State to store the points
  const history = useHistory();

  useEffect(() => {
    // Retrieve points from local storage when the component mounts
    const storedPoints = localStorage.getItem("points");
    if (storedPoints) {
      setPoints(JSON.parse(storedPoints));
    } else {
      // If no points are found in local storage, set some default points
      setPoints(["Built up", "Built down", "Built left"]);
    }
  }, []);

  const handleEdit = (point: string) => {
    // Navigate to the edit comment page with the selected point
    history.push({
      pathname: "/edit-comment",
      state: { comment: point },
    });
  };

  const handleSearch = () => {
    // Implement search functionality here
    console.log("Searching for:", searchText);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Roof Covering</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div style={{ display: "flex", alignItems: "center", padding: "1em" }}>
          <IonIcon
            onClick={handleSearch}
            icon={search}
            style={{
              height: "25px",
              width: "25px",
            }}
          />
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            style={{
              flex: 1,
              marginLeft: "8px",
              padding: "7px",
              border: "none",
            }}
          />
        </div>
        <div className="section-for-ratings-and-header">
          <h6 className="headers-for-the-page">Roof Covering Overall</h6>
          <section className="rating-points" style={{ paddingLeft: "2em" }}>
            <p>Good</p>
            <p>Fair</p>
            <p>Poor</p>
            <p>N/A</p>
            <p>None</p>
          </section>
        </div>
        <div className="section-for-types-and-header">
          <h6 className="headers-for-the-page">Roof Type</h6>
          <section className="" style={{ paddingLeft: "" }}>
            {points.map((point, index) => (
              <section
                className="edit-icon-and-text"
                key={index}
                onClick={() => handleEdit(point)}
              >
                <IonIcon
                  icon={pencilOutline}
                  style={{ width: "30px", height: "40px" }}
                />
                <p>{point}</p>
              </section>
            ))}
          </section>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default SubMenuDetailsList;
