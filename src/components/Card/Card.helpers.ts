export const getCardEmoji = (category: string) => {
  switch (category) {
    case "psychology-tests":
      return "/psychology-emoji.png";

    case "astrology-tests":
      return "/astrology-emoji.svg";

    case "astrology-tests":
      return "/love-emoji.svg";

    case "food-tests":
      return "/delicious-emoji.svg";

    case "personality-tests":
      return "/yoga-emoji.svg";

    case "general-knowledge-tests":
      return "/book-emoji.svg";

    default:
      return "/love-emoji.svg";
  }
};
