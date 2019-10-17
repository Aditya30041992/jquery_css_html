$(document).ready(function () { 
    $(".add-row").click(function () {
        
        var name = $("#name").val();
        var email = $("#email").val();
        if((name !== "" && email !== "")) {
            // do something 
        var markup = "<tr><td><input type='checkbox' class='check' name='record'></td><td>" + name + "</td><td>" + email + "</td></tr>";
        $("table tbody").append(markup);
        console.log("Data added sucessfully:-", "name="+ name + "  " + "email=" + email);
        console.table([name,email]);
        $('.form').trigger("reset");  
        }
      });  
    

    // Find and remove selected table rows
    $(".delete-row").click(function () {
        $("table tbody").find('input[name="record"]').each(function () {
            if ($(this).is(":checked")) {
                console.log("Data deleted sucessfully:-", "name=" + "  " + name + "email=" + email);

                $(this).parents("tr").remove();
                console.log("Data deleted sucessfully:-", "name=" + "  " + name + "email=" + email);

            }
        });
    });
});    