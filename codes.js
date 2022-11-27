
let links = document.getElementsByClassName("link");

function removeActive(){
    for(link of links){
        link.classList.remove("active");
    }
}

for (link of links){
    link.onclick = function(){
        removeActive();
        this.classList.add("active");
    }
}

function homeImage(){
    document.getElementById("image").style.backgroundImage = "url('home.jpg')";
}

function workImage(){
    document.getElementById("image").style.backgroundImage = "url('work.jpg')";
}

function blogImage(){
    document.getElementById("image").style.backgroundImage = "url('blog.jpg')";
}
function aboutImage(){
    document.getElementById("image").style.backgroundImage = "url('about.jpg')";
}
