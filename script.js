// Show scroll-to-top button
const scrollBtn = document.getElementById('scrollTopBtn');

window.onscroll = () => {
  scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
};

scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


 const items = document.querySelectorAll('.work-item');
    setTimeout(() => items.forEach(item => item.classList.add('show')), 200);

    const buttons = document.querySelectorAll('.filters button');
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        items.forEach(item => {
          const category = item.getAttribute('data-category');
          if (filter === 'all' || filter === category) {
            item.style.display = 'block';
            setTimeout(() => item.classList.add('show'), 100);
          } else {
            item.classList.remove('show');
            setTimeout(() => item.style.display = 'none', 300);
          }
        });
      });
    });

    // Modal
    const modal = document.getElementById('workModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');

    items.forEach(item => {
      item.addEventListener('click', () => {
        modalImage.src = item.querySelector('img').src;
        modalTitle.textContent = item.querySelector('h3').textContent;
        modalDesc.textContent = item.querySelector('p').textContent;
        modal.style.display = 'flex';
      });
    });

    function closeModal() {
      modal.style.display = 'none';
    }

    window.addEventListener('click', e => {
      if (e.target === modal) closeModal();
    });

    const form = document.getElementById('contactForm');
    const confirmation = document.getElementById('confirmation');
    const ticketNum = document.getElementById('ticketNum');
    const sentDate = document.getElementById('sentDate');

    form.addEventListener('submit', function(e) {
      e.preventDefault();

      // Generate random ticket number (e.g., GLOW-5237)
      const ticketId = 'GLOW-' + Math.floor(1000 + Math.random() * 9000);

      // Get current date/time
      const now = new Date();
      const formattedDate = now.toLocaleString('en-ZA', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });

      // Set confirmation content
      ticketNum.textContent = ticketId;
      sentDate.textContent = formattedDate;

      // Show confirmation
      confirmation.style.display = 'block';

      // Optionally clear the form
      form.reset();
    });

    