:root{
  --bg: #F7FAFC;
  --surface: #FFFFFF;
  --muted: #F1F5F9;
  --text: #07121A;
  --text2:#334155;
  --border:#E2E8F0;

  /* Premium deep teal */
  --accent:#072B36;   /* dark ink teal */
  --accent2:#0B5C73;  /* refined teal */

  --shadow: 0 18px 50px rgba(2, 6, 23, .10);
  --shadow2: 0 12px 26px rgba(2, 6, 23, .08);

  --radius: 20px;

  --container: 1120px;

  --header-h: 78px;
}

*{ box-sizing:border-box; }
html{
  scroll-behavior:smooth;
  scroll-padding-top: calc(var(--header-h) + 14px);
}
@media (prefers-reduced-motion: reduce){
  html{ scroll-behavior:auto; }
  *{ animation:none !important; transition:none !important; }
}

body{
  margin:0;
  font-family: "Manrope", system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
  color:var(--text);
  background:
    radial-gradient(1200px 650px at 12% 6%, rgba(11, 92, 115, .10), transparent 60%),
    radial-gradient(900px 520px at 88% 8%, rgba(7, 43, 54, .10), transparent 55%),
    var(--bg);
}

a{ color:inherit; text-decoration:none; }
a:hover{ text-decoration:underline; text-underline-offset: 3px; }
img{ max-width:100%; display:block; }

.container{
  width:min(var(--container), calc(100% - 48px));
  margin-inline:auto;
}

.skip-link{
  position:absolute;
  left:-999px;
  top: 10px;
  padding:10px 14px;
  background:var(--surface);
  border:1px solid var(--border);
  border-radius: 12px;
  z-index:9999;
}
.skip-link:focus{ left: 16px; }

.sr-only{
  position:absolute;
  width:1px; height:1px;
  padding:0; margin:-1px;
  overflow:hidden; clip:rect(0,0,0,0);
  border:0;
}

/* Sticky header */
.site-header{
  position:sticky;
  top:0;
  z-index:50;
  backdrop-filter: blur(10px);
  background: rgba(247, 250, 252, .78);
  border-bottom: 1px solid rgba(226, 232, 240, .85);
}

.nav-wrap{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap: 18px;
  padding: 14px 0;
  min-height: var(--header-h);
}

.brand{
  display:flex;
  align-items:center;
  gap:12px;
  min-width: 230px;
  text-decoration:none !important;
}
.brand-mark{
  width:36px; height:36px;
  border-radius: 14px;
  background: linear-gradient(135deg, var(--accent2), var(--accent));
  box-shadow: var(--shadow2);
}
.brand-text strong{
  display:block;
  letter-spacing: .10em;
  font-size: 12px;
  font-weight: 900;
}
.brand-text span{
  display:block;
  color: var(--text2);
  font-size: 12px;
  font-weight: 700;
}

.nav{ position:relative; }
.nav-menu{
  display:flex;
  align-items:center;
  gap: 10px;
  flex-wrap:wrap;
  justify-content:flex-end;
}
.nav-menu a{
  font-size: 13px;
  color: var(--text2);
  padding: 10px 10px;
  border-radius: 12px;
  transition: background .2s ease, color .2s ease, transform .2s ease;
  text-decoration:none !important;
  font-weight: 700;
}
.nav-menu a:hover{
  background: rgba(11, 92, 115, .10);
  color: var(--text);
}

.nav-toggle{
  display:none;
  border:1px solid var(--border);
  background:rgba(255,255,255,.9);
  border-radius: 12px;
  padding: 10px 12px;
  box-shadow: 0 10px 20px rgba(2, 6, 23, .06);
}
.hamburger{
  display:block;
  width: 18px;
  height: 2px;
  background: var(--text);
  position:relative;
}
.hamburger::before,
.hamburger::after{
  content:"";
  position:absolute;
  left:0;
  width:18px; height:2px;
  background: var(--text);
}
.hamburger::before{ top:-6px; }
.hamburger::after{ top:6px; }

