$(document).ready(function() {

  // owl carousel
  $("#banner-area .owl-carousel").owlCarousel({
    dots: true,
    items: 1
  });

  //Top Sale Carousel
  $("#top-sale .owl-carousel").owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    items: 5,
    Responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  });

  // isotop filter
    $grid= $(".grid").isotope({
      itemSelector: '.grid-item',
      layoutMode: "fitRows"
    });

  //filter items on button click
  $(".button-group").on("click","button",function() {
    var filterValue = $(this).attr("data-filter");
    $grid.isotope({filter:filterValue});
  });


  //New Phones Carousel
  $("#new-phones .owl-carousel").owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    items: 5,
    Responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  });
  $("#blog .owl-carousel").owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    items: 3,
    Responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      }
    }
  })

  // Product qty 
  let $qty_up = $(".qty .qty-up");
  let $qty_down = $(".qty .qty-down");
  // let $input = $(".qty .qty-input");

  // click function
  $qty_up.click(function() {
    let $input =  $(`.qty_input[data-id='${$(this).data("id")}']`);
    if ($input.val() >= 1 && $input.val() <= 9) {
      $input.val(function(oldval) {
        return ++oldval;
      });
    }
  });

  $qty_down.click(function() {
    let $input = $(`.qty_input[data-id='${$(this).data("id")}']`);
    if ($input.val() > 1 && $input.val() <= 10) {
      $input.val(function( oldval) {
        return --oldval;
      });
    }
  });

});