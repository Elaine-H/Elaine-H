## 專題簡介 - 先喝第一杯

由於自己曾是調酒社、也很常跑台北的各種酒吧，略懂略懂調酒，以這項興趣為主題，針對酒吧新手或是第一杯不知道點什麼的人，製作「先喝第一杯」十六宮格大轉盤，幫助他們快速認識常見的調酒或決定要喝什麼。

轉盤中共有十二個選項，分別是調酒中的六大基酒與另外六項常見的基底。會根據使用者抽到的基酒，跳出相對應的推薦酒單與說明，供使用者參考。



## 如何使用

1.使用者一進入網頁，會先跳出附有說明文字的對話視窗，告訴他們這個網站的用途與用法。

2.點擊大轉盤中央的「What to drink」，隨後會隨機選中一款基酒。

3.跳出選中某某酒的視窗，並於新分頁開啟推薦酒單。

4.酒單裡會有三款根據該基酒製成的常見調酒(幾乎各家酒吧都能點到的)，並附上酒譜與參考圖片說明，幫助使用者作選擇。



## 技術說明

* **HTML / CSS** 

  1. 首先，用Figma先畫出轉盤與酒單頁面的大致外觀，決定以深藍/金色兩個主色，呈現酒吧昏暗慵懶的感覺。

  ![avatar](https://i.imgur.com/Bu42V9V.jpg(https://links.jianshu.com/go?to=http%3A%2F%2Fbaidu.com%2Fpic%2Fdoge.png))

2. 使用wow.js和animate.css插件，在酒單頁面做出fade in up的互動效果。一點進去酒單只會先看到3個圖片與酒名，靠近各item後才會向上滑出文字說明。
   ![avatar](https://i.imgur.com/iYa05Ym.gif)



* **JQ /  JS**

  **轉盤JS程式碼參考來源**：[基于javascript实现九宫格大转盘效果](https://reurl.cc/Y1Nbm0)

  1. 原code是做抽獎所以與我的主題不太符合，在專題基礎上我改了幾個重要參數。

     (1)使用次數改為不限

     (2)減少旋轉圈數，降低使用者的等待感。

     (3)加快轉速，降低使用者等待感。

  2. 原code的alert寫法是去抓隨機產生的整數n(0~11間)，然後跳出對話視窗「恭喜中n等獎」。我多設了一個矩陣，寫alert讓它去抓隨機產生的整數n所對應的文字內容，對話視窗就可以根據抽到的格子，顯示出對應的基酒名稱；而不單單只是不管選什麼都跳出一樣的訊息。

  ```javascript
  var arr = ["白蘭地", "啤酒", "咖啡酒", "蘭姆酒", "紅酒", "琴酒", "威士忌", "伏特加", "???", "龍舌蘭", "白酒", "奶酒", ];
  
      function dong() {
          if (nowcount > count) {
              setTimeout(function () {
                  paly = false;
                  alert("推薦你喝" + arr[ok] + "，來看看酒單吧~");
  ```

  3. 加入window.onload，在使用者一進來時跳出說明文字的對話窗。

  ```javascript
  window.onload = function intro() {
  
      alert('酒吧新手/想不到喝什麼嗎? 先抽個基酒，再看看推薦的常見調酒吧~');
  
  }
  ```

  4. 加入window.open，在使用者抽選完畢、跳出「推薦你喝OO酒」之後，根據他抽到的基酒直接開啟新分頁帶使用者到推薦酒單的頁面。

  ```javascript
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
  ```

  

  ## 其他巧思

  轉盤中有個選項是「???」，跳轉之後會到一個「唉呀!」的網頁，有一張參考圖片與酒名「神秘飲料」。

  看似和其他推薦酒單的頁面沒有不同，不過拉開後會發現說明是「水」「看來你今天不適合喝酒，還是喝水吧~」

  1/12的機率能抽中這項實屬不易，所以擺上一個小小的惡作劇。

  

    

    
  
  ​	
  
  

