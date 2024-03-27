import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonContent,
  IonHeader,
  IonRouterOutlet,
  IonTitle,
  IonToolbar,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/Home";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import MackjHome from "./pages/MackjHome/MackjHome";
import MackjTabs from "./pages/MackjTabs/MackjTabs";
import "./global.css";
setupIonicReact();

const App: React.FC = () => (
  <>
    <IonApp>
      {/* <IonHeader>
        <IonToolbar>
          <IonTitle>Mackj</IonTitle>
        </IonToolbar>
      </IonHeader> */}
      <IonContent>
        <IonReactRouter>
          <IonRouterOutlet
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <Route path="/" component={MackjTabs} />
          </IonRouterOutlet>
        </IonReactRouter>
      </IonContent>
    </IonApp>
  </>
);

export default App;
