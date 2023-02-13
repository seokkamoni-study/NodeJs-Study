const url = require("url");

const myURL = new URL(
  "https://www.youtube.com/watch?v=BHAcVyx4hBs&list=RDBHAcVyx4hBs&start_radio=1"
);

console.log("new URL(): ", myURL);
console.log("url.format(): ", url.format(myURL));

// searchParams

console.log("searchParams: ", myURL.searchParams);
// URLSearchParams { 'v' => 'BHAcVyx4hBs', 'list' => 'RDBHAcVyx4hBs', 'start_radio' => '1' }
console.log("get: ", myURL.searchParams.get("start_radio")); // 1

// append, toString, set, getAll, delete.. 등등 많음

// query string -> searchParams 로 대체하세요
