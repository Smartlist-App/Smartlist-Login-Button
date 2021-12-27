# Smartlist Login Button
## Integrate a "Sign in with Smartlist" button in your project!

### Installation
```html
<script src="https://cdn.jsdelivr.net/gh/Smartlist-App/Smartlist-Login-Button@2.0.0/app.min.js" async defer></script>
```
```html
<script src="https://cdn.jsdelivr.net/gh/Smartlist-App/Smartlist-Login-Button@2.0.0/app.js" async defer></script>
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
    <script>
      var button = new SmartlistApiButton(document.getElementById('loginBTN'), {
        appId: "YOUR_APP_ID",
        popup: true,
        callback() {
          /**
           * We'll redirect to the oAuth URI with the token. Use window.close() to close the login window after authorization is complete
           * Make sure to verify the session is valid after the popup is closed!
           */
          console.log("Closed popup")
        }
      })
    </script>
  </body>
</html>
```
