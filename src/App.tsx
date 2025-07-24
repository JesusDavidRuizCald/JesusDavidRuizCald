import './App.css';
import { PresentationCard } from './assets/PresentationCard';
import ExperienceSection from "./ExperienceSection";
import ProjectsSection from "./ProjectsSection";
import { LanguageProvider, useLanguage } from './LanguageContext';

function AppContent() {
  const { language } = useLanguage();

  const texts = {
    es: {
      profesion: "Ingeniero Multimedia"
    },
    en: {
      profesion: "Multimedia Engineer"
    }
  };

  return (
    <section className='App'>
      <PresentationCard 
        isFollowing={true} 
        userNameX='jesusdavid1445' 
        userNameG='JesusDavidR' 
        userNameL='Jesus Ruiz' 
        userNameS='Jesus_D' 
        userNameI='IAmPapaya' 
        userNameB='Jesus Ruiz Calderón' 
        FirstName='JESUS DAVID' 
        LastName='RUIZ CALDERON' 
        userNameA='Jesus David'
        profesion={texts[language].profesion}
      />
      <ExperienceSection />
      <ProjectsSection />
    </section>
  );
}

export function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}