
const ProjectCard = ({ data }) => {
  return (
    <div key={data.title} className="grid grid-cols-6 text-gray-300 border rounded-lg p-4">
    <div className="col-span-6 md:col-span-2 md: pb-4 border-b md:border-r md:border-b-0 mr-4 pr-4 min-w-fit">
      <div>
        {data.title}
      </div>
      <div>
        {data.company}
      </div>
      <div>
        {data.timestamp}
      </div>
    </div>
    <div className="col-span-4 mt-4 md:mt-0" dangerouslySetInnerHTML={{__html: data.description}} />
    <div className="col-span-6 mt-4 border-t px-4 pt-4">
      {data?.links && data.links.map((link, index) => (
        <div className="col-span-6">
        <a
          className="text-sky-500"
          key={`link-${index}`}
          href={link.url}
        >
          {link.title}
        </a>
        </div>
      ))}
    </div>
    <div className="col-span-6 mt-4 border-t px-4 pt-4">
      {data?.bullets && data.bullets.map((bullet, index) => (
        <li key={index}>
          {bullet}
        </li>
      ))}
    </div>
  </div>
  )
};

export default ProjectCard;


