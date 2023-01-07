

// image add elememt
const addForm = document.getElementById("addForm");
const addInp = document.getElementById("file");
const addName = document.getElementById("name");

// add image functionality
addForm.addEventListener("submit",(e) => {
    e.preventDefault();
    let name = addName.value;
    let imgRes = addInp.files[0].name;
    let date = new Date().toDateString();
    let id = "ldjlfkjdslkdfl;";
    let res = {
        name: name,
        imgUrl:imgRes,
        _id: id,
        Date: date
    }
    console.log(res);
    
});

// show images element
const imgContainer = document.querySelector(".images");

// add image div to ele images from testList list
testList.forEach((test) => {
    let div = document.createElement("div")
    div.className = "image";
    div.innerHTML = `
                <img src=${test.imgUrl} alt="gallery image" />
                <h3>${test.name}</h3>
                <p>Date: ${test.Date}</p>
                <div>
                    <button id="update" value=${test._id}>Update</button>
                    <button id="delete" value=${test._id}>Delete</button>
                </div>
    `;

    imgContainer.appendChild(div);
});

// update function
const updateBtns = document.querySelectorAll("#update");
updateBtns.forEach((update) => {
    update.addEventListener("click",(e) => {
        e.preventDefault();
        console.log("Updated");
    })
});

// delete function
const deleteBtns = document.querySelectorAll("#delete");
deleteBtns.forEach((del) => {
    del.addEventListener("click",(e) => {
        e.preventDefault();
        console.log("Deleted");
    })
})

