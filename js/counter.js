const number = document.querySelector("#number");
const increase = document.querySelector("#increase");
const decrease = document.querySelector("#decrease");

// console.log(number);
// console.log(increase);
// console.log(decrease);

// console.log(number.innerText);
// console.log(increase.offsetTop);
// console.log(decrease.id);
// console.log(number.innerHTML);

increase.onclick = () => {
    // console.log("increase가 클릭됨");
    number.innerText = parseInt(number.innerText) + 1;
};

decrease.onclick = () => {
    // console.log("decrease가 클릭됨");
    number.innerText = parseInt(number.innerText) - 1;
    if(number.innerText < 0) number.innerText = 0;
};