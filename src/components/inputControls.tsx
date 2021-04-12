import { IonLabel, IonSegment, IonSegmentButton } from '@ionic/react';
import React from 'react';

const InputControls:React.FC<{
    getSelectedValue: 'mkg' | 'ftlbs';
    onSelectValue:(value:'mkg'|'ftlbs')=>void;
}> = props => {
    const handleInputChange=(event:CustomEvent)=>{
        props.onSelectValue(event.detail.value)
    }
    return(
        <IonSegment value={props.getSelectedValue} onIonChange={handleInputChange}>
            <IonSegmentButton value="mkg">
                <IonLabel>m/kg</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="ftlbs">
                <IonLabel>ft/lbs</IonLabel>
            </IonSegmentButton>
        </IonSegment>
    )
}

export default InputControls;