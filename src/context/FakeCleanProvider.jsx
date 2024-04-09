import { createContext, useContext, useState } from "react";

const FakeClean = createContext();

export default function FakeCleanProvider({children}){
  const [fakeClean, setFakeClean] = useState(false);

  return (
    <FakeClean.Provider value={{fakeClean, setFakeClean}}>
      {children}
    </FakeClean.Provider>
  )
}

export const useFakeCleanContext = () => {
  return useContext(FakeClean)
}