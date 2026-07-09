export default {
    async fetch(request) {
        const url = new URL(request.url);
        const path = url.pathname.toLowerCase().replace(/\/$/, "");

        // ============================================
        // REDIRECT CONFIGURATION
        // Edit URLs here when usernames change.
        // No need to update links anywhere else.
        // ============================================
        const redirects = {
            // Home page (Linktree)
            "":          "https://linktr.ee/mreza_rezaei",

            // ------------------------------------------
            // Profile & Resume
            // ------------------------------------------
            "/me":       "https://mrezaei.carrd.co",
            "/bio":      "https://mrezaei.carrd.co",
            "/carrd":    "https://mrezaei.carrd.co",
            "/cv":       "https://docs.google.com/document/d/1qcympA-Sd46dEl01L2bKfYl7a7raI9-anosdQvK3lWk/edit?tab=t.3lk1ukcllr8a#heading=h.v15sl87w4bmh",
            "/resume":   "https://docs.google.com/document/d/1qcympA-Sd46dEl01L2bKfYl7a7raI9-anosdQvK3lWk/edit?tab=t.3lk1ukcllr8a#heading=h.v15sl87w4bmh",
            "/cv-fa":    "https://docs.google.com/document/d/1qcympA-Sd46dEl01L2bKfYl7a7raI9-anosdQvK3lWk/edit?tab=t.0#heading=h.v15sl87w4bmh",
            "/resume-fa":   "https://docs.google.com/document/d/1qcympA-Sd46dEl01L2bKfYl7a7raI9-anosdQvK3lWk/edit?tab=t.0#heading=h.v15sl87w4bmh",

            // ------------------------------------------
            // Portfolio & Work
            // ------------------------------------------
            "/web":      "https://my-portfolio-nextjs-3le.pages.dev/",
            "/port":     "https://my-portfolio-nextjs-3le.pages.dev/",
            "/site":     "https://my-portfolio-nextjs-3le.pages.dev/",
            "/work":     "https://nshn.ir/03_bv1AxYxuPcT",
            "/office":   "https://nshn.ir/03_bv1AxYxuPcT",
            "/lt":       "https://linktr.ee/mreza_rezaei",
            "/linktree": "https://linktr.ee/mreza_rezaei",

            // ------------------------------------------
            // Developer Profiles
            // ------------------------------------------
            "/gh":       "https://github.com/mohamadreza-rezaei",
            "/git":      "https://github.com/mohamadreza-rezaei",
            "/github":   "https://github.com/mohamadreza-rezaei",
            "/gl":       "https://hamgit.ir/mohamadreza_rezaei",
            "/hamgit":   "https://hamgit.ir/mohamadreza_rezaei",
            "/gitlab":   "https://hamgit.ir/mohamadreza_rezaei",
            "/li":       "https://www.linkedin.com/in/mreza-rezaei/",
            "/linkedin": "https://www.linkedin.com/in/mreza-rezaei/",
            "/wk":       "https://wakatime.com/@mreza_rezaei",
            "/waka":     "https://wakatime.com/@mreza_rezaei",
            "/wakatime": "https://wakatime.com/@mreza_rezaei",
            "/lm":       "https://laramap.dev/developer/019a79e4-9cf1-72ef-8541-14eac81d2b8f",
            "/laramap":  "https://laramap.dev/developer/019a79e4-9cf1-72ef-8541-14eac81d2b8f",
            "/wd":       "https://wonderful.dev/mohamadreza-rezaei",
            "/wonderful": "https://wonderful.dev/mohamadreza-rezaei",
            "/cur":      "https://cursor.com/@mrezaei",
            "/cursor":   "https://cursor.com/@mrezaei",

            // ------------------------------------------
            // Social Media (Active)
            // ------------------------------------------
            "/in":       "https://instagram.com/mreza__rezaei",
            "/ig":       "https://instagram.com/mreza__rezaei",
            "/instagram": "https://instagram.com/mreza__rezaei",
            "/yt":       "https://youtube.com/@mohamadreza_rezaei",
            "/youtube":  "https://youtube.com/@mohamadreza_rezaei",
            "/sc":       "https://soundcloud.com/mreza_rezaei",
            "/soundcloud": "https://soundcloud.com/mreza_rezaei",
            "/sound":    "https://soundcloud.com/mreza_rezaei",

            // ------------------------------------------
            // Social Media (Inactive but kept for future)
            // ------------------------------------------
            "/x":        "https://x.com/mreze_rezaei",
            "/tw":       "https://x.com/mreze_rezaei",
            "/twitter":  "https://x.com/mreze_rezaei",
            "/tg":       "https://t.me/mreza_rezaei",
            "/telegram": "https://t.me/mreza_rezaei",
            "/tk":       "https://www.tiktok.com/@mreza_rezaei",
            "/tiktok":   "https://www.tiktok.com/@mreza_rezaei",
            "/dc":       "https://discord.com/invite/b9YRxPv2F",
            "/discord":  "https://discord.com/invite/b9YRxPv2F",
            "/tv":       "https://www.twitch.tv/mreza_rezaei",
            "/twitch":   "https://www.twitch.tv/mreza_rezaei",
            "/pt":       "https://www.pinterest.com/mreza_rezaei",
            "/pinterest": "https://www.pinterest.com/mreza_rezaei",
            "/bale":     "https://t.me/mreza_rezaei",
            "/ble":      "https://t.me/mreza_rezaei",

            // ------------------------------------------
            // Gaming Profiles
            // ------------------------------------------
            "/play":     "https://my.play/Moham7dreza",
            "/pl":       "https://my.play/Moham7dreza",
            "/st":       "https://steamcommunity.com/id/mreza-rezaei",
            "/steam":    "https://steamcommunity.com/id/mreza-rezaei",
            "/cr":       "https://link.clashroyale.com/invite/friend/en?tag=9CVGPV&token=m9s87yzk&platform=android&m=0",
            "/clash":    "https://link.clashroyale.com/invite/friend/en?tag=9CVGPV&token=m9s87yzk&platform=android&m=0",
            "/royale":   "https://link.clashroyale.com/invite/friend/en?tag=9CVGPV&token=m9s87yzk&platform=android&m=0",
            "/coc":      "https://link.clashofclans.com/en?action=OpenPlayerProfile&tag=R2G88L9L",
            "/clans":    "https://link.clashofclans.com/en?action=OpenPlayerProfile&tag=R2G88L9L",

            // ------------------------------------------
            // Music & Video
            // ------------------------------------------
            "/music":    "https://soundcloud.com/young-helic/bob-ross",
            "/bobross":  "https://soundcloud.com/young-helic/bob-ross",
            "/vid":      "https://youtu.be/nlBRf1f6HCo?si=k4GaUaGY6JBDL2M-",
            "/video":    "https://youtu.be/nlBRf1f6HCo?si=k4GaUaGY6JBDL2M-",
            "/bike":     "https://youtu.be/nlBRf1f6HCo?si=k4GaUaGY6JBDL2M-",
        };

        const destination = redirects[path] || redirects[""];

        return Response.redirect(destination, 301);
    },
};