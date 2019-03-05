// demo page javascript 
$(() => {
          // filter jquery
          $().on("submit", e => {
            event.preventDefault(e);

            let writer = $().val();
            let mood = $().val();
            let category = $().val();

            let preChoices = [writer, mood, category];

            let choices = [];

            preChoices.forEach(element => {
              if (element != "") {
                choices.push(element);
              }
            });

            let filterChoices = {
              choices: choices
            };
          });

          // new dream submisssion
          $(".dream_create").on("submit", e => {
            event.preventDefault(e);

            let newDreamCreation = {
              dream_description: $("textarea[name=dream_description]").val().trim(),
              mood: $("input[name=mood]").val(),
              food: $("input[name=food]").val().trim(),
              hours_of_sleep: $("input[name=hours_of_sleep]").val(),
              category: $("select[name=tv_on]").val()
            };

            $.ajax({
              url: "/api/dreams",
              method: "POST",
              data: newDreamCreation
            }).then(() => {
              console.log("New dream added.");
              res.redirect("/api/dreams")
            });
          });
        })