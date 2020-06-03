function loadDoc(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200)
        {
            document.getElementById("Demo").innerHTML  = this.responseText;
        }
    };
    xhttp.open("Get","ajax_info.txt",true);
    xhttp.send();
}
xhttp();