import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function PlayerRedirect() {
  const { name, id } = useParams();

  useEffect(() => {
    const schemeUrl = `com.fp.transportapp://player/${name}/${id}`;
    const playStoreUrl = `https://play.google.com/store/apps/details?id=com.fp.transportapp`;
    
    // Try to open Flutter app
    window.location.href = schemeUrl;

    // If app not installed → redirect to Play Store after 2 seconds
    const timer = setTimeout(() => {
      window.location.href = playStoreUrl;
    }, 2000);

    return () => clearTimeout(timer);
  }, [name, id]);

  return (
    <div style={{ textAlign: "center", marginTop: 80 }}>
      <h2>Opening app for player: {name}</h2>
      <p>If the app does not open, you will be redirected to Play Store.</p>
    </div>
  );
}
