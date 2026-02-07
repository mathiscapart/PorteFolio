import Header from './components/Header'
import { Banner } from './components/Banner'
import mathisLogo from './assets/mathis_style_notion_remove_gb tech.png'
import portfolioLogo from './assets/portfolio_tech_jaune.png'
import { Profil } from './components/Profil'

function App() {
  return (
    <div>
      <Header />
      <div className="flex  items-center justify-center gap-10 my-20">
        <img src={portfolioLogo} alt="AI Illustration" className="w-250" />
        <img src={mathisLogo} alt="AI Illustration" className="rounded-full w-60 h-60" />
      </div>
      <Banner />
      <Profil />
    </div>
  )
}

export default App
