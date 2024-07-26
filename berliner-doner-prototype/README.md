# Website Prototype - Berliner Döner

## Overview

Berliner Döner is a website that celebrates the **Döner Kebab**, a hybrid German-Turkish food, which originated in **Berlin** in the 1970s thanks to the genius of **Turkish migrants**. 

The Berliner Döner website consists of **five** pages:

* **Landing Page**
* **About Page**
* **Döner Spots Page**
* **Neighbourhoods Page**
* **Social Page**

The desktop version was created using the dimensions of **1512 x 775** and the responsive mobile version should be adjusted to **400 x 775** for optimal viewing experience. 

## Landing Page

### Mockup

![Mockup Landing page](/docs/mockup-landing.png)
![Mockup Footer element](/docs/mockup-footer.png)

### Prototype Desktop

![Prototype Landing page](/docs/proto-landing.jpg)

### Prototype Mobile

<img src="/docs/proto-mobile-landing.jpg" alt="Prototype Landing mobile page" width="200"/>

#### Reflections

* Applied the **same header and navigation menu to all pages** instead of having a unique style just on the landing page. This is based on Canva's advice, which highlights the importance of **maintaining a consistent, visual hierarchy** (“20 Web Design Principles to Follow,” n.d.).
* I wanted to **avoid using JavaScript** to create the **responsive mobile header and navigation menu** and used the code shared by **Jones Joseph** on _Codepen_ (“Pure CSS Responsive Navbar,” n.d.). The **HTML and CSS only code** works by hiding an input checkbox from the user and masking it with a menu icon, which I changed to a **kebab icon** like in my mockup.
* As well as adding a **link focus state** for keyboard users (Monus, 2018), I also implemented some code from the NC State University for keyboard users to skip to the main content instead of having to go through each navigation menu item (“Skip to Main Content – IT Accessibility,” n.d.). This was then **hidden via CSS code** to only appear when the tab key was navigating through the website.  
```HTML
<a class="skip-main" href="#main"><h3>Skip to main content</h3></a>
```
```CSS
/* this hides the skip to main content link and only reveals it when it detects the tab key being used for accessibility purposes */
a.skip-main {
  position: fixed;
  top: 0;
  transform: translate(100%, -100%);
}

a.skip-main:focus {
  /* transition will add a subtle animation when this link becomes active or focused */
  transition: transform 0.4s;
  transform: translate(100%, 120%);
}
```
* **Shortened** the label text _Your Email Address_ to _Your Email_ in the **footer** to **consistently match** the other **label texts**.
* Moved the _*Required Fields_ to the top below the _Contact_ headings so that the user can **see it immediately** and understand what is asked of them.
* After researching more about **accessibility**, I wrote more **descriptive text** for the buttons, so that _Submit_ became _Submit your message_ (“Write Descriptive Link Text - Access Guide,” n.d.).
* I **removed** the **_Site Links_** section, which was originally from the mockup, because it made it difficult to fit in all the content and, given that I made the **header sticky**, appeared unneccessary for this microsite.
* **Feedback** from my Web Design submission revealed that I needed to **pay more attention** to **text size**, **alignment** and **spacing** for clearer visual hierarchy. I addressed this by assigning clear and distinct differences between the headings in the **CSS** as in the example below:
``` CSS
html, body {
  font-family: 'Open Sans', sans-serif; 
  background-color: #E15148;
}

h2 {
  /* using rem unit as this scales more responsively */
  font-size: 2rem; 
  /* this font weight is equivalent to ExtraBold */
  font-weight: 800;
}

h3 {
  font-size: 1.5rem; 
  /* this font weight is equivalent to Bold */
  font-weight: 700;
}
```
* The **Brutalist-inspired grid layout** was very hard to get my head around at first, as it involved a lot of manual code amendments since the borders overlap each other and outlines proved to be a difficult solution. I mainly used **CSS grid** to create the layout and **CSS flexbox** to style the content within the grids as seen below:
```CSS
.landing-main {
  display: grid;
  /* using this method to achieve equal-width columns */
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

/* used flexbox instead to center the content within the sections */
.landing-left {
  height: 80vh;
  display: flex;
  /* added center property on headings specifically so they remain in the center even when screen is resized */
  text-align: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  /* to avoid double borders, hide one border side that overlaps with another */
  border: 0.5rem solid black;
  border-top: 0;
}
```
* Checked that the **text and background colours** pass the contrast test in order to meet accessibility guidelines via the **Web AIM Contrast Checker** (“WebAIM: Contrast Checker,” n.d.).
 
