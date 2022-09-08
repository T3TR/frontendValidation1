function validation(e) {

    e.preventDefault();

    let newTask = document.getElementById("newTask").value;

    if ( newTask.includes("<",">") == true ) {
        document.getElementById("newTaskError").style.display = "block";
        console.log("Failed to submit")
    }
    else{
        console.log("Submitted Successfully")
    }

    return false;
}