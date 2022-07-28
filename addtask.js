$(document).ready(function(){
    $(".add-card").on("click", function(){
        var description = $(".new-card-task").val();
        var today = new Date();
        var dateStr = (today.getMonth()+1) + "/" + today.getDate() + "/" + today.getFullYear();
        var newcard = $(`<div class="card">
            <div class="rectangle yellow"></div>
            <div class="rectangle green"></div>
            <div class="rectangle blue"></div>
            <div class="rectangle orange"></div>
            <p class="task-description">${description}</p>
            <img src="https://content.codecademy.com/courses/learn-css-grid/project-ii/Resources/list_icon.svg" class="list-icon">
            <p class="task-date">${dateStr}</p>
        </div>`)
        $(".add-card-container").before(newcard);
    })
})