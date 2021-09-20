/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    if(this.scrollY >= 200) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)
const mark = `Ваша оценка - 135 баллов 
Отзыв по пунктам ТЗ:
Не выполненные/не засчитанные пункты:
1) CV содержит изображения-ссылки на выполненные вами проекты. При клике по изображению страница проекта открывается в новой вкладке. У каждого проекта есть название, небольшое описание, указан перечень используемых технологий 

2) есть видеорезюме автора CV на английском языке. Видеорезюме встраивается в страницу CV как видео, а не в виде кнопки или ссылки. Продолжительность видео 3-5 минут (±15 секунд). В описание видео на YouTube добавлена ссылка на его транскрипцию на английском языке (например, в документе Google Docs). 

Частично выполненные пункты:
1) есть адаптивное бургер-меню. Ссылки в пунктах меню ведут на основные разделы CV. При кликах по пунктам меню реализована плавная прокрутка по якорям. При уменьшении ширины экрана меню становится адаптивным. 

Выполненные пункты:
1) вёрстка валидная. Проверить валидность вёрстки: https://validator.w3.org/ 

2) вёрстка семантическая. В коде страницы присутствуют семантические теги HTML5, например, article, aside, figure, figcaption, footer, header, main, nav, section, используются заголовки h1-h6. 2 балла за каждый уникальный семантический тег HTML5 и за каждый уникальный заголовок h1-h6, но не больше 20 баллов. Заголовок h1 может быть только один 

3) для оформления СV используются css-стили. 1 балл за каждый стилизованный элемент, но не больше 10 баллов 

4) контент размещается в блоке, который горизонтально центрируется на странице. Фоновый цвет, если он есть, тянется во всю ширину страницы 

5) вёрстка адаптивная: ни на одном из разрешений экрана до 320px включительно не появляется горизонтальная полоса прокрутки, при этом всё содержание страницы сохраняется 

6) на странице СV присутствует изображение - фото или аватарка автора CV, пропорции изображения не искажены, у изображения есть атрибут alt (может быть пустым) 

7) контакты для связи и перечень навыков оформлены в виде списка ul > li 

8) CV содержит контакты, краткую информацию о себе, навыки, образование, уровень английского 

9) CV содержит пример вашего кода (например, решение задачи с сайта codewars) с подсветкой кода 

10) CV выполнено на английском языке 

11) выполнены требования к репозиторию: есть ссылка на задание, скриншот страницы СV, ссылка на деплой страницы CV на GitHub Pages, указана дата дедлайна, выполнена самооценка (самооценку расписываем по пунктам критериев оценки, указывая балл за каждый пункт) 

12) дизайн, оформление, качество выполнения CV не ниже чем в примерах CV, приведённых в материалах к заданию 

`
console.log(mark)
