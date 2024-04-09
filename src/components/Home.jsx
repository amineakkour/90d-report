import { useEffect, useState } from "react";
import Popup from "./Popup";
import Settings from "./Settings";
import DaysContainer from "./DaysContainer";
import Statics from "./Statics";
import getItemFromLocalStorage from "../functions/getItemFromLocalStorage";
import addItemToLocalStorage from "../functions/addItemToLocalStorage";

export default function Home(){
    const [days, setDays] = useState(getItemFromLocalStorage("days")?.split(","))
    const [popupStatus, setPopupStatus] = useState(false);
    const [currentDay, setCurrentDay] = useState(parseInt(getItemFromLocalStorage("currentDayInd")));
    const [fakeClean, setFakeClean] = useState(false);

    useEffect(() => {
        if(!getItemFromLocalStorage("days") || !getItemFromLocalStorage("currentDayInd")){
            addItemToLocalStorage("days", Array.from({ length: 90}).fill(0))
            addItemToLocalStorage("currentDayInd", 0)
        }
    }, [])

    useEffect(() => {
        addItemToLocalStorage("days", days)
        addItemToLocalStorage("currentDayInd", currentDay)
    }, [days, currentDay])

    return (
        <>
            {popupStatus && 
                <Popup 
                    setCurrentDay={setCurrentDay}
                    days={days}
                    currentDay={currentDay}
                    setPopupStatus={setPopupStatus}
                />
            }

            <div id="appContainer">

                <div id="header">
                    <h1>Ki daz Nharak Albatal?</h1>
                </div>

                <div id="mainContainer">
                    <Settings
                        days={days}
                        setCurrentDay={setCurrentDay}
                        setDays={setDays}
                        setFakeClean={setFakeClean}
                    />
                    
                    <DaysContainer
                        setPopupStatus={setPopupStatus}
                        days={days}
                        currentDay={currentDay}
                        fakeClean={fakeClean}
                    />
                    
                    <Statics
                        days={days}
                        fakeClean={fakeClean}
                        />
                </div>

                
            </div>
        </>
    )
}