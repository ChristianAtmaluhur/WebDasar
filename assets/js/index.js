// looping kontent
window.addEventListener('DOMContentLoaded', () => {
    loppingContent();
});

const data = [
    {
        src: 'assets/img/subway_world-1.png',
        title: 'Internasional',
        desc: 'Konsultasi tempat wisata diseluruh dunia.'
    },
    {
        src: 'assets/img/cil_language.png',
        title: 'Banyak Bahasa',
        desc: 'Menyediakan konsultasi dengan berbagai bahasa.'
    },
    {
        src: 'assets/img/akar-icons_money.png',
        title: 'Penganggaran',
        desc: 'Penganggaran dilakukan oleh profesional dibidangnya.'
    },
    {
        src: 'assets/img/carbon_communication-unified.png',
        title: 'Komunikasi',
        desc: 'Komunikasi dilakukan melalui berbagai cara.'
    },
    {
        src: 'assets/img/ant-design_dollar-circle-outlined.png',
        title: 'Harga',
        desc: 'Harga yang terjangkau dengan promo yang menarik.'
    },
    {
        src: 'assets/img/ri_customer-service-line.png',
        title: 'Pelayanan',
        desc: 'Siap melayani anda 24/7 dengan sepenuh hati'
    }
];

function loppingContent() {
    const container = document.querySelector('.card-container');
    let listsDOM = '';
    for (let i = 0;i <= 5;i++) {
        listsDOM += `<article class="card">
                        <article class="flex">
                            <img src="${data[i].src}">
                            <h1>${data[i].title}</h1>
                        </article>
                        <p>${data[i].desc}</p>
                    </article>`
    }
    container.innerHTML = listsDOM;
}

// toggle navbar
const navBtn = document.querySelector(".mobile-btn");
const navbar = document.querySelector(".navigation");

navBtn.addEventListener("click", () => {
    const visible = navbar.getAttribute("data-visible");
    if (visible === "false") {
        navbar.setAttribute("data-visible", true);
        navBtn.setAttribute("aria-expanded", true);
    } else {
        navbar.setAttribute("data-visible", false);
        navBtn.setAttribute("aria-expanded", false);
    }
});

// Fixed navbar
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    const scrollHeight = window.pageYOffset;
    const navHeight = nav.getBoundingClientRect().height;

    if(scrollHeight + 25 > navHeight) {
        nav.classList.add('fixed-navbar');
    } else {
        nav.classList.remove('fixed-navbar');
    }
});

// smooth scroll
const scrollLinks = document.querySelectorAll('.smooth');
for(const link of scrollLinks) {
    link.addEventListener('click', e =>  {
        e.preventDefault();
        const id = e.currentTarget.getAttribute("href").slice(1);

        const element = document.getElementById(id);
        
        const navHeight = nav.getBoundingClientRect().height;
        let position = element.offsetTop - navHeight;
        if(navHeight > 1) {
            position = position + navHeight - 200; 
        }


        window.scrollTo({
            left: 0,
            top: position
        });
    });
}