let a = 10;

if (a > 11) {
  console.log("a가 11보다 크다");
} else if (a === 11) {
  console.log("a가 11이다");
} else {
  console.log("a가 11보다 작다");
}
//a가 11보다 작다

const blood = 2;
switch (blood) {
  case 0:
    console.log("혈액형 O형");
    break;
  case 1:
    console.log("혈액형 A형");
    break;
  case 2:
    console.log("혈액형 B형");
    break;
  case 3:
    console.log("혈액형 AB형");
    break;
  default:
    console.log("사람이 아니야 저리가버렷");
}
//혈액형 B형
