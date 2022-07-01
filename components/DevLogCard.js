
const DevLogCard = ({ data }) => {
  return (
    <div key={data.title} className="grid grid-cols-6 p-4 text-gray-300 rounded-lg border">
    <div className="col-span-6 pr-4 pb-4 mr-4 border-b md:col-span-2 md:border-b-0 md:border-r min-w-fit md:">
      <div>
        {data.title}
      </div>
      <div>
        {data.timestamp}
      </div>
    </div>
    <div className="col-span-6 mt-4 md:col-span-4 md:mt-0 indent-5" dangerouslySetInnerHTML={{__html: data.body}} />
   </div>
  )
};

export default DevLogCard;
