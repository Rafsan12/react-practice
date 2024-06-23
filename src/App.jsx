import { useState } from "react";
import Chat from "./components/Chat/Chat";
import ContactList from "./components/Chat/ContactList";

function App() {
  const [to, setTo] = useState(contacts[0]);
  const [text, setText] = useState("");

  const handleTextXhange = (text) => {
    setText({
      ...text,
      [to.id]: text,
    });
  };
  return (
    <div>
      <ContactList
        contacts={contacts}
        selectedContact={to}
        onSelect={(contact) => setTo(contact)}
      />
      <Chat
        key={to.id}
        contact={to}
        text={text[to.id] || ""}
        onTextChanged={handleTextXhange}
      />
    </div>
  );
}

export default App;

const contacts = [
  { id: 0, name: "Taylor", email: "taylor@mail.com" },
  { id: 1, name: "Alice", email: "alice@mail.com" },
  { id: 2, name: "Bob", email: "bob@mail.com" },
];
