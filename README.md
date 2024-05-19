This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

MovieFix Demo Video Link: https://drive.google.com/file/d/1Rs-KPG5HipHQwkzXeHo5hdaxxRyr5CBa/view?usp=sharing

MovieFix APK File: https://drive.google.com/file/d/1eVuum7BsluL7h8c9lyStjJ_r1GtpCQAI/view?usp=sharing

Note: Sometimes the API doesn't work well it returns `This site can't be reached`. This is why I'm attaching a video link for the preview if it does not work.

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till the "Creating a new application" step, before proceeding.

## Step 1: Clone this repo and install all necessary packages which are required

First, you will need to clone this repository

To clone this repository run the following command inside any directory.
```bash
git clone https://github.com/Niranjan-Baur/MovieFix.git
```
and then to install all the necessary packages, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm i
OR
npm install
```

## Step 2: Start the Metro Server

Then, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

OR

npm run debug
```

## Step 3: Start your Application

Please wait for a few moments depending on your system configuration. Let Metro Bundler run in its _own_ terminal with the following options.

```bash
i - run on iOS
a - run on Android
d - open Dev Menu
j - open debugger (experimental, Hermes only)
r - reload app
```
Note: `j - open debugger (experimental, Hermes only)` This option will only come if you start Metro using the `npm run debug` command from above.

### For Android

Then just press `a` in the terminal to run this project in your _Android Emulator_ or _Android Device_ (if it is connected to your machine)

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _Android Device_ shortly provided you have set up your emulator/simulator correctly.
