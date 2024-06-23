/* eslint-disable react/prop-types */
export default function Chat({ contact, text, onTextChanged }) {
  return (
    <section className="chat">
      <h2>Chat with {contact.name}</h2>
      <textarea
        value={text}
        placeholder={"Chat to " + contact.name}
        onChange={(e) => onTextChanged(e.target.value)}
      />
      <br />
      <button>Send to {contact.email}</button>
    </section>
  );
}
