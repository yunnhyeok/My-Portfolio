function showCategory(category) {
  // 모든 섹션 숨기기
  document.querySelectorAll(".skill-category").forEach(function (el) {
    el.classList.remove("active");
  });

  // 선택된 섹션 표시
  document.getElementById(category).classList.add("active");

  // 모든 탭에서 active 클래스 제거
  document.querySelectorAll(".skill-tab").forEach(function (el) {
    el.classList.remove("active");
  });

  // 클릭된 탭에 active 클래스 추가
  event.currentTarget.classList.add("active");
}
