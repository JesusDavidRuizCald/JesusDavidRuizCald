import React from "react";
import { TextAnimate } from "./components/magicui/text-animate";
import { HyperText } from "./components/magicui/hyper-text";
import { useLanguage } from "./LanguageContext";

const translations = {
  es: {
    sectionTitle: "Experiencia Laboral",
    sectionDescription:
      "Estas son algunas de las experiencias laborales en las que he trabajado recientemente.",
    experiences: [
      {
        role: "Modelador 3D y Renderista",
        company: "Workobot",
        period: "06/2025 - Actualidad",
        description:
          "Diseñé modelos 3D de torres y edificios, cuidando la precisión arquitectónica y estética.",
      },
     
      {
        role: "Diseñador 3D",
        company: "Surtimundo",
        period: "08/2024 - 10/2024",
        description:
          "Diseñé y mantuve un sitio web responsive, creé cartas y maquetas 3D, y optimicé la comunicación interna configurando correos corporativos.",
      },
      
      {
        role: "Diseñador Web / Gráfico",
        company: "SIM Internacional SAS",
        period: "03/2020 - 03/2021 y 01/2024 - 04/2024",
        description:
          "Desarrollé un sitio web responsive, gestioné correos institucionales y creé materiales visuales como presentaciones y maquetas 3D.",
      },
      {
        role: "Pasante ingeniero multimedia",
        company: "Sodimac Corona S.A",
        period: "01/2023 - 07/2023",
        description:
          "Diseñé campañas de email marketing, analicé métricas y gestioné respuestas de clientes con eficiencia.",
      },
    ],
  },
  en: {
    sectionTitle: "Work Experience",
    sectionDescription:
      "These are some of the work experiences I’ve recently been involved in.",
    experiences: [
      {
        role: "3D Modeler and Renderer",
        company: "Workobot",
        period: "06/2025 - Present",
        description:
          "Designed 3D models of towers and buildings, ensuring architectural precision and aesthetics.",
      },
      
      {
        role: "3D Designer",
        company: "Surtimundo",
        period: "08/2024 - 10/2024",
        description:
          "Designed and maintained a responsive website, created cards and 3D mockups, and configured corporate emails to optimize communication.",
      },
     
      {
        role: "Web / Graphic Designer",
        company: "SIM Internacional SAS",
        period: "03/2020 - 03/2021 and 01/2024 - 04/2024",
        description:
          "Developed a responsive website, managed institutional emails, and created visual materials such as presentations and 3D mockups.",
      },
      {
        role: "CRM Intern",
        company: "Sodimac Corona S.A",
        period: "01/2023 - 07/2023",
        description:
          "Designed email marketing campaigns, analyzed performance metrics, and efficiently handled customer responses.",
      },
    ],
  },
};

export default function ExperienceSection() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="tw-followcard" style={{ marginBottom: "2rem" }}>
      <header className="imagen">
        <div className="info">
          <strong className="experience-title">
            <TextAnimate animation="fadeIn" by="word">{t.sectionTitle}</TextAnimate>
          </strong>
        </div>

        <article className="descripcion">
          <TextAnimate animation="blurInUp" by="word" duration={2}>
            {t.sectionDescription}
          </TextAnimate>
        </article>

        <div className="experience-cards">
          {t.experiences.map((exp, index) => (
            <article key={index} className="experience-card">
              <div className="experience-card-content">
                <h3>
                  <TextAnimate animation="fadeIn" by="word" delay={index * 0.1}>
                    {`${exp.role} — ${exp.company}`}
                  </TextAnimate>
                </h3>
                <span className="period">
                  <TextAnimate animation="fadeIn" by="character" delay={index * 0.15}>
                    {exp.period}
                  </TextAnimate>
                </span>
                <p>
                  <TextAnimate animation="fadeIn" by="word" delay={index * 0.2}>
                    {exp.description}
                  </TextAnimate>
                </p>
              </div>
            </article>
          ))}
        </div>
      </header>
    </section>
  );
}