import React from 'react'
import GitHubButton from 'react-github-btn'
import react from '../assets/react.svg';
import './Projects.css';

function Footer({github,light,language}) {
  return (
    <div className={light?"text-center w-full mt-16 h-100 bg-blue-800 pt-3":"text-center text-white w-full mt-16 bg-blue-600 h-100 pt-3"}>
      <p className={light?"text-blue-100 mb-4":"text-gray-100 mb-4"}>
        Moche Miguel<span role="img" aria-label="heart">😄</span> <a 
        className={light?"text-gray-100 hover:underline":"text-blue-100 hover:underline"}
        href="https://github.com/BraydenTW"> mochemiguel@gmail.com</a>
      </p>
      <GitHubButton href={github} data-color-scheme="no-preference: light; light: light; dark: light;" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star ntkme/github-buttons on GitHub">Star</GitHubButton>
      <div>

        <div className={light?"text-blue-100 alignmentFooter":"text-gray-100 alignmentFooter"}>
          <p>

          { language==='EN'? 'This site was built with React':'Este sito fué construido con React' }
          </p>
          <img src={react} alt="" width="20px" />
        </div>
      </div>
     <br />
    </div>
  )
}

export default Footer