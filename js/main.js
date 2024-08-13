document.addEventListener('DOMContentLoaded', (event) => {
    (function showTopBar() {
        const $countryBar = document.querySelector("section.country-bar")
        const COUNTRY = "France";
        const VAT = 20;

        setTimeout(() => {
            $countryBar.innerHTML = `<p>Orders to <b>${COUNTRY}</b> are subject to <b>${VAT}%</b> VAT</p>`
            $countryBar.classList.remove('hidden')
        }, 1000);
    })();
});