## About Page

### Mockup

![Mockup About page](/docs/mockup-about.png)

### Prototype Desktop

![Prototype About page](/docs/proto-about.jpg)

### Prototype Mobile

<img src="/docs/proto-mobile-about.jpg" alt="Prototype About mobile page" width="200"/>

#### Reflections

* Added an _About_ section above the Berlin, Döner and Turkey facts grid with a **clear introduction and overview** after receiving the following user feedback:
> The landing page makes you curious what exactly Berliner Döner is, but the About page does not properly explain and expects me to understand by reading the different columns.
* **Feedback** from my Web Design submission also revealed more focus on what **text is really required** given that it is a microsite and **more emphasis on bolding** or colour highlighting to bring out **keywords**. Therefore, I **reduced the amount of text** in the _About_ columns and made **keywords bold** across all text, also on the other pages.
* From the header, I **removed the additional website title** on the left, as I felt it was enough to **underline the active page link**. I did this by creating an **_active-item_ id** in the HTML and styling this in the CSS as below: 
```HTML
<ul aria-label="main menu links" class="nav-link-items">
  <li class="navbar-item" id="active-item"><a href="about.html"><h3>About</></h3></a></li>
```
```CSS
/* ensuring that it is obvious to the user which page they are currently on  */
#active-item {
  text-decoration: underline;
} 
```
* I applied **aria-labels** to some of the HTML code as a **text alternative** for non-visible text elements on screen (“Aria-Label - Examples and Best Practices,” n.d.). I followed the labelling guidelines to **avoid screen readers double announcing the element's role**, as per the example below:
```HTML
<a href="social.html"><button class="deals-button" aria-label="Click this to">Get Döner Deals!</button></a>
```
* Made the column text content **scrollable** and **hid the overflow** for easier **responsiveness** across different screens and applied **accessibility features** so that keyboard users can access the text and screen readers can read it out (“Overflow,” n.d.). 
```HTML
<!-- adding this feature for accessibility when scrolling with a keyboard -->
<section tabindex="0" role="region" aria-labelledby="about-berlin-text" class="about-text">
```
```CSS
.about-text {
  height: 68vh;
  border-left: 0.5rem solid black;
  white-space: pre-line;
  background-color: white;
  /* hiding the excess text that exceeds the container height and added scroll functionality so the user can still scroll within the boxes */
  overflow: hidden scroll;
}
```
* Used **:nth-of-type() CSS pseudo-class selector** to add background colours to the title and caption sections in an **odd** and **even pattern**:
```CSS
.about-grid article:nth-of-type(odd) figure:nth-of-type(2) {
  background-color: #48D8E1;
}

.about-grid article:nth-of-type(even) figure:nth-of-type(2) {
  background-color: #F9DC5C;
}
```

## Döner Spots Page

### Mockup

![Mockup Döner Spots page](/docs/mockup-spots.png)

### Prototype Desktop

![Prototype Döner Spots page](/docs/proto-spots.jpg)

### Prototype Mobile

<img src="/docs/proto-mobile-spots.jpg" alt="Prototype Döner Spots mobile page" width="200"/>

#### Reflections

