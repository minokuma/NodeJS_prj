/* 1. express모듈을 로드해서 인스턴스화 한 후 핸들러 생성*/                 						
var express = require("express");                  						
var app = express();                						
                  						
/* 2. listen()메소드를 실행해서 3000번 포트를 대기상태로 만듦*/                						
var server = app.listen(3000, function(){                						
    console.log("Node.js is listening to PORT:" + server.address().port);                 						
});                  						
                  						
/* 3. 애플리케이션 처리를 기술하는 부분 */                  						
                  						
// 샘플데이터                						
var photoList = [                						
    {                						
        id: "001",                  						
        name: "photo001.jpg",                						
        type: "jpg",                						
        dataUrl: "http://localhost:3000/data/photo001.jpg"                 						
    },{                 						
        id: "002",                  						
        name: "photo002.jpg",                						
        type: "jpg",                						
        dataUrl: "http://localhost:3000/data/photo002.jpg"                 						
    }                						
]                 						
         						
app.get('/', function(req, res){       						
   res.send('Hello World!');        						
})						
						
// 샘플데이터를 가져오기 위한 API                  						
app.get("/api/photo/list", function(req, res, next){                 						
    res.json(photoList);                  						
});                  						
