(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const d of i.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function s(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(t){if(t.ep)return;t.ep=!0;const i=s(t);fetch(t.href,i)}})();const W="/brand-logo.webp",N="/brand-logo-header.webp",m="/images/reception-hero.png",y="/images/treatment-bed.png",u="/images/welcoming-glow.png",f="/images/reception-lounge.png",o=e=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${{arrow:'<path d="M5 12h13M13 6l6 6-6 6" />',chevron:'<path d="m6 9 6 6 6-6" />',pin:'<path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5" />',phone:'<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />',mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6" />',whatsapp:'<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />',instagram:'<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01" />',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2" />',close:'<path d="m6 6 12 12M18 6 6 18" />'}[e]}</svg>`,M=[{number:"01",category:"Body Therapy",name:"Deep Muscle Recovery",description:"A slow, restorative full-body therapy with warm basalt stones, grounding botanical oils, and private suite tranquility.",duration:"90 min",price:"₹2,499",image:y,tone:"crimson"},{number:"02",category:"Facial Ritual",name:"Cellular Bio-Radiance",description:"A luminous facial ritual pairing certified organic botanical actives with sculpting facial massage for renewed glow.",duration:"60 min",price:"₹1,899",image:f,tone:"gold"},{number:"03",category:"Couples / Combo Ritual",name:"The Luvi Escape",description:"A shared pause for two: aromatherapy, synchronised Swedish massage, and private relaxation lounge service.",duration:"120 min",price:"₹4,499",image:u,tone:"black"}],D=[{label:"Essential Pause",eyebrow:"Introduction",price:"₹4,999",cadence:"3 sessions · 30 days",benefits:["Any 60-minute ritual","Priority weekday slots","Complimentary herbal infusion"]},{label:"Signature Circle",eyebrow:"Most Chosen",price:"₹8,999",cadence:"5 sessions · 60 days",benefits:["Any 90-minute ritual","10% off beauty & grooming add-ons","One complimentary scalp treatment"],featured:!0},{label:"Private Suite",eyebrow:"Couples & Duos",price:"₹14,999",cadence:"4 shared sessions · 90 days",benefits:["Couples suite access","Personalised aromatherapy blend","Complimentary celebration upgrade"]}],E=document.querySelector("#app");if(!E)throw new Error("App root not found");E.innerHTML=`
  <div class="site-frame">
    <header class="site-nav" id="site-nav">
      <a class="nav-brand" href="#home" aria-label="Luvi Unisex Spa home">
        <img src="${N}" alt="Luvi Unisex Saloon & Spa" />
      </a>
      <nav class="nav-links" aria-label="Primary navigation">
        <a href="#about">Our Story</a>
        <a href="#treatments">Rituals</a>
        <a href="#packages">Packages</a>
        <a href="#gallery">Atmosphere</a>
        <a href="#visit">Visit Us</a>
      </nav>
      <a class="nav-cta" href="#booking">Reserve a Ritual <span>${o("arrow")}</span></a>
      <button class="menu-toggle" type="button" aria-label="Open navigation" aria-expanded="false"><span></span><span></span></button>
    </header>

    <main>
      <section class="hero" id="home">
        <div class="hero-image" style="background-image: url('${m}')"></div>
        <div class="hero-wash"></div>
        <div class="hero-orb hero-orb-one" data-parallax="0.18"></div>
        <div class="hero-orb hero-orb-two" data-parallax="-0.1"></div>
        <div class="hero-content page-width" data-reveal>
          <p class="eyebrow"><span></span> Luvi Unisex Saloon & Spa · Horamavu, Bengaluru</p>
          <h1>Pause.<br /><em>Feel more.</em></h1>
          <p class="hero-copy">A considered sanctuary in Horamavu for body, mind, precision styling, and restorative holistic therapies.</p>
          <div class="hero-actions">
            <a class="button button-primary" href="#booking">Book an experience ${o("arrow")}</a>
            <a class="button button-quiet" href="#treatments">Explore rituals <span>${o("chevron")}</span></a>
          </div>
          <div class="hero-meta">
            <span><b>01</b> Luxury unisex sanctuary</span>
            <span><b>02</b> Autoclaved hygiene protocols</span>
            <span><b>03</b> Horamavu, Bengaluru</span>
          </div>
        </div>
        <a class="scroll-cue" href="#about" aria-label="Scroll to our story"><span>Scroll to unwind</span><i>${o("chevron")}</i></a>
      </section>

      <section class="manifesto" aria-label="Luvi introduction">
        <div class="page-width manifesto-grid">
          <p class="section-kicker">The Luvi Feeling</p>
          <p class="manifesto-line">Luxury is not loud.<br /><em>It is how you leave feeling.</em></p>
          <span class="manifesto-mark">L<span>U</span>V<span>I</span></span>
        </div>
      </section>

      <section class="section about-section page-width" id="about">
        <div class="section-heading" data-reveal>
          <p class="eyebrow"><span></span> 01 · Our Story</p>
          <h2>A softer kind<br />of <em>strength.</em></h2>
        </div>
        <div class="about-grid">
          <div class="about-copy" data-reveal>
            <p class="lead">Luvi Unisex Saloon & Spa is an intimate wellness sanctuary created for Bengaluru’s pace-setters — a place to put the noise down and come back to yourself.</p>
            <p class="body-copy">Located on the 2nd floor above Ramdev Medical in Horamavu, we blend precision hair couture and grooming with deep, restorative body therapies. Every implement undergoes hospital-grade autoclave sterilization, and every treatment uses certified botanical formulations.</p>
            <div class="signature-note"><span class="signature-line"></span><span>No.46/2, Banjara Layout, Horamavu · Bengaluru</span></div>
          </div>
          <div class="about-visual" data-reveal>
            <div class="about-photo" style="background-image:url('${u}')"></div>
            <div class="about-stamp"><span>Sanctuary</span><strong>LUVI</strong><small>Horamavu</small></div>
            <div class="about-vertical">A ritual, not a rush</div>
          </div>
        </div>
      </section>

      <section class="section rituals-section" id="treatments">
        <div class="page-width">
          <div class="section-heading heading-split" data-reveal>
            <div><p class="eyebrow"><span></span> 02 · Signature Rituals</p><h2>Made for the<br /><em>way you feel.</em></h2></div>
            <p class="heading-aside">Dedicated unisex therapies for men & women.<br />Customizable timings and package combinations.</p>
          </div>
          <div class="treatment-list">
            ${M.map(e=>`
              <article class="treatment-card treatment-${e.tone}" data-reveal>
                <div class="treatment-number">${e.number}</div>
                <div class="treatment-image" style="background-image:url('${e.image}')"></div>
                <div class="treatment-copy">
                  <p class="card-eyebrow">${e.category}</p>
                  <h3>${e.name}</h3>
                  <p>${e.description}</p>
                  <div class="treatment-footer"><span>${e.duration} <i></i> ${e.price}</span><a href="#booking" data-service="${e.name}">Reserve <span>${o("arrow")}</span></a></div>
                </div>
              </article>
            `).join("")}
          </div>
        </div>
      </section>

      <section class="offer-band" id="offers">
        <div class="page-width offer-inner" data-reveal>
          <div><p class="eyebrow"><span></span> New Guest Welcome</p><h2>Your first pause,<br /><em>with us.</em></h2></div>
          <div class="offer-detail"><strong>20% OFF</strong><span>your first 90-minute ritual</span><small>Valid on all weekday bookings · Horamavu Sanctuary</small></div>
          <a class="button button-light" href="#booking" data-service="New Guest Ritual">Claim the welcome <span>${o("arrow")}</span></a>
        </div>
      </section>

      <section class="section packages-section page-width" id="packages">
        <div class="section-heading heading-split" data-reveal>
          <div><p class="eyebrow"><span></span> 03 · The Luvi Circle</p><h2>Make space<br />for <em>more.</em></h2></div>
          <p class="heading-aside">Consistent rituals, made habitual.<br />Curated memberships for individuals & couples.</p>
        </div>
        <div class="package-grid">
          ${D.map(e=>`
            <article class="package-card ${e.featured?"is-featured":""}" data-reveal>
              ${e.featured?'<div class="package-badge">Most Chosen</div>':""}
              <p class="card-eyebrow">${e.eyebrow}</p><h3>${e.label}</h3><div class="package-price">${e.price}<small> / ${e.cadence}</small></div>
              <ul>${e.benefits.map(a=>`<li><span>+</span>${a}</li>`).join("")}</ul>
              <a class="text-link" href="#booking" data-service="${e.label} Membership">Choose this circle ${o("arrow")}</a>
            </article>
          `).join("")}
        </div>
      </section>

      <section class="gallery-section" id="gallery">
        <div class="page-width">
          <div class="section-heading heading-split gallery-heading" data-reveal>
            <div><p class="eyebrow"><span></span> 04 · The Atmosphere</p><h2>Come in.<br /><em>Exhale.</em></h2></div>
            <p class="heading-aside">An intimate glance inside our facility.<br />2nd floor serene environment above Ramdev Medical.</p>
          </div>
          <div class="gallery-grid" data-reveal>
            <button class="gallery-tile gallery-tile-wide" type="button" data-image="${m}" data-caption="Reception lounge at Luvi Unisex Spa"><span style="background-image:url('${m}')"></span><b>Reception Lounge</b></button>
            <button class="gallery-tile gallery-tile-tall" type="button" data-image="${y}" data-caption="Private treatment bed and climate-controlled suite"><span style="background-image:url('${y}')"></span><b>Private Spa Suite</b></button>
            <button class="gallery-tile" type="button" data-image="${u}" data-caption="Warm ambient arrival and tea hospitality"><span style="background-image:url('${u}')"></span><b>Welcoming Ambience</b></button>
            <button class="gallery-tile" type="button" data-image="${f}" data-caption="Styling lounge and precision care"><span style="background-image:url('${f}')"></span><b>Styling & Grooming</b></button>
          </div>
        </div>
      </section>

      <section class="section testimonial-section page-width" id="testimonials">
        <div class="quote-mark">“</div>
        <div class="testimonial-content" data-reveal>
          <p class="eyebrow"><span></span> 05 · The Feeling After</p>
          <blockquote>“I walked in with a week on my shoulders and walked out feeling like I had found my centre again.”</blockquote>
          <div class="testimonial-byline"><span class="avatar">AK</span><span><strong>Ananya K.</strong><small>Verified Guest · Horamavu, Bengaluru</small></span></div>
        </div>
        <div class="testimonial-index">01 <span></span> 03</div>
      </section>

      <section class="visit-section" id="visit">
        <div class="page-width visit-grid">
          <div class="visit-copy" data-reveal>
            <p class="eyebrow"><span></span> 06 · Find Your Way Here</p>
            <h2>Leave the city<br /><em>at the door.</em></h2>
            <p class="body-copy">A calm, considered address in Horamavu, Bengaluru — close enough to reach easily, designed to feel a world away.</p>
            <div class="contact-list">
              <a href="https://maps.google.com/?q=No.46/2,+Banjara+Layout,+Near+Horamavu+BBMP+Office,+Horamavu,+Bangalore+560043" target="_blank" rel="noopener noreferrer">${o("pin")} <span>No.46/2, Banjara Layout, 2nd Floor<br /><small>Above Ramdev Medical, Near Horamavu BBMP Office, Bengaluru 560043</small></span></a>
              <a href="tel:+919900677879">${o("phone")} <span>+91 99006 77879<br /><small>Direct Concierge · Mon – Sun: 9:00 AM – 9:00 PM</small></span></a>
              <a href="https://wa.me/919900677879?text=Hello%20Luvi%20Salon,%20I%20would%20like%20to%20reserve%20an%20appointment." target="_blank" rel="noopener noreferrer">${o("whatsapp")} <span>WhatsApp Concierge<br /><small>Instant booking & appointment inquiries</small></span></a>
              <a href="mailto:luvisalonspa26@gmail.com">${o("mail")} <span>luvisalonspa26@gmail.com<br /><small>Concierge Desk</small></span></a>
            </div>
          </div>
          <div class="hours-card" data-reveal>
            <div class="hours-card-top"><span class="card-eyebrow">Sanctuary Hours</span>${o("clock")}</div>
            <div class="hours-row"><span>Monday — Friday</span><strong>9:00 — 21:00</strong></div>
            <div class="hours-row"><span>Saturday</span><strong>9:00 — 21:00</strong></div>
            <div class="hours-row"><span>Sunday</span><strong>9:00 — 21:00</strong></div>
            <div class="hours-note"><span></span><p>Open all 7 days for men and women.<br />Advance reservations recommended.</p></div>
          </div>
        </div>
      </section>

      <section class="booking-section" id="booking">
        <div class="page-width booking-grid">
          <div class="booking-intro" data-reveal>
            <p class="eyebrow"><span></span> 07 · Your Time, Held</p>
            <h2>Make a little<br /><em>room.</em></h2>
            <p>Tell us what you are looking for and our Horamavu concierge will promptly confirm your reserved slot via WhatsApp or call.</p>
            <div class="booking-number">07 <span></span> Let’s begin</div>
          </div>
          <form class="booking-form" id="booking-form" data-reveal>
            <div class="form-intro"><span>Appointment Request</span><small>Dispatched instantly to WhatsApp Concierge</small></div>
            <label><span>Your Name</span><input required id="book-name" name="name" type="text" placeholder="e.g. Rahul Sharma" /></label>
            <div class="form-row">
              <label><span>Phone Number</span><input required id="book-phone" name="phone" type="tel" placeholder="+91 99006 77879" /></label>
              <label><span>Sanctuary Wing</span>
                <select required id="book-wing" name="wing">
                  <option value="Men's Lounge">Men's Lounge</option>
                  <option value="Women's Suite">Women's Suite</option>
                  <option value="Couples / Combo Suite">Couples / Combo Suite</option>
                </select>
              </label>
            </div>
            <div class="form-row">
              <label><span>Choose an Experience</span>
                <select required name="service" id="service">
                  <option value="">Select an experience</option>
                  ${M.map(e=>`<option value="${e.name}">${e.name}</option>`).join("")}
                  <option value="Hair Couture & Precision Styling">Hair Couture & Precision Styling</option>
                  <option value="Beard Architecture & D-Tan">Beard Architecture & D-Tan</option>
                  <option value="New Guest Welcome Ritual">New Guest Welcome Ritual</option>
                  <option value="Custom Consultation / Package">Custom Consultation / Package</option>
                </select>
              </label>
              <label><span>Preferred Date</span><input required id="book-date" name="date" type="date" /></label>
            </div>
            <label><span>Preferred Time Window</span>
              <select required id="book-time" name="time">
                <option value="Morning (9:00 AM - 12:00 PM)">Morning (9:00 AM - 12:00 PM)</option>
                <option value="Afternoon (12:00 PM - 4:00 PM)">Afternoon (12:00 PM - 4:00 PM)</option>
                <option value="Evening (4:00 PM - 9:00 PM)">Evening (4:00 PM - 9:00 PM)</option>
              </select>
            </label>
            <label><span>A note for us <small>(optional)</small></span><textarea id="book-note" name="note" rows="2" placeholder="Any specific preference or request?"></textarea></label>
            <button class="button button-primary form-submit" type="submit">Send Reservation via WhatsApp ${o("arrow")}</button>
            <p class="form-legal">Your details will be prepared directly into a WhatsApp reservation note for instant concierge confirmation.</p>
            <div class="form-success" role="status" aria-live="polite"><strong>Reservation Note Prepared</strong><span>Opening WhatsApp to dispatch your session details...</span></div>
          </form>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <div class="page-width compact-footer-grid">
        <div class="footer-brand">
          <img src="${W}" alt="Luvi Unisex Saloon & Spa" />
          <p class="footer-tagline">A pause, made personal.</p>
          <p class="footer-address">No.46/2, Banjara Layout, 2nd Floor, Above Ramdev Medical, Horamavu, Bengaluru - 560043</p>
          <p class="footer-hours">Daily: 9:00 AM – 9:00 PM • Open All 7 Days</p>
        </div>
        <div class="footer-contact-actions">
          <a class="footer-action-chip" href="tel:+919900677879">${o("phone")} <span>+91 99006 77879</span></a>
          <a class="footer-action-chip" href="https://wa.me/919900677879?text=Hello%20Luvi%20Salon,%20I%20would%20like%20to%20reserve%20an%20appointment." target="_blank" rel="noopener noreferrer">${o("whatsapp")} <span>WhatsApp Concierge</span></a>
          <a class="footer-action-chip" href="mailto:luvisalonspa26@gmail.com">${o("mail")} <span>luvisalonspa26@gmail.com</span></a>
        </div>
      </div>
      <div class="page-width footer-bottom-centered">
        <span>© <span id="year"></span> Luvi Unisex Saloon & Spa. All rights reserved.</span>
      </div>
    </footer>

    <!-- Persistent Floating Concierge Dock (Bottom-Right side on scroll) -->
    <aside class="floating-concierge-dock" aria-label="Quick Concierge Access">
      <a class="floating-pill floating-whatsapp" href="https://wa.me/919900677879?text=Hello%20Luvi%20Salon,%20I%20would%20like%20to%20reserve%20an%20appointment." target="_blank" rel="noopener noreferrer" title="Chat on WhatsApp" aria-label="WhatsApp Concierge">
        ${o("whatsapp")}
        <span>WhatsApp</span>
      </a>
      <a class="floating-pill floating-call" href="tel:+919900677879" title="Call Concierge: +91 99006 77879" aria-label="Call Concierge">
        ${o("phone")}
        <span>Call Reception</span>
      </a>
    </aside>

    <div class="lightbox" id="lightbox" aria-hidden="true">
      <div class="lightbox-backdrop" data-close-lightbox></div>
      <div class="lightbox-dialog" role="dialog" aria-modal="true" aria-label="Gallery image">
        <button class="lightbox-close" type="button" aria-label="Close image" data-close-lightbox>${o("close")}</button>
        <div class="lightbox-image" id="lightbox-image"></div>
        <p id="lightbox-caption"></p>
      </div>
    </div>
  </div>
