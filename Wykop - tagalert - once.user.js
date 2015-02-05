// ==UserScript==
// @name            Wykop - tagalert - once
// @description     Powiadomienia dźwiękowe o nowych wpisach w tagu
// @version         20150105132000
// @author          dafork
// @namespace       http://github.com/freakone/wykop
// @grant           none
// @include         http://www.wykop.pl/tag/kochampatibodobrzetypuje/
// @run-at          document-end
// ==/UserScript==

(function(){
    
    var audio = document.createElement('audio');
    audio.setAttribute('src', 'http://freakone.pl/content/alert.mp3');
    
    var notif = 0;   
    
    wykop.isActiveWindow = function() { return true; };
    
    setInterval(function() {
        
        var o = document.querySelector("#newEntriesCounter").querySelector("b.red");
        
        if(o !== null)
        {
            var num = o.innerHTML.match(/\d*/);
            
            if(num.length == 1 && notif != num[0])
            {
                notif = num[0];
                audio.play();
            }
        }
        else
        {
            notif = 0;
        }
        
    }, 1000);
    
})();
