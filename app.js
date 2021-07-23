let btn = document.querySelector('.btn');
let navbar = document.querySelector('.navbar');
let wrapper = document.querySelector('.wrapper');
var main = document.querySelector('#shest legend [type="checkbox"]'),
    all = document.querySelectorAll('#shest label [type="checkbox"]');

btn.addEventListener('click', function () {
    btn.classList.toggle('active');
    navbar.classList.toggle('active');
    wrapper.classList.toggle('active');
})

if (window.innerWidth < 1200) {
    btn.classList.toggle('active');
    navbar.classList.toggle('active');
    wrapper.classList.toggle('active');
}



for (var i = 0; i < all.length; i++) {
    all[i].onclick = function () {
        var allChecked = document.querySelectorAll('#shest > [type="checkbox"]:checked').length;
        main.checked = allChecked == all.length;
        main.indeterminate = allChecked > 0 && allChecked < all.length;
    }
}

main.onclick = function () {
    for (var i = 0; i < all.length; i++) {
        all[i].checked = this.checked;
    }
}

