import {  useAdvancedMarkerRef, useMap, useMapsLibrary } from '@vis.gl/react-google-maps'
import React, { useEffect, useRef, useState } from 'react'
import { FaRegCircle, FaSquareFull } from 'react-icons/fa'
import { PiLineVertical } from 'react-icons/pi'



export default function SearchLocationSection() {

    const [selectedPlace, setSelectedPlace] = useState<google.maps.places.PlaceResult | null>(null)
  return (
    <>

    
    <div className="bg-green-500 flex">
        <div className="">
                <FaRegCircle className='text-2xl'/>
                <PiLineVertical  className='text-2xl'/>
                <FaSquareFull className='text-2xl'/>
        </div>
        <div className="flex flex-col">
            <div className="bg-red-500 ml-2">

          <PlaceAutocomplete onPlaceSelect={setSelectedPlace} />
            </div>
            <input placeholder='drop of location?' className='mt-4 ml-2 bg-white'/>
        </div>
    </div>
        <div className="bg-gray-200">
            <input value='Confirm Ride' className=''/>
        </div>
    </>
  )
}

interface MapHandlerProps {
    place: google.maps.places.PlaceResult | null;
    marker: google.maps.marker.AdvancedMarkerElement | null;
  }
  
  const MapHandler = ({ place, marker }: MapHandlerProps) => {
    const map = useMap();
  
    useEffect(() => {
      if (!map || !place || !marker) return;
  
      if (place.geometry?.viewport) {
        map.fitBounds(place.geometry?.viewport);
      }
      marker.position = place.geometry?.location;
    }, [map, place, marker]);
  
    return null;
  };
  
  interface PlaceAutocompleteProps {
    onPlaceSelect: (place: google.maps.places.PlaceResult | null) => void;
  }
  
  const PlaceAutocomplete = ({ onPlaceSelect }: PlaceAutocompleteProps) => {
    const [placeAutocomplete, setPlaceAutocomplete] =
      useState<google.maps.places.Autocomplete | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const places = useMapsLibrary('places');
  
    useEffect(() => {
      if (!places || !inputRef.current) return;
  
      const options = {
        fields: ['geometry', 'name', 'formatted_address']
      };
  
      setPlaceAutocomplete(new places.Autocomplete(inputRef.current, options));
    }, [places]);
  
    useEffect(() => {
      if (!placeAutocomplete) return;
  
      placeAutocomplete.addListener('place_changed', () => {
        onPlaceSelect(placeAutocomplete.getPlace());
      });
    }, [onPlaceSelect, placeAutocomplete]);
  
    return (
      <div className="autocomplete-container">
        <input ref={inputRef} />
      </div>
    );
  };
