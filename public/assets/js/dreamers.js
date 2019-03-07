// demo page javascript 
$(() => {
  // filter jquery
  // $().on("submit", e => {
  //   event.preventDefault(e);

  //   // add chosen attribute. when that is changes to chosen grab the val and the name for the query string

  //   let moodVal = $("select[name=]").val();
  //   let categoryVal = $("select[name=]").val();

  //   let preChoices = [moodVal, categoryVal];

  //   let choices = [];

  //   preChoices.forEach(element => {
  //     if (element != " ") {
  //       choices.push(element);
  //     }
  //   });

  //   let filterChoices = {
  //     choices: choices
  //   };

  //   $.ajax({
  //     url: `/api/dreamers/filter/?dreamer=${writer},mood=${mood},category=${category}`,
  //     method: "GET",
  //     data: newDreamer
  //   }).then(results => {
  //     console.log(`results\n`);
  //     console.log(
  //       `New dreamer added:\n${newDreamer.name}\n${
  //         newDreamer.email
  //       }\n${newDreamer.age}\n${newDreamer.sex}\n`
  //     );
  //   });
  // });

  // new dream submisssion
  $(".dream_create").on("submit", e => {
    event.preventDefault(e);
    console.log("hello");
    
    let newDreamCreation = {
      dreamer_name: "test",
      dream_description: $("textarea[name=dream_description]").val().trim(),
      mood: $("input[name=mood]").val(),
      food: $("input[name=food]").val().trim(),
      hours_of_sleep: $("input[name=hours_of_sleep]").val(),
      tv_on: $("select[name=tv_on]").val(),
      category: "lucid"
    };

    $.ajax({
      url: "/api/dreams/post",
      method: "POST",
      data: newDreamCreation
    }).then((insertedRow) => {
      console.log(insertedRow);
      console.log(`New dream added.`);
      location.reload("/dreams");
    });
  });
})