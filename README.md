# Smartlist Login Button
## Integrate a "Login with Smartlist" button in your project!

### Installation
```html
<script src="https://cdn.jsdelivr.net/gh/Smartlist-App/Smartlist-Login-Button@1.0.0/app.min.js" async defer></script>
```
```html
<script src="https://cdn.jsdelivr.net/gh/Smartlist-App/Smartlist-Login-Button@1.0.0/app.js" async defer></script>
```
```html
<script src="https://cdn.jsdelivr.net/gh/Smartlist-App/Smartlist-Login-Button@1.0.0/obfuscated.min.js" async defer></script>
```

### How to Use
```html
<!DOCTYPE html>
<html>
  <head>
  </head>
  <body>
    <div id="loginBTN"></div>
    <script src="/path/to/app.min.js"></script>
    <!-- If you want to be cool, use the "obfuscated.min.js" file instead -->
    <script>
       window.addEventListener('load', () => {
        var smartlistLogin = new SmartlistApiButton(document.getElementById('loginBTN'), {
          // Required
          // Get auth code from dashboard
          authURI: "9b71d224bd62f3785d96d46ad3ea3d73319bfbc2890caadae2d",
          // Optional styles
          iconColor: "#000",
          backgroundColor: "#fff",
          fontColor: "#000",
        })
        // Automatically login when instance is created
        // smartlistLogin.login();

        // Delete a button (Index starts at 1)!
        // smartlistLogin.delete(1);
        })
    </script>
  </body>
</html>
```
