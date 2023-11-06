const menuBtn = document.querySelector(".menu_bth");
const menuList = document.querySelector("#info");

function toggleMenuVisibility(){
    menuList.classList.toggle("hide");
}

menuBtn.addEventListener("click", toggleMenuVisibility);

const portSee = document.querySelector('.portfolio');
const portBtn = document.querySelector('.portfolio_btn');
function togglePortfolio(){
    portSee.classList.toggle("hide");
}
portBtn.addEventListener("click", togglePortfolio);