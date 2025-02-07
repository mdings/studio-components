"use client";

import React, { useContext, useState, useEffect } from "react";
import { MyContext } from "./mycontext";

export default function Amenities({ amenities }) {
  // Amenities is a prop that can be bound to a entry in Contentful. newAmenities is automatically populated from the backend in the API. So, inside the templateWrap component we can bind  to an accomodation coming from a connected backend server. The amenities are then automatically taken from the backend instead of having to manually attach to an entry

  const accommadation = useContext(MyContext);
  const [newAmenities, setNewAmenities] = useState([]);
  useEffect(() => {
    async function fetchProperties() {
      const properties = await fetch("/api/properties").then((r) => r.json());
      const property = properties.find((p) => p.id == accommadation);
      if (property) {
        setNewAmenities(property.amenities);
      }
    }

    fetchProperties();
  }, [accommadation]);
  if (amenities) {
    return (
      <div className="w-full">
        <div className="w-full flex flex-wrap max-w-md gap-1">
          {amenities.map((a, index) => {
            return (
              <span
                className="flex gap-1.5 gap-y-2 items-center bg-[#00000020] rounded-full px-3 pr-4 py-1.5 text-sm font-medium"
                key={`prop-${index}`}
              >
                <img
                  src={`/${a.toLowerCase().replace(" ", "")}.svg`}
                  className="h-4 w-auto"
                />
                {a}
              </span>
            );
          })}
        </div>
      </div>
    );
  } else if (newAmenities) {
    return (
      <div className="w-full">
        <div className="w-full flex flex-wrap max-w-md gap-1">
          {newAmenities.map((a, index) => {
            return (
              <span
                className="flex gap-1.5 gap-y-2 items-center bg-[#00000020] rounded-full px-3 pr-4 py-1.5 text-sm font-medium"
                key={`prop-${index}`}
              >
                {a}
              </span>
            );
          })}
        </div>
      </div>
    );
  } else {
    return <div className="block w-full self-stretch">No amenities</div>;
  }
}
