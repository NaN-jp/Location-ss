function test() {
    navigator.geolocation.getCurrentPosition(jsToGas);
}

function jsToGas(position){
    var comment = document.getElementById("commentArea").ariaValueText;
    var date = new Date(position.timestamp);
    var string = "commnet" + "\n";
    string += comment + "\n";
    string += "timestamp" + "\n";
    string += date;
    alert(string);
}