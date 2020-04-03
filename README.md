# HTML Progress Bar

**Live Demo**
[repositories.presstechit-institute.com](http://repositories.presstechit-institute.com/HTML-Progress-Bar/)

### Progress Bar Markup HTML

<pre><code>
&lt;!--Skill Box--&gt;

&lt;div class="progress-box wow"&gt;
    &lt;div class="choose-text"&gt;
    &lt;h6&gt;REACT JS&lt;/h6&gt;
    &lt;p&gt;Pellentesque aliquam praesent nam ipanplaat cras sed a tristique morbi.&lt;/p&gt;
        &lt;/div&gt;
            &lt;div class="inner"&gt;
                &lt;div class="bar"&gt;
                    &lt;div class="bar-innner"&gt;
                    &lt;div class="bar-fill" data-percent="35"&gt;
                    &lt;span class="number"&gt;35%&lt;/span&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
</code></pre>

###  PROGRESS BAR active.js

<pre><code>
    /**!-------------------------------------------
        04. PROGRESS BAR LEVEL
    --------------------------------------------**/
    if( $('.progress-levels .progress-box .bar-fill').length){
        $('.progress-box .bar-fill').each(function() {
            var progressWidth = $(this).attr('data-percent');
            $(this).css('width',progressWidth+'%');
            $(this).children('.percent').html(progressWidth+'%');
        });
    }
</code></pre>

###   WOW JS INIT active.js
<pre><code>
  new WOW().init();
</code></pre>    

### Ask Any Question or if you need help contact me 24/7 we are ready support team.

[Facebook:](https://www.facebook.com/PMPROSANTA0)<br />
[Web:](http://presstechit-institute.com/)\
[Personal:](http://pm-prosanto.themefusions.com/)\
[Email Me:](mailto:prosantomazumder@gmail.com)\
[Linkedin:](https://www.linkedin.com/in/prosantomazumder/)\
[Twitter:](https://twitter.com/prosantomazumd1)\
[Instagram:](https://www.instagram.com/prosantomazumder/)\
[Codepen:](https://codepen.io/ProsantaMazumder)


### Changelog
- [x] Version 2.4.3

##### Cradit
[Bootstrap](https://getbootstrap.com/)
[WOW](https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js)
