function openBook(project) {
  const modal = document.getElementById("modal");
  const content = document.getElementById("modal-body");

  let data = {
    project1: "<h2>Project 1</h2><p>Description of project 1.</p>",
    project2: "<h2>Project 2</h2><p>Description of project 2.</p>",
    project3: "<h2>Project 3</h2><p>Description of project 3.</p>"
  };

  content.innerHTML = data[project];
  modal.style.display = "block";
}

function closeBook() {
  document.getElementById("modal").style.display = "none";
}