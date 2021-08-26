
/*---navigation menu-----*/
function showNavMenu(){
    navMenu.classList.add("open");
    bodyScrollingToggle();
}
function hideNavMenu(){
    navMenu.classList.remove("open");
    fadeOutEffect();
    bodyScrollingToggle();
}
function fadeOutEffect(){
    document.querySelector(".fade-out-effect").classList.add("active");
    setTimeout(() =>{
    document.querySelector(".fade-out-effect").classList.remove("active");
    },3000)
}
(() =>{
    const hamburgerBtn = document.querySelector(".hamburger-btn"),
    navMenu = document.querySelector(".nav-menu"),
    closeNavBtn = navMenu.querySelector(".close-nav-menu");

    hamburgerBtn.addEventListener("click", showNavMenu);
    closeNavBtn.addEventListener("click", hideNavMenu);

    
    /*attach an event handler to document*/
    document.addEventListener("click",(event) =>{
        if(event.target.classList.contains('link-item')){
            /*make sure event.target.hash has a value before over behavior*/
            if(event.target.hash !==""){
                //prevent default anchor click behavior
                event.preventDefault();
                const hash = event.target.hash;
                //desactivate existing active 'section'
                document.querySelector(".section.active").classList.add("hide");
                document.querySelector(".section.active").classList.remove("active");
                //activate new 'section'
                document.querySelector(hash).classList.add("active");
                document.querySelector(hash).classList.remove("hide");
                //deactivate existing active navigation menu 'link-item' 
                navMenu.querySelector(".active").classList.add("outer-shadow","hover-in-shadow");
                navMenu.querySelector(".active").classList.remove("active","inner-shadow");
                // if clicked 'link-item is contained withing the '
                if(navMenu.classList.contains("open")){

                }
                //activate new navigation menu 'link-item' 
                event.target.classList.add("active","inner-shadow");
                event.target.classList.remove("outer-shadow","hover-in-shadow");
                //hide navigation menu
                hideNavMenu();
            }
        }
    })
})();

/*-----------about section tabs----------*/
(() =>{
    const aboutSection = document.querySelector(".about-section"),
    tabsContainer = document.querySelector(".about-tabs");

    tabsContainer.addEventListener("click", (event) =>{
        /* if event.target contains 'tab-item' class and not
        contains 'active class*/
        if(event.target.classList.contains("tab-item") &&
            !event.target.classList.contains("active")){
            const target = event.target.getAttribute("data-target");
            //desactivate existing active 'tab-item'
            tabsContainer.querySelector(".active").classList.remove("outer-shadow"
            ,"active");
            // activate new 'tab-item'
            event.target.classList.add("active","outer-shadow");
            //desactivate existing active 'tab-content'
            aboutSection.querySelector(".tab-content.active").classList.remove("active");
            // activate new 'tab-content'
            aboutSection.querySelector(target).classList.add("active"); 
        }
    })
})();
/*-----------hide all sections except active ---------*/
