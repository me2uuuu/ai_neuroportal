// 질문 리스트 + 감각별 태그 포함
const questionData = [
  {
    q: "(Scene1) 포탈이 열릴 때, 가장 먼저 감지하는 징후는?",
    a: ["(V) 눈앞에 잔상처럼 빛이 흔들린다", "(S) 귓속에서 낮은 진동이 울린다", "(T) 팔에 전류가 흐른다", "(M) 불안감이 치밀어오른다", "(V) 형광 불빛이 번쩍인다", "(S) 심장소리와 어긋나는 리듬", "(T) 바닥이 꺼지는 듯한 감각"]
  },
  {
    q: "(Scene2) 낯선 공간에서 느껴지는 이상한 기운은?",
    a: ["(V) 벽에 영상이 겹쳐 보인다", "(S) 속삭임 같은 소리", "(T) 살갗을 스치는 냉기", "(M) 단순 착각이 아니라는 확신", "(V) 어두운 빛의 구역", "(T) 등골을 타는 떨림", "(S) 머리 위의 화이트노이즈"]
  },
  {
    q: "(Scene3) 뇌캐시가 폭주했을 때, 당신은?",
    a: ["(V) 눈을 감으면 섬광이 번진다", "(S) 이명이 심해진다", "(T) 손에 땀이 난다", "(M) ‘왜?’ 질문이 반복된다", "(V) 색이 선명해진다", "(S) 심장 박동이 커진다", "(T) 바닥이 흔들리는 착각"]
  },
  {
    q: "(Scene4) 스쳐간 감각 중 가장 선명한 것은?",
    a: ["(V) 유리창의 네온 불빛", "(S) 바람 소리", "(T) 낯선 손길", "(M) ‘이거다’라는 감각", "(V) 잿빛 속 형광 흔적", "(S) 반복되는 멜로디", "(T) 심장박동과 동기화"]
  },
  {
    q: "(Scene5) ‘멍’에서 깨어날 때, 남는 감각은?",
    a: ["(V) 잔상이 사라진다", "(S) 소음이 돌아온다", "(T) 긴장이 풀린다", "(M) 현실감이 약간 없다", "(V) 흑백이 색을 찾는다", "(S) 맥박음이 울린다", "(T) 마디를 꺾으며 이완"]
  },
  {
    q: "(Scene6) 가상이라면 가장 먼저 의심하는 감각은?",
    a: ["(V) 배경이 반복됨", "(S) 소리 결이 어긋남", "(T) 촉감이 이상함", "(M) 이 모든 게 꾸며졌단 직감", "(V) 채도 높은 색", "(S) 발소리의 시간차", "(T) 바닥 질감이 가벼움"]
  },
  {
    q: "(Scene7) 감정이 격해질 때, 가장 먼저 반응하는 건?",
    a: ["(V) 시야 가장자리가 흔들림", "(S) 귀가 먹먹해짐", "(T) 손 떨림", "(M) 감정이 폭발함", "(V) 색이 강렬해짐", "(S) 불협 소음", "(T) 닭살"]
  },
  {
    q: "(Scene8) 낯선 이와 마주할 때?",
    a: ["(V) 표정과 빛을 본다", "(S) 숨소리를 듣는다", "(T) 악수 온도를 느낌", "(M) 직감이 온다", "(V) 눈동자 색이 이상함", "(S) 침묵이 길게 느껴짐", "(T) 호흡 리듬이 어색함"]
  },
  {
    q: "(Scene9) 반복되는 꿈 속 강렬한 장면은?",
    a: ["(V) 빛이 쏟아짐", "(S) 외치는 목소리", "(T) 추락감", "(M) 내가 아닌 무언가가 된 느낌", "(V) 뒤틀린 색감", "(S) 심장소리", "(T) 터치로 갈라지는 공간"]
  },
  {
    q: "(Scene10) 과부하 시 긴급조치는?",
    a: ["(V) 눈을 감는다", "(S) 화이트노이즈에 집중", "(T) 감각을 더듬는다", "(M) 모든 게 무의미하다는 직감", "(V) 그림을 그림", "(S) 리듬을 만든다", "(T) 물의 온도를 느낌"]
  },
  {
    q: "(Scene11) 현실이 멈춘 느낌이 들 때?",
    a: ["(V) 사물을 관찰한다", "(S) 소리의 정지를 확인", "(T) 몸을 흔든다", "(M) 이 상태가 계속될 것 같다는 예감", "(V) 빛의 흐름", "(S) 이명", "(T) 피부를 꼬집어 본다"]
  },
  {
    q: "(Scene12) ‘소름’이란 단어가 주는 감각은?",
    a: ["(V) 흐릿한 시야", "(S) 등 뒤의 소리", "(T) 마비감", "(M) 예감", "(V) 명암의 경계", "(S) 노이즈에 의미 부여", "(T) 심장 → 한기"]
  },
  {
    q: "(Scene13) ‘이건 꿈일지도?’ 생각이 들 때?",
    a: ["(V) 시야가 만화처럼 보임", "(S) 대화가 에코처럼 들림", "(T) 바닥 촉감 이상", "(M) 몸이 투명해짐", "(V) 빛이 집중됨", "(S) 심장소리만 들림", "(T) 물체가 실감 안 남"]
  },
  {
    q: "(Scene14) 감정을 공유할 때?",
    a: ["(V) 감정의 색을 본다", "(S) 떨리는 목소리", "(T) 닿았을 때 느낌", "(M) 느낌이 통함", "(V) 색이 달아오름", "(S) 소음은 사라지고 심장소리", "(T) 체온이 동기화"]
  },
  {
    q: "(Scene15) 포탈이 닫힌 후 남는 감각은?",
    a: ["(V) 잔상", "(S) 진동", "(T) 손의 온기", "(M) 여운", "(V) 색이 사라짐", "(S) 사라진 소음", "(T) 가벼운 몸"]
  }
];

