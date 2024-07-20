import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quartoloom - Innovative School Management System",
  description:
    "Discover Quartoloom, the revolutionary school management system designed to streamline school operations, enhance learning experiences, and provide user-friendly solutions for administrators, teachers, students, and parents.",
  keywords:
    "School Management System, Education Software Solutions, School Administration Software, Online Fee Payment System, Student Management System, Teacher Management System, School ERP Software, Attendance Tracking Software, Homework and Assignment Management, Exam Results Tracking, Parent-Teacher Communication App, School Calendar and Notices, Custom Software Development, UI/UX Design Services, Web and Mobile App Development, E-Commerce Website Development, CMS Website Solutions, Automation and Testing Services, Affordable School Software, User-Friendly School System",
  authors: {
    name: "Quartoloom Solutions Ltd",
    url: "https://www.quartoloom.com",
  },
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Quartoloom - Innovative School Management System",
    description:
      "Discover Quartoloom, the revolutionary school management system designed to streamline school operations, enhance learning experiences, and provide user-friendly solutions for administrators, teachers, students, and parents.",
    type: "website",
    url: "https://www.quartoloom.com",
    images: "https://www.quartoloom.com/logo-full.png",
  },
  twitter: {
    card: "summary_large_image",
    site: "@quartoloom",
    title: "Quartoloom - Innovative School Management System",
    description:
      "Discover Quartoloom, the revolutionary school management system designed to streamline school operations, enhance learning experiences, and provide user-friendly solutions for administrators, teachers, students, and parents.",

    images: "https://www.quartoloom.com/logo-full.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
