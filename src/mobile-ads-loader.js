function isNativeCapacitor() {
  return Boolean(
    window.Capacitor?.isNativePlatform?.() ||
    ["android", "ios"].includes(window.Capacitor?.getPlatform?.())
  );
}

if (isNativeCapacitor()) {
  import("./mobile-ads.js").catch((error) => {
    console.warn("Mobile ads module was not loaded:", error);
  });
}