// 감각 분류
function classify(answer) {
  const code = answer.trim().slice(1, 2).toLowerCase();
  if (code === "v") return "vision";
  if (code === "s") return "sound";
  if (code === "t") return "touch";
  return "mind";
}

let qIndex = 0;
const score = { vision: 0, sound: 0, touch: 0, mind: 0 };
const quiz = document.getElementById("quiz");
const result = document.getElementById("resultBox");
const shareBtn = document.getElementById("shareBtn");
const whiteNoise = document.getElementById("whiteNoise");

function renderQ() {
  if (qIndex >= questionData.length) return showResult();

  const q = questionData[qIndex];
  let html = `<div class="question-box"><h2>${q.q}</h2>`;
  q.a.forEach(ans => {
    html += `<button onclick="answer('${ans}')">${ans}</button>`;
  });
  html += "</div>";
  quiz.innerHTML = html;
}

function answer(selected) {
  const sense = classify(selected);
  score[sense]++;
  qIndex++;
  renderQ();
}

function showResult() {
  quiz.innerHTML = "";
  whiteNoise.play();

  const top = Object.entries(score).sort((a, b) => b[1] - a[1])[0][0];
  let msg = "";

  switch (top) {
    case "vision":
      msg = "[VISUALIZER] 시각 해커 - 당신은 빛과 색의 흐름으로 해석합니다.";
      break;
    case "sound":
      msg = "[SOUNDDRIFTER] 음파 조율자 - 소리에서 진동의 질서를 읽어냅니다.";
      break;
    case "touch":
      msg = "[TACTILE SEEKER] 촉각 해석자 - 신체적 반응으로 진실을 감지합니다.";
      break;
    default:
      msg = "[INTUNE] 공명자 - 직관과 무의식의 신호에 동기화된 감각체입니다.";
  }

  result.innerHTML = `<h2>당신의 감각 타입</h2><p>${msg}</p><p style="margin-top:1rem;">[ 뇌캐시 초기화 완료. ]</p>`;
  result.style.display = "block";
  shareBtn.classList.remove("hidden");
}

shareBtn.onclick = () => {
  const url = encodeURIComponent(window.location.href);
  const txt = encodeURIComponent("🧠 나는 이런 감각 해커였어! [NEUROFO]");
  const link = `https://twitter.com/intent/tweet?text=${txt}&url=${url}`;
  window.open(link, "_blank");
};

renderQ();
