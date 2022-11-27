var mysql = require('mysql');

const db = mysql.createPool({
    host : 're-cycle.cxkdxk1jx9s9.ap-northeast-2.rds.amazonaws.com',
    // RDS 엔드 포인트
    port: 3306,
    // RDS 포트번호
    user : 'teamcycle',
    // RDS 마스터 사용자 이름
    password : 'teamcycle00',
    // RDS 비밀번호
    database : 'recycle'
    // 사용하려는 데이터베이스 이름
});

module.exports = db;