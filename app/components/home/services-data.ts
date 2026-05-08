import { Cormorant_Garamond } from "next/font/google";

export const cormorant = Cormorant_Garamond({
  weight: ["400", "600"],
  subsets: ["latin"],
});

export type ServiceMedia =
  | { contentType: "image"; src: string }
  | { contentType: "video"; src: string; poster?: string };

export type Service = {
  num: string;
  path: string;
  label: string;
  title: string;
  description: string;
  media: ServiceMedia;
};

export const SERVICES: Service[] = [
  {
    num: "01",
    path: "/services/360-virtual-tour",
    label: "360° Virtual Tour",
    title: "Showcase Your Property from Every Angle",
    description:
      "Quick and easy, no subscription required. Let buyers explore every room with immersive 360° tours that bring your property to life.",
    media: {
      contentType: "video",
      src: "https://r2.vidzflow.com/source/9d32ba0a-833d-4cbb-9ff0-f4e760475f67.mp4",
    },
  },
  {
    num: "02",
    path: "/services/virtual-staging",
    label: "Virtual Furnishing",
    title: "Turn an Empty Property into a Fully Furnished Home",
    description:
      "Transform a vacant property into a beautifully furnished home — helping buyers visualise the full potential instantly.",
    media: {
      contentType: "video",
      src: "https://r2.vidzflow.com/source/0df11fe3-fb6f-4a6b-b34f-6833399fb85e.mp4",
    },
  },
  {
    num: "03",
    path: "/services/item-removal",
    label: "Item Removal & Cleaning",
    title: "Remove Clutter. Present Perfection.",
    description:
      "Remove unwanted items from your property photos for a clean, polished presentation every time.",
    media: {
      contentType: "video",
      src: "https://r2.vidzflow.com/source/ba4cb44a-6ae1-4dcd-95d2-5a22b0aba69a.mp4",
    },
  },
  {
    num: "04",
    path: "/services/virtual-renovation",
    label: "Virtual Renovation",
    title: "From Un-finished to Unforgettable",
    description:
      "Turn an idea into reality with stunning 360° visuals — it doesn't matter if the property isn't finished building yet.",
    media: {
      contentType: "video",
      src: "https://r2.vidzflow.com/source/bd247db7-5181-41d4-b0ce-11f0ae3b7243.mp4",
    },
  },
];
