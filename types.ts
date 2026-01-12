
export interface Industry {
  id: string;
  name: string;
  description: string;
  icon: string;
  isActive?: boolean;
}

export interface TaxAdvice {
  industry: string;
  advice: string;
  keyPoints: string[];
}