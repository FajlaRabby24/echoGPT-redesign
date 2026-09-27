export interface CompareModel {
  id: string;
  name: string;
  provider: string;
  iconSrc: string;
  badge: string;
  speed: string;
}

export interface ComparisonAnswer {
  modelId: string;
  modelName: string;
  provider: string;
  iconSrc: string;
  responseTime: string;
  tokensUsed: number;
  content: string;
  strengths: string[];
}

export const ALL_AVAILABLE_COMPARE_MODELS: CompareModel[] = [
  {
    id: "echogpt",
    name: "EchoGPT Pro",
    provider: "EchoGPT Engine",
    iconSrc: "/EchoGPT.svg",
    badge: "Balanced & Accurate",
    speed: "0.74s",
  },
  {
    id: "gpt-4o",
    name: "ChatGPT-4o",
    provider: "OpenAI",
    iconSrc: "/chatgpt.svg",
    badge: "Reasoning & Versatile",
    speed: "0.89s",
  },
  {
    id: "gemini-1.5-pro",
    name: "Gemini 1.5 Pro",
    provider: "Google",
    iconSrc: "/gemini.svg",
    badge: "2M Token Context",
    speed: "0.95s",
  },
  {
    id: "deepseek-r1",
    name: "DeepSeek R1",
    provider: "DeepSeek AI",
    iconSrc: "/depseek.ico",
    badge: "Deep Math & Logic",
    speed: "1.12s",
  },
  {
    id: "grok-2",
    name: "Grok 2",
    provider: "xAI",
    iconSrc: "/grok.ico",
    badge: "Real-time & Unfiltered",
    speed: "0.82s",
  },
  {
    id: "llama-3-3",
    name: "Llama 3.3 70B",
    provider: "Meta AI",
    iconSrc: "/meta.webp",
    badge: "Open Source Leader",
    speed: "0.68s",
  },
  {
    id: "qwen-2-5",
    name: "Qwen 2.5 72B",
    provider: "Alibaba Cloud",
    iconSrc: "/qween.webp",
    badge: "High Multilingual",
    speed: "0.85s",
  },
  {
    id: "glm-4",
    name: "GLM-4 Plus",
    provider: "Zhipu AI",
    iconSrc: "/glm.webp",
    badge: "Fast Reasoning",
    speed: "0.78s",
  },
];

export const DEFAULT_COMPARE_MODELS: CompareModel[] =
  ALL_AVAILABLE_COMPARE_MODELS.slice(0, 5);

export const SAMPLE_COMPARISON_ANSWERS: {
  default: ComparisonAnswer[];
} = {
  default: [
    {
      modelId: "echogpt",
      modelName: "EchoGPT Pro",
      provider: "EchoGPT Engine",
      iconSrc: "/EchoGPT.svg",
      responseTime: "0.74s",
      tokensUsed: 312,
      content: `Microservices vs Monolithic Architecture Trade-offs:

1. Complexity & Maintenance: Monoliths offer straightforward deployments and unified debugging, whereas Microservices introduce distributed tracing and network boundary complexities.
2. Scalability: Microservices allow fine-grained scaling of compute-heavy domains independently. Monoliths require scaling the entire application stack uniformly.
3. Organizational Alignment: Microservices empower autonomous squad teams with separate release cycles; monolithic setups excel for early-stage velocity with small co-located teams.`,
      strengths: ["Clean Structure", "Practical Synthesis", "High Velocity"],
    },
    {
      modelId: "gpt-4o",
      modelName: "ChatGPT-4o",
      provider: "OpenAI",
      iconSrc: "/chatgpt.svg",
      responseTime: "0.89s",
      tokensUsed: 384,
      content: `The core decision hinges on organizational maturity and scaling requirements:

• Monolithic System:
  - Advantages: Shared memory calls, immediate transactional consistency (ACID), simple CI/CD pipelines.
  - Challenges: Single point of failure, tightly coupled dependencies, deploy bottlenecks as team size grows.

• Microservice Ecosystem:
  - Advantages: Polyglot tech stacks, independent domain deployments, resilient fault isolation.
  - Challenges: Eventual consistency (BASE), network latency overhead, elevated operational overhead (Kubernetes, Service Mesh).`,
      strengths: ["Comprehensive", "Nuanced Trade-offs", "Production Perspective"],
    },
    {
      modelId: "gemini-1.5-pro",
      modelName: "Gemini 1.5 Pro",
      provider: "Google",
      iconSrc: "/gemini.svg",
      responseTime: "0.95s",
      tokensUsed: 340,
      content: `Key Trade-offs Breakdown:

1. Latency: Monoliths execute intra-process calls (<1ms) compared to network serialization (gRPC/HTTP 5-50ms) across microservices.
2. Resilience: Microservices limit blast radiuses if an individual service crashes; however, cascading failures require circuit breakers.
3. Recommendation: Start with a well-bounded modular monolith. Decompose into microservices only when distinct scaling boundaries or independent team cadences emerge.`,
      strengths: ["Strategic Advice", "Clear Latency Analysis", "Pragmatic"],
    },
    {
      modelId: "deepseek-r1",
      modelName: "DeepSeek R1",
      provider: "DeepSeek AI",
      iconSrc: "/depseek.ico",
      responseTime: "1.12s",
      tokensUsed: 420,
      content: `Rigorous architectural trade-off analysis:

- Computational Efficiency: Monoliths maximize CPU cache hits and eliminate distributed serialization costs.
- Data Consistency: Dual-write dilemmas and distributed transactions (Saga pattern) in microservices introduce state reconciliation burdens.
- Operational Complexity Tax: The infra surface area scales exponentially with services (observability, service discovery, security perimeters).

Conclusion: The modular monolith offers ~80% of microservice encapsulation benefits with <20% of the operational overhead.`,
      strengths: ["Deep Analysis", "Distributed Systems Focus", "Strong Rigor"],
    },
    {
      modelId: "grok-2",
      modelName: "Grok 2",
      provider: "xAI",
      iconSrc: "/grok.ico",
      responseTime: "0.82s",
      tokensUsed: 295,
      content: `Cut through the architectural hype:

• Don't build microservices if you have fewer than 20 engineers. You'll spend half your time fixing Kubernetes ingress and Kafka lag instead of shipping product.
• Monoliths aren't outdated legacy; Shopify and GitHub run gigantic monoliths handling massive traffic.
• Pick microservices when distinct teams can't deploy without stepping on each other's toes or when specific algorithms need dedicated GPU compute.`,
      strengths: ["Direct & Candid", "Real-world Truth", "Zero Fluff"],
    },
  ],
};
