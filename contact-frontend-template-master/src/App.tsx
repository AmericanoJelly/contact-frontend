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

function App() {
  return (
    <AppContainer>
      <AppContainer.Title>Unit5 연락처</AppContainer.Title>
      <MainContainer>
        <MainContainer.EditBox>
          <h1>연락처를 등록하세요</h1>
          <EditItem title="이름" />
          <EditItem title="전화번호" />
          <EditItem title="회사번호" />
          <EditItem title="주소" />
          <EditItem title="설명" />
          <div className="buttonBox">
            <button aria-label="confirm">확인</button>
            <button aria-label="cancel">취소</button>
          </div>
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
