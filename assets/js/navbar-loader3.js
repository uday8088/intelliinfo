/**
 * Intelli Infotech Inc. — Navbar Loader
 * Injects the shared navigation bar (logo + links) on every page.
 *
 * Usage in each HTML page:
 *   <div id="navbar-container"></div>
 *   <script src="assets/js/navbar-loader.js"></script>
 */
(function () {

  const style = document.createElement('style');
  style.textContent = `
    /* Navbar sticks to top — no separate header band */
    .ii-navbar { top: 0 !important; }

    /* Desktop: logo as first li, inline with nav links */
    .ii-navbar__item--logo {
      display: flex;
      align-items: center;
      padding: 0 12px 0 0;
      margin-right: 8px;
      border-right: 1px solid var(--border);
      flex-shrink: 0;
    }
    .ii-navbar__item--logo a { display: flex; align-items: center; }
    .ii-navbar__item--logo img { height: 42px; width: auto; display: block; }

    /* Mobile: hide the desktop logo li; show the mobile row instead */
    .ii-navbar__mobile-row { display: none; }

    @media (max-width: 768px) {
      .ii-navbar__item--logo { display: none; }

      .ii-navbar__mobile-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 8px 16px;
        border-bottom: 1px solid var(--border);
      }
      .ii-navbar__mobile-row img { height: 38px; width: auto; display: block; }
    }
  `;
  document.head.appendChild(style);

  const HTML = `
  <nav class="ii-navbar" id="ii-navbar" aria-label="Main navigation">

    <!-- Mobile row: logo left, hamburger right — hidden on desktop -->
    <div class="ii-navbar__mobile-row">
      <a href="https://www.intelliinfo.us">
        <img src="assets/images/intellilogo.jpg" alt="Intelli Infotech Inc." />
      </a>
      <button class="ii-hamburger" id="ii-hamburger" aria-label="Toggle navigation" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>

    <!-- Nav links — hidden on mobile until hamburger tapped -->
    <ul class="ii-navbar__inner" id="ii-nav-inner">

      <!-- Logo li — desktop only, hidden on mobile -->
      <li class="ii-navbar__item ii-navbar__item--logo">
        <a href="https://www.intelliinfo.us">
          <img src="assets/images/intellilogo.jpg" alt="Intelli Infotech Inc." />
        </a>
      </li>

      <li class="ii-navbar__item">
        <a href="index.html" class="ii-navbar__link">Home</a>
      </li>

      <li class="ii-navbar__item">
        <a href="company.html" class="ii-navbar__link">About &#x25BE;</a>
        <ul class="ii-dropdown">
          <li><a href="company.html">Company Overview</a></li>
          <li><a href="leadership.html">Leadership</a></li>
          <li><a href="certifications.html">Certifications &amp; Compliance</a></li>
        </ul>
      </li>

      <li class="ii-navbar__item">
        <a href="services.html" class="ii-navbar__link">Government Services &#x25BE;</a>
        <ul class="ii-dropdown">
          <li><a href="staff-augmentation.html">Staff Augmentation</a></li>
          <li><a href="program-management.html">Program &amp; Project Management</a></li>
          <li><a href="ada-compliance.html">ADA Compliance Programs</a></li>
          <li><a href="digital-modernization.html">Digital Modernization</a></li>
          <li><a href="cloud-data-services.html">Cloud &amp; Data Services</a></li>
        </ul>
      </li>

      <li class="ii-navbar__item">
        <a href="capabilities.html" class="ii-navbar__link">Capabilities &#x25BE;</a>
        <ul class="ii-dropdown">
          <li><a href="capabilities-statement.html">Capabilities Statement</a></li>
          <li><a href="naics-codes.html">NAICS Codes</a></li>
          <li><a href="contract-vehicles.html">Contract Vehicles</a></li>
          <li><a href="security-compliance.html">Security &amp; Compliance</a></li>
        </ul>
      </li>

      <li class="ii-navbar__item">
        <a href="industries.html" class="ii-navbar__link">Industries &#x25BE;</a>
        <ul class="ii-dropdown">
          <li><a href="healthcare.html">Healthcare</a></li>
          <li><a href="education.html">Education</a></li>
          <li><a href="retail.html">Retail</a></li>
          <li><a href="it.html">IT</a></li>
        </ul>
      </li>

      <li class="ii-navbar__item">
        <a href="careers.html" class="ii-navbar__link">Careers</a>
      </li>

      <li class="ii-navbar__item">
        <a href="contactus.html" class="ii-navbar__link">Contact Us</a>
      </li>

    </ul>
  </nav>`;

  // Inject
  const container = document.getElementById('navbar-container');
  if (container) {
    container.innerHTML = HTML;
  } else {
    document.body.insertAdjacentHTML('afterbegin', HTML);
  }

  // Hamburger toggle
  const hamburger = document.getElementById('ii-hamburger');
  const navInner  = document.getElementById('ii-nav-inner');
  if (hamburger && navInner) {
    hamburger.addEventListener('click', function () {
      const open = navInner.classList.toggle('ii-navbar__inner--open');
      hamburger.setAttribute('aria-expanded', String(open));
    });
  }

  // Favicon
  if (!document.querySelector('link[rel="icon"], link[rel="shortcut icon"]')) {
    const favicon = document.createElement('link');
    favicon.rel   = 'icon';
    favicon.type  = 'image/jpeg';
    favicon.href  = 'assets/images/Intellifavicon.jpg';
    document.head.appendChild(favicon);
  }

  // Mark active nav link
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.ii-navbar__link').forEach(function (link) {
    if (link.getAttribute('href') === current) {
      link.classList.add('ii-navbar__link--active');
    }
  });

})();
