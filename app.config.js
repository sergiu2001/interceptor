// app.config.js

import 'dotenv/config';

export default {
    name: "Terminus: Codex",
    slug: "interceptor",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: "myapp",
    userInterfaceStyle: "dark",
    splash: {
        image: "./assets/images/splash.png",
        resizeMode: "cover",
        backgroundColor: "#201b2c"
    },
    ios: {
        supportsTablet: true,
        runtimeVersion: {
            policy: "appVersion"
        }
    },
    android: {
        adaptiveIcon: {
            foregroundImage: "./assets/images/adaptive-icon.png",
            backgroundColor: "#ffffff"
        },
        package: "com.invictus.terminus",
        runtimeVersion: "1.0.0",
        googleServicesFile: process.env.GOOGLE_SERVICES_JSON
    },
    web: {
        bundler: "metro",
        output: "static",
        favicon: "./assets/images/favicon.png"
    },
    experiments: {
        typedRoutes: true
    },
    extra: {
        router: {
            origin: false
        },
        eas: {
            projectId: "77c9af83-3532-44f5-93d8-58dce67112e2"
        }
    },
    updates: {
        url: "https://u.expo.dev/77c9af83-3532-44f5-93d8-58dce67112e2"
    },
    plugins: ["expo-secure-store", "expo-router", "expo-font"]
};
