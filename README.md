# HappyPayNPM
npm module for HappyPay

## Installation

For now, just clone the repo. We'll get it up on npm soon.

`git clone .....`

Then require it in your js file

`var happypay = require('./_path_/_to_/happypay.js);`

## Endpoints

### getKey()

Inputs: email, password
Outputs: key, secret

Retrieves your key and secret if you already have an account. If you dont have an account, creates a new one and returns a key/secret. Outputs get returned into a callback.

Note: We *dont* reccomend putting in a real password, auth details aren't being encrypted until they hit our api, do so at your own peril.

Usage:

```
happyPay.getKey(email, password, function(auth_details) {
   var key = auth_details.key;
   var secret = auth_details.secret;
}) 
```

### tokenize()
