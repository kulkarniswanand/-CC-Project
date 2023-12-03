function order()
{
    // document.getElementById('tb').style.visibility='visible';
    document.getElementById('ord').style.backgroundColor = "#fb8500";
}

// var ch=document.getElementById("check1");
// ch.addEventListener("onclick", function(){
//         alert("you have cliked");
// });

function checked(icon)
{
    var clikedRow=icon.closest('tr');
    var pendingtable=document.getElementById("tb1");
    var cloneRow=clikedRow.cloneNode(true);
    pendingtable.appendChild(cloneRow);
    clikedRow.parentNode.removeChild(clikedRow);


}