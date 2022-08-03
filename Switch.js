let now = new Date();
let day = now.getDay();
switch (day) {
    case 2:
    case 3:
    case 4:
    case 5:
    console.log(`Weekday`);
    break;
  case 0:
    console.log(`Sunday`);
    break;
  case 6:
    console.log(`Saturday`);
    break;
  case 1:
    console.log(`Monday`);
  default:
    console.log(``);
    break;
}
