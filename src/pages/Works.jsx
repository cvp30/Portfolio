import Card from '../components/Card';
import {data} from '../data/works'


const Works = () => {
  return (
    <div id="works" className="w-full h-screen flex flex-col items-center gap-16 pt-24">
      <h2 className=" font-bold ">My Works</h2>

      <div className='w-full px-24 flex flex-wrap justify-center gap-12'>
        {
          data.map((work, key) => {
            return (
              <Card key={key}
                title={work.title}
                image={work.image}
                tech={work.tech}
                type={work.type}
                githubLink={work.githubLink}
                deployLink={work.deployLink}
              />
            )
          })
        }
      </div>

    </div>
  )
}

export default Works;