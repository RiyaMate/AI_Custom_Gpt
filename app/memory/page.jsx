// start here
/*"use client";
import { useState } from "react";
import PageHeader from "../components/PageHeader";
import PromptBox from "../components/PromptBox";
import ResultWithSources from "../components/ResultWithSources";
import Title from "../components/Title";
import TwoColumnLayout from "../components/TwoColumnLayout";
import "../globals.css";



const Memory = () => {
  const [prompt, setPrompt] = useState("");
  const [error, setError] = useState(null);
  const [messages, setMessages] = useState([
    {
      text: "Hi there! What's your favourite data science topic?",
      type: "bot",
    },
  ]);
  const [firstMsg, setFirstMsg] = useState(true);

  const handlePromptChange = (e) => {
    setPrompt(e.target.value);
  };

  const handleSubmitPrompt = async () => {
    console.log("sending ", prompt);
    try {
      // Update the user message
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: prompt, type: "user", sourceDocuments: null },
      ]);

      const response = await fetch("/api/memory", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ input: prompt, firstMsg }),
      });

      if (!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status}`);
      }

      setPrompt("");
      // So we don't reinitialize the chain
      setFirstMsg(false);
      const searchRes = await response.json();
      // Add the bot message
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: searchRes.output.response, type: "bot", sourceDocuments: null },
      ]);

      console.log({ searchRes });
      // Clear any old error messages
      setError("");
    } catch (err) {
      console.error(err);
      setError(err);
    }
  };

  return (
    <>
      <Title headingText={"Memory"} emoji="🧠" />
      <TwoColumnLayout
        leftChildren={
          <>
            <PageHeader
              heading="I remember everything"
              boldText="Let's see your favorite data science topic.  "
              description="This tool uses Buffer Memory and Conversation Chain."
            />
          </>
        }
        rightChildren={
          <>
            <ResultWithSources messages={messages} pngFile="brain" />
            <PromptBox
              prompt={prompt}
              handleSubmit={handleSubmitPrompt}
              error={error}
              handlePromptChange={handlePromptChange}
            />
          </>
        }
      />
    </>
  );
};

export default Memory;
*/

