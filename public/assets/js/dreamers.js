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
          $().on("submit", e => {
            event.preventDefault(e);

            let newDreamCreation = {
              dreamer: $().val(),
              title: $().val().trim(),
              body: $().val().trim(),
              mood: $().val(),
              category: $().val()
            };

            $.ajax({
              url: "/api/post",
              method: "POST",
              data: newDreamCreation
            }).then(() => {
              console.log("New dream added.");
              res.redirect("/api/dreams")
            });
          });
        })