function loaded() { //вызывается при загрузке
         changeColor(); //удалить, если после загрузки НЕ нужна смена фона
         var now = new Date().getTime(); //получаем время
         var remain = 60000 - (now % 60000); //узнаем сколько осталось до 00
         setTimeout(function () { //ждём до 00
                   setInterval(changeColor, 60 * 100); //запускаем каждые 60сек
                   changeColor(); //запускаем сейчас, т.к. сейчас 00
         }, remain);
        }

function changeColor() { //функция смены фона, не менял
            var r = Math.floor(Math.random() * 256);
            var g = Math.floor(Math.random() * 256);
            var b = Math.floor(Math.random() * 256);
            var rgb = 'rgb(' + r + ',' + g + ',' + b + ')';
            document.body.style.backgroundColor = rgb;
        }