// start here
/*"use client";
import { useState } from "react";
import PageHeader from "../components/PageHeader";
import PromptBox from "../components/PromptBox";
import ResultWithSources from "../components/ResultWithSources";
import Title from "../components/Title";
import TwoColumnLayout from "../components/TwoColumnLayout";
import "../globals.css";



const Memory = () => {
  const [prompt, setPrompt] = useState("");
  const [error, setError] = useState(null);
  const [messages, setMessages] = useState([
    {
      text: "Hi there! What's your favourite data science topic?",
      type: "bot",
    },
  ]);
  const [firstMsg, setFirstMsg] = useState(true);
  const [followUpNeeded, setFollowUpNeeded] = useState(false);

  const handlePromptChange = (e) => {
    setPrompt(e.target.value);
  };

  const handleFollowUpQuestion = (topic) => {
    // Generate follow-up question based on the topic
    const questions = {
      "machine learning": "What specific area of machine learning are you interested in?",
      "data analysis": "Which tools do you use for data analysis?",
      "statistics": "Are you looking for statistical theory or applied statistics?"
    };

    return questions[topic] || "Can you tell me more about that?";
  };

  const handleSubmitPrompt = async () => {
    console.log("sending ", prompt);
    try {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: prompt, type: "user", sourceDocuments: null },
      ]);

      const response = await fetch("/api/memory", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ input: prompt, firstMsg }),
      });

      if (!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status}`);
      }

      const searchRes = await response.json();

      setPrompt("");
      setFirstMsg(false);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: searchRes.output.response, type: "bot", sourceDocuments: null },
      ]);

      // Check if a follow-up question is needed
      if (searchRes.output.followUpNeeded) {
        const followUpQuestion = handleFollowUpQuestion(prompt.toLowerCase());
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: followUpQuestion, type: "bot" }
        ]);
        setFollowUpNeeded(true);
      } else {
        setFollowUpNeeded(false);
      }

      console.log({ searchRes });
      setError("");  // Clear any old error messages
    } catch (err) {
      console.error(err);
      setError(err);
    }
  };

  return (
    <>
      <Title headingText={"Memory"} emoji="🧠" />
      <TwoColumnLayout
        leftChildren={
          <>
            <PageHeader
              heading="I remember everything"
              boldText="Let's see your favorite data science topic."
              description="This tool uses Buffer Memory and Conversation Chain."
            />
          </>
        }
        rightChildren={
          <>
            <ResultWithSources messages={messages} pngFile="brain" />
            <PromptBox
              prompt={prompt}
              handleSubmit={handleSubmitPrompt}
              error={error}
              handlePromptChange={handlePromptChange}
              followUpNeeded={followUpNeeded}
            />
          </>
        }
      />
    </>
  );
};

export default Memory;
*/
/*
// start here
"use client";
import { useState } from "react";
import PageHeader from "../components/PageHeader";
import PromptBox from "../components/PromptBox";
import ResultWithSources from "../components/ResultWithSources";
import Title from "../components/Title";
import TwoColumnLayout from "../components/TwoColumnLayout";
import "../globals.css";

const Memory = () => {
  const [prompt, setPrompt] = useState("");
  const [error, setError] = useState(null);
  const [messages, setMessages] = useState([
    {
      text: "Hi there! What's your favourite data science topic?",
      type: "bot",
    },
  ]);
  const [firstMsg, setFirstMsg] = useState(true);
  const [followUpNeeded, setFollowUpNeeded] = useState(false);

  const handlePromptChange = (e) => {
    setPrompt(e.target.value);
  };

  // Function to generate a short rap based on the topic
  const generateRap = (topic) => {
    const raps = {
      "machine learning": "Machine learning, my data's clean, algorithms strong, if you know what I mean!",
      "data analysis": "Data analysis, dive deep, insights to gain, keep you up, no time to sleep!",
      "statistics": "Statistics, numbers game, playing with data, that's my fame!"
    };
    return raps[topic.toLowerCase()] || "Here's a rap, data in my cap, crunching numbers, no time for nap!";
  };

  const handleSubmitPrompt = async () => {
    console.log("sending ", prompt);
    try {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: prompt, type: "user", sourceDocuments: null },
      ]);

      const response = await fetch("/api/memory", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ input: prompt, firstMsg }),
      });

      if (!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status}`);
      }

      const searchRes = await response.json();
      const topicResponse = searchRes.output.response;

      // Generate a rap after receiving the topic response
      const rap = generateRap(prompt);

      setPrompt("");
      setFirstMsg(false);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: topicResponse, type: "bot", sourceDocuments: null },
        { text: rap, type: "bot", sourceDocuments: null },  // Add the generated rap to the messages
      ]);

      if (searchRes.output.followUpNeeded) {
        setFollowUpNeeded(true);
      } else {
        setFollowUpNeeded(false);
      }

      console.log({ searchRes });
      setError("");  // Clear any old error messages
    } catch (err) {
      console.error(err);
      setError(err.toString());
    }
  };

  return (
    <>
      <Title headingText={"Memory"} emoji="🧠" />
      <TwoColumnLayout
        leftChildren={
          <>
            <PageHeader
              heading="I remember everything"
              boldText="Let's see your favorite data science topic."
              description="This tool uses Buffer Memory and Conversation Chain."
            />
          </>
        }
        rightChildren={
          <>
            <ResultWithSources messages={messages} pngFile="brain" />
            <PromptBox
              prompt={prompt}
              handleSubmit={handleSubmitPrompt}
              error={error}
              handlePromptChange={handlePromptChange}
              followUpNeeded={followUpNeeded}
            />
          </>
        }
      />
    </>
  );
};

export default Memory;
*/

