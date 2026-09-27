import { Metadata } from "next";
import SubscriptionsComponent from "@/components/modules/app/subscriptions/SubscriptionsComponent";

export const metadata: Metadata = {
  title: "Subscriptions & Plans - EchoGPT",
  description:
    "Affordable plans for every need. Subscribe to EchoGPT Plus and unlock advanced AI models with zero rate limits.",
};

export default function SubscriptionsPage() {
  return <SubscriptionsComponent />;
}
