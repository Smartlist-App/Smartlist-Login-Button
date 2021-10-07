# Smartlist Login Button
## Integrate a "Login with Smartlist" button in your project!

### How to Use
```html
<!DOCTYPE html>
<html>
  <head>
  </head>
  <body>
    <div id="loginBTN"></div>
    <script>
      window.addEventListener('load', () => {
        var smartlistLogin = new SmartlistApiButton(document.getElementById('loginBTN'), {
          // Required
          authURI: "https://smartlist.ga",
          /* 
          For security reasons, you'll have to make a POST request from your server end, so that no one can see your API token. Enter the filename here.
          */
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
