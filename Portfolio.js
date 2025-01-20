//페이지 이동 함수

fullpage_api.moveTo("section2"); // 두 번째 섹션으로 이동
fullpage_api.moveSectionDown(); // 다음 섹션으로 이동
fullpage_api.moveSectionUp(); // 이전 섹션으로 이동

window.onload = function () {
  if (window.location.hash) {
    history.replaceState(null, null, window.location.pathname);
  }
};

new fullpage("#fullpage", {
  autoScrolling: true,
  navigation: true,
  scrollingSpeed: 700, // 속도를 느리게 설정
});
