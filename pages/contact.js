import Layout from "../components/Layout";


const Contact = () => {
  return (
    <Layout activeTab="Contact">
      <div className="text-gray-300 grid grid-cols-1 items-center md:mt-10 border rounded-lg p-4">
        <p className="border-b pb-4">
          Looking to get in touch? Send me an email or connect on LikedIn.
        </p>
      <div className="mt-4">
        LinkedIn: <a href="https://www.linkedin.com/in/kalenwillits/" className="text-sky-500" target="_blank" >https://www.linkedin.com/in/kalenwillits/</a>
      </div>
      <div>
        Phone: <a href="tel:9783581526" className="text-sky-500">(978) 358-1526</a>
      </div>
      <div>
        Email: <a href="mailto:ForwardToKalen@gmail.com" className="text-sky-500">ForwardToKalen@gmail.com</a>
      </div>
    </div>
    </Layout>
  )
}

export default Contact;

