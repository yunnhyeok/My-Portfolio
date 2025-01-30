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

function openModal(imageSrc, title, description) {
  const modal = document.getElementById("modal");
  const modalImage = document.querySelector(".modal-image");
  const modalTitle = document.querySelector(".modal-header h2");
  const modalDescription = document.querySelector(".modal-header p");

  if (modal && modalImage && modalTitle && modalDescription) {
    modal.style.display = "flex"; // 모달 표시

    // 이미지가 있을 경우만 설정
    if (imageSrc) {
      modalImage.style.backgroundImage = `url(${imageSrc})`;
      modalImage.style.backgroundSize = "cover";
    }

    // 제목 및 설명 설정
    modalTitle.innerText = title || "프로젝트 제목 없음";
    modalDescription.innerText = description || "설명이 없습니다.";
  } else {
    console.error("모달 요소를 찾을 수 없습니다.");
  }
}

function closeModal() {
  const modal = document.getElementById("modal");
  if (modal) {
    modal.style.display = "none"; // 모달 숨김
  }
}
