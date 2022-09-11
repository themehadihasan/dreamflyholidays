function validation() {
    const firstName = documrnt.getElementById("first-name").value;
    const email = documrnt.getElementById("email").value;
    const mobile = documrnt.getElementById("mobile").value;
    const package = documrnt.getElementByClassName("select").value;

    if(firstName == "") {
        document.getElementById("firstName").innerHTML = "** This field is required";
        return false;
    }
}