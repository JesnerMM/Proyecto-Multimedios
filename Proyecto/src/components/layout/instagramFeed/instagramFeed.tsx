import React from "react";

const InstagramFeed: React.FC<{ className?: string }> = ({
  className = "",
}) => {
  return (
    <div
      className={`overflow-hidden rounded-2xl shadow-xl border border-gray-300 bg-white ${className}`}
    >
      <iframe
        src="https://widget.taggbox.com/289471?website=1"
        className="w-full h-[450px]"
        style={{ border: "none" }}
        loading="lazy"
        title="Instagram Feed"
      />
    </div>
  );
};

export default InstagramFeed;
