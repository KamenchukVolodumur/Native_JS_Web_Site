function slider({container, nextArrow, prevArrow, slide, totalCounter, currentCounter, wrapper, field}) {
    const slidesWrapper = document.querySelector(wrapper),
        slides = document.querySelectorAll(slide),
        slidePrev = document.querySelector(prevArrow),
        slideNext = document.querySelector(nextArrow),
        current = document.querySelector(currentCounter),
        total = document.querySelector(totalCounter),
        slideField = document.querySelector(field),
        width = window.getComputedStyle(slidesWrapper).width,
        slider = document.querySelector(container);
    const calcuete = () => { };
    let slideIndex = 1;
    if (slides.length < 10) {
        total.textContent = `/0${slides.length}`;
        current.textContent = `0${slideIndex}`;
    } else {
        total.textContent = slides.length;
        current.textContent = `${slideIndex}`;
    }
    slideField.style.width = 100 * slides.length + '%';
    slideField.style.display = 'flex';
    slideField.style.transition = '0.5s all';
    slidesWrapper.style.overflow = 'hidden';
    slides.forEach((slide) => {
        slide.style.width = width;
    });
    let offset = 0;
    slideNext.addEventListener('click', () => {
        if (offset == (slides.length - 1) * (+width.replace(/\D/g, ''))) {
            offset = 0;
        } else {
            offset += +width.replace(/\D/g, '');
        }
        slideField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }

        if (slides.lenght < 10) {
            current.textContent = `${slideIndex}`;
        } else {
            current.textContent = `0${slideIndex}`;
        }
        allDots.forEach((i) => {
            i.style.opacity = '.5';
        });
        allDots[slideIndex - 1].style.opacity = 1;
    });
    slidePrev.addEventListener('click', () => {
        if (offset == 0) {
            offset = +(slides.length - 1) * (+width.replace(/\D/g, ''));
        } else {
            offset -= (+width.replace(/\D/g, ''));
        }
        slideField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }

        if (slides.lenght < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = `0${slideIndex}`;
        }
        allDots.forEach((i) => {
            i.style.opacity = '.5';
        });
        allDots[slideIndex - 1].style.opacity = 1;
    });
    const dots = document.createElement('ol'),
        allDots = [];
    dots.classList.add('carousel-indicators');
    slider.style.position = 'relative';
    dots.style.cssText = `
position: absolute;
right: 0;
bottom: 0;
left: 0;
z-index: 15;
display: flex;
justify-content: center;
margin-right: 15%;
margin-left: 15%;
list-style: none;
 `;
    for (let i = 0; i < slides.length; i++) {
        let e = document.createElement('li');
        e.setAttribute('data-slide-to', i + 1);
        e.style.cssText = `
    box-sizing: content-box;
    flex: 0 1 auto;
    width: 30px;
    height: 6px;
    margin-right: 3px;
    margin-left: 3px;
    cursor: pointer;
    background-color: #fff;
    background-clip: padding-box;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    opacity: .5;
    transition: opacity .6s ease;`;
        if (i == 0) {
            e.style.opacity = 1;
        }
        dots.append(e);
        allDots.push(e);
    }
    slider.append(dots);
    allDots.forEach((dot) => {
        dot.addEventListener('click', (e) => {
            let slideTo = e.target.getAttribute('data-slide-to');
            slideIndex = slideTo;
            offset = +(slideTo - 1) * (+width.replace(/\D/g, ''));
            slideField.style.transform = `translateX(-${offset}px)`;
            if (slides.lenght < 10) {
                current.textContent = `0${slideIndex}`;
            } else {
                current.textContent = `0${slideIndex}`;
            }
            allDots.forEach((i) => {
                i.style.opacity = '.5';
            });
            allDots[slideIndex - 1].style.opacity = 1;
        });
    });

    /*console.log(slide);
    function hideSlide() {
     slide.forEach(item => {
        item.classList.add('hide');
        item.classList.remove('show');
     });
    }
    function showSlide(i) {
     slide[i].classList.add('show');
     slide[i].classList.remove('hide');
    }
    hideSlide();
    showSlide(0);
    current.innerHTML=getCurrent((0));
    function getCurrent(num) {
     if (num >= 0 && num < 10) {
        return `0${num+1}/`;
     } else {
        return num;
     }
    }
    slidePrev.addEventListener('click', (event) => {
     for(let i=0; i<slide.length; i++){
        if(slide[i].classList.contains('show')){
           if(i==0){
           hideSlide();
           showSlide(i+3);
           current.innerHTML=getCurrent((i+3));
           total.removeAttribute('id');
           current.id='current';
           break;
           }
           hideSlide();
           showSlide(i-1);
           current.innerHTML=getCurrent((i-1));
           total.removeAttribute('id');
           current.id='current';
           break;
        }
     }
    });
    slideNext.addEventListener('click', (event) => {
     for(let i=0; i<slide.length; i++){
        if(slide[i].classList.contains('show')){
           if(i==3){
           hideSlide();
           showSlide(i-3);
           current.innerHTML=getCurrent((i-3));
           current.removeAttribute('id');
           total.id='current';
           break;
           }
           hideSlide();
           showSlide(i+1);
           current.innerHTML=getCurrent((i+1));
           current.removeAttribute('id');
           total.id='current';
           break;
        }
     }
    });*/

}
export default slider;