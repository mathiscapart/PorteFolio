export function NavBanner({ href, children, strong }) {
  if (strong){
      return (
      <a 
        href={href} 
        className="font-bold text-black no-underline px-2 py-1">
        {children}
      </a>
    )
  } else {
      return (
      <a 
        href={href} 
        className="font-medium text-black no-underline px-2 py-1">
        {children}
      </a>
    )
  }
  
}
