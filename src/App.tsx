
import { Suspense } from 'react';
import './App.css'
import Plants from './Plants/Plants';
import type { PlantType } from './PlantType';


const plantPromise = async():Promise<PlantType[]>=>{
  const res = await fetch('https://openapi.programming-hero.com/api/plants')
   const data = await res.json();
   return data.plants;
}
function App() {
  
 return (
    <>
     
<div>Countries-Explorer-App</div>
<Suspense fallback={<div>Plan data loading.....</div>}>
<Plants plantPromise ={plantPromise()}></Plants>

</Suspense>
    </>
  )

}
 


export default App
