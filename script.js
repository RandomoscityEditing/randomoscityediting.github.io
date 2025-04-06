function contactMe(){

    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        message: document.getElementById("message").value,
    };

const serviceID = "service_itcm71n";
const templateID = "template_gw5yz1o";

emailjs.send(serviceID,templateID,params)
.then(
    res =>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Your email has been sent. Thank you!");

    })
    .catch(err=>console.log(err));
}
