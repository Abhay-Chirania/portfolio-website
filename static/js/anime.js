const proj_sec = document.querySelector('.project');
observer = new IntersectionObserver((entries)=>{
    if (entries[0].intersectionRatio>0){
           document.querySelector('.mouse').style.display = "none";
    }
});
observer.observe(proj_sec);


 
const about = document.querySelector('.about-content');
var about_done= false;
const sectionOneOptions={
    rootMargin: "100px 0px 0px 0px"
};
if (!about_done){
observer = new IntersectionObserver((entries,sectionOneObserver)=>{
    if (entries[0].intersectionRatio>0 && !about_done){
           document.querySelector('.about').style.animation = `anim1 800ms forwards ease-out`;
           about_done = true;
    }
    
},sectionOneOptions);
observer.observe(about);
}


const project = document.querySelector('.project-content');
var project_done= false;
if(!project_done){
observer = new IntersectionObserver((entries,sectionOneObserver)=>{
    if (entries[0].intersectionRatio>0 && !project_done){
           document.querySelector('.project').style.animation = `anim1 800ms forwards ease-out`;
           project_done = true;
    }
    
},sectionOneOptions);
observer.observe(project);
}

const more = document.querySelector('.more-content');
var more_done= false;

if(!more_done){
observer = new IntersectionObserver((entries,sectionOneObserver)=>{
    if (entries[0].intersectionRatio>0 && !more_done){
           document.querySelector('.more').style.animation = `anim1 800ms forwards ease-out`;
           more_done = true;
    }
    
},sectionOneOptions);
observer.observe(more);
}


const contact = document.querySelector('.contact-content');
var contact_done= false;

if(!contact_done){
observer = new IntersectionObserver((entries,sectionOneObserver)=>{
    if (entries[0].intersectionRatio>0 && !contact_done){
           document.querySelector('.contact').style.animation = `anim1 800ms forwards ease-out`;
           contact_done = true;
    }
    
},sectionOneOptions);
observer.observe(contact);
}





