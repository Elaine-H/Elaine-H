window.onload = function intro() {

    alert('酒吧新手/想不到喝什麼嗎? 先抽個基酒，再看看推薦的常見調酒吧~');

}

$(function () {
    //定義
    var i = null; //初始位置
    var speed = 80; //轉速
    var ok = null; //標記中獎位置
    var count = null; //總變化次數
    var nowcount = null; //目前的變化位置
    var n = 3; //圈數
    var paly = false;
    var xq = 0;
    var arr = ["白蘭地", "啤酒", "咖啡酒", "蘭姆酒", "紅酒", "琴酒", "威士忌", "伏特加", "？？？", "龍舌蘭", "白酒", "奶酒", ];

    function dong() {
        if (nowcount > count) {
            setTimeout(function () {
                paly = false;
                alert("推薦你喝" + arr[ok] + "，來看看酒單吧~");
                if (eval(ok) == 1) {
                    window.location.replace("beer.html");
                }
                if (eval(ok) == 2) {
                    window.location.replace("coffeeliqueur.html");
                }
                if (eval(ok) == 3) {
                    window.location.replace("rum.html");
                }
                if (eval(ok) == 4) {
                    window.location.replace("redwine.html");
                }
                if (eval(ok) == 5) {
                    window.location.replace("gin.html");
                }
                if (eval(ok) == 6) {
                    window.location.replace("whiskey.html");
                }
                if (eval(ok) == 7) {
                    window.location.replace("vodka.html");
                }
                if (eval(ok) == 8) {
                    window.location.replace("water.html");
                }
                if (eval(ok) == 9) {
                    window.location.replace("tequila.html");
                }
                if (eval(ok) == 10) {
                    window.location.replace("whitewine.html");
                }
                if (eval(ok) == 11) {
                    window.location.replace("baileys.html");
                }
                if (eval(ok) == 12) {
                    window.location.replace("brandy.html");
                }
            }, 500);

        } else {
            nowcount += 1;
            if (i > 10) {
                xq += 1;
                if (xq == n - 1) {
                    speed = 250;
                };
                $(".lottery-unit").removeClass("select");
                $(".lottery-unit-11").addClass("select");
                i = 0;
            } else {
                $(".lottery-unit").removeClass("select");
                $(".lottery-unit-" + i).addClass("select");
                i += 1;
            };
            setTimeout(dong, speed);
        };
    };

    $(".start").click(function () {
        if (!paly) {
            if (count == 0) {
                alert("");
            } else {
                ok = Math.floor((Math.random() * 12));
                count = n * 12 + ok;
                nowcount = 0;
                i = 0;
                paly = true;
                count -= 1;
                dong();
            };

        } else {

        };

    });
});