document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll('#navheader a');
    const tabContents = document.querySelectorAll('.tab-content');
  
    tabs.forEach(tab => {
      tab.addEventListener('click', function(e) {
        e.preventDefault();
  
        const activeTabContent = document.querySelector(this.getAttribute('href'));
        
        // Hide all tab contents
        tabContents.forEach(content => {
          if (content !== activeTabContent) {
            content.classList.add('hide');
            setTimeout(() => {
              content.classList.remove('show');
              content.classList.remove('hide');
            }, 500); // This timeout should match the duration of the CSS transition
          }
        });
  
        // Show the active tab content
        setTimeout(() => {
          activeTabContent.classList.add('show');
        }, 500);
      });
    });
  });
  