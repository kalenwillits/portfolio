import Layout from "../components/Layout";


const Contact = () => {
  return (
    <Layout activeTab="Contact">
      <div className="grid grid-cols-1 items-center p-4 text-gray-300 rounded-lg border md:mt-10">
        <p className="pb-4 border-b">
          Looking to get in touch? Send me an email or connect on LikedIn.
        </p>
      <div className="mt-4">
        LinkedIn: <a href="https://www.linkedin.com/in/kalenwillits/" className="text-sky-500" target="_blank" >https://www.linkedin.com/in/kalenwillits/</a>
      </div>
      <div>
        Email: <a href="mailto:ForwardToKalen@gmail.com" className="text-sky-500">ForwardToKalen@gmail.com</a>
      </div>
    </div>
    </Layout>
  )
}

export default Contact;

