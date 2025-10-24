export default function Mapsrecicle() {
  return (
    <div className="flex justify-center items-center w-full py-10">
      <div className="relative w-[90%] h-auto max-h-120 max-w-6xl aspect-video">
        <iframe
          src="https://www.google.com/maps/d/u/2/embed?mid=1TWMxV_Bak9Xjc26vLhgWNQaVHJxddHg&ehbc=2E312F"
          className="absolute top-0 left-0 w-full h-full rounded-xl shadow-lg border border-gray-500/50"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
