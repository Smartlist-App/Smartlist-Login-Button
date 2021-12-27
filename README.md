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
        appId: "f05210c5b4263f0ec4c3995bdab458d81d3953f354a9109520f159db1e8800bcd45b97c56dce90a1fc27ab03e0b8a9af8673747023c406299374116d6f966981",
        popup: true,
        callback() {
          /* Make sure to verify the session is valid after the popup is closed!*/
          console.log("Closed popup")
        }
      })
    </script>
  </body>
</html>
```
