export interface FinancialCardData {
  image: string;
  title: string;
  description: string;
  link: string;
}

export const financialCards: FinancialCardData[] = [
  {
    image: 'images/financial_aid.png',
    title: "Financial Aid",
    description: "Supplement your study and student expenses",
    link: "https://www.nus.edu.sg/oam/financial-aid"
  },
  {
    image: '/images/scholarships.png',
    title: "Scholarships",
    description: "Recognition of outstanding students",
    link: "https://www.nus.edu.sg/oam/scholarships"
  }
];