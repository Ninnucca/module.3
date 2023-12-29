import react from "react";

function Navbar(){
    const links=[
        {
            id:1,
            title:"Home",
        },
        {
            id:2,
            title:"Portfolio",
        },
        {
            id:3,
            title:"Blog",
        },
        {
            id:4,
            title:"Contact",
        },
        {
            id:5,
            title:"Dashbord",
        },
   ];
   return(
    <div>
     <div>Main</div>
    <div>
    {links.map((link) => (
          <div>{link.title}</div>
        ))}
    </div>

    </div>
   )
    return <div>
        Navbar
        <div>Home</div>
        <div>Portfolio</div>
        <div>Blog</div>
        <div>About</div>
        <div>Contact</div>
        <div>Dashbord</div>
        </div>;
}


export default Navbar;