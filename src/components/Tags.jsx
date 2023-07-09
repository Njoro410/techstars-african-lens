const Tags = () => {
  const tags = {
    landscape: {
      count: 25,
      color: "#34D399",
    },
    portrait: {
      count: 18,
      color: "#FBBF24",
    },
    nature: {
      count: 30,
      color: "#6EE7B7",
    },
    cityscape: {
      count: 12,
      color: "#93C5FD",
    },
    animals: {
      count: 22,
      color: "#F472B6",
    },
    architecture: {
      count: 16,
      color: "#FCD34D",
    },
    food: {
      count: 14,
      color: "#F6AD55",
    },
    travel: {
      count: 20,
      color: "#A7F3D0",
    },
    people: {
      count: 28,
      color: "#C084FC",
    },
    abstract: {
      count: 10,
      color: "#A78BFA",
    },
    sunrise: {
      count: 8,
      color: "#FDBA74",
    },
    sunset: {
      count: 9,
      color: "#F59E0B",
    },
    water: {
      count: 23,
      color: "#60A5FA",
    },
    mountains: {
      count: 17,
      color: "#93C5FD",
    },
    flowers: {
      count: 13,
      color: "#FDE047",
    },
  };

  return (
<div className="overflow-x-auto scrollbar-hide whitespace-nowrap mx-24 mt-5">
  <div className="inline-flex space-x-2 p-2">
    {Object.entries(tags).map(([tagName, tagInfo]) => (
      <span
        key={tagName}
        className="badge badge-lg bg-outline p-4 rounded-md"
        style={{
          backgroundColor: "white",
          borderColor: tagInfo.color,
        }}
      >
        {tagName} ({tagInfo.count})
      </span>
    ))}
  </div>
</div>



  );
};

export default Tags;
