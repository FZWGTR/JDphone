$(function () {

    //1.创建一个JDEffect对象 存储一些京东效果对象 使用面向对象的方式减少全局变量的使用
    var JDeffect = function () {

    };

    // 2.在原型中添加以下的函数
    JDeffect.prototype = {


        // 2.1顶部通栏效果
        topland: function () {

            // 设置顶部搜索栏变色
            colorchange()


            $(document).on('scroll', function () {
                colorchange()
            })

            function colorchange() {

                // 获取屏幕卷去的高度
                var scrollHeight = $(this).scrollTop();
                // console.log(scrollHeight);

                // 获取当前容器header的高度
                var boxHeight = $('#header').height();
                // console.log(boxHeight,'盒子高度');

                // 计算出变换的透明程度值
                var opc = scrollHeight / boxHeight / 10;
                // console.log(opc);

                $('#header').css('background', 'rgba(255, 0, 0, ' + opc + ')')

            }



        },
        // 轮播图(初始化)
        slide: function () {

            // 2.2轮播图效果
            var swiper = new Swiper('.swiper-container', {
                // 初始化
                pagination: {
                    el: '.swiper-pagination',

                },
                // 循环播放
                loop: true,
                // 自动播放
                autoplay: {
                    delay: 1000,
                    stopOnLastSlide: false,
                    // 当触摸图后停止自动轮播：不停止模式
                    disableOnInteraction: false,
                },
            });

        },
        // 倒计时部分
        downTime: function () {

            // 倒计时

            // 获取未来要到达的时间
            var furterTime = new Date(2018, 6, 21, 22, 30, 0);
            // console.log(furterTime);

            // 获取当前的时间
            var nowTime = new Date();
            // console.log(nowTime);

            // 获取倒计时的时间=未来要到达的时间-当前的时间。获取到的是毫秒时间。
            var timeMs = furterTime - nowTime
            // 获取为秒的时间
            var time = timeMs / 1000;
            // console.log(time);



            setInterval(seckillTime, 1000)

            seckillTime();

            function seckillTime() {
                time--
                if (time < 0) {
                    time = 7200;
                }
                // 剩余要显示的小时
                var hour = Math.floor(time / 3600);
                // console.log(hour);
                // 剩余要显示的分钟
                var minute = Math.floor(time % 3600 / 60);
                // console.log(minute);

                // 剩余要显示的秒
                var second = Math.floor(time % 3600 % 60);
                // console.log(second);


                // 写入到页面中
                var skTime = document.querySelector('.sk-time');
                var pageTime = skTime.querySelectorAll('span');

                // 小时的第一位数
                pageTime[0].innerHTML = Math.floor(hour / 10)
                // 小时的第二位数
                pageTime[1].innerHTML = Math.floor(hour % 10)

                // 分钟的第一位数
                pageTime[3].innerHTML = Math.floor(minute / 10)
                // 分钟的第二位数
                pageTime[4].innerHTML = Math.floor(minute % 10)

                // 秒的第一位数
                pageTime[6].innerHTML = Math.floor(second / 10)
                // 秒的第二位数
                pageTime[7].innerHTML = Math.floor(second % 10)

            }


        }


    }


    // window加载完毕时，同时调用以上的原型中的方法
    window.addEventListener('load', function () {

        // 利用构造函数，引出（可以调用到）里面的方法
        var jdEffect = new JDeffect

        jdEffect.topland();
        jdEffect.slide();
        jdEffect.downTime();

    })
















})