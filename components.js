// Shared nav and footer — injected synchronously via insertAdjacentHTML()
// Load this script (no defer/async) in <head>, then call renderNav() / renderFooter() inline in <body>.

window.renderNav = function () {
    document.currentScript.insertAdjacentHTML('beforebegin',
        '<nav class="site-nav">' +
        '<a href="/" class="logo">Julia Abboud</a>' +
        '<ul id="nav-ul">' +
        '<li><a href="/#about">About</a></li>' +
        '<li><a href="/#projects" class="nav-engineering">Engineering</a></li>' +
        '<li><a href="/#internship" class="nav-internship">Internship</a></li>' +
        '<li><a href="/#personal" class="nav-personal">Personal</a></li>' +
        '<li><a href="/#contact">Contact</a></li>' +
        '</ul>' +
        '<button class="hamburger" id="hamburger" aria-label="Menu">' +
        '<span></span><span></span><span></span>' +
        '</button>' +
        '</nav>'
    );
};

window.renderFooter = function () {
    document.currentScript.insertAdjacentHTML('beforebegin',
        '<footer id="page-footer">' +
        '<span style="font-size:0.8rem;color:rgba(255,255,255,0.4);">© 2026 Julia Abboud</span>' +
        '<span style="font-size:0.8rem;color:rgba(255,255,255,0.4);display:inline-flex;align-items:center;gap:0.5rem;">' +
        'Designed and Developed Independently ' +
        '<canvas class="sig-canvas" data-sig="/about/Signature.png" style="height:3rem;width:5rem;vertical-align:middle;flex-shrink:0;display:inline-block;"></canvas>' +
        '</span>' +
        '</footer>'
    );
};
