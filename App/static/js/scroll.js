

(function (w) {
    function Scroll(top, width) {
        var inner = document.querySelector(top);
        var outer = inner.querySelector('.outer');
        var gundong = inner.querySelector('.gundong');
        var gundongWidth = width ? width : '7px';

        inner.onmouseenter = function () {
            gundong.style.width = gundongWidth;
        };

        inner.onmouseleave = function () {
            gundong.style.width = '3px';

        };

        outer.onmousedown = function (event) {
            gundong.style.transition = 'none';
            outer.style.transition = 'none';
            event = event || window.event;
            //    获取当前元素的位置
            var outerY = outer.offsetTop;
            //    获取鼠标的初始位置
            var startY = event.clientY;
            outer.setCapture && outer.setCapture();

            //获取时间
            var startT = Date.now();

            document.onmousemove = function (event) {
                event = event || window.event;
                var endY = event.clientY;
                var lastY = endY - startY + outerY;
                if (lastY > inner.clientHeight / 2) {
                    lastY = inner.clientHeight / 2;
                }
                if (lastY < inner.clientHeight - outer.clientHeight - inner.clientHeight / 2) {
                    lastY = inner.clientHeight - outer.clientHeight - inner.clientHeight / 2;
                }
                //  滚动条移动的位置 == 屏幕的高度*内容区移动的距离/内容区的高度
                gundong.style.top = -inner.clientHeight * lastY / outer.clientHeight + 'px';
                outer.style.top = lastY + 'px';
            };

            document.onmouseup = function (event) {
                event = event || window.event;
                var upY = outer.offsetTop;
                var endY = event.clientY;
                var endT = Date.now();
                var v = (endY - startY) / (endT - startT);
                var s = v * 220;

                outer.style.transition = '0.3s';
                gundong.style.transition = '0.3s';

                if ((endT - startT) < 200) {
                    upY += s;
                }
                if (upY < inner.clientHeight - outer.clientHeight) {
                    upY = inner.clientHeight - outer.clientHeight;
                }
                if (upY > 0) {
                    upY = 0;
                }

                outer.style.top = upY + 'px';
                gundong.style.top = -inner.clientHeight * upY / outer.clientHeight + 'px';


                document.onmousemove = document.onmouseup = null;
                // 释放全局捕获
                outer.releaseCapture && outer.releaseCapture();
            };
            // return false;
        };

        gundong.onmousedown = function (event) {
            gundong.style.transition = 'none';
            outer.style.transition = 'none';
            event = event || window.event;
            var gundongStartY = gundong.offsetTop;
            var mouseStartY = event.clientY;
            gundong.setCapture && gundong.setCapture();
            document.onmousemove = function (event) {
                event = event || window.event;
                var mouseEndY = event.clientY;
                var gundongMove = mouseEndY - mouseStartY + gundongStartY;
                if (gundongMove < 0) {
                    gundongMove = 0;
                }
                if (gundongMove > inner.clientHeight - gundong.clientHeight) {
                    gundongMove = inner.clientHeight - gundong.clientHeight;
                }
                //  滚动条移动的位置 == 屏幕的高度*内容区移动的距离/内容区的高度
                //内容区移动的距离=滚动条移动的位置*内容区的高度/屏幕的高度
                event.preventDefault();
                gundong.style.top = gundongMove + 'px';
                outer.style.top = -gundongMove * outer.clientHeight / inner.clientHeight + 'px'
            };
            document.onmouseup = function () {
                document.onmousemove = document.onmouseup = null;
                // 释放全局捕获
                gundong.releaseCapture && gundong.releaseCapture();
            }
        };


        outer.addEventListener('mousewheel', fn);
        outer.addEventListener('DOMMouseScroll', fn);
        var flag = true;

        function fn(event) {
            gundong.style.transition = 'none';
            outer.style.transition = 'none';
            event = event || window.event;
            var nowTop = outer.offsetTop;
            if (event.wheelDelta > 0 || event.detail > 0) {
                var nowMoveTop = nowTop + 120;
                if (nowMoveTop < inner.clientHeight - outer.clientHeight) {
                    nowMoveTop = inner.clientHeight - outer.clientHeight;

                }
                if (nowMoveTop > 0) {
                    nowMoveTop = 0;
                    outer.style.top = nowMoveTop + 'px';
                    gundong.style.top = -inner.clientHeight * nowMoveTop / outer.clientHeight + 'px';
                    window.style.transition = '0.2s';
                    window.documentElement.scrollBy(0, -100);
                }

                event.preventDefault();
                outer.style.top = nowMoveTop + 'px';
                gundong.style.top = -inner.clientHeight * nowMoveTop / outer.clientHeight + 'px';
            } else {
                var nowMoveTop2 = nowTop - 120;

                if (nowMoveTop2 > 0) {
                    nowMoveTop2 = 0;

                }
                if (nowMoveTop2 < inner.clientHeight - outer.clientHeight) {
                    nowMoveTop2 = inner.clientHeight - outer.clientHeight;
                    if(outer.clientHeight>inner.clientHeight){
                        outer.style.top = nowMoveTop2 + 'px';
                        gundong.style.top = -inner.clientHeight * nowMoveTop2 / outer.clientHeight + 'px';
                    }

                    window.style.transition = '0.2s';
                    window.scrollBy(0, 100);
                }

                event.preventDefault();
                outer.style.top = nowMoveTop2 + 'px';
                gundong.style.top = -inner.clientHeight * nowMoveTop2 / outer.clientHeight + 'px';
            }
        }

        Scroll.init=function init() {
            gundong.style.top=0;
            outer.style.top=0;
            gundong.style.height = inner.clientHeight / outer.clientHeight * inner.clientHeight + 'px';
            if(gundong.clientHeight>=inner.clientHeight){
                gundong.style.visibility='hidden';
            }
            if(gundong.clientHeight<inner.clientHeight){
                gundong.style.visibility='visible';
            }
            console.log(gundong.clientHeight,outer.clientHeight,inner.clientHeight);

        };

        Scroll.init();

    }
    w.Scroll=Scroll;
}(window));