// start here
/*"use client";
import { useState } from "react";
import PageHeader from "../components/PageHeader";
import PromptBox from "../components/PromptBox";
import ResultWithSources from "../components/ResultWithSources";
import Title from "../components/Title";
import TwoColumnLayout from "../components/TwoColumnLayout";
import "../globals.css";

const Memory = () => {
  const [prompt, setPrompt] = useState("");
  const [error, setError] = useState(null);
  const [messages, setMessages] = useState([
    {
      text: "Hi there! What's your favourite data science topic?",
      type: "bot",
    },
  ]);
  const [firstMsg, setFirstMsg] = useState(true);
  const [followUpNeeded, setFollowUpNeeded] = useState(false);

  const handlePromptChange = (e) => {
    setPrompt(e.target.value);
  };

  // Function to generate a long rap based on the topic
  const generateRap = (topic) => {
    const topics = {
      "machine learning": [
        "Machine learning, my data's clean,",
        "Algorithms strong, if you know what I mean!",
        "From neural nets to decision trees,",
        "Finding patterns with the greatest ease."
      ],
      "data analysis": [
        "Data analysis, dive deep, insights to gain,",
        "Sorting through data, it's not in vain!",
        "Tables and graphs, they tell the tale,",
        "With each insight, we will not fail."
      ],
      "statistics": [
        "Statistics, numbers game, playing with data, that's my fame!",
        "Probability, regression, surveys and tests,",
        "Inferential, descriptive, beating all the rest."
      ]
    };
    const defaultRap = [
      "Here's a rap, data in my cap,",
      "Crunching numbers, no time for nap,",
      "Statistics, machine learning, all the buzz,",
      "Data science, that's what it does!"
    ];
    return topics[topic.toLowerCase()] ? topics[topic.toLowerCase()].join("\n") : defaultRap.join("\n");
  };

  const handleSubmitPrompt = async () => {
    console.log("sending ", prompt);
    try {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: prompt, type: "user", sourceDocuments: null },
      ]);

      const response = await fetch("/api/memory", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ input: prompt, firstMsg }),
      });

      if (!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status}`);
      }

      const searchRes = await response.json();
      const topicResponse = searchRes.output.response;

      // Generate a rap after receiving the topic response
      const rap = generateRap(prompt);

      setPrompt("");
      setFirstMsg(false);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: topicResponse, type: "bot", sourceDocuments: null },
        { text: "Here is your custom rap:", type: "bot" },
        { text: rap, type: "bot", sourceDocuments: null },  // Add the generated rap to the messages
      ]);

      if (searchRes.output.followUpNeeded) {
        setFollowUpNeeded(true);
      } else {
        setFollowUpNeeded(false);
      }

      console.log({ searchRes });
      setError("");  // Clear any old error messages
    } catch (err) {
      console.error(err);
      setError(err.toString());
    }
  };

  return (
    <>
      <Title headingText={"Memory"} emoji="🧠" />
      <TwoColumnLayout
        leftChildren={
          <>
            <PageHeader
              heading="I remember everything"
              boldText="Let's see your favorite data science topic."
              description="This tool uses Buffer Memory and Conversation Chain."
            />
          </>
        }
        rightChildren={
          <>
            <ResultWithSources messages={messages} pngFile="brain" />
            <PromptBox
              prompt={prompt}
              handleSubmit={handleSubmitPrompt}
              error={error}
              handlePromptChange={handlePromptChange}
              followUpNeeded={followUpNeeded}
            />
          </>
        }
      />
    </>
  );
};

export default Memory;
*/

