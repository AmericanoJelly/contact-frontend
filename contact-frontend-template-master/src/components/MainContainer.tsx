import React from "react";

interface LayoutProps {
  children?: React.ReactNode;
}

interface Composition {
  LeftBox: React.FC<LayoutProps>;
  RightBox: React.FC<LayoutProps>;
  EditBox:React.FC<LayoutProps>;
}

const MainContainer: React.FC<LayoutProps> & Composition = ({ children }) => {
  return <div className="mainContainer">{children}</div>;
};

const LeftBox: React.FC<LayoutProps> = ({ children }) => {
  return <div className="mainContainer--leftBox">{children}</div>;
};

const RightBox: React.FC<LayoutProps> = ({ children }) => {
  return <div className="mainContainer--rightBox">{children}</div>;
};

const EditBox:React.FC<LayoutProps> = ({children}) => {
  return <div className="mainContainer--editBox">{children}</div>
}

MainContainer.LeftBox = LeftBox;
MainContainer.RightBox = RightBox;
MainContainer.EditBox = EditBox;

export default MainContainer;
