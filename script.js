const list = document.getElementsByClassName("list");

// Adding toggle active on list menu in navigation bar
for (let i = 0; i < list.length; i++) {
  list[i].addEventListener("click", function () {
    const isActive = this.classList.contains("active");
    if (!isActive) {
      for (let j = 0; j < list.length; j++) {
        list[j].classList.remove("active");
      }
      this.classList.add("active");
    } else {
      return;
    }
  });
}
