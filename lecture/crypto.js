// 암호화: 평문을 암호화하는것
// 복호화: 암호를 평문으로 해독하는것

// 해시기법: 단방향 암호화 -> 비밀번호에 많이 쓰임
// 문자열을 고정된 길이의 다른 문자열로 바꾸는 방식
// abcdefg -> qvew

// 원래 비번: 1234, 서버에 저장된 비번 5678
// 사람이 1234를 치고 오면 5678로 변환하여 서버에 저장된것과 비교하여 맞으면 로그인 완료
// 요런 프로세스

// 알고리즘은 sha256이나 sha512정도 쓰세유

const crypto = require("crypto");

console.log(
  "base64: ",
  crypto.createHash("sha512").update("비밀번호").digest("base64") // 보통 base64 많이 씀
  // sha512 추천
);

// pdkdf2

// sha512가 취약해지면서 sha3으로 넘어가야함
// 현재는 pdkdf2나 bcrypt, scrypt 알고리즘으로 비밀번호를 암호화함
// node는 pdkdf2나 scrypt 지원한다

// pdkdf2는 비밀번호와 salt라는것을 같이 넣으면 해쉬화가 된다
// 그래서 pdkdf2를 쓸때는 비밀번호와 salt 둘다 디비에 저장해놔야함
// salt가 달라지면 비번도 달라지기때문에
// salt는 해독을 더 어렵게하는 장치임

// 예제
crypto.randomBytes(64, (err, buf) => {
  crypto.pbkdf2(
    "비밀번호",
    buf.toString("base64"),
    100000,
    64,
    "sha512",
    (err, key) => {
      console.log(key.toString("base64"));
    }
  );
});

// 양방향 암호화

// 대칭형 암호화는 AES 추천 같은키로 암호화했다 풀었다하는것

// 비대칭 프론트랑 서버랑 다른 키를 가지고있으면서 암호화했다 복호화했다 하는것
// 비대칭 암호화에는 RSA 방식 추천

// 대칭형 암호화(암호문 복호화 가능)
// key가 사용됨 key가 훔쳐질수도있기에 관리를 잘해야한다
// 암호화할떄와 복호화할때 같은 key를 사용해야함

// https://www.npmjs.com/package/crypto-js 선생님은 이걸 가지고 암호화하는것을 추천함
