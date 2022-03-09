//валидация формы
(function () {
    let forms = document.querySelectorAll('.needs-validation')

    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()

//инициализация карусели
$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        items: 4,
        dots: false,
        margin: 32,
        responsive: {
            0: {
                items: 1
            },
            800: {
                items: 2
            },
            1200: {
                items: 3
            },
        },
    });
});

//скрыть или показать пароль
function showPassword() {
    const eye = document.querySelector('.eye')
    const crossedOutEye = document.querySelector('.crossed-out-eye')
    const input = document.querySelector('.ui-input-password')

    eye.addEventListener('click', () => {
        input.setAttribute('type', 'text')
        crossedOutEye.style.display = 'block'
        eye.style.display = 'none'
    })
    crossedOutEye.addEventListener('click', () => {
        input.setAttribute('type', 'password')
        crossedOutEye.style.display = 'none'
        eye.style.display = 'block'
    })
}

showPassword()