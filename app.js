window.popupCenter = function ({url, title, w, h}) {
  // Fixes dual-screen position                             Most browsers      Firefox
  const dualScreenLeft = window.screenLeft !==  undefined ? window.screenLeft : window.screenX;
  const dualScreenTop = window.screenTop !==  undefined   ? window.screenTop  : window.screenY;

  const width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
  const height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

  const systemZoom = width / window.screen.availWidth;
  const left = (width - w) / 2 / systemZoom + dualScreenLeft
  const top = (height - h) / 2 / systemZoom + dualScreenTop
  const newWindow = window.open(url, title, `
scrollbars=yes,
width=${w / systemZoom}, 
height=${h / systemZoom}, 
top=${top}, 
left=${left}
`)

  if (window.focus) newWindow.focus();
  
  return newWindow;
}
class SmartlistAuth {
  constructor(key) {
    this.key = key;
    console.log(this)
  }

  render(el, options = {}) {
  	document.querySelector("head").innerHTML += `<style>@import url('https://fonts.googleapis.com/css2?family=Outfit&display=swap'); .smartlist-oauth-button { display: inline-flex!important; align-items: center; gap: 10px; opacity: 1!important; position: static!important; border: 1.5px solid #ddd!important; font-size: 15px!important; width: 210px; color: black; outline: 0; text-decoration: none; height: 50px; padding: 0 15px; z-index: 999999999999999999999999999999999999999999999999999999!important; border-radius: 4px; font-family: "Outfit", sans-serif; user-select: none; cursor: pointer; } .smartlist-oauth-button:hover { border-color: #000!important; background-color: #eee; } .smartlist-oauth-button:active { border-color: #000; background-color: #ddd; } .smartlist-oauth-button:focus { border-color: #000!important; box-shadow: inset 0px 0px 0px 1px #000; } .smartlist-small-oauth-button span { display: none; } .smartlist-small-oauth-button { width: 50px; align-items: center; justify-content: center; height: 50px; padding: 0; } .smartlist-rounded-oauth-button { border-radius: 999px; } .smartlist-dark-oauth-button { background: #212121; color: #fff; border-color: #303030!important } .smartlist-dark-oauth-button:hover { background: #303030; border-color: #fff!important } .smartlist-dark-oauth-button:active { background: #404040 } .smartlist-dark-oauth-button:focus { border-color: #fff!important; box-shadow: inset 0px 0px 0px 1px #fff; }</style>`
  	options.callback = options.callback || function() {};
    const token = this.key;
    const element = document.querySelector(el);

    let button = document.createElement('a');
    button.classList = 'smartlist-oauth-button';
    if(options.size === "small") button.classList.add("smartlist-small-oauth-button");
    if(options.rounded === true) button.classList.add("smartlist-rounded-oauth-button");
    if(options.theme === 'dark') button.classList.add("smartlist-dark-oauth-button");
    button.href = 'javascript:void(0)';
    button.innerHTML = `<img src="${options.theme!=='dark'? 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAP8A/wD/oL2nkwAAAZNJREFUaN7t1r1rFEEUAPCfnBrTKCEao6IIxso0EqsgCCJWwcZUVqKNlZ3Ryj9A1ErSilrGTgyk8APELxQVJKQxglioYKMgSZEYi316x+XQC+y5Kd4PBo6ZeTNvZmdnj5RSSimllFJKLW2Isip1YQv60ItaU3svrmEcm6tOtpWjeIsZPMSuhradmMBilNtN7avCcSxgCR+wO+r34X7Uf8an+P0Ag1Un3byARfzARazDMF5FwjM4gsOYjro3OFh14r+N4ivOYj1GMBuJPsVQQ9/9eBxt73EMa6pewCGcUOz8ScVxWcIkBlr034M70ecLTmNtlQuooRtj+KZ4H26i/y8xW3E9+n7HBRVesxtxGfNRrmBTm3GXMBdxV9uMK1U/bqjv5Hkr28kunFN/crew7X8lP4C76mf5lOUfsXbULH939nY6+SE8iQlnlXObjOBdjPkMBzqV/HY8j4leK/c+b/x+vMCOdgNX8ujnFf99FnAGL0tcwEc8UhzPe5jCzxLH/6MbPZ0YOPTEHCmllFJKKaX0T78A+YhV3MZGJ4QAAAAASUVORK5CYII=':'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAltJREFUaEPtVzuPElEU/k7WBW02GmPUjcYYH4XGgtCT0LmJQk2xCUiFBdXyA2wsZksKKVBo7CggGrWahpZQaaWFMTFamKiNLzSfGTKzYSbgztwDaza50zD3cc75HpdzQXDIHznk+GEJ/G8HrQPWAaUC9ggpBVSHWwfUEioTWAeUAqrDrQNqCZUJrANKAdXhq3bgqI/whxrpggQaAmkAG8D0P8UfAF/8z6DUSZKfvIGInAIwfV/2Y0yg3+/vFovFnQCQiFwA8M4fnycZvE+nIutL42FMYDQaPclms7dmCFwE8BbAdZIv5yEUkRsA5q6ZMlomgZTjONuNRuNhAKbX692fTCY/S6XSvWCu2WzerdfrD0wBR+OMCYzH42eZTGbLPx5p13Vb+Xy+EhSoVCpb3W73hTcuFAr5wWDgBmvD4fBxLpfbBkAtEWMC7XZ7p1qt7opIiuSvWSAicgXAmwi4SyRDcyKyDuC3hoQxAQBrADzw3yLgzwL4uADUaZKhNRE5BsC4zWoIbJD8GgF/HEBobg4R07i5mpgSOEPyQwR8EiXTJEOqi8gmgFDOOEfLhMBlkq8j4I9ELrE4tddIhs6/iFwFEMq9X6JEBMrl8s1Op/N8md3Edd1Hs92rVqvdbrVaT/cDvnf/xN0IYJPk+1X0c8dx7szeHyJyDsBerX9hTOLAetAuV3GjArhG8pV/r6QATOKIm4SAl8/7onq/MD/HSW6w54TfUr/HjU1KIG7eA9tnCRyY1AsKWQesA0oF7BFSCqgOtw6oJVQmsA4oBVSHWwfUEioTWAeUAqrD/wKy4KcxALdBUAAAAABJRU5ErkJggg=='}" width="48" height="48"><span>Sign in with Smartlist</span>`;
    button.id = (Math.random() + 1).toString(36).substring(2);
    button.addEventListener("click", e => {
      var window = popupCenter({
        url: "https://smartlist.tech/app/login/?"+new URLSearchParams({
          oauth: true,
          ...options.popup === true && {close: true},
          token: token
        }),
        title: "Login with your Smartlist account",
        w: 500,
        h: 700
      })
    	var timer = setInterval(function() { 
        if(window.closed) {
          clearInterval(timer);
          options.callback();
        }
      }, 1000);
      
    })
    element.appendChild(button);
  }
}
