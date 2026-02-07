export function NavLink({ href, children }) {
  return (
    <a 
      href={href} 
      className="font-medium text-black no-underline px-2 py-1 border-2 border-black rounded-[10px] hover:bg-black hover:text-white transition-colors transition-shadow shadow-[2px_2px_0px_2px_rgba(0,0,0,1)] hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,0)]">
      {children}
    </a>
  )
}