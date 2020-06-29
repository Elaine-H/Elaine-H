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
                    window.open("beer.html");
                }
                if (eval(ok) == 2) {
                    window.open("coffeeliqueur.html");
                }
                if (eval(ok) == 3) {
                    window.open("rum.html");
                }
                if (eval(ok) == 4) {
                    window.open("redwine.html");
                }
                if (eval(ok) == 5) {
                    window.open("gin.html");
                }
                if (eval(ok) == 6) {
                    window.open("whiskey.html");
                }
                if (eval(ok) == 7) {
                    window.open("vodka.html");
                }
                if (eval(ok) == 8) {
                    window.open("water.html");
                }
                if (eval(ok) == 9) {
                    window.open("tequila.html");
                }
                if (eval(ok) == 10) {
                    window.open("whitewine.html");
                }
                if (eval(ok) == 11) {
                    window.open("baileys.html");
                }
                if (eval(ok) == 12) {
                    window.open("brandy.html");
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