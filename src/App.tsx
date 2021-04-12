import React, {useRef,useState} from 'react';
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
  IonAlert
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

//user defined components
import BMIControls from './components/bmiControls';
import BMIResult from './components/bmiResult';
import InputControls from './components/inputControls';

const App: React.FC = () => {
  //setting up state for BMI
  const [calculatedBMI,setCalculatedBMI] = useState<number>();//TS way of configuring state

  //set errors for input fields
  const[errors,setErrors] = useState<string>();

  //set units
  const [unit,setUnit] = useState<'mkg'|'ftlbs'>('mkg'); //either of two

  const height = useRef<HTMLIonInputElement>(null);//supports generics, same as of java
  const weight = useRef<HTMLIonInputElement>(null);


  const handleRefresh = () => {
    height.current!.value='';
    weight.current!.value='';
    setCalculatedBMI(0);
  };
  const calculateBMI=():void=>{
    const enteredHeight = height.current?.value;//special syntax of typescript
    const enteredWeight = weight.current!.value;//it is guarrantied that there will always be a value
    
    //refernces are surely not null but cannot say acout the values
    if(
      !enteredHeight||
      !enteredWeight||
      +enteredHeight<=0||
      +enteredWeight<=0
      )
    {
      setErrors("Please enter the valid inputs");
      return;
    }

    let bmi = +enteredWeight/(+enteredHeight* +enteredHeight);

    if(unit=='ftlbs')
    bmi = (bmi/2.2)*3.28*3.28;

    setCalculatedBMI(bmi);
  }

  //reset errors for next input
  const resetError=():void=>{
    setErrors('');
  }
  
  const selectedUnitHanlder=(getSelectedValue:'mkg'|'ftlbs')=>{
    setUnit(getSelectedValue);
  }
  return (
    <React.Fragment>
      {/* to convert strings to boolean !!variable_name wil do */}
      <IonAlert isOpen={!!errors} message={errors} buttons={[{text:'Okay',
      handler:resetError
      }]}></IonAlert>
      <IonApp>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>BMI Calculator</IonTitle>
        </IonToolbar>
      </IonHeader>
      
      <IonContent className="ion-padding">
      
        <IonGrid>
          <IonRow>
            <IonCol>
            <InputControls getSelectedValue={unit} onSelectValue={selectedUnitHanlder}/>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Weight in ({unit=='mkg'?'kg':'lbs'})</IonLabel>
                <IonInput type="number" ref={weight}></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Height in ({unit=='mkg'?'meter':'ft'})</IonLabel>
                <IonInput type="number"  ref={height}></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
         <BMIControls onCalculate={calculateBMI} onReset={handleRefresh} />
          {
            calculatedBMI &&
            <BMIResult result={calculatedBMI}/>
          }
        </IonGrid>
      </IonContent>
    </IonApp>
    </React.Fragment>
  );
};

export default App;
