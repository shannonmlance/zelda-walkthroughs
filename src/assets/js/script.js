console.log("jquery is running.");

$(function() {
    $("#accordion").accordion({
        active: false,
        collapsible: true,
        heightStyle: "content"
    });
});
