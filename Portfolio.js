let currentSection = 0; // 현재 섹션 인덱스
const sections = document.querySelectorAll(".section"); // 모든 섹션 선택
const totalSections = sections.length;

window.addEventListener("wheel", (event) => {
  if (event.deltaY > 0) {
    // 아래로 스크롤
    if (currentSection < totalSections - 1) {
      currentSection++;
    }
  } else {
    // 위로 스크롤
    if (currentSection > 0) {
      currentSection--;
    }
  }
  scrollToSection(currentSection);
});

function scrollToSection(index) {
  window.scrollTo({
    top: window.innerHeight * index,
    behavior: "smooth", // 부드러운 스크롤
  });
}
