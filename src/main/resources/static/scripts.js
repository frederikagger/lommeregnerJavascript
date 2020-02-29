function fnumbers(tal) {
    var talfor = document.getElementById("input").value;
    if (talfor.length<10){
        document.getElementById("input").value = talfor+tal;
    }
}

function del() {
    document.getElementById("input").value = ""
}



function result() {
    var result = document.getElementById("input").value;
    var res = result.split(/[^0-9]/);
    var operater = result.split(/[x^+-]/);
    console.log(operater[0]);

    if (result.includes("+")){
        var i = parseInt(res[0])+parseInt(res[1]);
        document.getElementById("input").value = i;
    }

    if (result.includes("-")){
        document.getElementById("input").value = parseInt(res[0])-parseInt(res[1]);
    }

    if (result.includes("x")){
        document.getElementById("input").value = parseInt(res[0])*parseInt(res[1]);
    }

    if (result.includes("/")){
        document.getElementById("input").value = parseInt(res[0])/parseInt(res[1]);
    }
}