## currently active page
[# radbahn-berlin.github.io](https://radbahn-berlin.github.io/)https://radbahn-berlin.github.io/

## note for Ks: currently working in conda: audioguide-vue-env on mac  

not the most obvious way to go with node, but I'm used to it, so I'm sticking with it!  
2024-03-18 
set up new env, installed (and updated) npm, vue cli  
create new vue project using default preset  



## potentially interesting options  

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details  
-> easily toggle extra information (for example the transcript to keep it clean by default!)

https://vueuse.org/core/useScrollLock/  
to disable scrolling on mobile version (not really necessary anymore)

hide the browser addres bar  
super funky hack by ChatGPT:  
'''
<script>
  window.onload = function() {
    // Scroll the page down by a small amount to hide the address bar
    window.scrollTo(0, 1);
  };
</script>
'''
Just simulates scrolling the page, which hides the bar on firefox, chrome for android. 
There has to be a better way to do this, but it is also kind of beautiful. 

use Nuxt ?  
https://nuxt.com/  

## ACCESSIBILITY  

### basic principles  

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio#accessibility_concerns  

follow the above (and do some extra research) for the obvious accessilibity options  

but also use own experience with neurodivergent pecularities to build an audioplayer I would want to use  
-> playback speed setting!  
-> 

### captions/transcript  

show the entire text, or only the actual captions?  
if captions only, add option to show full text (maybe via \<details> element)  

hide text / turn off captions by default?  
not showing the text at first would make for a cleaner and simpler look. might also get people to actually listen and engage, instead of quickly skimming over the text and moving on  



## audioplayer implementation  

https://github.com/goldfire/howler.js?tab=readme-ov-file#format-recommendations  
TLDR: use webm, with mp3 as fallback to provider full browser coverage  

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio 

<audio controls>
  <source src="myAudio.mp3" type="audio/mpeg" />
  <source src="myAudio.ogg" type="audio/ogg" />
  <p>
    Download <a href="myAudio.mp3" download="myAudio.mp3">MP3</a> or
    <a href="myAudio.ogg" download="myAudio.ogg">OGG</a> audio.
  </p>
</audio>

simply add multiple audio sources, the browser will read from top down until it finds something it can work with

### html5 audioplayer  

should be enough for our use-case  
but needs custom control elements  

### webaudio api  

https://webaudio.github.io/web-audio-api/  
we don't need the expanded functionality of this  

### VueUse

a large collection of pre-written vue functions, so I don't have to actually write *everything* from scratch  

for example:  
https://vueuse.org/core/useMediaControls/

### amplitude.js  

https://521dimensions.com/open-source/amplitudejs/docs/installation/initialization.html  

has a lot of prebuilt examples to extend / adapt to our needs  
https://521dimensions.com/open-source/amplitudejs/docs/examples/ 

### howler.js

https://github.com/goldfire/howler.js#documentation  
seems overkill for our usecase, but could be useful for the simplicity of some of the modules we do need  

https://github.com/goldfire/howler.js?tab=readme-ov-file#format-recommendations  
Format Recommendations
Howler.js supports a wide array of audio codecs that have varying browser support ("mp3", "opus", "ogg", "wav", "aac", "m4a", "m4b", "mp4", "webm", ...), but if you want full browser coverage you still need to use at least two of them. If your goal is to have the best balance of small filesize and high quality, based on extensive production testing, your best bet is to default to webm and fallback to mp3. webm has nearly full browser coverage with a great combination of compression and quality. You'll need the mp3 fallback for Internet Explorer.

It is important to remember that howler.js selects the first compatible sound from your array of sources. So if you want webm to be used before mp3, you need to put the sources in that order.


### Icons for Play/Pause/etc.  

https://icon-sets.iconify.design/?query=play  
IonIcons are nice and have everything we need

## language selection 

on first opening of any of the pages (via QR code or link), language selection is offered (demanded)  
selected is then stored in localStorage on browser -> remembered on future visits or when scanning other QR code

### display of languages  

two obvious options:  

1. by flag 
pro: looks good, easily recognisable
con: inherently political 

2. by words only
pro: neutral
con: looks boring

Will discuss this with the team, but in my opinion we should stick to words only. 

### order of languages

How to stay neutral in order of display? If we go "German, English, French, Turkish, Arabic", there seems to be an implied order of importance or bias, which we don't want to show/perpetuate. Any other order would have the same effect.  

Proposal: on load, simply randomise the order! Keep German on the top, as it will by far be the most selected, but the others can be arranged by rng. Every user will see a slightly different order. Removes bias. 

### track the choice for our report? 

Maybe add Option to track which languages were used? Simple language? 
-> figure out how important translation to Arabic, etc. really is!  

Could be quite an interesting insight. Should be easily done without having to use any cookies or tracking tools or services. 
A quick and dirty solution (probably not the final one) would be to simply increment counters in a log-file stored on the server. 


## Mobile / Desktop 

The app-like layout is really neat for phone screens, but would be really annoying on a big screen. Just making it reactive would look really dumb.  
For a big screen, it would make a lot more sense to show multiple / all the audiotracks on one page, instead of doing all the reloading.  

Desktop view could have cards or such?  
Or just all the tracks going from top to bottom (with \<details> giving the option to show the text). 
so... 
image on the left, audio player on the right, little "Hier aufklappen für den Text" thingy underneath (opens text below)

How best to achieve this?  
1) All in one file/page, check via js what screen is looking at the thing, then adjust accordingly
    Does not seem like a reasonable approach. Just bloats up everything and removes the cleanliness of the code that I'm specifically using the SPA approach for.  
    If it goes wrong, it really ruins the entire thing. 
2) On first load, detect screen size, then route to proper page in question  
    Make mobile the default, if something else, send to desktop view
3) Don't overthink it. QR codes will be read from smartphones, so no need to make it desktop friendly (it'll work, just not look too pretty)


How to check? 
User agent is common solution, but seems kind of shitty.  
Just check screen size...  
https://stackoverflow.com/questions/48515023/display-different-vuejs-components-for-mobile-browsers  
'''
isMobile() {
    if( screen.width <= 760 ) {
        return true;
    }
    else {
        return false;
    }
}
'''
or simpler: 
''' return screen.width <= 760 '''


### failsafe  

if things go awry, offer a menu item to change mobile/desktop view  


## QR codes 

Use AQR (accessible QR) code -> easier to scan / more resistant to "shitty aim" 
for example: https://www.navilens.com/accessibleqrcode/ 






---  


## legacy considerations (to be removed)

### 2024-03-14 framework, tech stack, decisions

try out https://github.com/ACMILabs/static-museum-audio-guide 

installed ruby, using this guide: https://jekyllrb.com/docs/installation/macos/  

I don' think I want to really go with jekyll, after all. It just seems to have way too much boiler plate and unneccessary complexity for such a small project. I'd rather know exactly what and why I'm doing what I'm doing, why I have certain files, etc.. 

Also checked out react, angular, django, and bootstrap and have come to the same conclusion. Just too much preconfigured stuff to deal with. 


New plan: go with basic html, css, js, but add some vue.js on top to simplify the reactive elements, instead of writing all of it from scratch. Might also add tailwind css later. And potentially go with vue's SFC, too. But for now, I'll keep it simple. 