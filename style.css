/*
  ABOUT THIS FILE
  This is style.css. It is written in CSS (Cascading Style Sheets), the
  language that controls how a web page LOOKS: colors, fonts, sizes, spacing,
  and layout. index.html controls WHAT is on the page; this file controls how
  it is dressed up.

  CSS is built from "rules". Each rule has two parts:
    - A selector: says WHICH elements to style. For example, "body" picks the
      <body> element, and ".spot" (with a dot) picks every element that has
      class="spot" in the HTML.
    - Declarations inside curly braces { }: each one is a "property: value;"
      pair, such as "color: white;". The property is what you are changing
      and the value is what you are changing it to.
*/

/* COLOR PALETTE
   ":root" means the whole page. Names that start with two dashes, like
   --navy, are CSS variables: a color or value saved under a name so we can
   reuse it everywhere with var(--navy). If we ever want a different shade of
   navy, we change it once here instead of in dozens of places.
   Colors are written as hex codes (like #082b45, a mix of red, green, and
   blue) or as rgba(), where the last number is how see-through the color is. */
:root {
  --navy: #082b45;
  --deep: #061e32;
  --blue: #0d6686;
  --aqua: #72d5d2;
  --foam: #e9f7f5;
  --sand: #f4e6c9;
  --ink: #10354a;
  --muted: #587483;
  --card: rgba(255,255,255,.94);
  /* A "shadow" is a soft dark glow around a box that makes it look lifted
     off the page. */
  --shadow: 0 18px 50px rgba(3, 28, 45, .16);
}

/* BASIC RESET
   "*" means every element. "box-sizing: border-box" makes an element's width
   include its padding (space inside its edge) and border, which makes sizes
   much easier to predict. */
* { box-sizing: border-box; }

/* Makes clicking an in-page link (like "Check the breaks") glide smoothly to
   the target instead of jumping. */
html { scroll-behavior: smooth; }

