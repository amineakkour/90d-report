export default function DaysContainer( {currentDay, days, setPopupStatus, fakeClean} ){
    return (
        <div id="daysContainer">
            {days.map((day, id) => 
            <div 
                key={id} 
                onClick={currentDay === id ? () => setPopupStatus(true) : null} 
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