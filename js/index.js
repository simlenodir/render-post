var elBox = document.querySelector(".wrapper");

// function creating post
function render(parametr) {
  for (let i = 0; i < parametr.length; i++) {
    var collapse = `
    <div class="user-box border">
    <div class="siv d-flex my-4 mx-2">
    <img class="user-img border-50" src="./images/staff-photo.jpg" alt="user-img" height="70" width="70">
    <div class="user-content mx-3 ">
    <h4 class="name ms-3">${parametr[i].user.name} </h4>
    <p class="user-nick ms-3">${parametr[i].user.username} </p>
    </div>
    </div>
    <h3 class="post-name">${parametr[i].title} </h3>
    <p class="posttext">${parametr[i].body} </p>
    </div>
<!-- bootstrap collapse  -->

<p>
<a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample${i}" role="button" aria-expanded="false" aria-controls="collapseExample">
  Link with href
</a>


</p>
<div class="collapse${i}" id="collapseExample${i}">

</div>

    `
       
     

    var elWrappCol = document.createElement("div");
    elWrappCol.innerHTML = collapse;
    elBox.append(elWrappCol);

    var boxWrappcol = document.querySelector(`.collapse${i}`);

    for (let j = 0; j < parametr[i].comments.length; j++) {
      var Boxwrapp = document.createElement("div");
      var colBox = `
      <div class="card card-body">
    <h>${ parametr[i].comments[j].name}</h>
    <p>${parametr[i].comments[j].body}</p>
    <p>${parametr[i].comments[j].email}</p>
      </div>
            `;
    Boxwrapp.innerHTML = colBox
    boxWrappcol.append(Boxwrapp);
    }
  }
}
render(posts);
