import { permanentRedirect } from "next/navigation";
import { verticalSites } from "@/lib/seo";

export default function HomeServicesPage() {
  permanentRedirect(verticalSites.rake.url);
}
