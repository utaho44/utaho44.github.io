/* global $, google */

$('.profile-image').waypoint({
  handler: function(direction){
    if (direction === 'down'){
      $(this.element).addClass('animate__fadeInUp');
    }
  },
  offset:'60%',
});


$('#sale-list').slick({
  autoplay: true,
  autoplaySpeed: 4000,
  dots: true,
  arrows: false

});