// start here
/*
"use client";
import { useState, useEffect } from "react";
import PageHeader from "../components/PageHeader";
import PromptBox from "../components/PromptBox";
import ResultWithSources from "../components/ResultWithSources";
import Title from "../components/Title";
import TwoColumnLayout from "../components/TwoColumnLayout";
import "../globals.css";

const Memory = () => {
  const [prompt, setPrompt] = useState("");
  const [error, setError] = useState(null);
  const [messages, setMessages] = useState([
    {
      text: "Hi there! What's your favourite data science topic?",
      type: "bot",
    },
  ]);
  const [firstMsg, setFirstMsg] = useState(true);

  const handlePromptChange = (e) => {
    setPrompt(e.target.value);
  };

  const generateRap = (topic) => {
    const topics = {
      "machine learning": [
        "Machine learning, my data's clean,",
        "Algorithms strong, if you know what I mean!",
        "From neural nets to decision trees,",
        "Finding patterns with the greatest ease."
      ],
      "data analysis": [
        "Data analysis, dive deep, insights to gain,",
        "Sorting through data, it's not in vain!",
        "Tables and graphs, they tell the tale,",
        "With each insight, we will not fail."
      ],
      "statistics": [
        "Statistics, numbers game, playing with data, that's my fame!",
        "Probability, regression, surveys and tests,",
        "Inferential, descriptive, beating all the rest."
      ]
    };
    const defaultRap = [
      "Here's a rap, data in my cap,",
      "Crunching numbers, no time for nap,",
      "Statistics, machine learning, all the buzz,",
      "Data science, that's what it does!"
    ];
    const cleanTopic = topic.toLowerCase().trim();
    return (topics[cleanTopic] || defaultRap).join("\n");
  };

  const handleSubmitPrompt = async () => {
    console.log("sending ", prompt);
    const userMessage = { text: prompt, type: "user", sourceDocuments: null };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    try {
      const response = await fetch("/api/memory", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ input: prompt, firstMsg }),
      });

      if (!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status}`);
      }

      const searchRes = await response.json();
      const topicResponse = { text: searchRes.output.response, type: "bot", sourceDocuments: null };
      const rap = generateRap(prompt);
      const rapAnnouncement = { text: "Here is your custom rap:", type: "bot" };

      setPrompt("");
      setFirstMsg(false);
      setMessages((prevMessages) => [
        ...prevMessages,
        topicResponse,
        rapAnnouncement,
        { text: rap, type: "bot", sourceDocuments: null }
      ]);
      setError("");  // Clear any old error messages
    } catch (err) {
      console.error(err);
      setError(err.toString());
      setMessages((prevMessages) => [...prevMessages, { text: err.toString(), type: "bot" }]);
    }
  };

  return (
    <>
      <Title headingText={"Memory"} emoji="🧠" />
      <TwoColumnLayout
        leftChildren={
          <PageHeader
            heading="I remember everything"
            boldText="Let's see your favorite data science topic."
            description="This tool uses Buffer Memory and Conversation Chain."
          />
        }
        rightChildren={
          <>
            <ResultWithSources messages={messages} pngFile="brain" />
            <PromptBox
              prompt={prompt}
              handleSubmit={handleSubmitPrompt}
              error={error}
              handlePromptChange={handlePromptChange}
            />
          </>
        }
      />
    </>
  );
};

export default Memory;*/

