$(document).ready(function(){
    $(window).scroll(function(){
      if(this.scrollY > 20) 
        $(".navbar").addClass("sticky");
      else
        $(".navbar").removeClass("sticky");
    });
  
    $('.menu-toggler').click(function(){
      $(this).toggleClass("active");
      $(".navbar-menu").toggleClass("active");
    });
  });


  const datum = new Date();
  

  const den = datum.getDate();
  const mesic = datum.getMonth() + 1;
  const rok = datum.getFullYear();

  const ukazdatum = `${den}.${mesic}.${rok}`;
  

  const casovyElement = document.getElementById("datum");
  casovyElement.innerHTML = ukazdatum;

  