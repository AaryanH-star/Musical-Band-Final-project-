// Smooth Scroll Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Header Scroll Effect
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.style.background = 'rgba(0,0,0,0.95)';
    header.style.boxShadow = '0 2px 20px rgba(255,107,53,0.2)';
  } else {
    header.style.background = '#000';
    header.style.boxShadow = 'none';
  }
});


// Play Button Functionality
const trackLinks = {
  'Sao Paulo':       'https://open.spotify.com/search/Sao%20Paulo%20The%20Weeknd',
  'Timeless':        'https://open.spotify.com/search/Timeless%20The%20Weeknd',
  'Blinding Lights': 'https://open.spotify.com/search/Blinding%20Lights%20The%20Weeknd'
};

document.querySelectorAll('.play-btn').forEach(btn => {
  btn.addEventListener('click', function () {
    const card = this.closest('.music-card');
    const trackName = card.querySelector('h3').textContent.trim();
    const url = trackLinks[trackName];

    // Visual feedback
    this.textContent = '▶ Playing...';
    this.style.background = '#1DB954'; // Spotify green
    setTimeout(() => {
      this.textContent = 'Play';
      this.style.background = '#ff6b35';
    }, 2000);

    if (url) window.open(url, '_blank');
  });
});

// Scroll Reveal Animation

const revealElements = document.querySelectorAll('.music-card, .about-content > div');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.15 });

revealElements.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(40px)';
  el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
  observer.observe(el);
});

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks  = document.querySelector('.nav-links');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    hamburger.classList.toggle('active');
  });

  // Close menu on link click
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('active');
    });
  });
}

// Social Links Update
const socialData = {
  spotify:   'https://open.spotify.com/artist/1Xyo4u8uXC1ZmMpatF05PJ',
  instagram: 'https://www.instagram.com/theweeknd',
  youtube:   'https://www.youtube.com/@TheWeeknd',
  twitter:   'https://twitter.com/theweeknd'
};

document.querySelectorAll('.social-links a').forEach(link => {
  const icon = link.querySelector('i');
  if (!icon) return;

  if (icon.classList.contains('fa-spotify'))   link.href = socialData.spotify;
  if (icon.classList.contains('fa-instagram')) link.href = socialData.instagram;
  if (icon.classList.contains('fa-youtube'))   link.href = socialData.youtube;
  if (icon.classList.contains('fa-twitter'))   link.href = socialData.twitter;

  link.setAttribute('target', '_blank');
  link.setAttribute('rel', 'noopener noreferrer');
});

// Dynamic Footer Year
const yearEl = document.querySelector('footer p');
if (yearEl) {
  yearEl.textContent = `© ${new Date().getFullYear()} The Weeknd. All Rights Reserved.`;
}
