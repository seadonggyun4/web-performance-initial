window.addEventListener('load', async () => {
    (function showTopBar() {
        const $countryBar = document.querySelector("section.country-bar")
        const COUNTRY = "France";
        const VAT = 20;

        setTimeout(() => {
            $countryBar.innerHTML = `<p>Orders to <b>${COUNTRY}</b> are subject to <b>${VAT}%</b> VAT</p>`
            $countryBar.classList.remove('hidden')
        }, 1000);
    })();
    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > 1) {
            for (let i = 0; i < 10000000; i++) {
                const temp = Math.sqrt(i) * Math.sqrt(i);
            }
        }
    });
    setTimeout(() => {
        heroImageLoad();
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-PKK35GL5');
    }, 5000);
})

const heroImageLoad = () => {
    const $heroSection = document.querySelector('.hero');
    const $heroImage = `
       <img
            srcset="
                images/Hero_Mobile.webp 864w,
                images/Hero_Tablet.webp 1440w,
                images/Hero_Desktop.webp 2160w
            "
            sizes="
                (max-width: 576px) 100vw,
                (max-width: 960px) 100vw,
                100vw
            "
            width="2160"
            height="1005"
            src="images/Hero_Desktop.webp"
            alt="Hero_banner"
            loading="eager"
            >`
    $heroSection.children[0].insertAdjacentHTML('afterend', $heroImage);
    document.querySelector(".img-Loading").classList.add('hidden');
}
