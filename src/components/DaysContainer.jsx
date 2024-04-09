import { useCurrentDayContext } from "../context/CurrentDayProvider";
import { useDaysStatusContext } from "../context/DaysStatusProvider";
import { useFakeCleanContext } from "../context/FakeCleanProvider";
import { useShowPopupContext } from "../context/ShowPopupProvider";

export default function DaysContainer(){
    const {daysStatus} = useDaysStatusContext();
    const {currentDay} = useCurrentDayContext();
    const {fakeClean} = useFakeCleanContext();
    const {setShowPopup} = useShowPopupContext();

    return (
        <div id="daysContainer">
            {daysStatus.map((day, id) => 
            <div 
                key={id} 
                onClick={currentDay === id ? () => setShowPopup(true) : null} 
                className={
                    `day-box
                    ${(id === (!fakeClean ? currentDay : 0)) ? "active" : ""} ${(!fakeClean && (day === "great")) ? "green-bg" : ""} ${(!fakeClean && (day === "terrible")) ? "red-bg" : ""}
                    
                `}>
                    {id +1}
            </div>

            )}
        </div>
    )
}