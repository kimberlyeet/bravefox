//enable browser to read userChrome.css
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

//restore session
user_pref("browser.startup.page", 3);
user_pref("browser.sessionstore.warnOnQuit", true);
user_pref("browser.sessionstore.interval, 600000");

//Full screen fade faster:
user_pref("full-screen-api.transition-duration.enter", 50 50);
user_pref("full-screen-api.transition-duration.leave", 50 50);

//required for acrylic gaussian blur
user_pref("layout.css.backdrop-filter.enabled", true);

//backspace button to go to previous page:
user_pref("browser.backspace_action", 0);

//compact mode option visible
user_pref("browser.compactmode.show", true);

//density compact
user_pref("browser.uidensity", 0);

//theme
user_pref("browser.theme.toolbar-theme", 0);
user_pref("extensions.activeThemeID", "firefox-compact-dark@mozilla.org");
user_pref("devtools.theme", "dark");
user_pref("image.avif.enabled", true);

//pocket disabled
user_pref("extensions.pocket.enabled", false);

//newtab shortcuts
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.highlights", false);
user_pref("browser.newtabpage.activity-stream.feeds.snippets", false);

//search in urlbar
user_pref("browser.search.widget.inNavBar", false);

//ctrltab cycles through recently used tabs first
user_pref("browser.ctrlTab.sortByRecentlyUsed", false);

//remove about:config open warning
user_pref("browser.aboutConfig.showWarning", false);

//security padlock icon switch to green color icon
user_pref("security.secure_connection_icon_color_gray", true);

//play DRM content
user_pref("media.eme.enabled", true);

//browser privacy
user_pref("browser.contentblocking.category", "custom");
user_pref("network.cookie.cookieBehavior", 5);
user_pref("privacy.trackingprotection.enabled", true);
user_pref("privacy.trackingprotection.socialtracking.enabled", true);
user_pref("privacy.trackingprotection.cryptomining.enabled", true);
user_pref("privacy.trackingprotection.fingerprinting.enabled", true);
user_pref("privacy.donottrackheader.enabled", true);
user_pref("signon.rememberSignons", false);
user_pref("dom.disable_open_during_load", true);
user_pref("xpinstall.whitelist.required", true);
user_pref("browser.safebrowsing.malware.enabled", true);
user_pref("browser.safebrowsing.phishing.enabled", true);
user_pref("dom.security.https_only_mode", false);
user_pref("network.IDN_show_punycode", true);

//adressbar suggestions
user_pref("browser.urlbar.suggest.history", false);
user_pref("browser.urlbar.suggest.openpage", false);
user_pref("browser.urlbar.suggest.topsites", false);

//analytics
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("browser.discovery.enabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);

//always show bookmarks
user_pref("browser.toolbars.bookmarks.visibility", "always");

//urlbarcustonmization
user_pref("browser.uiCustomization.state", "{{"placements":{"widget-overflow-fixed-list":[],"nav-bar":["back-button","forward-button","stop-reload-button","urlbar-container","save-to-pocket-button","library-button","downloads-button","ublock0_raymondhill_net-browser-action","addon_darkreader_org-browser-action"],"toolbar-menubar":["menubar-items"],"TabsToolbar":["tabbrowser-tabs","new-tab-button","alltabs-button"],"PersonalToolbar":["personal-bookmarks"]},"seen":["addon_darkreader_org-browser-action","jid1-bofifl9vbdl2zq_jetpack-browser-action","sponsorblocker_ajay_app-browser-action","ublock0_raymondhill_net-browser-action","_74145f27-f039-47ce-a470-a662b129930a_-browser-action","developer-button","_b7f9d2cd-d772-4302-8c3f-eb941af36f76_-browser-action","amptra_keepa_com-browser-action","_e6fc2bbd-183e-4518-9ea5-04a8a913ab00_-browser-action"],"dirtyAreaCache":["nav-bar","toolbar-menubar","TabsToolbar","PersonalToolbar"],"currentVersion":17,"newElementCount":12}");

//bugfix
user_pref("browser.tabs.drawInTitlebar", true);
