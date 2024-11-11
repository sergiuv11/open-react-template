"use client";

import { useState } from "react";
import useMasonry from "@/utils/useMasonry";
import Image, { StaticImageData } from "next/image";
import TestimonialImg01 from "@/public/images/testimonial-01.jpg";
import TestimonialImg02 from "@/public/images/testimonial-02.jpg";
import TestimonialImg03 from "@/public/images/testimonial-03.jpg";
import TestimonialImg04 from "@/public/images/testimonial-04.jpg";
import TestimonialImg05 from "@/public/images/testimonial-05.jpg";
import TestimonialImg06 from "@/public/images/testimonial-06.jpg";
import TestimonialImg07 from "@/public/images/testimonial-07.jpg";
import TestimonialImg08 from "@/public/images/testimonial-08.jpg";
import TestimonialImg09 from "@/public/images/testimonial-09.jpg";
import ClientImg01 from "@/public/images/client-logo-01.svg";
import ClientImg02 from "@/public/images/client-logo-02.svg";
import ClientImg03 from "@/public/images/client-logo-03.svg";
import ClientImg04 from "@/public/images/client-logo-04.svg";
import ClientImg05 from "@/public/images/client-logo-05.svg";
import ClientImg06 from "@/public/images/client-logo-06.svg";
import ClientImg07 from "@/public/images/client-logo-07.svg";
import ClientImg08 from "@/public/images/client-logo-08.svg";
import ClientImg09 from "@/public/images/client-logo-09.svg";

const testimonials = [
  {
    img: TestimonialImg01,
    clientImg: ClientImg01,
    name: "MaKayla P.",
    company: "Disney",
    content:
      "This AI tool has transformed the way I work. It allows me to create high-quality projects and reach new levels of efficiency, all while keeping my workflow seamless.",
    categories: [1, 3, 5],
  },
  {
    img: TestimonialImg02,
    clientImg: ClientImg02,
    name: "Andrew K.",
    company: "Samsung",
    content:
      "I've used other AI tools, but nothing matches the intuitive design and precision of this one. It’s like it understands my exact needs and delivers every time.",
    categories: [1, 2, 4],
  },
  {
    img: TestimonialImg03,
    clientImg: ClientImg03,
    name: "Lucy D.",
    company: "Rio",
    content:
      "This tool fits perfectly with my focus on ethical tech. It’s a trusted companion, giving me the power to create and share my vision effectively.",
    categories: [1, 2, 5],
  },
  {
    img: TestimonialImg04,
    clientImg: ClientImg04,
    name: "Pavel M.",
    company: "Canon",
    content:
      "The efficiency and quality delivered by this AI tool are unmatched. It's a core part of my toolkit and an invaluable asset for consistent quality.",
    categories: [1, 4],
  },
  {
    img: TestimonialImg05,
    clientImg: ClientImg05,
    name: "Miriam E.",
    company: "Cadbury",
    content:
      "For my work as a developer, this AI-driven tool has been crucial. It’s efficient, fast, and delivers beyond expectations, making my workflow incredibly smooth.",
    categories: [1, 3, 5],
  },
  {
    img: TestimonialImg06,
    clientImg: ClientImg06,
    name: "Eloise V.",
    company: "Maffell",
    content:
      "This tool is fantastic! It allows me to create content effortlessly, and it’s versatile enough to fit any style I need for various clients.",
    categories: [1, 3],
  },
  {
    img: TestimonialImg07,
    clientImg: ClientImg07,
    name: "Pierre-Gilles L.",
    company: "Binance",
    content:
      "The AI-generated content seamlessly aligns with my vision and style, making it ideal for my projects. I couldn't ask for a better tool.",
    categories: [1, 2, 5],
  },
  {
    img: TestimonialImg08,
    clientImg: ClientImg08,
    name: "Danielle K.",
    company: "Forbes Inc.",
    content:
      "This AI tool is my go-to for creating content that resonates. Its minimalist interface and functionality make it ideal for organized, seamless work.",
    categories: [1, 4],
  },
  {
    img: TestimonialImg09,
    clientImg: ClientImg09,
    name: "Mary P.",
    company: "Ray Ban",
    content:
      "I’m not tech-savvy, so this tool’s simplicity was a relief. It exceeded my expectations, and I proudly showcase my work.",
    categories: [1, 2],
  },
];

