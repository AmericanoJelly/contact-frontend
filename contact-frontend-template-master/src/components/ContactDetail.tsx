import React from "react";

function ContactDetail() {
  return (
    <div>
      <dl className="contactItem">
        <dt>이름</dt>
        <dt>contact.name</dt>
      </dl>
      <dl className="contactItem">
        <dt>회사번호</dt>
        <dt>contact.cno</dt>
      </dl>
      <dl className="contactItem">
        <dt>전화번호</dt>
        <dt>contact.phoneNumber</dt>
      </dl>
      <dl className="contactItem">
        <dt>주소</dt>
        <dt>contact.address</dt>
      </dl>
      <dl className="contactItem">
        <dt>설명</dt>
        <dt>contact.desc</dt>
      </dl>
    </div>
  );
}

export default ContactDetail;
