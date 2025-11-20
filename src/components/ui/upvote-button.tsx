"use client";

import { useState, useEffect, useRef } from 'react';
import { ChevronUp, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface UpvoteButtonProps {
  initialVoteCount: number;
  initialVoted?: boolean;
  onVote: (isVoted: boolean) => Promise<void>;
  isLoading?: boolean;
  disabled?: boolean;
  className?: string;  
}

export default function UpvoteButton({
  initialVoteCount,
  initialVoted = false,
  onVote,
  isLoading = false,
  disabled = false,
  className,
}: UpvoteButtonProps) {
  const [isVoted, setIsVoted] = useState(initialVoted);
  const [voteCount, setVoteCount] = useState(initialVoteCount);
  const [isProcessing, setIsProcessing] = useState(false);
  const [animationDirection, setAnimationDirection] = useState<'up' | 'down' | null>(null);

  const handleVote = async () => {
    if (isLoading || disabled || isProcessing) {
      return;
    }
    
    setIsProcessing(true);
    
    const previousState = { voted: isVoted, count: voteCount };
    const newVotedState = !isVoted;
    const newVoteCount = newVotedState ? voteCount + 1 : voteCount - 1;

    setAnimationDirection(newVotedState ? 'up' : 'down');
    setIsVoted(newVotedState);
    setVoteCount(newVoteCount);

    try {
      await onVote(newVotedState);
    } catch (error) {
      console.error('Failed to update vote, rolling back.', error);
      setIsVoted(previousState.voted);
      setVoteCount(previousState.count);
      setAnimationDirection(null);
    } finally {
      setIsProcessing(false);
    }
  };

  const isButtonDisabled = disabled || isLoading || isProcessing;

  return (
    <button
      onClick={handleVote}
      disabled={isButtonDisabled}
      className={cn(
        "group relative flex h-full select-none items-center justify-center gap-x-1.5 overflow-hidden whitespace-nowrap rounded-lg border px-3 py-2 font-display text-foreground transition-all duration-300 active:scale-95",
        {
          'bg-primary border-primary text-primary-foreground': isVoted,
          'bg-gradient-to-b from-background to-card border-[rgba(152,133,97,0.3)]': !isVoted,
          'hover:border-secondary hover:scale-[1.02] hover:bg-secondary/[.15] hover:shadow-[0_4px_8px_rgba(152,133,97,0.2)]': !isVoted && !isButtonDisabled,
        },
        'disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100 disabled:hover:shadow-none disabled:hover:bg-gradient-to-b disabled:hover:from-background disabled:hover:to-card disabled:border-[rgba(152,133,97,0.3)]',
        isVoted && 'disabled:bg-primary disabled:border-primary',
        className
      )}
      style={{ WebkitTapHighlightColor: 'transparent' }}
    >
      {isLoading || isProcessing ? (
        <Loader2 className="h-5 w-5 animate-spin shrink-0" />
      ) : (
        <ChevronUp
          className={cn(
            "h-5 w-5 shrink-0 transition-colors",
            isVoted 
              ? "text-primary-foreground" 
              : "text-foreground group-hover:text-primary"
          )}
        />
      )}
      
      <div className="relative h-5 w-auto flex items-center tabular-nums">
        <span
          key={voteCount}
          className={cn(
            "text-sm font-bold",
            animationDirection === 'up' && 'animate-in fade-in-0 slide-in-from-bottom-2 duration-300',
            animationDirection === 'down' && 'animate-in fade-in-0 slide-in-from-top-2 duration-300'
          )}
          onAnimationEnd={() => setAnimationDirection(null)}
        >
          {voteCount}
        </span>
      </div>
    </button>
  );
}