function changeOpinion(author,opinion) {
    var changed1 = document.getElementById("a"),
        changed2 = document.getElementById("b");
    
    changed2.innerHTML= author;
    changed1.innerHTML = opinion;
}
