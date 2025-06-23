

export function headinggg(){

    
const img = [
  "../../public/images/short5.jpg",
  "../../public/images/short2.jpg",
  "../../public/images/short3.png",
  "../../public/images/short4.jpeg",
];

let currentIndex = 0;
let slider = document.querySelector('.heading');
function changeBack() {
  slider.style.backgroundImage = `url('${img[currentIndex]}')`;
  currentIndex = (currentIndex + 1) % img.length;
}

changeBack();
setInterval(() => {
  changeBack();
}, 3000);

}
headinggg();