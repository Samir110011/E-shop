function myFunction() {
  var x = document.getElementById("myInput");
  var a = document.getElementById("myInput-2");
  var y = document.getElementById("hide-password");
  var z = document.getElementById("show-password");
  if (x.type === "password") {
    x.type = "text";
    a.type = "text";
} else {
    x.type = "password";
    a.type = "password";
}
   if (y.style.display === "none") {
    y.style.display = "block";
    z.style.display = "none";
} else {
    y.style.display = "none";
    z.style.display = "block";
}
  if (x.type ==="text") {
    a.type ==="text"
} else{
    a.type ==="password"
  }
}