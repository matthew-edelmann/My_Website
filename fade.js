//Make Matthew Edelmann fade in at the start
var opacity = 0;
window.onload = function reveal()
{
    var Matt = document.getElementById("Matthew");
    var E = document.getElementById("Edelmann");
    opacity = Number(window.getComputedStyle(Matt).getPropertyValue("opacity"));
    while(opacity<1)
    {
        opacity = opacity + 0.015;
        Matt.style.opacity = opacity;
        E.style.opacity = opacity;
    }
};


