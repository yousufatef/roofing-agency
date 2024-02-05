import { useState } from "react"

const Projects = () => {
  const [projects] = useState([
    {image: "1.jpg", title: "Low Rise Building", description: "Commercial"},
    {image: "2.jpg", title: "Winter Maintenance", description: "Residential"},
    {image: "3.jpg", title: "Solar Roof", description: "Commercial"},
    {image: "4.jpg", title: "Solar Roof", description: "Residential"},
    {image: "5.jpg", title: "Traditional Style Pattern", description: "Residential"},
    {image: "6.jpg", title: "Modern Style Pattern", description: "Residential"}
  ])
  return (
    <div>
      <div className="p-[25px] pt-[50px] max-sm:text-center">
        <h4 className="text-primary font-bold text-2xl">Our Projects</h4>
        <h2 className="text-secondary font-bold text-4xl">Inspiration for Your Next Project</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] p-[25px]">
        {projects.map(project => (
          <div key={project.title} className="p-[30px]  bg-white flex gap-4 flex-col justify-center text-center rounded shadow-md">
            <img src={`/assets/${project.image}`} alt="project-image" />
            <h4 className="font-bold text-secondary text-2xl">{project.title}</h4>
            <p className="text-xl">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects