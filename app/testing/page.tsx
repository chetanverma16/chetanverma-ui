"use client";

import Preview from "@/components/main/Preview";
import AvatarGroup from "@/components/main/AvatarGroup";

const TestingComponents = () => {
  return (
    <div className="w-full h-screen bg-background flex items-center justify-center">
      <Preview>
        <AvatarGroup
          items={[
            {
              id: 1,
              name: "John Doe",
              designation: "Software Engineer",
              image: "https://randomuser.me/api/portraits/men/60.jpg",
            },
            {
              id: 2,
              name: "Jane Smith",
              designation: "Product Manager",
              image: "https://randomuser.me/api/portraits/men/61.jpg",
            },
            {
              id: 3,
              name: "Jim Beam",
              designation: "Marketing Manager",
              image: "https://randomuser.me/api/portraits/men/62.jpg",
            },
            {
              id: 4,
              name: "John Doe",
              designation: "Software Engineer",
              image: "https://randomuser.me/api/portraits/men/63.jpg",
            },
            {
              id: 5,
              name: "John Doe",
              designation: "Software Engineer",
              image: "https://randomuser.me/api/portraits/men/64.jpg",
            },
            {
              id: 6,
              name: "John Doe",
              designation: "Software Engineer",
              image: "https://randomuser.me/api/portraits/men/65.jpg",
            },
          ]}
          maxVisible={5}
          size="md"
        />
      </Preview>
    </div>
  );
};

export default TestingComponents;
