const githubLogo = document.getElementById("github-mark");
githubLogo.addEventListener("mouseover", () => {
  githubLogo.setAttribute("src", "./assets/GitHub_Logo_White.png");
});

githubLogo.addEventListener("mouseout", () => {
  githubLogo.setAttribute("src", "./assets/github-mark-white.png");
});

document.getElementById("portfolio-button").addEventListener("click", () => {
  document.getElementById("portfolio-title").scrollIntoView();
});

document.getElementById("about-button").addEventListener("click", () => {
  document.getElementById("about-title").scrollIntoView();
});

document.getElementById("unlinked-button").addEventListener("click", () => {
  document.getElementById("unlinked-title").scrollIntoView();
});
