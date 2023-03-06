**DEMO PROJECT (ДОКУМЕНТАЦИЯ МОЖЕТ МЕНЯТЬСЯ ЕЩЕ ТРИЛИАРДЫ РАЗ)**\
**ОБЯЗАТЕЛЬНО К ОЗНАКОМЛЕНИЮ ДАННАЯ ИНФОРМАЦИЯ**
* Зависимости для понимания и напоминания 
- Typed.js (https://github.com/mattboldt/typed.js/)
- Swup (https://swup.js.org/getting-started)

**ГАЙД КАК ЮЗАТЬ И ПРИМЕНЯТЬ СТИЛЬ ДЛЯ SWUP**
- сначала подключаем файл main.js и сам скрипт который идет в коробке в самом проекте ( **просто копипастим**)
- для main в каждой новой странице прописываем следующее
```class="main transition-fade" id="swup"```
- дальше лезем в css и видим такую структуру **(и так для каждой страницы свой переход)**
```css
    html.is-(тут меняем то что присутвует в документации) .transition-fade {
        opacity: 0;
        ...тут добавляем наши свойства
    }
```

