//主页
(function () {
    console.log(document.documentElement.clientWidth);
}());
//头部
(function () {
    var header = document.querySelector('header');
    header.style.height = document.documentElement.clientHeight + 'px';
    header.style.backgroundSize = 'cover';

    header.addEventListener('mousewheel', fn);
    header.addEventListener('DOMMouseScroll', fn);
    var flag = true;

    function fn(event) {
        event = event || window.event;
        if (event.wheelDelta < 0 || event.detail > 0) {
            header.style.height = 360 + 'px';

        }
    }


}());


//轮播图
(function () {
    var lis = document.querySelectorAll('.dian ul li');
    var lunboContent = document.querySelector('.lunbo .lunbo-content');
    var lunbo = document.querySelector('.lunbo');
    console.log(lis);
    for (var i = 0; i < lis.length; i++) {
        lis[i].index = i;
        lis[i].addEventListener('mouseenter', function () {
            for (var j = 0; j < lis.length; j++) {
                lis[j].classList.remove('active');
            }
            lis[this.index].classList.add('active');
            lunboContent.style.left = -(lunbo.offsetWidth * this.index) + 'px';
        })
    }
}());




//第一个视频
(function () {
    var dazhezhao = document.querySelector('.main3-left2-dazhezhao');
    var media = document.getElementById('media');
    // console.log(video);
    dazhezhao.addEventListener('mouseover', function () {
        media.play();
    });
    dazhezhao.addEventListener('mouseout', function () {
        media.pause();
    });

    var zhitiHover = document.querySelector('.main3-left-2');
    var xiala = document.querySelector('.main3-down');
    zhitiHover.onmouseenter = function () {
        dazhezhao.style.opacity = 1;
        xiala.style.height = '117px';
        xiala.style.paddingTop = 42 + 'px';
    };
    zhitiHover.onmouseleave = function () {
        dazhezhao.style.opacity = 0;
        xiala.style.height = 0;
        xiala.style.paddingTop = 0;

    };
    xiala.onmouseenter = function () {
        dazhezhao.style.opacity = 1;
        xiala.style.height = '117px';
        xiala.style.paddingTop = 42 + 'px';

    };
    xiala.onmouseleave = function () {
        dazhezhao.style.opacity = 0;
        xiala.style.height = 0;
        xiala.style.paddingTop = 0;


    }

}());



// 移入视频1
(function () {
    var video1 = document.querySelectorAll('.video-item1');
    var p = document.querySelectorAll('.video-item1>p');
    var is = document.querySelectorAll('.video-item1 .img-content .btn-play i');
    var btns = document.querySelectorAll('.img-content .btn-play');
    var timer = null;
    for (var i = 0; i < video1.length; i++) {
        video1[i].index = i;
        is[i].index = i;
        video1[i].onmouseenter = function () {
            btns[this.index].style.display = 'block';
            p[this.index].style.color = '#0da0b4';
            var a = this.index;
            var b = 0;
            timer = setInterval(function () {
                b += 1;
                is[a].style.transform = 'rotateZ(' + b + 'deg)';
            }, 10)
        };
        video1[i].onmouseleave = function () {
            btns[this.index].style.display = 'none';
            p[this.index].style.color = '#424242';
            clearInterval(timer);
        }

    }
}());

//移入视频2
(function () {
    var video = document.querySelectorAll('.video-item2');
    var img = document.querySelectorAll('.video-item2 .img-content>img ');
    var jindu2 = document.querySelectorAll('.video-item2 .img-content .jindutiao .jindutiao2');
    var jindu1 = document.querySelectorAll('.video-item2 .img-content .jindutiao');
    var p = document.querySelectorAll('.video-item2>p');
    for (var i = 0; i < video.length; i++) {
        video[i].index = i;
        video[i].onmouseenter = function () {
            jindu1[this.index].style.display = 'block';
        };
        video[i].onmousemove = function (event) {
            var a = event.offsetX;
            var b = 1;
            if (a > 0) {
                b = 1;
            }
            if (a > 25) {
                b = 2;
            }
            if (a > 50) {
                b = 3;
            }
            if (a > 75) {
                b = 4;
            }
            if (a > 100) {
                b = 5;
            }
            if (a > 125) {
                b = 6;
            }
            if (a > 150) {
                b = 7;
            }
            if (a > 175) {
                b = 8;
            }
            jindu2[this.index].style.width = b * 12.5 + '%';
            img[this.index].src = 'img' + this.index + '/' + b + '.jpg';
            p[this.index].style.color = '#0da0b4';
        };
        video[i].onmouseleave = function () {
            jindu1[this.index].style.display = 'none';
            img[this.index].src = 'img' + this.index + '/0.jpg';
            p[this.index].style.color = '#424242';
        }
    }

}());

