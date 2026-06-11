"use client";

import * as React from "react";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ProjectCardProps extends React.HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
  imgSources?: string[];
  title: string;
  description: string;
  link: string;
  linkText?: string;
}

function CardImage({
  title,
  imgSrc,
  imgSources,
}: {
  title: string;
  imgSrc: string;
  imgSources?: string[];
}) {
  const sources = imgSources?.length ? imgSources : [imgSrc];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [failed, setFailed] = useState(false);
  const currentSrc = sources[currentIndex];

  if (failed || !currentSrc) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/20 to-muted text-2xl font-bold text-muted-foreground">
        {title.charAt(0)}
      </div>
    );
  }

  return (
    <img
      src={currentSrc}
      alt={title}
      className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
      loading="lazy"
      onError={() => {
        if (currentIndex < sources.length - 1) {
          setCurrentIndex((i) => i + 1);
        } else {
          setFailed(true);
        }
      }}
    />
  );
}

const ProjectCard = React.forwardRef<HTMLDivElement, ProjectCardProps>(
  (
    {
      className,
      imgSrc,
      imgSources,
      title,
      description,
      link,
      linkText = "View Project",
      ...props
    },
    ref
  ) => {
    const isExternal = link.startsWith("http");

    return (
      <div
        ref={ref}
        className={cn(
          "group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-white/10 bg-card/80 backdrop-blur-sm text-card-foreground shadow-sm transition-all duration-500 ease-in-out hover:-translate-y-2 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5",
          className
        )}
        {...props}
      >
        <div className="aspect-video overflow-hidden">
          <CardImage title={title} imgSrc={imgSrc} imgSources={imgSources} />
        </div>

        <div className="flex flex-1 flex-col p-6">
          <h3 className="text-xl font-semibold transition-colors duration-300 group-hover:text-primary">
            {title}
          </h3>
          <p className="mt-3 flex-1 text-muted-foreground">{description}</p>

          <a
            href={link}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className="group/button mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary transition-all duration-300 hover:underline"
            onClick={(e) => e.stopPropagation()}
          >
            {linkText}
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-1" />
          </a>
        </div>
      </div>
    );
  }
);
ProjectCard.displayName = "ProjectCard";

export { ProjectCard };
