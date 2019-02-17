// let pages=document.querySelector('.pages');
// let list=document.querySelectorAll('.pages div');
// let pre=document.querySelector('.pre');
// let next=document.querySelector('.next');
// let number=1;
// pages.addEventListener('click',function (e) {
//     let target=e.target;
//     let text=target.innerText*1;
//     if(text>0){
//         number=text;
//         for(let i=0;i<list.length;i++){
//             list[i].classList.remove('active');
//         }
//         list[number].classList.add("active");
//     }
//     if(target!=pre){
//         if(text!=1){
//             pre.classList.remove("disable");
//         }else{
//             pre.classList.add("disable");
//         }
//     }
//     if(target!=next) {
//         if (text <= list.length - 3) {
//             next.classList.remove('disable');
//         }
//     }
// })
// pre.addEventListener('click',function () {
//     if(number!=1){
//         number--;
//         for(let i=0;i<list.length;i++){
//             if(i!=number){
//                 list[i].classList.remove('active');
//             }else{
//                 list[i].classList.add("active");
//             }
//         }
//         if(number==1){
//             pre.classList.add("disable");
//         }
//     }
// })
// next.addEventListener('click',function () {
//     if(number<=list.length-3){
//         number++;
//         for(let i=0;i<list.length;i++){
//             if(i!=number){
//                 list[i].classList.remove('active');
//             }else{
//                 list[i].classList.add("active");
//             }
//         }
//         if(number==list.length-2){
//             next.classList.add("disable");
//         }
//     }
// })
//

//更多按钮
let moreBtn = document.querySelector('.sl_ext_show');
moreBtn.addEventListener('click', function () {
  let select = this.parentNode.parentNode;

  let ul = select.querySelector('ul');

  if (ul.className.includes('nomore')) {
    console.log(this.firstChild)
    this.firstChild.textContent = "收起";
    this.firstElementChild.style.backgroundPositionY = "-28px";
  } else {
    this.firstChild.textContent = "更多";
    this.firstElementChild.style.backgroundPositionY = "7px";
  }
  select.classList.toggle('extend');
  ul.classList.toggle('nomore');
  ul.classList.toggle('more');
})


let moreCheckBtn = document.querySelector('.moreCheck');
moreCheckBtn.addEventListener('click', function () {
  let select = this.parentNode.parentNode;

  let ul = select.querySelector('ul');
  let selectBtn = select.querySelector('.sl_ext');
  let btn = select.querySelector('.sl_ext_show');


  btn.firstChild.textContent = "更多";
  btn.firstElementChild.style.backgroundPositionY = "7px";
  ul.classList.add('nomore');
  ul.classList.remove('more');
  select.classList.add('extend');
  ul.classList.add('checkbox');
  selectBtn.classList.add('hide');
})

let cancelBtn = document.querySelector('.cancel');
cancelBtn.addEventListener('click', function () {
  let select = this.parentNode.parentNode.parentNode;
  let moreBtn = select.querySelector('.sl_ext');
  let ul = select.querySelector('ul');

  select.classList.remove('extend');
  ul.classList.toggle('checkbox');
  moreBtn.classList.toggle('hide');
})