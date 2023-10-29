firebase commands list:

npm install firebase

npm install -g firebase-tools

firebase login

firebase init


firebase.json

{
  "hosting": {
    "site": "balmerelal",

    "public": "public",
    ...
  }
}

firebase deploy --only hosting:balmerelal