@media (max-width: 980px){
  .nav-toggle{ display:inline-flex; }
  .nav-menu{
    position:absolute;
    right:0;
    top: 56px;
    width: min(92vw, 360px);
    display:none;
    flex-direction:column;
    align-items:stretch;
    background: rgba(255,255,255,.96);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 10px;
    box-shadow: var(--shadow);
  }
  .nav-menu a{ padding: 12px 12px; }
  .nav-menu.is-open{ display:flex; }
}

/* Buttons */
.btn{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  gap:10px;
  border-radius: 14px;
  padding: 12px 16px;
  font-weight: 800;
  font-size: 14px;
  border: 1px solid transparent;
  cursor:pointer;
  transition: transform .15s ease, box-shadow .2s ease, background .2s ease, border-color .2s ease;
  text-decoration:none !important;
}
.btn:focus-visible{
  outline: 3px solid rgba(11, 92, 115, .28);
  outline-offset: 2px;
}
.btn:hover{ transform: translateY(-1px); }

.btn-primary{
  background: linear-gradient(135deg, var(--accent2), var(--accent));
  color:white;
  box-shadow: 0 16px 30px rgba(11, 92, 115, .18);
}
.btn-primary:hover{ box-shadow: 0 18px 38px rgba(11, 92, 115, .24); }

.btn-ghost{
  background: rgba(255,255,255,.85);
  border-color: var(--border);
  color: var(--text);
  box-shadow: 0 10px 18px rgba(2, 6, 23, .05);
}

.btn-soft{
  background: rgba(11, 92, 115, .10);
  border-color: rgba(11, 92, 115, .18);
  color: var(--accent);
}

.btn-small{ padding: 10px 12px; font-size: 13px; border-radius: 12px; }
.btn-full{ width:100%; }

/* Sections */
.section{ padding: 76px 0; }
.section-muted{
  background: linear-gradient(180deg, rgba(241,245,249,.85), rgba(241,245,249,.40));
  border-top: 1px solid rgba(226, 232, 240, .75);
  border-bottom: 1px solid rgba(226, 232, 240, .75);
}
.section-head{
  display:flex;
  align-items:flex-end;
  justify-content:space-between;
  gap: 20px;
  margin-bottom: 22px;
}
.section-head h2{
  margin:0;
  font-size: 34px;
  letter-spacing: -0.03em;
  line-height: 1.1;
}
.section-head p{
  margin:0;
  color: var(--text2);
  max-width: 64ch;
  font-size: 15px;
  line-height: 1.7;
}
@media (max-width: 860px){
  .section-head{ flex-direction:column; align-items:flex-start; }
  .section-head h2{ font-size: 28px; }
}

/* Anchor landing fix (the header will not cover sections) */
section[id]{ scroll-margin-top: calc(var(--header-h) + 18px); }

/* Hero */
.hero{
  position:relative;
  padding: 58px 0 30px;
}
.hero-bg{
  position:absolute;
  inset:-40px 0 auto 0;
  height: 360px;
  background:
    radial-gradient(900px 420px at 15% 20%, rgba(11,92,115,.14), transparent 60%),
    radial-gradient(900px 420px at 85% 10%, rgba(7,43,54,.14), transparent 55%);
  pointer-events:none;
}
.hero-grid{
  position:relative;
  display:grid;
  grid-template-columns: 1.2fr .8fr;
  gap: 26px;
  align-items: start;
}
@media (max-width: 940px){
  .hero-grid{ grid-template-columns: 1fr; }
}

.availability{
  display:inline-flex;
  align-items:center;
  gap:10px;
  background: rgba(255,255,255,.82);
  border: 1px solid rgba(226,232,240,.95);
  padding: 10px 14px;
  border-radius: 999px;
  color: var(--text2);
  font-weight: 800;
  font-size: 13px;
  box-shadow: 0 14px 30px rgba(2,6,23,.06);
}
.dot{
  width:10px; height:10px;
  border-radius: 50%;
  background: #22c55e;
  box-shadow: 0 0 0 5px rgba(34, 197, 94, .12);
}

