import React from 'react';

import {IonRow,IonCol,IonButton} from '@ionic/react';
import { calculatorSharp, refreshSharp } from "ionicons/icons";

const bmiControls : React.FC =()=>{
    return(
        <IonRow>
        <IonCol className="ion-text-left">
          <IonButton onClick={()=>calculateBMI()}>
            <IonIcon slot="start" icon={calculatorSharp}></IonIcon>Calculate
          </IonButton>
        </IonCol>
        <IonCol className="ion-text-right">
          <IonButton onClick={()=>handleRefresh()}>
            <IonIcon slot="start" icon={refreshSharp}></IonIcon>Reset
          </IonButton>
        </IonCol>
      </IonRow>
    )
}