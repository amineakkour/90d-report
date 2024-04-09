export default function Statics({ days, fakeClean }){
    const daysLength = days.filter(day => parseInt(day) !== 0).length;
    const greatDaysLength = days.filter(day => day === "great").length;
    const terribleDaysLength = days.filter(day => day === "terrible").length;

    return (
        <div id="staticsList">
            <ul>
                <li className="green-clr"> Nhar 5/5: <span>{fakeClean ? 0 : greatDaysLength}</span></li>
                <li className="red-clr">Nhara Na9ass <span>{fakeClean ? 0 : terribleDaysLength}</span></li>
                <li>ch7al man nhar daz <span>{fakeClean ? 0 : daysLength}</span>/{days.length}</li>
            </ul>
        </div>
    )
}