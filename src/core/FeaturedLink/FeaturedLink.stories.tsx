import FeaturedLink from "../FeaturedLink";

export default {
  title: "JS Components/Featured Link",
  component: FeaturedLink,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    url: "#",
    children: "Featured link",
  },
};

export const Default = {
  args: {},
};

export const Reverse = {
  args: {
    reverse: true,
  },
};

export const Large = {
  args: {
    textSize: "text-p1",
  },
};

export const Small = {
  args: {
    textSize: "text-p3",
  },
};

export const Pink = {
  args: {
    iconColor: "text-pink-500",
    additionalCSS: "text-pink-800",
  },
};
