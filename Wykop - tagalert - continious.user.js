// ==UserScript==
// @name            Wykop - tagalert - continious
// @description     Powiadomienia dźwiękowe o nowych wpisach w tagu
// @version         20150105132000
// @author          dafork
// @namespace       http://github.com/freakone/wykop
// @grant           none
// @include         http://www.wykop.pl/tag/typydzika/
// @run-at          document-end
// ==/UserScript==

(function(){
    
    wykop.isActiveWindow = function() { return true; };
    
    var audio = document.createElement('audio');
    audio.setAttribute('src', 'http://freakone.pl/content/alert.mp3');
    
    setInterval(function() {
        
        var o = document.querySelector("#newEntriesCounter").querySelector("b.red");
        
        if(o !== null)
        {           
            audio.play();
        }
        
    }, 1000);
    
})();
