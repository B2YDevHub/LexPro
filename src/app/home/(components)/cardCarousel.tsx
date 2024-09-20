'use client'

import { ComponentProps, ReactElement, useRef } from "react";
import { Carousel } from "./carousel";

interface CardCarouselProps extends ComponentProps<'div'> {
  children: ReactElement;
}

export function CardCarousel ({children, ...props}: CardCarouselProps) {
  const carousel = useRef<any>(null);

  return (
    <div>
        
    </div>
  );
}
