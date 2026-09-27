import { Metadata } from "next";
import NewsletterComponent from "@/components/modules/app/newsletter/NewsletterComponent";

export const metadata: Metadata = {
  title: "Newsletter - EchoGPT",
  description:
    "Join 50,000+ professionals receiving curated insights on AI productivity, industry trends, and exclusive EchoGPT features.",
};

export default function NewsletterPage() {
  return <NewsletterComponent />;
}
