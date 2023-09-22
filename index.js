function add()
{
    var x = document.getElementById("count")
    document.getElementById("count").innerText=parseInt(x.innerText)+1
}

function save()
{
    var x=document.getElementById("count")
    document.getElementById("menu").innerHTML="Total Entries of today :"
    document.getElementById("count").innerHTML=parseInt(x.innerText)
}