export default function Preloader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 border-4 border-white border-t-transparent rounded-full animate-spin" />
        <p className="text-white text-sm tracking-wide">Loading...</p>
      </div>
    </div>
  );
}
