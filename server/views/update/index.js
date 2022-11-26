// image add elememt
const addForm = document.getElementById("addForm");
const addInp = document.getElementById("file");
const addTitle = document.getElementById("title");
const addDescription = document.getElementById("description");
const paramsId = window.location.href.split("/")[4].toString();

// add image functionality
addForm.addEventListener("submit",(e) => {
    e.preventDefault();
    let title = addTitle.value;
    let description = addDescription.value;
    let imgFile = addInp.files[0];
    
    // fetch patch method to update the items according to input field
    if (title) {
        fetch(`http://localhost:3000/update/title/${paramsId}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({title: title})
        }).then((res) => {
            return res.json();
        }).then((data) => {
            if (data.success) {
                console.log(data);
                alert("Title Updated");
            } else {
                console.log("Error white updating title");
            }
        })
    }

    if (description) {
        fetch(`http://localhost:3000/update/description/${paramsId}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({description: description})
        }).then((res) => {
            return res.json();
        }).then((data) => {
            if (data.success) {
                console.log(data);
                alert("Description Updated");
            } else {
                console.log("Error white updating title");
            }
        })
    }

    if (addInp.files[0]) {
        let formData = new FormData();
        formData.append("file",addInp.files[0]);
        fetch(`http://localhost:3000/update/file/${paramsId}`,{
            method: "PATCH",
            body: formData
        }).then((res) => {
            return res.json();
        }).then((data) => {
            if (data.success) {
                console.log(data);
                alert("Image Updated");
            } else {
                console.log("Error while updating image");
            }
        })
    }

});