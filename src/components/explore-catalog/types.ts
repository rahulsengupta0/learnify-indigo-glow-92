
import { ReactNode } from 'react';

export interface LearningTrack {
  icon: ReactNode;
  title: string;
  description: string;
  type: 'Skill Path' | 'Microlearning' | 'Certificate Track';
  duration: string;
  modules: number;
  trackColor: string;
  iconBg: string;
}

export interface CatalogItem {
  icon: ReactNode;
  title: string;
  description: string;
  color: string;
  hoverGradient: string;
  iconBg: string;
}
