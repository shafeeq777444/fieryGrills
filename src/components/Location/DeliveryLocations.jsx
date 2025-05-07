import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import TiffinServiceComponent from "./Content";
import { TbMapPinCode } from "react-icons/tb";

mapboxgl.accessToken = "pk.eyJ1Ijoic2hhZmVlcTc3NDQiLCJhIjoiY205bHZnaTlzMDAwMjJxb2lxZzB4ODZkeiJ9.8Omr4NARLyfhzl6gKxGCdQ";

const availableLocations = [
  { name: "Toronto", postalCode: "M5H 2N2", coords: [-79.3832, 43.6532] },
  { name: "Mississauga", postalCode: "L5B 3C1", coords: [-79.6441, 43.589] },
  { name: "Brampton", postalCode: "L6Y 4R2", coords: [-79.791, 43.7315] },
  { name: "Markham", postalCode: "L3R 9W3", coords: [-79.3369, 43.8561] },
  { name: "Vaughan", postalCode: "L4L 3A2", coords: [-79.5105, 43.8373] },
  { name: "Hamilton", postalCode: "L8P 1A1", coords: [-79.8711, 43.2557] },
  { name: "Kitchener", postalCode: "N2G 4G7", coords: [-80.4776, 43.4516] },
  { name: "Cambridge", postalCode: "N1R 3C5", coords: [-80.332, 43.3616] },
  { name: "Burlington", postalCode: "L7R 2G1", coords: [-79.799, 43.3255] },
  { name: "Oakville", postalCode: "L6H 0H3", coords: [-79.6877, 43.4675] },
  { name: "Milton", postalCode: "L9T 1N2", coords: [-79.8707, 43.5183] },
  { name: "Guelph", postalCode: "N1G 4W1", coords: [-80.2508, 43.5448] },
];

const gtaBoundary = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-79.6393, 43.5971],
            [-79.1105, 43.5336],
            [-79.1115, 43.7095],
            [-79.6355, 43.7365],
            [-79.6393, 43.5971],
          ],
        ],
      },
      properties: {
        name: "Greater Toronto Area",
      },
    },
  ],
};

export default function DeliveryLocations() {
  const mapContainerRef = useRef(null);
  const [map, setMap] = useState(null);

  useEffect(() => {
    const mapInstance = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-79.3832, 43.6532],
      zoom: 9,
      minZoom: 6,
      maxZoom: 14,
    });

    mapInstance.addControl(new mapboxgl.NavigationControl(), "top-right");

    mapInstance.on("load", () => {
      mapInstance.addSource("gta-boundary", {
        type: "geojson",
        data: gtaBoundary,
      });

      const deliveryGeoJSON = {
        type: "FeatureCollection",
        features: availableLocations.map((loc) => ({
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: loc.coords,
          },
          properties: {
            name: loc.name,
          },
        })),
      };

      mapInstance.addSource("delivery-points", {
        type: "geojson",
        data: deliveryGeoJSON,
      });

      mapInstance.addLayer({
        id: "delivery-areas",
        type: "symbol",
        source: "delivery-points",
        minzoom: 12,
        layout: {
          "icon-image": "marker",
          "icon-size": 1,
          "icon-anchor": "bottom",
          "text-field": ["get", "name"],
          "text-size": 14,
          "text-offset": [0, 1.2],
          "text-anchor": "top",
          "text-font": ["Open Sans Bold"],
        },
        paint: {
          "text-color": "#222",
        },
      });
    });

    setMap(mapInstance);
    return () => mapInstance.remove();
  }, []);

  const flyToLocation = (coords) => {
    map?.flyTo({ center: coords, zoom: 13 });
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="text-center py-8 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Available Service Areas
        </h2>
        <p className="text-lg text-gray-600 mt-2">
          Serving authentic Punjabi tiffin across Greater Toronto Area
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 px-4 md:px-12 pb-8">
        {/* Map */}
        <div className="w-full md:w-1/2 h-[300px] md:h-[80vh] shadow-lg rounded-xl border border-gray-200 overflow-hidden">
          <div ref={mapContainerRef} className="w-full h-full" />
        </div>

        {/* Locations List */}
        <div className="w-full md:w-1/2 bg-white rounded-xl shadow-lg p-6 max-h-[80vh] overflow-y-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {availableLocations.map((loc, i) => (
            <div
            key={i}
            onClick={() => flyToLocation(loc.coords)}
            className="p-4 bg-ternaryWhite shadow-sm transition-all hover:scale-105 duration-300 ease-in-out rounded-xl cursor-pointer"
          >
            <p className="font-semibold text-gray-800">{loc.name}</p>
            <p className="text-sm text-gray-600 flex gap-2">{loc.postalCode}</p>
          </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
