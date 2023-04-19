import { Github, Linkedin, Twitter } from "../icons";

const SocialNetworks = () => {
  return (
    <div className=" h-6 2xl:h-8 flex gap-6">
      <a href="https://github.com/cvp30" target="_blank">
        <Github />
      </a>
      
      <a href="https://www.linkedin.com/in/carlosvaler/" target="_blank">
        <Linkedin />
      </a>

      <a href="https://twitter.com/carlosvaler17" target="_blank">
        <Twitter />
      </a>
    </div>
  )
}

export default SocialNetworks;