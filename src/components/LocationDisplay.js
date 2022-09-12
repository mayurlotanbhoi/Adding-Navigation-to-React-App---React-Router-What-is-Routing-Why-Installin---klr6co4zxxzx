import React from "react";
import { useLocation } from "react-router-dom";

export const LocationDisplay = () => {
  let location = useLocation();
  // console.log(location)
  return <div data-testid="location-display">{location.pathname}</div>;
};

// export default LocationDisplay;
