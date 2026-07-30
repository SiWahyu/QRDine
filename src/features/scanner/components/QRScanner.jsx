import { useState } from "react";
import { useNavigate } from "react-router";
import { QrCode, X } from "lucide-react";
import { Scanner } from "@yudiel/react-qr-scanner";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SCANNER_SOUND } from "../constants/scanner-sound";
import ScannerOverlay from "./ScannerOverlay";
import QRScan from "@/assets/images/scanner/QRScan.svg";

export default function QRScanner() {
  const navigate = useNavigate();

  const handleOnScan = (result) => {
    if (!result.length) return;

    const value = result[0].rawValue;

    const url = new URL(value);

    setTimeout(() => {
      navigate(url.pathname);
    }, 1000);
  };

  const [isScanning, setIsScanning] = useState(false);

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <Card className="w-full max-w-md">
        <CardContent className="space-y-6 p-6">
          <div className="space-y-2 text-center">
            <div className="mx-auto flex size-20 items-center justify-center rounded-full bg-neutral-100">
              <img src={QRScan} />
            </div>

            <h1 className="text-2xl font-bold text-text">QR Dine</h1>

            <p className="text-text-muted text-sm">
              Scan QR Code yang tersedia di meja untuk mulai memesan makanan.
            </p>
          </div>

          {!isScanning ? (
            <Button className="w-full py-5" onClick={() => setIsScanning(true)}>
              <QrCode className="mr-2 size-4" />
              Mulai Scan
            </Button>
          ) : (
            <div className="space-y-4">
              <div className="relative overflow-hidden rounded-2xl">
                <Scanner
                  onScan={handleOnScan}
                  onError={(error) => {
                    console.log(error?.message);
                  }}
                  components={{
                    audio: true, // Play beep sound on scan
                    onOff: false, // Show camera on/off button
                    torch: true, // Show torch/flashlight button (if supported)
                    zoom: true, // Show zoom control (if supported)
                    finder: false, // Show finder overlay
                  }}
                  sound={SCANNER_SOUND}
                />

                <ScannerOverlay />
              </div>

              <Button
                variant="outline"
                className="w-full"
                onClick={() => setIsScanning(false)}
              >
                <X className="mr-2 size-4" />
                Tutup Scanner
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
