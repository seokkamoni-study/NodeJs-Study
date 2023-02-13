const path = require("path");

// mac -> /seokjin/javascript
// window -> c:\seokjin\javascript

// 이런식으로 운영체제마다 path 가 다르다 이것을 처리해주는것이 path 모듈
// 경로 처리할때는 path 모듈을 쓰는것이 좋다

// 예
path.join(__dirname, "..", "var.js"); // join은 절대경로를 무시함 -> 폴더 경로/var.js
path.resolve(__dirname, "..", "var.js"); // 절대경로를 존중하고 앞에것들을 없앰 -> /var.js

// 현재 폴더 경로/var.js -> 이걸 각 운영체제에 맞는 경로로 처리해줌
