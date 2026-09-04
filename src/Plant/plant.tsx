import type { PlantType } from "../PlantType"
import './plant.css'

export type PlantProps = {
    plant: PlantType
}

export default function Plant({ plant }: PlantProps) {
    
    return (

        <div className="plant">
            <h3>{plant.name}</h3>
            <img src={plant.image} alt="" />
        </div>
    )
}