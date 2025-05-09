import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import { useGetLocations } from "../../services/Hooks/useLocations";

mapboxgl.accessToken = "pk.eyJ1Ijoic2hhZmVlcTc3NDQiLCJhIjoiY205bHZnaTlzMDAwMjJxb2lxZzB4ODZkeiJ9.8Omr4NARLyfhzl6gKxGCdQ";



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
  const [availableLocations,setAvailableLocations]=useState([])
  const{data,isLoading,isError}=useGetLocations()

  useEffect(()=>{
    setAvailableLocations(data)
  },[data])

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
if(isLoading){<div>Loading...</div>}
if(isError){<div>Error Ocuured</div>}
  return (
    <div className="bg-gray-50 min-h-screen p-10">
      

      <div className="flex flex-col md:flex-row gap-6 px-2 md:px-12 pb-8">
        
        {/* Map */}
        <div className="flex flex-col gap-4 w-full md:w-1/2">
          <div className="text-center py-8 px-4 ">
          <h2 className="text-2xl md:text-5xl font-bold text-amber-800">
            Available Service Areas
          </h2>
          <p className="text-md text-gray-700 font-medium mt-2">
            Serving authentic Punjabi tiffin across Greater Toronto Area
          </p>
                </div>
          <div className="w-full md:w-full h-[300px] md:h-[60vh] shadow-lg rounded-xl border border-gray-200 overflow-hidden flex flex-col gap-5 bg-transparent">
            <div ref={mapContainerRef} className="w-full h-full" />
          </div>
        </div>

        {/* Locations List */}
        <div className="w-full md:w-1/2 bg-white rounded-xl shadow-lg p-6 max-h-[80vh] overflow-y-auto scrollbar-hide-y">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4  ">
            {availableLocations?.map((loc, i) => (
            <div
            key={i}
            onClick={() => flyToLocation(loc.coords)}
            className="p-4 bg-ternaryWhite shadow-sm transition-all hover:scale-105 duration-300 ease-in-out rounded-xl cursor-pointer"
          >
            <p className="font-semibold text-gray-700">{loc.name}</p>
          </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
