var deleteText = "delete";

var space = "   ";
$("#submit_list").click(function() {
    const text = $("#ntd").val();
    console.log(text);
    $("#start_list").after('<div class="padding-box">' + '<p>' + space + text + space + '</p>' +'<button class="deleteText">' + deleteText + '</button>'  +'</div>');
});
$(document).keydown(function(e) {
    if (e.key === "Enter") {
        const text = $("#ntd").val();
        console.log(text);
        $("#start_list").after('<div class="padding-box">' + '<p>' + space + text + space + '</p>' +'<button class="deleteText">' + deleteText + '</button>'  +'</div>');
    };
    console.log(e.key);
});

$(document).on('click', '.deleteText', function() {
    $(this).parent().remove();
});

