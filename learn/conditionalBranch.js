const cm = prompt(`身長を入力してください`);
const kg = prompt(`体重をを入力してください`);

function Bmi(cm, kg) {
  const shincho = cm / 100;
  const bmiNum = Math.round((kg / shincho) * shincho);
  if (bmiNum > 27) {
    return "かなり太りすぎ";
  } else if (bmiNum > 23 && bmiNum < 26) {
    return "ちょっと太り気味";
  } else if (bmiNum > 21 && bmiNum < 22) {
    return "普通";
  } else if (bmiNum > 18 && bmiNum < 20) {
    return "ちょっと痩せ気味";
  } else if (bmiNum < 17) {
    return "痩せ気味";
  }
}

const result = Bmi(cm, kg);

alert(result);
