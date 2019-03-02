// jquery for application pages. Goal: retrieve the data from forms and dream creation. 

$(() => {
    // create dreamer form jquery
    $("button").on("submit", (e) => {
        event.preventDefault(e);

        const name = $().val().trim();
        const email = $().val().trim();

        // input validation needed for the email address
        const emailReg = "^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$";

        if(!emailReg.test(email)){
            alert("Please enter a valid email address!")
        }    

        let newDreamer = {
            name: name,
            email: email,
            age: $().val(),
            sex: $().val()
        };
        $.ajax({
            url:"/api/dreamers",
            method:"POST",
            data: newDreamer
        }).then((results) => {
            console.log(`results\n`);
            console.log(`New dreamer added:\n${newDreamer.name}\n${newDreamer.email}\n${newDreamer.age}\n${newDreamer.sex}\n`);
        })

        res.redirect("/demo")
    }) 
})