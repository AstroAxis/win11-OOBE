window.temp_i = 0;
let sto;

function getText() {
    greet = "你好。"
    greet1 = "正在为你做准备。"
    text1 = "此操作可能需要几分钟。"
    text2 = "请保持PC开机并接通电源。"
    textbot = "请勿关闭电脑。"
    poem = "好东西就要来了。"
    end = "即将完成。"       
    period1 = 3000
    period2 = 3000
    period3 = 3000
    
    oobeword1.style.fontFamily = "FangYuan";
    oobeword2.style.fontFamily = "FangYuan";
}

function changertp() {
    circle.style.display="none";
    oobeword1.style.display = "block";
    oobeword1.innerHTML = greet;
    window.temp_i = window.temp_i + 1;
    oobeword1.style.opacity = (window.temp_i/100);
    if (window.temp_i == 100) {
        window.temp_i = 100;
        sto = setTimeout(() => changertp2(), 2000);
        return 0;
    }
    sto = setTimeout(() => changertp(), 12);
}

function changertp2() {
    window.temp_i = window.temp_i - 1;
    oobeword1.style.opacity = (window.temp_i/100);
    if (window.temp_i == 0) {
        window.temp_i = 0;
        sto = setTimeout(() => changertp3(), 128);
        return 0;
    }
    sto = setTimeout(() => changertp2(), 12);
}

function changertp3() {
    oobeword1.innerHTML = greet1;
    window.temp_i = window.temp_i + 1;
    oobeword1.style.opacity = (window.temp_i/100);
    if (window.temp_i == 100) {
        window.temp_i = 100;
        sto = setTimeout(() => changertp4(), 2000);
        return 0;
    }
    sto = setTimeout(() => changertp3(), 12);
}

function changertp4() {
    window.temp_i = window.temp_i - 1;
    oobeword1.style.opacity = (window.temp_i/100);
    if (window.temp_i == 0) {
        window.temp_i = 0;
        sto = setTimeout(() => changertp5(), 128);
        return 0;
    }
    sto = setTimeout(() => changertp4(), 12);
}

function changertp5() {
    circle.style.display="block";
    oobeword1.innerHTML = text1;
    oobeword2.innerHTML = textbot;
    oobeword2.style.display = "block";
    window.temp_i = window.temp_i + 1;
    oobeword1.style.opacity = (window.temp_i/100);
    oobeword2.style.opacity = (window.temp_i/100);
    if (window.temp_i == 100) {
        window.temp_i = 100;
        sto = setTimeout(() => changertp6(), period1);
        return 0;
    }
    sto = setTimeout(() => changertp5(), 12);
}

function changertp6() {
    window.temp_i = window.temp_i - 1;
    oobeword1.style.opacity = (window.temp_i/100);
    if (window.temp_i == 0) {
        oobeword1.innerHTML = ""
        oobeword1.style.display = "none";
        window.temp_i = 0;
        sto = setTimeout(() => changertp7(), 128);
        return 0;
    }
    sto = setTimeout(() => changertp6(), 12);
}

function changertp7() {
    oobeword1.innerHTML = text2;
    oobeword1.style.display = "block";
    oobeword2.style.display = "block";
    window.temp_i = window.temp_i + 1;
    oobeword1.style.opacity = (window.temp_i/100);
    if (window.temp_i == 100) {
        window.temp_i = 100;
        sto = setTimeout(() => changertp8(), period2);
        return 0;
    }
    sto = setTimeout(() => changertp7(), 12);
}

function changertp8() {
    window.temp_i = window.temp_i - 1;
    oobeword1.style.opacity = (window.temp_i/100);
    if (window.temp_i == 0) {
        oobeword1.innerHTML = ""
        oobeword1.style.display = "none";
        window.temp_i = 0;
        sto = setTimeout(() => {
            oobeword1.innerHTML = poem;
            oobeword1.style.display = "block";
            oobeword2.style.display = "block";
            changertp9();
        }, 128);
        return 0;
    }
    sto = setTimeout(() => changertp8(), 12);
}

