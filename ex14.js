function Clazz(msg) {
  this.name = "i'm class";
  this.message = msg;
  message2 = "find me";
}

Clazz.prototype.getMessage = function() {
  return this.message;
};

Clazz.prototype.getMessage2 = function() {
  return this.message2; //message2는 멤버 변수가 아니므로 this에 의한 로딩이 안됨
};

var myClazz = new Clazz("good");
console.log(myClazz.getMessage());
console.log(myClazz.getMessage2()); //내부 변수에 의한 방법 실행되지 않음
