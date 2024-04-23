//验证数据函数
function check(name,tip,str){// 验证的对象  提示信息的对象  提示的内容
    name.addEventListener("blur",function(){
        if(name.value==""){
            tip.innerHTML=str;//输入内容为空 显示提示信息
    
            name.style.outlineColor="red";
        }
        else{
            tip.innerHTML=""
            name.style.outlineColor="#32A6EF";
        }
    });
}
window.onload=function(){
    var userid=document.querySelector(".userid");
    userid.focus();
    var userpsd=document.querySelector(".userpsd");
    var idtip=this.document.querySelector(".idtip");
    var psdtip=this.document.querySelector(".psdtip");
 //密码登录验证
            check(userid,idtip,"请输入用户名");
            check(userpsd,psdtip,"请输入密码");
   

   
    var psdlogin=document.querySelector(".psdlogin");
    var msglogin=document.querySelector(".msglogin");
    var section1=document.querySelector(".section1");
    var section2=document.querySelector(".section2");

    //选择出现下边框
    psdlogin.addEventListener("click",function(){
        section1.style.display="block";
        section2.style.display="none";
        psdlogin.style.borderBottom="2px solid #ffb84d";
        msglogin.style.borderBottom="none";
        msglogin.style.color="#999" ;
        psdlogin.style.color="#333";

    });
    msglogin.addEventListener("click",function(){
          section2.style.display="block";
          section1.style.display="none";
          msglogin.style.borderBottom="2px solid #ffb84d";
          psdlogin.style.borderBottom="none";
          psdlogin.style.color="#999";
          msglogin.style.color="#333";
    });
    //短信登录验证
    var userph=document.querySelector(".userph");
    var codenumber=document.querySelector(".codenumber");
    var userph1=document.querySelector("#userph");
    var codenumber1=document.querySelector("#codenumber");
    check(userph,userph1,"请输入手机号码");
    check(codenumber,codenumber1,"请输入短信验证码");


    //点击登录  验证用户是否存在
    var login_click=document.querySelector(".login_click");
    login_click.addEventListener("click",function(){
        if(userid!=sessionStorage.getItem("uname")){
            alert("用户名不存在，先去注册账户吧！");
            this.type="button";
        }
        else if(userpsd!=sessionStorage.getItem("upsd")){
            alert("密码错误");
            this.type="button";
        }
        else{
            this.type="submit";
        }

    })


    
}