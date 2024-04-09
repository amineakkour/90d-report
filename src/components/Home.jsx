import { useEffect } from "react";
import Popup from "./Popup";
import Settings from "./Settings";
import DaysContainer from "./DaysContainer";
import Statics from "./Statics";
import addItemToLocalStorage from "../functions/addItemToLocalStorage";
import { useShowPopupContext } from "../context/ShowPopupProvider";
import { useDaysStatusContext } from "../context/DaysStatusProvider";
import { useCurrentDayContext } from "../context/CurrentDayProvider";

export default function Home(){
    const { showPopup } = useShowPopupContext();
    const { daysStatus } = useDaysStatusContext();
    const { currentDay } = useCurrentDayContext();

    useEffect(() => {
        addItemToLocalStorage("days", daysStatus)
        addItemToLocalStorage("currentDayInd", currentDay)
    }, [daysStatus, currentDay])

    return (
        <div>
            {showPopup && <Popup /> }

            <div id="appContainer">

                <div id="header"><h1>Ki daz Nharak Albatal?</h1></div>

                <div id="mainContainer">
                    <Settings />
                    <DaysContainer/>
                    <Statics />
                </div>
                
            </div>
        </div>
    )
}