$('#reg-btn').on('click', (e) => {
    e.preventDefault()
    $(".hidden").each(function() {
        $(this).slideToggle("slow");
    })
    if ($("#login-btn").text() == "Login") {
        $("#login-btn").text("Registro");
        $("#question").text("¿Ya estas registrado?");
        $("#reg-btn").text("Login");
    } else {
        $("#login-btn").text("Login");
        $("#question").text("¿No te has registrado aún?");
        $("#reg-btn").text("Registro");
    }
});