const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.topbar nav');
if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
}

document.getElementById('year').textContent = new Date().getFullYear();

const projectForm = document.getElementById('projectForm');
projectForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  const type = document.getElementById('projectType').value;
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const company = document.getElementById('company').value.trim();
  const message = document.getElementById('message').value.trim();
  const subject = encodeURIComponent(`ISBuildWeb project enquiry — ${type}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nCompany / website: ${company || 'Not provided'}\nProject type: ${type}\n\nProject details:\n${message}`);
  window.location.href = `mailto:isbuildweb@isbuildweb.com?subject=${subject}&body=${body}`;
});
