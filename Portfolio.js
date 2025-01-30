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

/*project card JS*/
document.addEventListener("DOMContentLoaded", () => {
  const projectTabs = document.querySelectorAll(".project-tab");
  const projects = document.querySelectorAll(".project-card");

  projectTabs.forEach((projectTab) => {
    projectTab.addEventListener("click", () => {
      projectTabs.forEach((t) => t.classList.remove("active"));
      projectTab.classList.add("active");

      const category = projectTab.getAttribute("data-category");

      projects.forEach((project) => {
        if (
          category === "all" ||
          project.getAttribute("data-category") === category
        ) {
          project.style.display = "block";
        } else {
          project.style.display = "none";
        }
      });
    });
  });
});

function openModal(title) {
  document.getElementById("modal-title").innerText = title;
  document.getElementById("modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
