const MIDTRANS_SNAP_URL =
  import.meta.env.VITE_MIDTRANS_IS_PRODUCTION === "true"
    ? "https://app.midtrans.com/snap/snap.js"
    : "https://app.sandbox.midtrans.com/snap/snap.js";

export const loadMidtransSnap = () => {
  return new Promise((resolve, reject) => {
    if (window.snap) {
      resolve(window.snap);
      return;
    }

    const script = document.createElement("script");

    script.src = MIDTRANS_SNAP_URL;
    script.setAttribute(
      "data-client-key",
      import.meta.env.VITE_MIDTRANS_CLIENT_KEY,
    );

    script.onload = () => resolve(window.snap);
    script.onerror = () => reject(new Error("Failed to load Midtrans Snap."));

    document.body.appendChild(script);
  });
};
