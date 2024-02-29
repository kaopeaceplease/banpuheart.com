export default function Page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const mappedSlug = slug.toLowerCase();
  const url = `https://lifeatnissan.s3.ap-southeast-1.amazonaws.com/${mappedSlug}.mp4`;
  return (
    <div
      style={{
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        height: "100vh",
        overflow: "hidden",
        background: "black",
      }}
    >
      <video className="fullscreen-video" controls>
        <source src={url} />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
