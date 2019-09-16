import React from "react";
import { Toast, ToastBody, ToastHeader } from 'reactstrap';

export default function LocationCard({ location }) {

  const { name, type, dimension, residents } = location;

  return (
    <div className="App p-3 bg-info my-2 rounded">
        <Toast>
            <ToastHeader>
                {name}
            </ToastHeader>
            <ToastBody>
            {type}-{dimension}
            <br/>
            <strong><em>{residents.length}</em></strong> Residents
            </ToastBody>
        </Toast>
    </div>
  );
}
