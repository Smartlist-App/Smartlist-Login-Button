/**
 * @param {el} el - The container of the button
 * @param {object} options - options
 */
class SmartlistApiButton {
  constructor(el, options) {
    this.el = el;
    this.options = options;
    if(!options.appId) throw new Error("App ID not specified!");
    const id = (() => { return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) { var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8); return v.toString(16); }) })();

    const css = `
<style>
  @import url('https://fonts.googleapis.com/css2?family=Outfit&display=swap');
  .SmartlistApiButton{
    outline: 0;
    --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    font-size: 15px;
    white-space: nowrap;
    background: #fff;
    max-width:100%;
    text-overflow:ellipsis;
    overflow:hidden;
    width: 250px;
    border: 1px solid #ccc;
    color: #505050;
    border-radius: 5px;
    line-height: 45px;
    padding: 0 15px;
    cursor: pointer;
  }
  .SmartlistApiButton svg {float: left;margin-top: 8px;}
  .SmartlistApiButton:hover,.SmartlistApiButton:focus-visible {
    background: #eee;
    color: #303030;
    border: 1px solid #bbb;
    --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  }
  .SmartlistApiButton:active {
    background: #ddd;
    border: 1px solid #303030;
    --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  }
</style>
`;
    document.head.insertAdjacentHTML("beforeend", css)
    const button = `
<button class="SmartlistApiButton" id="${id}">
	<svg style="vertical-align: middle;margin-right: 10px;" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" baseProfile="tiny" overflow="inherit" version="1.2" viewBox="0 0 50 50"><path d="M8.149 16.062h6.06l-.053 3.575-6.007 5.406v-8.981zm16.758-1.979L1 35.169 3.52 38l21.485-18.954L46.486 38 49 35.169 25.097 14.083 25 14l-.093.083z"/></svg>
	Sign in with Smartlist
</button>
`;

    const popupCenter = ({url, title, w, h}) => {
      // Fixes dual-screen position                             Most browsers      Firefox
      const dualScreenLeft = window.screenLeft !==  undefined ? window.screenLeft : window.screenX;
      const dualScreenTop = window.screenTop !==  undefined   ? window.screenTop  : window.screenY;

      const width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
      const height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

      const systemZoom = width / window.screen.availWidth;
      const left = (width - w) / 2 / systemZoom + dualScreenLeft
      const top = (height - h) / 2 / systemZoom + dualScreenTop
      const newWindow = window.open(url, title, 
                                    `
scrollbars=yes,
width=${w / systemZoom}, 
height=${h / systemZoom}, 
top=${top}, 
left=${left}
`)

      if (window.focus) newWindow.focus();
      
      return newWindow;
    }


    el.innerHTML = button;
    document.getElementById(id).addEventListener("click", () => {
      if(options.popup === true) {
        var win = popupCenter({url: `https://smartlist.ga/dashboard/login.php?auth=true&appId=${options.appId}&close`, title: 'xtf', w: '900', h: '600'})
        
        var timer = setInterval(function() { 
          if(win.closed) {
            clearInterval(timer);
            if(!options.callback) throw new Error("Must specify callback if popup is enabled")
            else options.callback(true)
          }
        }, 200);


      }
      else {
        window.location.href=`https://smartlist.ga/dashboard/login.php?auth=true&appId=${options.appId}`;
      }
    });
  }
}
