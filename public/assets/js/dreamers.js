// demo page javascript 
$(() => {
  // new dream submisssion
  $(".dream_create").on("submit", e => {
    event.preventDefault(e);
    console.log("hello");

    console.log($("select[name=dreamer_name] option:selected").data("id"));

    
    let newDreamCreation = {
      dream_title: $("input[name=dream_title]").val(),
      dream_description: $("textarea[name=dream_description]").val().trim(),
      category: $("select[name=category] option:selected").val(),
      mood: $("select[name=mood] option:selected").val(),
      food: $("input[name=food]").val().trim(),
      hours_of_sleep: $("input[name=hours_of_sleep]").val(),
      tv_on: $("select[name=tv_on] option:selected").val(),
      author_id: $("select[name=dreamer_name] option:selected").data("id")
    };

    console.log(JSON.stringify(newDreamCreation, null, 2));
    

    $.ajax({
      url: "/api/dreams/post",
      method: "POST",
      data: newDreamCreation
    }).then((insertedRow) => {
      console.log(insertedRow);
      console.log(`New dream added.`);
      location.reload();
    });
  });
})
