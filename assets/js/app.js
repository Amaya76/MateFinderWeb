/* ══════════════════════════════════════════════════════════
   MateFinder — landing page
   ══════════════════════════════════════════════════════════ */

/* ─────────────────────────────────────────────────────────
   1. CONFIG — the only block you need to edit
   ───────────────────────────────────────────────────────── */
const CONFIG = {
  // Bot invite link (Discord Developer Portal → OAuth2 URL Generator).
  // permissions=52224 → Send Messages, Embed Links, Attach Files, Read History.
  botInvite:
    "https://discord.com/oauth2/authorize?client_id=1546110402742714468&permissions=52224&integration_type=0&scope=bot+applications.commands",

  // Community server
  discordInvite: "https://discord.gg/9gPPrEaAu",
};

/* ─────────────────────────────────────────────────────────
   2. Translations
   ───────────────────────────────────────────────────────── */
const I18N = {
  en: {
    "meta.title": "MateFinder — Build your Mythic+ group on Discord",
    "meta.desc":
      "MateFinder turns your Discord server into a Mythic+ hub: post your keystone, fill your roster and get group alerts right in your channels.",
    skip: "Skip to content",

    "nav.features": "Features",
    "nav.install": "Install",

    "cta.add": "Add to Discord",
    "cta.community": "Join the community",

    "hero.badge": "Free · Runs entirely inside Discord",
    "hero.title": "Build your Mythic+ group",
    "hero.titleAccent": "in seconds.",
    "hero.sub":
      "MateFinder turns your Discord server into a keystone hub — post your key, fill your roster, and get group alerts right in your channels.",

    "stat.1.k": "Setup time",
    "stat.1.v": "< 30 s",
    "stat.2.k": "Config files",
    "stat.2.v": "None",
    "stat.3.k": "Price",
    "stat.3.v": "Free",

    "features.title": "Everything your keys need",
    "features.sub":
      "No dashboard, no spreadsheet, no third-party site. Just your Discord, done right.",
    "feat.1.t": "Post your keystone",
    "feat.1.d":
      "Share your dungeon, key level and the roles you still need in one click — instead of a wall of copy-pasted messages.",
    "feat.2.t": "Alerts in your channels",
    "feat.2.d":
      "Your roster fills up in real time and MateFinder posts the updates right where your members already are.",
    "feat.3.t": "Zero setup",
    "feat.3.d":
      "Invite the bot and launch it straight from the message bar. Nothing to host, nothing to configure.",

    "install.kicker": "Installation guide",
    "install.title": "⚔️ Install MateFinder on your Discord server",
    "install.lead":
      "Add the bot directly to your server to organize your Mythic+ keys and receive group alerts in your channels.",
    "install.linkTitle": "🔗 Direct invite link",
    "install.linkCta": "Add MateFinder to my server",
    "install.howTitle": "⚙️ How to install it",
    "install.s1": "Click the invite link above.",
    "install.s2":
      'In the <b class="text-white">Add to server</b> dropdown, choose the Discord server you want to install it on.',
    "install.s3":
      'Click <b class="text-white">Continue</b>, leave the permissions checked, then click <b class="text-white">Authorize</b>.',
    "install.useTitle": "🚀 How to use it afterwards",
    "install.u1": "Open any channel on your server.",
    "install.u2":
      'Click the <b class="text-white">Apps</b> icon on the far right of the message bar (the geometric shapes).',
    "install.u3":
      'Select <b class="text-white">MateFinder</b> to launch the app and build your group.',

    "community.title": "Join the MateFinder community",
    "community.sub":
      "Find groups, share your feedback and follow every update on our Discord server.",

    "footer.legal":
      "Not affiliated with or endorsed by Blizzard Entertainment. World of Warcraft is a trademark of Blizzard Entertainment, Inc.",
  },

  fr: {
    "meta.title": "MateFinder — Monte ton groupe Mythique+ sur Discord",
    "meta.desc":
      "MateFinder transforme ton serveur Discord en QG Mythique+ : publie ta clé, complète ton groupe et reçois les alertes directement dans tes salons.",
    skip: "Aller au contenu",

    "nav.features": "Fonctionnalités",
    "nav.install": "Installation",

    "cta.add": "Ajouter à Discord",
    "cta.community": "Rejoindre la communauté",

    "hero.badge": "Gratuit · 100 % intégré à Discord",
    "hero.title": "Monte ton groupe Mythique+",
    "hero.titleAccent": "en quelques secondes.",
    "hero.sub":
      "MateFinder transforme ton serveur Discord en QG à clés — publie ta clé, complète ton groupe et reçois les alertes directement dans tes salons.",

    "stat.1.k": "Installation",
    "stat.1.v": "< 30 s",
    "stat.2.k": "Configuration",
    "stat.2.v": "Aucune",
    "stat.3.k": "Prix",
    "stat.3.v": "Gratuit",

    "features.title": "Tout ce qu’il faut à tes clés",
    "features.sub":
      "Pas de tableau de bord, pas de tableur, pas de site tiers. Juste ton Discord, bien organisé.",
    "feat.1.t": "Publie ta clé",
    "feat.1.d":
      "Partage ton donjon, ton niveau de clé et les rôles qu’il te manque en un clic — au lieu d’un mur de messages copiés-collés.",
    "feat.2.t": "Alertes dans tes salons",
    "feat.2.d":
      "Ton groupe se remplit en temps réel et MateFinder publie les mises à jour là où tes membres sont déjà.",
    "feat.3.t": "Zéro configuration",
    "feat.3.d":
      "Invite le bot et lance-le depuis la barre de saisie. Rien à héberger, rien à paramétrer.",

    "install.kicker": "Guide d’installation",
    "install.title": "⚔️ Installer MateFinder sur ton serveur Discord",
    "install.lead":
      "Ajoute le bot directement sur ton serveur pour organiser tes clés Mythique+ et recevoir les alertes de groupe dans vos salons.",
    "install.linkTitle": "🔗 Lien d’invitation direct",
    "install.linkCta": "Ajouter MateFinder à mon serveur",
    "install.howTitle": "⚙️ Comment l’installer ?",
    "install.s1": "Clique sur le lien d’invitation ci-dessus.",
    "install.s2":
      'Dans le menu déroulant <b class="text-white">Ajouter au serveur</b>, choisis le serveur Discord où tu souhaites l’installer.',
    "install.s3":
      'Clique sur <b class="text-white">Continuer</b>, laisse les permissions cochées, puis clique sur <b class="text-white">Autoriser</b>.',
    "install.useTitle": "🚀 Comment l’utiliser ensuite ?",
    "install.u1": "Ouvre n’importe quel salon sur ton serveur.",
    "install.u2":
      'Clique sur l’icône <b class="text-white">Applications</b> tout à droite de la barre de saisie (les formes géométriques).',
    "install.u3":
      'Sélectionne <b class="text-white">MateFinder</b> pour lancer l’app et monter ton groupe.',

    "community.title": "Rejoins la communauté MateFinder",
    "community.sub":
      "Trouve des groupes, partage tes retours et suis toutes les nouveautés sur notre serveur Discord.",

    "footer.legal":
      "Site non affilié à Blizzard Entertainment. World of Warcraft est une marque de Blizzard Entertainment, Inc.",
  },
};

