# Smartlist Login Button
## Integrate a "Sign in with Smartlist" button in your project!

### Installation
```html
<script src="https://cdn.jsdelivr.net/gh/Smartlist-App/Smartlist-Login-Button@2.5.0/app.min.js" async></script>
```
```html
<script src="https://cdn.jsdelivr.net/gh/Smartlist-App/Smartlist-Login-Button@2.5.0/app.js" async></script>
```

### How to Use
```html
<!DOCTYPE html>
<html>
  <head>
  </head>
  <body>
    <div id="oauth"></div>
    <script src="/path/to/app.min.js"></script>
    <script>
      let Auth = new SmartlistAuth('your_api_token');
      Auth.render('#oauth', {
        popup: true,
        // size: "small",
        // theme: "dark",
        // rounded: true,
        callback: () => console.log("Closed popup. Verify that the user is logged in from your server")
      })
    </script>
  </body>
</html>
```
