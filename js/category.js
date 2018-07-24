$(function () {



    // 初始化轮播图
    var swiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        slidesPerView: 'auto',
        freeMode: true,
        scrollbar: {
            el: '.swiper-scrollbar',
        },
        mousewheel: true,

    });


    // 左边菜单栏点击
    $('#left li').on('click', function () {

        $(this).addClass('active').siblings().removeClass('active')
        // console.log(this)

        // 获取到自定义属性中，对应的值（值作为对应的下标）
        var index = $(this).attr('data-num')
        // console.log($(this).attr('data-num'))

        // 上移的高度=当前被点击的li的index * li的高度
        // console.log($('#left li').height()+'px')
        var translateY = -index * $('#left li').height()



        // 限制滑动的高度

        // 获取当前可视区域中的盒子高度
        var mianHight = $('#mian-left').height();
        console.log(mianHight)
        // 获取ul的总高度
        var ulHight = $('#left ul').height();
        console.log(ulHight);
        // 允许滑动的高度=ul的总高度-可视区域中的盒子高度
        var limitHight = ulHight - mianHight
        console.log(limitHight)
        // 如果滑动上移的高度大于限制的高度，则维持当前上移的高度
        if (limitHight > -translateY) {

            translateY = translateY

        } else {

            translateY = -limitHight
        }

        // 开始进行位移
        $('#swiper-left').css({
            'transform': 'translate3d(0px,' + translateY + 'px,0px)',
            'transition': 'all 0.5s'
        })


    })










})