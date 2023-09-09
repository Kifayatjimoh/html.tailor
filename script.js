const logoText = document.querySelector('.trends');
const menuLinks = document.querySelectorAll('.btn');

logoText.textContent = 'LogoText';
// logoText.style = `
// color: white;
// font-size: 42px;
// text-decoration:underline
// `

for (let i=0; i<menuLinks.length; i++) {
    menuLinks[i].addEventListener('click', function () {
    menuLinks[i].style.color = '#fff'
    })
}

// document.addEventListener('click', function(){
//     alert('Clicked')
// })