import Map from "../components/Map";
import { MapProvider } from "../providers/map-provider";

export default function Home() {
  return (
    <>
      <MapProvider>
        <main>
          <Map/>
        </main>
      </MapProvider>
    </>
   
  );
}
