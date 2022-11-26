
// show images element
const imgContainer = document.querySelector(".images");

// fetch the gallery data 
fetch("http://localhost:3000/show")
.then((res) => {
    return res.json();
}).then((data) => {
    console.log(data);

    if (data.success) {

        let testList = data.output;

        // add image div to ele images from testList list
        testList.forEach((test) => {
            let div = document.createElement("div");

            // here transform img buffer into img element;
            let buffer1 = test.imgFile.data.data;
            function _arrayBufferToBase64( buffer ) {
                let binary = '';
                let bytes = new Uint8Array( buffer );
                let len = bytes.byteLength;
                for (let i = 0; i < len; i++) {
                    binary += String.fromCharCode( bytes[ i ] );
                }
                return window.btoa( binary );
            }
            
            let mimetype = test.imgFile.contentType;

            div.className = "image";
            div.innerHTML = `
                        <img src="data:${mimetype};base64,${_arrayBufferToBase64(buffer1).toString("base64")}" />
                        <h3>${test.title}</h3>
                        <p>${test.description}</p>
                        <p>Date: ${test.uploadTime}</p>
                        <div>
                            <button id="update" value=${test._id}>Update</button>
                            <button id="delete" value=${test._id}>Delete</button>
                        </div>
            `;

            imgContainer.appendChild(div);

        });


        // delete function
        const deleteBtns = document.querySelectorAll("#delete");
        deleteBtns.forEach((del) => {
            del.addEventListener("click",(e) => {
                e.preventDefault();
                // fetch delete
                fetch(`http://localhost:3000/remove/${e.target.value}`,{
                    method: "delete"
                }).then((res) => {
                    return res.json();
                }).then((data) => {
                    if (data.success) {
                        console.log("Gallery Item Deleted");
                        alert("Item removed");
                        window.location.reload();
                    } else {
                        console.log("Error while removing item");
                    }
                })
            })
        });

        // removeall functionality
        const removeAll = document.getElementById("removeAll")

        removeAll.addEventListener("click",(e) => {
            // fetch removeall
            fetch("http://localhost:3000/removeall",{
                method: "delete"
            }).then((res) => {
                return res.json();
            }).then((data) => {
                if (data.success) {
                    alert("removed all items");
                    window.location.reload();
                } else {
                    console.log("Error while removing all items");
                }
            })
        })

        // update function
        const updateBtns = document.querySelectorAll("#update");
        updateBtns.forEach((update) => {
            update.addEventListener("click",(e) => {
                e.preventDefault();
                console.log("Updated");
                window.location = window.location.href + `update/${e.target.value}`;
            })
        });

    } else {
        console.log("Error fetcing the gallery data");
    }
})

// image add elememt
const addForm = document.getElementById("addForm");
const addInp = document.getElementById("file");
const addTitle = document.getElementById("title");
const addDescription = document.getElementById("description");
//const addName = document.getElementById("name");

// add image functionality
addForm.addEventListener("submit",(e) => {
    e.preventDefault();
    console.log("Submited");
    let formDate = new FormData();
    formDate.append("file",addInp.files[0])
    formDate.append("title",addTitle.value);
    formDate.append("description",addDescription.value);
    // add the gallery throught fetch post method
    fetch("http://localhost:3000/add",{
        method: "POST",
        body: formDate
    }).then((res) => {
        return res.json();
    }).then((data) => {
        if (data.success) {
            console.log(data);
            window.location.reload();
        }
    })

});






