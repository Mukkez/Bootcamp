## CSS Extension SASS - Lev1_2_css-extension_sass_mixin

Eine Übung im SuperCode Bootcamp

## 🎓 Aufgabe

Konvertiere das CSS nach SASS!

- Verwende Nesting, wo es möglich ist
- Verwende Variablen, wo es möglich ist

**Der Code befindet sich im Kommentarbereich**.

WICHTIG

- Gehe das Stylesheet sorgfältig durch und verwende Mixins für gängige Styling-Blöcke!

```
<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <meta http-equiv="X-UA-Compatible" content="ie=edge">
   <link rel="stylesheet" href="css/style.css">
   <title>Mixins: Exercise 1</title>
</head>
<body>

   <header class="header">
       <h1>SCSS: Mixin!</h1>
       <h2>Convert the page to scss and create mixins for common blocks of styling</h2>
   </header>

   <nav class="nav">
       <ul class="nav_links">
           <li><a href="#">Home</a></li>
           <li><a href="#">About</a></li>
           <li><a href="#">Contact</a></li>
       </ul>
   </nav>

   <main class="main">

       <section class="section_text">
           <h3>Section</h3>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ipsa nam explicabo animi voluptates magnam, odio, eum laborum obcaecati ad pariatur culpa quasi placeat itaque. Molestiae vitae voluptates debitis similique?</p> <br>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ut quia delectus vel quidem iusto beatae! At doloribus possimus commodi vitae inventore, voluptas et? Maxime exercitationem vitae cum ipsum repudiandae.</p>

       </section>

       <section class="section_images">
           <img src="https://www.gstatic.com/webp/gallery/1.jpg" alt="Image of mountains">
           <img src="https://www.gstatic.com/webp/gallery/2.jpg" alt="Image of surfer">
           <img src="https://www.gstatic.com/webp/gallery/4.jpg" alt="Image of tree">
       </section>
    </main>

       <div class="aside">
        <aside class="first_aside">
            <h3>First Aside</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur voluptate veritatis eius dolore amet impedit consequatur ipsam ad natus illum mollitia enim distinctio assumenda dolor voluptates, pariatur, ipsum quae error.</p>
       </aside>

       <aside class="second_aside">
               <h3>Second Aside</h3>
               <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi voluptas molestiae, consectetur fugiat qui, deserunt sequi quod esse at quos perferendis ad odio? Maiores libero voluptatibus fugiat possimus, itaque rerum.</p>
           </aside>
           <aside class="third_aside">
                <h3>Second Aside</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi voluptas molestiae, consectetur fugiat qui, deserunt sequi quod esse at quos perferendis ad odio? Maiores libero voluptatibus fugiat possimus, itaque rerum.</p>
           </aside>
            <aside class="fourth_aside">
               <h3>Second Aside</h3>
               <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi voluptas molestiae, consectetur fugiat qui, deserunt sequi quod esse at quos perferendis ad odio? Maiores libero voluptatibus fugiat possimus, itaque rerum.</p>
           </aside>
       </div>

       <footer class="footer">
            <ul class="footer_links">
                <li><a href="#">GitHub</a></li>
                <li><a href="#">Codepen</a></li>
                <li><a href="#">LinkedIn</a></li>
            </ul>
        </footer>

</body>
</html>


* {
	margin: 0;
	border: 0;
	padding: 0;
	box-sizing: border-box;
}

.header {
	height: 6rem;
	text-align: center;
	font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
	padding: 1.5rem;
}

h1, h2 {
	font-size: 1rem;
}

.nav_links {
	margin-top: 1rem;
	display: flex;
	justify-content: center;
	margin-bottom: 1rem;
	background-color: rgba(0, 0, 255, 0.514);
}

li {
	padding:1rem;
	list-style: none;
}

a {
	text-decoration: none;
	color: black;
	font-family: Arial, Helvetica, sans-serif;
}
.main {
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;
}

.section_text > h3 {
	text-align: center;
}

.section_text, .section_images {
	margin: 1rem;
}

.section_images {
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;

}
img {
	height: 12rem;
	width: 18rem;
	margin: 0 0.5rem 1rem 0.5rem
}

.aside {
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	margin: 1rem;
}


.first_aside, .second_aside, .third_aside, .fourth_aside {
	border: 0.2rem solid rgba(0, 0, 255, 0.678);
	padding: 1rem;
	margin-bottom: 1rem;
}

.footer_links {
	display: flex;
	justify-content: center;
	margin-bottom: 1rem;
}
.footer {
	height: 5rem;
	margin-top: 1rem;
	background-color: rgba(0, 0, 255, 0.678);
}

@media screen and (min-width: 600px) {
	.section_images {
    	display: flex;
    	flex-flow: row wrap;
	}

	.section_text {
    	width: 70%;
	}

	.aside {
    	display: flex;
    	flex-flow: row wrap;
	}

	.first_aside, .second_aside, .third_aside, .fourth_aside {
    	width: 45%;
    	margin: 0.5rem;
	}
}


```

## 💻 Running

Zur Seite —> - [Lev1_2_css-extension_sass_mixin](https://mukkez.github.io/Bootcamp/tasks/Day_69/Lev1_2_css-extension_sass_mixin/)

<p align="left">
</p>

<h3 align="left">Languages and Tools:</h3>
<p align="left"> <a href="https://www.w3schools.com/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a>
<a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> 
<a href="https://www.w3schools.com/sass/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/izumin5210/emojipack-for-devicon/master/png/sass.png" alt="sass" width="40" height="40"/> </a> 
<a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="css3" width="40" height="40"/> </a> </p>
