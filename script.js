let btnOpen = document.getElementsByClassName('open')[0];
btnOpen.addEventListener('click', openModal)
function openModal(){
    console.log("Я работаю");
    let window = document.getElementsByClassName('opened')[0].style.display ='block';

}
let btnClose = document.getElementsByClassName('close')[0];
btnClose.addEventListener('click', closeModal)

function closeModal() {
    let window = document.getElementsByClassName('opened')[0].style.display ='none';
}
