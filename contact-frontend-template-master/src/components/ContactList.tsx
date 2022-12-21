import React from "react";

const ContactList: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ul className="contactList" role="listbox" title="contactList">{children}</ul>
);

export default ContactList;
