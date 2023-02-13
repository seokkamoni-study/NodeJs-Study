// util 각종 편의 기능을 모아둔 모듈
// deprecated와 promisify가 자주 쓰임

const util = require("util");
const crypto = require("crypto");

// deprecate는 보통 라이브러리를 만들때 많이 쓸것이다 라이브러리를 처음에 만들때 잘못만들면
// 그후에 라이브러리 함수들을 개발자들은 맘대로 지울수가없다 왜냐하면 내가 이 함수를 맘대로 지우면
// 개발자들이 이 라이브러리를 쓰고있을떄 프로그램이 고장나버릴수있으니깐 그떄 사람들이 함수를 쓸때마다 deprecate 쓰지 말라고 경고를 주고
// 사람들이 후에 안쓰는것같으면 삭제하는것이다
const dontUseMe = util.deprecate((x, y) => {
  console.log(x + y);
}, "dontUseMe 함수는 더 이상 쓰지 마세요");
dontUseMe(1, 2);

// node에서는 promise를 지원안하고 callback으로 남아있는 애들이 많다
// 걔네들을 promise랑 같이 쓸떄 callback들은 async await 못써서 힘든점이 많은데
// 그때 callback을 promisify로 감싸면 promise then catch를 붙힐수있게됨
// await과 async도 쌉가능 ~
// 단 callback이 (error,data) => {} 형식이여야함

const randomBytePromise = util.promisify(crypto.randomBytes);

randomBytePromise(64)
  .then((buf) => {
    console.log(buf.toString("base64"));
  })
  .catch((error) => {
    console.error(error);
  });
