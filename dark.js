//dark colors
dark_colors = ['black', 'white', 'yellow', 'navy'];

//light colors
light_colors = ['white', 'black', 'lightgrey', 'rgba(3, 6, 17, 0.685)', 'aquamarine', 'red'];

//Get dark mode to work
let button = document.getElementById('dark');
let light = 0;
button.addEventListener("click", function()
{
    if (light == 0)
    {
        document.body.style.background = dark_colors[0];
        document.body.style.color = dark_colors[1];
        let home = document.getElementById("home");
        home.style.background = dark_colors[0];
        home.style.color = dark_colors[1];
        let works = document.getElementById("works")
        works.style.background = dark_colors[3];
        let thx = document.getElementById("thx");
        thx.style.color = dark_colors[1];
        let ab1 = document.getElementById("ab1");
        let ab2 = document.getElementById("ab2");
        let ab3 = document.getElementById("ab3");
        ab1.style.color = dark_colors[2];
        ab2.style.color = dark_colors[2];
        ab3.style.color = dark_colors[2];
        light = 1;
    }
    else
    {
        document.body.style.background = light_colors[0];
        document.body.style.color = light_colors[1];
        let home = document.getElementById("home");
        home.style.background = light_colors[2];
        home.style.color = light_colors[3];
        let works = document.getElementById("works")
        works.style.background = light_colors[4];
        let thx = document.getElementById("thx");
        thx.style.color = light_colors[1];
        let ab1 = document.getElementById("ab1");
        let ab2 = document.getElementById("ab2");
        let ab3 = document.getElementById("ab3");
        ab1.style.color = light_colors[5];
        ab2.style.color = light_colors[5];
        ab3.style.color = light_colors[5];
        light = 0;
    }
})