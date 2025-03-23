const cardData = {
  VISUALIZER: {
    image: 'images/visualizer.png',
    title: 'VISUALIZER',
    description: '너는 시각 패턴을 해독하는 공명자. 빛과 왜곡된 현실의 틈 사이에서 진실을 찾는다.',
  },
  INTUNE: {
    image: 'images/intune.png',
    title: 'INTUNE',
    description: '너는 미세한 진동을 감지하는 공명체. 세상의 흐름에 조용히 동기화되며 감각의 균형을 이룬다.',
  },
  // 추가 카드 타입도 여기에 넣어주면 됨
};

window.onload = () => {
  const params = new URLSearchParams(window.location.search);
  const type = params.get('type');
  const card = cardData[type];

  if (card) {
    document.getElementById('result-image').src = card.image;
    document.getElementById('card-title').textContent = card.title;
    document.getElementById('card-description').textContent = card.description;
  }
};
