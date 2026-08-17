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
if (projectForm) {
  const submitBtn = projectForm.querySelector('button[type="submit"]');
  const formNote = projectForm.querySelector('.form-note');
  if (submitBtn) submitBtn.textContent = 'Send enquiry';
  if (formNote) formNote.textContent = 'Your enquiry is sent securely to ISBuildWeb. We’ll reply to the email address you provide.';
}

projectForm?.addEventListener('submit', async (e) => {
  e.preventDefault();

  const submitBtn = projectForm.querySelector('button[type="submit"]');
  const originalText = 'Send enquiry';
  submitBtn.disabled = true;
  submitBtn.textContent = 'Sending…';

  const payload = {
    name: document.getElementById('name').value.trim(),
    email: document.getElementById('email').value.trim(),
    company: document.getElementById('company').value.trim() || 'Not provided',
    project_type: document.getElementById('projectType').value,
    message: document.getElementById('message').value.trim(),
    _subject: `ISBuildWeb project enquiry — ${document.getElementById('projectType').value}`,
    _template: 'table'
  };

  try {
    const response = await fetch('https://formsubmit.co/ajax/isbuildweb@isbuildweb.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    const result = await response.json();
    if (!response.ok || result.success === 'false' || result.success === false) {
      throw new Error(result.message || 'Unable to send enquiry');
    }

    projectForm.reset();
    submitBtn.textContent = 'Enquiry sent ✓';
    submitBtn.classList.add('sent');

    let status = projectForm.querySelector('.form-status');
    if (!status) {
      status = document.createElement('p');
      status.className = 'form-status';
      projectForm.appendChild(status);
    }
    status.textContent = 'Thank you — your enquiry has been sent. We’ll be in touch soon.';

    setTimeout(() => {
      submitBtn.textContent = originalText;
      submitBtn.classList.remove('sent');
      submitBtn.disabled = false;
    }, 5000);
  } catch (error) {
    submitBtn.disabled = false;
    submitBtn.textContent = originalText;

    let status = projectForm.querySelector('.form-status');
    if (!status) {
      status = document.createElement('p');
      status.className = 'form-status';
      projectForm.appendChild(status);
    }
    status.textContent = 'Sorry — the enquiry could not be sent. Please email isbuildweb@isbuildweb.com directly.';
  }
});