export default function Testimonials() {
  const masonryContainer = useMasonry();
  const [category, setCategory] = useState<number>(1);

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="border-t py-12 md:py-20">
        <div className="mx-auto max-w-3xl pb-12 text-center">
          <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
            Trusted by Innovators
          </h2>
          <p className="text-lg text-indigo-200/65">
            See how our tailored AI solutions empower individuals and teams to
            achieve their goals effortlessly and effectively.
          </p>
        </div>

        <div>
          <div className="flex justify-center pb-12 max-md:hidden md:pb-16">
            <div className="relative inline-flex flex-wrap justify-center rounded-[1.25rem] bg-gray-800/40 p-1">
              <CategoryButton
                label="View All"
                iconPath="M.062 10.003a1 1 0 0 1 1.947.455c-.019.08.01.152.078.19l5.83 3.333c.052.03.115.03.168 0l5.83-3.333a.163.163 0 0 0 .078-.188 1 1 0 0 1 1.947-.459 2.161 2.161 0 0 1-1.032 2.384l-5.83 3.331a2.168 2.168 0 0 1-2.154 0l-5.83-3.331a2.162 2.162 0 0 1-1.032-2.382Zm7.854-7.981-5.83 3.332a.17.17 0 0 0 0 .295l5.828 3.33c.054.031.118.031.17.002l5.83-3.333a.17.17 0 0 0 0-.294L8.085 2.023a.172.172 0 0 0-.17-.001ZM9.076.285l5.83 3.332c1.458.833 1.458 2.935 0 3.768l-5.83 3.333c-.667.38-1.485.38-2.153-.001l-5.83-3.332c-1.457-.833-1.457-2.935 0-3.767L6.925.285a2.173 2.173 0 0 1 2.15 0Z"
                active={category === 1}
                onClick={() => setCategory(1)}
              />
              {/* Add other category buttons as needed */}
            </div>
          </div>

          <div
            className="mx-auto grid max-w-sm items-start gap-6 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3"
            ref={masonryContainer}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group">
                <Testimonial testimonial={testimonial} category={category}>
                  {testimonial.content}
                </Testimonial>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function CategoryButton({
  label,
  iconPath,
  active,
  onClick,
}: {
  label: string;
  iconPath: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      className={`flex h-8 flex-1 items-center gap-2.5 whitespace-nowrap rounded-full px-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-200 ${
        active
          ? "relative bg-gradient-to-b from-gray-900 via-gray-800/60 to-gray-900 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.indigo.500/0),theme(colors.indigo.500/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]"
          : "opacity-65 transition-opacity hover:opacity-90"
      }`}
      aria-pressed={active}
      onClick={onClick}
    >
      <svg
        className={`fill-current ${active ? "text-indigo-500" : "text-gray-600"}`}
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height={16}
      >
        <path d={iconPath} />
      </svg>
      <span>{label}</span>
    </button>
  );
}

export function Testimonial({
  testimonial,
  category,
  children,
}: {
  testimonial: {
    img: StaticImageData;
    clientImg: StaticImageData;
    name: string;
    company: string;
    content: string;
    categories: number[];
  };
  category: number;
  children: React.ReactNode;
}) {
  return (
    <article
      className={`relative rounded-2xl bg-gradient-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-5 backdrop-blur-sm transition-opacity before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] ${
        !testimonial.categories.includes(category) ? "opacity-30" : ""
      }`}
    >
      <div className="flex flex-col gap-4">
        <div>
          <Image src={testimonial.clientImg} height={36} alt="Client logo" />
        </div>
        <p className="text-indigo-200/65 before:content-['“'] after:content-['”']">
          {children}
        </p>
        <div className="flex items-center gap-3">
          <Image
            className="inline-flex shrink-0 rounded-full"
            src={testimonial.img}
            width={36}
            height={36}
            alt={testimonial.name}
          />
          <div className="text-sm font-medium text-gray-200">
            <span>{testimonial.name}</span>
            <span className="text-gray-700"> - </span>
            <a
              className="text-indigo-200/65 transition-colors hover:text-indigo-500"
              href="#0"
            >
              {testimonial.company}
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
