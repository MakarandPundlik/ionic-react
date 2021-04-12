import React from 'react';
import {IonRow,IonCol,IonCard,IonCardContent} from '@ionic/react';

//component must start with Capital letter
const BMIResult :React.FC<{result:number}> = props =>{ 
    return(
        <IonRow>
            <IonCol>
                <IonCard>
              <IonCardContent className="ion-text-center">
                  <h2>Your body-mass-index is</h2>
                <h2>{props.result.toFixed(2)}</h2>
              </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
    )
}

export default BMIResult;