
import React, { useEffect, useRef, useState } from 'react';
import { DecorativeShapes } from '@/components/ui/DecorativeShapes';
import { SectionIntro } from './explore-catalog/SectionIntro';
import { FeatureHighlightCard } from './explore-catalog/FeatureHighlightCard';
import { LearningTracksGrid } from './explore-catalog/LearningTracksGrid';
import { BottomCTA } from './explore-catalog/BottomCTA';
import { learningTracks } from './explore-catalog/catalogData';

const ExploreCatalog = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="learning-tracks" className="py-16 relative overflow-hidden bg-gradient-to-b from-white via-lms-light/30 to-white">
      {/* Enhanced decorative shapes */}
      <DecorativeShapes variant="secondary" intensity="high" />

      <div className="section-container relative z-10" ref={sectionRef}>
        {/* Split Layout: Left section for intro, right for cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16 items-center">
          {/* Left: Section intro */}
          <SectionIntro isVisible={isVisible} />

          {/* Right: Feature highlight card */}
          <FeatureHighlightCard />
        </div>
        
        {/* Learning Tracks Grid */}
        <LearningTracksGrid items={learningTracks} isVisible={isVisible} />

        {/* Bottom CTA */}
        <BottomCTA isVisible={isVisible} />
      </div>
    </section>
  );
};

export default ExploreCatalog;
