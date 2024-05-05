import Container from "@/components/container";
import Carousel from "@/components/carousel";
import PostLists from "@/components/postlists";
import ShareOfTheWeek from "@/components/shareoftheweek";
import NextImage from "next/image";
import { MY_PROFILE } from "@/lib/const";

export default function Index() {
  return (
    <>
      <Container>
        <ShareOfTheWeek />
      </Container>

      <Container>
        <div className="flex my-10">
          <div className="relative w-11/12 rounded-full overflow-hidden">
            <NextImage
              src={MY_PROFILE}
              alt={"me"}
              className="md:rounded-full absolute "
              objectFit="cover"
              width="200"
              height="200"
            />
          </div>

          <div className="ml-5">
            <h1 className="flex flex-col font-display text-xl sm:text-2xl">
              <b>Muhammed Emin Tura</b>
              <span className="opacity-60">Software Developer</span>
            </h1>
            <p className="text-l mt-5">
              Web siteme hoş geldiniz!
              Bu platform, bilgi birikimimi ve yaşam tecrübelerimi sizlerle paylaşma arzumun bir yansımasıdır.
              Burada, çeşitli konular hakkında bilgiler sunarak, öğrenmenin ve keşfetmenin kapılarını aralamayı hedefliyorum.
              İnşallah, bu sitede geçireceğiniz zaman hem bilgilendirici hem de ilham verici olur."
            </p>
          </div>
        </div>
      </Container>

      <Container>
        <PostLists />
      </Container>

      <Container size="large" className="mt-20">
        <Carousel />
      </Container>
    </>
  );
}
