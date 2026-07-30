export default function ScannerOverlay() {
  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
      <div className="relative h-64 w-64">
        {/* Top Left */}
        <div className="absolute left-0 top-0 h-12 w-12 border-l-2 border-t-2 border-white/90 rounded-tl-xl" />

        {/* Top Right */}
        <div className="absolute right-0 top-0 h-12 w-12 border-r-2 border-t-2 border-white/90 rounded-tr-xl" />

        {/* Bottom Left */}
        <div className="absolute bottom-0 left-0 h-12 w-12 border-l-2 border-b-2 border-white/90 rounded-bl-xl" />

        {/* Bottom Right */}
        <div className="absolute bottom-0 right-0 h-12 w-12 border-r-2 border-b-2 border-white/90 rounded-br-xl" />
      </div>
    </div>
  );
}