* I used the **Google My Maps** feature to create the custom map and embedded the HTML code. One obstacle I encountered was that the user scrolling down the screen (if map is full-screen) or hovering over the map resulted in immediate interaction, which could be annoying for the user. I researched counter methods to this and discovered an **overlay technique** by **Tania Rascia** on her web development blog (Rascia, 2017), which only lets the user interact with the map by actively clicking on it. Interestingly, using **vh** as a unit did not work for the HTML or CSS, so I resorted to **px** for these. Below is the HTML and CSS:
```HTML
<section class="spots-map-box" aria-label="map" Tabindex="0">
  <!-- Embedded this code from Tania Rascia's blog in order to avoid the user zooming into the map by accident when trying to scroll down the page (“Prevent Mouse Scroll from Zooming on Embedded Google Maps,” n.d.)-->
  <section class="spots-map-overlay" onclick="style.pointerEvents='none'"></section>
  <!-- Embedded this made I created using Google My Maps -->
  <iframe id="spots-map-iframe" src="https://www.google.com/maps/d/embed?mid=1UmtbNNJkxOIaC1HQD052AcUZ6-qdnG4&ehbc=2E312F" width="100%" height="610" frameborder="0" style="border:0" allowfullscreen></iframe>
</section>
```
```CSS
.spots-map-overlay {
  position: relative;
  width: 100%;
  height: 610px;
  top: 610px;
  margin-top: -610px;
  z-index: 1;
}
```
* The **Döner spots carousel** was a daunting challenge, as I wanted to create it without resorting to JavaScript. Luckily, I came across a _Medium_ article by **Jennifer Wjertzoch**, who made a **carousel using HTML and CSS only** (Wjertzoch, 2021). I adapted this code for my design. This also meant that I was not able to design the left and right arrows on the side of the carousel. Instead, I added the **numbered navigation element** underneath for the user to click on to swipe to the next slide. 
* Added the **slide number overlay** using **absolute positioning** in the CSS:
```CSS
/* using absolute positioning to place the number in the top left corner over the image */
.slides-item-number {
  position: absolute;
  text-align: center;
  top: 0;
  left: 0;
  border: 0.5rem solid black;
  border-top: 0;
  border-left: 0;
}

```
* Reduced the **amount of content** for the **carousel slides** after researching the best practice for the amount of slides. According to Zubarieva (2022), three to five slides are ideal, as users lose focus on navigating through too many slides.
* **Removed** the **rounding** from the **images** and instead left them as rectangles with sharp corners in order to stay consistent with the **Brutalist style and theme**.
* **One aspect that I struggled with** and was **unable to address** was the fact that when the user clicks on one of the navigational buttons within the carousel while viewing the website at the top of the screen, the slides shuffle around, but the screen also moves downwards instead of staying in the same place. This is something I would have liked to tackle. 
* The **buttons** underneath the carousels have the **same dimensions** and **style** as the _Submit your message_ button in the footer, which was changed from the mockup. 

## Neighbourhoods Page 

### Mockup

![Mockup Neighbourhoods page](/docs/mockup-neighbourhoods.png)

### Prototype Desktop

![Prototype Neighbourhoods page](/docs/proto-neighbourhoods.jpg)

### Prototype Mobile

<img src="/docs/proto-mobile-neighbourhoods.jpg" alt="Prototype Neighbourhoods mobile page" width="200"/>

#### Reflections

* I **re-arranged the layout** from the mockup using a four-grid layout to a **two-grid layout**, as I found the space too tight for the text and images, and, therefore, limiting to the overall user experience.
* Similar to the _About page_, I added a **short discription** about these neighbourhoods and why these are of importance to the Berliner Döner website.
* I **moved the map to the bottom**, because I felt that the user should be able to get to know the neighbourhoods first before exploring their geographical locations.
* I applied the **same Google My Maps html** and **Tania Rascia's overlay code** as from the _Döner Spots_ page.
* In the **mobile version**, I swapped the **background colour** from the **yellow** to the **blue** in the **caption section** in order to better visually match the one-column layout based on the **Gestalt principles of similarity and contrast**.
* All **underlined, bold text items** are **active links** that the user can click on and which open up in a **new tab to a website**. For **accessibility purposes**, I made sure to have them **underlined**, as people with colour disabilities may not be able to perceive different text colours compared to underlined text. I also added a **hover colour change** to make the link element additionally more obvious. The colour is the same as the **primary red colour** of the website to **continue the style**. Below the HTML and CSS code:
```HTML
<li><p><b><a class="external-link" href="https://www.boboandchichi.com/2018/09/things-to-do-in-kreuzberg-berlin/" title="Blog about the Turkish Market" target="_blank">Turkish Market</a></b><p>Tuesdays and Fridays from 11 am to 6.30 pm</p></p></li>
```
```CSS
/* links that open up to new websites are underlined for accessibility purposes and to make it obvious to the user that this link is clickable */
a.external-link {
  text-decoration: underline;
}

/* link colour changes on hover to make it obvious that this is a clickable element */
a.external-link:hover {
  color: #E15148;
}
```

## Social Page 

### Mockup

![Mockup Social page](/docs/mockup-social.png)

### Prototype Desktop

![Prototype social page](/docs/proto-social.jpg)

### Prototype Mobile

<img src="/docs/proto-mobile-social.jpg" alt="Prototype Social mobile page" width="200"/>

#### Reflections

