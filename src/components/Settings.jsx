import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css';
import { useDaysStatusContext } from '../context/DaysStatusProvider';
import { useCurrentDayContext } from '../context/CurrentDayProvider';
import { useFakeCleanContext } from '../context/FakeCleanProvider';

export default function Settings(){
    const {daysStatus, setDaysStatus} = useDaysStatusContext();
    const {setCurrentDay} = useCurrentDayContext();
    const {setFakeClean} = useFakeCleanContext();

    const isDisabled = daysStatus[0] === 0
    
    function handleFakeClean(state){
        if(state === "enter"){
            setFakeClean(true)
        }else{
            setFakeClean(false)
        }
    }

    function handleClearButton(){
        if(!isDisabled){
            const options = {
                title: 'msa7 kolchi!!',
                message: 'wach mt2kad al batal',
                buttons: [
                    {
                    label: 'Ah',
                    onClick: () => {handleClear()}
                    },
                    {
                    label: 'La',
                    onClick: () => {setFakeClean(false)}
                    }
                ],
                closeOnEscape: true,
                closeOnClickOutside: true,
                keyCodeForClose: [8, 32],
            };
    
    
            confirmAlert(options)
            
            function handleClear(){
                setDaysStatus(Array.from({ length: 90}).fill(0))
                setCurrentDay(0)
            }
        }
    }

    return (
        <div id="setting">
            <button disabled={isDisabled} className={`${isDisabled ? "disabledClearButton" : ""}`} onMouseEnter={() => handleFakeClean("enter")} onMouseLeave={() => handleFakeClean("leave")} id="clear" onClick={handleClearButton}>Msa7 kolchi</button>
        </div>
    )
}