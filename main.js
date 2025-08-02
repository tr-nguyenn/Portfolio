// điều hướng nav
const navLinks = document.querySelectorAll(".navbar__link");

navLinks.forEach((item) => {
  // Lắng nghe sự kiện click
  item.addEventListener("click", () => {
    // Xoá all class active
    removeActive();
    // Thêm class active cho nút vừa click
    item.classList.add("navbar__link--active");
  });
});

function removeActive() {
  navLinks.forEach((item) => {
    // xoá class active
    item.classList.remove("navbar__link--active");
  });
}
