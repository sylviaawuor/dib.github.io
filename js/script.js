$(document).ready(function(){

	$(".mobile-menu-icon.fa-bars").click(function(){
        $(".hidden-mobile").slideDown();
    });


    $(".mobile-menu-icon.fa-times").click(function(){
        $(".hidden-mobile").slideUp();
    });

		$(".visible-link").click(function(){
        $(".invisible-links").slideToggle();
        $(".invisible-links2").slideUp();
        $(".invisible-links3").slideUp();
    });

    $(".visible-link2").click(function(){
        $(".invisible-links2").slideToggle();
        $(".invisible-links").slideUp();
        $(".invisible-links3").slideUp();
    });

    $(".visible-link3").click(function(){
        $(".invisible-links3").slideToggle();
        $(".invisible-links2").slideUp();
        $(".invisible-links").slideUp();
    });

	    $('.slider').bxSlider({
		  mode: 'fade',
		  auto: true,
		  easing: 'easeOutElastic',
		  speed: 1500,
		});

        $('.updates').bxSlider({
          mode: 'horizontal',
          easing: 'easeOutElastic',
          speed: 1500,
        });



				$(function() {
				var Accordion = function(el, multiple) {
						this.el = el || {};
						this.multiple = multiple || false;

						// Variables privadas
						var links = this.el.find('.link2');
						// Evento
						links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
				}

				Accordion.prototype.dropdown = function(e) {
						var $el = e.data.el;
						$this = $(this),
								$next = $this.next();

						$next.slideToggle();
						$this.parent().toggleClass('open');

						if (!e.data.multiple) {
								$el.find('.submenu2').not($next).slideUp().parent().removeClass('open');
						};
				}

				var accordion = new Accordion($('#accordion'), false);
		});

				$('select').niceSelect();

				// Show or hide the sticky footer button
			$(window).scroll(function() {
				if ($(this).scrollTop() > 200) {
					$('.go-top').fadeIn(200);
				} else {
					$('.go-top').fadeOut(200);
				}
			});

			// Animate the scroll to top
			$('.go-top').click(function(event) {
				event.preventDefault();

				$('html, body').animate({scrollTop: 0}, 300);
			})






    });
