document.addEventListener("DOMContentLoaded", function () {
    const blocks = document.querySelectorAll(".information-section");

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                obs.unobserve(entry.target);
            }
        });
    }, { rootMargin: "0px 0px -100px 0px" });
    blocks.forEach((block) => observer.observe(block));


    const burger = document.querySelector('.burger');

    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
    });
    // burger-menu sub-menu
    document.querySelectorAll('#main-menu-mobile > li.menu-item-has-children > a').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Отменяет переход по ссылке

            // Переключаем класс active у родительского li
            this.parentElement.classList.toggle('active');
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.btn-pop-up').forEach(button => {
      button.addEventListener('click', (event) => {
        event.preventDefault(); 
        document.querySelector('#pop-up').classList.toggle('active');
      });
    });
});
