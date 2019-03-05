function getPostData(id, type) {
    var queryUrl;
    switch (type) {
        case "post":
            queryUrl = "/api/dreamer/" + id;
            break;
        case "dreamer":
            queryUrl = "/api/dream_descripton/" + id;
            break;
        default:
            return;
    }
    $.get(queryUrl, function (data) {
        if (data) {
            console.log(data.AuthorId || data.id);
            // If this post exists, prefill our cms forms with its data
            titleInput.val(data.title);
            bodyInput.val(data.dream_descripton);
            moodInput.val(data.mood);
            foodInput.val(data.food);
            hours_of_sleepInput.val(data.hours_of_sleep);
            categoryInput.val(data.category);
            tv_onInput.val(data.tv_on);
            dreamerId = data.DreamerId || data.id;
            // If we have a post with this id, set a flag for us to know to update the post
            // when we hit submit
            updating = true;
            then(
                function updatePost(post) {
                    $.ajax({
                      method: "PUT",
                      url: "/api/posts",
                      data: post
                    })
                      .then(function() {
                        window.location.href = "/index";
                      });
                  }
            )
        }
    })
};