setInterval(() => {
    const sections = document.querySelectorAll('.home__info');
    const activeIndex = Array.from(sections).findIndex(section => section.classList.contains('slider-move-1') || section.classList.contains('slider-move-2'));

    const nextIndex = (activeIndex + 1) % sections.length;
    const nextNextIndex = (nextIndex + 1) % sections.length;

    sections[activeIndex].classList.remove('slider-move-1', 'slider-move-2');
    sections[nextIndex].classList.add('slider-move-1');
    sections[nextNextIndex].classList.add('slider-move-2');
  }, 5000);