/*"use client";
import { useState } from "react";
import PageHeader from "../components/PageHeader";
import PromptBox from "../components/PromptBox";
import ResultWithSources from "../components/ResultWithSources";
import Title from "../components/Title";
import TwoColumnLayout from "../components/TwoColumnLayout";
import "../globals.css";

const Memory = () => {
  const [prompt, setPrompt] = useState("");
  const [error, setError] = useState(null);
  const [messages, setMessages] = useState([
    {
      text: "Hi there! What's your favourite data science topic?",
      type: "bot",
    },
  ]);
  const [firstMsg, setFirstMsg] = useState(true);

  const handlePromptChange = (e) => {
    setPrompt(e.target.value);
  };

  const getCustomPrompt = (input) => {
    const lowerInput = input.toLowerCase();
    if (lowerInput.includes("machine learning")) {
      return "Which aspect of machine learning are you interested in? Perhaps neural networks or decision trees?";
    } else if (lowerInput.includes("data analysis")) {
      return "What type of data analysis techniques do you prefer using? Statistical, predictive, or diagnostic?";
    } else if (lowerInput.includes("statistics")) {
      return "Are you more into descriptive statistics or inferential statistics?";
    } else {
      return "Can you specify a bit more about your interests in data science?";
    }
  };

  const generateRap = (input) => {
    const topics = {
      "machine learning": [
        "Machine learning, my data's clean,",
        "Algorithms strong, if you know what I mean!",
        "From neural nets to decision trees,",
        "Finding patterns with the greatest ease."
      ],
      "data analysis": [
        "Data analysis, dive deep, insights to gain,",
        "Sorting through data, it's not in vain!",
        "Tables and graphs, they tell the tale,",
        "With each insight, we will not fail."
      ],
      "statistics": [
        "Statistics, numbers game, playing with data, that's my fame!",
        "Probability, regression, surveys and tests,",
        "Inferential, descriptive, beating all the rest."
      ]
    };
    const defaultRap = [
      "Here's a rap, data in my cap,",
      "Crunching numbers, no time for nap,",
      "Statistics, machine learning, all the buzz,",
      "Data science, that's what it does!"
    ];
    let selectedRap = defaultRap;
    Object.keys(topics).forEach(key => {
      if (input.toLowerCase().includes(key)) {
        selectedRap = topics[key];
      }
    });
    return selectedRap.join("\n");
  };

  const handleSubmitPrompt = async () => {
    console.log("sending ", prompt);
    const userMessage = { text: prompt, type: "user" };
    setMessages(prevMessages => [...prevMessages, userMessage]);

    try {
      const response = await fetch("/api/memory", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ input: prompt, firstMsg }),
      });

      if (!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status}`);
      }

      const searchRes = await response.json();
      const topicResponse = { text: searchRes.output.response, type: "bot" };
      const customPrompt = getCustomPrompt(prompt);
      const customPromptMessage = { text: customPrompt, type: "bot" };

      const rap = generateRap(prompt);
      const rapAnnouncement = { text: "Here is your custom rap:", type: "bot" };

      setPrompt("");
      setFirstMsg(false);
      setMessages(prevMessages => [
        ...prevMessages,
        topicResponse,
        customPromptMessage,
        rapAnnouncement,
        { text: rap, type: "bot" }
      ]);
      setError("");  // Clear any old error messages
    } catch (err) {
      console.error(err);
      setError(err.toString());
      setMessages(prevMessages => [...prevMessages, { text: err.toString(), type: "bot" }]);
    }
  };

  return (
    <>
      <Title headingText={"Memory"} emoji="🧠" />
      <TwoColumnLayout
        leftChildren={
          <PageHeader
            heading="I remember everything"
            boldText="Let's see your favorite data science topic."
            description="This tool uses Buffer Memory and Conversation Chain."
          />
        }
        rightChildren={
          <>
            <ResultWithSources messages={messages} pngFile="brain" />
            <PromptBox
              prompt={prompt}
              handleSubmit={handleSubmitPrompt}
              error={error}
              handlePromptChange={handlePromptChange}
            />
          </>
        }
      />
    </>
  );
};

export default Memory;*/


