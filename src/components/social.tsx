import Link from "@/components/link";
import IconTwitter from "@/components/icons/twitter";
import IconYoutube from "@/components/icons/youtube";
import IconGithub from "@/components/icons/github";
import Buymeacoffee from "@/components/icons/buymeacoffee";
import { SOCIAL } from "@/lib/const";

function SocialButton({ href, children }) {
  return (
    <Link
      href={href}
      blank
      className="
      flex items-center justify-center rounded-full
      bg-zinc-200 p-3 text-zinc-600 no-underline
      transition ease-in-out duration-300
      shadow-md hover:shadow-lg
      hover:bg-blue-600 hover:text-white
   
      dark:hover:bg-blue-500 dark:hover:text-white"
    >
      {children}
    </Link>
  );
}

export default function Social() {
  return (
    <div className="flex items-center justify-center space-x-4">
      <SocialButton href={SOCIAL.twitter}>
        <IconTwitter />
        <span className="ml-2 font-medium hidden sm:inline">Twitter</span>
      </SocialButton>

      <SocialButton href={SOCIAL.youtube}>
        <IconYoutube />
        <span className="ml-2 font-medium hidden sm:inline">YouTube</span>
      </SocialButton>

      <SocialButton href={SOCIAL.github}>
        <IconGithub />
        <span className="ml-2 font-medium hidden sm:inline">GitHub</span>
      </SocialButton>

      <SocialButton href={SOCIAL.donate}>
        <Buymeacoffee />
        <span className="ml-2 font-medium hidden sm:inline">Donate</span>
      </SocialButton>
    </div>
  );
}
