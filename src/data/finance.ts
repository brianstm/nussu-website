export interface FinancialCardData {
  image: string;
  title: string;
  description: string;
  link: string;
}

export const financialCards: FinancialCardData[] = [
  {
    image: 'images/care_unit.png',
    title: "Financial Aid",
    description: "Supplement your study and student expenses",
    link: "/care-unit"
  },
  {
    image: '/images/freshman_guide.png',
    title: "Scholarships",
    description: "Recognition of outstanding students",
    link: "/freshman-guide"
  }
];