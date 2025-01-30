import Image from "next/image";

const myData = [
  {
    imgSrc: "/png/amazon-logo.png",
    alt: "Amazon",
  },
  {
    imgSrc: "/png/microsoft-logo.png",
    alt: "Microsoft",
  },
  {
    imgSrc: "/png/netflix-logo.png", // Fixed path
    alt: "Netflix", // Fixed typo in alt
  },
  {
    imgSrc: "/png/google-logo.png", // Fixed path
    alt: "Google",
  },
  {
    imgSrc: "/png/apple-logo.png", // Fixed path
    alt: "Apple",
  },
  {
    imgSrc: "/png/meta-logo.png", // Fixed path
    alt: "Meta",
  },
];

export default function TrustedBy() {
  return (
    <div className="bg-[#A435F00A] h-30 flex justify-evenly items-center space-x-85 m-10">
      {myData.map((item, i) => (
        <Image
          key={i} // Added key prop
          src={item.imgSrc}
          className="h-20 w-auto"
          alt={item.alt}
          width={180}
          height={200}
        />
      ))}
    </div>
  );
}
