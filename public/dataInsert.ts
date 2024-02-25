import * as mysql from 'mysql';

// MySQLデータベースへの接続情報
const connection : mysql.Connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'diversmap',
  database: 'divers'
});

let insertData : any;

// MySQLに接続
connection.connect((err) => {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});


function insertIntoMysql() {
  const sql = 'INSERT INTO divers (team, comment, latitude, longitude) VALUES ?';
  connection.query(sql, [insertData], (err) => {
    if (err) {
      console.error('Error inserting data: ' + err.stack);
      return;
    }

    console.log('Data inserted successfully');
  });
}

export function callTs(team : String, comment : String, lat : number, lng : number) : void {
    insertData = [team, comment, lat, lng];
    insertIntoMysql();
}


