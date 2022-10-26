import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Nav = styled.nav`
    padding-left: 0.5rem;
    padding-right: 0.5rem; 
    padding-top: 0.625rem;
    padding-bottom: 0.625rem; 
    border-bottom: 10px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); 
    
    
    @media (min-width: 640px) { 
        padding-left: 2.5rem;
        padding-right: 2.5rem; 
    }
`;

export const Container = styled.div`
    background-color: #ffffff; 
    width: 100%; 
    display: flex; 
    flex-wrap: wrap; 
    justify-content: space-between; 
    align-items: center; 
`;

export const LogoLink = styled(Link)`
    display: flex; 
    align-items: center; 
    justify-content: left;
    width: 10rem;

    @media (max-width: 768px) { 
        display: none;
    }
`;

export const Logo = styled.img`
    width: 100%;
`;

export const DropDownMenu = styled.div`
    float: right;
    overflow: hidden;
    width: 10rem;
`;

export const DropdownContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 0.1rem;
`;

export const DropdownIcon = styled.div`
    display: inline-flex; 
    gap: 0.75rem;
    padding: 0.75rem; 
    margin-left: 0.75rem; 
    background-color: white;
    font-size: 0.875rem;
    line-height: 1.25rem; 
    align-items: center; 
    border-radius: 9999px; 
    cursor: pointer;
    box-shadow: 1px 0px 3px 0 rgba(0,0,0,0.5);
    

    @media (max-width: 768px) { 
        display: none;
    }

    &:hover {
        background-color: #F3F4F6; 
    }
`;

// export const IconFilter = styled.button`
//     display: inline-flex;
//     gap: 0.5rem;
//     padding: 0.75rem;
//     margin-left: 0.75rem;
//     background-color: white;
//     font-size: 0.875rem;
//     line-height: 1.25rem;
//     align-items: center;
//     border-radius: 1.25rem;
//     cursor: pointer;

//     &:hover {
//         background-color: #F3F4F6;
//     }
// `;

export const NavMenu = styled.div`
    display: ${(props) => (props.open ? 'block' : 'none')};
    width: 100%;
`;

export const NavMenuList = styled.ul`
    position: absolute;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    padding-left: 0rem;
    background-color: white;
    z-index: 15;
    border-radius: 1rem;
    right: 2.7rem;
    width: 10rem;
`;

export const NavMenuLink = styled(Link)`
    float: none;
    color: black;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    padding: 1rem 1.25rem;
    text-decoration: none;
    display: block;
    text-align: left;

    &:hover {
        background-color: #EAEAEA;
    }
`;

export const FilterContainer = styled.div`
    width: 100%;
    display: flex; 
    padding-top: 0.5rem;
    padding-bottom: 0.5rem; 
    align-items: center; 
    cursor: pointer;
    border-radius: 9999px; 

    &:hover {
        background-color: #F3F4F6; 
    }

    @media (min-width: 768px) { 
        width: 20%;
        border-width: 2px; 
        box-shadow: 1px 0px 3px 0 rgba(0,0,0,0.5);
    }    
`;

export const MainSearchContainer = styled.div`
    display: grid;
`;

// export const Icon = styled(FontAwesomeIcon)`
//     display: none;
//     padding: 0.5rem;
//     background-color: var(--staycay-red);
//     color: #ffffff;
//     height: 1rem;
//     border-radius: 9999px;
//     cursor: pointer;

//     @media (min-width: 768px) {
//         display: inline-flex;
//         margin-left: 0.5rem;
//         margin-right: 0.5rem;
//     }
// `;

export const Icon = styled(FontAwesomeIcon)`
    padding: 0.5rem; 
    background-color: var(--staycay-red);
    color: #ffffff; 
    height: 1rem; 
    border-radius: 9999px; 
    cursor: pointer; 

    @media (min-width: 768px) { 
        display: inline-flex; 
        margin-left: 0.5rem;
        margin-right: 0.5rem; 
    }
`;

export const FilterSpan = styled.span`
    padding-right: 1.25rem; 
    text-align: center;
    background-color: transparent; 
    flex-grow: 1; 
    border: 0;
    outline: none; 
    color: #374151; 
    font-size: 0.75rem;
    line-height: 1rem; 
    font-weight: 700; 
    letter-spacing: 0.025em; 
    text-transform: uppercase; 
`;

