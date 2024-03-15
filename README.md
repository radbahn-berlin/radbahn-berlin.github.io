## currently active page
[# radbahn-berlin.github.io](https://radbahn-berlin.github.io/)https://radbahn-berlin.github.io/

## potentially interesting options  

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details  
-> easily toggle extra information (for example the transcript to keep it clean by default!)


## ACCESSIBILITY  

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio#accessibility_concerns  

follow the above (and do some extra research) for the obvious accessilibity options  

but also use own experience with neurodivergent pecularities to build an audioplayer I would want to use  
-> playback speed setting!  
-> 



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




## QR codes 

Use AQR (accessible QR) code -> easier to scan / more resistant to "shitty aim" 
for example: https://www.navilens.com/accessibleqrcode/ 





## legacy considerations (to be removed)

### 2024-03-14 framework, tech stack, decisions

try out https://github.com/ACMILabs/static-museum-audio-guide 

installed ruby, using this guide: https://jekyllrb.com/docs/installation/macos/  

I don' think I want to really go with jekyll, after all. It just seems to have way too much boiler plate and unneccessary complexity for such a small project. I'd rather know exactly what and why I'm doing what I'm doing, why I have certain files, etc.. 

Also checked out react, angular, django, and bootstrap and have come to the same conclusion. Just too much preconfigured stuff to deal with. 


New plan: go with basic html, css, js, but add some vue.js on top to simplify the reactive elements, instead of writing all of it from scratch. Might also add tailwind css later. And potentially go with vue's SFC, too. But for now, I'll keep it simple. 