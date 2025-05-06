'use client'
import { APIProvider, Map } from '@vis.gl/react-google-maps'
import React from 'react'

const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAP_API;
const mapId = process.env.NEXT_PUBLIC_MAP_ID;

export default function Map2() {
  return (
    <>
        <APIProvider apiKey={apiKey}>
            <Map
                style={{width:'100vw',height:'50vh'}}
                defaultCenter={{lat:-26.974673114466885,lng:26.66995356468627}}
                defaultZoom={15}
                gestureHandling={'greedy'}
                disableDefaultUI={true}
                mapId={mapId}
            />

        </APIProvider>
    </>
  )
}
