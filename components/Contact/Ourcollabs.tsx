"use client";
import { useMemo, useEffect, useState } from "react";
import Image from "next/image";  // import Image

const images = [
  "/image2/slideImg1.webp",
  "/image2/slideImg2.png",
  "/image2/slideImg3.jpg",
  "/image2/slideImg4.png",
  "/image2/slideImg5.png",
  "/image2/slideImg6.jpg",
  "/image2/slideImg7.png",
  "/image2/slideImg8.webp",
];

export default function Ourcollabs() {
  const [columnCount, setColumnCount] = useState(3);
  const [randomSizes, setRandomSizes] = useState<number[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleResize = () => {
      setColumnCount(window.innerWidth > 768 ? 3 : 2);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const sizes = [99, 80, 108, 111];
    const generatedSizes = Array(images.length)
      .fill(0)
      .map(() => sizes[Math.floor(Math.random() * sizes.length)]);
    setRandomSizes(generatedSizes);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const columns = useMemo(() => {
    if (randomSizes.length === 0) return [];

    const trimmedImages = images.map((url, index) => ({
      url: url.trim(),
      size: randomSizes[index % randomSizes.length],
      key: `img-${index}`,
    }));

    const fullList = [...trimmedImages, ...trimmedImages];

    return Array.from({ length: columnCount }, (_, colIdx) =>
      fullList.filter((_, idx) => idx % columnCount === colIdx)
    );
  }, [columnCount, randomSizes]);

  const rows = Math.ceil((images.length * 4) / columnCount);
  const animationDuration = rows * 0.9;

  if (!mounted || randomSizes.length === 0) return null;

  return (
    <>
      <style>
        {`
          @keyframes scrollUp {
            0% {
              transform: translateY(0);
            }
            100% {
              transform: translateY(-50%);
            }
          }
          .scroll-column {
            animation: scrollUp linear infinite;
          }
        `}
      </style>
      <div
        className="overflow-hidden max-w-6xl mx-auto bg-[#F2FAFF]"
        style={{ height: "400px" }}
      >
        <div className="flex gap-2 justify-center">
          {columns.map((colImages, colIdx) => (
            <div
              key={colIdx}
              className="flex flex-col scroll-column"
              style={{ animationDuration: `${animationDuration}s` }}
            >
              {colImages.map((img, idx) => (
                <div
                  key={`${colIdx}-${img.key}-${idx}`}
                  className="my-4 flex justify-center px-3 relative"
                  style={{ height: `${img.size + 24}px`, width: `${img.size}px` }}
                >
                  <Image
                    src={img.url}
                    alt={`logo-${colIdx}-${idx}`}
                    className="object-contain p-3 rounded-full"
                    style={{ boxShadow: "0 0 20px rgba(0, 0, 0, 0.20)" }}
                    fill
                    sizes={`${img.size}px`}
                    priority={false}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
