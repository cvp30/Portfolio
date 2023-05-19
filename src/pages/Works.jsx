import Card from '../components/Card';
import Title from '../components/Title';
import { data } from '../data/works';

const Works = () => {
  return (
    <div id="works" className="w-full h-fit mx-auto max-w-screen-2xl flex flex-col items-center gap-16 py-32 font-bold">
      <Title>
        My Works
      </Title>

      <div className='flex flex-wrap items-center justify-center gap-10'>
        {
          data.map((work, key) => {
            return (
              <Card key={key}
                title={work.title}
                image={work.image}
                description={work.description}
                tech={work.tech}
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