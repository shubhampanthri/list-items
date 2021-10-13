// // var button = document.getElementById('button');
// // button.addEventListener("mouseover", buttonclick);

// // var box = document.getElementById("box")
// // box.addEventListener("mouseout", buttonclick)

// // function buttonclick(b) {


// //     console.log("whats happening: " + b.type);



// // };
// // var output=document.getElementById("output");
// // var box = document.getElementById("box")
// // box.addEventListener("mousemove", buttonclick)
// // function buttonclick(a) {

// // box.style.backgroundColor="rgb("+a.offsetX+","+a.offsetY+",150)";
// //     output.innerHTML= "<h1>mousex:"+a.offsetX+"</h1><h1>mouseY:"+a.offsetY+"</h1>";
// //     document.body.style.backgroundColor="rgb("+a.offsetX+","+a.offsetY+",150)";



// // };
// //  var input=document.querySelector('input[type="text"]')
// //  input.addEventListener("submit" ,inputfunction);

// //  function inputfunction(e){
// //      console.log(":" +e.type)
// //  }
// // function inputfunction(e){
// e.preventDefault();
// //     console.log(":" +e.type) ;

// // }

var input = document.getElementById("input");
var submit = document.getElementById("submit");
var ul = document.querySelector('ul');
var li = document.getElementsByTagName("li");
input.addEventListener("keypress", keyfunction);

function keyfunction(e){
if (input.value.length > 1 && event.keyCode === 13) {
e.preventDefault();
    createlistelement();
}
else{console.log("fasle")};
};



submit.addEventListener("click", onclickevent);
function onclickevent(e) {
e.preventDefault();
    if (input.value.length > 1) {
        createlistelement();
    }
    else{return fasle};
}

function createlistelement() {

    var li = document.createElement("li")
    var button = document.createElement("button");
    ul.appendChild(li);
    li.appendChild(document.createTextNode(input.value));
    li.appendChild(button);
    button.innerHTML = "delete";
    input.value = " ";
    lievent();
    buttonevent();
}

function lievent() {
    for (i = 0; i < li.length; i++) {
        li[i].addEventListener("click", linethrough)
    }
}
function linethrough() {
    this.classList.toggle("sp")
}
function buttonevent() {
    for (i = 0; i < li.length; i++) {
        var button = document.querySelectorAll("li button");
        button[i].addEventListener("click", clearelement)
    }
};

function clearelement() {
    this.parentNode.remove();
};
// var button = document.getElementById('submit');
// var input = document.getElementById('input');
// var ul = document.querySelector('ul');
// var li = document.getElementsByTagName('li')
// button.addEventListener("click", myfunction9);
// input.addEventListener("keypress", myfunction10)


// function myfunction9(e) {
//     e.preventDefault();

//     if (input.value.length > 0) {

//         myfunction();

//     }

// };


// function myfunction() {
//     var li = document.createElement("li");
//     var button = document.createElement("button");
//     ul.appendChild(li);
//     li.appendChild(document.createTextNode(input.value))
//     li.appendChild(button);
//     button.innerHTML = "Delete"
//     input.value = "";
//     listevent();
//     buttonlistevent();


// }

// function listevent() {
//     for (i = 0; i < li.length; i++) {
//         li[i].addEventListener("click", linethrough)
//     }

// }
// function linethrough() {
//     this.classList.toggle("sp")
// }
// function buttonlistevent() {
    // var button = document.querySelectorAll("li button")
//     for (i = 0; i < li.length; i++) {
//         button[i].addEventListener("click", clearelement)
//     }

// }
// function clearelement() {
//     this.parentNode.remove();
// }
// function myfunction10(e) {

    // if (input.value.length > 0 && event.keyCode === 13) {
    //     e.preventDefault();

    //     myfunction();
    // };
