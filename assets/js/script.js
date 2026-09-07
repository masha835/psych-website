// Mobile nav toggle
const menuToggle = document.getElementById('menuToggle');
const mobileNav = document.getElementById('mobileNav');

if (menuToggle && mobileNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  mobileNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// FAQ accordion
document.querySelectorAll('.faq-item').forEach((item) => {
  const button = item.querySelector('.faq-q');
  const answer = item.querySelector('.faq-a');

  button.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');

    document.querySelectorAll('.faq-item').forEach((other) => {
      other.classList.remove('open');
      other.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
      other.querySelector('.faq-a').style.maxHeight = null;
    });

    if (!isOpen) {
      item.classList.add('open');
      button.setAttribute('aria-expanded', 'true');
      answer.style.maxHeight = answer.scrollHeight + 'px';
    }
  });
});

// Policy tabs
const policyTabs = document.querySelectorAll('.policy-tab');
policyTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = tab.getAttribute('data-tab');

    policyTabs.forEach((t) => {
      t.classList.remove('active');
      t.setAttribute('aria-selected', 'false');
    });
    tab.classList.add('active');
    tab.setAttribute('aria-selected', 'true');

    document.querySelectorAll('.policy-panel').forEach((panel) => {
      panel.classList.toggle('active', panel.id === target);
    });
  });
});

// Anchor links from footer to policy tabs
document.querySelectorAll('a[href="#privacy"], a[href="#terms"]').forEach((link) => {
  link.addEventListener('click', (e) => {
    const target = link.getAttribute('href').substring(1);
    const tab = document.querySelector(`.policy-tab[data-tab="${target}"]`);
    if (tab) tab.click();
  });
});
