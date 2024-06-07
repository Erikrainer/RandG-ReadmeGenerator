import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaGithub, FaEnvelope } from 'react-icons/fa';
import "./HomePage.css";

export default function Home() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    github: "",
    license: "MIT",
    email: "",
    installation: "",
    usage: "",
    features: "",
    tests: "",
    language: "",
    hasLiveLink: false,
    liveLink: "",
  });

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let licenseLink;
    let licenseBadge;

    if (formData.license === "MIT") {
      licenseBadge =
        "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      licenseLink = "https://opensource.org/licenses/MIT";
    } else if (formData.license === "Apache") {
      licenseBadge =
        "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      licenseLink = "https://www.apache.org/licenses/LICENSE-2.0";
    } else if (formData.license === "GPL") {
      licenseBadge =
        "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      licenseLink = "https://www.gnu.org/licenses/gpl-3.0.en.html";
    } else if (formData.license === "BSD") {
      licenseBadge =
        "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
      licenseLink = "https://opensource.org/licenses/BSD-2-Clause";
    }

    let languageIcon;
    switch (formData.language.toLowerCase()) {
      case 'javascript':
        languageIcon = "![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)";
        break;
      case 'python':
        languageIcon = "![Python](https://img.shields.io/badge/-Python-3776AB?style=flat&logo=python&logoColor=white)";
        break;
      case 'java':
        languageIcon = "![Java](https://img.shields.io/badge/-Java-007396?style=flat&logo=java&logoColor=white)";
        break;
      case 'react':
        languageIcon = "![React](https://img.shields.io/badge/-React-61DAFB?style=flat&logo=react&logoColor=white)";
        break;
      default:
        languageIcon = "";
    }

    let liveLinkSection = "";
    if (formData.hasLiveLink && formData.liveLink.trim() !== "") {
      liveLinkSection = `
  ## Live Link or Walkthrough Video
  
  ${formData.liveLink}`;
    }

    const content = `# ${formData.title}

  ## Description

  ${formData.description}

## Table of Contents 🗒

  * [Installations](#installations-💻)
  * [Usage](#usage-🏆)
  * [Contributors](#contributors-😃)
  * [Tests](#tests-🧪)
  * [Languages](#languages-🔧)
  * [Questions](#questions)
  * [License](#license-📛)
${liveLinkSection}  
  ## Installation
  
  To instal run the following commands :
  \`\`\`
  ${formData.installation}
  \`\`\`
  
  ## Usage
  \`\`\`
  ${formData.usage}
  \`\`\`

  ## Credits

  ${formData.credits}

  ## License

  This project is licensed under the [${formData.license}](${licenseLink}).

  ${licenseBadge}

  ## Features

  ${formData.features}

  ## Tests

  ${formData.tests}

  ## Technical Details
  
    # Tech Stack

    Below is the technology stack used in this project, showcasing the tools, languages, and frameworks leveraged to develop and deploy the application.

  ${languageIcon} ${formData.language}

  ## Questions

  [![GitHub](https://img.shields.io/badge/-GitHub-181717?style=flat&logo=github&logoColor=white)](https://github.com/${formData.github})
  [![Email](https://img.shields.io/badge/-Email-D14836?style=flat&logo=gmail&logoColor=white)](mailto:${formData.email})
`;

    const blob = new Blob([content], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "README.md";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="container mt-5 text-center" id="homeContainer">
      <div className="row justify-content-left mt-5">
        <div className="col-12">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control mt-3 mb-3"
                id="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter title"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                className="form-control mt-3 mb-3"
                id="description"
                value={formData.description}
                onChange={handleChange}
                rows="3"
                placeholder="Enter description"
                required
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="github">GitHub</label>
              <div>
                <FaGithub size={20} color={"white"} />
                <input
                  type="text"
                  className="form-control mt-3 mb-3"
                  id="github"
                  value={formData.github}
                  onChange={handleChange}
                  placeholder="Enter GitHub username"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="license">License</label>
              <select
                className="form-control mt-3 mb-3"
                id="license"
                value={formData.license}
                onChange={handleChange}
              >
                <option>MIT</option>
                <option>Apache</option>
                <option>GPL</option>
                <option>BSD</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <div>
                <FaEnvelope size={20} color={"white"} />
                <input
                  type="email"
                  className="form-control mt-3 mb-3"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="installation">Installation Instructions</label>
              <textarea
                className="form-control mt-3 mb-3"
                id="installation"
                value={formData.installation}
                onChange={handleChange}
                rows="3"
                placeholder="Enter installation instructions"
                required
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="usage">Usage</label>
              <textarea
                className="form-control mt-3 mb-3"
                id="usage"
                value={formData.usage}
                onChange={handleChange}
                rows="3"
                placeholder="Enter usage"
                required
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="features">Features</label>
              <textarea
                className="form-control mt-3 mb-3"
                id="features"
                value={formData.features}
                onChange={handleChange}
                rows="3"
                placeholder="Enter features"
                required
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="tests">Tests</label>
              <textarea
                className="form-control mt-3 mb-3"
                id="tests"
                value={formData.tests}
                onChange={handleChange}
                rows="3"
                placeholder="Enter tests"
                required
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="language">Language Used</label>
              <select
                className="form-control mt-3 mb-3"
                id="language"
                value={formData.language}
                onChange={handleChange}
                required
              >
                <option value="">Select language</option>
                <option value="JavaScript">JavaScript</option>
                <option value="Python">Python</option>
                <option value="Java">Java</option>
                <option value="React">React</option>
              </select>
            </div>
            <div className="form-group">
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input checkbox-custom"
                  id="hasLiveLink"
                  checked={formData.hasLiveLink}
                  onChange={handleChange}
                />
                <label className="form-check-label checkbox-custom-label" htmlFor="hasLiveLink">
                  Has Live Link or Walkthrough Video?
                </label>
              </div>
            </div>
            {formData.hasLiveLink && (
              <div className="form-group">
                <label htmlFor="liveLink">Live Link or Walkthrough Video URL</label>
                <input
                  type="text"
                  className="form-control mt-3 mb-3"
                  id="liveLink"
                  value={formData.liveLink}
                  onChange={handleChange}
                  placeholder="Enter live link or walkthrough video URL"
                  required
                />
              </div>
            )}
            <button type="submit" className="btn btn-primary mt-3 mb-3">
              Generate Readme
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