* The **image grid** was created by using the **CSS grid** and **flexbox layouts**. Instead of having margins around it, I decided to fill the entire grid area, as this better matched the overall style and look and is based on the **principles of Gestalt theory**.
* The original mockup included a **cropped hover caption**, which I changed to fill the whole image and created it by using **absolute positioning**, **background colour changes** depending on odd and even selectors, a **small transition** and **opacity effect** as below:
```HTML
<figcaption class="social-captions"><p><b><a class="external-link" href="https://www.instagram.com/p/CjbCjfdtBcK/" title="Link to Instagram Photo" target="_blank">Instagram: Renato Mattar</a></b></p></figcaption>
```
```CSS
.social-captions {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  opacity: 0;
}

/* using nth-child selector to change the background colour of the caption depending on whether they are odd or even */
.social-images:nth-child(even) figcaption {
  background-color: #48D8E1;
}

.social-images:nth-child(odd) figcaption {
  background-color: #F9DC5C; 
}

.social-captions:hover {
  /* once user hovers over image the caption appears and the user can click on it to reveal the person's instagram */
  opacity: 0.9;
  transition: opacity 0.2s ease;
}
```
* The **Döner Deals carousel** uses the same code as the carousel from the _Döner Spots page_, but includes some slight alterations, such as the **elimination of the image** and the **slide number being spread across the width** like a title instead of in the top left corner. I removed the image, because I felt that it was too much visual stimuli given that the image grid to the left already provided a lot of content for the user to look at. The slide number was changed to take over the width, because it visually interfered with the title of the deal and did not match the symmetry I was trying to achieve.
* In the **mobile version**, the image grid is amended to include a **one-column-grid layout** and the **height is fixed** with an exact number instead of auto in order to clip the content and allow the **user to scroll through the images** without them taking over the majority of the vertical mobile screen. 

## Closing Words 

Overall, creating this prototype website was quite a **difficult**, but also very **rewarding process**. It taught me to look beyond the materials taught during the lectures and tutorials and to work on my **problem solving skills**. The **responsiveness** was one of the trickier concepts to get my head around, but thanks to this final assignment, I feel a greater level of understanding of it than before. For my next website, I would consider **more planning**, such as considering more **accessibility** and **responsiveness** before coding, and I also would take more care in **structuring the CSS**, like creating more common elements to avoid having to re-use a lot of code. I also look forward to learning more about **JavaScript** in Advanced Web Design, as I purposefully avoided it for this assignment in order to challenge and strengthen my **HTML and CSS understanding**. 

## References

20 web design principles to follow. (n.d.). Retrieved September 24, 2022, from Learn website: https://www.canva.com/learn/20-web-design-principles-follow/

Aria-label—Examples and best practices. (n.d.). Retrieved November 11, 2022, from Aditus website: https://www.aditus.io/aria/aria-label/

Monus, A. (2018, October 26). Keyboard Accessibility Tips Using HTML and CSS. Retrieved October 29, 2022, from Web Design Envato Tuts+ website: https://webdesign.tutsplus.com/articles/keyboard-accessibility-tips-using-html-and-css--cms-31966

Overflow. (n.d.). Retrieved November 13, 2022, from Web.dev website: https://web.dev/learn/css/overflow/

Pure CSS Responsive Navbar. (n.d.). Retrieved November 11, 2022, from CodePen website: https://codepen.io/jo_Geek/details/xgbaEr

Rascia, T. (2017, April 5). Prevent Mouse Scroll from Zooming on Embedded Google Maps [Blog]. Retrieved November 8, 2022, from Tania Rascia website: https://www.taniarascia.com/prevent-mouse-scroll-from-zooming-on-embedded-google-maps/

Skip to main content – IT Accessibility. (n.d.). Retrieved October 29, 2022, from https://accessibility.oit.ncsu.edu/it-accessibility-at-nc-state/developers/accessibility-handbook/mouse-and-keyboard-events/skip-to-main-content/

WebAIM: Contrast Checker. (n.d.). Retrieved November 13, 2022, from https://webaim.org/resources/contrastchecker/

Write descriptive link text—Access Guide. (n.d.). Retrieved November 13, 2022, from https://www.accessguide.io/guide/descriptive-link-text

Wjertzoch, J. (2021, October 18). How to Make a Fully Accessible CSS-Only Carousel. Retrieved November 9, 2022, from Medium website: https://levelup.gitconnected.com/how-to-make-a-fully-accessible-css-only-carousel-40e8bd62032b

Zubarieva, O. (2022, October 4). Website Carousel Design Best Practices and Examples. Retrieved November 13, 2022, from SendPulse Blog website: https://sendpulse.com/blog/website-carousel-design