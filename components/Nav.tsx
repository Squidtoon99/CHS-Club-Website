import { useRouter } from 'next/router';
import { useState } from 'react';
import styled, {css} from 'styled-components';
import Link from "next/link";

/*
 * This is a ready to use component, just import it and plop it into your project as:
 * <Navbar/>
 * You might want to move all the style components into separate files for readability
 * if you plan to do more with it.
 */

const Bar = styled.nav`
  font-size: 18px;
  /* background-image: linear-gradient(260deg,  rgb(42,244,152,255) 0%, #3498db 100%);  */
  background-color: ${({ theme }) => theme.colors.red};
  color: #fff;
  border: 1px solid rgba(0,0,0,0.2);
  padding-bottom: 10px;
  box-shadow: 0 0 10px 0 ${({ theme }) => theme.colors.darkBlue};
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    padding-bottom: 0;
    height: 70px;
    align-items: center;
  }
`;
const MainNav = styled.ul<{display: string}>`
  list-style-type: none;
  display: ${props => props.display};
  flex-direction: column;
  @media (min-width: 768px) {
    display: flex !important;
    margin-right: 30px;
    flex-direction: row;
    justify-content: flex-end;
  }

  transition: all 0.3s ease-in-out;
  @media (max-width: 768px) {
    transform: ${props => props.display === 'flex' ? 'translateY(0)' : 'translateY(-100%)'};
  }
`;
const NavLi = styled.li`
  text-align: center;
  margin: 15px auto;
`;

const NavLink = styled(Link)`
    list-style-type: none;
    display: flex;
    flex-direction: column;
    @media (min-width: 768px) {    
    margin: 0px 10px;
    }

    border-radius: 25px;
    padding: 7px;
    font-weight: 600;
    

    &[data-active="true"]  {
        color: ${({  theme }) => theme.colors.darkBlue};
        background-color: ${({ theme }) => theme.colors.white};
    }
`;

// @ts-ignore
const Logo = styled(NavLink)`
  display: inline-block;
  font-size: 22px;
  margin-top: 10px;
  margin-left: 20px;
`;

const NavBarToggle = styled.span`
  position: absolute;
  top: 10px;
  right: 20px;
  cursor: pointer; 
  color: rgba(255,255,255,0.8);
  font-size: 24px;
`;
const Hamburger = styled.img`
  /* add your menu icon here i.e. */
  /* content: url('../static/Hamburger_icon.svg'); */
  content: url(data:image/svg+xml,%3Csvg%20height%3D%2232px%22%20id%3D%22Layer_1%22%20style%3D%22enable-background%3Anew%200%200%2032%2032%3B%22%20version%3D%221.1%22%20viewBox%3D%220%200%2032%2032%22%20width%3D%2232px%22%20xml%3Aspace%3D%22preserve%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%3Cpath%20d%3D%22M4%2C10h24c1.104%2C0%2C2-0.896%2C2-2s-0.896-2-2-2H4C2.896%2C6%2C2%2C6.896%2C2%2C8S2.896%2C10%2C4%2C10z%20M28%2C14H4c-1.104%2C0-2%2C0.896-2%2C2%20%20s0.896%2C2%2C2%2C2h24c1.104%2C0%2C2-0.896%2C2-2S29.104%2C14%2C28%2C14z%20M28%2C22H4c-1.104%2C0-2%2C0.896-2%2C2s0.896%2C2%2C2%2C2h24c1.104%2C0%2C2-0.896%2C2-2%20%20S29.104%2C22%2C28%2C22z%22%2F%3E%3C%2Fsvg%3E);
  @media (min-width: 768px) {
    display: none;
  }
`;

const NavLinkWrap = ({ name, path }: { name: string; path: string; }) => {
    if (path === "") {
        path = "home";
    }
    
    let active = name.toLowerCase() === path.toLowerCase();
    return <NavLi>
        <NavLink href={`/${(name === "Home" ? "/" : name).toLowerCase()}`} data-active={active}>{name}</NavLink>
    </NavLi>;
}

const Navbar = ({ displayNav: d }: { displayNav: boolean; }) => {
    const [displayNav, setDisplayNav] = useState(d ? 'flex' : 'none');
    const {pathname} = useRouter();
    console.log(pathname);
    const toggleNav = () => {
        setDisplayNav(prev => {
            switch (prev) {
                case 'flex':
                    return 'none';
                case 'none':
                    return 'flex';
                default:
                    return 'none';
            }
        });
    };

    const links = [
        'Home',
        'Gallery',
        'Contact'
    ];

    return (
        <Bar>
            <NavBarToggle onClick={() => toggleNav()}>
                <Hamburger />
            </NavBarToggle>
            <Logo href="#">The Clubs of CHS</Logo>
            <MainNav display={displayNav}>
                {links.map((link, i) => {
                    return <NavLinkWrap name={link} path={pathname.slice(1)} key={i} />
                })}
            </MainNav>
        </Bar>
    )
};

export default Navbar;