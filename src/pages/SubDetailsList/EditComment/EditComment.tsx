import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
const EditComment: React.FC = () => {
  const history = useHistory();
  const [comment, setComment] = useState(""); // State to hold the edited comment

  const handleSave = () => {
    // Implement logic to save the edited comment
    // After saving, navigate back to the previous page
    history.goBack();
  };

  const handleCancel = () => {
    // Navigate back to the previous page without saving any changes
    history.goBack();
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Page Title</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default EditComment;
