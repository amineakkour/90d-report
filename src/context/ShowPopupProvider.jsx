import { createContext, useContext, useState } from "react"

const ShowPopup = createContext();

export default function ShowPopupProvider({children}){
  const [showPopup, setShowPopup] = useState(false);

  return (
    <ShowPopup.Provider value={{showPopup, setShowPopup}}>
      {children}
    </ShowPopup.Provider>
  )
}

export const useShowPopupContext = () => {
  return useContext(ShowPopup);
}