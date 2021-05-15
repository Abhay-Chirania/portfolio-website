    document.getElementById('overlay').style.display="none";


    elements = document.getElementsByClassName("card")
    
    for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('touch', myFunction, false);
    elements[i].addEventListener('click', myFunction, false);

    }

    function myFunction(){
        if (this.dataset.website)
            window.open(this.dataset.website, '_blank').focus();
        else{
            document.getElementById('overlay').style.display="flex";
            document.getElementById('long_desc').innerText = this.dataset.long_desc;

            if (this.dataset.github){
            document.getElementById('link').innerHTML = '<a id="github" target="_blank"><i class="fab fa-github"></i> View Project</a>'
            document.getElementById('github').href = this.dataset.github;
            }

            else{
                document.getElementById('link').innerHTML = ''
            }

            if(this.dataset.youtube){
                document.getElementById('video').innerHTML='<iframe id="vid" src="" title="YouTube video player" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
                document.getElementById('vid').src = this.dataset.youtube;
            }

            else{
                document.getElementById('video').innerHTML='<img id="vid" src="" alt="Project Image"></img>';
                document.getElementById('vid').src = this.dataset.img_url;

            }

        }
    }

    document.getElementById('overlay').addEventListener('click',function(){
        document.getElementById('overlay').style.display="none"
        $("iframe").each(function() { 
        var src= $(this).attr('src');
        $(this).attr('src',src);  
        });

    });

    const burger = document.querySelector('.hamburger')
    const nav = document.querySelector('.nav-links')
    const navLinks = document.querySelectorAll('.nav-links li')
    const section = document.querySelectorAll('section')

 

    burger.addEventListener('click',(event)=>{
        event.stopPropagation();
        nav.style.transition = "transform 0.4s ease-in";
        toggle();
        
    });

    document.querySelector('body').addEventListener('click',()=>{
      if(nav.classList.contains('nav-active')){
          toggle();
        }
      });


      function toggle(){
          nav.classList.toggle('nav-active');
          if(nav.classList.contains('nav-active')){
            const x = document.querySelector('.nav-container')
            x.classList.remove("bs");
            x.classList.remove("animateScroll");
            x.classList.add("sticky");
          }

          navLinks.forEach((link,index)=>{
          if(link.style.animation){
            link.style.animation='';
          }
          else{
              link.style.animation=`navLinkFade 0.3s ease forwards ${index/9+ 0.35}s`
            }
          });

        burger.classList.toggle('toggle');
        if(nav.classList.contains('nav-active')){
            

          section.forEach((link,index)=>{
            link.style.filter = "blur(3px)";
          });
        }
        else{
          section.forEach((link,index)=>{
            link.style.filter = "";
          });
        }
      }