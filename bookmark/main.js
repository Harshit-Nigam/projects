//save bookmark
function savebookmark(e) {
    e.preventDefault();
    //get sitename and url
    var sitename = document.querySelector("#sitename").value;
    var siteurl = document.querySelector("#siteurl").value;

    
  
    console.log(sitename, siteurl);


    var bookmark = {
        name: sitename,
        url: siteurl,
    };
    
    console.log(bookmark);
    //store bookmark


    if(sitename === ""){
        alert("you must fill the siteName input");
    } else if(siteurl === ""){
        alert("you must fill the url input");
    }

    var bookmarks = [];
    //check local storage is empty 
    if (localStorage.getItem('bookmarks') !== null) {
        bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

    }
    // storage is not empty
    bookmarks.push(bookmark);

    //update book mark localstorage
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));

    //calling fetchmark function
    fetchbookmarks();

    //reset
    document.querySelector("form").reset();
    
 
}

//display bookmark from localstorage
function fetchbookmarks() {
    var bookmarks = JSON.parse(localStorage.getItem("bookmarks"));

    //select the output 
    var output = document.querySelector("#bookmarks");
    output.innerHTML = "";
    //loop for bookmark

    for (var i = 0; i < bookmarks.length; i++) {
        var div = document.createElement("div");
        var h3 = document.createElement("h3");
        h3.textContent = bookmarks[i].name;
        //creating visiting link for bookmark
        var a = document.createElement("a");
        a.href = bookmarks[i].url;
        a.className = "btn btn-success"
        a.textContent = "visit";

        //delete butto
        var button = document.createElement("button");
        button.className = "btn btn-danger";
        button.textContent = "Delete";

        // add eventlistner to delete

        button.addEventListener("click", function(e) {
            var name = e.target.parentElement.children[0].textContent;
            deletebookmarks(name);
        } )


        //append h3 a in div created
        div.appendChild(h3);
        div.appendChild(a);
        div.appendChild(button);

        //append div in output
        output.appendChild(div);

    }
}

function deletebookmarks(name) {
    //get book marks from local storage
    var bookmarks = JSON.parse(localStorage.getItem("bookmarks"));

    for (var i=0; i < bookmarks.length; i++){
        if (bookmarks[i].name === name){
            bookmarks.splice(i, 1);
            break;
        }
    }
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    fetchbookmarks();

}

// add evnt listner to submit
document.querySelector("form").addEventListener('submit', savebookmark);

//adding eventlistner for page loading
window.addEventListener("load", fetchbookmarks);