var nlink=document.getElementById("nlink");
function showmenu(){
    nlink.style.right="0"
}
function hidemenu(){
    nlink.style.right="-200px"
}




const elements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("appear");
    }
  });
});

elements.forEach(el => observer.observe(el));

