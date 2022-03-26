const imgs = document.querySelectorAll('.cont_img img')
const gallory = document.querySelector('.gallery') 
const gallery_inner = document.querySelector('.gallery_inner img')
const Close = document.querySelector('.close')
const next = document.querySelector('.next')
const priv = document.querySelector('.priv')
const zoom = document.querySelector('.zoom')


var current_indext = 0;


// show gallory 
function show_gallory() {
    if(current_indext == 0){
        priv.style.display = 'none';
    }else {
        priv.style.display = 'inline';

    }
    if(current_indext == imgs.length - 1){
        next.style.display = 'none';  
    }else {
        next.style.display = 'inline';  
    }
    gallery_inner.src = imgs[current_indext].src;
    gallory.classList.add('show')
}
// click img
imgs.forEach((item,indext)=>{
    item.addEventListener('click',function(){
        current_indext = indext
        show_gallory()
    })
})

Close.addEventListener('click',function(){
    gallory.classList.remove('show')
    gallery_inner.classList.remove('resize')

})

gallory.addEventListener('click',(e)=>{
    if(e.currentTarget == e.target){
        gallory.classList.remove('show')
    }
})

priv.addEventListener('click',()=>{
    if(current_indext > 0){
        current_indext--;
        show_gallory()
    }
})

next.addEventListener('click',()=>{
    if(current_indext < imgs.length -1){
        current_indext++;
        show_gallory()
    }
})

zoom.addEventListener('click',()=>{
    gallery_inner.classList.toggle('resize')
})

