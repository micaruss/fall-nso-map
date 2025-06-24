document.addEventListener("DOMContentLoaded", () => {
    const previewPairs = Array.from({ length: 23 }, (_, i) => ({
      spotId: `spot-${i + 1}`,
      previewId: `preview-${i + 1}`
    }));
  
    previewPairs.forEach(({ spotId, previewId }) => {
      const spot = document.getElementById(spotId);
      const preview = document.getElementById(previewId);
  
      if (spot && preview) {
        spot.addEventListener("mouseenter", () => {
          preview.style.display = "block";
          preview.style.left = `${spot.offsetLeft + 30}px`;
          preview.style.top = `${spot.offsetTop - 10}px`;
        });
  
        spot.addEventListener("mouseleave", () => {
          preview.style.display = "none";
        });
      }
    });
  });