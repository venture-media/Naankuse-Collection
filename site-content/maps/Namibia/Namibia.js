function showMapLayout(index) {
    // Hide all and reset styles
    for (let j = 1; j <= 8; j++) {
      const layout = document.getElementById(`map_layout_${j}`);
      if (layout) layout.style.display = "none";

      const button = document.getElementById(`map_heading_text_${j}`);
      if (button) button.style.color = "";

      const location = document.getElementById(`map_property_location_${j}`);
      if (location) location.style.fill = "";
    }

    // Show and highlight the selected one
    const targetLayout = document.getElementById(`map_layout_${index}`);
    if (targetLayout) targetLayout.style.display = "block";

    const activeButton = document.getElementById(`map_heading_text_${index}`);
    if (activeButton) activeButton.style.color = "#434462";

    const activeLocation = document.getElementById(`map_property_location_${index}`);
    if (activeLocation) activeLocation.style.fill = "#ab292f";
  }

  // Set up click handlers
  for (let i = 1; i <= 8; i++) {
    const triggerIds = [`map_heading_text_${i}`, `map_property_location_${i}`];

    triggerIds.forEach(id => {
      const trigger = document.getElementById(id);
      if (trigger) {
        trigger.addEventListener("click", () => {
          showMapLayout(i);
        });
      }
    });
  }

  // Show layout 1 by default when page loads
  window.addEventListener("DOMContentLoaded", () => {
    showMapLayout(1);
  });
