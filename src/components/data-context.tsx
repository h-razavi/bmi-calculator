import React , { createContext, useState} from "react";

type DataContextType = {
    isMetric: boolean;
    height: number;
    weight: number;
    setMetric: (isMetric: boolean) => void;
    setHeight: (height: number) => void;
    setWeight: (weight: number) => void;
  };

let defaultValue : DataContextType = {
    isMetric: true,
    height: 0,
    weight: 0,
    setMetric: () => {},
    setHeight: () => {},
    setWeight: () => {},
}

export const DataContext = createContext<DataContextType>(defaultValue);

type DataContextProviderProps = {
    children: React.ReactNode;
  };

  export const DataContextProvider: React.FC<DataContextProviderProps> = ({
    children,
  }) => {
    const [isMetric, setIsMetric] = useState(true);
    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);

    const setMetric = (isMetric: boolean) => {
        setIsMetric(isMetric);
      };



    let data : DataContextType = {
        isMetric, 
        height, 
        weight, 
        setMetric, 
        setHeight, 
        setWeight
    }


    return (
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    )
}