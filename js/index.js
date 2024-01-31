var textArea;
var nowDate;
var longitude;
var latitude;

var optionObj = {
	"enableHighAccuracy": ture ,
	"timeout": 8000 ,
	"maximumAge": 5000 ,
} ;

function jsToGas(){
    navigator.geolocation.getCurrentPosition(successFunc, errorFunc, optionObj);
}

function successFunc(position){
    textArea = document.getElementById("commentArea").ariaValueText;
    nowDate = new Date(position.timestamp);
    longitude = position.coords.longitude;
    latitude = position.coords.latitude;
    
    alert(textArea + "\n" + nowDate + "\n" + longitude + "\n" + latitude);
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