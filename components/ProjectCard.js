
const ProjectCard = ({ data }) => {
  return (
    <div key={data.title} className="grid grid-cols-6 p-4 text-gray-300 rounded-lg border">
    <div className="col-span-6 pr-4 pb-4 mr-4 border-b md:col-span-2 md:border-b-0 md:border-r min-w-fit md:">
      <div className="text-fuchsia-500">
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
    <div className="col-span-6 px-4 pt-4 mt-4 border-t">
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
    <div className="col-span-6 px-4 pt-4 mt-4 border-t">
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


