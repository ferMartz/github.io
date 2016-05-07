$( document ).ready( function() {
			$( 'img' ).retinizeImages();
			$( '.tml-link' ).summitLightbox({
				onLoaded: function(){
					$( '#tm-lightbox' ).find( '#prev-link' ).on( 'click', function( event ){
						event.preventDefault();
						$( this ).css({ transition: 'none' });
						lb.prevContent();
					});
					$( '#tm-lightbox' ).find( '#next-link' ).on( 'click', function( event ){
						event.preventDefault();
						$( this ).css({ transition: 'none' });
						lb.nextContent();
					});
					$( '#tm-lightbox' ).find( '#close-window' ).on( 'click', function( event ){
						event.preventDefault();
						$( this ).css({ transition: 'none' });
						lb.destroyLightbox();
					});
				}
			});
			var lb = $( '.tml-link' ).data( 'summitLightbox' );
		});