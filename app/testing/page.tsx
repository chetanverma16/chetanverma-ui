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
              image: "/images/profile/1.png",
            },
            {
              id: 2,
              name: "Jane Smith",
              designation: "Product Manager",
              image: "/images/profile/2.png",
            },
            {
              id: 3,
              name: "Jim Beam",
              designation: "Marketing Manager",
              image: "/images/profile/3.png",
            },
            {
              id: 4,
              name: "John Doe",
              designation: "Software Engineer",
              image: "/images/profile/4.png",
            },
            {
              id: 5,
              name: "John Doe",
              designation: "Software Engineer",
              image: "/images/profile/5.png",
            },
            {
              id: 6,
              name: "John Doe",
              designation: "Software Engineer",
              image: "/images/profile/6.png",
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
