// jquery for application pages. Goal: retrieve the data from forms and dream creation.

$(() => {
    // create dreamer form jquery
    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        const name = $("input[name='dreamer_name']").val().trim();
        const email = $("input[name='email']").val().trim();

        console.log(`Name: ${name} || Email: ${email}`);

        // input validation needed for the email address
        const emailReg = RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/);
        
        if(!emailReg.test(email)){
            alert("Please enter a valid email address!")
        }    

        let newDreamer = {
            dreamer_name: name,
            email: email,
            age: $("input[name='age']").val(),
            gender: $("select[name='sex']").val()
        };
        $.ajax({
            url:"/api/dreamers",
            method:"POST",
            data: newDreamer
        }).then((results) => {
            console.log(`results\n`);
            console.log(`New dreamer added:\n${newDreamer.name}\n${newDreamer.email}\n${newDreamer.age}\n${newDreamer.sex}\n`);
        })
        
    })
})