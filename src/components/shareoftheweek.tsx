import { FIGURE } from "@/lib/const";
import NextImage from "next/image";
import { HADITH } from "@/lib/const";

function getCurrentDayOfYear() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now.getTime() - start.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
}

export default function ShareOfTheWeek() {
  const dayOfYear = getCurrentDayOfYear();
  const hadithIndex = dayOfYear % HADITH.length;
  const hadith = HADITH[hadithIndex];
  return (
    <figure className="relative font-serif bg-stone-100 p-6 text-black sm:rounded-xl mb-8 min-h-32">
      <NextImage
        src={FIGURE}
        alt={"animationFigure"}
        className="md:rounded-2xl absolute -left-20 top-1/2 -translate-y-1/2 "
        width={100}
        height={100}
      />
      <div className="text-center">
        <blockquote className="opacity-80">{hadith.turkish}</blockquote>
        <figcaption className="mt-2 font-serif opacity-70">
          <cite>{hadith.ravi}</cite>
        </figcaption>
      </div>
    </figure>
  );
}
