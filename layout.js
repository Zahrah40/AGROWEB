function loadSection(id, file){
    fetch(file)
    .then(res => res.text())
    .then(data => document.getElementById(id).innerHTML = data);
}

loadSection("footer", "footer.html");