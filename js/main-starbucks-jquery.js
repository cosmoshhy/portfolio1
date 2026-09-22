// 통합검색 입력박스 
const searchEl = document.querySelector('.search');
const searchInputEl = document.querySelector('input');
const searchSearchEl = document.querySelector('.material-symbols-outlined');

// searchEl.addEventListener('click', function () {
//     searchInputEl.focus();
// });
$('.search').click(function() {
    searchInputEl.focus();
});
$('.material-symbols-outlined').click(function() {
    searchInputEl.focus();
});
$('input').focus(function() {
    searchInputEl.setAttribute('placeholder', '통합검색');
});
$('input').blur(function() {
    searchInputEl.setAttribute('placeholder', '');
});

// 책갈피 애니메이션 처리
const badgeEl = document.querySelector('header .badges');
// _.throttle(콜백함수, 지연시간(ms));
$(window).scroll(_.throttle(function() {
    if($(window).scrollTop() > 300) {
        // 책갈피 숨기기
        // badgeEl.style.display = 'none';
        // gsap.to(요소, 지속시간, 옵션(객체));
        gsap.to(badgeEl, .6, {
            opacity: 0,
            display: 'none',
        });
    } else {
        // 책갈피 보이기
        // badgeEl.style.display = 'block';
        gsap.to(badgeEl, .6, {
            opacity: 1,
            display: 'block',
        });
    }
    // console.log(window.scrollY);
}, 300));

// visual fade-in 처리
$('.visual .fade-in').each(function (idx, fadeEl) {
    gsap.to(fadeEl, 1, {
        delay: (idx + 1) * 0.7, // 0.7, 1.4, 2.1, 2.8
        opacity: 1
    });
});

// swiper 동작시작(notice)
new Swiper('.notice-line .swiper-container', {
    direction: 'vertical',
    autoplay: {
        delay: 2000, // 1초 동안 머물렀다가 넘어감
        speed: 2000,   
    },
    loop: true,
});
// swiper promotion
new Swiper('.promotion .swiper-container', {
    direction: 'horizontal',
    slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
    spaceBetween: 10, // 슬라이드 사이의 여백
    centeredSlides: true, // 1번 슬라이드가 가운데 보이기
    autoplay: true,
    loop: true,
    pagination: {
        el: ".promotion .swiper-pagination", // 페이지 번호 요소
        clickable: true, // 사용자가 페이지 번호 요소 제어
    },
    navigation: {
        prevEl: ".promotion .swiper-prev",
        nextEl: ".promotion .swiper-next",
    },
});

let isHidePromotion = true;
$(".toggle-promotion").click(function() {
    isHidePromotion = !isHidePromotion;
    if(isHidePromotion) {
        $(".promotion").addClass("hide");
        $(".inner__right .material-symbols-outlined").html("keyboard_arrow_down");
    } else {
        $(".promotion").removeClass("hide");
        $(".inner__right .material-symbols-outlined").html("keyboard_arrow_up");
    }
});

// youtube floating images
function random(min, max) {
    return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}
function floatingObject(selector, delay, sizex, sizey, duration) {
    gsap.to(selector, duration, {
        x: sizex,
        y: sizey,
        repeat: -1,  //무한반복
        yoyo: true,
        delay: random(0, delay),
    });
}
floatingObject('.floating1', 1, 0, 15, 2);
floatingObject('.floating2', .5, 100, -100, .8);
floatingObject('.floating3', 1.5, 0, 20, 3);

/**
 * 요소가 화면에 보여짐 여부에 따른 요소 관리
 */
// 관리할 요소들 검색!
const spyEls = document.querySelectorAll('section.scroll-spy')
// 요소들 반복 처리!
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({ // 감시할 장면(Scene)을 추가
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
      triggerHook: .8 // 화면의 80% 지점에서 보여짐 여부 감시
    })
    .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
    .addTo(new ScrollMagic.Controller()) // 컨트롤러에 장면을 할당(필수!)
})