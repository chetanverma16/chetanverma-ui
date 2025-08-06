import React from "react";
import { StackedCardsInteraction } from ".";

const StackedCardRenderer = () => {
  return (
    <StackedCardsInteraction
      cards={[
        {
          image:
            "https://images.unsplash.com/photo-1528741254566-d718e868201f?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          title: "Card 1",
          description: "This is the first card",
        },
        {
          image:
            "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          title: "Card 2",
          description: "This is the second card",
        },
        {
          image:
            "https://images.unsplash.com/photo-1526827826797-7b05204a22ef?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8",
          title: "Card 3",
          description: "This is the third card",
        },
      ]}
    />
  );
};

export default StackedCardRenderer;
