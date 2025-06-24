document.addEventListener("DOMContentLoaded", () => {
    const previewPairs = [
      { spotId: "spot-1", previewId: "preview-1" },
      { spotId: "spot-2", previewId: "preview-2" },
      { spotId: "spot-3", previewId: "preview-3" },
      { spotId: "spot-4", previewId: "preview-4" },
      { spotId: "spot-5", previewId: "preview-5" },
      { spotId: "spot-6", previewId: "preview-6" },
      { spotId: "spot-7", previewId: "preview-7" },
      { spotId: "spot-8", previewId: "preview-8" },
      { spotId: "spot-9", previewId: "preview-9" },
      { spotId: "spot-10", previewId: "preview-10" },
      { spotId: "spot-11", previewId: "preview-11" },
      { spotId: "spot-12", previewId: "preview-12" },
      { spotId: "spot-13", previewId: "preview-13" },
      { spotId: "spot-14", previewId: "preview-14" },
      { spotId: "spot-15", previewId: "preview-15" },
      { spotId: "spot-16", previewId: "preview-16" },
      { spotId: "spot-17", previewId: "preview-17" },
      { spotId: "spot-18", previewId: "preview-18" },
      { spotId: "spot-19", previewId: "preview-19" },
      { spotId: "spot-20", previewId: "preview-20" },
      { spotId: "spot-21", previewId: "preview-21" },
      { spotId: "spot-22", previewId: "preview-22" },
      { spotId: "spot-23", previewId: "preview-23" },
      { spotId: "spot-24", previewId: "preview-24" },
      { spotId: "spot-25", previewId: "preview-25" },
      { spotId: "spot-26", previewId: "preview-26" },
      { spotId: "spot-27", previewId: "preview-27" }
    ];
  
    previewPairs.forEach(({ spotId, previewId }) => {
      const spot = document.getElementById(spotId);
      const preview = document.getElementById(previewId);
  
      if (spot && preview) {
        spot.addEventListener("mouseenter", () => {
          // Show preview image
          preview.style.display = "block";
          preview.style.left = `${spot.offsetLeft + 30}px`;
          preview.style.top = `${spot.offsetTop - 10}px`;
  
          // Bring hovered spot to front
          spot.style.zIndex = 1000;
        });
  
        spot.addEventListener("mouseleave", () => {
          // Hide preview
          preview.style.display = "none";
  
          // Reset z-index after short delay
          setTimeout(() => {
            spot.style.zIndex = 10;
          }, 200);
        });
      }
    });
  });