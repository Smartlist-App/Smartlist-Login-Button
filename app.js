let SmartlistApiButtonID = 1;
class SmartlistApiButton {
  constructor(el, options) {
    this.el = el
    this.options = options

    if(!el) {
      throw new Error("Element does not exist!");
    }
    if(!options.authURI) {
      throw new Error("Must specify Auth URI!");
    }
    document.getElementsByTagName("head")[0].insertAdjacentHTML("afterbegin", `
<style>
.smartlistLoginButton {border-radius:3px;padding: 0 20px;background: ${(options.backgroundColor ? options.backgroundColor : "#fff")}!important;border: 0;box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);cursor:pointer;line-height:45px;font-size:15px;transition:transform .2s, box-shadow .2s;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;color:${(options.fontColor ? options.fontColor : "#000")}}
.smartlistLoginButton:hover {box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);transform: none!important}
.smartlistLoginButton:focus-visible {outline:0;box-shadow: 0px 0px 0px 3px rgba(0,0,0,0.75);}
.smartlistLoginButton:active {transform:scale(.98);}

.boxStyle {box-shadow: none!important;border: 2px solid ${(options.backgroundColor ? options.backgroundColor : "#fff")}!important;background:transparent!important;color:${(options.backgroundColor ? options.backgroundColor : "#fff")}!important;}
.boxStyle:hover {background: rgba(200, 200, 200, .3)!important}
.boxStyle svg {fill: ${(options.backgroundColor ? options.backgroundColor : "#fff")}!important;}
</style>
`)
    var classes = "";
    if(options.style == "outline") {
      classes += "boxStyle";
    }
    var _data = `
<button type="button" class="${classes} smartlistLoginButton" onclick="window.location.href='https://smartlist.ga/dashboard/login.php?auth=true&appId=${options.authURI}'" id="SL_${SmartlistApiButtonID}">
<svg style="vertical-align: middle;margin-right: 10px;" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="${(options.iconColor ? options.iconColor : "#aaa")}" baseProfile="tiny" overflow="inherit" version="1.2" viewBox="0 0 50 50"><path d="M8.149 16.062h6.06l-.053 3.575-6.007 5.406v-8.981zm16.758-1.979L1 35.169 3.52 38l21.485-18.954L46.486 38 49 35.169 25.097 14.083 25 14l-.093.083z"/></svg>
Log in with Smartlist
</button>
`
    el.innerHTML=_data;
    return this;
  }
  login() {
    window.location.href = "https://smartlist.ga/dashboard/login.php?auth=true&appId="+ this.options.authURI;
  }
  delete(id) {
    document.getElementById('SL_'+id).outerHTML = ""
  }
}
window.addEventListener('load', () => {
  var smartlistLogin = new SmartlistApiButton(document.getElementById('loginBTN'), {
    // Required
    // Get auth code from dashboard
    authURI: "3c9ad55147a7144f6067327c3b82ea70e7c5426add9ceea4d07dc2902239bf9e049b88625eb65d014a7718f79354608cab0921782c643f0208983fffa3582e40",
    // Remove this to make the button another style
    // style: "outline",
    // Optional styles
    iconColor: "#fff",
    backgroundColor: "#212121",
    fontColor: "#fff",
  })
  // Automatically login when instance is created
  // smartlistLogin.login();

  // Delete a button (Index starts at 1)!
  // smartlistLogin.delete(1);
  })
