// Document.ready
// call getPostData
$(document).ready(function () {
    function getPostData(id, type) {
        var queryUrl;
        switch (type) {
            case "post":
                queryUrl = "/api/dreamer/" + id;
                break;
            case "post":
                queryUrl = "/api/dream_descripton/" + id;
                break;
            default:
                return;
        }
        getPostData();
        $.get(queryUrl, function (data) {
            if (data) {
                console.log(data.AuthorId || data.id);
                // If this post exists, prefill forms with its data
                $("#title").text(data.title);
                $("#body").text(data.dream_descripton);
                $("mood").text(data.mood);
                $("food").text(data.food);
                $("hours_of_sleep").text(data.hours_of_sleep);
                $("category").text(data.category);
                $("tv_on").text(data.tv_on);
                dreamerId = data.DreamerId || data.id;
                // If we have a post with this id, set a flag for us to know to update the post
                // when we hit submit
                updating = true;
            }
        }
    }




    $("#updateDreamBtn").click(function (updatePost) {
        console.log("dream updated");
        $.ajax({
            method: "PUT",
            url: "/api/posts",
            data: post
        })
            .then(function () {
                window.location.href = "/";
            });
    })

})