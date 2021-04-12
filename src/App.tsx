import {useRef,useState} from 'react';
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
  IonCardContent,
} from "@ionic/react";

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
  //setting up state for BMI
  const [calculatedBMI,setCalculatedBMI] = useState<number>();//TS way of configuring state

  const height = useRef<HTMLIonInputElement>(null);//supports generics, same as of java
  const weight = useRef<HTMLIonInputElement>(null);
  const handleRefresh = () => {
    height.current!.value='';
    weight.current!.value='';
  };
  const calculateBMI=()=>{
    const enteredHeight = height.current?.value;//special syntax of typescript
    const enteredWeight = weight.current!.value;//it is guarrantied that there will always be a value
    
    //refernces are surely not null but cannot say acout the values
    if(!enteredHeight||!enteredWeight)
    return;

    const bmi = +enteredWeight/(+enteredHeight* +enteredHeight);
    setCalculatedBMI(bmi);
  }
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
                <IonInput ref={weight}></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Height</IonLabel>
                <IonInput ref={height}></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
         
          {
            calculatedBMI &&
            <IonRow>
            <IonCol>
              <IonCardContent>
                <h2>{calculatedBMI}</h2>
              </IonCardContent>
            </IonCol>
          </IonRow>
          }
        </IonGrid>
      </IonContent>
    </IonApp>
  );
};

export default App;
