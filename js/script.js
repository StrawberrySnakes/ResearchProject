
function toggleNav() {
    console.log('toggleNav function called');
    var links = document.getElementById("navLinks");
    var topnav = document.querySelector(".topnav");
    topnav.classList.toggle("active");

    // Check if links are currently visible
    var linksVisible = window.getComputedStyle(links).getPropertyValue('display') !== 'none';

    // Toggle the visibility of the links
    links.style.display = linksVisible ? 'none' : 'flex';
}


// JavaScript to toggle content
const aiRadio = document.getElementById('ai');
const vrRadio = document.getElementById('vr');
const aiContent = document.getElementById('aiContent');
const vrContent = document.getElementById('vrContent');

function toggleLabelStyles() {
    labels.forEach(label => {
        if (label.querySelector('input').checked) {
            label.classList.add('checked');
        } 
        else {
            label.classList.remove('checked');
        }
    });
    }

aiRadio.addEventListener('change', () => {
aiContent.style.display = aiRadio.checked ? 'block' : 'none';
vrContent.style.display = vrRadio.checked ? 'block' : 'none';
toggleLabelStyles();
});

vrRadio.addEventListener('change', () => {
aiContent.style.display = aiRadio.checked ? 'block' : 'none';
vrContent.style.display = vrRadio.checked ? 'block' : 'none';
toggleLabelStyles();
});

window.addEventListener('load', () => {
    vrContent.style.display = 'none';
    });




// document.getElementById("links").addEventListener("click", clickMenu)

// function clickMenu() {
//     let nav = getNav()

//     for(let i = 0, l = nav.classlist.length; i < l; i++) {
//         if(nav.classList[i] === "shown") {
//             nav.classList.remove("shown");
//             return;
//         }
//     }

//     nav.classList.add("shown")

// }


// function getNav(){
//     let navElements = document.getElementsByTagName("nav")
//     if(navElements.lenth <=0) {
//         console.error("There was an error")
//     } 

//     return navElements[0]
// }