export const InputSpan = styled.span`
    padding-left: 1.25rem; 
    background-color: transparent; 
    flex-grow: 1; 
    border: 0;
    outline: none; 
    color: #374151; 
    font-size: 0.75rem;
    line-height: 1rem; 
    font-weight: 700; 
    letter-spacing: 0.025em; 
    text-transform: uppercase; 
`;

// export const InputSearch = styled.input`
//     padding-left: 1.25rem;
//     background-color: transparent;
//     flex-grow: 1;
//     border: 1px solid var(--staycay-red);
//     padding: 0.5rem;
//     outline: none;
// `;

export const MainContentSearchContainer = styled.div`
    grid-template-columns: repeat(1, minmax(0, 1fr));
    /* padding-left: 30%;
    padding-right: 30%; */

    @media (min-width: 768px) { 
        display: grid;
        grid-template-columns: 0.25fr 0.25fr 0.25fr 0.25fr;
        justify-items: center;
        grid-column-gap: 0%;

        /* grid-template-columns: repeat(5, minmax(0, 1fr)); */
    
    }
`;

export const ContentSearchContainer = styled.div`
    padding: 1rem;
    height: 2.5rem;
    display: grid;
    align-items: center;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    /* box-shadow: 1px 0px 5px 0 rgba(0,0,0,0.5); */

    @media (min-width: 768px) { 
        height: 3.5rem;
        display: grid;
        align-items: center;
        grid-template-columns: repeat(1, minmax(0, 1fr));
        justify-items: center;
        padding: 10%; 
        /* border-radius: 9999px;  */
    }
`;

export const ButtonSearchContainer = styled.div`
    display: grid;
    align-items: center;
    justify-items: center;
    margin-top: 1rem;
    
    @media (min-width: 768px) { 
        margin-top: 0;
    }
`;

export const SearchContainer = styled.div`
    display: flex; 
    padding-top: 0.5rem;
    padding-bottom: 0.5rem; 
    align-items: center; 
    cursor: pointer;
    border-radius: 9999px; 
    box-shadow: 1px 0px 3px 0 rgba(0,0,0,0.5);

    &:hover {
        background-color: #F3F4F6; 
    }

    @media (min-width: 768px) { 
        border-width: 2px; 
    }
`;

export const ClearFilterContainer = styled.div`
    display: grid;
    align-items: center;
    justify-items: center;
    margin-top: 1rem;
    
    @media (min-width: 768px) { 
        margin-top: 0;
    }
`;

export const ClearFilterContentContainer = styled.div`
    display: flex; 
    padding-top: 0.5rem;
    padding-bottom: 0.5rem; 
    align-items: center; 
    cursor: pointer;
    border-radius: 9999px; 
    box-shadow: 1px 0px 3px 0 rgba(0,0,0,0.5);

    &:hover {
        background-color: #F3F4F6; 
    }

    @media (min-width: 768px) { 
        border-width: 2px; 
    }
`;

export const SearchFooterContainer = styled.div`
    display: grid;
    grid-template-columns: 0.5fr 0.5fr;
`;

// export const Label = styled.label`
//     display: block;
//     color: #374151;
//     font-size: 0.75rem;
//     line-height: 1rem;
//     font-weight: 700;
//     letter-spacing: 0.025em;
//     text-transform: uppercase;

//     @media (min-width: 768px) {
//         margin-bottom: 0.5rem;
//     }
// `;

// export const Select = styled.select`
//     display: block;
//     padding-top: 0.75rem;
//     padding-bottom: 0.75rem;
//     padding-left: 1rem;
//     padding-right: 1rem;
//     background-color: #ffffff;
//     color: #374151;
//     line-height: 1.25;
//     width: 100%;
//     border-radius: 0.25rem;
//     border-width: 1px;
//     border-color: var(--staycay-red);
//     appearance: none;

//     &:focus{
//         background-color: #ffffff;
//         border-color: var(--staycay-red);
//         outline: 0;
//     }
// `;
