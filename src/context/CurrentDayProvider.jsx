import { createContext, useContext, useState } from "react";
import getItemFromLocalStorage from "../functions/getItemFromLocalStorage";

const CurrentDay = createContext();

export default function CurrentDayProvider({children}){
  const [currentDay, setCurrentDay] = useState(parseInt(getItemFromLocalStorage("currentDayInd")));

  return (
    <CurrentDay.Provider value={{currentDay, setCurrentDay}}>
      {children}
    </CurrentDay.Provider>
  )
}

export const useCurrentDayContext = () => {
  return useContext(CurrentDay)
}