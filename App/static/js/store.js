
//使用悬浮改变字体样式=====新闻区
function left(){

}

//轮播图旁列表的展示
function dis_list(list_order){
  var list_news = document.getElementById('ul_list_out').querySelectorAll('ul');
  var a_list = document.getElementById('tit_tab').querySelectorAll('a');
  for(var i = 0;i<list_news.length;i++){
    list_news[i].style.display = 'none';
  }
  for(var k = 0;k<a_list.length;k++){
    a_list[k].className = ' ';
  }
  if(list_order==0){
    list_news[0].style.display = 'block';
    a_list[0].className = 'tit_act'; 
  }
  else if(list_order==1){
    list_news[1].style.display = 'block';
    a_list[1].className = 'tit_act'; 
  }
  else if(list_order==2){
    list_news[2].style.display = 'block';
    a_list[2].className = 'tit_act'; 
  }
}

//轮播图制作
(function(){
var left_forward = document.getElementById('img_dad');
var time = 0;
setInterval(function(){
    if(time<3){
      time++;
      left_forward.style.left = -535*time+'px';
    }
    else if(time>=3){
        time=-1;
    }
},2000)
})()
;
//拖拽型旋转木马
(function(){
    // 旋转的度数
window.onload = function (){
  var oImg =  document.getElementsByClassName('kk');
var deg = 360/oImg.length;
for(var i =0;i<oImg.length;i++){
  var countdeg = deg*i;
  oImg[i].style.transform = "rotateX(20deg) rotateY("+countdeg+"deg) translateZ(450px)";
  // 延迟时间,计算一个从大到小的过渡时间
  var delaytime = oImg.length-i;
  oImg[i].style.transition = '1'+"s";

      var c =document.getElementById('image_wrap');
    let num = 0;
  // var num=0;
//     setInterval(function(){

//         num++;
//    let val = num;
//   var c = document.getElementById("image_wrap");
//   console.log(c)
//   c.style.transform="rotateX(-20deg) rotateY("+val+"deg)"
//    if(num>360){
//         num=0;
//         num++;}
//     },3000)

}};

   // window.onload = function () {
   //
   //      }
  var rotateX = -20,
  rotateY = 0;//相册初始化度数值
  var c = document.getElementById("image_wrap");
  document.onmousedown = function(ev){
// 初始化第一次点击的鼠标位置，相对第一次移动就是旧的值
   var oldX = ev.clientX,oldY=ev.clientY;
//    this指向document，指对象
  this.onmousemove = function(ev){

  var newX = ev.clientX,
      newY = ev.clientY;//每一次移动所产生的一个新的桌标值

  var minusX = newX-oldX,
      minusY = newY-oldY;

  rotateX += minusY*0.1;
  rotateY += minusX*0.1;

  oldX = newX;
      oldY = newY;
  c.style.transform = "rotateX("+rotateX+"deg) rotateY("+rotateY+"deg)"
  }


  this.onmouseup = function(){
      this.onmousemove =null;//清空鼠标移动事件
  }
} 

})();

