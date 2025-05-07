'use client'
import {  Map,  } from '@vis.gl/react-google-maps'

export default function Map2() {



  const position = {lat:-26.974673114466885,lng:26.66995356468627}
  return (
    <>
            <Map

                style={{width:'100vw',height:'50vh'}}
                defaultCenter={position}
                defaultZoom={14}
                gestureHandling={'greedy'}
                disableDefaultUI={true}
                mapId={process.env.NEXT_PUBLIC_MAP_ID as string}

            >
            </Map>
            

    </>
  )
}