/*"use client";
import { useState } from "react";
import PageHeader from "../components/PageHeader";
import PromptBox from "../components/PromptBox";
import ResultWithSources from "../components/ResultWithSources";
import Title from "../components/Title";
import TwoColumnLayout from "../components/TwoColumnLayout";
import "../globals.css";

const Memory = () => {
  const [prompt, setPrompt] = useState("");
  const [error, setError] = useState(null);
  const [messages, setMessages] = useState([
    {
      text: "Hi there! What's your favourite data science topic?",
      type: "bot",
    },
  ]);
  const [firstMsg, setFirstMsg] = useState(true);

  const handlePromptChange = (e) => {
    setPrompt(e.target.value);
  };

  // Function to generate dynamic follow-up questions based on the topic
  const generateFollowUpQuestion = (input) => {
    const lowerInput = input.toLowerCase();
    const questions = {
      "machine learning": "What particular area in machine learning excites you the most?",
      "data analysis": "Do you use any specific tools for your data analysis tasks?",
      "statistics": "Which statistical methods do you find most effective?",
      "python": "Are you using Python for data science? What libraries do you prefer?",
      "deep learning": "Deep learning is transforming many industries. What application interests you?"
    };

    for (let key in questions) {
      if (lowerInput.includes(key)) {
        return questions[key];
      }
    }
    return "Can you tell me more about your interest?";
  };

  const handleSubmitPrompt = async () => {
    console.log("sending ", prompt);
    const userMessage = { text: prompt, type: "user" };
    setMessages(prevMessages => [...prevMessages, userMessage]);

    try {
      const response = await fetch("/api/memory", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ input: prompt, firstMsg }),
      });

      if (!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status}`);
      }

      const searchRes = await response.json();
      const topicResponse = { text: searchRes.output.response, type: "bot" };
      const followUpQuestion = generateFollowUpQuestion(prompt);
      const followUpMessage = { text: followUpQuestion, type: "bot" };

      setPrompt("");
      setFirstMsg(false);
      setMessages(prevMessages => [
        ...prevMessages,
        topicResponse,
        followUpMessage
      ]);
      setError("");  // Clear any old error messages
    } catch (err) {
      console.error(err);
      setError(err.toString());
      setMessages(prevMessages => [...prevMessages, { text: err.toString(), type: "bot" }]);
    }
  };

  return (
    <>
      <Title headingText={"Memory"} emoji="🧠" />
      <TwoColumnLayout
        leftChildren={
          <PageHeader
            heading="I remember everything"
            boldText="Let's explore your data science interests."
            description="Engage and learn more about data science topics."
          />
        }
        rightChildren={
          <>
            <ResultWithSources messages={messages} pngFile="brain" />
            <PromptBox
              prompt={prompt}
              handleSubmit={handleSubmitPrompt}
              error={error}
              handlePromptChange={handlePromptChange}
            />
          </>
        }
      />
    </>
  );
};

export default Memory;*/

"use client";
import { useState } from "react";
import PageHeader from "../components/PageHeader";
import PromptBox from "../components/PromptBox";
import ResultWithSources from "../components/ResultWithSources";
import Title from "../components/Title";
import TwoColumnLayout from "../components/TwoColumnLayout";
import "../globals.css";

const Memory = () => {
  const [prompt, setPrompt] = useState("");
  const [error, setError] = useState(null);
  const [messages, setMessages] = useState([
    {
      text: "Hi there! What's your favourite  topic?",
      type: "bot",
    },
  ]);
  const [firstMsg, setFirstMsg] = useState(true);

  const handlePromptChange = (e) => {
    setPrompt(e.target.value);
  };

  const handleSubmitPrompt = async () => {
    console.log("sending ", prompt);
    const userMessage = { text: prompt, type: "user" };
    setMessages(prevMessages => [...prevMessages, userMessage]);

    try {
      const response = await fetch("/api/memory", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ input: prompt, firstMsg }),
      });

      if (!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status}`);
      }

      const searchRes = await response.json();
      const topicResponse = { text: searchRes.output.response, type: "bot" };

      setPrompt("");
      setFirstMsg(false);
      setMessages(prevMessages => [
        ...prevMessages,
        topicResponse
      ]);
      setError("");  // Clear any old error messages
    } catch (err) {
      console.error(err);
      setError(err.toString());
      setMessages(prevMessages => [...prevMessages, { text: err.toString(), type: "bot" }]);
    }
  };

  return (
    <>
      <Title headingText={"Memory"} emoji="🧠" />
      <TwoColumnLayout
        leftChildren={
          <PageHeader
            heading="I remember everything"
            boldText="Let's explore your  interests."
            description="Engage and learn more about your favourite topics."
          />
        }
        rightChildren={
          <>
            <ResultWithSources messages={messages} pngFile="brain" />
            <PromptBox
              prompt={prompt}
              handleSubmit={handleSubmitPrompt}
              error={error}
              handlePromptChange={handlePromptChange}
            />
          </>
        }
      />
    </>
  );
};

export default Memory;

