import Image from "next/image";

export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="mb-8">
          <div className="mx-auto max-w-md">
            <Image
              src="/images/wallpaper/nissan-wallpaper-01.png"
              alt="nissan wallpaper"
              width={0}
              height={0}
              className="rounded-lg shadow-md"
              sizes="100vh"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
        <div className="mb-8">
          <div className="mx-auto max-w-md">
            <Image
              width={0}
              height={0}
              src="/images/wallpaper/nissan-wallpaper-02.png"
              alt="nissan wallpaper"
              className="rounded-lg shadow-md"
              sizes="100vh"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
        <div className="mb-8">
          <div className="mx-auto max-w-md">
            <Image
              width={0}
              height={0}
              src="/images/wallpaper/nissan-wallpaper-03.png"
              alt="nissan wallpaper"
              className="rounded-lg shadow-md"
              sizes="100vh"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
        <div className="mb-8">
          <div className="mx-auto max-w-md">
            <Image
              width={0}
              height={0}
              src="/images/wallpaper/nissan-wallpaper-04.png"
              alt="nissan wallpaper"
              className="rounded-lg shadow-md"
              sizes="100vh"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
