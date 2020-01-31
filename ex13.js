function Clazz(msg) {
  this.name = "I am a class"; //멤버 변수
  this.message = msg; //멤버 변수
  message2 = "find me"; //내부 변수
  this.print = function() {
    //멤버 메서드
    console.log(message2);
  };
}

var myClass = new Clazz("good news");
console.log(myClass.name);
myClass.name = "my name is Kim";
console.log(myClass.name); //정상
console.log(myClass.message); //정상

console.log(myClass.message2); //오류-내부변수는 호출불가하므로 메서드에 의해 실행해야 함
myClass.print(); //정상
