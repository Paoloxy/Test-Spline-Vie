import Spline from "@splinetool/react-spline";
import { useEffect, useState } from "react";

export default function App() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  
  const length = urlParams.get('length') 
  const height = urlParams.get('height')

  // Stati per i parametri URL
  const [splineObject, setSplineObject] = useState<any>(null);

  // Funzione per aggiornare la scena Spline
  function onLoad(spline: any) {
    setSplineObject(spline);
  }

  // Aggiorna le variabili di Spline quando length/height cambiano
  useEffect(() => {
    if (splineObject) {
      splineObject.setVariable("Length", length ? length : 1);
      splineObject.setVariable("Height", height ? length : 1);
    }
  }, [splineObject]); // 🔥 Dipendenza: aggiorna la scena quando cambiano i parametri

  return (
    <main style={{ width: "100vw", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Spline 
        scene="https://prod.spline.design/W7EwTTxxErDKf9ZB/scene.splinecode" 
        onLoad={onLoad} 
        style={{ width: "100%", height: "100%" }} 
      />
    </main>
  );
}

