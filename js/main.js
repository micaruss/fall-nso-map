document.addEventListener("DOMContentLoaded", () => {
    const previewPairs = [
      { spotId: "spot-1", previewId: "preview-1" },
      { spotId: "spot-2", previewId: "preview-2" },
      { spotId: "spot-3", previewId: "preview-3" },
      { spotId: "spot-4", previewId: "preview-4" }
    ];
  
    previewPairs.forEach(({ spotId, previewId }) => {
      const spot = document.getElementById(spotId);
      const preview = document.getElementById(previewId);
  
      spot.addEventListener("mouseenter", () => {
        preview.style.display = "block";
        preview.style.left = `${spot.offsetLeft + 30}px`;
        preview.style.top = `${spot.offsetTop - 10}px`;
      });
  
      spot.addEventListener("mouseleave", () => {
        preview.style.display = "none";
      });
    });
  });