
/*for openning the text box when the collapsible bar is clicked*/

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
coll[i].addEventListener("click", function() {
this.classList.toggle("active");
var content = this.nextElementSibling;
if (content.style.display === "block") {
  content.style.display = "none";
} else {
  content.style.display = "block";
}
});
}

/*to close collapsible navbar once clicked*/
$('.navbar-collapse a').click(function(){
  $(".navbar-collapse").collapse('hide');
});


/*send email*/
function sendemail()
{
        var email = "contact.varathon@gmail.com";
        var subject = document.getElementById("form-Subject").value;
        var body = document.getElementById("form-text").value;
        document.getElementByID("SendMail").innerHTML='<a href="mailto:' + email + '?subject=' +subject+ '&body=' +body+ '" target="_blank">' + 'Envoyer votre message' + '<'+'/a>';
};
