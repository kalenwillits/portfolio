import Image from 'next/image'
import { about } from "../data/about";

const AboutSection = () => {
  const imageSize = 280;
  const imageAspectRatio = 1;

  return (
      <div className="grid grid-cols-5 md:mt-10">
        <div className="col-span-5 md:col-span-1 grid place-content-center">
        <Image
          className="p-0 rounded-full border-white border"
          src="/selfie-edited.jpg"
          alt="selfie"
          height={imageSize}
          width={imageSize * imageAspectRatio}
        />
          <div className="text-center text-gray-300 break-normal">
            <p>
              Kalen Willits
            </p>
            <p>
              Software Developer
            </p>
          </div>
        </div>
        <div className="text-white md:px-10 col-span-5 md:col-span-4">
          <div className="text-2xl"></div>
          <p className="mt-4 text-gray-300 text-lg indent-12">
            {about.description}
          </p>
        </div>
      </div>
  )
};

export default AboutSection;
