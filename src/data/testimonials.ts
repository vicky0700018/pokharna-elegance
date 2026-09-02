export type Testimonial = {
  id: string;
  name: string;
  location: string;
  rating: number;
  review: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Sneha Kulkarni",
    location: "Kothrud, Pune",
    rating: 5,
    review:
      "Beautiful collection and excellent fabric quality. The Banarasi dress material looked even better in person.",
  },
  {
    id: "t2",
    name: "Rutuja Patil",
    location: "Chandan Nagar, Pune",
    rating: 5,
    review:
      "Bought a Yeola Paithani for my sister's wedding. The zari work is genuine and the staff explained every weave patiently.",
  },
  {
    id: "t3",
    name: "Meera Joshi",
    location: "Viman Nagar, Pune",
    rating: 4,
    review:
      "Their Chanderi cotton suits are perfect for office wear. Soft, well finished and the colours did not fade after washing.",
  },
  {
    id: "t4",
    name: "Anjali Shetty",
    location: "Hadapsar, Pune",
    rating: 5,
    review:
      "Our family has been buying from Pokharna Silk for years. Honest pricing and always something new for every festival.",
  },
  {
    id: "t5",
    name: "Priya Deshpande",
    location: "Wagholi, Pune",
    rating: 5,
    review:
      "The festive suit set I ordered arrived neatly packed with the dupatta and bottom exactly as shown. Very happy.",
  },
  {
    id: "t6",
    name: "Kavita Rane",
    location: "Kharadi, Pune",
    rating: 4,
    review:
      "Great variety of unstitched materials under budget. The gold border silk material was a lovely surprise.",
  },
];
