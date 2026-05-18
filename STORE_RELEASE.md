# Store release checklist

## What is prepared

- Capacitor configuration for Android and iOS: `capacitor.config.json`.
- Vite build pipeline for the static site: `npm run build`.
- AdMob banner integration: `src/mobile-ads.js`.
- PWA metadata and offline shell: `manifest.webmanifest`, `sw.js`.
- Privacy policy draft: `PRIVACY_POLICY.md`.
- Environment template for real AdMob IDs: `.env.example`.

## Build native projects

Install Node.js/npm, Android Studio, and Xcode on macOS for the iOS build.

```bash
npm install
cp .env.example .env
npm run build
npx cap add android
npx cap add ios
npx cap sync
```

Android can be built on Windows/macOS/Linux. iPhone/App Store builds require macOS with Xcode.

## AdMob setup before release

1. Create an app in AdMob for Android and another for iOS.
2. Create banner ad units for both platforms.
3. Replace values in `.env`:
   - `VITE_ADMOB_IS_TESTING=false`
   - `VITE_ADMOB_ANDROID_BANNER_ID=your Android banner ad unit`
   - `VITE_ADMOB_IOS_BANNER_ID=your iOS banner ad unit`
4. After `npx cap add android`, add this inside `android/app/src/main/AndroidManifest.xml` under `<application>`:

```xml
<meta-data
    android:name="com.google.android.gms.ads.APPLICATION_ID"
    android:value="@string/admob_app_id" />
```

5. Add the real Android AdMob App ID to `android/app/src/main/res/values/strings.xml`:

```xml
<string name="admob_app_id">ca-app-pub-xxxxxxxxxxxxxxxx~yyyyyyyyyy</string>
```

6. After `npx cap add ios`, add this inside the outer `<dict>` in `ios/App/App/Info.plist`:

```xml
<key>GADApplicationIdentifier</key>
<string>ca-app-pub-xxxxxxxxxxxxxxxx~yyyyyyyyyy</string>
<key>NSUserTrackingUsageDescription</key>
<string>Этот идентификатор используется для показа более релевантной рекламы.</string>
<key>SKAdNetworkItems</key>
<array>
  <dict>
    <key>SKAdNetworkIdentifier</key>
    <string>cstr6suwn9.skadnetwork</string>
  </dict>
</array>
```

## Google Play

```bash
npm run cap:sync
npx cap open android
```

In Android Studio:

- Set a release signing key.
- Build `app-release.aab`.
- Upload the AAB to Google Play Console.
- Complete Data safety: disclose advertising ID and ads.
- Link the privacy policy URL.

## App Store

```bash
npm run cap:sync
npx cap open ios
```

In Xcode:

- Set Bundle Identifier, Team, Signing, Version and Build.
- Archive and upload to App Store Connect.
- Complete App Privacy: disclose identifiers and advertising data used by AdMob.
- Link the privacy policy URL.

## Important

Do not publish with Google demo ad unit IDs. They are only for development and review testing.
