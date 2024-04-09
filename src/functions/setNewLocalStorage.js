export default function setNewLocalStorage(){
  localStorage.setItem("days", Array.from({ length: 90}).fill(0))
  localStorage.setItem("currentDayInd", 0)
}
