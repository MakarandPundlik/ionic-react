import {
  IonApp,
  IonContent,
  IonGrid,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonRow,
  IonCol,
  IonInput,
  IonLabel,
  IonItem,
  IonButton,
  IonIcon,
} from "@ionic/react";
import { calculatorSharp, refreshSharp } from "ionicons/icons";
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

const App: React.FC = () => {
  const handleRefresh = () => {};
  const calculateBMI=()=>{}
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>BMI Calculator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Weight</IonLabel>
                <IonInput id="weight"></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Height</IonLabel>
                <IonInput id="height"></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="ion-text-left">
              <IonButton>
                <IonIcon slot="start" icon={calculatorSharp}></IonIcon>Calculate
              </IonButton>
            </IonCol>
            <IonCol className="ion-text-right">
              <IonButton>
                <IonIcon slot="start" icon={refreshSharp}></IonIcon>Reset
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol></IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonApp>
  );
};

export default App;
