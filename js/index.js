window.addEventListener('load',function(){
   var focus=this.document.querySelector('.focus')
   var arrowl=this.document.querySelector('.arrow-l')
   var arrowr=this.document.querySelector('.arrow-r')
   var focusWidth=focus.offsetWidth;
   focus.addEventListener('mouseenter',function(){
       arrowl.style.display='block';
       arrowr.style.display='block';
       clearInterval(times);
       times=null;
   })
   focus.addEventListener('mouseleave',function(){
    arrowl.style.display='none';
    arrowr.style.display='none';
     times=setInterval(function(){
        arrowl.click();
        },2000)
})
var ul=focus.querySelector('ul')
var ol=focus.querySelector('.clc')

for(i=0;i<ul.children.length;i++){
    var li=this.document.createElement('li')
    li.setAttribute('index',i)
ol.appendChild(li);
li.addEventListener('click',function(){
    for(i=0;i<ol.children.length;i++){
        ol.children[i].className=''
    }
    this.className='current'
    var index=this.getAttribute('index');
   
    console.log( focusWidth);
    console.log(index);
    animate(ul,-focusWidth*index);
    num1=index;
    clc=index; 
})
}
var firts=ul.children[0].cloneNode(true);
ul.appendChild(firts)
var clc=0;
var num1=0;
var flag=true;
arrowl.addEventListener('click',function(){
  if(flag){
      flag=false;
    num1++;
    animate(ul,-focusWidth*num1,function(){
        flag=true
    })
    if(num1==ul.children.length-1){
        ul.style.left='0';
        num1=0;
    }
    clc++
    if(clc==ol.children.length){
        clc=0
    }
    for(i=0;i<ol.children.length;i++){
        ol.children[i].className='';
    }
    
    ol.children[clc].className='current';
  }
})


ol.children[0].className='current';
arrowr.addEventListener('click',function(){
   
     if(flag){
         flg=false;
        if(num1==0 ){
         
            num1=ul.children.length-1;
            ul.style.left=-num1*focusWidth+'px';
        }
        num1--;
        animate(ul,-focusWidth*num1,function(){
            flag=true
        })
        clc--
        if(clc<0){
            clc=ol.children.length-1;
   
        }
        
        for(i=0;i<ol.children.length;i++){
            ol.children[i].className='';
        }
        
        ol.children[clc].className='current';
     }
})
var times=setInterval(function(){
    arrowl.click();
    },2000)
})