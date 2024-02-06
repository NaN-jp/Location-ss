var textArea;
var nowDate;
var longitude;
var latitude;

var optionObj = {
	"enableHighAccuracy": true ,
	"timeout": 8000 ,
	"maximumAge": 0 ,
} ;

function exportCsv(){
    navigator.geolocation.getCurrentPosition(successFunc, errorFunc, optionObj);
}

function successFunc(position){
    var csv = new XMLHttpRequest().open("GET", "data.csv", false);
    textArea = document.getElementById("commentArea").value;
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    
    var csvStr = longitude + "," + latitude + "," + textArea + "\n";
    
}

function errorFunc(error){
    var errorMessage = {
		0: "原因不明のエラーが発生しました…。" ,
		1: "位置情報の取得が許可されませんでした…。" ,
		2: "電波状況などで位置情報が取得できませんでした…。" ,
		3: "位置情報の取得に時間がかかり過ぎてタイムアウトしました…。" ,
	};
    alert(errorMessage[error.code] ) ;
}

