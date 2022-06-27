
const ExperienceCard = ({ data }) => {
  return (
    <div key={data.title} className="grid grid-cols-6 text-gray-300 border rounded-lg p-4">
    <div className="col-span-2 md:col-span-1 border-r mr-4 pr-4 min-w-fit">
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
    <div className="col-span-4 px-4">
      {data.bullets && data.bullets.map((bullet, index) => (
        <li key={index}>
          {bullet}
        </li>
      ))}
    </div>
  </div>
  )
};

export default ExperienceCard;


