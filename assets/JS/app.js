/* ======== Date ======== */
const date = (document.getElementById("date").innerHTML = new Date().getFullYear());

/* ======== Navbar ======== */
const navBtn = document.getElementById("navbar-button");
const links = document.getElementById("nav-links");

navBtn.addEventListener("click", () => {
  links.classList.toggle("show-links");
});

/* ======== Scroll ======== */
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach(link => {
  link.addEventListener("click", e => {

    e.preventDefault();
    links.classList.remove("show-links");

    const id = e.target.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    let position = element.offsetTop - 55;

    window.scrollTo({
      left: 0,
      top: position,
      behavior: "smooth"
    });
  });
});

/* ======== About more info ======== */

document.querySelector(".btn-about").onclick = () => {
    document.querySelector(".about-more-info").style.height = "auto";
    document.querySelector(".btn-about").style.display = "none";
}

/* ======== Gallery popup ======== */
document.querySelectorAll(".gallery-img").forEach(image => {
  
  image.onclick = () => {
    document.querySelector(".popup-img").style.display = "block";
    document.querySelector(".popup-img img").src = image.firstElementChild.getAttribute("src");
  }
})

document.querySelector(".popup-img span").onclick = () => {
    document.querySelector(".popup-img").style.display = "none";
}
