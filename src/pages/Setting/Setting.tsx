import {
  IonButton,
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
  IonToggle,
  IonToolbar,
} from "@ionic/react";
import { chevronDown, chevronUp } from "ionicons/icons";
import React, { useState } from "react";
import "./Setting.css";
const Setting: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isChecked, setIsChecked] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  const [selectedValue, setSelectedValue] = useState<string | undefined>();
  const [selectedColor, setSelectedColor] = useState<string | undefined>();

  const [slideCheckStates, setSlideCheckStates] = useState<boolean[]>(
    Array(10).fill(false)
  );
  const [linesPerComment, setLinesPerComment] = useState<string | undefined>();
  const [linesPerCaption, setLinesPerCaption] = useState<string | undefined>();
  const [captionPopupListOrder, setCaptionPopupListOrder] = useState<
    string | undefined
  >();

  const [completedColor, setCompletedColor] = useState<string | undefined>();
  const [singleClickColor, setSingleClickColor] = useState<
    string | undefined
  >();
  const [doubleClickColor, setDoubleClickColor] = useState<
    string | undefined
  >();
  const [commentFGColor, setCommentFGColor] = useState<string | undefined>();
  const [commentBGColor, setCommentBGColor] = useState<string | undefined>();
  const [photoEditColor, setPhotoEditColor] = useState<string | undefined>();
  const [photoEditTextColor, setPhotoEditTextColor] = useState<
    string | undefined
  >();
  const [photoEditBGColor, setPhotoEditBGColor] = useState<
    string | undefined
  >();

  const [photoEditorTextSize, setPhotoEditorTextSize] = useState<
    string | undefined
  >();
  const [photoEditorShapeWidth, setPhotoEditorShapeWidth] = useState<
    string | undefined
  >();
  const [photoQuality, setPhotoQuality] = useState<string | undefined>();
  const [cameraButtonPosition, setCameraButtonPosition] = useState<
    string | undefined
  >();
  const [noteColor, setNoteColor] = useState<string | undefined>();
  const [selectedButtonPosition, setSelectedButtonPosition] = useState<
    string | undefined
  >();

  const handleButtonPositionSelection = (value: string) => {
    setSelectedButtonPosition(value);
  };
  const handleSelection = (
    value: string,
    setState: React.Dispatch<React.SetStateAction<string | undefined>>
  ) => {
    setState(value);
  };
  const [checked, setChecked] = useState(false);
  const handleToggleChange = (index: number) => {
    const newSlideCheckStates = [...slideCheckStates];
    newSlideCheckStates[index] = !newSlideCheckStates[index];
    setSlideCheckStates(newSlideCheckStates);
  };
  const [selectedResolution, setSelectedResolution] = useState<
    string | undefined
  >();
  const handleResolutionSelection = (value: string) => {
    setSelectedResolution(value);
  };
  const handleToggleChangee = (event: CustomEvent) => {
    setIsChecked(event.detail.checked);
  };
  const resolutions = [
    { value: "option1", label: "960 * 540 (16:9)" },
    { value: "option2", label: "1280 * 720 (16:9)" },
    { value: "option3", label: "960 * 960 (4:3)" },
    { value: "option4", label: "1440 * 1080 (4:3)" },
    { value: "option5", label: "1600 * 900 (16:9)" },
    { value: "option6", label: "1600 * 1200 (4:3)" },
    { value: "option7", label: "1632 * 1224 (4:3)" },
    { value: "option8", label: "1920 * 1080 (16:9)" },
    { value: "option9", label: "2048 * 1536 (4:3)" },
    { value: "option10", label: "2304 * 1296 (16:9)" },
    { value: "option11", label: "2304 * 1728 (4:3)" },
    { value: "option13", label: "2560 * 1440 (16:9)" },
    { value: "option14", label: "2560 * 1920 (4:3)" },
    { value: "option15", label: "2944 * 1656 (16:9)" },
    // Add more resolutions as needed
  ];
  // const handleSelection = (value: string) => {
  //   setSelectedValue(value);
  //   setSelectedColor(getColor(value));
  // };
  const slideCheckLabels = [
    "Mark item completed when it's opened(when not using ratings)",
    "Macj Camera",
    "Include Notes in Captions",
    "Allow advanced colors in Captions",
    "Auto List Popup",
    "Auto Caption Popup",
    "Save Full Size Images",
    "List Newest Inspections First",
    "Notes",
    "Count Naratives and Pictures",
    "Enable Beta Features",
  ];
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
          </IonItem>
          <p>ISN Password</p>
          <IonItem>
            <IonInput placeholder="Enter text"></IonInput>
          </IonItem>
          <p>ISN Company</p>
          <IonItem>
            <IonInput placeholder="Enter text"></IonInput>
          </IonItem>
        </div>
        <div className="input-fields-for-setting">
          <p>Lines per Comment</p>
          <IonSelect
            value={linesPerComment}
            placeholder="Select One"
            onIonChange={(e) =>
              handleSelection(e.detail.value, setLinesPerComment)
            }
            interface="popover"
          >
            {[1, 2, 3, 4, 5].map((option) => (
              <IonSelectOption key={option} value={option.toString()}>
                {option}
              </IonSelectOption>
            ))}
          </IonSelect>
          {linesPerComment && (
            <div style={{ marginTop: "20px" }}>
              {/* <p>Selected Value: {linesPerComment}</p> */}
            </div>
          )}
          <p>Lines per Caption</p>
          <IonSelect
            value={linesPerCaption}
            placeholder="Select One"
            onIonChange={(e) =>
              handleSelection(e.detail.value, setLinesPerCaption)
            }
            interface="popover"
          >
            {[1, 2, 3, 4, 5].map((option) => (
              <IonSelectOption key={option} value={option.toString()}>
                {option}
              </IonSelectOption>
            ))}
          </IonSelect>
          {linesPerCaption && (
            <div style={{ marginTop: "20px" }}>
              {/* <p>Selected Value: {linesPerComment}</p> */}
            </div>
          )}
          <p>Caption Popup List Order</p>
          <IonSelect
            value={captionPopupListOrder}
            placeholder="Select One"
            onIonChange={(e) =>
              handleSelection(e.detail.value, setCaptionPopupListOrder)
            }
            interface="popover"
          >
            {[1, 2, 3, 4, 5].map((option) => (
              <IonSelectOption key={option} value={option.toString()}>
                {option}
              </IonSelectOption>
            ))}
          </IonSelect>
          {captionPopupListOrder && (
            <div style={{ marginTop: "20px" }}>
              {/* <p>Selected Value: {linesPerComment}</p> */}
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
            {completedColor && (
              <div
                style={{
                  marginLeft: "auto",
                  width: "20px",
                  height: "20px",
                  backgroundColor: completedColor,
                  border: "1px solid #000",
                }}
              ></div>
            )}
            <IonSelect
              value={completedColor}
              placeholder="Select One"
              onIonChange={(e) =>
                handleSelection(e.detail.value, setCompletedColor)
              }
              interface="popover"
            >
              {[
                "Red",
                "Pink",
                "Orange",
                "Brown",
                "Yellow",
                "Gray",
                "Green",
                "Cyan",
                "Blue",
                "White",
                "Black",
              ].map((option) => (
                <IonSelectOption key={option} value={option}>
                  {option}
                </IonSelectOption>
              ))}
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
            {singleClickColor && (
              <div
                style={{
                  marginLeft: "auto",
                  width: "20px",
                  height: "20px",
                  backgroundColor: singleClickColor,
                  border: "1px solid #000",
                }}
              ></div>
            )}
            <IonSelect
              value={singleClickColor}
              placeholder="Select One"
              onIonChange={(e) =>
                handleSelection(e.detail.value, setSingleClickColor)
              }
              interface="popover"
            >
              {[
                "Red",
                "Pink",
                "Orange",
                "Brown",
                "Yellow",
                "Gray",
                "Green",
                "Cyan",
                "Blue",
                "White",
                "Black",
              ].map((option) => (
                <IonSelectOption key={option} value={option}>
                  {option}
                </IonSelectOption>
              ))}
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
            {doubleClickColor && (
              <div
                style={{
                  marginLeft: "auto",
                  width: "20px",
                  height: "20px",
                  backgroundColor: doubleClickColor,
                  border: "1px solid #000",
                }}
              ></div>
            )}
            <IonSelect
              value={doubleClickColor}
              placeholder="Select One"
              onIonChange={(e) =>
                handleSelection(e.detail.value, setDoubleClickColor)
              }
              interface="popover"
            >
              {[
                "Red",
                "Pink",
                "Orange",
                "Brown",
                "Yellow",
                "Gray",
                "Green",
                "Cyan",
                "Blue",
                "White",
                "Black",
              ].map((option) => (
                <IonSelectOption key={option} value={option}>
                  {option}
                </IonSelectOption>
              ))}
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
            {commentFGColor && (
              <div
                style={{
                  marginLeft: "auto",
                  width: "20px",
                  height: "20px",
                  backgroundColor: commentFGColor,
                  border: "1px solid #000",
                }}
              ></div>
            )}
            <IonSelect
              value={commentFGColor}
              placeholder="Select One"
              onIonChange={(e) =>
                handleSelection(e.detail.value, setCommentFGColor)
              }
              interface="popover"
            >
              {[
                "Red",
                "Pink",
                "Orange",
                "Brown",
                "Yellow",
                "Gray",
                "Green",
                "Cyan",
                "Blue",
                "White",
                "Black",
              ].map((option) => (
                <IonSelectOption key={option} value={option}>
                  {option}
                </IonSelectOption>
              ))}
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
            {commentBGColor && (
              <div
                style={{
                  marginLeft: "auto",
                  width: "20px",
                  height: "20px",
                  backgroundColor: commentBGColor,
                  border: "1px solid #000",
                }}
              ></div>
            )}
            <IonSelect
              value={commentBGColor}
              placeholder="Select One"
              onIonChange={(e) =>
                handleSelection(e.detail.value, setCommentBGColor)
              }
              interface="popover"
            >
              {[
                "Red",
                "Pink",
                "Orange",
                "Brown",
                "Yellow",
                "Gray",
                "Green",
                "Cyan",
                "Blue",
                "White",
                "Black",
              ].map((option) => (
                <IonSelectOption key={option} value={option}>
                  {option}
                </IonSelectOption>
              ))}
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
            {photoEditColor && (
              <div
                style={{
                  marginLeft: "auto",
                  width: "20px",
                  height: "20px",
                  backgroundColor: photoEditColor,
                  border: "1px solid #000",
                }}
              ></div>
            )}
            <IonSelect
              value={photoEditColor}
              placeholder="Select One"
              onIonChange={(e) =>
                handleSelection(e.detail.value, setPhotoEditColor)
              }
              interface="popover"
            >
              {[
                "Red",
                "Pink",
                "Orange",
                "Brown",
                "Yellow",
                "Gray",
                "Green",
                "Cyan",
                "Blue",
                "White",
                "Black",
              ].map((option) => (
                <IonSelectOption key={option} value={option}>
                  {option}
                </IonSelectOption>
              ))}
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
            {photoEditTextColor && (
              <div
                style={{
                  marginLeft: "auto",
                  width: "20px",
                  height: "20px",
                  backgroundColor: photoEditTextColor,
                  border: "1px solid #000",
                }}
              ></div>
            )}
            <IonSelect
              value={photoEditTextColor}
              placeholder="Select One"
              onIonChange={(e) =>
                handleSelection(e.detail.value, setPhotoEditTextColor)
              }
              interface="popover"
            >
              {[
                "Red",
                "Pink",
                "Orange",
                "Brown",
                "Yellow",
                "Gray",
                "Green",
                "Cyan",
                "Blue",
                "White",
                "Black",
              ].map((option) => (
                <IonSelectOption key={option} value={option}>
                  {option}
                </IonSelectOption>
              ))}
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
            {photoEditBGColor && (
              <div
                style={{
                  marginLeft: "auto",
                  width: "20px",
                  height: "20px",
                  backgroundColor: photoEditBGColor,
                  border: "1px solid #000",
                }}
              ></div>
            )}
            <IonSelect
              value={photoEditBGColor}
              placeholder="Select One"
              onIonChange={(e) =>
                handleSelection(e.detail.value, setPhotoEditBGColor)
              }
              interface="popover"
            >
              {[
                "Red",
                "Pink",
                "Orange",
                "Brown",
                "Yellow",
                "Gray",
                "Green",
                "Cyan",
                "Blue",
                "White",
                "Black",
              ].map((option) => (
                <IonSelectOption key={option} value={option}>
                  {option}
                </IonSelectOption>
              ))}
            </IonSelect>
          </div>
        </div>
        <div className="input-fields-for-setting">
          <p>Default Photo Editor Text Size</p>
          <IonSelect
            value={photoEditorTextSize}
            placeholder="Select One"
            onIonChange={(e) =>
              handleSelection(e.detail.value, setPhotoEditorTextSize)
            }
            interface="popover"
          >
            {[1, 2, 3, 4, 5].map((option) => (
              <IonSelectOption key={option} value={option.toString()}>
                {option}
              </IonSelectOption>
            ))}
          </IonSelect>
          {photoEditorTextSize && (
            <div style={{ marginTop: "20px" }}>
              {/* <p>Selected Value: {linesPerComment}</p> */}
            </div>
          )}

          <p>Default Photo Editor Shape Width</p>
          <IonSelect
            value={photoEditorShapeWidth}
            placeholder="Select One"
            onIonChange={(e) =>
              handleSelection(e.detail.value, setPhotoEditorShapeWidth)
            }
            interface="popover"
          >
            {[1, 2, 3, 4, 5].map((option) => (
              <IonSelectOption key={option} value={option.toString()}>
                {option}
              </IonSelectOption>
            ))}
          </IonSelect>
          {photoEditorShapeWidth && (
            <div style={{ marginTop: "20px" }}>
              {/* <p>Selected Value: {linesPerComment}</p> */}
            </div>
          )}
          <p>Default Photo Quality</p>
          <IonSelect
            value={photoQuality}
            placeholder="Select One"
            onIonChange={(e) =>
              handleSelection(e.detail.value, setPhotoQuality)
            }
            interface="popover"
          >
            {[1, 2, 3, 4, 5].map((option) => (
              <IonSelectOption key={option} value={option.toString()}>
                {option}
              </IonSelectOption>
            ))}
          </IonSelect>

          <p>Default Resolution for Macj Camera</p>
          <IonSelect
            value={selectedResolution}
            placeholder="Select One"
            onIonChange={(e) => handleResolutionSelection(e.detail.value)}
            interface="popover"
          >
            {resolutions.map((resolution, index) => (
              <IonSelectOption key={index} value={resolution.value}>
                {resolution.label}
              </IonSelectOption>
            ))}
          </IonSelect>
        </div>
        <div className="checked-and-drop-down-list-setting-page">
          <div className="checked-and-drop-down-list-setting-page">
            {slideCheckStates.map((isChecked, index) => (
              <section key={index} className="each-slide-check-setting">
                <IonLabel>{slideCheckLabels[index]}</IonLabel>
                <IonToggle
                  checked={isChecked}
                  onIonChange={() => handleToggleChange(index)}
                />
              </section>
            ))}
          </div>
          <p>Macj Camera Button Position</p>
          <IonSelect
            value={cameraButtonPosition}
            placeholder="Select One"
            onIonChange={(e) =>
              handleSelection(e.detail.value, setCameraButtonPosition)
            }
            interface="popover"
          >
            {["Left", "Bottom", "Right"].map((option) => (
              <IonSelectOption key={option} value={option}>
                {option}
              </IonSelectOption>
            ))}
          </IonSelect>
        </div>
        <div className="bottom-section-for-buttons-in-drop-down">
          <p>Note Color</p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1em",
              justifyContent: "space-between",
            }}
          >
            {noteColor && (
              <div
                style={{
                  marginLeft: "auto",
                  width: "20px",
                  height: "20px",
                  backgroundColor: noteColor,
                  border: "1px solid #000",
                }}
              ></div>
            )}
            <IonSelect
              value={noteColor}
              placeholder="Select One"
              onIonChange={(e) => handleSelection(e.detail.value, setNoteColor)}
              interface="popover"
            >
              {[
                "Red",
                "Pink",
                "Orange",
                "Brown",
                "Yellow",
                "Gray",
                "Green",
                "Cyan",
                "Blue",
                "White",
                "Black",
              ].map((option) => (
                <IonSelectOption key={option} value={option}>
                  {option}
                </IonSelectOption>
              ))}
            </IonSelect>
          </div>

          <div className="collapsible-header" onClick={toggleCollapse}>
            <p>Advanced Tools/Support</p>
            {isCollapsed ? (
              <IonIcon icon={chevronDown} />
            ) : (
              <IonIcon icon={chevronUp} />
            )}
          </div>
          {!isCollapsed && (
            <div className="buttons-for-advanced-tools-support-setting-screen">
              <IonButton className="ion-button-drop-down" expand="block">
                Rebuilt Inspection List
              </IonButton>
              <IonButton className="ion-button-drop-down" expand="block">
                Restore Backup of Open Inspection
              </IonButton>
              <IonButton className="ion-button-drop-down" expand="block">
                System Information
              </IonButton>
              <IonButton className="ion-button-drop-down" expand="block">
                Create Backup of Inspection
              </IonButton>
              <IonButton className="ion-button-drop-down" expand="block">
                Manually migrate pre 6.50 data
              </IonButton>
            </div>
          )}

          <div className="slider-check-button-bottm-section">
            <p>Enable Beta Features</p>
            <IonToggle checked={isChecked} onIonChange={handleToggleChangee} />
          </div>
          <div className="two-btn-reset-default-save">
            <IonButton className="ion-button-bottom-section" expand="block">
              Reset to Default
            </IonButton>
            <IonButton className="ion-button-bottom-section" expand="block">
              Save
            </IonButton>
          </div>
          <p className="version-of-macj-app">Ver. 6.76</p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Setting;
