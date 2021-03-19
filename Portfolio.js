"using strict;"

// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX    Code for start button


// add eventlistenr
var startButton = document.getElementsByClassName('startContainer');


// when the start button is clicked...
startButton[0].onclick = function()
{
    // change the look of button
    document.getElementsByClassName('transition')[0].classList.add('start')
    
    // play door audio
    var sound = new Audio('Sci-fi-door-sound-effect.mp3')
    sound.play();
    
    
    // transition to main menu
    setTimeout(() => {  
        
        startButton[0].style.display = 'none';
        document.getElementById("main").style.display = "block";
        
                     
    }, 1000);
    
}

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX    Code for side bar

var sideMenu = document.getElementsByClassName('sideBarContentInside');
var title = document.getElementById("mainTitle");
var text = document.getElementsByClassName("mainText");

//add sounds on hover

for (var i = 0; i < sideMenu.length; i++)
    {
        sideMenu[i].addEventListener('mouseover', function(){
            new Audio('220208__gameaudio__click-pop-two-part.wav').play();
        })   
    }
    



// Click on home.
sideMenu[0].onclick = function()
{
     console.log("Home")    
    new Audio('237716__hydranos__beeph.mp3').play();
        
    title.innerHTML = "<h1>Home</h1>";
    text[0].innerHTML = "<p> <b>Welcome to the home page! Hello, my name is William Stobaugh, welcome to my portfolio! For the best experience, view on a desktop with fullscreen enabled.<br><br>This portfolio is all about what I have done, and a little about myself. You can navigate the portfolio using the menu on the left. Finally, you can check out my social media on the bottom right of the screen.  </b></p>"
    
}

// Click on about.
sideMenu[1].onclick = function()
{
     console.log("About")
    new Audio('237716__hydranos__beeph.mp3').play();
    
    title.innerHTML = "<h1>About</h1>";
    text[0].innerHTML = "<p> <b>Welcome to the about page! In this page I will get into a little more detail about myself. <br><br> A few of my many interests include programming, studying foreign languages, and 3D modeling!</b> <br><br><br> I'll start off with my language learning <br><br><br> <b>I have been studying Chinese for the past year and a half or so. My goal is to one day become fluent in the language. I started learning Chinese because some of my family is Chinese, a few of which do not speak English. Originally when I first started, many of my friends and even family doubted I could achieve this goal, however it is quite apparent now that I am within sight of this possibility.</b> <br><br><br>As for my programming <br><br> <b>Programming is currently a great interest of mine. Currently I know the languages Javascript, CSS, HTML, C, C#,Python, and Java. I have completed many projects, applications, and courses around this topic, I can confidently say I am quite passionate about my work. I am currently in a robotics club that has won national competitions. I'm a first year programmer for the robotics club which is apart of my school, Burlingame highschool (BHS).</b> <br><br><br><br><br><img src='BHS-logo.png'> </p> <p>The logo of my current highscool.</p> <br><br> <p>Finally lets move on to my 3D modeling hobby</p> <br><br>  <p><b>I originally got started with 3D modeling around two years ago and then stopped for a while, when the pandemic started I spent a lot more time developing this skill. I have been experimenting with many different art styles however I like doing cartoon based ones the most. Now I occasionally take up 3D modeling freelance jobs for fun and experience. Feel free to check out my content with the social media media icons on the bottom right.</b></p> <br>    <img src='william-stobaugh-toon1product.jpg' style='height: 40%; width:40%;  border-radius: 10px; box-shadow: 0 0 20px #453643;'> <br><br> <p>Image of one of my pieces</p>"
    
}

// Click on menu.
sideMenu[2].onclick = function()
{
     console.log("Projects")
    new Audio('237716__hydranos__beeph.mp3').play();
    
    title.innerHTML = "<h1>Projects</h1>";
    text[0].innerHTML = "<p> <b>Welcome to the projects page! In here, I will be presenting to you some of my past projects and my skillset. Feel free to check out the projects by clicking on their names.</b></p> <br><br><br> <a href='files/number/index.html'>Number facts lab</a> <br><br> <p><b>I have this lab as the first pick because it is a personal favorite of mine. During this lab I got to learn a lot about how XML requests work, quite a useful skill! The ability to understand XML requests can allow me to create a larger variety of websites which is quite important to say the least.</b></p> <br><br> <a href='files/array/index.html'>Array lab</a> <p><b>Although this lab was quite simple, it taught me how to use javascript to edit html. This skill was crucial in making this website. Knowing how to use javascript to change html deeply adds onto user interaction. </b></p><br><br> <a href='files/quote.html'>Quote web lab</a> <p><b>This lab is one of most most recent projects. Again, this lab was a test for my understanding of XML requests. It was quite fun to say the least. I often found myself fiddling through all the quotes as so my curiosity desired. </b></p>"
    
}
    
