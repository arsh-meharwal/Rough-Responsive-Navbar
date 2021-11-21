function func(){
    var x = document.getElementById("items");
    if (x.className === "topnav") {
        x.className += " responsive";
    } 
    else {
        x.className = "topnav"; 
    }
    
}