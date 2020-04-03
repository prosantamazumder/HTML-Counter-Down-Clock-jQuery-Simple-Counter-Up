# Counter Down Clock jQuery Simple Counter Up

**Live Demo**
[repositories.presstechit-institute.com](http://repositories.presstechit-institute.com/HTML-Counter-Down-Clock-jQuery-Simple-Counter-Up/)




### Counter Up HTML Markup 

<pre><code>
&lt;!--Single CounterUp Box--&gt;

&lt;div class="funfact"&gt;
	&lt;span class="funfact-icon"&gt;
		&lt;i class="fa fa-smile-o"&gt;&lt;/i&gt;
			&lt;/span&gt;
		&lt;div class="funfact-content"&gt;
			&lt;span class="odometer" data-count-to="78465"&gt;&lt;/span&gt;
			&lt;h5&gt;Happy Clients&lt;/h5&gt;
	&lt;/div&gt;
&lt;/div&gt;
</code></pre>


### Counter Down Clock HTML Markup 

<pre><code>
&lt;!-- Counter Down --&gt;

&lt;div class="promo-content funfacts-content"&gt;
	&lt;h2&gt;&lt;span&gt;40% &lt;/span&gt;off Our Next Seminer&lt;/h2&gt;
	&lt;div data-countdown="2021/10/01"&gt;&lt;/div&gt;
	&lt;div class="read-more"&gt;
		&lt;a href="#"&gt;Join Now&lt;/a&gt;
	&lt;/div&gt;
&lt;/div&gt;
</code></pre>

###  COUNTER UP ACTIVATION active.js

<pre><code>
    $(window).on('scroll', function () {
        function winScrollPosition() {
            var scrollPos = $(window).scrollTop(),
                winHeight = $(window).height();
            var scrollPosition = Math.round(scrollPos + (winHeight / 1.2));
            return scrollPosition;
        }
        var elemOffset = $('.odometer').offset().top;
        if (elemOffset < winScrollPosition()) {
            $('.odometer').each(function () {
                $(this).html($(this).data('count-to'));
            });
        }
    });
</code></pre>

### COUNTER DOWN active.js

<pre><code>
    $('[data-countdown]').each(function() {
        var $this = $(this), finalDate = $(this).data('countdown');
            $this.countdown(finalDate, function(event) {
            $this.html(event.strftime('<div class="countdown-body countdown-day"> <h2 class="countdown-count">%-D</h2> <h5>Days</h5></div><div class="countdown-body countdown-hour"> <h2 class="countdown-count">%-H</h2> <h5>Hour</h5></div><div class="countdown-body countdown-minutes"> <h2 class="countdown-count">%M</h2> <h5>Min</h5></div><div class="countdown-body countdown-seconds"> <h2 class="countdown-count">%S</h2> <h5>Sec</h5></div>'));
        });
    });
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
- [x] Version 1.4.3

##### Cradit
[Bootstrap](https://getbootstrap.com/)
[Odometer](https://github.hubspot.com/odometer/docs/welcome/)
[CountDown](https://Thanksto@FagnerMartinsBrack.com)
