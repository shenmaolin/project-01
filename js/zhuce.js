addEventListener('load',function(){
    //var is=this.document.querySelectorAll('i')
    var span=this.document.querySelectorAll("span");
    var shouji=this.document.querySelector("#shouji")
var tel=/^1[3|5|8|9]\d{9}$/;
console.log(span[0]);
//console.log(is[0].children[0]);
shouji.onblur=function(){
    if(tel.test(shouji.value)==true){
        var img ='<img src="images/success.png" alt="">'
        span[0].className='a2'
        span[0].innerHTML='手机号码格式正确'
        span[0].insertAdjacentHTML('afterbegin', img);
    }else{
        var img1='<img src="images/error.png" alt="">'
        span[0].className='a1'
        span[0].innerHTML='手机号码格式不正确，请从新输入'
        span[0].insertAdjacentHTML('afterbegin', img1);
    }
   
}
})