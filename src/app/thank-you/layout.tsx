import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You",
  description:
    "Your Signal Scan request has been received by ThroughPoint Marketing.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
