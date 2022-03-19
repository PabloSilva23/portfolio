window.sr = ScrollReveal({reset: true});

var scroll = {
    distance: '100px',
    origin: 'bottom',
    duration: 2000,
    interval: 1600
}


// sr.reveal('.banner', scroll)
sr.reveal('.apresentation', {duration: 2000, origin: 'left', distance: '100px'})
sr.reveal('.banner img', {origin: 'right', distance: '100px', duration: 2000});
ScrollReveal().reveal('.about-me', scroll);
sr.reveal('.projects', scroll);
sr.reveal('.skills', scroll);