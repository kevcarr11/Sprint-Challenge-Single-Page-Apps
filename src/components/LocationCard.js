import React from "react";
import { Toast, ToastBody, ToastHeader } from 'reactstrap';

export default function LocationCard({ location }) {

  const { name, type, dimension, residents } = location;

  return (
    <div className="App p-3 bg-info my-2 rounded">
        <Toast>
            <ToastHeader>
              <h3>{name}</h3>
            </ToastHeader>
            <ToastBody>
            <h5>{type}-{dimension}</h5>
            <br/>
            <h5><strong><em>{residents.length}</em></strong> Residents</h5>
            </ToastBody>
        </Toast>
    </div>
  );
}
