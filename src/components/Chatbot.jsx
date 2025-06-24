import { useState } from "react";
import { FcCustomerSupport } from "react-icons/fc";
import { chatbotPrompt } from "../constants/chatbotPrompt";

export default function Chatbot() {
  const [openModel, setOpenModel] = useState(false);
  const [chatWindow, setChatWindow] = useState(false);
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState([]); // <-- Stores convo

  async function callOpenRouter(prompt) {
    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer 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",
        },
        body: JSON.stringify({
          model: "openai/gpt-3.5-turbo-0613",
          messages: [
            {
              role: "system",
              content: chatbotPrompt,
            },
            { role: "user", content: prompt },
          ],
          temperature: 0.7,
        }),
      }
    );

    const data = await response.json();
    return data.choices[0].message.content;
  }

  async function getResponse(e) {
    e.preventDefault();
    if (!inputText.trim()) return;

    const userMsg = { role: "user", content: inputText };
    setMessages((prev) => [...prev, userMsg]);
    setInputText("");

    const botResponse = await callOpenRouter(inputText);
    const botMsg = { role: "assistant", content: botResponse };
    setMessages((prev) => [...prev, botMsg]);
  }

  return (
    <div
      style={{
        position: "fixed",
        bottom: 50,
        right: 60,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        zIndex: 1000,
      }}
      onMouseEnter={() => setOpenModel(true)}
      onMouseLeave={() => setOpenModel(false)}
    >
      {/* Hover Greeting */}
      {!chatWindow && (
        <p
          style={{
            padding: "10px 14px",
            borderRadius: "12px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            fontSize: "14px",
            backgroundColor: "white",
            maxWidth: "240px",
            color: "#000",
            opacity: openModel ? 1 : 0,
            visibility: openModel ? "visible" : "hidden",
            transition: "opacity 0.3s ease, visibility 0.3s ease",
          }}
        >
          Welcome to Tarun's portfolio! Click to ask anything!
        </p>
      )}

      {chatWindow && (
        <div
          style={{
            backgroundColor: "white",
            padding: "16px",
            borderRadius: "12px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
            marginBottom: "10px",
            width: "280px",
            maxHeight: "400px",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            overflowY: "auto",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            {messages.map((msg, i) => (
              <div
                key={i}
                style={{
                  alignSelf: msg.role === "user" ? "flex-end" : "flex-start",
                  backgroundColor: msg.role === "user" ? "#90a1b9" : "#51a2ff",
                  padding: "8px 12px",
                  borderRadius: "10px",
                  maxWidth: "80%",
                  fontSize: "14px",
                }}
              >
                {msg.content}
              </div>
            ))}
          </div>

          {/* Input */}
          <form onSubmit={getResponse} style={{ display: "flex", gap: "6px" }}>
            <input
              type="text"
              placeholder="Type here..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              style={{
                flexGrow: 1,
                padding: "8px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                fontSize: "14px",
              }}
            />
            <button
              type="submit"
              style={{
                padding: "8px 12px",
                backgroundColor: "#333",
                color: "white",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer",
              }}
            >
              Send
            </button>
          </form>
        </div>
      )}

      {/* Icon */}
      <FcCustomerSupport
        onClick={() => setChatWindow(!chatWindow)}
        style={{
          height: "55px",
          width: "55px",
          padding: "4px",
          backgroundColor: "white",
          borderRadius: "100%",
          cursor: "pointer",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.15)",
        }}
      />
    </div>
  );
}
