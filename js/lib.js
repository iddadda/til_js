const say = function () {};
const cry = () => {};
function smile() {}

// 매개변수로 전달된 함수 실행
function run(a) {
  a();
}

run(say);
run(cry);
run(smile); // smile은 변수가 아니라서 Error
