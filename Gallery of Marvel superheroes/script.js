let heroesJson = `[{"id":1,"hero":"Железный человек","alterego":"Тони Старк","description":"Гений, миллиардер, плейбой, филантроп. Высокий уровень интеллекта, широкие познания науки и техники, связь со всемирной паутиной, бронекостюмы.","img":"images/iron_man.jpeg","raiting":"0"},{"id":2,"hero":"Человек-паук","alterego":"Питер Паркер","description":"Борец за справедливость, студент, фотограф. Сверхчеловеческие рефлексы, «паучье чутье», способность прилепляться к твердым поверхностям, производство паутины.","img":"images/spider_man.png","raiting":"0"},{"id":3,"hero":"Капитан Америка","alterego":"Стивен Роджерс","description":"Супер-солдат. Сила, выносливость, бессмертие, быстрая регенерация, мастерство скрытности и боя.","img":"images/captain_america.jpg","raiting":"0"},{"id":4,"hero":"Тор","alterego":"полное имя — Тор Одинсон","description":"Борец за справедливость, скандинавский бог. Все, что может бог, плюс молот Мьелнир.","img":"images/tor.png","raiting":"0"},{"id":5,"hero":"Халк","alterego":"Брюс Беннер","description":"Супергерой, борец за справедливость, ученый-биохимик. Сверхчеловеческая сила искорость, выносливость, полет.","img":"images/halk.png","raiting":"0"},{"id":6,"hero":"Черная вдова","alterego":"Наташа Романофф","description":"Супергероиня, шпионка. Пик человеческого физического потенциала, замедленное старение, знание многих языков","img":"images/black_widow.png","raiting":"0"},{"id":7,"hero":"Дэдпул","alterego":"Уэйд Уинстон Уилсон","description":"Антигерой, наемник. Высокий болевой порог, регенерация и бессмертие, сверхчеловеческая иммунная система","img":"images/deadpool.jpg","raiting":"0"}]`

let heroes = JSON.parse(heroesJson);
console.log(heroes)

  let body = document.body,
      card = document.getElementById('card'),
      cardhero = document.getElementById('hero'),
      cardLang = document.getElementById('alterego'),
      cardDesc = document.getElementById('description'),
      cardRait = document.getElementById('raiting'),
      cardImage = document.getElementById('image'),
      bgheroBehind = document.getElementById('behind'),
      bgheroInfront = document.getElementById('infront'),
      lastBtn = document.getElementById('last'),
      nextBtn = document.getElementById('next'),
      i = 0,
      numheroes = heroes.length,
      cardUrl = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/380275/lightpaperfibers.png',
      cardImg = new Image();
  
  bgheroBehind.textContent = heroes[i].hero;
  bgheroInfront.textContent = heroes[i].hero;
  cardhero.textContent = heroes[i].hero;
  cardLang.textContent = heroes[i].alterego;
  cardDesc.textContent = heroes[i].description;

  
  cardImg.onload = function() {
    card.style.background = "#FFF url(" + cardUrl + ") repeat fixed center";
  }
  cardImg.src = cardUrl;
  
  document.onkeydown = checkKey;
  function checkKey(e) {
    e = e || window.event;
    if (e.keyCode == '37') {
      goLeft();
    } else if (e.keyCode == '39') {
      goRight();
    }
  }
  lastBtn.addEventListener("click", function(e) {
    goLeft();
  }, false);
  nextBtn.addEventListener("click", function(e) {
    goRight();
  }, false);
  
  function goLeft() {
    if (i > 0)
      i--;
    else
      i = numheroes - 1;
    changeCard();
  }
  
  function goRight() {
    if (i < numheroes - 1)
      i++;
    else
      i = 0;
    changeCard();
  }
  
  function changeCard() {
    setTimeout(loadBG, 400);
    setTimeout(loadCard, 900);
    card.className += " fadeout";
    body.className += " fadeout";
  }
  
  function loadBG() {
    bgheroBehind.textContent = heroes[i].hero;
    bgheroInfront.textContent = heroes[i].hero;
    removeClass(body, "fadeout");
  }
  
  function loadCard() {
    removeClass(card, "fadeout");
    cardhero.textContent = heroes[i].hero;
    cardLang.textContent = heroes[i].alterego;
    cardDesc.textContent = heroes[i].description;
    cardImage.src = heroes[i].img;
  }
  
  
  function removeClass(el, _class) {
    
    if (el && el.className && el.className.indexOf(_class) >= 0) {
      var pattern = new RegExp('\\s*' + _class + '\\s*');
      el.className = el.className.replace(pattern, ' ');
    }
  }


let raiting = document.getElementById('raiting').value;

document.getElementById('add').addEventListener("click", function addStorage (event) {
  if (localStorage.getItem('raiting')==null) {
    localStorage.setItem('raiting', raiting);
    heroes[i].raiting = raiting;
}
  });

document.addEventListener('DOMContentLoaded', function checkStorage (event) {
  let raiting = localStorage.getItem('raiting');
  if (raiting!=null) {
    document.getElementById("raiting").value = raiting;
}
  else {document.getElementById('raiting').value = heroes[i].raiting;
    } 
});

