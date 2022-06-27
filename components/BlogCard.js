
const BlogCard = ({ data }) => {
  return (
    <div key={data.title} className="grid grid-cols-6 text-gray-300 border rounded-lg p-4">
    <div className="col-span-6 md:col-span-2 md: pb-4 border-b md:border-r md:border-b-0 mr-4 pr-4 min-w-fit">
      <div>
        {data.title}
      </div>
      <div>
        {data.timestamp}
      </div>
    </div>
    <div className="col-span-6 md:col-span-4 mt-4 md:mt-0 indent-5" dangerouslySetInnerHTML={{__html: data.body}} />
   </div>
  )
};

export default BlogCard;
