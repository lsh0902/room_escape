let totalNum = 12;
const num = 7;
const answer = [
  "0806",
  "0068",
  "6800",
  "8060",
  "6080", // 4
  "8600",
  "0860",
  "0608", // 7
  "0680",
  "6008",
  "8006",
  "0086",
];
const loc = [
  "아침 점심 저녁 마다 열고 닫는 것", //0
  "화장대 오른쪽 서랍",
  "호랑이 연고가 어딨지?😑",
  "밝으면 향이나는 것🤨",
  "침대 위 어딘가", // 1
  "높은 곳🙄",
  "옷장 아래 서랍",
  "가장 가까운 방을 열면..😬", // 2
  "가장 뜨거운 곳😡",
  "화장실 화니 세면도구",
  "등잔 밑이 어둡다. (주원room ver)",
  "물고기밥",
];
const check = [
  "케잌",
  "사진",
  "벌레",
  "알약",
  "행운돌", // 1
  "립밤",
  "파우치",
  "스위치, 편지뭉치", // 2
  "꽝",
  "꽝",
  "꽝",
  "꽝",
];
const flag = new Array(totalNum);
window.addEventListener("load", () => {
  const input = document.querySelector(".input");
  const title = document.querySelector(".title");
  const button = document.querySelector(".btn");
  const result = document.querySelector(".result");
  const end = document.querySelector(".end");
  const timer = document.querySelector(".time")
  let finded = 0;

  end.innerHTML = `아직 입력하지 않은 숫자는 ${totalNum} 개 입니다.`;

  button.addEventListener("click", () => {
    enterPass();
  });

  input.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
      enterPass();
    }
  });

  function enterPass() {
    let val = input.value;

    if (answer.indexOf(val) !== -1) {
      const idx = answer.indexOf(val);
      if (flag[idx] === undefined) {
        if (idx === 3) MessageSound(`${loc[idx]}`, "./correct2.mp3");
        else           MessageSound(`${loc[idx]}`, "./correct.mp3");
        flag[idx] = true;

        if (![11, 10, 9, 8, 2].includes(idx)) finded += 1;
        
        if (finded === num) {
          setTimeout(() => {
            window.location.assign('./success.html');
          }, 30 * 1000);
        }

        totalNum -= 1;
        end.innerHTML = `아직 입력하지 않은 숫자는 ${totalNum} 개 입니다.`;

      } else {
        MessageSound( "이미 찾은 물건입니다.", './nope.mp3');
      }
    } else {
      MessageSound("X", './nope.mp3')
    }
  }

  
  const MessageSound = (message, sound) => {
    console.log(message)
    // makeSound(sound);
    result.innerHTML = message;
  }

  const makeSound = (sound_direction) => {
    const sound = new Audio(sound_direction);
    sound.play();
  }

  let time = 6 * 10;
  let x = setInterval(() => {
    min = parseInt(time/600);
    sec = parseInt(time % 600 / 10);
    ms = time % 10;
    timer.innerHTML = sec < 10 ? `${min}:0${sec}:${ms}` : `${min}:${sec}:${ms}`;
    time-=1;
    if(time < 0) {
      clearInterval(x);
      window.location.assign('./failed.html')
    }
  }, 100);
});
