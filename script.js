$(function(){
   $('.section2').hide();
   $('.less').hide();

   $('.more').click(function(){
      $('.section2').show();
      $('.section2').animate({
         height: '100%'
      }, 1000, 'linear');
      $('.more').hide();
      $('.less').show();
   });

   $('.less').click(function(){
      $('.section2').animate({
         height: '0'
      }, 600, 'linear', function(){
         $('.section2').hide();
      });
      $('.more').show();
      $('.less').hide();
   });
});