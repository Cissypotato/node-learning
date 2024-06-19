const tds = document.querySelectorAll('td')

tds.forEach(element => {
    element.onclick = function () {
        element.style.background = '#fff'
    }
});