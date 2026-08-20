const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.topbar nav');
if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
}

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

// Conversion-focused refinements: make the next step concrete and reduce buyer uncertainty.
document.querySelectorAll('a[href="#contact"]').forEach((link) => {
  const text = link.textContent.trim();
  if (text === 'Start a project' || text === 'Tell us about your project') {
    link.textContent = 'Get a free project estimate';
  }
});

const heroProof = document.querySelector('.hero-proof');
if (heroProof && !document.querySelector('.scope-promise')) {
  const promise = document.createElement('div');
  promise.className = 'scope-promise';
  promise.innerHTML = '<strong>Clear scope before we build.</strong><span>You’ll know what is included, what it costs and what happens next before development starts.</span>';
  heroProof.insertAdjacentElement('afterend', promise);
}

const gdnest = document.querySelector('#work .project-showcase');
if (gdnest && !gdnest.querySelector('.case-story')) {
  const intro = gdnest.querySelector('.project-copy > p');
  if (intro) {
    const story = document.createElement('div');
    story.className = 'case-story';
    story.innerHTML = '<div><small>THE PROBLEM</small><strong>Workshop admin is fragmented.</strong><span>Bookings, job progress and customer approvals can easily become separate manual processes.</span></div><div><small>THE SOLUTION</small><strong>One connected workflow.</strong><span>GDNest brings customer booking, staff workflow, job status and approvals into one purpose-built system.</span></div><div><small>THE BENEFIT</small><strong>Less chasing. More visibility.</strong><span>Staff get a clearer view of the day while customers get a simpler journey from booking to collection.</span></div>';
    intro.insertAdjacentElement('afterend', story);
  }
}

const form = document.querySelector('#projectForm');
if (form && !document.querySelector('#budget')) {
  const companyLabel = document.querySelector('#company')?.closest('label');
  if (companyLabel) {
    const qualifier = document.createElement('div');
    qualifier.className = 'form-two project-qualifiers';
    qualifier.innerHTML = '<label>Approximate budget<select id="budget" name="Budget"><option value="Not sure yet">Not sure yet</option><option value="Under £500 / €600 / $650">Under £500 / €600 / $650</option><option value="£500–£1,000 / €600–€1,200 / $650–$1,300">£500–£1,000 / €600–€1,200 / $650–$1,300</option><option value="£1,000–£2,500 / €1,200–€3,000 / $1,300–$3,250">£1,000–£2,500 / €1,200–€3,000 / $1,300–$3,250</option><option value="£2,500+ / €3,000+ / $3,250+">£2,500+ / €3,000+ / $3,250+</option></select></label><label>When do you need it?<select id="timeline" name="Timeline"><option value="Flexible">Flexible</option><option value="ASAP">As soon as possible</option><option value="2–4 weeks">Within 2–4 weeks</option><option value="1–2 months">Within 1–2 months</option><option value="Planning ahead">Planning ahead</option></select></label>';
    companyLabel.insertAdjacentElement('afterend', qualifier);
  }

  const formHeading = form.querySelector('.form-heading span');
  if (formHeading) formHeading.textContent = 'Tell us the basics. We’ll review it and come back with the clearest next step.';
  const submit = form.querySelector('button[type="submit"]');
  if (submit) submit.textContent = 'Get my free project estimate';
}
