import React , { useState} from "react";

type DataType = {
    height : number,
    weight : number,
    isMetric : boolean,
    setUnitsImperial : ()=>void
    setUnitsMetric : ()=>void
}

let defaultValue : DataType = {
    height : 0,
    weight : 0,
    isMetric : true,
    setUnitsImperial : ()=>{},
    setUnitsMetric : ()=>{}
}

export const DataContext = React.createContext(defaultValue);

export default function DataProvider({children}:any){
    const [isMetric , setIsMetric] = useState(true)

    const setUnitsImperial = ()=>{
        if(isMetric){
            setIsMetric(false)
        }
    }

    const setUnitsMetric = ()=>{
        if(!isMetric){
            setIsMetric(true)
        }
    }

    let data : DataType = {
        height : 0,
        weight : 0,
        isMetric,
        setUnitsImperial,
        setUnitsMetric
    }


    return (
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    )
}