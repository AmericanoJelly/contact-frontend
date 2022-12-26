import React, { useState } from "react";
import "./App.css";
import AppContainer from "./components/AppContainer";
import MainContainer from "./components/MainContainer";
import ContactList from "./components/ContactList";
import SearchBox from "./components/SearchBox";
import EditItem from "./components/EditItem";
import ContactCard from "./components/ContactCard";
import EmptyBox from "./components/EmptyBox";
import ContactDetail from "./components/ContactDetail";
import AddContact from "./components/AddContact";

function App() {
  return (
    <AppContainer>
      <AppContainer.Title>Unit5 연락처</AppContainer.Title>
      <MainContainer>
        <MainContainer.EditBox>
         <AddContact onSubmit={function (form: { name: string; phoneNum: string; cno: string; adress: string; description: string; }): void {
            throw new Error("Function not implemented.");
          } } />
        </MainContainer.EditBox>
      </MainContainer>
      <MainContainer>
        <MainContainer.LeftBox>
          <SearchBox />
          <ContactList>
            <ContactCard/>
            <ContactCard/>
            <ContactCard/>
            <ContactCard/>
          </ContactList>
        </MainContainer.LeftBox>
        <MainContainer.RightBox>
          <ContactDetail/>
        </MainContainer.RightBox>
        <button className="circleButton mainContainer--circleButton__add">
          +
        </button>
        <button className="circleButton mainContainer--circleButton__mod">
          /
        </button>
        <button className="circleButton mainContainer--circleButton__del">
          -
        </button>
      </MainContainer>
      <MainContainer>
        <MainContainer.LeftBox>
          <SearchBox />
          <ContactList>
            <ContactCard/>
            <ContactCard/>
            <ContactCard/>
            <ContactCard/>
          </ContactList>
        </MainContainer.LeftBox>
        <MainContainer.RightBox>
          <EmptyBox/>
        </MainContainer.RightBox>
        <button className="circleButton mainContainer--circleButton__add">
          +
        </button>
        <button className="circleButton mainContainer--circleButton__mod">
          /
        </button>
        <button className="circleButton mainContainer--circleButton__del">
          -
        </button>
      </MainContainer>
    </AppContainer>
  );
}

export default App;
