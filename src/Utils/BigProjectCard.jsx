import { FaGithub, FaLink, FaVideo } from 'react-icons/fa';

const BigProjectCard = ({ title, imageName, description, siteLink, siteVideo, githubLink }) => {
  return (
    <div className="big-card">
      <img src={`/${imageName}`} alt={`Image for ${title}`} />
      <div className="card-content">
        <h2>{title}</h2>
        <p>{description}</p>
        {siteLink ? (
          <a href={siteLink} className="btn m-2" id="pageButton">
            <FaLink size={30} color={"white"} /> Visit Site
          </a>
        ) : (
          siteVideo && (
            <a href={siteVideo} className="btn m-2" id="pageButton">
              <FaVideo size={30} color={"white"} /> Watch Video
            </a>
          )
        )}
        <a href={githubLink} className="btn m-2" id="pageButton">
          <FaGithub size={30} color={"white"} /> Github
        </a>
      </div>
    </div>
  );
};

export default BigProjectCard;
