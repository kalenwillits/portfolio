import Image from 'next/image'


const Footer = () => {
  const logoSize = 16;
  const LinkedInLogoAspectRatio = 1.1759;
  const gitHubAspectRatio = 1;
  return (
    <div className="flex w-screen fixed bottom-0 p-4 border-t bg-zinc-900 -mb-2">
      <a
        className="ml-4"
        href="https://www.linkedin.com/in/kalenwillits/"
        target="_blank"
      >
        <Image
          src="/linkedin.png"
          alt="LinkedIn"
          height={logoSize}
          width={logoSize * LinkedInLogoAspectRatio}
        />
      </a>
      <a
        className="ml-4"
        href="https://github.com/KalenWillits"
        target="_blank"
       >
        <Image
          src="/github.png"
          alt="GitHub"
          height={logoSize}
          width={logoSize * gitHubAspectRatio}
        />
      </a>
    </div>
  )
};

export default Footer;
