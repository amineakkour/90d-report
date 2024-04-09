import { useState } from "react"
import { useShowPopupContext } from "../context/ShowPopupProvider";
import { useDaysStatusContext } from "../context/DaysStatusProvider";
import { useCurrentDayContext } from "../context/CurrentDayProvider";

export default function Popup(){
    const {setShowPopup} = useShowPopupContext();
    const {daysStatus} = useDaysStatusContext();
    const {currentDay, setCurrentDay} = useCurrentDayContext();

    const [isGreat, setIsGreat] = useState(true)

    function handleSubmiButton() {
        var value = isGreat ? "great" : "terrible";
        daysStatus[currentDay] = value;

        setCurrentDay(curr => curr +1)
        setShowPopup(false)
    }

    return (
        <div id="howWasYourDayPopup">
            <h3>Kifach daz nharak</h3>
            
            <div id="choices">
                <div className="field">
                    <label htmlFor="great">Zwin</label>
                    <input type="radio" name="choice" id="great" onChange={() => setIsGreat(true)} checked={isGreat}/>
                </div>

                <div className="field">
                    <label htmlFor="terrible">Na9ass</label>
                    <input type="radio" name="choice" id="terrible"  onChange={() => setIsGreat(false)} checked={!isGreat} />
                </div>
            </div>

            <div className="btns">
                <button id="cancel" onClick={() => setShowPopup(false)}>cancel</button>
                <button id="submit" onClick={handleSubmiButton}>submit</button>
            </div>
        </div>
    )
}