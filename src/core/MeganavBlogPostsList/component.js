import { queryId } from "../dom-query";
import { selectRecentBlogPosts } from "../remote-blogs-posts";
import { connectState } from "../remote-data-store";

const template = ({ link, title, pubDate }) => {
  const [li, a, heading, copy] = ["li", "a", "p", "p"].map((el) =>
    document.createElement(el)
  );

  a.href = link;
  a.classList.add("ui-meganav-media", "group");

  heading.textContent = title;
  heading.classList.add("ui-meganav-media-heading");

  copy.textContent = pubDate;
  copy.classList.add("ui-meganav-media-copy");

  a.appendChild(heading);
  a.appendChild(copy);
  li.appendChild(a);

  return li;
};

export default () => {
  connectState(selectRecentBlogPosts, (recentBlogPosts) => {
    if (Array.isArray(recentBlogPosts) && recentBlogPosts.length > 0) {
      const section = queryId("meganav-why-ably-panel-blog-section");
      const container = queryId("meganav-why-ably-panel-recent-blog-posts");

      const fragment = document.createDocumentFragment();
      recentBlogPosts.forEach((post) => fragment.appendChild(template(post)));
      container.appendChild(fragment);

      section.classList.remove("hidden");
    }
  });
};
