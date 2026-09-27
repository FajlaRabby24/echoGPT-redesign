export interface ImageModel {
  id: string;
  name: string;
  provider: string;
  baseCredits: number;
  badge?: string;
  description: string;
}

export interface AspectRatioOption {
  id: string;
  label: string;
  ratio: string;
  resolution: string;
  extraCredits: number;
}

export interface UserCreation {
  id: string;
  prompt: string;
  imageUrl: string;
  aspectRatio: string;
  modelName: string;
  creditsUsed: number;
  createdAt: string;
  likes: number;
  category: string;
}

export const IMAGE_MODELS: ImageModel[] = [
  {
    id: "nano-banana-2",
    name: "Nano Banana 2 Lite",
    provider: "Echo Labs",
    baseCredits: 1,
    badge: "Fast & Efficient",
    description: "Ultra-fast generation optimized for everyday creative concepts.",
  },
  {
    id: "flux-1-pro",
    name: "Flux 1.1 Pro",
    provider: "Black Forest Labs",
    baseCredits: 2,
    badge: "Photorealistic",
    description: "State-of-the-art anatomy, text rendering, and cinematic lighting.",
  },
  {
    id: "dall-e-3-hd",
    name: "DALL·E 3 HD",
    provider: "OpenAI",
    baseCredits: 3,
    badge: "Prompt Fidelity",
    description: "Exceptional prompt understanding and coherent complex scenes.",
  },
  {
    id: "midjourney-v6",
    name: "Midjourney v6.1",
    provider: "Midjourney",
    baseCredits: 4,
    badge: "Artistic Master",
    description: "Exquisite aesthetics, hyper-detail, and stunning artistic flair.",
  },
];

export const ASPECT_RATIOS: AspectRatioOption[] = [
  { id: "1:1", label: "1:1", ratio: "1 / 1", resolution: "1024 × 1024 (Square)", extraCredits: 0 },
  { id: "3:2", label: "3:2", ratio: "3 / 2", resolution: "1216 × 832 (Landscape)", extraCredits: 0 },
  { id: "2:3", label: "2:3", ratio: "2 / 3", resolution: "832 × 1216 (Portrait)", extraCredits: 0 },
  { id: "auto", label: "auto", ratio: "16 / 9", resolution: "1344 × 768 (Widescreen)", extraCredits: 1 },
];

export const INITIAL_USER_CREATIONS: UserCreation[] = [
  {
    id: "creation-1",
    prompt: "Turn my photo into a professional studio headshot, soft rim lighting, shallow depth of field, 85mm portrait lens, 8k crisp details",
    imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80",
    aspectRatio: "1:1",
    modelName: "Nano Banana 2 Lite",
    creditsUsed: 1,
    createdAt: "Just now",
    likes: 24,
    category: "Portraits",
  },
  {
    id: "creation-2",
    prompt: "Futuristic neon solarpunk atrium with cascading bio-luminescent plants, sleek glass curves, volumetric sunlight beams, architectural photography",
    imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=80",
    aspectRatio: "3:2",
    modelName: "Flux 1.1 Pro",
    creditsUsed: 2,
    createdAt: "10m ago",
    likes: 42,
    category: "Architecture",
  },
  {
    id: "creation-3",
    prompt: "Cyberpunk street vendor in rain-slicked Tokyo alleyway, holographic signage reflections, cinematic color grading, moody ambient light",
    imageUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1000&q=80",
    aspectRatio: "2:3",
    modelName: "Midjourney v6.1",
    creditsUsed: 4,
    createdAt: "1h ago",
    likes: 89,
    category: "Cinematic",
  },
  {
    id: "creation-4",
    prompt: "Minimalist ceramic sculpture on pastel pedestal, abstract geometric shadows, contemporary museum aesthetic, clean studio lighting",
    imageUrl: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1000&q=80",
    aspectRatio: "1:1",
    modelName: "DALL·E 3 HD",
    creditsUsed: 3,
    createdAt: "3h ago",
    likes: 19,
    category: "Art",
  },
];
