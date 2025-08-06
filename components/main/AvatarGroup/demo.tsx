import React from "react";
import AvatarGroup from ".";

const AvatarGroupDemo = () => {
  return (
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
  );
};

export default AvatarGroupDemo;
