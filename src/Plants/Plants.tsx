import { use } from "react"
import type { PlantType } from "../PlantType"
import Plant from "../Plant/plant"
import './Plants.css'

export interface PlantsProps{
    plantPromise:Promise<PlantType[]>
}


export default function Plants({plantPromise}:PlantsProps){
    const plants = use(plantPromise)
    console.log(plants)
    return(

        <div >
            <div>
                <h2>Plant:</h2>
            </div>
            
            <div className="plants">
                {plants.map(plant=> <Plant key={plant.id} plant= {plant}></Plant>)}
            </div>
      
        </div>
       
    )
}