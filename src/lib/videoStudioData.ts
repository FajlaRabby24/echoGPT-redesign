export interface VideoModel {
  id: string;
  name: string;
  provider: string;
  baseCredits: number;
  badge?: string;
  description: string;
}

export interface VideoAspectRatio {
  id: string;
  label: string;
  ratio: string;
  resolution: string;
  extraCredits: number;
}

export interface VideoDurationOption {
  id: string;
  label: string;
  seconds: number;
  multiplier: number;
}

export interface UserVideoCreation {
  id: string;
  title: string;
  prompt: string;
  videoUrl: string;
  posterUrl: string;
  duration: string;
  aspectRatio: string;
  modelName: string;
  creditsUsed: number;
  createdAt: string;
  likes: number;
  category: string;
}

export const VIDEO_MODELS: VideoModel[] = [
  {
    id: "veo-3-fast",
    name: "Veo 3.1 fast",
    provider: "Google DeepMind",
    baseCredits: 5,
    badge: "Fast & Smooth",
    description: "Rapid rendering with fluid cinematic motion and 1080p output.",
  },
  {
    id: "sora-2-cinema",
    name: "Sora 2.0 Cinema",
    provider: "OpenAI",
    baseCredits: 10,
    badge: "Ultra Realism",
    description: "Multi-shot consistency, physical accuracy, and photorealistic depth.",
  },
  {
    id: "runway-gen3",
    name: "Runway Gen-3 Alpha",
    provider: "Runway",
    baseCredits: 8,
    badge: "Director Control",
    description: "Fine-grained camera motion, temporal stability, and expressive lighting.",
  },
  {
    id: "kling-1-pro",
    name: "Kling 1.5 Pro",
    provider: "Kuaishou AI",
    baseCredits: 7,
    badge: "Complex Action",
    description: "Superior human dynamics, acrobatic sequences, and coherent physics.",
  },
  {
    id: "luma-dream",
    name: "Luma Dream Machine",
    provider: "Luma AI",
    baseCredits: 6,
    badge: "Camera Physics",
    description: "Dynamic drone movements, fluid transitions, and cinematic pacing.",
  },
];

export const VIDEO_ASPECT_RATIOS: VideoAspectRatio[] = [
  { id: "16:9", label: "16:9", ratio: "16 / 9", resolution: "1920 × 1080 (Widescreen)", extraCredits: 0 },
  { id: "9:16", label: "9:16", ratio: "9 / 16", resolution: "1080 × 1920 (Vertical Reel)", extraCredits: 0 },
  { id: "1:1", label: "1:1", ratio: "1 / 1", resolution: "1080 × 1080 (Square)", extraCredits: 0 },
];

export const VIDEO_DURATIONS: VideoDurationOption[] = [
  { id: "5s", label: "5s", seconds: 5, multiplier: 1 },
  { id: "10s", label: "10s", seconds: 10, multiplier: 2 },
];

export const INITIAL_USER_VIDEOS: UserVideoCreation[] = [
  {
    id: "video-1",
    title: "Golden Hour Canyon Flyover",
    prompt: "Cinematic drone sweep through glowing red sandstone canyon at sunset, golden sunbeams piercing dust haze, 4k 60fps",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-sky-in-a-sunset-26070-large.mp4",
    posterUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80",
    duration: "5s",
    aspectRatio: "16:9",
    modelName: "Veo 3.1 fast",
    creditsUsed: 5,
    createdAt: "Just now",
    likes: 47,
    category: "Nature",
  },
  {
    id: "video-2",
    title: "Neon Cyberpunk Expressway",
    prompt: "High-speed night traffic hyperlapse in futuristic Tokyo metropolis, glowing cybernetic neon billboards reflection in rain, cinematic lighting",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-city-traffic-at-night-42861-large.mp4",
    posterUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1000&q=80",
    duration: "5s",
    aspectRatio: "16:9",
    modelName: "Sora 2.0 Cinema",
    creditsUsed: 10,
    createdAt: "15m ago",
    likes: 82,
    category: "Futuristic",
  },
  {
    id: "video-3",
    title: "Misty Emerald Rainforest Canopy",
    prompt: "Slow gentle pan through lush tropical rainforest leaves swaying in mountain breeze, raindrops glistening, high dynamic range cinematic film",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-tree-branches-in-the-breeze-1188-large.mp4",
    posterUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=80",
    duration: "10s",
    aspectRatio: "16:9",
    modelName: "Runway Gen-3 Alpha",
    creditsUsed: 16,
    createdAt: "1h ago",
    likes: 63,
    category: "Nature",
  },
  {
    id: "video-4",
    title: "Deep Ocean Bioluminescent Tide",
    prompt: "Slow-motion turquoise waves breaking on twilight beach, glowing electric blue bioluminescent plankton, hypnotic ambient mood",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-waves-in-the-water-1164-large.mp4",
    posterUrl: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1000&q=80",
    duration: "5s",
    aspectRatio: "16:9",
    modelName: "Luma Dream Machine",
    creditsUsed: 6,
    createdAt: "3h ago",
    likes: 95,
    category: "Cinematic",
  },
];