`;const v=document.querySelector("#site-nav"),r=document.querySelector(".menu-toggle"),c=document.querySelector(".nav-links");r==null||r.addEventListener("click",()=>{const e=(c==null?void 0:c.classList.toggle("is-open"))??!1;r.setAttribute("aria-expanded",String(e)),r.classList.toggle("is-open",e)});document.querySelectorAll(".nav-links a").forEach(e=>{e.addEventListener("click",()=>{c==null||c.classList.remove("is-open"),r==null||r.classList.remove("is-open"),r==null||r.setAttribute("aria-expanded","false")})});window.addEventListener("scroll",()=>{v==null||v.classList.toggle("is-scrolled",window.scrollY>32)},{passive:!0});const F=["home","about","treatments","packages","gallery","visit","booking"],U=new IntersectionObserver(e=>{e.forEach(a=>{a.isIntersecting&&document.querySelectorAll(".nav-links a").forEach(s=>{s.classList.toggle("is-active",s.getAttribute("href")===`#${a.target.id}`)})})},{rootMargin:"-35% 0px -55% 0px",threshold:0});F.forEach(e=>{const a=document.getElementById(e);a&&U.observe(a)});const T=new IntersectionObserver((e,a)=>{e.forEach(s=>{s.isIntersecting&&(s.target.classList.add("is-visible"),a.unobserve(s.target))})},{threshold:.12});document.querySelectorAll("[data-reveal]").forEach(e=>T.observe(e));document.querySelectorAll("[data-service]").forEach(e=>{e.addEventListener("click",()=>{const a=e.dataset.service,s=document.querySelector("#service");if(a&&s){const l=Array.from(s.options).find(t=>t.value===a||t.text===a);l&&(s.value=l.value)}})});const p=document.querySelector("#booking-form"),g=document.querySelector(".form-success"),h=document.querySelector("#book-date");if(h){const e=new Date().toISOString().split("T")[0];h.min=e,h.value=e}p==null||p.addEventListener("submit",e=>{var S,k,$,A,x,L,C;e.preventDefault();const a=(((S=document.querySelector("#book-name"))==null?void 0:S.value)||"").trim(),s=(((k=document.querySelector("#book-phone"))==null?void 0:k.value)||"").trim(),l=(($=document.querySelector("#book-wing"))==null?void 0:$.value)||"Men's Lounge",t=((A=document.querySelector("#service"))==null?void 0:A.value)||"Signature Ritual",i=((x=document.querySelector("#book-date"))==null?void 0:x.value)||"",d=((L=document.querySelector("#book-time"))==null?void 0:L.value)||"Preferred Time",w=(((C=document.querySelector("#book-note"))==null?void 0:C.value)||"").trim(),I=w?`
• Special Note: ${w}`:"",B=`✦ PRIORITY RESERVATION - LUVI SALON & SPA ✦
────────────────────────────────────────────
• Guest: ${a}
• Phone: ${s}
• Sanctuary Wing: ${l}
• Selected Ritual: ${t}
• Date: ${i}
• Time Window: ${d}${I}
• Sanctuary: Horamavu, Bengaluru
────────────────────────────────────────────
Kindly confirm my appointment reservation.`,O=`https://wa.me/919900677879?text=${encodeURIComponent(B)}`;window.open(O,"_blank"),g==null||g.classList.add("is-visible"),p.querySelectorAll("input, select, textarea, button").forEach(H=>{H.disabled=!0})});const n=document.querySelector("#lightbox"),q=document.querySelector("#lightbox-image"),P=document.querySelector("#lightbox-caption"),R=()=>{n==null||n.classList.remove("is-open"),n==null||n.setAttribute("aria-hidden","true")};document.querySelectorAll(".gallery-tile").forEach(e=>{e.addEventListener("click",()=>{const a=e.dataset.image;!a||!q||!P||(q.style.backgroundImage=`url('${a}')`,P.textContent=e.dataset.caption??"",n==null||n.classList.add("is-open"),n==null||n.setAttribute("aria-hidden","false"))})});document.querySelectorAll("[data-close-lightbox]").forEach(e=>e.addEventListener("click",R));document.addEventListener("keydown",e=>{e.key==="Escape"&&R()});const j=document.querySelectorAll("[data-parallax]");let b=0;window.addEventListener("scroll",()=>{b||(b=window.requestAnimationFrame(()=>{const e=window.scrollY;j.forEach(a=>{const s=Number(a.dataset.parallax??0);a.style.transform=`translate3d(0, ${e*s}px, 0)`}),b=0}))},{passive:!0});document.querySelector("#year").textContent=String(new Date().getFullYear());
