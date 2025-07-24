import jesus from './JesusD.png';
import pixel from './pixel.gif';
import sol from './sun.svg';
import luna from './moon.svg';
import twdark from './twitter-dark.svg';
import twlight from './twitter-light.svg';
import gitdark from './github-dark.svg';
import gitlight from './github-light.svg';
import linkdark from './linkedin-dark.svg';
import linklight from './linkedin-light.svg';
import behanlight from './behance-light.svg';
import behandark from './behance-dark.svg';
import skethdark from './sketchfab-dark.svg';
import skethwhite from './sketchfab-white.svg';
import itchiodark from './itchio-dark.svg';
import itchiolight from './itchio-light.svg';
import CV from './CV_Jesus_Ruiz_completa.pdf';
import { useTheme } from '../common/ThemeContext';
import { TextAnimate } from '../components/magicui/text-animate';
import { HyperText } from "../components/magicui/hyper-text";
import { WordRotate } from "../components/magicui/word-rotate";
import { FaArtstation } from "react-icons/fa";
import { useLanguage } from '../LanguageContext';
import { GlobeIcon } from 'lucide-react';
import React from "react";

interface PresentationCardProps {
  FirstName: string;
  Profe1: string;
  Profe2: string;
  Profe3: string;
  Profe4: string;
  Profe5: string;
  userNameX: string;
  userNameG: string;
  userNameA: string;
  userNameL: string;
  userNameI: string;
  userNameB: string;
  userNameS: string;
  profesion: string;
  isFollowing: boolean;
}

export function PresentationCard({
  FirstName,
  Profe1,
  Profe2,
  Profe3,
  Profe4,
  Profe5,
  userNameX,
  userNameG,
  userNameL,
  userNameA,
  userNameI,
  userNameB,
  userNameS,
  profesion,
  isFollowing,
}: PresentationCardProps) {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();

  const themeIcon = theme === 'light' ? sol : luna;
  const xIcon = theme === 'light' ? twlight : twdark;
  const GithubIcon = theme === 'light' ? gitlight : gitdark;
  const LinkedinIcon = theme === 'light' ? linklight : linkdark;
  const BehanceIcon = theme === 'light' ? behanlight : behandark;
  const SketchfabIcon = theme === 'light' ? skethwhite : skethdark;
  const ItchioIcon = theme === 'light' ? itchiolight : itchiodark;
  const JImg = theme === 'light' ? jesus : pixel;

  const texts = {
    es: {
      description: "Ingeniero Multimedia egresado de la Universidad Militar Nueva Granada, con experiencia en diseño, modelado y animación 3D, desarrollo web y gestión de proyectos digitales.",
      button: "Curriculum"
    },
    en: {
      description: "Multimedia Engineer graduated from the Military University Nueva Granada, experienced in 3D design, modeling and animation, web development and digital project management.",
      button: "Resume"
    }
  };

  return (
    <article className='tw-followcard'>
      <header className='imagen'>

        {/* ✅ Botones modo oscuro e idioma correctamente alineados */}
        <div className="top-buttons">
          <img
            src={themeIcon}
            alt="Cambio de modo"
            onClick={toggleTheme}
            style={{ width: 40, height: 40, cursor: 'pointer' }}
          />
          <button onClick={toggleLanguage}>
            <GlobeIcon size={20} />
            {language === 'es' ? 'EN' : 'ES'}
          </button>
        </div>

        <div className='imgcontainer'>
          <img className='avatar' alt='Foto de perfil Jesus' src={JImg} />
        </div>

        <div className='info'>
          <TextAnimate animation="fadeIn" by="word">
            {FirstName}
          </TextAnimate>
        </div>

        <h1 className='carrera'>
          <strong>
            <WordRotate
              className="text-4xl font-bold text-black dark:text-white"
              words={[profesion, Profe1, Profe2, Profe3, Profe5, Profe4]}
            />
          </strong>
        </h1>

        <div className='social-container'>
          <div className='social-item'>
            <a href='https://x.com/jesusdavid1445' target='_blank'>
              <img src={xIcon} alt='Icono de X' />
            </a>
            <span>@{userNameX}</span>
          </div>

          <div className='social-item'>
            <a href='https://github.com/JesusDavidRuizCald' target='_blank'>
              <img src={GithubIcon} alt='GitHub' />
            </a>
            <span>{userNameG}</span>
          </div>

          <div className='social-item'>
            <a href='https://www.linkedin.com/in/jesus-ruiz-1aa43b218/' target='_blank'>
              <img src={LinkedinIcon} alt='LinkedIn' />
            </a>
            <span>{userNameL}</span>
          </div>

          <div className='social-item'>
            <a href='https://www.artstation.com/jd144' target='_blank'>
              <FaArtstation size={24} />
            </a>
            <span>{userNameA}</span>
          </div>

          <div className='social-item'>
            <a href='https://www.behance.net/jesusruiz22' target='_blank'>
              <img src={BehanceIcon} alt='Behance' />
            </a>
            <span>{userNameB}</span>
          </div>

          <div className='social-item'>
            <a href='https://sketchfab.com/Mango_Biche' target='_blank'>
              <img src={SketchfabIcon} alt='Sketchfab' />
            </a>
            <span>{userNameS}</span>
          </div>

          <div className='social-item'>
            <a href='https://jdmango.itch.io' target='_blank'>
              <img src={ItchioIcon} alt='Itch.io' />
            </a>
            <span>{userNameI}</span>
          </div>
        </div>

        <article className='descripcion'>
          <TextAnimate animation="blurInUp" by="character" duration={2}>
            {texts[language].description}
          </TextAnimate>
        </article>

        <a href={CV} download>
          <button className='hover'>{texts[language].button}</button>
        </a>
      </header>
    </article>
  );
}