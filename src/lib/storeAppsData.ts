export interface StoreAppItem {
  id: string;
  name: string;
  description: string;
  iconSrc: string;
  category: string;
  author: string;
  badge?: string;
}

export const STORE_APPS: StoreAppItem[] = [
  {
    id: "echogpt",
    name: "EchoGPT",
    description: "Interact with EchoGPT, an AI that reflects your input for quick ideas, summaries, or feedback. Perfect for brainstorming or rapid dialogue.",
    iconSrc: "/EchoGPT.svg",
    category: "General",
    author: "Echo Team",
  },
  {
    id: "deepseek-v4-pro",
    name: "DeepSeek V4 Pro",
    description: "DeepSeek specializes in advanced data exploration, leveraging AI to deliver accurate, insightful, and efficient solutions for complex analysis.",
    iconSrc: "/depseek.ico",
    category: "Reasoning",
    author: "DeepSeek AI",
  },
  {
    id: "nemotron-3-ultra",
    name: "Nemotron 3 Ultra",
    description: "Llama 3.1 Nemotron 70B Instruct fine-tuned for high precision reasoning and task delegation.",
    iconSrc: "/Nemotron 3 Ultra.webp",
    category: "Specialized",
    author: "NVIDIA",
  },
  {
    id: "glm-5-2",
    name: "GLM-5.2",
    description: "GLM-5.2 offers strong multilingual reasoning and coding across a 1M token context at a low cost per token.",
    iconSrc: "/glm.webp",
    category: "Multilingual",
    author: "Zhipu AI",
  },
  {
    id: "deepseek-v4-flash",
    name: "DeepSeek V4 Flash",
    description: "DeepSeek V4 Flash answers quickly over a 1M token context, tuned for rapid iteration at very low cost.",
    iconSrc: "/depseek.ico",
    category: "High Speed",
    author: "DeepSeek AI",
  },
  {
    id: "tencent-hy3",
    name: "Tencent Hy3",
    description: "Tencent Hunyuan 3 provides fast, budget-friendly responses for everyday chat, drafting, and summarisation.",
    iconSrc: "/Tencent Hy3.svg",
    category: "Productivity",
    author: "Tencent",
  },
  {
    id: "mimo-v2-5-pro",
    name: "MiMo V2.5 Pro",
    description: "MiMo V2.5 Pro adds stronger reasoning to the MiMo line while staying inexpensive over a 1M token context.",
    iconSrc: "/minimax.webp",
    category: "Logic & Code",
    author: "Xiaomi AI",
  },
  {
    id: "qwen-3-7-plus",
    name: "Qwen 3.7 Plus",
    description: "Qwen 3.7 Plus gives near-flagship quality at a fraction of the cost for daily reasoning and drafting.",
    iconSrc: "/qween.webp",
    category: "Reasoning",
    author: "Alibaba Cloud",
  },
  {
    id: "gpt-5-6-sol",
    name: "GPT-5.6 Sol",
    description: "GPT-5.6 Sol delivers OpenAI's flagship reasoning with a 1M token context, ideal for long documents and demanding analysis.",
    iconSrc: "/chatgpt.svg",
    category: "Flagship",
    author: "OpenAI",
  },
];
