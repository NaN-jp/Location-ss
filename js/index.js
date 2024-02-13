let team;
let textArea;
let longitude;
let latitude;

const callTs = require('../ts/dataInsert');

const optionObj = {
	"enableHighAccuracy": true ,
	"timeout": 8000 ,
	"maximumAge": 0 ,
};

const errorMessage = {
    0: "原因不明のエラーが発生しました…。" ,
    1: "位置情報の取得が許可されませんでした…。" ,
    2: "電波状況などで位置情報が取得できませんでした…。" ,
    3: "位置情報の取得に時間がかかり過ぎてタイムアウトしました…。" ,
};

function saveMysql(){
    navigator.geolocation.getCurrentPosition(successFunc, errorFunc, optionObj);
}

function successFunc(position){
    //チーム
    team = document.getElementById("team").value;
    //コメント
    textArea = document.getElementById("commentArea").value;
    //緯度
    latitude = position.coords.latitude;
    //経度
    longitude = position.coords.longitude;
    //TSを呼び出す
    if(!!team || !!textArea){
        callTs(team, textArea, latitude, longitude);
    }else{
        return;
    }
}

function errorFunc(error){
    alert(errorMessage[error.code] ) ;
}