const questionData = [
  {
    q: "포탈이 열릴 때, 가장 먼저 감지하는 징후는?",
    a: [
      "눈앞에 잔상처럼 빛이 흔들린다",
      "귓속에서 낮은 진동이 계속 울린다",
      "팔에 오싹한 전류가 흐른다",
      "알 수 없는 느낌이 든다",
      "형광색 불빛이 번쩍인다",
      "심장 소리와 어긋나는 리듬이 들린다",
      "바닥이 꺼지는 듯해 휘청인다"
    ],
    t: ["v", "s", "t", "m", "v", "s", "t"]
  },
  {
    q: "낯선 공간에서 느껴지는 이상한 기운은?",
    a: [
      "벽에 흐릿한 영상이 겹쳐 보인다",
      "공간을 가르는 속삭임 같은 소리",
      "공기가 갑자기 차가워지며 살갗을 스친다",
      "이건 단순한 착각이 아니라는 확신",
      "빛이 안 어울릴 정도로 어두운 구역이 눈에 들어온다",
      "손끝에서 등골까지 전해지는 가벼운 떨림",
      "머리 위에서 울리는 하얀 잡음"
    ],
    t: ["v", "s", "t", "m", "v", "t", "s"]
  },
  {
    q: "뇌캐시가 폭주했을 때, 당신은?",
    a: [
      "눈을 감으면 형형색색 섬광이 번진다",
      "이명이 심해지며 주변 소리가 묻힌다",
      "손바닥에 땀이 흥건해지고 온도가 변한다",
      "머릿속에서 '왜?' 질문이 폭주한다",
      "모든 색이 더 선명해지는 기분",
      "갑작스런 심장 박동 소리만 크게 들린다",
      "의자나 바닥이 흔들리는 착각"
    ],
    t: ["v", "s", "t", "m", "v", "s", "t"]
  },
  {
    q: "스쳐 지나가는 순간, 어떤 감각이 선명해졌나?",
    a: [
      "유리창에 비치는 네온 불빛",
      "바람 소리가 귀를 파고든다",
      "낯선 이의 손길이 살갗을 스쳐간다",
      "설명할 수 없는 '아, 이거다' 느낌",
      "잿빛 속에서 번쩍이는 형광 흔적",
      "머릿속에서 반복되는 짧은 멜로디",
      "심장 박동이 바깥 박자랑 동기화된다"
    ],
    t: ["v", "s", "t", "m", "v", "s", "t"]
  },
  {
    q: "‘멍’ 상태에서 깨어날 때, 남는 감각은?",
    a: [
      "눈앞에 번져있던 잔상이 사라진다",
      "사라졌던 소음이 다시 들리기 시작한다",
      "몸의 긴장이 스르륵 풀리는 느낌",
      "아직 현실로 돌아오지 않은 듯한 직감",
      "흑백이었던 시야가 서서히 색을 찾는다",
      "희미한 맥박음이 귓가를 울린다",
      "손가락 마디를 꺾어보니 기묘하게 편안해진다"
    ],
    t: ["v", "s", "t", "m", "v", "s", "t"]
  },
  // ... (나머지 10문항도 동일하게 구성)
];

// 감각 점수 저장
let qIdx = 0;
let score = { v: 0, s: 0, t: 0, m: 0 };

const quiz = document.getElementById("quiz");
const resultBox = document.getElementById("resultBox");
const shareBtn = document.getElementById("shareBtn");
const bgm = document.getElementById("bgm");
const whiteNoise = document.getElementById("whiteNoise");

function renderQuestion() {
  if (qIdx >= questionData.length) {
    return showResult();
  }

  const q = questionData[qIdx];
  let html = `<div class="question-box"><h2>${q.q}</h2>`;
  q.a.forEach((text, i) => {
    html += `<button onclick="selectAnswer(${i})">${text}</button>`;
  });
  html += `</div>`;
  quiz.innerHTML = html;
}

function selectAnswer(i) {
  const senseType = questionData[qIdx].t[i];
  score[senseType]++;
  qIdx++;
  renderQuestion();
}

function showResult() {
  quiz.innerHTML = "";
  whiteNoise.play();

  const finalType = Object.entries(score).sort((a,b)=>b[1]-a[1])[0][0];

  let resultMsg = "";
  switch(finalType) {
    case "v":
      resultMsg = "[VISUALIZER] 시각 해커 - 빛과 잔상에서 진실을 읽습니다.";
      break;
    case "s":
      resultMsg = "[SOUNDDRIFTER] 청각 분석자 - 음파와 주파수의 흐름에 민감합니다.";
      break;
    case "t":
      resultMsg = "[TACTILE SEEKER] 촉각 감지자 - 피부를 통해 세계를 인식합니다.";
      break;
    case "m":
      resultMsg = "[INTUNE] 직관 공명자 - 설명할 수 없는 신호를 먼저 해석합니다.";
      break;
  }

  resultBox.innerHTML = `
    <h2>당신의 감각 타입</h2>
    <p>${resultMsg}</p>
    <p style="margin-top:1rem;">뇌캐시가 성공적으로 삭제되었습니다.</p>
  `;
  resultBox.style.display = "block";
  shareBtn.classList.remove("hidden");
}

shareBtn.onclick = () => {
  const url = encodeURIComponent(window.location.href);
  const txt = encodeURIComponent("NEUROFO 감각 해킹 테스트 결과 공개!");
  const shareUrl = `https://twitter.com/intent/tweet?text=${txt}&url=${url}`;
  window.open(shareUrl, "_blank");
};

renderQuestion();
