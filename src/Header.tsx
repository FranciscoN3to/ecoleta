import React from 'react';
 
interface HeaderProps {
    title: string;
}

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  return <header>
      <h1>{props.title}</h1>
  </header>;
}

export default Header;