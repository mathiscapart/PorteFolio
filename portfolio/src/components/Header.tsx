import { NavLink } from "./Navlink";

export default function Header() {
  return (
    <header className="">
      <nav className="flex items-center justify-between my-10 mx-20">
        <a href="/" className=""><strong>Portfolio</strong><br></br>Mathis Capart</a>
        <NavLink href={"#projet"}>Projets</NavLink>
        <NavLink href={"#competences"}>Compétences</NavLink>
        <NavLink href={"#experiences"}>Expériences</NavLink>
        <NavLink href={"/"}>Architecte en système d'information</NavLink>
      </nav>
    </header>
  )
}