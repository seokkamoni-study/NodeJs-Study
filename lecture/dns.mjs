import dns from "dns/promises";

// 특정 서버에 ip를 알아놔야할때 dns 쓰면 됨

const ip = await dns.lookup("gilbut.co.kr");
console.log("IP:", ip);
// lookup은 최신 ip 주소를 가져옴

const a = await dns.resolve("gilbut.co.kr", "A"); // A는 옛날 ip 주소
console.log("A:", a);

const mx = await dns.resolve("gilbut.co.kr", "MX"); // MX는 메일 서버에 대한 세팅들
console.log("MX:", mx);

const cname = await dns.resolve("www.gilbut.co.kr", "CNAME"); // 별명
console.log("CNAME:", cname);

const any = await dns.resolve("www.gilbut.co.kr", "ANY"); // 애니는 나머지 것들
console.log("ANY:", any);
