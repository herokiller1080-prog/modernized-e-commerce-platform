'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronUp, ExternalLink } from 'lucide-react';

export interface ProductCardProps {
  slug: string;
  videoUrl?: string;
  imageUrl: string;
  imageAlt: string;
  title: string;
  tagline: string;
  description: string;
  upvotes: number;
  productUrl: string;
  isLoading?: boolean;
}

export const ProductCardSkeleton: React.FC = () => (
    <div className="flex flex-col h-full bg-white rounded-[1rem] border-2 border-[rgba(152,133,97,0.3)] shadow-[0_4px_12px_rgba(74,21,30,0.08)] overflow-hidden animate-pulse">
      <div className="aspect-video w-full bg-[#f5f5f5]"></div>
      <div className="aspect-[4/3] w-full bg-[#f5f5f5]"></div>
      <div className="p-4 flex flex-col flex-1">
        <div className="h-7 w-3/4 bg-[#f5f5f5] rounded-md"></div>
        <div className="h-px bg-[rgba(152,133,97,0.2)] my-4"></div>
        <div className="h-5 w-1/2 bg-[#f5f5f5] rounded-md"></div>
        <div className="h-px bg-[rgba(152,133,97,0.2)] my-4"></div>
        <div className="space-y-2 mb-4">
          <div className="h-3.5 w-full bg-[#f5f5f5] rounded-md"></div>
          <div className="h-3.5 w-full bg-[#f5f5f5] rounded-md"></div>
          <div className="h-3.5 w-5/6 bg-[#f5f5f5] rounded-md"></div>
        </div>
        <div className="flex items-stretch gap-2 pt-4 border-t border-[rgba(152,133,97,0.2)] mt-auto">
          <div className="flex-1 h-[44px] bg-[#f5f5f5] rounded-lg"></div>
          <div className="w-[44px] h-[44px] bg-[#f5f5f5] rounded-lg"></div>
        </div>
      </div>
    </div>
);

const ProductCard: React.FC<ProductCardProps> = ({
  slug,
  videoUrl,
  imageUrl,
  imageAlt,
  title,
  tagline,
  description,
  upvotes,
  productUrl,
  isLoading,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentUpvotes, setCurrentUpvotes] = useState(upvotes);
  const [isUpvoted, setIsUpvoted] = useState(false);
  const [canExpand, setCanExpand] = useState(false);
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  const detailsUrl = `/product/${slug}`;

  useEffect(() => {
    const element = descriptionRef.current;
    if (element) {
      if (!isExpanded) {
        const observer = new ResizeObserver(() => {
          setCanExpand(element.scrollHeight > element.clientHeight);
        });
        observer.observe(element);
        return () => observer.disconnect();
      } else {
        setCanExpand(true);
      }
    }
  }, [isExpanded, description]);

  if (isLoading) {
    return <ProductCardSkeleton />;
  }

  const handleUpvoteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrentUpvotes((prev) => (isUpvoted ? prev - 1 : prev + 1));
    setIsUpvoted((prev) => !prev);
  };

  const handleToggleExpand = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setIsExpanded(!isExpanded);
  };
  
  const stopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div className="group relative flex flex-col h-full bg-white rounded-[1rem] border-2 border-[rgba(152,133,97,0.3)] shadow-[0_4px_12px_rgba(74,21,30,0.08)] overflow-hidden transition-all duration-300 ease-in-out hover:scale-[1.02] hover:-translate-y-1 hover:border-[#988561] hover:shadow-[0_12px_32px_rgba(74,21,30,0.15)]">
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ backgroundColor: 'rgba(74, 21, 30, 0.03)'}}
      />
      <Link href={detailsUrl} className="absolute inset-0 z-10" aria-label={`View details for ${title}`}></Link>
      
      <div className="relative z-20 flex flex-col h-full">
        {videoUrl && (
          <div className="relative aspect-video w-full bg-muted" onClick={stopPropagation}>
            <iframe
              src={videoUrl}
              title={`${title} video presentation`}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}
        
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
            loading="lazy"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
          />
        </div>

        <div className="p-4 flex flex-col flex-1">
          <h3 className="font-['Qomra'] font-bold text-[1.5rem] leading-tight text-[#4a151e] mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#4a151e] group-hover:to-[#002623] transition-colors duration-300">
            {title}
          </h3>
          <div className="h-px bg-[rgba(152,133,97,0.2)] my-2"></div>
          <p className="text-[#988561] text-base line-clamp-3 md:line-clamp-2">{tagline}</p>
          <div className="h-px bg-[rgba(152,133,97,0.2)] my-2"></div>
          
          <div className="mb-4">
            <p
              ref={descriptionRef}
              className={`text-sm text-[#737373] leading-relaxed whitespace-pre-wrap ${
                isExpanded ? 'line-clamp-none' : 'line-clamp-3 lg:line-clamp-6'
              }`}
            >
              {description}
            </p>
            {(canExpand || isExpanded) && (
              <button
                onClick={handleToggleExpand}
                className="text-sm font-medium text-[#002623] hover:underline mt-1"
              >
                {isExpanded ? 'عرض أقل' : 'عرض المزيد'}
              </button>
            )}
          </div>
          
          <div className="flex items-stretch gap-2 pt-4 border-t border-[rgba(152,133,97,0.2)] mt-auto">
            <button
              onClick={handleUpvoteClick}
              className={`relative flex-1 flex items-center justify-center gap-2 px-3 rounded-lg transition-all duration-300 font-bold text-sm border-2 min-h-[44px] ${
                isUpvoted
                  ? 'bg-[#002623]/5 border-[#002623]/50 text-[#002623]'
                  : 'bg-gradient-to-br from-[#EDEBE0] to-white text-[#4a151e] border-[rgba(152,133,97,0.3)]'
              } hover:shadow-md hover:border-[#988561]`}
            >
              <ChevronUp className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
              <span className="tabular-nums transition-colors">{currentUpvotes}</span>
            </button>
            <a
              href={productUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={stopPropagation}
              aria-label={`Visit ${title} website (opens in a new tab)`}
              className="flex items-center justify-center gap-1.5 px-3 py-2 bg-[#002623] text-[#edebe0] hover:bg-[#004440] rounded-lg border-2 border-transparent transition-colors min-h-[44px] min-w-[44px]"
            >
              <ExternalLink className="w-4 h-4 flex-shrink-0" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;