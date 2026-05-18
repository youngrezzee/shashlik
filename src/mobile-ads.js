import { Capacitor } from "@capacitor/core";
import {
  AdMob,
  BannerAdPosition,
  BannerAdSize
} from "@capacitor-community/admob";

const TEST_BANNER_IDS = {
  android: "ca-app-pub-3940256099942544/9214589741",
  ios: "ca-app-pub-3940256099942544/2435281174"
};

const PROD_BANNER_IDS = {
  android: import.meta.env.VITE_ADMOB_ANDROID_BANNER_ID,
  ios: import.meta.env.VITE_ADMOB_IOS_BANNER_ID
};

const adsEnabled = import.meta.env.VITE_ADS_ENABLED !== "false";
const isTesting = import.meta.env.VITE_ADMOB_IS_TESTING !== "false";

function getBannerId(platform) {
  if (isTesting) return TEST_BANNER_IDS[platform];
  return PROD_BANNER_IDS[platform];
}

async function requestConsent() {
  let consentInfo = await AdMob.requestConsentInfo();

  if (!consentInfo.canRequestAds && consentInfo.isConsentFormAvailable) {
    consentInfo = await AdMob.showConsentForm();
  }

  return consentInfo.canRequestAds;
}

async function showBanner(platform) {
  const adId = getBannerId(platform);
  if (!adId) return;

  await AdMob.showBanner({
    adId,
    adSize: BannerAdSize.ADAPTIVE_BANNER,
    position: BannerAdPosition.BOTTOM_CENTER,
    margin: 0,
    isTesting
  });

  document.documentElement.classList.add("has-native-ad-banner");
}

async function initAds() {
  const platform = Capacitor.getPlatform();
  if (!adsEnabled || !["android", "ios"].includes(platform)) return;

  await AdMob.initialize();
  const canRequestAds = await requestConsent();

  if (canRequestAds || isTesting) {
    await showBanner(platform);
  }
}

window.addEventListener("load", () => {
  initAds().catch((error) => {
    console.warn("AdMob initialization skipped:", error);
  });
});
