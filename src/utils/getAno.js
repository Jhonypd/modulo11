/** @format */

export const getAno = async (vehicleType, brandId, modelId) => {
    try {
      if (vehicleType) {
        const response = await fetch(
          `https://fipe.parallelum.com.br/api/v1/${vehicleType}/marcas/${brandId}/modelos/${modelId}/anos`,
          {
            headers: {
              "Content-Type": "application/json",
              "X-Subscription":
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIzYmQzYWNhMS05YmRiLTQwMWMtOWZkZi1kM2RmOGQzNTk4YTYiLCJlbWFpbCI6Impob255LTE2QGxpdmUuY29tIiwiaWF0IjoxNzE4NzU4NjA0fQ.gktv0qJruN5OgkCioZP4XcaL-ZnYQSvha39Bps5Sa80",
            },
          }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
  
        return data;
      }
    } catch (error) {
      console.error("Failed to fetch marcas:", error);
      return [];
    }
  };