/* PAGE-WIDE STYLES for the <body>: text color, font, and the background. */
body {
  margin: 0;
  color: var(--ink);
  /* A "font stack": the browser uses the first font it has, and falls back
     to the next one if not. */
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  /* A "gradient" is a smooth blend between colors. The page background is a
     soft aqua glow on top of a top-to-bottom blend from light blue to sand. */
  background:
    radial-gradient(ellipse at 15% 5%, rgba(114,213,210,.25), transparent 32rem),
    linear-gradient(180deg, #dff5f2 0%, #f5fbf8 44%, #f4e6c9 100%);
}

/* Links ("a" elements) take on the color of the text around them instead of
   the default blue. */
a { color: inherit; }

/* TOP BAR (the navigation at the very top)
   "display: flex" turns on "flexbox", a layout tool that arranges an
   element's children in a row. justify-content: space-between pushes the site
   name to the left and the link to the right. "gap" is the space between
   children. "margin: auto" with a max-width centers the bar on wide screens. */
.topbar {
  display:flex; justify-content:space-between; align-items:center; gap:16px;
  max-width:1180px; margin:auto; padding:18px 24px;
  color:white; position:relative; z-index:2;
}
.brand { font-weight:950; letter-spacing:.12em; font-size:.95rem; }
.topbar a { text-decoration:none; font-size:.85rem; font-weight:750; opacity:.9; }

/* HERO BANNER (the big photo at the top)
   The background stacks a dark blue gradient on top of a photo, so the white
   text stays readable. "url(...)" loads the photo from the internet.
   "cover" scales it to fill the box. The negative margin-top slides the
   banner up behind the top bar. */
.hero {
  min-height:390px; color:white; overflow:hidden; position:relative;
  background:
    linear-gradient(100deg, rgba(4,30,49,.88), rgba(5,65,88,.53)),
    url("https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=2000&q=85") center 48%/cover;
  margin-top:-62px; padding:105px 24px 78px;
}
/* ":after" creates an extra decorative element drawn after the banner's
   content (no HTML needed). Here it is a curved, tilted wave shape at the
   bottom that blends the photo into the page. */
.hero:after {
  content:""; position:absolute; inset:auto -5% -90px -5%; height:150px;
  background:#dff5f2; border-radius:50% 50% 0 0 / 35% 35% 0 0;
  transform:rotate(-2deg);
}
.hero-inner { max-width:1120px; margin:auto; position:relative; z-index:1; }
/* The small all-caps label above headings. */
.eyebrow { text-transform:uppercase; letter-spacing:.2em; font-size:.72rem; font-weight:850; color:var(--aqua); }
/* clamp(min, preferred, max) lets the headline grow and shrink with the
   screen width, but never get smaller or bigger than the limits. */
h1 { font-size:clamp(2.7rem, 8vw, 5.7rem); line-height:.92; letter-spacing:-.065em; margin:18px 0; max-width:800px; }
.hero p { max-width:550px; color:#e0f4f2; font-size:1.05rem; line-height:1.65; }
/* The "FIND A GOOD ONE" link, styled like a rounded button
   (border-radius: 999px makes the ends fully round). */
.hero-cta {
  display:inline-flex; margin-top:16px; padding:13px 19px; border-radius:999px;
  background:var(--aqua); color:var(--deep); font-weight:900; text-decoration:none;
  box-shadow:0 8px 25px rgba(0,0,0,.18);
}

/* MAIN CONTENT AREA: centered, with a maximum width so lines do not get too
   long on big monitors. */
main { max-width:1180px; margin:-5px auto 0; padding:18px 24px 70px; position:relative; z-index:1; }

/* SECTION HEADING ("Pick your spot.") with a note on the right. */
.section-head { display:flex; justify-content:space-between; align-items:end; gap:20px; margin:12px 0 22px; }
.section-head h2 { margin:0; font-size:clamp(1.8rem,4vw,2.5rem); letter-spacing:-.045em; color:var(--navy); }
.section-head p { margin:6px 0 0; color:var(--muted); }
.updated-note { font-size:.78rem; color:var(--muted); white-space:nowrap; }

/* THE GRID OF CARDS
   "display: grid" is another layout tool, for arranging items in rows AND
   columns. repeat(2, ...) makes two equal columns; each "minmax(0,1fr)" column
   takes an equal share of the available space (1fr = one fraction). */
.grid { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:18px; }

/* A SINGLE SURF-SPOT CARD: white box, rounded corners (border-radius),
   a faint border, and the shadow from our palette. "overflow: hidden" clips
   anything that sticks out past the rounded corners. */
.spot {
  background:var(--card); border:1px solid rgba(8,43,69,.08); border-radius:22px;
  overflow:hidden; box-shadow:var(--shadow); min-width:0;
}
/* The card's header strip with the name on the left and the tag and star on
   the right. */
.spot-top {
  padding:19px 21px 15px; display:flex; justify-content:space-between; align-items:center; gap:12px;
  background:linear-gradient(115deg,#f5fffc,#e7f6f5);
}
.spot h3 { margin:0; font-size:1.18rem; letter-spacing:-.025em; color:var(--navy); }
.area { color:var(--muted); font-size:.78rem; margin-top:4px; }
/* The little rounded label like "JETTY CHECK" (a "pill" shape). */
.tag { border-radius:99px; padding:7px 10px; background:#d8eeeb; color:#14576a; font-size:.68rem; font-weight:900; letter-spacing:.08em; white-space:nowrap; }

/* WIDGET AREA: the part of a card that holds the forecast. */
.widget-area { padding:16px 18px 18px; min-height:150px; }
/* A placeholder box with a dashed border, for a spot waiting for its
   forecast. */
.widget-placeholder {
  min-height:116px; border:1.5px dashed #9fcac7; border-radius:14px; padding:18px;
  display:flex; flex-direction:column; justify-content:center; align-items:flex-start; gap:7px;
  background:#f8fdfb;
}
.widget-placeholder strong { color:var(--navy); }
.widget-placeholder span { color:var(--muted); font-size:.84rem; line-height:1.45; }
.widget-placeholder a { color:#08708b; font-size:.84rem; font-weight:800; }
/* The forecast window (an "iframe", a page embedded inside our page) fills
   the width of its card and has no border. */
.widget-area iframe { display:block; width:100%; max-width:100%; border:0; border-radius:12px; background:#fff; }
/* The small credit/link line under each forecast. */
.credit { margin:9px 2px 0; color:var(--muted); font-size:.76rem; line-height:1.4; }
.credit a { color:#08708b; font-weight:800; }

/* INFO BOX at the bottom ("Forecasts, straight from the source."): a dark
   blue panel with light text. */
.howto {
  margin-top:30px; padding:25px; border-radius:22px; color:#eaf8f5;
  background:linear-gradient(135deg,var(--navy),#0b5870); box-shadow:var(--shadow);
}
.howto h2 { margin:0 0 9px; font-size:1.55rem; }
.howto p { color:#c5e6e3; line-height:1.6; margin:8px 0; }
.howto a { color:#8ce5dc; font-weight:800; }
/* ".steps" and ".step" style three-column step boxes. The current HTML
   page does not use them, so they have no effect right now, but they are
   ready if steps are added later. */
.steps { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:15px; margin-top:18px; }
.step { background:rgba(255,255,255,.09); border:1px solid rgba(255,255,255,.13); padding:15px; border-radius:15px; }
.step b { display:block; color:var(--aqua); margin-bottom:7px; }

/* FOOTER at the very bottom of the page. */
footer { text-align:center; padding:22px 20px 35px; color:#55717e; font-size:.82rem; }
footer a { color:#0b6b83; font-weight:750; }

/* Favorite spots (saved with localStorage)
   These rules style the star buttons and the highlighted "favorite" cards.
   localStorage is a small storage area inside your web browser that lets a
   page remember things between visits; script.js uses it to remember which
   spots you starred. */
/* Holds the tag and the star button side by side. */
.spot-actions { display:flex; align-items:center; gap:8px; }
/* The round star button. "border-radius: 50%" makes a square into a circle,
   and "cursor: pointer" turns the mouse into a pointing hand on hover. */
.fav-btn {
  width:34px; height:34px; padding:0; border:0; border-radius:50%;
  background:#d8eeeb; color:#14576a; font-size:1.15rem; line-height:1; cursor:pointer;
}
/* ":hover" applies only while the mouse is over the element. */
.fav-btn:hover { background:#c5e6e3; }
/* ":focus-visible" applies when someone navigates with the keyboard (Tab
   key) and lands on the button. The outline shows where they are. */
.fav-btn:focus-visible { outline:2px solid var(--blue); outline-offset:2px; }
/* The square brackets select by attribute: this matches a star button whose
   aria-pressed attribute is "true", meaning it has been favorited. So a
   favorited star turns aqua. */
.fav-btn[aria-pressed="true"] { background:var(--aqua); color:var(--deep); }
/* ".spot.is-favorite" (no space) means an element that has BOTH classes.
   script.js adds "is-favorite" to a card when you star it, which gives the
   card an aqua outline. */
.spot.is-favorite { border-color:var(--aqua); box-shadow:0 0 0 2px var(--aqua), var(--shadow); }
.fav-status { font-size:.85rem; }

/* RESPONSIVE LAYOUT FOR PHONES
   "@media" is a media query: rules inside it only apply when a condition is
   true. Here, the condition is "the screen is 760 pixels wide or narrower"
   (roughly a phone). The changes: one column of cards instead of two, stacked
   headings, one column of steps, and slightly smaller spacing. This
   adapting-to-screen-size approach is called "responsive design". */
@media (max-width:760px) {
  .grid { grid-template-columns:1fr; }
  .section-head { align-items:flex-start; flex-direction:column; }
  .updated-note { white-space:normal; }
  .steps { grid-template-columns:1fr; }
  .hero { min-height:370px; }
  main { padding-left:16px; padding-right:16px; }
  .topbar { padding-left:18px; padding-right:18px; }
}
