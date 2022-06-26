import ReactMarkdown from "react-markdown";

const BlogCard = ({data, key}) => {
  return (
 <div key={key} className="grid grid-cols-6 text-gray-300 border rounded-lg p-4">
    <div className="col-span-1  border-r mr-4">
      <div>
        {data.timeline}
      </div>
      <div>
        {data.title}
      </div>
      <div>
        {data.company}
      </div>
      <div>
        {data.location}
      </div>
    </div>
    <div className="col-span-5">
    <ReactMarkdown className="w-full">{data.description}</ReactMarkdown>
    </div>
    <div className="col-span-6 mt-4 border-t px-4 pt-4">
      {data.bullets && data.bullets.map((bullet, index) => (
        <li key={index}>
          {bullet}
        </li>
      ))}
    </div>
  </div>
  )
};

export default BlogCard;


