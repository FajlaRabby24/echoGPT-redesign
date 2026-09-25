export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    id: "item-1",
    question: "What is EchoGPT and how is it different from ChatGPT or Claude?",
    answer:
      "EchoGPT is a unified AI command center that gives you direct access to the world's leading foundation models—including GPT-4o, Claude 3.5 Sonnet, Gemini 1.5 Pro, and DeepSeek R1—within a single workspace. Instead of paying for 4 separate subscriptions, you can query multiple models in parallel, compare outputs side-by-side, and automate complex workflows seamlessly.",
  },
  {
    id: "item-2",
    question: "Do I need to provide and manage my own API keys?",
    answer:
      "No! EchoGPT provides full, instant access to all frontier models out of the box with zero configuration. We manage all infrastructure, smart model routing, and token limits under a single flexible plan. You can also bring your own custom API keys if you prefer enterprise direct billing.",
  },
  {
    id: "item-3",
    question: "How does parallel multi-model comparison work?",
    answer:
      "With our Parallel Inference Arena, you can broadcast a single prompt to multiple selected models (e.g. GPT-4o + DeepSeek R1) simultaneously. Both models generate answers in real-time, allowing you to instantly benchmark speed, reasoning depth, and coding accuracy without switching tabs.",
  },
  {
    id: "item-4",
    question: "Is my proprietary code and conversation data private?",
    answer:
      "Yes, 100%. We enforce strict enterprise privacy standards: your prompts, code artifacts, and uploaded documents are never used for model training. All data is protected with end-to-end TLS 1.3 encryption in transit and AES-256 at rest with isolated user sessions.",
  },
  {
    id: "item-5",
    question: "Can I export my chat history, code artifacts, and prompts?",
    answer:
      "Yes. You can export conversations and code artifacts at any time in Markdown, JSON, PDF, or directly copy runnable code snippets with one click.",
  },
];
