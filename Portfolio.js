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

function openModal(modalId, imageSrc, title, description) {
  const modal = document.getElementById(modalId);
  if (!modal) {
    console.error(`모달 ID(${modalId})를 찾을 수 없습니다.`);
    return;
  }

  const modalImage = modal.querySelector(".modal-image");
  const modalTitle = modal.querySelector(".modal-header h2");
  const modalDescription = modal.querySelector(".modal-header p");

  modal.style.display = "flex"; // 모달 표시

  if (imageSrc) {
    modalImage.style.backgroundImage = `url(${imageSrc})`;
    modalImage.style.backgroundSize = "cover";
  }

  modalTitle.innerText = title || "프로젝트 제목 없음";
  modalDescription.innerText = description || "설명이 없습니다.";
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = "none"; // 해당 모달 숨김
  }
}

/* 작업기여도 박스 */
// 리스트 토글 (여러 개 추가 가능)
function toggleList(listId) {
  const list = document.getElementById(listId);
  list.style.display = list.style.display === "none" ? "block" : "none";
}

/* 프로젝트 이미지를 띄우는 JS 함수 */
// 팝업을 띄우는 함수
function showPopup(imgElement) {
  const popupContainer = document.getElementById("popup-container");
  const popupImage = document.getElementById("popup-image");

  popupImage.src = imgElement.src;
  popupContainer.style.display = "flex"; // 팝업을 표시
}

// 팝업을 닫는 함수
function hidePopup(event) {
  const popupContainer = document.getElementById("popup-container");

  // 'popup-container'나 'popup-close'를 클릭한 경우에만 팝업을 숨깁니다.
  if (
    event.target === popupContainer ||
    event.target === document.querySelector(".popup-close")
  ) {
    popupContainer.style.display = "none"; // 팝업을 숨깁니다.
  }
}
