'use client'

import React from 'react'
//Map component Component from library
import { GoogleMap } from "@react-google-maps/api";

//Map's styling
export const defaultMapContainerStyle = {
    width: '100%',
    height: '80vh',
    borderRadius: '15px 0px 0px 15px',
};

export const defaultMapCenter = {
    
    lat:-26.974673114466885, lng:26.66995356468627
};

const defaultMapZoom = 16;

const defaultMapOptions = {
    zoomControl: true,
    tilt: 0,
    gestureHandling: 'auto',
    mapTypeId: 'satellite',
};

export default function Map() {

  return (
    <div className='w-full'>
        <GoogleMap 
        mapContainerStyle={defaultMapContainerStyle} 
        center={defaultMapCenter}
        zoom={defaultMapZoom}
        options={defaultMapOptions}/>
    </div>
  )
}
