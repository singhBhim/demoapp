import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function PlayerRedirect() {
  const { name, id } = useParams();

  useEffect(() => {
    const schemeUrl = `com.fp.transportapp://player/${name}/${id}`;
    const playStoreUrl = `https://play.google.com/store/apps/details?id=com.fp.transportapp`;

    // Timer to redirect to Play Store if app not installed
    const timer = setTimeout(() => {
      window.location.href = playStoreUrl;
    }, 3000);

    // If page becomes hidden (app opened), cancel timer
    const handleVisibilityChange = () => {
      if (document.hidden) {
        clearTimeout(timer);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Try to open app
    window.location.href = schemeUrl;

    return () => {
      clearTimeout(timer);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [name, id]);

  return (
    <div style={{ textAlign: "center", marginTop: 80 }}>
      <h2>Opening app for player: {name}</h2>
      <p>If the app does not open, you will be redirected to Play Store.</p>
    </div>
  );
}
