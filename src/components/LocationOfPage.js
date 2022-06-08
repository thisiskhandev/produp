let page = window.location.pathname.replaceAll("/", "page-");
let mainRoot = document.getElementById("root");
mainRoot.classList.add(page);
