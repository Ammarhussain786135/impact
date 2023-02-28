$("#div-Workout").hide();
$("#div-Nutrition").hide();
$(".btn").click(function () {
    var id = $(this).attr("id");
    if (id == "Progression") {
        $(this).attr("autofocus", true).siblings().attr("autofocus", false);
        $("#div-Workout").hide();
        $("#div-Nutrition").hide();
        $("#div-Progression").show();
    } else if (id == "Workout") {
        $(this).attr("autofocus", true).siblings().attr("autofocus", false);
        $("#div-Progression").hide();
        $("#div-Nutrition").hide();
        $("#div-Workout").show();
    } else {
        $(this).attr("autofocus", true).siblings().attr("autofocus", false);
        $("#div-Progression").hide();
        $("#div-Nutrition").show();
        $("#div-Workout").hide();
    }
});