import Image from 'next/image'
import { about } from "../data/about";

const AboutSection = () => {
  const imageSize = 280;
  const imageAspectRatio = 1;

  return (
      <div className="grid grid-cols-5 md:mt-10">
		  <div className="grid col-span-5 place-content-center md:place-content-start md:col-span-1">
        <Image
          className="p-0 rounded-full border border-white"
          src="/selfie-edited.jpg"
          alt="selfie"
          height={imageSize}
          width={imageSize * imageAspectRatio}
        />
          <div className="text-center text-gray-300 break-normal">
            <p>
              Kalen Willits
            </p>
            <p className="text-amber-500">
				{about.title}
            </p>
          </div>
        </div>
        <div className="col-span-5 text-white md:col-span-4 md:px-10">
          <div className="mt-4 text-gray-300" dangerouslySetInnerHTML={{__html: about.description}} />
        </div>
      </div>
  )
};

export default AboutSection;
