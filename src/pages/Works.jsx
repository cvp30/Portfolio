import Card from '../components/Card';
import Title from '../components/Title';
import {data} from '../data/works'


const Works = () => {
  return (
    <div id="works" className="w-full h-screen mx-auto max-w-screen-2xl flex flex-col items-center gap-16 pt-10 font-bold">
      <Title>
        My Works
      </Title>

      <div className='w-full border px-24 flex flex-wrap justify-center gap-12'>
        {
          data.map((work, key) => {
            return (
              <Card key={key}
                title={work.title}
                image={work.image}
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