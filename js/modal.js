const openEl = document.querySelector("#open");
const closeEl = document.querySelector("#close");
const modalEl = document.querySelector(".modal-wrapper");

console.log(openEl);

openEl.onclick = () => {
    console.log("Open");
    modalEl.style.display = "flex";
};

closeEl.onclick = () => {
    console.log("Open");
    modalEl.style.display = "none";
};