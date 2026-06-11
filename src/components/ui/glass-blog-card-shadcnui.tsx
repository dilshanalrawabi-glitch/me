"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { BookOpen, Clock, ExternalLink } from "lucide-react";

interface GlassBlogCardProps {
  title?: string;
  excerpt?: string;
  image?: string;
  imageSources?: string[];
  author?: {
    name: string;
    avatar: string;
  };
  date?: string;
  readTime?: string;
  tags?: string[];
  href?: string;
  actionLabel?: string;
  index?: string;
  className?: string;
}

const defaultPost = {
  title: "The Future of UI Design",
  excerpt:
    "Exploring the latest trends in glassmorphism, 3D elements, and micro-interactions.",
  image:
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  author: {
    name: "Moumen Soliman",
    avatar: "https://github.com/shadcn.png",
  },
  date: "Dec 2, 2025",
  readTime: "5 min read",
  tags: ["Design", "UI/UX"],
};

function CardImage({
  title,
  image,
  imageSources,
}: {
  title: string;
  image?: string;
  imageSources?: string[];
}) {
  const sources = imageSources?.length
    ? imageSources
    : image
      ? [image]
      : [];
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
    <motion.img
      src={currentSrc}
      alt={title}
      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
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

export function GlassBlogCard({
  title = defaultPost.title,
  excerpt = defaultPost.excerpt,
  image = defaultPost.image,
  imageSources,
  author,
  date = defaultPost.date,
  readTime,
  tags = defaultPost.tags,
  href,
  actionLabel = "Read Article",
  index,
  className,
}: GlassBlogCardProps) {
  const isExternal = href?.startsWith("http");
  const showAuthorFooter = Boolean(author) && !index;

  const actionButton = (
    <motion.span
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/25"
    >
      {isExternal ? (
        <ExternalLink className="h-4 w-4" />
      ) : (
        <BookOpen className="h-4 w-4" />
      )}
      {actionLabel}
    </motion.span>
  );

  const cardInner = (
    <Card className="group relative h-full overflow-hidden rounded-2xl border-border/50 bg-card/30 backdrop-blur-md transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10">
      <div className="relative aspect-[16/9] overflow-hidden">
        <CardImage title={title} image={image} imageSources={imageSources} />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-40" />

        <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
          {tags?.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="bg-background/50 backdrop-blur-sm hover:bg-background/80"
            >
              {tag}
            </Badge>
          ))}
        </div>

        <div className="absolute inset-0 flex items-center justify-center bg-background/20 backdrop-blur-[2px] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {actionButton}
        </div>
      </div>

      <div className="flex flex-col gap-4 p-5">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold leading-tight tracking-tight text-foreground transition-colors group-hover:text-primary">
            {title}
          </h3>
          <p className="line-clamp-2 text-sm text-muted-foreground">{excerpt}</p>
        </div>

        {(showAuthorFooter || index || readTime) && (
          <div className="flex items-center justify-between border-t border-border/50 pt-4">
            {showAuthorFooter && author ? (
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8 border border-border/50">
                  <AvatarImage src={author.avatar} alt={author.name} />
                  <AvatarFallback>{author.name[0]}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col text-xs">
                  <span className="font-medium text-foreground">{author.name}</span>
                  <span className="text-muted-foreground">{date}</span>
                </div>
              </div>
            ) : index ? (
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-border/50 bg-background/50 font-mono text-xs font-medium text-primary">
                  {index}
                </span>
                <span className="text-xs text-muted-foreground">Project</span>
              </div>
            ) : (
              <div />
            )}

            {readTime && (
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="h-3 w-3" />
                <span>{readTime}</span>
              </div>
            )}
          </div>
        )}
      </div>
    </Card>
  );

  return (
    <motion.li
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className={cn("h-full list-none", className)}
    >
      {href ? (
        <a
          href={href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-2xl"
        >
          {cardInner}
        </a>
      ) : (
        cardInner
      )}
    </motion.li>
  );
}
