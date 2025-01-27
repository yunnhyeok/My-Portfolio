function showCategory(categoryId) {
  // 모든 탭에서 active 클래스 제거
  const tabs = document.querySelectorAll(".skill-tab");
  tabs.forEach((tab) => {
    tab.classList.remove("active");
  });

  // 클릭한 탭에 active 클래스 추가
  const activeTab = document.querySelector(
    `[onclick="showCategory('${categoryId}')"]`
  );
  activeTab.classList.add("active");

  // 모든 카테고리 숨김 처리
  const categories = document.querySelectorAll(".skill-category");
  categories.forEach((category) => {
    category.classList.remove("active");
  });

  // 선택된 카테고리만 표시
  document.getElementById(categoryId).classList.add("active");
}
