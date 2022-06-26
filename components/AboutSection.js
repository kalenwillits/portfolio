import Image from 'next/image'
import { about } from "../data/about";

const AboutSection = () => {
  const imageSize = 280;
  const imageAspectRatio = 1;

  return (
      <div className="flex">
        <div >
        <Image
          className="p-0 rounded-full border-white border"
          src="/selfie-edited.jpg"
          alt="selfie"
          height={imageSize}
          width={imageSize * imageAspectRatio}
        />
        </div>
        <div className="text-white p-10">
          <div className="text-2xl">{about.title}</div>
          <p className="mt-4 text-gray-300 text-lg">
            {about.description}
          </p>
        </div>
      </div>
  )
};

export default AboutSection;