.hero-title{
  margin: 14px 0 6px;
  font-size: 56px;
  letter-spacing: -0.04em;
  line-height: 1.0;
}
.hero-role{
  margin: 0 0 18px;
  color: var(--text2);
  font-weight: 900;
}
.hero-headline{
  margin: 0 0 10px;
  font-weight: 900;
  font-size: 20px;
}
.hero-subtext{
  margin: 0 0 18px;
  color: var(--text2);
  line-height: 1.75;
  font-size: 15px;
  max-width: 72ch;
}
@media (max-width: 520px){
  .hero-title{ font-size: 42px; }
}

.badge-row{
  display:flex;
  flex-wrap:wrap;
  gap: 10px;
  margin: 10px 0 18px;
}
.badge{
  padding: 10px 12px;
  border-radius: 999px;
  background: rgba(255,255,255,.86);
  border: 1px solid rgba(226,232,240,.95);
  color: var(--text);
  font-weight: 900;
  font-size: 13px;
}

.cta-row{
  display:flex;
  flex-wrap:wrap;
  gap: 12px;
  margin: 18px 0 20px;
}

.trust-row{
  display:flex;
  flex-wrap:wrap;
  gap: 10px;
  margin-top: 8px;
}
.pill{
  display:inline-flex;
  align-items:center;
  gap: 10px;
  padding: 10px 12px;
  border-radius: 14px;
  background: rgba(255,255,255,.78);
  border: 1px solid rgba(226,232,240,.95);
  color: var(--text2);
  font-weight: 900;
  font-size: 13px;
}
.pill svg{ width:18px; height:18px; color: var(--accent); }

/* Cards / grids */
.card{
  background: rgba(255,255,255,.92);
  border: 1px solid rgba(226,232,240,.95);
  border-radius: var(--radius);
  box-shadow: 0 14px 36px rgba(2, 6, 23, .06);
  padding: 18px;
  transition: transform .15s ease, box-shadow .2s ease;
}
.card:hover{ transform: translateY(-2px); box-shadow: var(--shadow); }
.card h3{ margin: 0 0 10px; font-size: 18px; letter-spacing: -.01em; }
.card p{ margin: 0; color: var(--text2); line-height:1.75; }

.card-accent{
  background: linear-gradient(180deg, rgba(11,92,115,.10), rgba(255,255,255,.92));
  border-color: rgba(11,92,115,.22);
}

