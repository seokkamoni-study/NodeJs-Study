console.log(this); // 빈 객체  =>  {} === module.exports
console.log(this === module.exports); // true

function a() {
  console.log(this === global); // function 안에 있는 this는 글로벌
}
