
let img=document.getElementById('img')
let slidernav=document.getElementById('slider-nav')
let ul=document.getElementsByTagName('ul')[0]
let img3=document.getElementById('img3')
let p=document.getElementById('p')
let delet=document.getElementById('delete')
let a=document.getElementById('a')
let imgslider1=document.getElementById('img-slider1')
let imgslider2=document.getElementById('img-slider2')
let x=document.getElementById('x')
let b=document.getElementById('b')
let button2=document.getElementById('button2')
let conterimg=document.getElementById('conter-img')
let car=document.getElementById('car')
let img2=document.getElementById('img1')
let minus=document.getElementById('minus')
let plus=document.getElementById('plus')
let contenrSlider=document.getElementById('contenr-slider')
let contaner=document.getElementById('contaner');
let cartbut=document.getElementById('cart-but')
let k;
let y;
function clck(){
    contenrSlider.style.display='block'
    contaner.classList.add('contaner')

 }
 
function clk(){
    contenrSlider.style.display='none'
    contaner.classList.remove('contaner')

 }
function img1(id){
  img.src=`images/image-product-${id}.jpg`
}
function im(id){
    img3.src=`images/image-product-${id}.jpg`
console.log(id);   
}
let st=0;
plus.onclick=function(){
    st++
    let pr=st*125.00;
    p.innerText=st;
    k=st
    y=pr
    //console.log(pr);
    
}

minus.onclick=function(){
    if(st>0){
        st--
        
        p.innerText=st
        let pr=st*125.00;
        console.log(pr);
        // a.innerText=st
        k=st
        y=pr
        // b.innerText=`${pr}$`;
        if(st==0){
            conterimg.style.display='none'
            
        }else{
            conterimg.style.display='block'
            
        }
        
    }else{
        st=0
    }
    
}

button2.onclick=function(){
    console.log(k);
    st=0
    a.innerText=k
    b.innerText=`${y}$`;
    p.innerText=st
    



h()
    if(k>0){
        
        conterimg.style.display='block'
        cartbut.style.display='block'
        p1
    }else{
        conterimg.style.display='none'
        cartbut.style.display='none'
        
    }
  
}
img2.addEventListener('click',function(){
    if( car.style.display=='block'){
        
        car.style.display='none';
        console.log(1);
    }else{
        car.style.display='block';
        
    }
})
delet.addEventListener('click',function(){
    cartbut.style.display='none'
    conterimg.style.display='none'
    p1.innerText=''
    k=0
    
})
cartbut.addEventListener('click',function(){

    cartbut.style.display='none'
    conterimg.style.display='none'
    p1.innerText=''
    k=0
    
})

    
function h(){
    if(k>0){
       p1.innerText=k
        
    }else {
       
       p1.innerText=''
    
    }
}
slidernav.addEventListener('click',function(){
slidernav.style.opacity='0';
ul.style.display='block';
x.style.display='block';
})
x.addEventListener('click',function(){
    slidernav.style.opacity='1';

ul.style.display='none';
x.style.display='none';

})
let s=1;
function hh(){
    if(s<=3){
        s++
        img.src=`images/image-product-${s}.jpg`
console.log(s);

}else{
    s=4;
    console.log(s);
    img.src=`images/image-product-${s}.jpg`
        
    }
}
function nn(){
    if(s>1){
        s--;
        console.log(s);
        img.src=`images/image-product-${s}.jpg`
    }else{
        s=1
        console.log(s);
        img.src=`images/image-product-${s}.jpg`
    }
}