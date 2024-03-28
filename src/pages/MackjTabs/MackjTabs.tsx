// import React from "react";
// import {
//   IonTabs,
//   IonTabBar,
//   IonTabButton,
//   IonIcon,
//   IonLabel,
//   IonRouterOutlet,
// } from "@ionic/react";
// import { IonReactRouter } from "@ionic/react-router";

// import { Route, Redirect } from "react-router";

// import {
//   playCircle,
//   radio,
//   library,
//   search,
//   settingsSharp,
//   eyeOutline,
//   person,
//   sync,
//   barcodeSharp,
//   barChart,
// } from "ionicons/icons";

// // import HomePage from "./pages/HomePage";
// // import RadioPage from "./pages/RadioPage";
// // import LibraryPage from "./pages/LibraryPage";
// // import SearchPage from "./pages/SearchPage";
// import MackjHome from "../MackjHome/MackjHome";
// import Manage from "../Manage/Manage";
// import ClientInfo from "../ClientInfo/ClientInfo";
// import Inspect from "../Inspect/Inspect";
// import Setting from "../Setting/Setting";

// function MackjTabs() {
//   return (
//     <IonReactRouter>
//       <IonTabs>
//         <IonRouterOutlet
//           onPointerEnterCapture={undefined}
//           onPointerLeaveCapture={undefined}
//         >
//           <Redirect exact path="/" to="/homepage" />
//           {/*
//           Use the render method to reduce the number of renders your component will have due to a route change.

//           Use the component prop when your component depends on the RouterComponentProps passed in automatically.
//         */}
//           <Route path="/mackjhome" render={() => <MackjHome />} exact={true} />
//           <Route path="/manage" render={() => <Manage />} exact={true} />
//           <Route
//             path="/clientinfo"
//             render={() => <ClientInfo />}
//             exact={true}
//           />
//           <Route path="/inspect" render={() => <Inspect />} exact={true} />
//           <Route path="/setting" render={() => <Setting />} exact={true} />
//         </IonRouterOutlet>

//         <IonTabBar slot="top">
//           <IonTabButton tab="home" href="/mackjhome">
//             <IonIcon icon={sync} />

//             <IonLabel>Sync</IonLabel>
//           </IonTabButton>
//           <IonTabButton tab="sync" href="/manage">
//             <IonIcon icon={barChart} />
//             <IonLabel>Manage</IonLabel>
//           </IonTabButton>
//           <IonTabButton tab="radio" href="/clientinfo">
//             <IonIcon icon={person} />
//             <IonLabel>Client Info</IonLabel>
//           </IonTabButton>
//           <IonTabButton tab="library" href="/inspect">
//             <IonIcon icon={eyeOutline} />
//             <IonLabel>Inspect</IonLabel>
//           </IonTabButton>
//           <IonTabButton tab="search" href="/setting">
//             <IonIcon icon={settingsSharp} />
//             <IonLabel>Setting</IonLabel>
//           </IonTabButton>
//         </IonTabBar>
//       </IonTabs>
//     </IonReactRouter>
//   );
// }
// export default MackjTabs;
// MackjTabs.tsx
import React from "react";
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonHeader,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Route, Redirect } from "react-router";
import {
  sync,
  barChart,
  person,
  eyeOutline,
  settingsSharp,
} from "ionicons/icons";
import MackjHome from "../MackjHome/MackjHome";
import Manage from "../Manage/Manage";
import ClientInfo from "../ClientInfo/ClientInfo";
import Inspect from "../Inspect/Inspect";
import Setting from "../Setting/Setting";
import SignaturePage from "../Signature/Signature";

function MackjTabs() {
  return (
    <>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <Redirect exact from="/" to="/mackjhome" />
            <Route path="/mackjhome" component={MackjHome} exact={true} />
            <Route path="/manage" component={Manage} exact={true} />
            <Route path="/clientinfo" component={ClientInfo} exact={true} />
            <Route path="/inspect" component={Inspect} exact={true} />
            <Route path="/setting" component={Setting} exact={true} />
            <Route path="/signature" component={SignaturePage} exact={true} />

          </IonRouterOutlet>

          <IonTabBar slot="top">
            <IonTabButton tab="sync" href="/mackjhome">
              <IonIcon icon={sync} />
              <IonLabel>Sync</IonLabel>
            </IonTabButton>
            <IonTabButton tab="manage" href="/manage">
              <IonIcon icon={barChart} />
              <IonLabel>Manage</IonLabel>
            </IonTabButton>
            <IonTabButton tab="clientinfo" href="/clientinfo">
              <IonIcon icon={person} />
              <IonLabel>Client Info</IonLabel>
            </IonTabButton>
            <IonTabButton tab="inspect" href="/inspect">
              <IonIcon icon={eyeOutline} />
              <IonLabel>Inspect</IonLabel>
            </IonTabButton>
            <IonTabButton tab="setting" href="/setting">
              <IonIcon icon={settingsSharp} />
              <IonLabel>Setting</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </>
  );
}

export default MackjTabs;
