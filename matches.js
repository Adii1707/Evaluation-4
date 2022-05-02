// write js code here corresponding to matches.html

var schedule = JSON.parse(localStorage.getItem("schedule"));
console.log(schedule);

favouritesarr =  JSON.parse(localStorage.getItem("favourites")) || [];
console.log(favouritesarr)

var filter = [];
console.log(filter)
displaydata(schedule);

function displaydata(data)
{
  data.map(function(el){
     
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    td1.innerText = el.Unum;
    var td2 = document.createElement("td");
    td2.innerText = el.Uteam;
    var td3 = document.createElement("td");
    td3.innerText = el.Uteamb;
    var td4 = document.createElement("td");
    td4.innerText = el.Udate;
    var td5 = document.createElement("td");
    td5.innerText = el.Uvanue;
    var td6 = document.createElement("td");
    td6.innerText = "favourite";
    td6.style.color = "green";
    td6.style.cursor = "pointer"
    td6.addEventListener("click", function(){
        displayFav(el);
    })
   

    tr.append(td1,td2,td3,td4,td5,td6);


    var tbody = document.querySelector("tbody");
    tbody.append(tr)
    
    filtered = document.querySelector("#filterVenue");
    filtered.innerHtml = ` <option value="none">Filter by venue</option>
    <option value="Mumbai">Mumbai</option>
    <option value="Banglore">Banglore</option>
    <option value="Hyderabad">Hyderabad</option>
    <option value="Delhi">Delhi</option>
    <option value="Pune">Pune</option>`
    filtered.addEventListener("change", function(){
        filterdata(el);
    })
    


  });
}
function displayFav(el){
    favouritesarr.push(el);
    localStorage.setItem("favourites",JSON.stringify(favouritesarr));

}
function filterdata(el){
    
filter.push(el)

}
