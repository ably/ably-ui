import ProductTile from "../ProductTile";

export const headerNav = [
  {
    name: "Products",
    content: (
      <div className="grid grid-cols-2 w-full">
        <ProductTile className="bg-neutral-000" name="pubsub" key="pubsub" />
        <ProductTile className="bg-neutral-000" name="chat" key="chat" />
        <ProductTile
          className="bg-neutral-000"
          name="assetTracking"
          key="assetTracking"
        />
        <ProductTile className="bg-neutral-000" name="spaces" key="spaces" />
        <ProductTile
          className="bg-neutral-000"
          name="liveSync"
          key="liveSync"
        />
        <ProductTile
          className="bg-neutral-000"
          name="liveObjects"
          key="liveObjects"
        />
      </div>
    ),
    link: "",
  },
  { name: "Solutions", content: "Solutions content", link: "" },
  { name: "Company", content: "Company content", link: "" },
  { name: "Pricing", content: "Pricing content", link: "" },
  { name: "Docs", content: "", link: "/docs" },
];
