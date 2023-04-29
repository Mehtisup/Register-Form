function pFunction() {
    var pass = document.getElementById("myInput2");

    if (pass.type === "password") {
        pass.type = "text";
    } else {
        pass.type = "password";
    }
}