function changertp9() {
    window.temp_i = window.temp_i + 1;
    oobeword1.style.opacity = (window.temp_i/100);
    if (window.temp_i == 100) {
        window.temp_i = 100;
        sto = setTimeout(() => changertp10(), period3);
        return 0;
    }
    sto = setTimeout(() => changertp9(), 12);
}

function changertp10() {
    window.temp_i = window.temp_i - 1;
    oobeword1.style.opacity = (window.temp_i/100);
    if (window.temp_i == 0) {
        window.temp_i = 0;
        sto = setTimeout(() => changertp11(), 128);
        return 0;
    }
    sto = setTimeout(() => changertp10(), 12);
}

function changertp11() {
    circle.style.display = "none";
    oobeword1.style.top = "44.5%";
    oobeword1.innerHTML = end;
    oobeword2.style.display = "none";
    window.temp_i = window.temp_i + 1;
    oobeword1.style.opacity = (window.temp_i/100);
    if (window.temp_i == 100) {
        window.temp_i = 100;
        sto = setTimeout(() => changertp12(), 5000);
        return 0;
    }
    sto = setTimeout(() => changertp11(), 12);
}

function changertp12() {
    clearTimeout(sto);
    window.temp_i = 0;
    oobeword1.style.opacity = 0;
    getText();
    changertp(); // 改为从头开始播放
}

function noText(){
    oobeword1.style.display = "none"
    oobeword2.style.display = "none"
    xgoing.style.display = "block";
    circle.style.display = "block"
}

function hotkey(){
    var a=window.event.keyCode;
    if(a==27){
        document.getElementsByTagName('body')[0].style.overflow="visible"
        xgoing.style.display="none";
        window.temp_i = 0;
        clearTimeout(sto);
        circle.style.display = "none";
        oobeword1.style.display = "none";
        oobeword2.style.display = "none";
    }
}

function adjustForMobile() {
    if (/AppleWebKit.*Mobile/i.test(navigator.userAgent) || (/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(navigator.userAgent))) {
        // 调整文字大小和位置
        const periods = {
            period1: 2000,  // 缩短移动端等待时间
            period2: 2000,
            period3: 2000
        };
        
        // 调整动画速度
        document.querySelectorAll('.circle1, .circle2, .circle3').forEach(circle => {
            const currentAnimation = circle.style.animation;
            const newAnimation = currentAnimation.replace(/\d+s/, '10s');  // 加快动画速度
            circle.style.animation = newAnimation;
        });

        // 禁用横屏
        window.addEventListener('orientationchange', function() {
            if (window.orientation === 90 || window.orientation === -90) {
                alert("请使用竖屏浏览以获得最佳体验");
            }
        });

        return true;
    }
    return false;
}

window.onload = function(){
    document.onkeydown = hotkey;
    document.getElementsByTagName('body')[0].style.overflow="hidden"
    xgoing.style.display="block";
    window.temp_i = 0;
    
    const isMobile = adjustForMobile();
    if (!isMobile) {
        // 桌面端原有逻辑
        getText();
        changertp();
    } else {
        // 移动端特殊处理
        getText();
        // 可以在这里添加移动端特有的初始化逻辑
        changertp();
    }
};

// 添加移动端触摸事件支持
function addTouchSupport() {
    document.addEventListener('touchstart', function(e) {
        // 处理触摸事件
        if (e.touches.length > 1) {
            // 多点触控时退出动画
            document.getElementsByTagName('body')[0].style.overflow="visible"
            xgoing.style.display="none";
            window.temp_i = 0;
            clearTimeout(sto);
            circle.style.display = "none";
            oobeword1.style.display = "none";
            oobeword2.style.display = "none";
        }
    });
}

// 在window.onload中调用
addTouchSupport();

