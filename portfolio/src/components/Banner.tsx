import { Line } from "./Line"
import { NavBanner } from "./NavBanner"

export function Banner() {
  return (
    <>
      <Line largeur={25} />
      <nav
        className="flex flex-wrap  justify-center items-center
          gap-10                          
          mx-4 my-6                       
          sm:gap-4 sm:my-8             
          md:gap-30 md:mx-20 md:my-10">
        <NavBanner href="#projet">DATA</NavBanner>
        <NavBanner strong href="#competences">IA</NavBanner>
        <NavBanner href="#experiences">RESEAUX</NavBanner>
        <NavBanner strong href="/">INFRASTRUCTURE</NavBanner>
        <NavBanner href="/">CLOUD</NavBanner>
        <NavBanner strong href="/">DEVOPS</NavBanner>
        <NavBanner href="/">DEVELOPPEMENT</NavBanner>
      </nav>
      <Line largeur={25} />
    </>
  )
}
