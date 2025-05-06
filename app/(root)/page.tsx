import Map from "../components/Map";
import Map2 from "../components/Map2";
import { MapProvider } from "../providers/map-provider";

export default function Home() {
  return (
    <>
      <MapProvider>
        <main className="h-screen bg-black flex flex-col">
          <div className="bg-red flex-0.5">
            {/* <Map/> */}
            <Map2/>
            
          </div>
          <div className="bg-purple-800 flex-1">
            placeholder for buttons
            
          </div>
        </main>
      </MapProvider>
    </>
   
  );
}