.grid-2{
  display:grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
}
.grid-3{
  display:grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 18px;
}
.cards-grid{
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

@media (max-width: 980px){
  .cards-grid{ grid-template-columns: repeat(2, 1fr); }
  .grid-3{ grid-template-columns: 1fr; }
}
@media (max-width: 720px){
  .grid-2{ grid-template-columns: 1fr; }
  .cards-grid{ grid-template-columns: 1fr; }
}

.quote{
  margin: 14px 0 0;
  padding: 14px 14px 14px 16px;
  border-left: 3px solid rgba(11, 92, 115, .40);
  background: rgba(11,92,115,.08);
  color: var(--text);
  border-radius: 14px;
  line-height: 1.75;
}

/* Hero profile card */
.profile{
  background: rgba(255,255,255,.88);
  border: 1px solid rgba(226,232,240,.95);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: 16px;
}
.profile-photo{
  border-radius: 18px;
  overflow:hidden;
  border: 1px solid rgba(226,232,240,.95);
  background: linear-gradient(135deg, rgba(11,92,115,.12), rgba(7,43,54,.12));
  position:relative;
  min-height: 260px;
}
.profile-photo img{
  width:100%;
  height: 280px;
  object-fit: cover;
  display:block;
}
.photo-placeholder{
  position:absolute;
  inset:0;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  gap:10px;
  color: rgba(7,18,26,.72);
  padding: 18px;
  text-align:center;
  background: linear-gradient(135deg, rgba(255,255,255,.65), rgba(255,255,255,.35));
}
.monogram{
  width:70px; height:70px;
  border-radius: 22px;
  display:grid;
  place-items:center;
  font-weight: 1000;
  letter-spacing: .08em;
  background: rgba(255,255,255,.88);
  border: 1px solid rgba(226,232,240,.95);
  box-shadow: 0 14px 30px rgba(2,6,23,.08);
}
.placeholder-text{
  font-size: 13px;
  color: var(--text2);
  font-weight: 800;
}

.profile-meta{
  display:grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  padding: 14px 2px 8px;
}
.meta-label{
  color: var(--text2);
  font-size: 12px;
  font-weight: 900;
  letter-spacing: .02em;
}
.meta-value{
  font-weight: 1000;
  margin-top: 4px;
}

.profile-actions{
  display:grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  padding-top: 8px;
}
@media (max-width: 420px){
  .profile-meta{ grid-template-columns: 1fr; }
  .profile-actions{ grid-template-columns: 1fr; }
}

/* Lists */
.checklist{
  list-style:none;
  padding:0;
  margin: 10px 0 0;
  display:grid;
  gap: 10px;
}
.checklist li{
  position:relative;
  padding-left: 26px;
  color: var(--text2);
  line-height:1.7;
  font-weight: 650;
}
.checklist li::before{
  content:"";
  position:absolute;
  left:0; top:.45em;
  width: 14px; height: 14px;
  border-radius: 5px;
  background: rgba(11,92,115,.16);
  border: 1px solid rgba(11,92,115,.22);
  box-shadow: 0 8px 18px rgba(11,92,115,.10);
}

.taglist{
  margin: 10px 0 0;
  padding: 0;
  list-style:none;
  display:flex;
  flex-wrap:wrap;
  gap: 10px;
}
.taglist li{
  padding: 10px 12px;
  border-radius: 999px;
  background: rgba(255,255,255,.86);
  border: 1px solid rgba(226,232,240,.95);
  color: var(--text2);
  font-weight: 850;
  font-size: 13px;
}

/* Stats */
.stats-grid{
  display:grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
}
.stat{
  background: rgba(255,255,255,.92);
  border: 1px solid rgba(226,232,240,.95);
  border-radius: var(--radius);
  padding: 16px;
  box-shadow: 0 14px 30px rgba(2, 6, 23, .06);
}
.stat-value{
  font-size: 26px;
  font-weight: 1000;
  letter-spacing: -.02em;
  color: var(--accent);
}
.stat-label{
  margin-top: 8px;
  color: var(--text2);
  font-weight: 850;
  font-size: 13px;
  line-height: 1.4;
}
@media (max-width: 980px){
  .stats-grid{ grid-template-columns: repeat(2, 1fr); }
}

/* Callout */
.callout{ margin-top: 18px; }
.callout-inner{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap: 14px;
}
.callout-title{ margin:0 0 6px; }
.callout-text{ margin:0; color: var(--text2); }
@media (max-width: 720px){
  .callout-inner{ flex-direction:column; align-items:flex-start; }
}

/* Timeline */
.timeline{ display:grid; gap: 12px; }
.timeline-item{
  background: rgba(255,255,255,.92);
  border: 1px solid rgba(226,232,240,.95);
  border-radius: var(--radius);
  box-shadow: 0 14px 30px rgba(2, 6, 23, .06);
  overflow:hidden;
}
.timeline-item summary{
  cursor:pointer;
  list-style:none;
  padding: 16px 18px;
  display:grid;
  gap: 4px;
}
.timeline-item summary::-webkit-details-marker{ display:none; }
.timeline-role{ font-weight: 1000; letter-spacing: -.01em; }
.timeline-org{ color: var(--text2); font-weight: 900; }
.timeline-date{ color: rgba(51,65,85,.9); font-weight: 850; font-size: 13px; }
.timeline-item[open] summary{
  background: rgba(11,92,115,.08);
  border-bottom: 1px solid rgba(11,92,115,.16);
}
.timeline-item ul{
  margin:0;
  padding: 14px 22px 18px 40px;
  color: var(--text2);
  line-height: 1.7;
  font-weight: 650;
}
.note{ margin-top: 14px; color: var(--text2); font-size: 13px; font-weight: 750; }

/* Languages */
.lang-list{ display:grid; gap: 14px; margin-top: 8px; }
.lang-top{ display:flex; justify-content:space-between; gap:12px; align-items:baseline; }
.tag{
  font-size: 12px;
  font-weight: 1000;
  color: var(--accent);
  background: rgba(11,92,115,.12);
  border: 1px solid rgba(11,92,115,.22);
  border-radius: 999px;
  padding: 6px 10px;
}
.meter{
  height: 10px;
  border-radius: 999px;
  background: rgba(2, 6, 23, .10);
  overflow:hidden;
  margin-top: 10px;
}
.meter span{
  display:block;
  height:100%;
  border-radius: 999px;
  background: linear-gradient(90deg, var(--accent2), var(--accent));
}
.subhead{ margin: 18px 0 10px; font-size: 14px; color: var(--text2); letter-spacing: .02em; font-weight: 900; }
.pair-grid{ display:flex; flex-wrap:wrap; gap: 10px; }
.pair{
  padding: 10px 12px;
  border-radius: 999px;
  background: rgba(255,255,255,.86);
  border: 1px solid rgba(226,232,240,.95);
  font-weight: 950;
  color: var(--text2);
  font-size: 13px;
}
.efset-row{
  display:flex;
  justify-content:space-between;
  padding: 10px 12px;
  border-radius: 14px;
  background: rgba(255,255,255,.86);
  border: 1px solid rgba(226,232,240,.95);
  margin: 10px 0;
}
.efset-k{ color: var(--text2); font-weight: 900; }
.efset-v{ font-weight: 1000; color: var(--accent); }
.efset-grid{
  display:grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-top: 12px;
}
.efset-card{
  padding: 12px;
  border-radius: 14px;
  border: 1px solid rgba(226,232,240,.95);
  background: rgba(255,255,255,.86);
}
.efset-card span{ display:block; color: var(--text2); font-weight: 900; font-size: 12px; }
.efset-card strong{ display:block; font-size: 18px; margin-top: 4px; }

/* Certifications */
.cert-grid{ display:grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
@media (max-width: 980px){ .cert-grid{ grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 640px){ .cert-grid{ grid-template-columns: 1fr; } }

.cert-top{ display:flex; align-items:flex-start; justify-content:space-between; gap: 12px; }
.chip{
  font-size: 12px;
  font-weight: 1000;
  color: var(--accent);
  background: rgba(11,92,115,.12);
  border: 1px solid rgba(11,92,115,.22);
  border-radius: 999px;
  padding: 6px 10px;
  white-space:nowrap;
}

.muted{ color: var(--text2); }
.meta{ color: rgba(51,65,85,.85); font-weight:950; }

/* Workflow */
.workflow{
  margin: 10px 0 0;
  padding-left: 18px;
  color: var(--text2);
  line-height:1.8;
  font-weight: 650;
}
.workflow li{ margin: 8px 0; }

/* Testimonials placeholder */
.future-testimonials{
  display:flex;
  flex-wrap:wrap;
  gap: 10px;
  margin-top: 12px;
}
.future-pill{
  padding: 10px 12px;
  border-radius: 999px;
  background: rgba(2,6,23,.04);
  border: 1px dashed rgba(51,65,85,.25);
  color: rgba(51,65,85,.85);
  font-weight: 900;
  font-size: 13px;
}

/* Contact */
.contact-card{
  display:grid;
  grid-template-columns: 1.35fr .65fr;
  gap: 14px;
  border-radius: calc(var(--radius) + 4px);
  overflow:hidden;
  border: 1px solid rgba(226,232,240,.95);
  box-shadow: var(--shadow);
  background: rgba(255,255,255,.92);
}
.contact-copy{ padding: 22px; }
.contact-copy h2{ margin: 0 0 8px; font-size: 34px; letter-spacing: -.03em; }
.contact-copy p{ margin: 0 0 16px; color: var(--text2); line-height:1.75; font-weight: 650; }
.contact-grid{
  display:grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin: 14px 0 16px;
}
.contact-item{
  padding: 12px;
  border-radius: 16px;
  background: rgba(255,255,255,.86);
  border: 1px solid rgba(226,232,240,.95);
}
.fineprint{ margin-top: 16px; font-size: 12px; color: rgba(51,65,85,.85); font-weight: 650; }

.contact-side{
  background: linear-gradient(135deg, rgba(11,92,115,.14), rgba(7,43,54,.20));
  border-left: 1px solid rgba(226,232,240,.65);
  display:flex;
  align-items:stretch;
}
.contact-side-inner{
  padding: 22px;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  width:100%;
}
.side-title{ font-weight: 1000; letter-spacing: -.02em; font-size: 16px; color: var(--accent); }
.side-sub{ margin-top: 6px; font-weight: 1000; color: rgba(7,43,54,.92); }
.side-list{ display:flex; flex-wrap:wrap; gap: 10px; margin-top: 16px; }
.side-chip{
  padding: 10px 12px;
  border-radius: 999px;
  background: rgba(255,255,255,.86);
  border: 1px solid rgba(226,232,240,.95);
  font-weight: 1000;
  color: var(--accent);
  font-size: 12px;
}
@media (max-width: 980px){
  .contact-card{ grid-template-columns: 1fr; }
  .contact-side{ border-left: 0; border-top: 1px solid rgba(226,232,240,.65); }
  .contact-grid{ grid-template-columns: 1fr; }
}

/* Footer */
.footer{
  padding: 28px 0 18px;
  border-top: 1px solid rgba(226,232,240,.8);
  background: rgba(247,250,252,.95);
}
.footer-grid{
  display:grid;
  grid-template-columns: 1.2fr 1fr .8fr;
  gap: 14px;
  align-items:start;
}
.footer-title{ font-weight: 1000; letter-spacing: .10em; font-size: 12px; }
.footer-sub{ color: var(--text2); font-weight: 900; margin-top: 6px; }
.footer-sub2{ color: rgba(51,65,85,.85); font-weight: 850; margin-top: 4px; }
.footer-tags{ color: var(--text2); font-weight: 850; line-height: 1.6; }
.footer-actions{ display:flex; flex-wrap:wrap; gap: 10px; justify-content:flex-end; }
.footer-link{
  padding: 10px 12px;
  border-radius: 999px;
  border: 1px solid rgba(226,232,240,.95);
  background: rgba(255,255,255,.90);
  font-weight: 1000;
  color: var(--accent);
  text-decoration:none !important;
}
.footer-link:hover{
  box-shadow: 0 14px 30px rgba(2, 6, 23, .06);
  transform: translateY(-1px);
}
.footer-bottom{
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid rgba(226,232,240,.8);
  color: rgba(51,65,85,.85);
  font-size: 12px;
  font-weight: 650;
}
@media (max-width: 980px){
  .footer-grid{ grid-template-columns: 1fr; }
  .footer-actions{ justify-content:flex-start; }
}

/* Modal */
.modal{ position:fixed; inset:0; display:none; z-index:100; }
.modal[aria-hidden="false"]{ display:block; }
.modal-backdrop{ position:absolute; inset:0; background: rgba(2,6,23,.62); }
.modal-panel{
  position:relative;
  width:min(980px, calc(100% - 28px));
  margin: 6vh auto;
  background: rgba(255,255,255,.98);
  border-radius: 18px;
  border: 1px solid rgba(226,232,240,.95);
  box-shadow: 0 26px 70px rgba(2,6,23,.24);
  overflow:hidden;
}
.modal-head{
  display:flex;
  justify-content:space-between;
  align-items:center;
  gap: 12px;
  padding: 14px 16px;
  border-bottom: 1px solid rgba(226,232,240,.95);
  background: rgba(241,245,249,.70);
}
.modal-title{ font-weight: 1000; letter-spacing: -.01em; }
.icon-btn{
  border: 1px solid rgba(226,232,240,.95);
  background:white;
  border-radius: 12px;
  padding: 8px 10px;
  cursor:pointer;
}
.modal-body{ padding: 0; height: min(70vh, 720px); background: white; }
.modal-body iframe{ width:100%; height:100%; border:0; }
.modal-body .img-wrap{
  height:100%;
  display:flex;
  align-items:center;
  justify-content:center;
  padding: 10px;
}
.modal-body img{
  max-height: 100%;
  width:auto;
  border-radius: 12px;
  border: 1px solid rgba(226,232,240,.95);
}

/* Subtle reveal animation */
.reveal{
  opacity: 0;
  transform: translateY(10px);
  transition: opacity .45s ease, transform .45s ease;
}
.reveal.is-visible{
  opacity: 1;
  transform: translateY(0);
}