/* ─────────────────────────────────────────────────────────
   3. Language handling
   ───────────────────────────────────────────────────────── */
const STORAGE_KEY = "mf-lang";
let currentLang = "en";

function detectLang() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && I18N[saved]) return saved;
  } catch (_) {
    /* private mode / blocked storage */
  }
  const langs = navigator.languages || [navigator.language || "en"];
  return langs.some((l) => String(l).toLowerCase().startsWith("fr")) ? "fr" : "en";
}

function t(key) {
  return (I18N[currentLang] && I18N[currentLang][key]) ?? I18N.en[key] ?? key;
}

function applyLang(lang) {
  currentLang = I18N[lang] ? lang : "en";
  document.documentElement.lang = currentLang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    el.innerHTML = t(el.dataset.i18nHtml);
  });
  document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
    el.setAttribute("placeholder", t(el.dataset.i18nPh));
  });

  document.title = t("meta.title");
  const desc = document.querySelector('meta[name="description"]');
  if (desc) desc.setAttribute("content", t("meta.desc"));

  document.querySelectorAll("[data-lang]").forEach((btn) => {
    const on = btn.dataset.lang === currentLang;
    btn.classList.toggle("is-active", on);
    btn.setAttribute("aria-pressed", String(on));
  });

  try {
    localStorage.setItem(STORAGE_KEY, currentLang);
  } catch (_) {
    /* ignore */
  }
}

/* ─────────────────────────────────────────────────────────
   4. Links
   ───────────────────────────────────────────────────────── */
function applyLinks() {
  const map = {
    invite: CONFIG.botInvite,
    discord: CONFIG.discordInvite,
  };
  document.querySelectorAll("[data-link]").forEach((el) => {
    const href = map[el.dataset.link];
    if (!href) return;
    el.href = href;
    if (href.startsWith("http")) {
      el.target = "_blank";
      el.rel = "noopener noreferrer";
    }
  });
}

/* ─────────────────────────────────────────────────────────
   5. Boot
   ───────────────────────────────────────────────────────── */
(function init() {
  applyLinks();
  applyLang(detectLang());

  document.querySelectorAll("[data-lang]").forEach((btn) => {
    btn.addEventListener("click", () => applyLang(btn.dataset.lang));
  });

  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
})();
