import { useState } from "react";
import Popup from "./Popup";
import Settings from "./Settings";
import DaysContainer from "./DaysContainer";
import Statics from "./Statics";

if(!localStorage.getItem("days")){
    setNewLocalStorage()
}

function setNewLocalStorage(){
    localStorage.setItem("days", Array.from({ length: 90}).fill(0))
    localStorage.setItem("currentDayInd", 0)
}

export default function Home(){
    const [days, setDays] = useState(localStorage.getItem("days").split(","))
    const [popupStatus, setPopupStatus] = useState(false);
    const [currentDay, setCurrentDay] = useState(parseInt(localStorage.getItem("currentDayInd")));
    const [fakeClean, setFakeClean] = useState(false)

    function updateLocalStorage(){
        localStorage.setItem("days", days)
        localStorage.setItem("currentDayInd", currentDay)
    }  

    updateLocalStorage()

    return (
        <>
            {popupStatus && <Popup setCurrentDay={setCurrentDay} days={days} currentDay={currentDay} setPopupStatus={setPopupStatus} />}

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
                    
                    <DaysContainer setPopupStatus={setPopupStatus} days={days} currentDay={currentDay} fakeClean={fakeClean}/>
                    
                    <Statics days={days} fakeClean={fakeClean} />
                </div>

                
            </div>
        </>
    )
}