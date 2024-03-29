import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

const EditComment: React.FC = () => {
  const history = useHistory();
  const location = useLocation();
  const [comment, setComment] = useState(""); // State to hold the edited comment

  useEffect(() => {
    // Retrieve the comment from location state when the component mounts
    if (location.state && location.state.comment) {
      setComment(location.state.comment);
    }
  }, [location.state]);

  const handleSave = () => {
    // Save the edited comment to local storage or any other storage mechanism
    // Here you can implement logic to save the comment for the specific point
    // For demonstration purposes, let's just log it to the console
    console.log("Comment saved:", comment);

    // Navigate back to the previous page
    history.goBack();
  };
  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    // Update the comment state when the text area value changes
    setComment(e.target.value);
  };
  const handleCancel = () => {
    // Navigate back to the previous page without saving any changes
    history.goBack();
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Edit Comment</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div>
          <textarea
            value={comment}
            onChange={handleCommentChange} // Update the comment state on change
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default EditComment;
