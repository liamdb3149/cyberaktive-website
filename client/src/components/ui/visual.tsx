import { ReactNode, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
}

export function Section({ id, className, children }: SectionProps) {
  return (
    <section id={id} className={cn("py-20 lg:py-32", className)}>
      {children}
    </section>
  );
}

interface GlassCardProps {
  className?: string;
  children: ReactNode;
}

export function GlassCard({ className, children }: GlassCardProps) {
  return (
    <div className={cn("glass-card rounded-2xl p-8", className)}>
      {children}
    </div>
  );
}

interface BentoGridProps {
  className?: string;
  children: ReactNode;
}

export function BentoGrid({ className, children }: BentoGridProps) {
  return (
    <div className={cn("bento-grid", className)}>
      {children}
    </div>
  );
}

interface BentoItemProps {
  span?: number;
  className?: string;
  children: ReactNode;
}

export function BentoItem({ span = 4, className, children }: BentoItemProps) {
  return (
    <div className={cn(`bento-span-${span}`, className)}>
      {children}
    </div>
  );
}

interface FloatingOrbProps {
  size?: "small" | "medium" | "large";
  className?: string;
  style?: React.CSSProperties;
}

export function FloatingOrb({ size = "medium", className, style }: FloatingOrbProps) {
  return (
    <div 
      className={cn("floating-orb", size, className)} 
      style={style}
      aria-hidden="true"
    />
  );
}

interface CodeFrameProps {
  title?: string;
  className?: string;
  children: ReactNode;
}

export function CodeFrame({ title = "Terminal", className, children }: CodeFrameProps) {
  return (
    <div className={cn("code-frame", className)}>
      <div className="code-header">
        <div className="code-dot red"></div>
        <div className="code-dot yellow"></div>
        <div className="code-dot green"></div>
        <span className="text-sm text-gray-400 ml-3">{title}</span>
      </div>
      <div className="code-content">
        {children}
      </div>
    </div>
  );
}

interface RevealOnScrollProps {
  className?: string;
  delay?: number;
  children: ReactNode;
}

export function RevealOnScroll({ className, delay = 0, children }: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('revealed');
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={cn("reveal-on-scroll", className)}>
      {children}
    </div>
  );
}

interface GeometricBlobProps {
  className?: string;
  style?: React.CSSProperties;
}

export function GeometricBlob({ className, style }: GeometricBlobProps) {
  return (
    <div 
      className={cn("geometric-blob", className)}
      style={style}
      aria-hidden="true"
    />
  );
}