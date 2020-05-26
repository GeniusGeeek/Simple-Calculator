$(document).ready(function() {
   var inputs = [];
   var print;
   var ans;
   var delprint;
   $('.btn').click(function() {
      var input = $(this).val();
      newinput = inputs.push(input);
      console.log(input);
      console.log(inputs);
      print = inputs.join('');
      $(".screen-display").html(print);
   });
   $('#sumbit').click(function() {
      event.preventDefault();
      ans = eval(print);
      console.log(print);
      console.log(ans);
      $(".screen-ans").html(ans);
   });
   $('#clear').click(function() {
      $(".screen-display").html("");
      inputs = [];
      $(".screen-ans").html("");
   });
   $('#del').click(function() {
      //inputs.pop();
      //delprint = inputs.join('');
      $(".screen-display").html('');
       inputs = [];
      $(".screen-ans").html("");
      //$(".screen-display").html(inputs);
   });
});
