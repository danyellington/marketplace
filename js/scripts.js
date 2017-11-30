$(document).ready(function() {
  $("form#orderForm").submit(function(event) {
    var fullName = $("#fullName").val();
    var address = $("#address").val();
    var product = $("input:radio[name=product]:checked").val();
    $(".receipt").text(fullName+" "+address+" "+product);
    event.preventDefault();
  });
});
