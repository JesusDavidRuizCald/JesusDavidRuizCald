import React from "react";
import { TextAnimate } from "./components/magicui/text-animate";
import { HyperText } from "./components/magicui/hyper-text";
import { useLanguage } from "./LanguageContext";

// Imágenes
import rocketRabbit from './assets/rocket_rabbit.png';
import talesofBroken from './assets/TalesofBroken.png';
import nightmare_mirror from './assets/modelo_3d2.png';
import Zombie_Mushroom from './assets/jesus-david-render02.jpg';
import SIMInternacional from './assets/Sim_Internacional.png';
import Cerdito_Porky from './assets/jesus-david-render-principal.jpg';

// Íconos de herramientas
import { FaUnity, FaCode, FaHeart } from "react-icons/fa";
import { SiAdobephotoshop, SiBlender } from "react-icons/si";

// Traducciones
const translations = {
  es: {
    title: "Proyectos",
    description:
      "Estos son algunos de los proyectos personales y colaborativos en los que he trabajado recientemente tanto como artista 3D como programador.",
    projects: [
      "Juego de acción estilo retro inspirado en los clásicos de los 90.",
      "Aventura narrativa con estética pixel art y mecánicas mágicas.",
      "Juego de terror psicológico con estética surrealista.",
      "Modelado y renderizado de criatura para juego 3D.",
      "Diseño de sitio web y materiales gráficos institucionales.",
      "Renderizado de personaje infantil estilo cartoon.",
    ],
  },
  en: {
    title: "Projects",
    description:
      "These are some personal and collaborative projects I've worked on recently as both a 3D artist and programmer.",
    projects: [
      "Retro-style action game inspired by 90s classics.",
      "Narrative adventure with pixel art aesthetics and magic mechanics.",
      "Psychological horror game with surreal visuals.",
      "Modeling and rendering of a creature for a 3D game.",
      "Institutional website design and graphic materials.",
      "Rendering of a cartoon-style children's character.",
    ],
  },
};

// Datos del proyecto
const baseProjects = [
  {
    title: "Rocket Rabbit",
    image: rocketRabbit,
    url: "https://dhako197.itch.io/rocket-rabbit",
    tools: [<FaUnity title="Unity" />, <SiAdobephotoshop title="Photoshop" />, <SiBlender title="Blender" />, <FaCode title="HTML/CSS" />],
  },
  {
    title: "The Tale of the Broken Spell",
    image: talesofBroken,
    url: "https://mayvisan.itch.io/the-tale-of-the-broken-spell",
    tools: [<FaUnity title="Unity" />, <SiBlender title="Blender" />, <SiAdobephotoshop title="Photoshop" />, <FaHeart title="PyxelEdit" />],
  },
  {
    title: "Nightmare Mirror",
    image: nightmare_mirror,
    url: "https://jdmango.itch.io/nightmare-mirror",
    tools: [<FaUnity title="Unity" />, <SiBlender title="Blender" />, <SiAdobephotoshop title="Photoshop" />, <FaCode title="HTML/CSS" />],
  },
  {
    title: "Zombie Mushroom - Libel Academy",
    image: Zombie_Mushroom,
    url: "https://jdmango.itch.io/nightmare-mirror",
    tools: [<SiBlender title="Blender" />, <SiAdobephotoshop title="Photoshop" />],
  },
  {
    title: "SIM INTERNACIONAL SAS",
    image: SIMInternacional,
    url: "https://siminternacionalsas.com",
    tools: [<FaCode title="HTML/CSS" />, <SiAdobephotoshop title="Photoshop" />],
  },
  {
    title: "Cerdito Porky - Pig Libel Academy",
    image: Cerdito_Porky,
    url: "https://www.artstation.com/artwork/mA1G8a",
    tools: [<SiBlender title="Blender" />, <SiAdobephotoshop title="Photoshop" />],
  },
];

export default function ProjectSection() {
  const { language } = useLanguage();
  const t = translations[language];

  // Añadir descripción traducida a cada proyecto
  const projectsLocalized = baseProjects.map((project, index) => ({
    ...project,
    description: t.projects[index],
  }));

  return (
    <section className="tw-followcard" style={{ marginBottom: "2rem" }}>
      <header className="imagen">
        <div className="info">
          <strong>
              <TextAnimate animation="fadeIn" by="word">
              {t.title}
            </TextAnimate>
          </strong>
        </div>

        <article className="descripcion">
          <TextAnimate animation="blurInUp" by="word" duration={2}>
            {t.description}
          </TextAnimate>
        </article>

        <div className="project-cards">
          {projectsLocalized.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
            >
              <img src={project.image} alt={project.title} />
              <div className="project-content">
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <div
                  className="project-icons"
                  style={{
                    display: "flex",
                    gap: "12px",
                    marginTop: "0.8rem",
                    fontSize: "1.4rem",
                  }}
                >
                  {project.tools.map((icon, i) => (
                    <span key={i}>{icon}</span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </header>
    </section>
  );
}