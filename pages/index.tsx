import Image from 'next/image'
import Layout from "../components/Layout";

const About = () => {
  const imageSize = 400;
  const imageAspectRatio = 1;

  return (
    <Layout>
      <div className="flex">
        <Image
          className="rounded-full border"
          src="/selfie-edited.jpg"
          alt="selfie"
          layout="intrinsic"
          height={imageSize}
          width={imageSize * imageAspectRatio}
        />
      </div>
    </Layout>
  )
}

export default About;
