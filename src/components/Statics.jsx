import { useDaysStatusContext } from "../context/DaysStatusProvider";
import { useFakeCleanContext } from "../context/FakeCleanProvider";

export default function Statics(){
    const {daysStatus} = useDaysStatusContext();
    const {fakeClean} = useFakeCleanContext();

    const daysLength = daysStatus.filter(day => parseInt(day) !== 0).length;
    const greatDaysLength = daysStatus.filter(day => day === "great").length;
    const terribleDaysLength = daysStatus.filter(day => day === "terrible").length;

    return (
        <div id="staticsList">
            <ul>
                <li className="green-clr"> Nhar 5/5: <span>{fakeClean ? 0 : greatDaysLength}</span></li>
                <li className="red-clr">Nhara Na9ass <span>{fakeClean ? 0 : terribleDaysLength}</span></li>
                <li>ch7al man nhar daz <span>{fakeClean ? 0 : daysLength}</span>/{daysStatus.length}</li>
            </ul>
        </div>
    )
}