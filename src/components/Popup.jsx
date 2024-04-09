import { useState } from "react"

export default function Popup({ setPopupStatus, days, currentDay, setCurrentDay}){
    const [isGreat, setIsGreat] = useState(true)

    function handleSubmiButton() {
        var value = isGreat ? "great" : "terrible";
        days[currentDay] = value;

        setCurrentDay(curr => curr +1)
        setPopupStatus(false)
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
                <button id="cancel" onClick={() => setPopupStatus(false)}>cancel</button>
                <button id="submit" onClick={handleSubmiButton}>submit</button>
            </div>
        </div>
    )
}