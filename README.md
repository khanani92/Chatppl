# Chatppl
It Hybrid Mobile Application built using Ionic Frame Work. Its a Chat application which allow user to find and add people near them using map and chat with them. 

# Features 
- User can logined using their Facebook and Google Plus accounts.
- User can find people near them using map and can send request to them
- User can synchronize their contacts in the app and will be able to chat with their contacts.
-  User will be notified when someone is online in his contacts list is near user location.

# Plug-in Used 
 I am thankful to ngCordova  developers for developing  these easy to use plugin. Plugin used in this app are as following:
- Social plug-in for Facebook and Googel+ Login.
- In-app browser 
- GeoLocation (used to get and watch user location)
- Contacts (used to get users contacts info)

# Development Environment Setup

 Pre-requisites:
 -  Node.js
 - Cordova
 - Ionic

Install  **NodeJS** x64 distributions from its websites.

To install Cordova:

```bash
$ npm install cordova -g
```

To install Ionic

```bash
$ npm install ionic -g
```

# Plug-in Installation 

To install In-App Browser

```bash
cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-inappbrowser.git
```

To install GeoLocation

```bash
cordova plugin add cordova-plugin-geolocation
```

To install Contacts 

```bash
cordova plugin add cordova-plugin-contacts
```


# Runing Application.
 
Move to the Project Directry

```bash
$cd projectDirectry
```

- Adding Android Platform
 
```bash
$ionic platform add android
```

- Adding ios Platform
 
```bash
$ionic platform add ios
```

- Running in Browser
 
```bash
$ionic serve
```

- Running in emulator 
 
```bash
$ionic emulate android/ios
```

- Deploying app in mobile connected to computer via usb cable
 
```bash
$ionic run android/ios
```

- Create applcaiton file i.e .apk,etc.
 
```bash
$ionic build android/ios
```
#License
MIT





 
