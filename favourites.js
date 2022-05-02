// write js code here corresponding to favourites.html

var fav = JSON.parse(localStorage.getItem("favourites"));
console.log(fav);
  

displaydata(fav);

function displaydata(data)
{
  data.map(function(el,index){
     
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
    td6.innerText = "Delete";
    td6.style.color = "red";
    td6.style.cursor = "pointer";
    td6.addEventListener("click", function(){
        removedata(el,index);
    })

    tr.append(td1,td2,td3,td4,td5,td6);

    var tbody = document.querySelector("tbody");
    tbody.append(tr)
    



  });
}

function removedata(el,index){
    
    
      fav.splice(1,index);
    window.location.reload();

}



