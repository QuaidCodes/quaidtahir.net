function portfolio() {
    window.open( 
        "pages/portfolio/portfolio.html", "_blank"
    );
}

const theme = document.getElementById("theme");

theme.addEventListener('click', () => {

    theme.classList.toggle("darkTheme");

    if(theme.innerHTML == "Light Mode") {
        theme.innerHTML = "Dark Mode";
        
        // Body
        document.getElementsByTagName("body")[0].style.backgroundColor = "black";
        document.getElementsByTagName("body")[0].style.color = "white";
    } else {
        theme.innerHTML = "Light Mode";

        //Body
        document.getElementsByTagName("body")[0].style.backgroundColor = "white";
        document.getElementsByTagName("body")[0].style.color = "black";
    }

});

// Display Form to user 
document.getElementById("show-form").addEventListener('click', ()=>{
    document.getElementById("Form").style.display = "block";
});


// Submit Button
document.getElementById("submit-btn").addEventListener('click', (e)=>{
    document.getElementById("Form").style.display = "none";
    e.preventDefault();

});
