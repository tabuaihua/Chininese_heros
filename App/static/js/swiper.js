function Swiper(container) {

    var swiperContainer = document.querySelector(container);
    var swiperWrapper = swiperContainer.querySelector('.swiper-wrapper');
    var swiperSlide = swiperContainer.querySelectorAll('.swiper-slide');
    var imgs = swiperContainer.querySelectorAll('.swiper-wrapper>img');
    var btnLeft = swiperContainer.querySelector('.swiper-button-prev');
    var btnRight = swiperContainer.querySelector('.swiper-button-next');

//    swiperWrapper的宽度==swiperContainer的宽度*swiper-slide的数目
    swiperWrapper.style.width = swiperContainer.clientWidth * swiperSlide.length+ 'px';

// 动画总时长
    var time = 400;

// 动画单位时长
    var itemTime = 4;

    var isMove = false;

    var timer=null;

//    点击左边
    btnLeft.onclick = function () {

        nextPeg(true)
    };

//    点击右边
    btnRight.onclick = function () {
        nextPeg(false);
    };

    timer=setInterval(function () {
        nextPeg(false);
    },3000);

    swiperContainer.onmouseenter=function () {
        clearInterval(timer);
    };
    swiperContainer.onmouseleave=function () {
        timer=setInterval(function () {
            nextPeg(false);
        },3000);
    };

    function nextPeg(next) {
        // var offset = swiperContainer.clientWidth;
        var offset = next ? swiperContainer.clientWidth : -swiperContainer.clientWidth;
        // 动画总时长/每帧时长=总帧数       总偏移量/总帧数=每帧偏移量
        var itemOffset = offset / (time / itemTime);
        var left = swiperWrapper.offsetLeft;
        // 获取移动后的位置
        var targetLeft = left + offset;
        // console.log(targetLeft);
        if (isMove) {
            return
        }
        isMove = true;
        var timer = setInterval(function () {
            left += itemOffset;
            if(next){
                if (left >= targetLeft) {
                    // 条件判断成立后，会先清除定时器，然后将left的值继续输入给css执行完，执行完后，不会再执行定时器
                    isMove = false;
                    left = targetLeft;
                    clearInterval(timer);
                    left = Math.round(left);
                    // 在每一次图片执行完成时判断是否修正位置
                    if (left == 0) {
                        left = -(swiperWrapper.clientWidth-swiperContainer.clientWidth*2);
                    }
                    if (left <= -(swiperWrapper.clientWidth-swiperContainer.clientWidth)) {
                        left = -swiperContainer.clientWidth;
                    }
                }
            }
            if(next==false){
                if (left <= targetLeft) {
                    // 条件判断成立后，会先清除定时器，然后将left的值继续输入给css执行完，执行完后，不会再执行定时器
                    isMove = false;
                    left = targetLeft;
                    clearInterval(timer);
                    left = Math.round(left);
                    // 在每一次图片执行完成时判断是否修正位置
                    if (left == 0) {
                        left = -(swiperWrapper.clientWidth-swiperContainer.clientWidth*2);
                    }
                    if (left <= -(swiperWrapper.clientWidth-swiperContainer.clientWidth)) {
                        left = -swiperContainer.clientWidth;
                    }
                }
            }
            swiperWrapper.style.left = left + 'px';
        }, itemTime)
    }

}