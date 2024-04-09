import { useEffect } from 'react';
import Home from './components/Home'
import getItemFromLocalStorage from './functions/getItemFromLocalStorage';
import DaysStatusProvider from './context/DaysStatusProvider';
import CurrentDayProvider from './context/CurrentDayProvider';
import FakeCleanProvider from './context/FakeCleanProvider';
import ShowPopupProvider from './context/ShowPopupProvider';
import addItemToLocalStorage from './functions/addItemToLocalStorage';

function App() {
  useEffect(() => {
    if(!getItemFromLocalStorage("days") || !getItemFromLocalStorage("currentDayInd")){
        addItemToLocalStorage("days", Array.from({ length: 90}).fill(0));
        addItemToLocalStorage("currentDayInd", 0);
        location.reload()
    }
}, [])


    if(getItemFromLocalStorage("days") && getItemFromLocalStorage("currentDayInd")){
      return (
          <div>
            <ShowPopupProvider>
              <FakeCleanProvider>
                <CurrentDayProvider>
                  <DaysStatusProvider>
                    <Home />
                  </DaysStatusProvider>
                </CurrentDayProvider>
              </FakeCleanProvider>
            </ShowPopupProvider>
          </div>
        )
    }
}

export default App