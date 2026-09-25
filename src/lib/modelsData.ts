export interface AiModel {
  id: string;
  name: string;
  provider: string;
  badge: string;
  imageSrc: string;
}

export const firstRowModels: AiModel[] = [
  {
    id: "chatgpt",
    name: "ChatGPT (GPT-4o)",
    provider: "OpenAI",
    badge: "Omni & Multimodal",
    imageSrc: "/chatgpt.svg",
  },
  {
    id: "gemini",
    name: "Gemini 1.5 Pro",
    provider: "Google DeepMind",
    badge: "2M Context",
    imageSrc: "/gemini.svg",
  },
  {
    id: "deepseek",
    name: "DeepSeek R1",
    provider: "DeepSeek AI",
    badge: "Reasoning & STEM",
    imageSrc: "/depseek.ico",
  },
  {
    id: "grok",
    name: "Grok 2",
    provider: "xAI",
    badge: "Real-Time Truth",
    imageSrc: "/grok.ico",
  },
  {
    id: "meta",
    name: "Llama 3.3 70B",
    provider: "Meta AI",
    badge: "Open Source Power",
    imageSrc: "/meta.webp",
  },
  {
    id: "qwen",
    name: "Qwen 2.5 72B",
    provider: "Alibaba Cloud",
    badge: "Top Tier Coding",
    imageSrc: "/qween.webp",
  },
  {
    id: "kimi",
    name: "Kimi k0-math",
    provider: "Moonshot AI",
    badge: "Long Context",
    imageSrc: "/kimi.webp",
  },
];

export const secondRowModels: AiModel[] = [
  {
    id: "glm",
    name: "GLM-4-Plus",
    provider: "Zhipu AI",
    badge: "Multi-modal MoE",
    imageSrc: "/glm.webp",
  },
  {
    id: "minimax",
    name: "MiniMax abab 6.5",
    provider: "MiniMax",
    badge: "245K Context",
    imageSrc: "/minimax.webp",
  },
  {
    id: "step",
    name: "Step-2 1T",
    provider: "StepFun",
    badge: "Trillion Parameter",
    imageSrc: "/step.webp",
  },
  {
    id: "nemotron",
    name: "Nemotron 3 Ultra",
    provider: "NVIDIA AI",
    badge: "Enterprise LLM",
    imageSrc: "/Nemotron 3 Ultra.webp",
  },
  {
    id: "tencent",
    name: "Tencent Hunyuan",
    provider: "Tencent AI",
    badge: "389B MoE",
    imageSrc: "/Tencent Hy3.svg",
  },
  {
    id: "longchat",
    name: "LongChat 32k",
    provider: "LMSYS Org",
    badge: "Extended Context",
    imageSrc: "/longchat.webp",
  },
];
