const cursors = document.querySelectorAll(".box");

cursors.forEach((cursor) => {
  window.addEventListener("mousemove", (e) => {
    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY + "px";
  });
});
