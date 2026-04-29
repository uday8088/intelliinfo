/**
 * Intelli Infotech Inc. — Footer Loader
 * Injects the shared footer + Privacy Policy modal on every page.
 */
(function () {

  const year = new Date().getFullYear();

  const HTML = `
  <footer class="ii-footer">

    <div class="ii-footer__social">
      <strong>Connect with us:</strong>
      <a href="mailto:info@intelliinfo.us">info@intelliinfo.us</a>
      &nbsp;|&nbsp;
      <button class="ii-footer__contact-btn" id="ii-contact-trigger" aria-haspopup="dialog">Contact</button>
    </div>

    <div class="ii-footer__countries">
      <strong>Countries:</strong> USA, India
    </div>

    <div class="ii-footer__copyright">
      Copyright &copy; 2003&ndash;${year} Intelli Infotech Inc. &nbsp;|&nbsp; intelliinfo.us &nbsp;&nbsp;All Rights Reserved.
      &nbsp;&nbsp;<button class="ii-pp-trigger" id="ii-pp-trigger" aria-haspopup="dialog">Privacy Policy</button>
    </div>

  </footer>

  <!-- ══ Privacy Policy Modal ══════════════════════════════════════════ -->
  <div class="ii-modal-overlay" id="ii-pp-modal" role="dialog" aria-modal="true" aria-labelledby="ii-pp-modal-title">
    <div class="ii-modal">

      <div class="ii-modal__header">
        <div>
          <div class="ii-modal__label">Legal &amp; Compliance</div>
          <h2 class="ii-modal__title" id="ii-pp-modal-title">Privacy Policy</h2>
        </div>
        <button class="ii-modal__close" id="ii-pp-close" aria-label="Close">&times;</button>
      </div>

      <div class="ii-modal__meta">
        <span><strong>Effective Date:</strong> January 1, 2024</span>
        <span><strong>Last Updated:</strong> January 1, 2024</span>
        <span><strong>Jurisdiction:</strong> California, USA</span>
      </div>

      <div class="ii-modal__body" id="ii-pp-body">

        <div class="ii-pp-section">
          <div class="ii-pp-section__title">1. Information We Collect</div>
          <p>We collect information in the following categories:</p>
          <p><strong>Information you provide directly:</strong></p>
          <ul>
            <li>Name, email address, phone number, and company name submitted via our contact form or project enquiries</li>
            <li>City, country, and website URL when voluntarily provided</li>
            <li>Communication content — messages, project descriptions, and questions sent to us</li>
            <li>Business information exchanged during client onboarding or contract negotiations</li>
          </ul>
          <p><strong>Information collected automatically:</strong></p>
          <ul>
            <li>IP address, browser type, operating system, and device type</li>
            <li>Pages visited, time spent on pages, and referral source</li>
            <li>Cookies and similar tracking technologies (see Section 6)</li>
          </ul>
          <p>We do <strong>not</strong> collect sensitive personal information such as government ID numbers, financial account details, health records, or biometric data through our website.</p>
        </div>

        <div class="ii-pp-section">
          <div class="ii-pp-section__title">2. How We Use Your Information</div>
          <p>We use collected information solely for legitimate business purposes, including:</p>
          <ul>
            <li>Responding to enquiries, project requests, and support communications</li>
            <li>Evaluating and executing service agreements and client engagements</li>
            <li>Sending relevant service updates or proposals you have requested or consented to</li>
            <li>Improving our website and services through aggregated analytics</li>
            <li>Complying with applicable legal obligations, court orders, or regulatory requirements</li>
            <li>Protecting the rights, property, and safety of Intelli Infotech Inc. and its clients</li>
          </ul>
          <p>We do <strong>not</strong> use your information for automated decision-making, profiling, or any form of behavioural advertising.</p>
        </div>

        <div class="ii-pp-section">
          <div class="ii-pp-section__title">3. How We Share Your Information</div>
          <p>Intelli Infotech Inc. does <strong>not</strong> sell, rent, or trade your personal information to any third party, under any circumstances.</p>
          <p>We may share information only in limited circumstances:</p>
          <ul>
            <li><strong>Service providers:</strong> Trusted vendors who assist in operating our website, subject to strict confidentiality obligations</li>
            <li><strong>Legal requirements:</strong> When disclosure is required by law, subpoena, or government authority</li>
            <li><strong>Business transfer:</strong> In the event of a merger or acquisition, under equivalent privacy protections</li>
            <li><strong>With your explicit consent:</strong> For any purpose you specifically authorise</li>
          </ul>
        </div>

        <div class="ii-pp-section">
          <div class="ii-pp-section__title">4. Data Retention</div>
          <ul>
            <li>Enquiry and contact form submissions — up to 24 months from last interaction</li>
            <li>Client project and contract records — 7 years from project completion per California requirements</li>
            <li>Website analytics data — up to 12 months in aggregated, anonymised form</li>
          </ul>
          <p>Upon expiry of the applicable period, data is securely deleted or anonymised.</p>
        </div>

        <div class="ii-pp-section">
          <div class="ii-pp-section__title">5. Data Security</div>
          <p>We implement industry-standard measures to protect your information:</p>
          <ul>
            <li>Encrypted data transmission using TLS/HTTPS across all web properties</li>
            <li>Access controls limiting data access to authorised personnel</li>
            <li>Regular security assessments and vulnerability reviews</li>
            <li>Confidentiality obligations for all employees and contractors</li>
          </ul>
        </div>

        <div class="ii-pp-section">
          <div class="ii-pp-section__title">6. Cookies &amp; Tracking</div>
          <ul>
            <li><strong>Essential cookies:</strong> Required for the website to function — cannot be disabled</li>
            <li><strong>Analytics cookies:</strong> Aggregated, anonymised usage data only</li>
          </ul>
          <p>We do <strong>not</strong> use advertising cookies or cross-site tracking. You may disable non-essential cookies through your browser settings at any time.</p>
        </div>

        <div class="ii-pp-section">
          <div class="ii-pp-section__title">7. Your Rights</div>
          <p>Depending on your jurisdiction, you may have the right to:</p>
          <ul>
            <li><strong>Access</strong> the personal information we hold about you</li>
            <li><strong>Correct</strong> inaccurate or incomplete data</li>
            <li><strong>Delete</strong> your personal information, subject to legal retention obligations</li>
            <li><strong>Object</strong> to processing for direct marketing purposes</li>
            <li><strong>Portability</strong> — receive your data in a machine-readable format</li>
            <li><strong>Withdraw consent</strong> at any time where processing is consent-based</li>
          </ul>
          <p>California residents have additional rights under CCPA. We do not sell personal data. To exercise any right, contact us — we will respond within 30 days.</p>
        </div>

        <div class="ii-pp-section">
          <div class="ii-pp-section__title">8. Children's Privacy</div>
          <p>Our website and services are intended solely for individuals aged 18 and over. We do not knowingly collect personal information from minors. If you believe a minor has submitted information to us, please contact us immediately and we will delete it promptly.</p>
        </div>

        <div class="ii-pp-section">
          <div class="ii-pp-section__title">9. Changes to This Policy</div>
          <p>We may update this Privacy Policy periodically. When we do, the "Last Updated" date above will be revised. Continued use of our website following any changes constitutes your acceptance of the updated policy.</p>
        </div>

        <div class="ii-pp-section">
          <div class="ii-pp-section__title">10. Contact Us</div>
          <p>
            <strong>Intelli Infotech Inc.</strong><br />
            Sacramento, CA, USA<br />
            Phone: <a href="tel:+19253599490">925 359 9490</a> &nbsp;|&nbsp; Fax: 925 807 0347<br />
            Web: <a href="https://www.intelliinfo.us">www.intelliinfo.us</a>
          </p>
          <p>We take all privacy enquiries seriously and respond within <strong>30 calendar days</strong>.</p>
        </div>

      </div><!-- /.ii-modal__body -->

      <div class="ii-modal__footer">
        <p class="ii-modal__ack-note">By clicking <strong>I Acknowledge</strong> you confirm you have read and understood this Privacy Policy.</p>
        <button class="ii-modal__ack-btn" id="ii-pp-ack">I Acknowledge</button>
      </div>

    </div><!-- /.ii-modal -->
  </div><!-- /.ii-modal-overlay (privacy) -->

  <!-- ══ Contact Modal ════════════════════════════════════════════════ -->
  <div class="ii-modal-overlay" id="ii-contact-modal" role="dialog" aria-modal="true" aria-labelledby="ii-contact-modal-title">
    <div class="ii-modal">

      <div class="ii-modal__header">
        <div>
          <div class="ii-modal__label">Get In Touch</div>
          <h2 class="ii-modal__title" id="ii-contact-modal-title">Project Enquiry</h2>
        </div>
        <button class="ii-modal__close" id="ii-contact-close" aria-label="Close">&times;</button>
      </div>

      <div class="ii-modal__body" id="ii-contact-body">

        <!-- Thank you state -->
        <div class="ii-modal-thanks" id="ii-modal-thanks" style="display:none;">
          <div class="ii-modal-thanks__icon">✅</div>
          <h3>Message received — thank you!</h3>
          <p>A member of our team will be in touch within one business day.</p>
        </div>

        <!--
          FORMSPREE: replace YOUR_FORM_ID with your 8-char Formspree endpoint ID
          e.g.  data-action="https://formspree.io/f/abcdefgh"
        -->
        <form id="ii-contact-modal-form" data-action="https://formspree.io/f/mqeyeapo" novalidate>

          <div class="ii-mform-card">

            <!-- Row 1: Name · Email -->
            <div class="ii-mform-row ii-mform-row--2">
              <div class="ii-mform-group">
                <label for="mc-name">Full Name <span class="req">*</span></label>
                <input type="text" id="mc-name" name="name" required maxlength="128" autocomplete="name" placeholder="Jane Smith" />
              </div>
              <div class="ii-mform-group">
                <label for="mc-email">Email Address <span class="req">*</span></label>
                <input type="email" id="mc-email" name="email" required maxlength="128" autocomplete="email" placeholder="jane@company.com" />
              </div>
            </div>

            <!-- Row 2: Country Code · Phone · Company -->
            <div class="ii-mform-row ii-mform-row--3">
              <div class="ii-mform-group">
                <label for="mc-phone-cc">Country Code</label>
                <select id="mc-phone-cc" name="phone_cc" class="ii-phone-cc">
                  <option value="+1"   data-fmt="(###) ### ####" selected>+1 — US</option>
                  <option value="+1"   data-fmt="(###) ### ####"        >+1 — CA</option>
                  <option value="+44"  data-fmt="#### ######"           >+44 — UK</option>
                  <option value="+91"  data-fmt="##### #####"           >+91 — India</option>
                  <option value="+61"  data-fmt="#### ### ###"          >+61 — AU</option>
                  <option value="+49"  data-fmt="### #######"           >+49 — DE</option>
                  <option value="+33"  data-fmt="## ## ## ## ##"        >+33 — FR</option>
                  <option value="+971" data-fmt="## ### ####"           >+971 — UAE</option>
                  <option value="+65"  data-fmt="#### ####"             >+65 — SG</option>
                </select>
              </div>
              <div class="ii-mform-group">
                <label for="mc-phone">Phone Number <span class="req">*</span></label>
                <input type="tel" id="mc-phone" name="phone" required maxlength="20"
                       autocomplete="tel" placeholder="(555) 000 0000" inputmode="numeric" />
              </div>
              <div class="ii-mform-group">
                <label for="mc-company">Company</label>
                <input type="text" id="mc-company" name="company" maxlength="128"
                       autocomplete="organization" placeholder="Your Organisation" />
              </div>
            </div>

            <!-- Row 3: Website · City · Country -->
            <div class="ii-mform-row ii-mform-row--3">
              <div class="ii-mform-group">
                <label for="mc-website">Website</label>
                <div class="ii-url-wrap">
                  <span class="ii-url-prefix">https://</span>
                  <input type="text" id="mc-website" name="website" maxlength="200"
                         autocomplete="url" placeholder="www.company.com" class="ii-url-input" inputmode="url" />
                </div>
              </div>
              <div class="ii-mform-group">
                <label for="mc-city">City</label>
                <input type="text" id="mc-city" name="city" maxlength="128"
                       autocomplete="address-level2" placeholder="Sacramento" />
              </div>
              <div class="ii-mform-group">
                <label for="mc-country">Country</label>
                <input type="text" id="mc-country" name="country" maxlength="128"
                       autocomplete="country-name" placeholder="USA" />
              </div>
            </div>

            <!-- Row 4: Subject -->
            <div class="ii-mform-row ii-mform-row--1">
              <div class="ii-mform-group">
                <label for="mc-subject">Subject <span class="req">*</span></label>
                <input type="text" id="mc-subject" name="subject" required maxlength="128"
                       placeholder="e.g. Custom software development enquiry" />
              </div>
            </div>

            <!-- Row 5: Message -->
            <div class="ii-mform-row ii-mform-row--1">
              <div class="ii-mform-group">
                <label for="mc-message">Message</label>
                <textarea id="mc-message" name="message" rows="3"
                          placeholder="Brief description of your project, timeline, or questions…"></textarea>
              </div>
            </div>

          </div><!-- /.ii-mform-card -->

        </form>

      </div><!-- /.ii-modal__body -->

      <div class="ii-modal__footer">
        <p class="ii-modal__ack-note"><span style="color:#E5005F">*</span> Required fields. We respond within one business day.</p>
        <button class="ii-modal__ack-btn" id="ii-contact-submit">Send Message</button>
      </div>

    </div><!-- /.ii-modal -->
  </div><!-- /.ii-modal-overlay (contact) -->`;
  /* ── Styles ────────────────────────────────────────────────────────── */
  const style = document.createElement('style');
  style.textContent = `
    /* Trigger button in footer copyright band (white text — on magenta) */
    .ii-pp-trigger {
      background: none;
      border: none;
      color: #fff;
      text-decoration: underline;
      cursor: pointer;
      font-family: inherit;
      font-size: inherit;
      padding: 0;
    }
    .ii-pp-trigger:hover { opacity: .8; }

    /* Contact button in the social row (dark text — on light grey) */
    .ii-footer__contact-btn {
      background: none;
      border: none;
      color: #E5005F;
      font-weight: 700;
      text-decoration: underline;
      cursor: pointer;
      font-family: inherit;
      font-size: inherit;
      padding: 0;
    }
    .ii-footer__contact-btn:hover { color: #B8004C; }

    /* Overlay */
    .ii-modal-overlay {
      display: none;
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,.52);
      z-index: 9000;
      align-items: center;
      justify-content: center;
      padding: 20px;
    }
    .ii-modal-overlay--open { display: flex; }

    /* Modal box */
    .ii-modal {
      background: #fff;
      border-top: 4px solid #E5005F;
      border-radius: 0 0 6px 6px;
      width: 100%;
      max-width: 740px;
      max-height: 88vh;
      display: flex;
      flex-direction: column;
      box-shadow: 0 24px 64px rgba(0,0,0,.22);
      animation: ii-modal-in .2s ease;
    }
    @keyframes ii-modal-in {
      from { opacity: 0; transform: translateY(-18px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    /* Header */
    .ii-modal__header {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      padding: 20px 24px 14px;
      border-bottom: 1px solid #ddd;
      flex-shrink: 0;
    }
    .ii-modal__label {
      font-size: 10px; font-weight: 700; letter-spacing: .14em;
      text-transform: uppercase; color: #E5005F; margin-bottom: 4px;
    }
    .ii-modal__title {
      font-size: 20px; font-weight: 700; color: #1a1a1a;
      margin: 0; line-height: 1.2;
    }
    .ii-modal__close {
      background: none; border: none; font-size: 26px; line-height: 1;
      color: #888; cursor: pointer; padding: 0 0 0 16px; flex-shrink: 0;
      margin-top: -2px;
      transition: color .14s;
    }
    .ii-modal__close:hover { color: #E5005F; }

    /* Meta strip */
    .ii-modal__meta {
      display: flex; gap: 20px; flex-wrap: wrap;
      padding: 10px 24px;
      background: #f4f4f4;
      border-bottom: 1px solid #ddd;
      font-size: 12px; color: #444;
      flex-shrink: 0;
    }
    .ii-modal__meta strong { color: #1a1a1a; }

    /* Scrollable body */
    .ii-modal__body {
      flex: 1;
      overflow-y: auto;
      padding: 20px 24px;
      -webkit-overflow-scrolling: touch;
    }

    /* Policy sections */
    .ii-pp-section {
      margin-bottom: 22px;
      padding-bottom: 22px;
      border-bottom: 1px solid #eee;
    }
    .ii-pp-section:last-child { border-bottom: none; margin-bottom: 0; padding-bottom: 0; }
    .ii-pp-section__title {
      font-size: 13.5px; font-weight: 700; color: #1a1a1a;
      margin-bottom: 8px;
      padding-left: 10px;
      border-left: 3px solid #E5005F;
    }
    .ii-pp-section p {
      font-size: 13.5px; line-height: 1.75; color: #444;
      margin-bottom: 8px;
    }
    .ii-pp-section p:last-child { margin-bottom: 0; }
    .ii-pp-section ul { margin: 6px 0 8px; padding: 0; }
    .ii-pp-section ul li {
      list-style: none; display: flex; gap: 8px;
      align-items: flex-start; padding: 3px 0;
      font-size: 13.5px; line-height: 1.65; color: #444;
    }
    .ii-pp-section ul li::before {
      content: '–'; color: #E5005F; font-weight: 700; flex-shrink: 0;
    }
    .ii-pp-section a { color: #E5005F; }
    .ii-pp-section a:hover { text-decoration: underline; }

    /* Footer / Ack */
    .ii-modal__footer {
      padding: 16px 24px;
      border-top: 1px solid #ddd;
      background: #f9f9f9;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      flex-shrink: 0;
      flex-wrap: wrap;
    }
    .ii-modal__ack-note {
      font-size: 12.5px; color: #555; line-height: 1.5;
      margin: 0; flex: 1; min-width: 200px;
    }
    .ii-modal__ack-btn {
      background: #E5005F;
      color: #fff;
      border: none;
      padding: 10px 28px;
      font-family: inherit;
      font-size: 13.5px; font-weight: 700;
      letter-spacing: .05em; text-transform: uppercase;
      border-radius: 3px; cursor: pointer;
      transition: background .15s;
      white-space: nowrap;
      flex-shrink: 0;
    }
    .ii-modal__ack-btn:hover { background: #B8004C; }

    /* Contact form inside modal */
    .ii-mform-card { padding: 4px 0; }
    .ii-mform-row {
      display: grid; gap: 12px; margin-bottom: 12px;
    }
    .ii-mform-row--1 { grid-template-columns: 1fr; }
    .ii-mform-row--2 { grid-template-columns: 1fr 1fr; }
    .ii-mform-row--3 { grid-template-columns: 1fr 1fr 1fr; }
    .ii-mform-group label {
      display: block; font-size: 11px; font-weight: 600;
      color: #555; margin-bottom: 4px;
      letter-spacing: .04em; text-transform: uppercase;
    }
    .ii-mform-group label .req { color: #E5005F; }
    .ii-mform-group input,
    .ii-mform-group textarea,
    .ii-mform-group select {
      width: 100%; padding: 8px 10px;
      border: 1px solid #ddd; border-radius: 3px;
      font-family: inherit; font-size: 13.5px; color: #1a1a1a;
      background: #fff;
      transition: border-color .15s, box-shadow .15s;
    }
    .ii-mform-group input:focus,
    .ii-mform-group textarea:focus,
    .ii-mform-group select:focus {
      outline: none; border-color: #E5005F;
      box-shadow: 0 0 0 3px rgba(229,0,95,.09);
    }
    .ii-mform-group textarea { resize: vertical; min-height: 80px; }
    .ii-phone-cc { width: 100%; }

    /* URL prefix widget */
    .ii-url-wrap {
      display: flex; border: 1px solid #ddd; border-radius: 3px; overflow: hidden;
      transition: border-color .15s, box-shadow .15s;
    }
    .ii-url-wrap:focus-within { border-color: #E5005F; box-shadow: 0 0 0 3px rgba(229,0,95,.09); }
    .ii-url-prefix {
      flex-shrink: 0; padding: 8px 8px; background: #f4f4f4;
      border-right: 1px solid #ddd; font-size: 12px; font-weight: 600;
      color: #666; display: flex; align-items: center; user-select: none;
    }
    .ii-url-input {
      flex: 1; border: none !important; box-shadow: none !important;
      border-radius: 0 !important; padding: 8px 10px;
      font-family: inherit; font-size: 13.5px; color: #1a1a1a;
      background: #fff; outline: none; min-width: 0;
    }

    /* Thank-you state */
    .ii-modal-thanks {
      text-align: center; padding: 32px 20px;
    }
    .ii-modal-thanks__icon { font-size: 40px; margin-bottom: 12px; }
    .ii-modal-thanks h3 { font-size: 17px; font-weight: 700; color: #1c6e30; margin-bottom: 8px; }
    .ii-modal-thanks p  { font-size: 14px; color: #444; }

    @media (max-width: 480px) {
      .ii-modal__footer { flex-direction: column; align-items: stretch; }
      .ii-modal__ack-btn { text-align: center; }
      .ii-modal__meta { flex-direction: column; gap: 4px; }
      .ii-mform-row--2, .ii-mform-row--3 { grid-template-columns: 1fr; }
    }
  `;
  document.head.appendChild(style);

  /* ── Inject HTML ───────────────────────────────────────────────────── */
  const container = document.getElementById('footer-container');
  if (container) {
    container.innerHTML = HTML;
  } else {
    document.body.insertAdjacentHTML('beforeend', HTML);
  }

  /* ── Modal logic ───────────────────────────────────────────────────── */
  const overlay  = document.getElementById('ii-pp-modal');
  const trigger  = document.getElementById('ii-pp-trigger');
  const closeBtn = document.getElementById('ii-pp-close');
  const ackBtn   = document.getElementById('ii-pp-ack');
  const body     = document.getElementById('ii-pp-body');

  function openModal() {
    overlay.classList.add('ii-modal-overlay--open');
    document.body.style.overflow = 'hidden';
    body.scrollTop = 0;
    closeBtn.focus();
  }

  function closeModal() {
    overlay.classList.remove('ii-modal-overlay--open');
    document.body.style.overflow = '';
    trigger.focus();
  }

  if (trigger)  trigger.addEventListener('click', openModal);
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (ackBtn)   ackBtn.addEventListener('click', closeModal);

  // Close on overlay click (outside the modal box)
  if (overlay) {
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) closeModal();
    });
  }

  // Close on Escape key — handles both modals
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      if (overlay && overlay.classList.contains('ii-modal-overlay--open')) closeModal();
      if (cOverlay && cOverlay.classList.contains('ii-modal-overlay--open')) closeContact();
    }
  });

  /* ══ Contact Modal ════════════════════════════════════════════════ */
  const cOverlay    = document.getElementById('ii-contact-modal');
  const cTrigger    = document.getElementById('ii-contact-trigger');
  const cCloseBtn   = document.getElementById('ii-contact-close');
  const cSubmitBtn  = document.getElementById('ii-contact-submit');
  const cForm       = document.getElementById('ii-contact-modal-form');
  const cThanks     = document.getElementById('ii-modal-thanks');
  const cBody       = document.getElementById('ii-contact-body');

  function openContact() {
    cOverlay.classList.add('ii-modal-overlay--open');
    document.body.style.overflow = 'hidden';
    cBody.scrollTop = 0;
    if (cCloseBtn) cCloseBtn.focus();
  }

  function closeContact() {
    cOverlay.classList.remove('ii-modal-overlay--open');
    document.body.style.overflow = '';
    if (cTrigger) cTrigger.focus();
  }

  if (cTrigger)  cTrigger.addEventListener('click', openContact);
  if (cCloseBtn) cCloseBtn.addEventListener('click', closeContact);
  if (cOverlay)  cOverlay.addEventListener('click', function (e) {
    if (e.target === cOverlay) closeContact();
  });

  /* Phone auto-format on blur */
  const mcCC    = document.getElementById('mc-phone-cc');
  const mcPhone = document.getElementById('mc-phone');

  function mcGetFmt() {
    var opt = mcCC && mcCC.options[mcCC.selectedIndex];
    return (opt && opt.dataset.fmt) ? opt.dataset.fmt : '(###) ### ####';
  }
  function mcApplyFmt(digits, fmt) {
    var out = '', di = 0;
    for (var i = 0; i < fmt.length && di < digits.length; i++) {
      out += (fmt[i] === '#') ? digits[di++] : fmt[i];
    }
    return out;
  }
  if (mcPhone) {
    mcPhone.placeholder = mcGetFmt().replace(/#/g, '0');
    mcPhone.addEventListener('blur', function () {
      var d = mcPhone.value.replace(/\D/g, '');
      if (d) mcPhone.value = mcApplyFmt(d, mcGetFmt());
    });
  }
  if (mcCC) {
    mcCC.addEventListener('change', function () {
      var d = mcPhone.value.replace(/\D/g, '');
      if (d) mcPhone.value = mcApplyFmt(d, mcGetFmt());
      mcPhone.placeholder = mcGetFmt().replace(/#/g, '0');
    });
  }

  /* URL prefix cleanup */
  const mcUrl = document.getElementById('mc-website');
  if (mcUrl) {
    function mcCleanUrl() {
      mcUrl.value = mcUrl.value.replace(/^(https?:\/\/|\/\/)/i, '').replace(/https?:\/\//gi, '');
    }
    mcUrl.addEventListener('input', mcCleanUrl);
    mcUrl.addEventListener('paste', function () { setTimeout(mcCleanUrl, 0); });
  }

  /* Submit */
  if (cSubmitBtn && cForm) {
    cSubmitBtn.addEventListener('click', function () {

      // Required validation
      var ok = true;
      cForm.querySelectorAll('[required]').forEach(function (f) {
        if (!f.value.trim()) { f.style.borderColor = '#cc0040'; ok = false; }
        else                 { f.style.borderColor = ''; }
      });
      if (!ok) return;

      // Build phone
      if (mcPhone && mcCC) {
        var digits = mcPhone.value.replace(/\D/g, '');
        mcPhone.value = mcCC.value + ' ' + mcApplyFmt(digits, mcGetFmt());
      }

      // Build URL
      if (mcUrl) {
        var urlVal = mcUrl.value.trim().replace(/^(https?:\/\/|\/\/)/i, '');
        mcUrl.value = urlVal && /^[^\s]+\.[^\s]+/.test(urlVal) ? 'https://' + urlVal : urlVal;
      }

      cSubmitBtn.disabled = true;
      cSubmitBtn.textContent = 'Sending…';

      fetch(cForm.dataset.action, {
        method: 'POST',
        body: new FormData(cForm),
        headers: { 'Accept': 'application/json' }
      })
      .then(function (r) {
        if (r.ok) {
          cForm.style.display = 'none';
          cThanks.style.display = 'block';
          cSubmitBtn.textContent = 'Close';
          cSubmitBtn.disabled = false;
          cSubmitBtn.onclick = closeContact;
        } else {
          cSubmitBtn.disabled = false;
          cSubmitBtn.textContent = 'Send Message';
          alert('Something went wrong. Please try again or email us at info@intelliinfo.us');
        }
      })
      .catch(function () {
        cSubmitBtn.disabled = false;
        cSubmitBtn.textContent = 'Send Message';
        alert('Network error. Please check your connection and try again.');
      });
    });
  }

})();
