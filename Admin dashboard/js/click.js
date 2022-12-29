function openClicked(){
    document.getElementById("sidebar").style.marginLeft = "0px";
    document.getElementById("navbar").style.marginLeft = "230px";
    document.getElementById("content").style.marginLeft = "240px";
    document.getElementById("navbar").style.marginRight = "-230px";
    document.getElementById("content").style.marginRight = "-240px";
    document.getElementById("close").style.display = "flex";
    document.getElementById("open").style.display = "none";
}

function closeClicked(){
    document.getElementById("sidebar").style.marginLeft = "-230px";
    document.getElementById("navbar").style.marginRight = "0px";
    document.getElementById("content").style.marginLeft = "10px";
    document.getElementById("navbar").style.marginLeft = "0px";
    document.getElementById("content").style.marginRight = "10px";
    document.getElementById("close").style.display = "none";
    document.getElementById("open").style.display = "flex";
}