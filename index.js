// write js code here corresponding to index.html
// You should add submit event on the form


var form = document.querySelector("form").addEventListener("submit", mpl);

var mpldata = JSON.parse(localStorage.getItem("schedule")) || [];
function mpl(){
event.preventDefault();

var mplObj = {

          Unum:masaiForm.matchNum.value,
          Uteam:masaiForm.teamA.value,
          Uteamb:masaiForm.teamB.value,
          Udate:masaiForm.date.value,
          Uvanue:masaiForm.venue.value

}
mpldata.push(mplObj);
console.log(mpldata)

localStorage.setItem("schedule", JSON.stringify(mpldata));



}