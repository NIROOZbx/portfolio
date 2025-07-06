document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(el => new bootstrap.Tooltip(el));
function sendMail(){
    var params=
    {
    name:document.getElementById("name").value,
    email:document.getElementById("email").value,
    message:document.getElementById("message").value

    }
    const serviceId="service_7h62mw6"
const templateId="template_kxgsgj6"

emailjs.send(serviceId,templateId,params).then(
    res=>{
        document.getElementById("name").value="";
        document.getElementById("email").value="";
        document.getElementById("message").value="";

        console.log(res);
        alert("Your message send successfully");
    })
.catch(err=>console.log(err))

}