//最新视频头部样式以及切换
(function () {
    var lis = document.querySelectorAll('.main4-left-top ul>li');
    var a = document.querySelectorAll('.main4-left-top ul>li>a');
    var uls = document.querySelectorAll('.main4-left-bottom>ul');
    console.log(uls);
    for (var i = 0; i < lis.length; i++) {
        var spans = document.createElement('span');
        lis[i].appendChild(spans);
    }

    var span = document.querySelectorAll('.main4-left-top ul>li>span');
    for (var j = 0; j < lis.length; j++) {
        lis[j].index = j;
        lis[j].onmouseenter = function () {
            console.log(1);
            for (var k = 0; k < lis.length; k++) {
                span[k].style.height = 0;
                a[k].style.color = 'black';
            }
            span[this.index].style.height = '7px';
            a[this.index].style.color = '#1da6ba';

            for (var l = 0; l < uls.length; l++) {
                uls[l].style.display = 'none';
                if (uls[l].classList.contains('zuixin' + (this.index + 1))) {
                    uls[l].style.display = 'block';
                }
                // if(uls[l].classList.contains('zuixin'+(this.index+1))){
                //     uls[l].style.display='block';
                // }
            }
        }
    }
}());





//英雄资料的滚动
(function () {
    new Scroll('.main5-content .inner', '9px');
}());

//通过头部控制滚动条
(function () {
    var lis = document.querySelectorAll('.main5-top ul>li');

    for (var i = 0; i < lis.length; i++) {
        var p = document.createElement('span');
        lis[i].appendChild(p);
    }

    var spans = document.querySelectorAll('.main5-top ul>li>span');
    var gundongs = document.querySelectorAll('.main5-content>.inner0>.outer>ul>li');
    var gundong=document.querySelectorAll('.main5-content .inner .outer ul');
    var inner=document.querySelectorAll('.main5-content .inner');
    lis[0].style.color = '#1da6ba';
    lis[0].style.fontWeight = 'bolder';
    spans[0].style.backgroundPosition = ' -431px -316px';
    for (var j = 0; j < lis.length; j++) {
        lis[j].index = j;
        lis[j].addEventListener('click', function () {
            for (var k = 0; k < lis.length; k++) {
                lis[k].style.color = '#676767';
                lis[k].style.fontWeight = 200;
                spans[k].style.backgroundPosition = '-406px -316px';
                inner[k].style.display='none';
            }
            this.style.color = '#1da6ba';
            this.style.fontWeight = 'bolder';
            spans[this.index].style.backgroundPosition = ' -431px -316px';
            inner[this.index].style.display='block';
            var name='.main5-content .inner'+this.index;
            new Scroll(name);

        })
    }

    for(var k=0;k<gundongs.length;k++){
        var a=null;
        if(gundongs[k].classList.contains('zhanguo')){
            a=gundongs[k].cloneNode(true);
            gundong[1].appendChild(a);
        }
        if(gundongs[k].classList.contains('sanguo')){
            a=gundongs[k].cloneNode(true);
            gundong[2].appendChild(a);
        }
        if(gundongs[k].classList.contains('tangchao')){
            a=gundongs[k].cloneNode(true);
            gundong[3].appendChild(a);

        }
        if(gundongs[k].classList.contains('jindai')){
            a=gundongs[k].cloneNode(true);
            gundong[4].appendChild(a);
        }
        if(gundongs[k].classList.contains('xiandai')){
            a=gundongs[k].cloneNode(true);
            gundong[5].appendChild(a);
        }
    }

}());

//赛事中心轮播图
(function () {
    var btnLeft = document.querySelector('.content-top-left .icon-left-arrow');
    var btnRight = document.querySelector('.content-top-left .icon-right-arrow');

    var num = 1;
    var ul = document.querySelector('.swiper-box>ul');
    ul.style.transition = '0.3s left';
    var isMove = false;
    btnLeft.onclick = function () {
        var nowLeft = ul.offsetLeft;
        if (num == 1) {
            return;
        }

        btnLeft.style.display = 'none';
        ul.style.left = nowLeft + 809 + 'px';
        num--;
        if (num != 8) {
            btnRight.style.display = 'block';
        }
        setTimeout(function () {
            btnLeft.style.display = 'block';
            if (num == 1) {
                btnLeft.style.display = 'none';
            }
        }, 300)
    };
    btnRight.onclick = function () {
        var nowLeft = ul.offsetLeft;
        if (num == 8) {
            return;
        }

        btnRight.style.display = 'none';
        setTimeout(function () {
            btnRight.style.display = 'block';
            if (num == 8) {
                btnRight.style.display = 'none';
            }
        }, 300);
        ul.style.left = nowLeft - 809 + 'px';
        num++;
        if (num != 0) {
            btnLeft.style.display = 'block';
        }
    }
}());

//积分榜滚动条
(function () {
    new Scroll('.content-top-right .content .down1');
    new Scroll('.content-top-right .content .down2');
}());

//控制积分榜
(function () {
    var lis = document.querySelectorAll('.content-top-right .top ul li');
    var spans = document.querySelectorAll('.content-top-right .top ul li span');
    var down = document.querySelectorAll('.content-top-right .content .down');
    spans[0].style.height = '3px';
    for (var i = 0; i < lis.length; i++) {
        lis[i].index = i;
        lis[i].onmouseenter = function () {
            for (var j = 0; j < lis.length; j++) {
                spans[j].style.height = 0;
                down[j].style.display = 'none';
            }
            spans[this.index].style.height = '3px';
            down[this.index].style.display = 'block';
            new Scroll('.content-top-right .content .down1');
            new Scroll('.content-top-right .content .down2');
        }
    }
}());

