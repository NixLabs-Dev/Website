import DottedMap from "dotted-map-no-alaska";

export default function Map() {
  const map = new DottedMap({
    height: 30,
    grid: "diagonal",
    countries: ["USA-NO-ALASKA"],
    // countries: ["USA"],
  });

  // Hopkinsville, KY
  map.addPin({
    lat: 36.8001514,
    lng: -87.5445827,
    svgOptions: { color: "#9f5afd", radius: 0.5 },
  });

  // Los Angeles, CA
  map.addPin({
    lat: 34.0522,
    lng: -118.2437,
    svgOptions: { color: "#9f5afd", radius: 0.5 },
  });

  // Salt Lake City, Utah
  map.addPin({
    lat: 40.7608,
    lng: -111.891,
    svgOptions: { color: "#9f5afd", radius: 0.5 },
  });

  // New York, NY
  map.addPin({
    lat: 40.7128,
    lng: -74.006,
    svgOptions: { color: "#9f5afd", radius: 0.5 },
  });

  // Miami, FL
  map.addPin({
    lat: 25.7617,
    lng: -80.1918,
    svgOptions: { color: "#9f5afd", radius: 0.5 },
  });

  // Dallas, TX
  map.addPin({
    lat: 32.7767,
    lng: -96.797,
    svgOptions: { color: "#9f5afd", radius: 0.5 },
  });

  const svgMap = map.getSVG({
    radius: 0.25,
    color: "#FAFAFA25",
    shape: "circle",
    backgroundColor: "#00000000",
  });

  return (
    <div
      className="p-4 rounded-2xl w-4/5 mt-8 hidden lg:block"
      dangerouslySetInnerHTML={{ __html: svgMap }}
    ></div>
  );
}
