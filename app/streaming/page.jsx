"use client";
import React, { useState } from "react";
import PageHeader from "../components/PageHeader";
import PromptBox from "../components/PromptBox";
import ResultStreaming from "../components/ResultStreaming";
import Title from "../components/Title";
import TwoColumnLayout from "app/components/TwoColumnLayout";
// Solution
import { OpenAI } from "langchain/llms/openai";
import { BufferMemory } from "langchain/memory";
import { ConversationChain } from "langchain/chains";
const Streaming = () => {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [error, setError] = useState(null);
  const [data, setData] = useState("");

  const handleSubmit = async () => {
    try {
      console.log(`Sending: Name - ${name}, City - ${city}`);
      const response = await fetch("/api/streaming", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ input: { name, city }, firstMsg: true }),
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.statusText}`);
      }
      const result = await response.json();
      setData(result.output); // Assuming the server response is formatted as { output: responseText }
    } catch (err) {
      console.error(err);
      setError(err.toString());
    }
  };

  return (
    <>
      <Title emoji="💭" headingText="Rap Generator" />
      <TwoColumnLayout
        leftChildren={
          <>
            <PageHeader
              heading="Create Your Rap"
              boldText="Let's generate a fun rap about your name and city!"
              description="Enter your name and city, and I'll generate a personalized rap just for you."
            />
          </>
        }
        rightChildren={
          <>
            <ResultStreaming data={data} />
            <PromptBox
              name={name}
              setName={setName}
              city={city}
              setCity={setCity}
              handleSubmit={handleSubmit}
              error={error}
              placeHolderText={"Enter your name and city"}
            />
          </>
        }
      />
    </>
  );
};

export default Streaming;
