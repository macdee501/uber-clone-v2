'use client'

import { APIProvider } from "@vis.gl/react-google-maps";
import ActionButton from "../components/ActionButton";
import Map2 from "../components/Map2";
import SearchLocationSection from "../components/SearchLocationSection";

export default function Home() {
  return (
    <>
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API as string}>

        <main className="h-screen bg-black flex flex-col">
          <div className="bg-red flex-0.5">
            <Map2/>

          </div>
          <div className="bg-purple-800 flex-1">
            <SearchLocationSection/>            
          </div>
          <div className="">

          </div>
        </main>
    </APIProvider>
    </>
   
  );
}
