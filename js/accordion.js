const btns = document.querySelectorAll('.feature__link');
const list = document.querySelectorAll('.feature-sub');

btns.forEach((btnItem, index) => {
    btnItem.addEventListener('click', () => {
        if (btnItem.classList.contains('feature__link_active')) {
            btns.forEach((item) => {
                item.classList.remove('feature__link_active');
                list[index].classList.add('hidden');
            })
        } else {
            btns.forEach((item) => {
                item.classList.remove('feature__link_active');
                item.nextElementSibling.classList.add('hidden');
            })            
            btnItem.classList.add('feature__link_active');
            btnItem.nextElementSibling.classList.remove('hidden');
        }
    })
});