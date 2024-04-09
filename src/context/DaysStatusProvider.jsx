import { createContext, useContext, useState } from "react";
import getItemFromLocalStorage from "../functions/getItemFromLocalStorage";
const DaysStatus = createContext();

export default function DaysStatusProvider({children}){
  const [daysStatus, setDaysStatus] = useState(getItemFromLocalStorage("days")?.split(","));

  return (
    <DaysStatus.Provider value={{daysStatus, setDaysStatus}}>
      {children}
    </DaysStatus.Provider>
  )
}

export const useDaysStatusContext = () => {
  return useContext(DaysStatus)
}