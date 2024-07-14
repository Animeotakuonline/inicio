const searchInput = document.getElementById('searchInput');
        const searchResults = document.getElementById('searchResults');
        // Simulated search results (replace with actual data) *son los que ya estan con todo y capitulos
        const simulatedResults = [
            { title: 'Kimetsu no Yaiba: Hashira Geiko-hen', url: '../src/paginas/todos-los-animes/2024/informacion/Kimetsu-no-Yaiba-Hashira-Geiko-Hen.html'},//(127)
            { title: '*Boku no Hero Academia 7th Season', url: '../src/paginas/todos-los-animes/2024/informacion/Boku-no-Hero-Academia-7th-Season.html'},//(126)
            { title: 'Jantama Kan!!', url: '../src/paginas/todos-los-animes/2024/informacion/Jantama-Kan!!.html' },//X (125)
            { title: 'grimm kumikyoku', url: '../src/paginas/todos-los-animes/2024/informacion/Grim- Kumikyoku.html'},//(124))
            { title: 'Kaijuu 8-gou', url: '../src/paginas/todos-los-animes/2024/informacion/Kaijuu-8-Gou.html'},//(123)
            { title: 'Sasayaku You ni Koi wo Utau', url: '../src/paginas/todos-los-animes/2024/informacion/sasayaku-you-ni-koi-wo-utau.html' },//(122)
            { title: 'Kuroshitsuji: Kishuku Gakkou-hen', url: '../src/paginas/todos-los-animes/2024/informacion/Kuroshitsuji-Kishuku-Gakkou-Hen.html'},//(121)
            { title: 'The New Gate', url: '../src/paginas/todos-los-animes/2024/informacion/the-new-gate.html' },//(120)
            { title: 'Long Zu', url: '../src/paginas/todos-los-animes/2024/informacion/Long-Zu.html'},//(119)
            { title: 'Maou Gakuin no Futekigousha: Shijou Saikyou no Maou no Shiso, Tensei shite Shison-tachi no Gakkou e Kayou II Part 2', url: '../src/paginas/todos-los-animes/2024/informacion/Maou-Gakuin-no-Futekigousha-Shijou-Saikyou-no-Maou-no-Shiso,-Tensei-shite-Shison-tachi-no -Gakkou-e-Kayou-II-Part 2.html' },//(118)
            { title: 'The iDOLM@STER Shiny Colors', url: '../src/paginas/todos-los-animes/2024/informacion/the-idolmster-shiny-colors.html'},//(117)
            { title: 'Shadowverse Flame: Arc-hen', url: '../src/paginas/todos-los-animes/2024/informacion/shadowverse-flame-arc-hen.html' },//(116)
            { title: 'Kuramerukagari', url: '../src/paginas/todos-los-animes/2024/informacion/Kuramerukagari.html'},//(115)
            { title: 'kurayukaba', url: '../src/paginas/todos-los-animes/2024/informacion/kurayukaba.html'},//(114)
            { title: 'Kenka Dokugaku', url: '../src/paginas/todos-los-animes/2024/informacion/kenka-dokugak.html' },//(113)
            { title: 'Seiyuu Radio no Uraomote', url: '../src/paginas/todos-los-animes/2024/informacion/seiyuu-radio-no-uraomote.html'},//(112)
            { title: 'Kono Subarashii Sekai ni Shukufuku wo! 3', url: '../src/paginas/todos-los-animes/2024/informacion/kono-subarashii-sekai-ni-shukufuku-wo-3.html' },//(111)
            { title: 'Date A Live V', url: '../src/paginas/todos-los-animes/2024/informacion/Date-A-Live-V.html'},//(110)   
            { title: 'Kaii to Otome to Kamikakushi', url: '../src/paginas/todos-los-animes/2024/informacion/kaii-to-otome-to-kamikakushi.html' },//(109)
            { title: 'xuwu bianjing', url: '../src/paginas/todos-los-animes/2024/informacion/xuwu-bianjing.html'},//108)
            { title: 'Unnamed Memory', url: '../src/paginas/todos-los-animes/2024/informacion/Unnamed-Memory.html'},//(107)
            { title: 'Boukyaku Battery (TV)', url: '../src/paginas/todos-los-animes/2024/informacion/boukyaku-battery-tv.html' },//(106)
            { title: 'Rinkai!', url: '../src/paginas/todos-los-animes/2024/informacion/rinkai.html'},//(105)
            { title: 'Lv2 kara Cheat datta Motoyuusha Kouho no Mattari Isekai Life', url: '../src/paginas/todos-los-animes/2024/informacion/lv2-kara-cheat-datta-motoyuusha-kouho-no-mattari-isekai-life.html' },//(104)
            { title: 'Tadaima, Okaeri', url: '../src/paginas/todos-los-animes/2024/informacion/tadaima-okaeri.html'},//(104)
            { title: 'Shen Zhiyi Jiao', url: '../src/paginas/todos-los-animes/2024/informacion/Shen-Zhiyi Jiao.html' },//(103)
            { title: 'Mushoku Tensei II: Isekai Ittara Honki Dasu Part 2', url: '../src/paginas/todos-los-animes/2024/informacion/mushoku-tensei-ii-isekai-ittara-honki-dasu-part-2.html' },//(102)
            { title: 'Hibike! Euphonium 3', url: '../src/paginas/todos-los-animes/2024/informacion/hibike-euphonium-3.html'},//(101)
            { title: 'Sentai Daishikkaku', url: '../src/paginas/todos-los-animes/2024/informacion/sentai-daishikkaku.html' },//(100)
            { title: 'Yozakura-san Chi no Daisakusen', url: '../src/paginas/todos-los-animes/2024/informacion/yozakura-san-chi-no-daisakusen.html'},//(99)
            { title: 'Jiisan Baasan Wakagaeru', url: '../src/paginas/todos-los-animes/2024/informacion/jiisan-baasan-wakagaeru.html' },//(98)
            { title: 'Shinigami Bocchan to Kuro Maid 3rd Season', url: '../src/paginas/todos-los-animes/2024/informacion/shinigami-bocchan-to-kuro-maid-3rd-season.html'},//(97)
            { title: 'Tensei Kizoku, Kantei Skill de Nariagaru', url: '../src/paginas/todos-los-animes/2024/informacion/tensei-kizoku-kantei-skill-de-nariagaru.html' },//(96)
            { title: 'Blue Archive the Animation', url: '../src/paginas/todos-los-animes/2024/informacion/blue-archive-the-animation.html'},//(95)
            { title: 'Vampire Dormitory', url: '../src/paginas/todos-los-animes/2024/informacion/vampire-dormitory.html' },//(94)
            { title: 'Tonari no Youkai-san', url: '../src/paginas/todos-los-animes/2024/informacion/tonari-no-youkai-san.html'},//(93)
            { title: 'Ooi! Tonbo', url: '../src/paginas/todos-los-animes/2024/informacion/ooi-tonbo.html' },//(92)
            { title: 'Himitsu no AiPri', url: '../src/paginas/todos-los-animes/2024/informacion/himitsu-no-aipri.html'},//(92)
            { title: 'Shinkalion: Change the World', url: '../src/paginas/todos-los-animes/2024/informacion/Shinkalion-Change-the-World.html' },//(91)
            { title: 'Yoru no Kurage wa Oyogenai', url: '../src/paginas/todos-los-animes/2024/informacion/yoru-no-kurage-wa-oyogenai.html'},//(90)
            { title: 'The Fable', url: '../src/paginas/todos-los-animes/2024/informacion/the-fable.html' },//(89)
            { title: 'vampire dormitory', url: '../src/paginas/todos-los-animes/2024/l' },//(89)
            { title: 'Highspeed Etoile', url: '../src/paginas/todos-los-animes/2024/informacion/highspeed-etoile.html'},//(88)
            { title: 'Boku no Hero Academia: Memories', url: '../src/paginas/todos-los-animes/2024/informacion/Boku-no-Hero-Academia-Memories.html' },//(87)
            { title: 'Tensei shitara Slime Datta Ken 3rd Season', url: '../src/paginas/todos-los-animes/2024/informacion/tensei-shitara-slime-datta-ken-3rd-season.html'},//(86)
            { title: 'Mahouka Koukou no Rettousei 3rd Season', url: '../src/paginas/todos-los-animes/2024/informacion/mahouka-koukou-no-rettousei-3rd-season.html' },//(85)
            { title: 'Girls Band Cry', url: '../src/paginas/todos-los-animes/2024/informacion/girls-band-cry.html'},//(84)
            { title: 'Astro Note', url: '../src/paginas/todos-los-animes/2024/informacion/astro-note.html' },//(83)
            { title: 'Henjin no Salad Bowl', url: '../src/paginas/todos-los-animes/2024/informacion/henjin-no-salad-bowl.html'},//(82)
            { title: 'Nijiyon Animation 2', url: '../src/paginas/todos-los-animes/2024/informacion/nijiyon-animation-2.html' },//(81)
            { title: 'Yuru Camp△ Season 3', url: '../src/paginas/todos-los-animes/2024/informacion/yuru-camp-season-3.html'},//(80)
            { title: 'Hananoi-kun to Koi no Yamai', url: '../src/paginas/todos-los-animes/2024/informacion/hananoi-kun-to-koi-no-yamai.html' },//(79)
            { title: 'Wind Breaker', url: '../src/paginas/todos-los-animes/2024/informacion/wind-breaker.html'},//(78)
            { title: 'Bartender: Kami no Glass', url: '../src/paginas/todos-los-animes/2024/informacion/bartender-kami-no-glass.html' },//(77)
            { title: 'Maou no Ore ga Dorei Elf wo Yome ni Shitanda ga, Dou Medereba Ii?', url: '../src/paginas/todos-los-animes/2024/informacion/maou-no-ore-ga-dorei-elf-wo-yome-ni-shitanda-ga-dou-medereba-ii.html'},//(76)
            { title: 'Touken Ranbu Kai Kyoden Moyuru Honnouji', url: '../src/paginas/todos-los-animes/2024/informacion/touken-ranbu-kai-kyoden-moyuru-honnouji.html' },//(75)
            { title: 'Ookami to Koushinryou: Merchant Meets the Wise Wolf', url: '../src/paginas/todos-los-animes/2024/informacion/ookami-to-koushinryou-merchant-meets-the-wise-wolf.html'},//(74)
            { title: 'Tensei shitara Dainana Ouji Datta node, Kimama ni Majutsu wo Kiwamemasu', url: '../src/paginas/todos-los-animes/2024/informacion/tensei-shitara-dainana-ouji-datta-node-kimama-ni-majutsu-wo-kiwamemasu.html' },//(73)
            { title: 'Kami wa Game ni Ueteiru', url: '../src/paginas/todos-los-animes/2024/informacion/kami-wa-game-ni-ueteiru.html'},//(72)
            { title: 'Re:Monster', url: '../src/paginas/todos-los-animes/2024/informacion/remonster.html'},//(71)
            { title: 'Dekisokonai to Yobareta Motoeiyuu wa Jikka kara Tsuihou sareta node Sukikatte ni Ikiru Koto ni Shita', url: '../src/paginas/todos-los-animes/2024/informacion/dekisokonai-to-yobareta-motoeiyuu-wa-jikka-kara-tsuihou-sareta-node-sukikatte-ni-ikiru-koto-ni-shita.html'},//(70)
            { title: 'Shuumatsu Train Doko e Iku?', url: '../src/paginas/todos-los-animes/2024/informacion/shuumatsu-train-doko-e-iku.html' },//(69)
            { title: 'One Room, Hiatari Futsuu, Tenshi-tsuki', url: '../src/paginas/todos-los-animes/2024/informacion/one-room-hiatari-futsuu-tenshi-tsuki.html'},//(68)
            { title: 'Sand Land: The Series', url: '../src/paginas/todos-los-animes/2024/informacion/sand-land-the-series.html' },//(67)
            { title: 'Xiao Lu He Xiao Lan 5th Season', url: '../src/paginas/todos-los-animes/2024/informacion/Xiao-Lu-He-Xiao-Lan-5th-Season.html'},//(66)
            { title: 'Hanhua Riji 4th Season', url: '../src/paginas/todos-los-animes/2024/informacion/Hanhu-Riji-4th-Season.html' },//(65)
            { title: 'Bai Jia Jue Zhi: Jianghu Gui Shi Lu', url: '../src/paginas/todos-los-animes/2024/informacion/bai-jia-jue-zhi-jianghu-gui-shi-lu.html'},//(64)
            { title: 'Bu Xing Si: Yuan Qi', url: '../src/paginas/todos-los-animes/2024/informacion/bu-xing-si-yuan-qi.html' },//(63)
            { title: 'Great Pretender: Razbliuto', url: '../src/paginas/todos-los-animes/2024/informacion/great-pretender-razbliuto.html'},//(62)
            { title: 'Yishi Zhi Zun', url: '../src/paginas/todos-los-animes/2024/informacion/yishi-zhi-zun.html' },//(61)
            { title: 'Aishang Ta de Liyou Extra', url: '../src/paginas/todos-los-animes/2024/informacion/aishang-ta-de-liyou-extra.html'},//(60)
            { title: 'Ninja Kamui', url: '../src/paginas/todos-los-animes/2024/informacion/ninja-kamui.html' },//(59)
            { title: 'Wonderful Precure!', url: '../src/paginas/todos-los-animes/2024/informacion/wonderful-precure.html'},//(58)
            { title: 'Kui Cheng Shoufu Cong Youxi Kaishi', url: '../src/paginas/todos-los-animes/2024/informacion/kui-cheng-shoufu-cong-youxi-kaishi.html' },//(57)
            { title: 'Taigu Xing Shen Jue', url: '../src/paginas/todos-los-animes/2024/informacion/taigu-xing-shen-jue.html'},//(56)
            { title: 'Yi Ren Jun Moye', url: '../src/paginas/todos-los-animes/2024/informacion/yi-ren-jun-moye.html' },//(55)
            { title: 'Sheng Zu', url: '../src/paginas/todos-los-animes/2024/informacion/sheng-zu.html'},//(54)
            { title: 'Monsters: Ippyaku Sanjou Hiryuu Jigoku', url: '../src/paginas/todos-los-animes/2024/informacion/monsters-ippyaku-sanjou-hiryuu-jigoku.html' },//(53)
            { title: 'Da Yuzhou Shidai', url: '../src/paginas/todos-los-animes/2024/informacion/da-yuzhou-shidai.html'},//(52)
            { title: 'Meiji Gekken: 1874', url: '../src/paginas/todos-los-animes/2024/informacion/meiji-gekken-1874.html' },//(51)
            { title: 'Hikari no Ou 2nd Season', url: '../src/paginas/todos-los-animes/2024/informacion/hikari-no-ou-2nd-season.html'},//(50)
            { title: 'Yami Shibai 12', url: '../src/paginas/todos-los-animes/2024/informacion/yami-shibai-12.html' },//(49)
            { title: 'Kingdom 5th Season', url: '../src/paginas/todos-los-animes/2024/informacion/kingdom-5th-season.html'},//(48)
            { title: 'Bucchigiri?!', url: '../src/paginas/todos-los-animes/2024/informacion/bucchigiri.html' },//(47)
            { title: 'Cardfight!! Vanguard: Divinez', url: '../src/paginas/todos-los-animes/2024/informacion/cardfight-vanguard-divinez.html'},//(46)
            { title: 'Wangzhe Rongyao: Rongyao Zhi Zhang', url: '../src/paginas/todos-los-animes/2024/informacion/wangzhe-rongyao-rongyao-zhi-zhang.html' },//(45)
            { title: 'Meitou "Isekai no Yu" Kaitakuki: Around 40 Onsen Mania no Tensei Saki wa, Nonbiri Onsen Tengoku deshita', url: '../src/paginas/todos-los-animes/2024/informacion/meitou-isekai-no-yu-kaitakuki-around-40-onsen-mania-no-tensei-saki-wa-nonbiri-onsen-tengoku-deshita.html'},//(44)
            { title: 'Majo to Yajuu', url: '../src/paginas/todos-los-animes/2024/informacion/majo-to-yajuu.html' },//(43)
            { title: 'Urusei Yatsura (2022) 2nd Season', url: '../src/paginas/todos-los-animes/2024/informacion/urusei-yatsura-2022-2nd-season.html'},//(42)
            { title: 'Saijaku Tamer wa Gomi Hiroi no Tabi wo Hajimemashita', url: '../src/paginas/todos-los-animes/2024/informacion/saijaku-tamer-wa-gomi-hiroi-no-tabi-wo-hajimemashita.html' },//(41)
            { title: 'Snack Basue', url: '../src/paginas/todos-los-animes/2024/informacion/snack-basue.html'},//(40)
            { title: 'Gekkan Mousou Kagaku', url: '../src/paginas/todos-los-animes/2024/informacion/gekkan-mousou-kagaku.html' },//(39)
            { title: 'Yuuki Bakuhatsu Bang Bravern', url: '../src/paginas/todos-los-animes/2024/informacion/yuuki-bakuhatsu-bang-bravern.html'},//(38)
            { title: 'Metallic Rouge', url: '../src/paginas/todos-los-animes/2024/informacion/metallic-rouge.html' },//(37)
            { title: 'Gekai Elise', url: '../src/paginas/todos-los-animes/2024/informacion/gekai-elise.html'},//(36)
            { title: 'Sengoku Youko', url: '../src/paginas/todos-los-animes/2024/informacion/sengoku-youko.html' },//(35)
            { title: '30-sai made Doutei dato Mahoutsukai ni Nareru Rashii', url: '../src/paginas/todos-los-animes/2024/informacion/30-sai-made-doutei-dato-mahoutsukai-ni-nareru-rashii.html'},//(34)
            { title: 'Synduality: Noir Part 2', url: '../src/paginas/todos-los-animes/2024/informacion/synduality-noir-part-2.html' },//(33)
            { title: 'Akuyaku Reijou Level 99: Watashi wa Ura-Boss desu ga Maou dewa Arimasen', url: '../src/paginas/todos-los-animes/2024/informacion/akuyaku-reijou-level-99-watashi-wa-ura-boss-desu-ga-maou-dewa-arimasen.html'},//(32)
            { title: 'Shaman King: Flowers', url: '../src/paginas/todos-los-animes/2024/informacion/shaman-king-flowers.html' },//(31)
            { title: 'Tsuki ga Michibiku Isekai Douchuu 2nd Season', url: '../src/paginas/todos-los-animes/2024/informacion/tsuki-ga-michibiku-isekai-douchuu-2nd-season.html'},//(30)
            { title: 'Dosanko Gal wa Namara Menkoi', url: '../src/paginas/todos-los-animes/2024/informacion/dosanko-gal-wa-namara-menkoi.html' },//(29)
            { title: 'Oroka na Tenshi wa Akuma to Odoru', url: '../src/paginas/todos-los-animes/2024/informacion/oroka-na-tenshi-wa-akuma-to-odoru.html'},//(28)
            { title: 'High Card Season 2', url: '../src/paginas/todos-los-animes/2024/informacion/high-card-season-2.html' },//(27)
            { title: 'Nozomanu Fushi no Boukensha', url: '../src/paginas/todos-los-animes/2024/informacion/nozomanu-fushi-no-boukensha.html'},//(26)
            { title: 'Himesama "Goumon" no Jikan desu', url: '../src/paginas/todos-los-animes/2024/informacion/himesama-goumon-no-jikan-desu.html' },//(25)
            { title: 'Boku no Kokoro no Yabai Yatsu Season 2', url: '../src/paginas/todos-los-animes/2024/informacion/boku-no-kokoro-no-yabai-yatsu-season-2.html'},//(24)
            { title: 'Ao no Exorcist: Shimane Illuminati-hen', url: '../src/paginas/todos-los-animes/2024/informacion/ao-no-exorcist-shimane-illuminati-hen.html' },//(23)
            { title: 'Shin no Nakama ja Nai to Yuusha no Party wo Oidasareta node, Henkyou de Slow Life suru Koto ni Shimashita 2nd', url: '../src/paginas/todos-los-animes/2024/informacion/shin-no-nakama-ja-nai-to-yuusha-no-party-wo-oidasareta-node-henkyou-de-slow-life-suru-koto-ni-shimashita-2nd.html'},//(22)
            { title: 'Loop 7-kaime no Akuyaku Reijou wa, Moto Tekikoku de Jiyuu Kimama na Hanayome Seikatsu wo Mankitsu suru', url: '../src/paginas/todos-los-animes/2024/informacion/loop-7-kaime-no-akuyaku-reijou-wa-moto-tekikoku-de-jiyuu-kimama-na-hanayome-seikatsu-wo-mankitsu-suru.html' },//(21)
            { title: 'Kyuujitsu no Warumono-san', url: '../src/paginas/todos-los-animes/2024/informacion/kyuujitsu-no-warumono-san.html'},//(20)
            { title: 'Saikyou Tank no Meikyuu Kouryaku: Tairyoku 9999 no Rare Skill-mochi Tank, Yuusha Party wo Tsuihou sareru', url: '../src/paginas/todos-los-animes/2024/informacion/saikyou-tank-no-meikyuu-kouryaku-tairyoku-9999-no-rare-skill-mochi-tank-yuusha-party-wo-tsuihou-sareru.html' },//(19)
            { title: 'Ore dake Level Up na Ken', url: '../src/paginas/todos-los-animes/2024/informacion/ore-dake-level-up-na-ken.html'},//(18)
            { title: 'Mashle 2nd Season', url: '../src/paginas/todos-los-animes/2024/informacion/mashle-2nd-season.html' },//(17)
            { title: 'Yubisaki to Renren', url: '../src/paginas/todos-los-animes/2024/informacion/yubisaki-to-renren.html'},//(16)
            { title: 'Kekkon Yubiwa Monogatari', url: '../src/paginas/todos-los-animes/2024/informacion/kekkon-yubiwa-monogatari.html' },//(15)
            { title: 'Pon no Michi', url: '../src/paginas/todos-los-animes/2024/informacion/pon-no-michi.html'},//(14)
            { title: 'Sokushi Cheat ga Saikyou sugite, Isekai no Yatsura ga Marude Aite ni Naranai n desu ga', url: '../src/paginas/todos-los-animes/2024/informacion/sokushi-cheat-ga-saikyou-sugite-isekai-no-yatsura-ga-marude-aite-ni-naranai-n-desu-ga.html' },//(13)
            { title: 'Chiyu Mahou no Machigatta Tsukaikata', url: '../src/paginas/todos-los-animes/2024/informacion/chiyu-mahou-no-machigatta-tsukaikata.html'},//(12)
            { title: 'Momochi-san Chi no Ayakashi Ouji', url: '../src/paginas/todos-los-animes/2024/informacion/momochi-san-chi-no-ayakashi-ouji.html' },//(11)
            { title: 'Sasaki to Pii-chan', url: '../src/paginas/todos-los-animes/2024/informacion/sasaki-to-pii-chan.html'},//(10)
            { title: 'Chou Futsuu Ken Chiba Densetsu', url: '../src/paginas/todos-los-animes/2024/informacion/chou-futsuu-ken-chiba-densetsu.html' },//(9)
            { title: 'Mato Seihei no Slave', url: '../src/paginas/todos-los-animes/2024/informacion/mato-seihei-no-slave.html'},//(8)
            { title: 'Dungeon Meshi', url: '../src/paginas/todos-los-animes/2024/informacion/dungeon-meshi.html' },//(7)
            { title: 'Youkoso Jitsuryoku Shijou Shugi no Kyoushitsu e 3rd Season', url: '../src/paginas/todos-los-animes/2024/informacion/youkoso-jitsuryoku-shijou-shugi-no-kyoushitsu-e-3rd-season.html'},//(6)
            { title: 'Jaku-Chara Tomozaki-kun 2nd Stage', url: '../src/paginas/todos-los-animes/2024/informacion/jaku-chara-tomozaki-kun-2nd-stage.html' },//(6)
            { title: 'Ishura', url: '../src/paginas/todos-los-animes/2024/informacion/ishura.html'},//(5)
            { title: 'Mahou Shoujo ni Akogarete', url: '../src/paginas/todos-los-animes/2024/informacion/mahou-shoujo-ni-akogarete.html' },//(4)
            { title: 'Wu Nao Monu 2nd Season', url: '../src/paginas/todos-los-animes/2024/informacion/wu-nao-monu-2nd-season.html'},//(3)
            { title: 'Isekai de Mofumofu Nadenade suru Tame ni Ganbattemasu', url: '../src/paginas/todos-los-animes/2024/informacion/isekai-de-mofumofu-nadenade-suru-tame-ni-ganbattemasu.html' },//(2)
            { title: 'Wangu Kuang Di', url: '../src/paginas/todos-los-animes/2024/informacion/wangu-kuang-di.html'},//(1) EMPIEZA 2024------------------------------------------------------------------------------------------------



            { title: 'Burn the Witch 0.8', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(278)
            { title: 'Jashin-chan Dropkick "Seikimatsu-hen"', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(277)
            { title: 'Xiao Lu He Xiao Lan 4th Season', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(276)
            { title: 'Huoxing Xi Lu 7 Hao', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(275)
            { title: 'The Daily Life of the Immortal King 4', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(274)
            { title: 'Twi-Yaba', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(273)
            { title: 'Ran Xia', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(272)
            { title: 'Bu Shi Bu Mie', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(271)
            { title: 'Shi Fang Wu Sheng', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(270)
            { title: 'Ni De Rensheng Shi Wo Lai Chi Le', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(269)
            { title: 'Qi Hou Bilu', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(268)
            { title: 'Pluto', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(267)
            { title: 'Temple Specials', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(266)
            { title: 'Kusuriya no Hitorigoto', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(265)
            { title: 'Dog Signal', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(264)
            { title: 'Zhengjing Shao Zhu de Xingfu Shenghuo', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(263)
            { title: 'Mask Danshi wa Koishitakunai noni', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(262)
            { title: 'Tian Guan Cifu Er', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(261)
            { title: 'Houkago Shounen Hanako-kun', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(260)
            { title: 'Ooyukiumi no Kaina: Hoshi no Kenja', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(259)
            { title: 'Dr. Stone: New World Part 2', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(258)
            { title: 'Good Night World', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(257)
            { title: 'Dead Mount Death Play Part 2', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(256)
            { title: 'Hoshikuzu Telepath', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(255)
            { title: 'Kawagoe Boys Sing', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(254)
            { title: 'Kimi no Koto ga Daidaidaidaidaisuki na 100-nin no Kanojo', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(253)
            { title: 'Nanatsu no Taizai: Mokushiroku no Yonkishi', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(252)
            { title: 'Tearmoon Teikoku Monogatari: Dantoudai kara Hajimaru, Hime no Tensei Gyakuten Story', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(251)
            { title: 'Kikansha no Mahou wa Tokubetsu desu', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(250)
            { title: 'Buta no Liver wa Kanetsu Shiro', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(249)
            { title: 'Bokura no Ameiro Protocol', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(248)
            { title: 'Potion-danomi de Ikinobimasu!', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(247)
            { title: 'The iDOLM@STER Million Live!', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(246)
            { title: 'Goblin Slayer II', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(245)
            { title: 'Spy x Family Season 2', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(244)
            { title: 'Saihate no Paladin: Tetsusabi no Yama no Ou', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(243)
            { title: 'Undead Unluck', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(242)
            { title: 'Kanojo mo Kanojo 2nd Season', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(241)
            { title: 'Hametsu no Oukoku', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(240)
            { title: 'Hikikomari Kyuuketsuki no Monmon', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(239)
            { title: 'Hypnosis Mic: Division Rap Battle - Rhyme Anima +', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(238)
            { title: 'Atarashii Joushi wa Do Tennen', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(237)
            { title: 'Arknights: Fuyukomori Kaerimichi', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(236)
            { title: "Kibou no Chikara: Otona Precure '23", url: '../src/paginas/todos-los-animes/2023/informacion/' },//(235)
            { title: 'Tate no Yuusha no Nariagari Season 3', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(234)
            { title: 'Keikenzumi na Kimi to, Keiken Zero na Ore ga, Otsukiai suru Hanashi.', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(233)
            { title: 'Under Ninja', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(232)
            { title: 'Boukensha ni Naritai to Miyako ni Deteitta Musume ga S-Rank ni Natteta', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(231)
            { title: 'Rail Romanesque 2', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(230)
            { title: 'Quan Zhi Ming', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(229)
            { title: 'Mahoutsukai no Yome Season 2 Part 2', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(228)
            { title: 'Kamierabi', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(227)
            { title: 'Uma Musume: Pretty Derby Season 3', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(226)
            { title: 'Yuzuki-san Chi no Yonkyoudai', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(225)
            { title: '16bit Sensation: Another Layer', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(224)
            { title: 'Kizuna no Allele Season 2', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(223)
            { title: 'Bikkurimen', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(222)
            { title: 'Kage no Jitsuryokusha ni Naritakute! 2nd Season', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(221)
            { title: 'Tokyo Revengers: Tenjiku-hen', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(220)
            { title: 'Konyaku Haki sareta Reijou wo Hirotta Ore ga, Ikenai Koto wo Oshiekomu', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(219)
            { title: 'Bullbuster', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(218)
            { title: 'Seijo no Maryoku wa Bannou desu 2nd Season', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(217)
            { title: 'Seiken Gakuin no Makentsukai', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(216)
            { title: 'Watashi no Oshi wa Akuyaku Reijou', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(215)
            { title: 'Paradox Live the Animation', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(214)
            { title: 'Shy', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(213)
            { title: 'Toaru Ossan no VRMMO Katsudouki', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(212)
            { title: 'B-Project: Netsuretsu*Love Call', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(211)
            { title: 'Kamonohashi Ron no Kindan Suiri', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(210)
            { title: 'Migi to Dali', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(209)
            { title: 'Tensei shitara Slime Datta Ken: Coleus no Yume', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(208)
            { title: 'Ragna Crimson', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(207)
            { title: 'Shangri-La Frontier: Kusoge Hunter, Kamige ni Idoman to su', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(206)
            { title: 'MF Ghost', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(205)
            { title: 'Overtake!', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(204)
            { title: 'Boushoku no Berserk', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(203)
            { title: 'Dekoboko Majo no Oyako Jijou', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(202)
            { title: 'Captain Tsubasa Season 2: Junior Youth-hen', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(201)
            { title: 'Aoshi Jiuchong Tian', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(200)
            { title: 'Megumi no Daigo: Kyuukoku no Orange', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(199)
            { title: 'Sousou no Frieren', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(198)
            { title: 'Ojou to Banken-kun', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(197)
            { title: 'Xiao Lu He Xiao Lan 3rd Season', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(196)
            { title: 'Kengan Ashura Season 2', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(195)
            { title: 'Alice to Therese no Maboroshi Koujou', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(194)
            { title: 'Gamera: Rebirth', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(193)
            { title: 'Yi Kong Zhan Ge', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(192)
            { title: 'Hibike! Euphonium: Ensemble Contest-hen', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(191)
            { title: 'Zhen Hun Jie 3rd Season', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(190)
            { title: 'zur Lane: Queens Orders', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(189)
            { title: 'Hanma Baki: Son of Ogre 2nd Season', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(188)
            { title: 'Di Yi Xulie', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(187)
            { title: 'Si Ge Yongzhe', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(186)
            { title: 'Shiguang Dailiren II', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(185)
            { title: '5-toubun no Hanayome∽', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(184)
            { title: 'Hataraku Maou-sama!! 2nd Season', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(183)
            { title: 'Shiro Seijo to Kuro Bokushi', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(182)
            { title: 'Guaishou Xiao Guan', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(181)
            { title: 'Bungou Stray Dogs 5th Season', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(180)
            { title: 'Helck', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(179)
            { title: 'Tonikaku Kawaii: Joshikou-hen', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(178)
            { title: 'Shuumatsu no Walküre II Part 2', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(177)
            { title: 'Xiao Lu He Xiao Lan 2nd Season', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(176)
            { title: 'Dark Gathering', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(175)
            { title: 'Synduality: Noir', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(174)
            { title: 'Zom 100: Zombie ni Naru made ni Shitai 100 no Koto', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(173)
            { title: 'Shinigami Bocchan to Kuro Maid 2nd Season', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(172)
            { title: 'Eiyuu Kyoushitsu', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(171)
            { title: 'Temple', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(170)
            { title: 'Yami Shibai 11', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(169)
            { title: 'Bleach: Sennen Kessen-hen - Ketsubetsu-tan', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(168)
            { title: 'Kanojo, Okarishimasu 3rd Season', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(167)
            { title: 'Liar Liar', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(166)
            { title: 'Nanatsu no Maken ga Shihai suru', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(165)
            { title: 'Level 1 dakedo Unique Skill de Saikyou desu', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(164)
            { title: 'Dekiru Neko wa Kyou mo Yuuutsu', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(163)
            { title: 'AI no Idenshi', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(162)
            { title: 'Cardfight!! Vanguard: will+Dress Season 3', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(161)
            { title: 'Shadowverse Flame: Seven Shadows-hen', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(160)
            { title: 'Sugar Apple Fairy Tale Part 2', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(159)
            { title: 'Hyakushou Kizoku', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(158)
            { title: 'Jujutsu Kaisen 2nd Season', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(157)
            { title: 'Rurouni Kenshin: Meiji Kenkaku Romantan (2023)', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(156)
            { title: 'Higeki no Genkyou to Naru Saikyou Gedou Last Boss Joou wa Tami no Tame ni Tsukushimasu', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(155)
            { title: 'Seija Musou: Salaryman, Isekai de Ikinokoru Tame ni Ayumu Michi', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(154)
            { title: 'Watashi no Shiawase na Kekkon', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(153)
            { title: 'Jidou Hanbaiki ni Umarekawatta Ore wa Meikyuu wo Samayou', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(152)
            { title: 'Undead Girl Murder Farce', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(151)
            { title: 'Suki na Ko ga Megane wo Wasureta', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(150)
            { title: 'Yumemiru Danshi wa Genjitsushugisha', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(149)
            { title: 'Okashi na Tensei', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(148)
            { title: 'Mononogatari 2nd Season', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(147)
            { title: 'Wu Nao Monu', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(146)
            { title: 'Masamune-kun no Revenge R', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(145)
            { title: 'Mushoku Tensei II: Isekai Ittara Honki Dasu', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(144)
            { title: 'Fate/strange Fake: Whispers of Dawn', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(143)
            { title: 'Ququ Bucai, Zaixia Yeguai 2nd Season', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(142)
            { title: 'Feng Ling Yu Xiu 2nd Season', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(141)
            { title: 'Horimiya: Piece', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(140)
            { title: 'Uchi no Kaisha no Chiisai Senpai no Hanashi', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(139)
            { title: 'Jitsu wa Ore, Saikyou deshita?', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(138)
            { title: 'Ryza no Atelier: Tokoyami no Joou to Himitsu no Kakurega', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(137)
            { title: 'Spy Kyoushitsu 2nd Season', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(136)
            { title: 'Ayaka', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(135)
            { title: 'Lv1 Maou to One Room Yuusha', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(134)
            { title: 'You Shou Yan 2nd Season', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(133)
            { title: "BanG Dream! It's MyGO!!!!!", url: '../src/paginas/todos-los-animes/2023/informacion/' },//(132)
            { title: 'Genjitsu no Yohane: Sunshine in the Mirror', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(131)
            { title: 'Seishun Buta Yarou wa Odekake Sister no Yume wo Minai', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(130)
            { title: 'Cang Yuan Tu', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(129)
            { title: 'Black Clover: Mahou Tei no Ken', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(128)
            { title: 'Jian Gu', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(127)
            { title: 'Bishoujo Senshi Sailor Moon Cosmos Movie', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(126)
            { title: 'Quanzhi Fashi VI', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(125)
            { title: 'Biao Ren: Blades of the Guardians', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(124)
            { title: 'Shu Tian Fu Mo Lu', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(123)
            { title: 'Tenchi Muyou! GXP: Paradise Shidou-hen', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(122)
            { title: 'IDOLiSH7 Movie: LIVE 4bit - BEYOND THE PERiOD', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(121)
            { title: 'Psycho-Pass Movie: Providence', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(120)
            { title: 'Yahari Ore no Seishun Love Comedy wa Machigatteiru. Kan: Dakara, Shishunki wa Owarazu ni, Seishun wa Tsuzuiteiku', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(119)
            { title: 'Ta Bu Dang Nuzhu Hen Duo Nian', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(118)
            { title: 'Aishang Ta de Liyou', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(117)
            { title: 'Niehime to Kemono no Ou', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(116)
            { title: 'Uma Musume: Pretty Derby - Road to the Top', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(115)
            { title: 'Ququ Bucai, Zaixia Yeguai', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(114)
            { title: 'Pokemon (Shinsaku Anime)', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(113)
            { title: 'You Shou Yan', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(112)
            { title: 'Ousama Ranking: Yuuki no Takarabako', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(111)
            { title: 'Shanhai Jihui', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(110)
            { title: 'Oshi no Ko', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(109)
            { title: 'Majutsushi Orphen Hagure Tabi: Seiiki-hen', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(108)
            { title: 'Aiyou de Mishi', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(107)
            { title: 'Edens Zero 2nd Season', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(106)
            { title: 'The Marginal Service', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(105)
            { title: 'Dianqi Shaonu', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(104)
            { title: 'Kimi wa Houkago Insomnia', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(103)
            { title: 'Kanojo ga Koushaku-tei ni Itta Riyuu', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(102)
            { title: 'Dead Mount Death Play', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(101)
            { title: 'Tousouchuu: Great Mission', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(100)
            { title: 'Kimetsu no Yaiba: Katanakaji no Sato-hen', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(99)
            { title: 'Kidou Senshi Gundam: Suisei no Majo Season 2', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(98)
            { title: 'Ao no Orchestra', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(97)
            { title: 'World Dai Star', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(96)
            { title: 'Isekai Shoukan wa Nidome desu', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(95)
            { title: 'Otonari ni Ginga', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(94)
            { title: 'Tonikaku Kawaii 2nd Season', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(93)
            { title: 'Mashle', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(92)
            { title: 'Isekai de Cheat Skill wo Te ni Shita Ore wa, Genjitsu Sekai wo mo Musou Suru: Level Up wa Jinsei wo Kaeta', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(91)
            { title: 'Isekai One Turn Kill Neesan: Ane Douhan no Isekai Seikatsu Hajimemashita', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(90)
            { title: 'Megami no Café Terrace', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(89)
            { title: "Birdie Wing: Golf Girls' Story Season 2", url: '../src/paginas/todos-los-animes/2023/informacion/' },//(88)
            { title: 'Mahou Shoujo Magical Destroyers', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(87)
            { title: 'Kawaisugi Crisis', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(86)
            { title: 'Edomae Elf', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(85)
            { title: 'Opus.COLORs', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(84)
            { title: 'Rokudou no Onna-tachi', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(83)
            { title: 'Xiling Jiyuan', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(82)
            { title: 'Princess Principal: Crown Handler Movie 3', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(81)
            { title: 'Dr. Stone: New World', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(80)
            { title: 'Kono Subarashii Sekai ni Bakuen wo!', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(79)
            { title: 'Mahoutsukai no Yome Season 2', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(78)
            { title: 'Yuusha ga Shinda!', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(77)
            { title: 'Watashi no Yuri wa Oshigoto desu!', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(76)
            { title: 'Kaminaki Sekai no Kamisama Katsudou', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(75)
            { title: 'Ensemble Stars!! Tsuioku Selection Element', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(74)
            { title: 'Tokyo Mew Mew New ♡ 2nd Season', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(73)
            { title: 'The IDOLM@STER Cinderella Girls: U149', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(72)
            { title: 'Skip to Loafer', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(71)
            { title: 'Kizuna no Allele', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(70)
            { title: 'Alice Gear Aegis Expansion', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(69)
            { title: 'Isekai wa Smartphone to Tomo ni. 2', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(68)
            { title: 'Kuma Kuma Kuma Bear Punch!', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(67)
            { title: 'Yamada-kun to Lv999 no Koi wo Suru', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(66)
            { title: 'Boku no Kokoro no Yabai Yatsu', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(65)
            { title: 'My Home Hero', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(64)
            { title: 'Tensei Kizoku no Isekai Boukenroku: Jichou wo Shiranai Kamigami no Shito', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(63)
            { title: 'Jijou wo Shiranai Tenkousei ga Guigui Kuru', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(62)
            { title: 'Jigokuraku', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(61)
            { title: 'Tengoku Daimakyou', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(60)
            { title: 'Mix: Meisei Story - Nidome no Natsu, Sora no Mukou e', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(59)
            { title: 'Inu ni Nattara Suki na Hito ni Hirowareta. Specials', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(58)
            { title: 'Gridman Universe', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(57)
            { title: 'Shingeki no Kyojin: The Final Season - Kanketsu-hen', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(56)
            { title: 'Sasaki to Miyano Movie: Sotsugyou-hen', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(55)
            { title: 'Hirogaru Sky! Precure', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(54)
            { title: 'Shuumatsu no Walküre II', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(53)
            { title: 'Majutsushi Orphen Hagure Tabi: Urbanrama-hen', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(52)
            { title: 'Watashi no Hashtag ga Haenakute', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(51)
            { title: 'Wu Liuqi: Anying Suming', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(50)
            { title: 'Shin Shinka no Mi: Shiranai Uchi ni Kachigumi Jinsei', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(49)
            { title: 'Hikari no Ou', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(48)
            { title: 'Cardfight!! Vanguard: will+Dress Season 2', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(47)
            { title: 'Pokemon: Mezase Pokemon Master', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(46)
            { title: 'Ooyukiumi no Kaina', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(45)
            { title: 'Itai no wa Iya nano de Bougyoryoku ni Kyokufuri Shitai to Omoimasu. 2', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(44)
            { title: 'Kubo-san wa Mob wo Yurusanai', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(43)
            { title: 'Tondemo Skill de Isekai Hourou Meshi', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(42)
            { title: 'Result Vinland Saga Season 2', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(41)
            { title: 'Eiyuuou, Bu wo Kiwameru Tame Tenseisu: Soshite, Sekai Saikyou no Minarai Kishi♀', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(40)
            { title: 'Ayakashi Triangle', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(39)
            { title: 'Kyuuketsuki Sugu Shinu 2', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(38)
            { title: 'High Card', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(37)
            { title: 'Mononogatari', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(36)
            { title: 'Kyokou Suiri Season 2', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(35)
            { title: 'Kami-tachi ni Hirowareta Otoko 2nd Season', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(34)
            { title: 'Benriya Saitou-san, Isekai ni Iku', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(33)
            { title: 'Mou Ippon!', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(32)
            { title: 'D4DJ All Mix', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(31)
            { title: 'Maou Gakuin no Futekigousha: Shijou Saikyou no Maou no Shiso, Tensei shite Shison-tachi no Gakkou e Kayou II', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(30)
            { title: 'Ijiranaide, Nagatoro-san 2nd Attack', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(29)
            { title: 'Tokyo Revengers: Seiya Kessen-hen', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(28)
            { title: 'NieR:Automata Ver1.1a', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(27)
            { title: 'Otonari no Tenshi-sama ni Itsunomanika Dame Ningen ni Sareteita Ken', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(26)
            { title: 'Saikyou Onmyouji no Isekai Tenseiki', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(25)
            { title: 'Kaiko sareta Ankoku Heishi (30-dai) no Slow na Second Life', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(24)
            { title: 'Rougo ni Sonaete Isekai de 8-manmai no Kinka wo Tamemasu', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(23)
            { title: 'Nokemono-tachi no Yoru', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(22)
            { title: 'UniteUp!', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(21)
            { title: 'Trigun Stampede', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(20)
            { title: 'Inu ni Nattara Suki na Hito ni Hirowareta', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(19)
            { title: 'Tsundere Akuyaku Reijou Liselotte to Jikkyou no Endou-kun to Kaisetsu no Kobayashi-san', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(18)
            { title: 'Isekai Nonbiri Nouka', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(17)
            { title: 'Buddy Daddies', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(16)
            { title: 'Sugar Apple Fairy Tale', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(15)
            { title: 'The Legend of Heroes: Sen no Kiseki - Northern War', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(14)
            { title: 'Ars no Kyojuu', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(13)
            { title: 'Nijiyon Animation', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(12)
            { title: 'Dungeon ni Deai wo Motomeru no wa Machigatteiru Darou ka IV: Fuka Shou - Yakusai-hen', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(11)
            { title: 'Spy Kyoushitsu', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(10)
            { title: 'Hyouken no Majutsushi ga Sekai wo Suberu', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(9)
            { title: 'Revenger', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(8)
            { title: 'Bungou Stray Dogs 4th Season', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(7)
            { title: 'Tomo-chan wa Onnanoko!', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(6)
            { title: 'Koori Zokusei Danshi to Cool na Douryou Joshi', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(5)
            { title: 'Oniichan wa Oshimai!', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(4)
            { title: 'Tsurune: Tsunagari no Issha', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(3)
            { title: 'Technoroid: Overmind', url: '../src/paginas/todos-los-animes/2023/informacion/' },//(2)
            { title: 'Ningen Fushin no Boukensha-tachi ga Sekai wo Sukuu you desu', url: '../src/paginas/todos-los-animes/2023/informacion/'},//(1 )EMPIEZA 2023-------------------------------



            { title: 'Gokushufudou Season 2', url: '../src/paginas/todos-los-animes/2022/informacion/' },//(224)
            { title: 'Tensei Oujo to Tensai Reijou no Mahou Kakumei', url: '../src/paginas/todos-los-animes/2022/informacion/'},//(223)
            { title: 'Cang Lan Jue Part 2', url: '../src/paginas/todos-los-animes/2022/informacion/' },//(222)
            { title: 'Kaguya-sama wa Kokurasetai: First Kiss wa Owaranai', url: '../src/paginas/todos-los-animes/2022/informacion/'},//(221)
            { title: 'Lupin Zero', url: '../src/paginas/todos-los-animes/2022/informacion/' },//(220)
            { title: 'Isekai Meikyuu de Harem wo Specials', url: '../src/paginas/todos-los-animes/2022/informacion/'},//(219)
            { title: 'Tensei shitara Slime Datta Ken Movie: Guren no Kizuna-hen', url: '../src/paginas/todos-los-animes/2022/informacion/' },//(218)
            { title: 'Tonikaku Kawaii: Seifuku', url: '../src/paginas/todos-los-animes/2022/informacion/'},//(217)
            { title: 'Suzume no Tojimari', url: '../src/paginas/todos-los-animes/2022/informacion/' },//(216)
            { title: 'Xue Yu Xin', url: '../src/paginas/todos-los-animes/2022/informacion/'},//(215)
            { title: 'KanColle: Itsuka Ano Umi de', url: '../src/paginas/todos-los-animes/2022/informacion/' },//(214)
            { title: 'Arknights: Reimei Zensou', url: '../src/paginas/todos-los-animes/2022/informacion/'},//(213)
            { title: 'Romantic Killer', url: '../src/paginas/todos-los-animes/2022/informacion/' },//(212)
            { title: 'Fumetsu no Anata e 2nd Season', url: '../src/paginas/todos-los-animes/2022/informacion/'},//(211)
            { title: 'Sword Art Online: Progressive Movie - Kuraki Yuuyami no Scherzo', url: '../src/paginas/todos-los-animes/2022/informacion/' },//(210)
            { title: '4-nin wa Sorezore Uso wo Tsuku', url: '../src/paginas/todos-los-animes/2022/informacion/'},//(209)
            { title: 'Urusei Yatsura (2022)', url: '../src/paginas/todos-los-animes/2022/informacion/' },//(208)
            { title: 'Watashi ni Tenshi ga Maiorita! Precious Friends', url: '../src/paginas/todos-los-animes/2022/informacion/'},//(207)
            { title: 'Aru Asa Dummy Head Mic ni Natteita Ore-kun no Jinsei', url: '../src/paginas/todos-los-animes/2022/informacion/' },//(206)
            { title: 'Chainsaw Man', url: '../src/paginas/todos-los-animes/2022/informacion/'},//(205)
            { title: 'Renai Flops', url: '../src/paginas/todos-los-animes/2022/informacion/' },//(204)
            { title: 'Bleach: Sennen Kessen-hen', url: '../src/paginas/todos-los-animes/2022/informacion/'},//(203)
            { title: 'Cool Doji Danshi', url: '../src/paginas/todos-los-animes/2022/informacion/' },//(202)
            { title: 'Eternal Boys', url: '../src/paginas/todos-los-animes/2022/informacion/'},//(201)
            { title: 'Peter Grill to Kenja no Jikan: Super Extra', url: '../src/paginas/todos-los-animes/2022/informacion/' },//(200)
            { title: 'Yowamushi Pedal: Limit Break', url: '../src/paginas/todos-los-animes/2022/informacion/'},//(199)
            { title: 'Blue Lock', url: '../src/paginas/todos-los-animes/2022/informacion/' },//(198)
            { title: 'Fuufu Ijou, Koibito Miman', url: '../src/paginas/todos-los-animes/2022/informacion/'},//(197)
            { title: 'Bocchi the Rock!', url: '../src/paginas/todos-los-animes/2022/informacion/' },//(196)
            { title: 'Mairimashita! Iruma-kun 3rd Season', url: '../src/paginas/todos-los-animes/2022/informacion/'},//(195)
            { title: 'Seiken Densetsu: Legend of Mana - The Teardrop Crystal', url: '../src/paginas/todos-los-animes/2022/informacion/' },//(194)
            { title: 'Akiba Maid Sensou', url: '../src/paginas/todos-los-animes/2022/informacion/'},//(193)
            { title: 'Megaton-kyuu Musashi 2nd Season', url: '../src/paginas/todos-los-animes/2022/informacion/' },//(192)
            { title: 'Boku ga Aishita Subete no Kimi e', url: '../src/paginas/todos-los-animes/2022/informacion/'},//(191)
            { title: 'Kimi wo Aishita Hitori no Boku e', url: '../src/paginas/todos-los-animes/2022/informacion/' },//(190)
            { title: 'Mob Psycho 100 III', url: '../src/paginas/todos-los-animes/2022/informacion/'},//(189)
            { title: 'Muv-Luv Alternative 2nd Season', url: '../src/paginas/todos-los-animes/2022/informacion/' },//(188)
            { title: 'Do It Yourself!!', url: '../src/paginas/todos-los-animes/2022/informacion/'},//(187)
            { title: 'Mushikaburi-hime', url: '../src/paginas/todos-los-animes/2022/informacion/' },//(186)
            { title: 'Yama no Susume: Next Summit', url: '../src/paginas/todos-los-animes/2022/informacion/'},//(185)
            { title: 'Kage no Jitsuryokusha ni Naritakute!', url: '../src/paginas/todos-los-animes/2022/informacion/' },//(184)
            { title: 'Tensei shitara Ken Deshita', url: '../src/paginas/todos-los-animes/2022/informacion/'},//(183)
            { title: 'Futoku no Guild', url: '../src/paginas/todos-los-animes/2022/informacion/' },//(182)
            { title: 'Human Bug Daigaku', url: '../src/paginas/todos-los-animes/2022/informacion/'},//(181)
            { title: 'Shinobi no Ittoki', url: '../src/paginas/todos-los-animes/2022/informacion/' },//(180)
            { title: 'Vazzrock The Animation', url: '../src/paginas/todos-los-animes/2022/informacion/'},//(179)
            { title: 'Meitantei Conan: Hannin no Hanzawa-san', url: '../src/paginas/todos-los-animes/2022/informacion/' },//(178)
            { title: 'Golden Kamuy 4th Season', url: '../src/paginas/todos-los-animes/2022/informacion/'},//(177)
            { title: 'Shinmai Renkinjutsushi no Tenpo Keiei', url: '../src/paginas/todos-los-animes/2022/informacion/' },//(176)
            { title: 'Poputepipikku 2nd Season', url: '../src/paginas/todos-los-animes/2022/informacion/'},//(175)
            { title: 'IDOLiSH7: Third Beat! Part 2', url: '../src/paginas/todos-los-animes/2022/informacion/' },//(174)
            { title: 'Koukyuu no Karasu', url: '../src/paginas/todos-los-animes/2022/informacion/'},//(173)
            { title: 'Yuusha Party wo Tsuihou sareta Beast Tamer, Saikyoushu no Nekomimi Shoujo to Deau', url: '../src/paginas/todos-los-animes/2022/informacion/' },//(172)
            { title: 'Mobile Suit Gundam: The Witch from Mercury', url: '../src/paginas/todos-los-animes/2022/informacion/'},//(171)
            { title: 'C Danchi', url: '../src/paginas/todos-los-animes/2022/informacion/' },//(170)
            { title: 'Berserk: Ougon Jidai-hen - Memorial Edition', url: '../src/paginas/todos-los-animes/2022/informacion/'},//(169)
            { title: 'Spy x Family Part 2', url: '../src/paginas/todos-los-animes/2022/informacion/' },//(168)
            { title: 'Boku no Hero Academia 6th Season', url: '../src/paginas/todos-los-animes/2022/informacion/'},//(167)
            { title: 'Uzaki-chan wa Asobitai! Double', url: '../src/paginas/todos-los-animes/2022/informacion/' },//(166)
            { title: 'Noumin Kanren no Skill bakka Agetetara Nazeka Tsuyoku Natta', url: '../src/paginas/todos-los-animes/2022/informacion/'},//(165)
            { title: 'Uchi no Shishou wa Shippo ga Nai', url: '../src/paginas/todos-los-animes/2022/informacion/' },//(164)
            { title: 'The Daily Life of the Immortal King 3', url: '../src/paginas/todos-los-animes/2022/informacion/'},//(163)
            { title: 'Ginga Eiyuu Densetsu: Die Neue These - Sakubou', url: '../src/paginas/todos-los-animes/2022/informacion/' },//(162)
            { title: 'Akuyaku Reijou nanode Last Boss wo Kattemimashita', url: '../src/paginas/todos-los-animes/2022/informacion/'},//(161)
            { title: 'Ame wo Tsugeru Hyouryuu Danchi', url: '../src/paginas/todos-los-animes/2022/informacion/' },//(160)
            { title: 'Cyberpunk: Edgerunners', url: '../src/paginas/todos-los-animes/2022/informacion/'},//(159)
            { title: 'Tian Mei De Yao Hen', url: '../src/paginas/todos-los-animes/2022/informacion/' },//(158)
            { title: 'D4DJ Double Mix', url: '../src/paginas/todos-los-animes/2022/informacion/'},//(157)
            { title: 'One Piece Film: Red', url: '../src/paginas/todos-los-animes/2022/informacion/' },//(156)
            { title: 'Kakegurui Twin', url: '../src/paginas/todos-los-animes/2022/informacion/'},//(155)
            { title: 'Fuuto Tantei', url: '../src/paginas/todos-los-animes/2022/informacion/' },//(154)
            { title: 'Hanhua Riji 3rd Season', url: '../src/paginas/todos-los-animes/2022/informacion/'},//(153)
            { title: 'Yowai 5000-nen no Soushoku Dragon, Iwarenaki Jaryuu Nintei', url: '../src/paginas/todos-los-animes/2022/informacion/' },//(152)
            { title: 'Sasaki to Miyano: Koi ni Kizuku Mae no Chotto Shita Hanashi', url: '../src/paginas/todos-los-animes/2022/informacion/'},//(151)
            { title: 'Saikin Yatotta Maid ga Ayashii', url: '../src/paginas/todos-los-animes/2022/informacion/' },//(150)
            { title: 'Dungeon ni Deai wo Motomeru no wa Machigatteiru Darou ka IV: Shin Shou - Meikyuu-hen', url: '../src/paginas/todos-los-animes/2022/informacion/'},//(149)
            { title: 'Love Live! Superstar!! 2nd Season', url: '../src/paginas/todos-los-animes/2022/informacion/' },//(148)
            { title: 'Cang Lan Jue', url: '../src/paginas/todos-los-animes/2022/informacion/'},//(147)
            { title: 'Hataraku Maou-sama!!', url: '../src/paginas/todos-los-animes/2022/informacion/' },//(146)
            { title: 'Shine Post', url: '../src/paginas/todos-los-animes/2022/informacion/'},//(145)
            { title: 'Orient: Awajishima Gekitou-hen', url: '../src/paginas/todos-los-animes/2022/informacion/' },//(144)
            { title: 'Isekai Yakkyoku', url: '../src/paginas/todos-los-animes/2022/informacion/'},//(143)
            { title: 'Hanabi-chan wa Okuregachi', url: '../src/paginas/todos-los-animes/2022/informacion/' },//(142)
            { title: 'Kuro no Shoukanshi', url: '../src/paginas/todos-los-animes/2022/informacion/'},//(141)
            { title: 'Extreme Hearts', url: '../src/paginas/todos-los-animes/2022/informacion/' },//(140)
            { title: 'KJ File', url: '../src/paginas/todos-los-animes/2022/informacion/'},//(139)
            { title: 'Bucchigire!', url: '../src/paginas/todos-los-animes/2022/informacion/' },//(138)
            { title: 'Dr. Stone: Ryuusui', url: '../src/paginas/todos-los-animes/2022/informacion/'},//(137)
            { title: 'Shadows House 2nd Season', url: '../src/paginas/todos-los-animes/2022/informacion/' },//(136)
            { title: 'Soredemo Ayumu wa Yosetekuru', url: '../src/paginas/todos-los-animes/2022/informacion/'},//(135)
            { title: 'Hoshi no Samidare', url: '../src/paginas/todos-los-animes/2022/informacion/' },//(134)
            { title: 'Yofukashi no Uta', url: '../src/paginas/todos-los-animes/2022/informacion/'},//(133)
            { title: 'Shin Tennis no Ouji-sama: U-17 World Cup', url: '../src/paginas/todos-los-animes/2022/informacion/' },//(132)
            { title: 'Made in Abyss: Retsujitsu no Ougonkyou', url: '../src/paginas/todos-los-animes/2022/informacion/'},//(131)
            { title: 'Isekai Meikyuu de Harem wo', url: '../src/paginas/todos-los-animes/2022/informacion/' },//(130)
            { title: 'Kumichou Musume to Sewagakari', url: '../src/paginas/todos-los-animes/2022/informacion/'},//(129)
            { title: 'Isekai Ojisan', url: '../src/paginas/todos-los-animes/2022/informacion/' },//(128)
            { title: 'Jashin-chan Dropkick X', url: '../src/paginas/todos-los-animes/2022/informacion/'},//(127)
            { title: 'Mamahaha no Tsurego ga Motokano datta', url: '../src/paginas/todos-los-animes/2022/informacion/' },//(126)
            { title: 'Kinsou no Vermeil: Gakeppuchi Majutsushi wa Saikyou no Yakusai to Mahou Sekai wo Tsukisusumu', url: '../src/paginas/todos-los-animes/2022/informacion/'},//(125)
            { title: 'Tokyo Mew Mew New ♡', url: '../src/paginas/todos-los-animes/2022/informacion/' },//(124)
            { title: 'Warau Arsnotoria Sun!', url: '../src/paginas/todos-los-animes/2022/informacion/'},//(123)
            { title: 'Overlord IV', url: '../src/paginas/todos-los-animes/2022/informacion/' },//(122)
            { title: 'Cardfight!! Vanguard: will+Dress', url: '../src/paginas/todos-los-animes/2022/informacion/'},//(121)
            { title: 'Meng Qi Shi Shen: Huanxi Zhui Hun', url: '../src/paginas/todos-los-animes/2022/informacion/' },//(120)
            { title: 'Tuanzimen de Shiming', url: '../src/paginas/todos-los-animes/2022/informacion/'},//(119)
            { title: 'Youkoso Jitsuryoku Shijou Shugi no Kyoushitsu e (TV) 2nd Season', url: '../src/paginas/todos-los-animes/2022/informacion/' },//(118)
            { title: 'Tensei Kenja no Isekai Life: Dai-2 no Shokugyou wo Ete, Sekai Saikyou ni Narimashita', url: '../src/paginas/todos-los-animes/2022/informacion/'},//(117)
            { title: 'Utawarerumono: Futari no Hakuoro', url: '../src/paginas/todos-los-animes/2022/informacion/' },//(116)
            { title: 'Renmei Kuugun Koukuu Mahou Ongakutai Luminous Witches', url: '../src/paginas/todos-los-animes/2022/informacion/'},//(115)
            { title: 'Prima Doll', url: '../src/paginas/todos-los-animes/2022/informacion/' },//(114)
            { title: 'Yurei Deco', url: '../src/paginas/todos-los-animes/2022/informacion/'},//(113)
            { title: 'Engage Kiss', url: '../src/paginas/todos-los-animes/2022/informacion/' },//(112)
            { title: 'Kanojo, Okarishimasu 2nd Season', url: '../src/paginas/todos-los-animes/2022/informacion/'},//(111)
            { title: 'Musashino!', url: '../src/paginas/todos-los-animes/2022/informacion/' },//(110)
            { title: 'Kami Kuzu☆Idol', url: '../src/paginas/todos-los-animes/2022/informacion/'},//(109)
            { title: 'Lycoris Recoil', url: '../src/paginas/todos-los-animes/2022/informacion/' },//(108)
            { title: 'Shoot! Goal to the Future', url: '../src/paginas/todos-los-animes/2022/informacion/'},//(107)
            { title: 'Teppen!!!!!!!!!!!!!!!', url: '../src/paginas/todos-los-animes/2022/informacion/' },//(106)
            { title: 'Bakuten!! Movie', url: '../src/paginas/todos-los-animes/2022/informacion/'},//(105)
            { title: 'Yuru Camp△ Movie', url: '../src/paginas/todos-los-animes/2022/informacion/' },//(104)
            { title: 'Yuusha, Yamemasu: Kenshuu Ryokou wa Mokuteki wo Miushinau na', url: '../src/paginas/todos-los-animes/2022/informacion/'},//(103)
            { title: 'RWBY: Hyousetsu Teikoku', url: '../src/paginas/todos-los-animes/2022/informacion/' },//(102)
            { title: 'Boku no Hero Academia (ONA)', url: '../src/paginas/todos-los-animes/2022/informacion/'},//(101)
            { title: 'Dragon Ball Super: Super Hero', url: '../src/paginas/todos-los-animes/2022/informacion/' },//(100)
            { title: 'Karakai Jouzu no Takagi-san Movie', url: '../src/paginas/todos-los-animes/2022/informacion/'},//(99)
            { title: 'Inu-Ou', url: '../src/paginas/todos-los-animes/2022/informacion/' },//(98)
            { title: 'Zanting! Rang Wo Cha Gonglue', url: '../src/paginas/todos-los-animes/2022/informacion/'},//(97)
            { title: '5-toubun no Hanayome Movie', url: '../src/paginas/todos-los-animes/2022/informacion/' },//(96)
            { title: 'Shin Ikkitousen', url: '../src/paginas/todos-los-animes/2022/informacion/'},//(95)
            { title: 'Bubble', url: '../src/paginas/todos-los-animes/2022/informacion/' },//(94)
            { title: 'Yuukoku no Moriarty OVA', url: '../src/paginas/todos-los-animes/2022/informacion/'},//(93)
            { title: 'Zuihou de Zhaohuan Shi', url: '../src/paginas/todos-los-animes/2022/informacion/' },//(92)
            { title: 'Kakkou no Iinazuke', url: '../src/paginas/todos-los-animes/2022/informacion/'},//(91)
            { title: 'Summertime Render', url: '../src/paginas/todos-los-animes/2022/informacion/' },//(90)
            { title: 'Kaginado Season 2', url: '../src/paginas/todos-los-animes/2022/informacion/'},//(89)
            { title: 'Kyoukai Senki Part 2', url: '../src/paginas/todos-los-animes/2022/informacion/' },//(88)
            { title: 'Honzuki no Gekokujou: Shisho ni Naru Tame ni wa Shudan wo Erandeiraremasen 3rd Season', url: '../src/paginas/todos-los-animes/2022/informacion/'},//(87)
            { title: 'Onipan!', url: '../src/paginas/todos-los-animes/2022/informacion/' },//(86)
            { title: 'Kunoichi Tsubaki no Mune no Uchi', url: '../src/paginas/todos-los-animes/2022/informacion/'},//(85)
            { title: 'Kawaii dake ja Nai Shikimori-san', url: '../src/paginas/todos-los-animes/2022/informacion/' },//(84-)
            { title: 'Kingdom 4th Season', url: '../src/paginas/todos-los-animes/2022/informacion/'},//(83)
            { title: 'Kono Healer, Mendokusai', url: '../src/paginas/todos-los-animes/2022/informacion/' },//(82)
            { title: 'Spy x Family', url: '../src/paginas/todos-los-animes/2022/informacion/'},//(81)
            { title: 'Dance Dance Danseur', url: '../src/paginas/todos-los-animes/2022/informacion/' },//(80)
            { title: 'Ao Ashi', url: '../src/paginas/todos-los-animes/2022/informacion/'},//(79)
            { title: 'Yatogame-chan Kansatsu Nikki 4th Season', url: '../src/paginas/todos-los-animes/2022/informacion/' },//(78)
            { title: 'Komi-san wa, Comyushou desu. 2nd Season', url: '../src/paginas/todos-los-animes/2022/informacion/'},//(77)
            { title: 'Mahoutsukai Reimeiki', url: '../src/paginas/todos-los-animes/2022/informacion/' },//(76)
            { title: 'Machikado Mazoku: 2-choume', url: '../src/paginas/todos-los-animes/2022/informacion/'},//(75)
            { title: 'Date A Live IV', url: '../src/paginas/todos-los-animes/2022/informacion/' },//(74)
            { title: 'Koi wa Sekai Seifuku no Ato de', url: '../src/paginas/todos-los-animes/2022/informacion/'},//(73)
            { title: 'Shachiku-san wa Youjo Yuurei ni Iyasaretai', url: '../src/paginas/todos-los-animes/2022/informacion/' },//(72)
            { title: 'Gaikotsu Kishi-sama, Tadaima Isekai e Odekakechuu', url: '../src/paginas/todos-los-animes/2022/informacion/'},//(71)
            { title: 'Heroine Tarumono! Kiraware Heroine to Naisho no Oshigoto', url: '../src/paginas/todos-los-animes/2022/informacion/' },//(70)
            { title: 'Tomodachi Game', url: '../src/paginas/todos-los-animes/2022/informacion/'},//(69)
            { title: 'Shijou Saikyou no Daimaou, Murabito A ni Tensei suru', url: '../src/paginas/todos-los-animes/2022/informacion/' },//(68)
            { title: 'Tate no Yuusha no Nariagari Season 2', url: '../src/paginas/todos-los-animes/2022/informacion/'},//(67)
            { title: 'RPG Fudousan', url: '../src/paginas/todos-los-animes/2022/informacion/' },//(66)
            { title: 'Deaimon', url: '../src/paginas/todos-los-animes/2022/informacion/'},//(65)
            { title: "Birdie Wing: Golf Girls' Story", url: '../src/paginas/todos-los-animes/2022/informacion/' },//(64)
            { title: 'Meitantei Conan: Zero no Tea Time', url: '../src/paginas/todos-los-animes/2022/informacion/'},//(63)
            { title: 'Paripi Koumei', url: '../src/paginas/todos-los-animes/2022/informacion/' },//(62)
            { title: 'Yuusha, Yamemasu', url: '../src/paginas/todos-los-animes/2022/informacion/'},//(61)
            { title: 'Healer Girl', url: '../src/paginas/todos-los-animes/2022/informacion/' },//(60)
            { title: 'Otome Game Sekai wa Mob ni Kibishii Sekai desu', url: '../src/paginas/todos-los-animes/2022/informacion/'},//(59)
            { title: 'Build Divide: Code White', url: '../src/paginas/todos-los-animes/2022/informacion/' },//(58)
            { title: 'Magia Record: Mahou Shoujo Madoka☆Magica Gaiden (TV) Final Season - Asaki Yume no Akatsuki', url: '../src/paginas/todos-los-animes/2022/informacion/'},//(57)
            { title: 'Black★★Rock Shooter: Dawn Fall', url: '../src/paginas/todos-los-animes/2022/informacion/' },//(56)
            { title: 'Rikei ga Koi ni Ochita no de Shoumei shitemita. Heart', url: '../src/paginas/todos-los-animes/2022/informacion/'},//(55)
            { title: 'Aharen-san wa Hakarenai', url: '../src/paginas/todos-los-animes/2022/informacion/' },//(54)
            { title: 'Jantama Pong☆', url: '../src/paginas/todos-los-animes/2022/informacion/'},//(53)
            { title: 'Shokei Shoujo no Virgin Road', url: '../src/paginas/todos-los-animes/2022/informacion/' },//(52)
            { title: 'Love All Play', url: '../src/paginas/todos-los-animes/2022/informacion/'},//(51)
            { title: 'Love Live! Nijigasaki Gakuen School Idol Doukoukai 2nd Season', url: '../src/paginas/todos-los-animes/2022/informacion/' },//(50)
            { title: 'Gunjou no Fanfare', url: '../src/paginas/todos-los-animes/2022/informacion/'},//(49)
            { title: 'Shadowverse Flame', url: '../src/paginas/todos-los-animes/2022/informacion/' },//(48)
            { title: 'Kaguya-sama wa Kokurasetai: Ultra Romantic', url: '../src/paginas/todos-los-animes/2022/informacion/'},//(47)
            { title: 'Odd Taxi Movie: In the Woods', url: '../src/paginas/todos-los-animes/2022/informacion/' },//(46)
            { title: 'Strike the Blood Final', url: '../src/paginas/todos-los-animes/2022/informacion/'},//(45)
            { title: 'Kirakira Kirari', url: '../src/paginas/todos-los-animes/2022/informacion/' },//(44)
            { title: 'Estab-Life: Great Escape', url: '../src/paginas/todos-los-animes/2022/informacion/'},//(43)
            { title: 'Non Non Biyori Nonstop OVA', url: '../src/paginas/todos-los-animes/2022/informacion/' },//(42)
            { title: 'Arifureta Shokugyou de Sekai Saikyou 2nd Season Special', url: '../src/paginas/todos-los-animes/2022/informacion/'},//(41)
            { title: 'Mushoku Tensei: Isekai Ittara Honki Dasu Special', url: '../src/paginas/todos-los-animes/2022/informacion/' },//(40)
            { title: 'Totsukuni no Shoujo (2022)', url: '../src/paginas/todos-los-animes/2022/informacion/'},//(39)
            { title: 'Ginga Eiyuu Densetsu: Die Neue These - Gekitotsu', url: '../src/paginas/todos-los-animes/2022/informacion/' },//(38)
            { title: 'Ryuukyuu Timeline 2: Tedako no Machi Tanbou', url: '../src/paginas/todos-los-animes/2022/informacion/'},//(37)
            { title: 'Fruits Basket: Prelude', url: '../src/paginas/todos-los-animes/2022/informacion/' },//(36)
            { title: 'Delicious Party Precure', url: '../src/paginas/todos-los-animes/2022/informacion/'},//(35)
            { title: "Ryman's Club", url:'../src/paginas/todos-los-animes/2022/informacion/' },//(34)
            { title: 'Tales of Luminaria: The Fateful Crossroad', url: '../src/paginas/todos-los-animes/2022/informacion/'},//(33)
            { title: 'Kobayashi-san Chi no Maidragon S: Nippon no Omotenashi - Attend wa Dragon Desu', url: '../src/paginas/todos-los-animes/2022/informacion/' },//(32)
            { title: 'Vanitas no Karte 2nd Season', url: '../src/paginas/todos-los-animes/2022/informacion/'},//(31)
            { title: 'Arifureta Shokugyou de Sekai Saikyou 2nd Season', url: '../src/paginas/todos-los-animes/2022/informacion/' },//(30)
            { title: 'Koroshi Ai', url: '../src/paginas/todos-los-animes/2022/informacion/'},//(29)
            { title: 'Kenja no Deshi wo Nanoru Kenja', url: '../src/paginas/todos-los-animes/2022/informacion/' },//(28)
            { title: 'Fantasy Bishoujo Juniku Ojisan to', url: '../src/paginas/todos-los-animes/2022/informacion/'},//(27)
            { title: 'Princess Connect! Re:Dive Season 2', url: '../src/paginas/todos-los-animes/2022/informacion/' },//(26)
            { title: 'Tensai Ouji no Akaji Kokka Saisei Jutsu', url: '../src/paginas/todos-los-animes/2022/informacion/'},//(25)
            { title: 'Sabikui Bisco', url: '../src/paginas/todos-los-animes/2022/informacion/' },//(24)
            { title: 'Gensou Sangokushi: Tengen Reishinki', url: '../src/paginas/todos-los-animes/2022/informacion/'},//(23)
            { title: 'Shingeki no Kyojin: The Final Season Part 2', url: '../src/paginas/todos-los-animes/2022/informacion/' },//(22)
            { title: 'Sasaki to Miyano', url: '../src/paginas/todos-los-animes/2022/informacion/'},//(21)
            { title: 'Tribe Nine', url: '../src/paginas/todos-los-animes/2022/informacion/' },//(20)
            { title: 'Genjitsu Shugi Yuusha no Oukoku Saikenki 2nd Season', url: '../src/paginas/todos-los-animes/2022/informacion/'},//(19)
            { title: 'Sono Bisque Doll wa Koi wo Suru', url: '../src/paginas/todos-los-animes/2022/informacion/' },//(18)
            { title: 'Baraou no Souretsu', url: '../src/paginas/todos-los-animes/2022/informacion/'},//(17)
            { title: 'Akebi-chan no Sailor-fuku', url: '../src/paginas/todos-los-animes/2022/informacion/' },//(16)
            { title: 'Futsal Boys!!!!!', url: '../src/paginas/todos-los-animes/2022/informacion/'},//(15)
            { title: 'Kaijin Kaihatsu-bu no Kuroitsu-san', url: '../src/paginas/todos-los-animes/2022/informacion/' },//(14)
            { title: 'Sabiiro no Armor: Reimei', url: '../src/paginas/todos-los-animes/2022/informacion/'},//(13)
            { title: 'Shuumatsu no Harem', url: '../src/paginas/todos-los-animes/2022/informacion/' },//(12)
            { title: 'Karakai Jouzu no Takagi-san 3', url: '../src/paginas/todos-los-animes/2022/informacion/'},//(11)
            { title: 'Shikkakumon no Saikyou Kenja', url: '../src/paginas/todos-los-animes/2022/informacion/' },//(10)
            { title: "Dolls' Frontline", url: '../src/paginas/todos-los-animes/2022/informacion/'},//(9)
            { title: 'Cue!', url: '../src/paginas/todos-los-animes/2022/informacion/' },//(8)
            { title: 'Slow Loop', url: '../src/paginas/todos-los-animes/2022/informacion/'},//(7)
            { title: 'Orient', url: '../src/paginas/todos-los-animes/2022/informacion/' },//(6)
            { title: 'Saiyuuki Reload: Zeroin', url: '../src/paginas/todos-los-animes/2022/informacion/'},//(5)
            { title: 'Tokyo 24-ku', url: '../src/paginas/todos-los-animes/2022/informacion/' },//(4)
            { title: 'Leadale no Daichi nite', url: '../src/paginas/todos-los-animes/2022/informacion/'},//(3)
            { title: 'Hakozume: Kouban Joshi no Gyakushuu', url: '../src/paginas/todos-los-animes/2022/informacion/' },//(2)          
            { title: 'Irodorimidori', url: '../src/paginas/todos-los-animes/2022/informacion/'},//(1)EMPIEZA 2022-------------------------------
            


            { title: "BanG Dream! Movie: Poppin' Dream!", url: '../src/paginas/todos-los-animes/2021/informacion/'},//(245)
            { title: 'Sorairo Utility', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(244)
            { title: 'Yami Shibai 10', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(243)
            { title: 'Mahouka Koukou no Rettousei: Tsuioku-hen', url: '../src/paginas/todos-los-animes/2021/informacion/' },//(242)
            { title: 'Getsuyoubi no Tawawa 2 Special', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(241)
            { title: 'Jujutsu Kaisen 0 Movie', url: '../src/paginas/todos-los-animes/2021/informacion/' },//(240)
            { title: 'Kanashiki Debu Neko-chan', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(239)
            { title: 'Kimetsu no Yaiba: Yuukaku-hen', url: '../src/paginas/todos-los-animes/2021/informacion/' },//(238)
            { title: 'Hula Fulla Dance', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(237)
            { title: 'JoJo no Kimyou na Bouken Part 6: Stone Ocean', url: '../src/paginas/todos-los-animes/2021/informacion/' },//(236)
            { title: 'Given: Uragawa no Sonzai', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(235)
            { title: 'The Daily Life of the Immortal King 2nd Season', url: '../src/paginas/todos-los-animes/2021/informacion/' },//(234)
            { title: 'Sword Art Online: Progressive Movie - Hoshi Naki Yoru no Aria', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(233)
            { title: 'Gundam Breaker: Battlogue', url: '../src/paginas/todos-los-animes/2021/informacion/' },//(232)
            { title: 'Lupin III: Part 6', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(231)
            { title: 'Ousama Ranking', url: '../src/paginas/todos-los-animes/2021/informacion/' },//(230)
            { title: '180 Byou de Kimi no Mimi wo Shiawase ni Dekiru ka?', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(229)
            { title: 'Deep Insanity: The Lost Child', url: '../src/paginas/todos-los-animes/2021/informacion/' },//(228)
            { title: 'Kaginado', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(227)
            { title: 'Gyakuten Sekai no Denchi Shoujo', url: '../src/paginas/todos-los-animes/2021/informacion/' },//(226)
            { title: 'Dou Shen Ji', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(225)
            { title: 'Build Divide: Code Black', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(224)
            { title: 'Senpai ga Uzai Kouhai no Hanashi', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(223)
            { title: 'World Trigger 3rd Season', url: '../src/paginas/todos-los-animes/2021/informacion/' },//(222)
            { title: 'Shikizakura', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(221)
            { title: 'Kimetsu no Yaiba: Mugen Ressha-hen', url: '../src/paginas/todos-los-animes/2021/informacion/' },//(220)
            { title: 'Meng Qi Shi Shen: Zaijie Liangyuan', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(219)
            { title: 'Dakaretai Otoko 1-i ni Odosarete Imasu. Movie: Spain-hen', url: '../src/paginas/todos-los-animes/2021/informacion/' },//(218)
            { title: 'Saihate no Paladin', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(217)
            { title: 'Visual Prison', url: '../src/paginas/todos-los-animes/2021/informacion/' },//(216)
            { title: 'Taishou Otome Otogibanashi', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(215)
            { title: 'Komi-san wa, Comyushou desu', url: '../src/paginas/todos-los-animes/2021/informacion/' },//(214)
            { title: 'Platinum End', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(213)
            { title: 'Muv-Luv Alternative', url: '../src/paginas/todos-los-animes/2021/informacion/' },//(212)
            { title: 'Lie Huo Jiao Chou', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(211)
            { title: 'Sakugan', url: '../src/paginas/todos-los-animes/2021/informacion/' },//(210)
            { title: 'Gokushufudou Part 2', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(209)
            { title: 'Shin no Nakama ja Nai to Yuusha no Party wo Oidasareta node, Henkyou de Slow Life suru Koto ni Shimashita', url: '../src/paginas/todos-los-animes/2021/informacion/' },//(28)
            { title: 'Takt Op. Destiny', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(207)
            { title: 'Sekai Saikou no Ansatsusha, Isekai Kizoku ni Tensei suru', url: '../src/paginas/todos-los-animes/2021/informacion/' },//(206)
            { title: 'Puraore! Pride of Orange', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(205)
            { title: 'Cardfight!! Vanguard: overDress Season 2', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(204)
            { title: 'Shinka no Mi: Shiranai Uchi ni Kachigumi Jinsei', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(203)
            { title: 'Kyoukai Senki', url: '../src/paginas/todos-los-animes/2021/informacion/' },//(202)
            { title: 'Tsuki to Laika to Nosferatu', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(201)
            { title: 'Mushoku Tensei: Isekai Ittara Honki Dasu 2nd Season', url: '../src/paginas/todos-los-animes/2021/informacion/' },//(200)
            { title: 'Kyuuketsuki Sugu Shinu', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(199)
            { title: 'Muteking the Dancing Hero', url: '../src/paginas/todos-los-animes/2021/informacion/' },//(198)
            { title: '86 2nd Season', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(197)
            { title: 'Waccha PriMagi!', url: '../src/paginas/todos-los-animes/2021/informacion/' },//(196)
            { title: 'Digimon Ghost Game', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(195)
            { title: 'Sankaku Mado no Sotogawa wa Yoru', url: '../src/paginas/todos-los-animes/2021/informacion/' },//(194)
            { title: 'Mieruko-chan', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(192)
            { title: 'Tesla Note', url: '../src/paginas/todos-los-animes/2021/informacion/' },//(192)
            { title: 'Yuuki Yuuna wa Yuusha de Aru: Dai Mankai no Shou', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(191)
            { title: 'Deji Meets Girl', url: '../src/paginas/todos-los-animes/2021/informacion/' },//(190)
            { title: 'Hanyou no Yashahime: Sengoku Otogizoushi - Ni no Shou', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(189)
            { title: 'Yakunara Mug Cup mo: Niban Gama', url: '../src/paginas/todos-los-animes/2021/informacion/' },//(188)
            { title: 'Isekai Shokudou 2', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(187)
            { title: 'Megaton-kyuu Musashi', url: '../src/paginas/todos-los-animes/2021/informacion/' },//(186)
            { title: 'Selection Project', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(185)
            { title: 'Hanma Baki: Son of Ogre', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(184)
            { title: 'Otome Game no Hametsu Flag shika Nai Akuyaku Reijou ni Tensei shiteshimatta... OVA', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(183)
            { title: 'Princess Principal: Crown Handler Movie 1 - Busy Easy Money', url: '../src/paginas/todos-los-animes/2021/informacion/' },//(182)
            { title: 'Blue Period', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(181)
            { title: 'Hachigatsu no Cinderella Nine Episode 13', url: '../src/paginas/todos-los-animes/2021/informacion/' },//(180)
            { title: 'Princess Principal: Crown Handler Movie 2', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(179)
            { title: 'Getsuyoubi no Tawawa 2', url: '../src/paginas/todos-los-animes/2021/informacion/' },//(178)
            { title: 'Ganbare Douki-chan', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(177)
            { title: 'Heike Monogatari', url: '../src/paginas/todos-los-animes/2021/informacion/' },//(176)
            { title: 'Mahoutsukai no Yome: Nishi no Shounen to Seiran no Kishi', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(175)
            { title: 'Fate/kaleid liner Prisma☆Illya Movie: Licht - Namae no Nai Shoujo', url: '../src/paginas/todos-los-animes/2021/informacion/' },//(174)
            { title: 'BanG Dream! Film Live 2nd Stage', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(173)
            { title: 'Tonikaku Kawaii: SNS', url: '../src/paginas/todos-los-animes/2021/informacion/' },//(172)
            { title: 'Kaizoku Oujo', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(171)
            { title: 'Mo Dao Zu Shi: Wanjie Pian', url: '../src/paginas/todos-los-animes/2021/informacion/' },//(170)
            { title: "Boku no Hero Academia the Movie 3: World Heroes' Mission", url: '../src/paginas/todos-los-animes/2021/informacion/'},//(169)
            { title: 'Magia Record: Mahou Shoujo Madoka☆Magica Gaiden 2nd Season - Kakusei Zenya', url: '../src/paginas/todos-los-animes/2021/informacion/' },//(168)
            { title: 'Jahy-sama wa Kujikenai!', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(167)
            { title: 'Quanzhi Fashi V', url: '../src/paginas/todos-los-animes/2021/informacion/' },//(166)
            { title: 'Heion Sedai no Idaten-tachi', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(165)
            { title: 'Night Head 2041', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(164)
            { title: 'Obey Me!', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(163)
            { title: 'Ryuu to Sobakasu no Hime', url: '../src/paginas/todos-los-animes/2021/informacion/' },//(162)
            { title: 'Megami-ryou no Ryoubo-kun', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(161)
            { title: 'Deatte 5-byou de Battle', url: '../src/paginas/todos-los-animes/2021/informacion/' },//(160)
            { title: 'Yami Shibai 9', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(159)
            { title: 'Love Live! Superstar!!', url: '../src/paginas/todos-los-animes/2021/informacion/' },//(158)
            { title: '100-man no Inochi no Ue ni Ore wa Tatteiru 2nd Season', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(157)
            { title: 'D_Cide Traumerei the Animation', url: '../src/paginas/todos-los-animes/2021/informacion/' },//(156)
            { title: 'Shiroi Suna no Aquatope', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(155)
            { title: 'Meikyuu Black Company', url: '../src/paginas/todos-los-animes/2021/informacion/' },//(154)
            { title: 'Kobayashi-san Chi no Maid Dragon S', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(153)
            { title: 'Cheat Kusushi no Slow Life: Isekai ni Tsukurou Drugstore', url: '../src/paginas/todos-los-animes/2021/informacion/' },//(152)
            { title: 'Tsukipro The Animation 2', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(151)
            { title: 'Tsuki ga Michibiku Isekai Douchuu', url: '../src/paginas/todos-los-animes/2021/informacion/' },//(150)
            { title: 'Uramichi Oniisan', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(149)
            { title: 'Seirei Gensouki', url: '../src/paginas/todos-los-animes/2021/informacion/' },//(148)
            { title: 'Tensei shitara Slime Datta Ken 2nd Season Part 2', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(147)
            { title: 'IDOLiSH7: Third Beat!', url: '../src/paginas/todos-los-animes/2021/informacion/' },//(146)
            { title: 'Kageki Shoujo!!', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(145)
            { title: 'Genjitsu Shugi Yuusha no Oukoku Saikenki', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(144)
            { title: 'Re-Main', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(143)
            { title: 'Shinigami Bocchan to Kuro Maid', url: '../src/paginas/todos-los-animes/2021/informacion/' },//(142)
            { title: 'Tantei wa Mou, Shindeiru', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(141)
            { title: 'Getter Robo Arc', url: '../src/paginas/todos-los-animes/2021/informacion/' },//(140)
            { title: 'Otome Game no Hametsu Flag shika Nai Akuyaku Reijou ni Tensei shiteshimatta... X', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(139)
            { title: 'Kanojo mo Kanojo', url: '../src/paginas/todos-los-animes/2021/informacion/' },//(138)
            { title: 'Vanitas no Karte', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(137)
            { title: 'Bokutachi no Remake', url: '../src/paginas/todos-los-animes/2021/informacion/' },//(136)
            { title: 'Mahouka Koukou no Yuutousei', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(135)
            { title: 'Peach Boy Riverside', url: '../src/paginas/todos-los-animes/2021/informacion/' },//(134)
            { title: 'Higurashi no Naku Koro ni Sotsu', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(133)
            { title: 'Nanatsu no Taizai Movie 2: Hikari ni Norowareshi Mono-tachi', url: '../src/paginas/todos-los-animes/2021/informacion/' },//(132)
            { title: 'Wonder Egg Priority Special', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(131)
            { title: 'BanG Dream! Movie: Episode of Roselia - II: Song I Am.', url: '../src/paginas/todos-los-animes/2021/informacion/' },//(130)
            { title: 'Sonny Boy', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(129)
            { title: 'Scarlet Nexus', url: '../src/paginas/todos-los-animes/2021/informacion/' },//(128)
            { title: 'Shuumatsu no Valkyrie', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(127)
            { title: 'Sayonara Watashi no Cramer Movie: First Touch', url: '../src/paginas/todos-los-animes/2021/informacion/' },//(126)
            { title: 'Artiswitch', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(125)
            { title: 'Kaguya-sama wa Kokurasetai: Tensai-tachi no Renai Zunousen OVA', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(124)
            { title: 'Zhen Hun Jie: Bei Luo Shi Men Pian Part 2', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(123)
            { title: 'Fate/Grand Order: Shinsei Entaku Ryouiki Camelot 2 - Paladin; Agateram', url: '../src/paginas/todos-los-animes/2021/informacion/' },//(122)
            { title: 'Jaku-Chara Tomozaki-kun Specials', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(121)
            { title: 'Liang Bu Yi', url: '../src/paginas/todos-los-animes/2021/informacion/' },//(120)
            { title: 'Shiguang Dailiren', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(119)
            { title: 'Dungeon ni Deai wo Motomeru no wa Machigatteiru Darou ka III OVA', url: '../src/paginas/todos-los-animes/2021/informacion/' },//(118)
            { title: 'Luo Xiao Hei Zhan Ji: Zhongsheng Zhi Men', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(117)
            { title: 'BanG Dream! Movie: Episode of Roselia - I: Yakusoku', url: '../src/paginas/todos-los-animes/2021/informacion/' },//(116)
            { title: 'Mairimashita! Iruma-kun 2nd Season', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(115)
            { title: 'Cestvs: The Roman Fighter', url: '../src/paginas/todos-los-animes/2021/informacion/' },//(114)
            { title: 'Osananajimi ga Zettai ni Makenai Love Comedy', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(113)
            { title: 'Itazuraguma no Gloomy', url: '../src/paginas/todos-los-animes/2021/informacion/' },//(112)
            { title: 'Fumetsu no Anata e', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(111)
            { title: 'Tokyo Revengers', url: '../src/paginas/todos-los-animes/2021/informacion/' },//(110)
            { title: 'Ijiranaide, Nagatoro-san', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(109)
            { title: '86 EIGHTY SIX', url: '../src/paginas/todos-los-animes/2021/informacion/' },//(108)
            { title: 'Shadows House', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(107)
            { title: 'Bishounen Tanteidan', url: '../src/paginas/todos-los-animes/2021/informacion/' },//(106)
            { title: 'Battle Athletess Daiundoukai ReSTART!', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(105)
            { title: 'Mewkledreamy Mix!', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(104)
            { title: 'Chibi Revenger', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(103)
            { title: 'Blue Reflection Ray', url: '../src/paginas/todos-los-animes/2021/informacion/' },//(102)
            { title: 'Subarashiki Kono Sekai The Animation', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(101)
            { title: 'Slime Taoshite 300-nen, Shiranai Uchi ni Level Max ni Nattemashita', url: '../src/paginas/todos-los-animes/2021/informacion/' },//(100)
            { title: 'Bakuten!!', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(99)
            { title: 'Isekai Maou to Shoukan Shoujo no Dorei Majutsu Ω', url: '../src/paginas/todos-los-animes/2021/informacion/' },//(98)
            { title: 'SD Gundam World Heroes', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(97)
            { title: 'Fairy Ranmaru: Anata no Kokoro Otasuke Shimasu', url: '../src/paginas/todos-los-animes/2021/informacion/' },//(96)
            { title: 'Zombieland Saga: Revenge', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(95)
            { title: 'Kyuukyoku Shinka shita Full Dive RPG ga Genjitsu yori mo Kusoge Dattara', url: '../src/paginas/todos-los-animes/2021/informacion/' },//(94)
            { title: 'Super Cub', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(93)
            { title: 'Mini Dragon', url: '../src/paginas/todos-los-animes/2021/informacion/' },//(92)
            { title: 'Gokushufudou', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(91)
            { title: 'Fruits Basket: The Final', url: '../src/paginas/todos-los-animes/2021/informacion/' },//(90)
            { title: 'Odd Taxi', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(89)
            { title: 'Tensura Nikki: Tensei shitara Slime Datta Ken', url: '../src/paginas/todos-los-animes/2021/informacion/' },//(88)
            { title: 'Seijo no Maryoku wa Bannou Desu', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(87)
            { title: 'Seven Knights Revolution: Eiyuu no Keishousha', url: '../src/paginas/todos-los-animes/2021/informacion/' },//(86)
            { title: 'Hige wo Soru. Soshite Joshikousei wo Hirou', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(85)
            { title: 'Nomad: Megalo Box 2', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(84)
            { title: 'Dragon, Ie wo Kau', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(83)
            { title: 'Sayonara Watashi no Cramer', url: '../src/paginas/todos-los-animes/2021/informacion/' },//(82)
            { title: 'Sentouin, Hakenshimasu!', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(81)
            { title: 'Shakunetsu Kabaddi', url: '../src/paginas/todos-los-animes/2021/informacion/' },//(80)
            { title: 'Mashiro no Oto', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(79)
            { title: "Vivy: Fluorite Eye's Song", url: '../src/paginas/todos-los-animes/2021/informacion/' },//(78)
            { title: 'Yakunara Mug Cup mo', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(77)
            { title: 'SSSS.Dynazenon', url: '../src/paginas/todos-los-animes/2021/informacion/' },//(76)
            { title: 'Hetalia World★Stars', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(75)
            { title: 'Shaman King (2021)', url: '../src/paginas/todos-los-animes/2021/informacion/' },//(74)
            { title: 'Jouran: The Princess of Snow and Blood', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(73)
            { title: 'Koi to Yobu ni wa Kimochi Warui', url: '../src/paginas/todos-los-animes/2021/informacion/' },//(72)
            { title: 'Mars Red', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(71)
            { title: 'Edens Zero', url: '../src/paginas/todos-los-animes/2021/informacion/' },//(70)
            { title: 'Boku no Hero Academia 5th Season', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(69)
            { title: 'Godzilla: S.P', url: '../src/paginas/todos-los-animes/2021/informacion/' },//(68)
            { title: 'Home!', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(67)
            { title: 'Cardfight!! Vanguard: overDress', url: '../src/paginas/todos-los-animes/2021/informacion/' },//(66)
            { title: 'B: The Beginning - Succession', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(65)
            { title: 'Evangelion: 3.0+1.0 Thrice Upon a Time', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(64)
            { title: 'Ryuukyuu Timeline: Mirai Shoujo to Inishie no Ou', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(63)
            { title: 'Tropical-Rouge! Precure', url: '../src/paginas/todos-los-animes/2021/informacion/' },//(62)
            { title: 'Tenkuu Shinpan', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(61)
            { title: 'Maiko-san Chi no Makanai-san', url: '../src/paginas/todos-los-animes/2021/informacion/' },//(60)
            { title: 'Tian Guan Cifu Special', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(59)
            { title: 'Kimetsu Gakuen: Valentine-hen', url: '../src/paginas/todos-los-animes/2021/informacion/' },//(58)
            { title: 'Shin Tennis no Ouji-sama: Hyoutei vs. Rikkai - Game of Future', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(57)
            { title: 'Bishoujo Senshi Sailor Moon Eternal Movie 2', url: '../src/paginas/todos-los-animes/2021/informacion/' },//(56)
            { title: 'Princess Principal: Crown Handler Movie 1', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(55)
            { title: 'Majutsushi Orphen Hagure Tabi: Kimluck-hen', url: '../src/paginas/todos-los-animes/2021/informacion/' },//(54)
            { title: 'Planetarian: Snow Globe', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(53)
            { title: 'Wu Liuqi: Xuanwu Guo Pian', url: '../src/paginas/todos-los-animes/2021/informacion/' },//(52)
            { title: 'Dr. Stone: Stone Wars', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(51)
            { title: 'Wonder Egg Priority', url: '../src/paginas/todos-los-animes/2021/informacion/' },//(50)
            { title: 'Nanatsu no Taizai: Fundo no Shinpan', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(49)
            { title: 'Bungou Stray Dogs Wan!', url: '../src/paginas/todos-los-animes/2021/informacion/' },//(48)
            { title: 'Log Horizon: Entaku Houkai', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(47)
            { title: 'Kaifuku Jutsushi no Yarinaoshi', url: '../src/paginas/todos-los-animes/2021/informacion/' },//(46)
            { title: 'World Witches Hasshin Shimasu!', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(45)
            { title: 'Tensei shitara Slime Datta Ken 2nd Season', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(44)
            { title: 'Wave!!: Surfing Yappe!! (TV)', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(43)
            { title: 'Azur Lane: Bisoku Zenshin!', url: '../src/paginas/todos-los-animes/2021/informacion/' },//(42)
            { title: 'Mushoku Tensei: Isekai Ittara Honki Dasu', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(41)
            { title: 'Non Non Biyori Nonstop', url: '../src/paginas/todos-los-animes/2021/informacion/' },//(40)
            { title: 'Ex-Arm', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(39)
            { title: 'Yami Shibai 8', url: '../src/paginas/todos-los-animes/2021/informacion/' },//(38)
            { title: 'Shin Chuuka Ichiban! 2nd Season', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(37)
            { title: 'Hataraku Saibou Black (TV)', url: '../src/paginas/todos-los-animes/2021/informacion/' },//(36)
            { title: 'World Trigger 2nd Season', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(35)
            { title: 'Kai Byoui Ramune', url: '../src/paginas/todos-los-animes/2021/informacion/' },//(34)
            { title: 'Horimiya', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(33)
            { title: 'SK∞', url: '../src/paginas/todos-los-animes/2021/informacion/' },//(32)
            { title: 'Kemono Jihen', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(31)
            { title: 'Idoly Pride', url: '../src/paginas/todos-los-animes/2021/informacion/' },//(30)
            { title: 'Yatogame-chan Kansatsu Nikki Sansatsume', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(29)
            { title: 'Back Arrow', url: '../src/paginas/todos-los-animes/2021/informacion/' },//(28)
            { title: 'WIXOSS Diva(A)Live', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(27)
            { title: 'Ore dake Haireru Kakushi Dungeon', url: '../src/paginas/todos-los-animes/2021/informacion/' },//(26)
            { title: 'Project Scard: Praeter no Kizu', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(25)
            { title: 'Yakusoku no Neverland 2nd Season', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(24)
            { title: '2.43: Seiin Koukou Danshi Volley-bu', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(23)
            { title: '5-toubun no Hanayome ∬', url: '../src/paginas/todos-los-animes/2021/informacion/' },//(22)
            { title: 'Kumo Desu ga, Nani ka?', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(21)
            { title: 'Idolls!', url: '../src/paginas/todos-los-animes/2021/informacion/' },//(20)
            { title: 'Jaku-Chara Tomozaki-kun', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(19)
            { title: 'Bishoujo Senshi Sailor Moon Eternal Movie 1', url: '../src/paginas/todos-los-animes/2021/informacion/' },//(18)
            { title: 'Bishoujo Senshi Sailor Moon Eternal Movie 1', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(17)
            { title: 'Soukou Musume Senki', url: '../src/paginas/todos-los-animes/2021/informacion/' },//(16)
            { title: 'Abciee Shuugyou Nikki', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(15)
            { title: 'Beastars 2nd Season', url: '../src/paginas/todos-los-animes/2021/informacion/' },//(14)
            { title: 'Yuru Camp△ Season 2', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(13)
            { title: 'Tenchi Souzou Design-bu', url: '../src/paginas/todos-los-animes/2021/informacion/' },//(12)
            { title: 'Show by Rock!! Stars!!', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(11)
            { title: 'Hataraku Saibou!!', url: '../src/paginas/todos-los-animes/2021/informacion/' },//(10)
            { title: 'Re:Zero kara Hajimeru Isekai Seikatsu 2nd Season Part 2', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(9)
            { title: 'I★Chu: Halfway Through the Idol', url: '../src/paginas/todos-los-animes/2021/informacion/' },//(8)
            { title: 'Uma Musume: Pretty Derby Season 2', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(7)
            { title: 'Gekidol', url: '../src/paginas/todos-los-animes/2021/informacion/' },//(6)
            { title: 'Urasekai Picnic', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(5)
            { title: 'Tatoeba Last Dungeon Mae no Mura no Shounen ga Joban no Machi de Kurasu Youna Monogatari', url: '../src/paginas/todos-los-animes/2021/informacion/' },//(4)
            { title: 'Jimihen!!: Jimiko wo Kaechau Jun Isei Kouyuu!!', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(3)
            { title: 'Vlad Love', url: '../src/paginas/todos-los-animes/2021/informacion/' },//(2)
            { title: 'Seitokai Yakuindomo Movie 2', url: '../src/paginas/todos-los-animes/2021/informacion/'},//(1)EMPIEZA 2021-----------------------------------



            { title: 'Fate/Grand Carnival', url: '../src/paginas/todos-los-animes/2020/informacion/' },//(181)
            { title: 'Skate-Leading☆Stars', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(180)
            { title: 'Josee to Tora to Sakana-tachi', url: '../src/paginas/todos-los-animes/2020/informacion/' },//(179)
            { title: 'Yes ka No ka Hanbun ka', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(178)
            { title: 'Shingeki no Kyojin: The Final Season', url: '../src/paginas/todos-los-animes/2020/informacion/' },//(177)
            { title: 'Fate/Grand Order: Shinsei Entaku Ryouiki Camelot 1 - Wandering; Agateram', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(176)
            { title: 'Kimi wa Kanata', url: '../src/paginas/todos-los-animes/2020/informacion/' },//(175)
            { title: 'Grisaia: Phantom Trigger The Animation - Stargazer', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(174)
            { title: 'Hanhua Riji 2nd Season', url: '../src/paginas/todos-los-animes/2020/informacion/' },//(173)
            { title: 'Date A Bullet: Nightmare or Queen', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(172)
            { title: 'Dokyuu Hentai HxEros OVA', url: '../src/paginas/todos-los-animes/2020/informacion/' },//(171)
            { title: 'Tian Guan Cifu', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(170)
            { title: 'Toji no Miko: Kizamishi Issen no Tomoshibi OVA', url: '../src/paginas/todos-los-animes/2020/informacion/' },//(169)
            { title: 'D4DJ First Mix', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(168)
            { title: 'Kimetsu no Yaiba Movie: Mugen Ressha-hen', url: '../src/paginas/todos-los-animes/2020/informacion/' },//(167)
            { title: 'Dogeza de Tanondemita', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(166)
            { title: 'A3! Season Autumn & Winter', url: '../src/paginas/todos-los-animes/2020/informacion/' },//(165)
            { title: 'Osomatsu-san 3rd Season', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(164)
            { title: 'Magatsu Wahrheit: Zuerst', url: '../src/paginas/todos-los-animes/2020/informacion/' },//(163)
            { title: 'Yuukoku no Moriarty', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(162)
            { title: 'Taisou Zamurai', url: '../src/paginas/todos-los-animes/2020/informacion/' },//(161)
            { title: 'Kamisama ni Natta Hi', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(160)
            { title: 'Maesetsu!', url: '../src/paginas/todos-los-animes/2020/informacion/' },//(159)
            { title: 'Boukyaku Battery', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(158)
            { title: 'Gochuumon wa Usagi desu ka? Bloom', url: '../src/paginas/todos-los-animes/2020/informacion/' },//(157)
            { title: 'Adachi to Shimamura', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(156)
            { title: 'Strike Witches: Road to Berlin', url: '../src/paginas/todos-los-animes/2020/informacion/' },//(155)
            { title: 'Noblesse', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(154)
            { title: 'Akudama Drive', url: '../src/paginas/todos-los-animes/2020/informacion/' },//(153)
            { title: 'Guraburu!', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(152)
            { title: 'Kimi to Boku no Saigo no Senjou, Aruiwa Sekai ga Hajimaru Seisen', url: '../src/paginas/todos-los-animes/2020/informacion/' },//(151)
            { title: 'Tsukiuta. The Animation 2', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(150)
            { title: 'One Room Third Season', url: '../src/paginas/todos-los-animes/2020/informacion/' },//(149)
            { title: 'Maoujou de Oyasumi', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(148)
            { title: 'Ikebukuro West Gate Park', url: '../src/paginas/todos-los-animes/2020/informacion/' },//(147)
            { title: 'Golden Kamuy 3rd Season', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(146)
            { title: 'Mahouka Koukou no Rettousei: Raihousha-hen', url: '../src/paginas/todos-los-animes/2020/informacion/' },//(145)
            { title: 'Kami-tachi ni Hirowareta Otoko', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(144)
            { title: 'Munou na Nana', url: '../src/paginas/todos-los-animes/2020/informacion/' },//(143)
            { title: 'Iwa Kakeru!: Sport Climbing Girls', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(142)
            { title: 'Jujutsu Kaisen (TV)', url: '../src/paginas/todos-los-animes/2020/informacion/' },//(141)
            { title: "King's Raid: Ishi wo Tsugumono-tachi", url: '../src/paginas/todos-los-animes/2020/informacion/'},//(140)
            { title: 'Tonikaku Kawaii', url: '../src/paginas/todos-los-animes/2020/informacion/' },//(139)
            { title: 'Dungeon ni Deai wo Motomeru no wa Machigatteiru Darou ka III', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(138)
            { title: 'Rail Romanesque', url: '../src/paginas/todos-los-animes/2020/informacion/' },//(137)
            { title: 'Inu to Neko Docchi mo Katteru to Mainichi Tanoshii', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(136)
            { title: 'Hypnosis Mic: Division Rap Battle - Rhyme Anima', url: '../src/paginas/todos-los-animes/2020/informacion/' },//(135)
            { title: 'Hanyou no Yashahime: Sengoku Otogizoushi', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(134)
            { title: 'Love Live! Nijigasaki Gakuen School Idol Doukoukai', url: '../src/paginas/todos-los-animes/2019/informacion/' },//(133)
            { title: 'Senyoku no Sigrdrifa', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(132)
            { title: 'Dragon Quest: Dai no Daibouken (2020)', url: '../src/paginas/todos-los-animes/2020/informacion/' },//(131)
            { title: 'Assault Lily: Bouquet', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(130)
            { title: 'Burn the Witch', url: '../src/paginas/todos-los-animes/2020/informacion/' },//(129)
            { title: 'Majo no Tabitabi', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(128)
            { title: '100-man no Inochi no Ue ni Ore wa Tatteiru', url: '../src/paginas/todos-los-animes/2020/informacion/' },//(127)
            { title: 'Bem Movie: Become Human', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(126)
            { title: 'Higurashi no Naku Koro ni (2020)', url: '../src/paginas/todos-los-animes/2020/informacion/' },//(125)
            { title: 'Ochikobore Fruit Tart', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(124)
            { title: 'Kuma Kuma Kuma Bear', url: '../src/paginas/todos-los-animes/2020/informacion/' },//(123)
            { title: 'Omoi, Omoware, Furi, Furare', url: '../src/paginas/todos-los-animes/2020/informacion/' },//(122)
            { title: 'Violet Evergarden Movie', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(121)
            { title: 'Umibe no Etranger', url: '../src/paginas/todos-los-animes/2020/informacion/' },//(120)
            { title: 'Ore wo Suki nano wa Omae dake ka yo: Oretachi no Game Set', url: '../src/paginas/todos-los-animes/2020/informacion/' },//(119)
            { title: 'Given Movie', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(118)
            { title: 'Boku no Hero Academia: Ikinokore! Kesshi no Survival Kunren', url: '../src/paginas/todos-los-animes/2020/informacion/' },//(117)
            { title: "Fate/stay night Movie: Heaven's Feel - III. Spring Song", url: '../src/paginas/todos-los-animes/2020/informacion/' },//(116)
            { title: 'Date A Bullet: Dead or Bullet', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(115)
            { title: 'Koi to Producer: EVOL×LOVE', url: '../src/paginas/todos-los-animes/2020/informacion/' },//(114)
            { title: 'Gibiate', url: '../src/paginas/todos-los-animes/2020/informacion/' },//(113)
            { title: 'Monster Musume no Oishasan', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(112)
            { title: 'Sword Art Online: Alicization - War of Underworld 2nd Season', url: '../src/paginas/todos-los-animes/2020/informacion/' },//(111)
            { title: 'Ninja Collection', url: '../src/paginas/todos-los-animes/2020/informacion/' },//(110)
            { title: 'Kanojo, Okarishimasu', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(109)
            { title: 'No Guns Life 2nd Season', url: '../src/paginas/todos-los-animes/2020/informacion/' },//(108)
            { title: 'Yahari Ore no Seishun Love Comedy wa Machigatteiru. Kan', url: '../src/paginas/todos-los-animes/2020/informacion/' },//(107)
            { title: 'Uzaki-chan wa Asobitai!', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(106)
            { title: 'Deca-Dence', url: '../src/paginas/todos-los-animes/2020/informacion/' },//(105)
            { title: 'Re:Zero kara Hajimeru Isekai Seikatsu 2nd Season', url: '../src/paginas/todos-los-animes/2020/informacion/' },//(104)
            { title: 'Umayon', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(103)
            { title: 'Muhyo to Rouji no Mahouritsu Soudan Jimusho 2nd Season', url: '../src/paginas/todos-los-animes/2020/informacion/' },//(102)
            { title: 'The God of High School', url: '../src/paginas/todos-los-animes/2020/informacion/' },//(101)
            { title: 'Dokyuu Hentai HxEros', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(100)
            { title: 'Enen no Shouboutai: Ni no Shou', url: '../src/paginas/todos-los-animes/2020/informacion/' },//(99)
            { title: 'Lapis Re:LiGHTs', url: '../src/paginas/todos-los-animes/2020/informacion/' },//(98)
            { title: 'Maou Gakuin no Futekigousha', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(97)
            { title: 'Peter Grill to Kenja no Jikan', url: '../src/paginas/todos-los-animes/2020/informacion/' },//(96)
            { title: 'Murenase! Seton Gakuen Special', url: '../src/paginas/todos-los-animes/2020/informacion/' },//(95)
            { title: 'Keishichou Tokumubu Tokushu Kyouakuhan Taisakushitsu Dainanaka: Tokunana OVA', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(94)
            { title: 'Baki 2nd Season', url: '../src/paginas/todos-los-animes/2020/informacion/' },//(93)
            { title: 'Great Pretender', url: '../src/paginas/todos-los-animes/2020/informacion/' },//(92)
            { title: 'Quanzhi Fashi IV', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(91)
            { title: 'Olympia Kyklos', url: '../src/paginas/todos-los-animes/2020/informacion/' },//(90)
            { title: 'Kitsutsuki Tanteidokoro', url: '../src/paginas/todos-los-animes/2020/informacion/' },//(89)
            { title: 'Shokugeki no Souma: Gou no Sara', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(88)
            { title: 'Kaguya-sama wa Kokurasetai?: Tensai-tachi no Renai Zunousen season 2', url: '../src/paginas/todos-los-animes/2020/informacion/' },//(87)
            { title: 'Fugou Keiji: Balance:Unlimited', url: '../src/paginas/todos-los-animes/2020/informacion/' },//(86)
            { title: 'Zashiki Warashi no Tatami-chan', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(85)
            { title: 'Strike the Blood IV', url: '../src/paginas/todos-los-animes/2020/informacion/' },//(84)
            { title: 'Princess Connect! Re:Dive', url: '../src/paginas/todos-los-animes/2020/informacion/' },//(83)
            { title: 'Fruits Basket 2nd Season', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(82)
            { title: 'Shadowverse (TV)', url: '../src/paginas/todos-los-animes/2020/informacion/' },//(81)
            { title: 'Houkago Teibou Nisshi', url: '../src/paginas/todos-los-animes/2020/informacion/' },//(80)
            { title: 'Ore no Yubi de Midarero.: Heitengo Futarikiri no Salon de...', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(79)
            { title: 'Shironeko Project: Zero Chronicle', url: '../src/paginas/todos-los-animes/2020/informacion/' },//(78)
            { title: 'Digimon Adventure 2020', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(77)
            { title: 'Shachou, Battle no Jikan Desu!', url: '../src/paginas/todos-los-animes/2020/informacion/' },//(76)
            { title: 'Gleipnir', url: '../src/paginas/todos-los-animes/2020/informacion/' },//(75)
            { title: 'Kingdom 3rd Season', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(74)
            { title: 'Tsugu Tsugumomo', url: '../src/paginas/todos-los-animes/2020/informacion/' },//(73)
            { title: 'Mewkledreamy', url: '../src/paginas/todos-los-animes/2020/informacion/' },//(72)
            { title: "Jashin-chan Dropkick'", url: '../src/paginas/todos-los-animes/2020/informacion/'},//(71)
            { title: 'Major 2nd (TV) 2nd Season', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(70)
            { title: 'Arte', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(69)
            { title: 'Otome Game no Hametsu Flag shika Nai Akuyaku Reijou ni Tensei shiteshimatta...', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(68)
            { title: 'Yesterday wo Utatte', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(67)
            { title: 'Gal to Kyouryuu', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(66)
            { title: 'Yu☆Gi☆Oh!: Sevens', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(65)
            { title: 'Shin Sakura Taisen the Animation', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(64)
            { title: 'Listeners', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(63)
            { title: 'Bungou to Alchemist: Shinpan no Haguruma', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(62)
            { title: 'Asateer: Mirai no Mukashi Banashi', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(61)
            { title: 'Hachi-nan tte, Sore wa Nai deshou!', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(60)
            { title: 'Kakushigoto (TV)', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(59)
            { title: 'Kami no Tou', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(58)
            { title: 'Appare-Ranman!', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(57)
            { title: 'Granblue Fantasy The Animation Season 2: Djeeta-hen', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(56)
            { title: 'Psycho-Pass 3: First Inspector', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(55)
            { title: 'Tsuujou Kougeki ga Zentai Kougeki de Ni-kai Kougeki no Okaasan wa Suki Desu ka? OVA', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(54)
            { title: 'Chuubyou Gekihatsu Boy Special', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(53)
            { title: '7 Seeds 2nd Season', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(52)
            { title: 'BNA', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(51)
            { title: 'Tamayomi', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(50)
            { title: 'Nami yo Kiitekure', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(49)
            { title: "Goblin Slayer: Goblin's Crown", url: '../src/paginas/todos-los-animes/2020/informacion/'},//(48)
            { title: 'Dungeon ni Deai wo Motomeru no wa Machigatteiru Darou ka II OVA', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(47)
            { title: 'Strike the Blood: Kieta Seisou-hen', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(46)
            { title: 'The Daily Life of the Immortal King', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(45)
            { title: 'Made in Abyss Movie 3: Fukaki Tamashii no Reimei', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(44)
            { title: 'Isekai Quartet 2nd Season', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(43)
            { title: 'A3! Season Spring & Summer', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(42)
            { title: 'ARP Backstage Pass', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(41)
            { title: 'Dorohedoro', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(40)
            { title: 'Boku no Tonari ni Ankoku Hakaishin ga Imasu', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(39)
            { title: 'Ishuzoku Reviewers', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(38)
            { title: '22/7', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(37)
            { title: 'Toaru Kagaku no Railgun T', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(36)
            { title: 'Oda Cinnamon Nobunaga', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(35)
            { title: 'Haikyuu!!: To the Top', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(34)
            { title: 'Runway de Waratte', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(33)
            { title: 'Rikei ga Koi ni Ochita no de Shoumei shitemita', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(32)
            { title: 'Haikyuu!!: Riku vs. Kuu', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(31)
            { title: 'Nekopara', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(30)
            { title: 'Show By Rock!! Mashumairesh!!', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(29)
            { title: 'Hatena☆Illusion', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(28)
            { title: 'Infinite Dendrogram', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(27)
            { title: 'Oshi ga Budoukan Ittekuretara Shinu', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(26)
            { title: 'Housekishou Richard-shi no Nazo Kantei', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(25)
            { title: 'Uchi Tama?! Uchi no Tama Shirimasen ka?', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(24)
            { title: 'Jibaku Shounen Hanako-kun', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(23)
            { title: 'Kyochuu Rettou Movie', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(22)
            { title: 'Jie Yao', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(21)
            { title: 'number24', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(20)
            { title: 'Breakers', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(19)
            { title: 'BanG Dream! 3rd Season', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(18)
            { title: 'Overflow', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(17)
            { title: 'Itai no wa Iya nano de Bougyoryoku ni Kyokufuri Shitai to Omoimasu', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(16)
            { title: 'Majutsushi Orphen Hagure Tabi', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(15)
            { title: 'Kyokou Suiri', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(14)
            { title: 'Heya Camp', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(13)
            { title: 'Pet', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(12)
            { title: 'IDOLiSH7: Second Beat!', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(11)
            { title: 'Murenase! Seton Gakuen', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(10)
            { title: 'ID:Invaded', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(9)
            { title: 'Rebirth', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(8)
            { title: 'Eizouken ni wa Te wo Dasu na!', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(7)
            { title: 'Magia Record: Mahou Shoujo Madoka☆Magica Gaiden (TV)', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(6)
            { title: 'Yatogame-chan Kansatsu Nikki Nisatsume', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(5)
            { title: 'Koisuru Asteroid', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(4)
            { title: "Darwin's Game", url: '../src/paginas/todos-los-animes/2020/informacion/'},//(3)
            { title: 'Somali to Mori no Kamisama', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(2)
            { title: 'Re:Zero kara Hajimeru Isekai Seikatsu: Shin Henshuu-ban', url: '../src/paginas/todos-los-animes/2020/informacion/'},//(1)EMPIEZA 2021-----------------------------------
            


            { title: 'Fate/Grand Order: Moonlight/Lostroom', url: '../src/paginas/todos-los-animes/2019/informacion/'},
            { title: 'Saiki Kusuo no Ψ-nan: Ψ-shidou-hen', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Zhen Hun Jie: Bei Luo Shi Men Pian Part 1', url: '../src/paginas/todos-los-animes/2019/informacion/'},
            { title: 'Plunderer', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Kono Yo no Hate de Koi wo Utau Shoujo YU-NO Special', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Arifureta Shokugyou de Sekai Saikyou Specials', url: '../src/paginas/todos-los-animes/2019/informacion/'},
            { title: 'Boku no Hero Academia the Movie 2: Heroes:Rising', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Bokura no Nanokakan Sensou', url: '../src/paginas/todos-los-animes/2019/informacion/'},
            { title: 'Fragtime', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Pokemon (2019)', url: '../src/paginas/todos-los-animes/2019/informacion/'},
            { title: 'Re:Zero kara Hajimeru Isekai Seikatsu - Hyouketsu no Kizuna', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Bokutachi wa Benkyou ga Dekinai: Nagisa ni Usemono Arite Senjin wa Enzen to [X] Suru', url: '../src/paginas/todos-los-animes/2019/informacion/'},
            { title: 'Kengan Ashura Part 2', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Saenai Heroine no Sodatekata Fine', url: '../src/paginas/todos-los-animes/2019/informacion/'},
            { title: 'High Score Girl II', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Psycho-Pass 3', url: '../src/paginas/todos-los-animes/2019/informacion/'},
            { title: 'Chihayafuru 3', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Human Lost: Ningen Shikkaku', url: '../src/paginas/todos-los-animes/2019/informacion/'},
            { title: 'Wu Liuqi: Zui Qiang Fa Xing Shi', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'One Punch Man 2nd Season Specials', url: '../src/paginas/todos-los-animes/2019/informacion/'},
            { title: 'Rifle Is Beautiful', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Boku no Hero Academia 4th Season', url: '../src/paginas/todos-los-animes/2019/informacion/'},
            { title: 'Sword Art Online: Alicization - War of Underworld', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Kabukichou Sherlock', url: '../src/paginas/todos-los-animes/2019/informacion/'},
            { title: 'Shokugeki no Souma: Shin no Sara', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Shin Chuuka Ichiban!', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Sora no Method: Mou Hitotsu no Negai', url: '../src/paginas/todos-los-animes/2019/informacion/'},
            { title: 'Gundam Build Divers Re:Rise', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Assassins Pride', url: '../src/paginas/todos-los-animes/2019/informacion/'},
            { title: 'No Guns Life', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Mugen no Juunin: Immortal', url: '../src/paginas/todos-los-animes/2019/informacion/'},
            { title: 'Hoshiai no Sora', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Nanatsu no Taizai: Kamigami no Gekirin', url: '../src/paginas/todos-los-animes/2019/informacion/'},
            { title: 'Beastars', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Z/X: Code Reunion', url: '../src/paginas/todos-los-animes/2019/informacion/'},
            { title: 'Kandagawa Jet Girls', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Choujin Koukousei-tachi wa Isekai demo Yoyuu de Ikinuku you desu!', url: '../src/paginas/todos-los-animes/2019/informacion/'},
            { title: 'Watashi, Nouryoku wa Heikinchi de tte Itta yo ne!', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Stand My Heroes: Piece of Truth', url: '../src/paginas/todos-los-animes/2019/informacion/'},
            { title: 'Phantasy Star Online 2: Episode Oracle', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Keishichou Tokumubu Tokushu Kyouakuhan Taisakushitsu Dainanaka: Tokunana', url: '../src/paginas/todos-los-animes/2019/informacion/'},
            { title: 'Psycho-Pass: Sinners of the System Case.1 - Tsumi to Bachi', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Fairy Gone 2nd Season', url: '../src/paginas/todos-los-animes/2019/informacion/'},
            { title: 'Actors: Songs Connection', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Africa no Salaryman (TV)', url: '../src/paginas/todos-los-animes/2019/informacion/'},
            { title: 'Babylon', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Mairimashita! Iruma-kun', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Val x Love', url: '../src/paginas/todos-los-animes/2019/informacion/'},
            { title: 'Bokutachi wa Benkyou ga Dekinai 2', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Kono Oto Tomare! 2nd Season', url: '../src/paginas/todos-los-animes/2019/informacion/'},
            { title: 'Null Peta', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Chuubyou Gekihatsu Boy', url: '../src/paginas/todos-los-animes/2019/informacion/'},
            { title: 'Granblue Fantasy The Animation Season 2', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Azur Lane', url: '../src/paginas/todos-los-animes/2019/informacion/'},
            { title: 'Ahiru no Sora', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Radiant 2nd Season', url: '../src/paginas/todos-los-animes/2019/informacion/'},
            { title: 'Urashimasakatasen no Nichijou', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Honzuki no Gekokujou: Shisho ni Naru Tame ni wa Shudan wo Erandeiraremasen', url: '../src/paginas/todos-los-animes/2019/informacion/'},
            { title: 'Ore wo Suki nano wa Omae dake ka yo', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Shinchou Yuusha: Kono Yuusha ga Ore Tueee Kuse ni Shinchou Sugiru', url: '../src/paginas/todos-los-animes/2019/informacion/'},
            { title: 'Hataage! Kemono Michi', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Houkago Saikoro Club', url: '../src/paginas/todos-los-animes/2019/informacion/'},
            { title: 'Ginga Eiyuu Densetsu: Die Neue These - Seiran 1', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Hello World', url: '../src/paginas/todos-los-animes/2019/informacion/'},
            { title: 'One Piece Movie 14: Stampede', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Another World', url: '../src/paginas/todos-los-animes/2019/informacion/'},
            { title: 'Zenonzard: The Animation', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Luo Xiao Hei Zhan Ji (Movie)', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Violet Evergarden Gaiden: Eien to Jidou Shuki Ningyou', url: '../src/paginas/todos-los-animes/2019/informacion/'},
            { title: 'Fate/Grand Order: Zettai Majuu Sensen Babylonia', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Kono Subarashii Sekai ni Shukufuku wo!: Kurenai Densetsu', url: '../src/paginas/todos-los-animes/2019/informacion/'},
            { title: 'Quanzhi Gaoshou zhi Dianfeng Rongyao', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Fate/Grand Order: Zettai Majuu Sensen Babylonia - Initium Iter', url: '../src/paginas/todos-los-animes/2019/informacion/'},
            { title: 'Mo Dao Zu Shi: Xian Yun Pian', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Business Fish', url: '../src/paginas/todos-los-animes/2019/informacion/'},
            { title: 'Try Knights', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Kengan Ashura', url: '../src/paginas/todos-los-animes/2019/informacion/'},
            { title: 'Hanhua Riji', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Tenki no Ko', url: '../src/paginas/todos-los-animes/2019/informacion/'},
            { title: 'Bem', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Fate/kaleid liner Prisma☆Illya: Prisma☆Phantasm', url: '../src/paginas/todos-los-animes/2019/informacion/'},
            { title: 'Dungeon ni Deai wo Motomeru no wa Machigatteiru Darou ka II', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Tsuujou Kougeki ga Zentai Kougeki de Ni-kai Kougeki no Okaasan wa Suki Desu ka?', url: '../src/paginas/todos-los-animes/2019/informacion/'},
            { title: 'Machikado Mazoku', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Given', url: '../src/paginas/todos-los-animes/2019/informacion/'},
            { title: 'Toaru Kagaku no Accelerator', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Isekai Cheat Magician', url: '../src/paginas/todos-los-animes/2019/informacion/'},
            { title: 'Majimoji Rurumo: Kanketsu-hen', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Kawaikereba Hentai demo Suki ni Natte Kuremasu ka?', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Kochouki: Wakaki Nobunaga', url: '../src/paginas/todos-los-animes/2019/informacion/'},
            { title: 'Arifureta Shokugyou de Sekai Saikyou', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Cop Craft', url: '../src/paginas/todos-los-animes/2019/informacion/'},
            { title: 'Yubisaki kara no Honki no Netsujou: Osananajimi wa Shouboushi', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Tensei shitara Slime Datta Ken OVA', url: '../src/paginas/todos-los-animes/2019/informacion/'},
            { title: 'Lord El-Melloi II Sei no Jikenbo: Rail Zeppelin Grace Note', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Senki Zesshou Symphogear XV', url: '../src/paginas/todos-los-animes/2019/informacion/'},
            { title: 'Hakata Mentai! Pirikarako-chan', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Nakanohito Genome [Jikkyouchuu]', url: '../src/paginas/todos-los-animes/2019/informacion/'},
            { title: 'Vinland Saga', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Re:Stage! Dream Days♪', url: '../src/paginas/todos-los-animes/2019/informacion/'},
            { title: 'Ensemble Stars!', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Karakai Jouzu no Takagi-san 2', url: '../src/paginas/todos-los-animes/2019/informacion/'},
            { title: 'Yami Shibai 7', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Araburu Kisetsu no Otome-domo yo', url: '../src/paginas/todos-los-animes/2019/informacion/'},
            { title: 'Dr. Stone', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Joshikousei no Mudazukai', url: '../src/paginas/todos-los-animes/2019/informacion/'},
            { title: 'Granbelm', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Enen no Shouboutai', url: '../src/paginas/todos-los-animes/2019/informacion/'},
            { title: 'Uchi no Ko no Tame naraba, Ore wa Moshikashitara Maou mo Taoseru kamo Shirena', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Kanata no Astra', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Maou-sama, Retry!', url: '../src/paginas/todos-los-animes/2019/informacion/'},
            { title: 'Dumbbell Nan Kilo Moteru?', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Tejina-senpai', url: '../src/paginas/todos-los-animes/2019/informacion/'},
            { title: 'Katsute Kami Datta Kemono-tachi e', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Starmyu 3rd Season', url: '../src/paginas/todos-los-animes/2019/informacion/'},
            { title: 'Sounan Desu ka?', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: '7 Seeds', url: '../src/paginas/todos-los-animes/2019/informacion/'},
            { title: 'Cencoroll Connect', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Hakubo', url: '../src/paginas/todos-los-animes/2019/informacion/'},
            { title: 'Kyochuu Rettou', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Seishun Buta Yarou wa Yumemiru Shoujo no Yume wo Minai', url: '../src/paginas/todos-los-animes/2019/informacion/'},
            { title: "Fate/stay night Movie: Heaven's Feel - II. Lost Butterfly", url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Love Live! Sunshine!! The School Idol Movie: Over the Rainbow', url: '../src/paginas/todos-los-animes/2019/informacion/'},
            { title: 'Shingeki no Kyojin Season 3 Part 2', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Promare', url: '../src/paginas/todos-los-animes/2019/informacion/'},
            { title: 'Miru Tights', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Koutetsujou no Kabaneri Movie 3: Unato Kessen', url: '../src/paginas/todos-los-animes/2019/informacion/'},
            { title: 'Tsurune: Kazemai Koukou Kyuudoubu - Yabai', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Wotaku ni Koi wa Muzukashii: Youth', url: '../src/paginas/todos-los-animes/2019/informacion/'},
            { title: 'MOBILE SUIT GUNDAM THE ORIGIN Advent of the Red Comet', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Birthday Wonderland', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'King of Prism: Shiny Seven Stars', url: '../src/paginas/todos-los-animes/2019/informacion/'},
            { title: 'Sarazanmai', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Bungou Stray Dogs 3rd Season', url: '../src/paginas/todos-los-animes/2019/informacion/'},
            { title: 'Carole & Tuesday', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Kenja no Mago', url: '../src/paginas/todos-los-animes/2019/informacion/'},
            { title: 'Sewayaki Kitsune no Senko-san', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Isekai Quartet', url: '../src/paginas/todos-los-animes/2019/informacion/'},
            { title: 'Strike Witches: 501 Butai Hasshin Shimasu!', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'One Punch Man 2nd Season', url: '../src/paginas/todos-los-animes/2019/informacion/'},
            { title: 'Mayonaka no Occult Koumuin', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Fairy Gone', url: '../src/paginas/todos-los-animes/2019/informacion/'},
            { title: 'Nande Koko ni Sensei ga!?', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Araiya-san!: Ore to Aitsu ga Onnayu de!?', url: '../src/paginas/todos-los-animes/2019/informacion/'},
            { title: 'Gunjou no Magmel', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Hachigatsu no Cinderella Nine', url: '../src/paginas/todos-los-animes/2019/informacion/'},
            { title: 'Shoumetsu Toshi', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Yatogame-chan Kansatsu Nikki', url: '../src/paginas/todos-los-animes/2019/informacion/'},
            { title: 'Namu Amida Butsu!: Rendai Utena', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'RobiHachi', url: '../src/paginas/todos-los-animes/2019/informacion/'},
            { title: 'Bokutachi wa Benkyou ga Dekinai', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Joshikausei', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Nobunaga-sensei no Osanazuma', url: '../src/paginas/todos-los-animes/2019/informacion/'},
            { title: 'Kimetsu no Yaiba', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Chou Kadou Girl ⅙: Amazing Stranger', url: '../src/paginas/todos-los-animes/2019/informacion/'},
            { title: 'Mix: Meisei Story', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Kono Oto Tomare!', url: '../src/paginas/todos-los-animes/2019/informacion/'},
            { title: 'Bakumatsu: Crisis', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Fruits Basket (2019)', url: '../src/paginas/todos-los-animes/2019/informacion/'},
            { title: 'Midara na Ao-chan wa Benkyou ga Dekinai', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Hitoribocchi no Marumaru Seikatsu', url: '../src/paginas/todos-los-animes/2019/informacion/'},
            { title: 'Senryuu Shoujo', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Hangyakusei Million Arthur 2nd Season', url: '../src/paginas/todos-los-animes/2019/informacion/'},
            { title: 'Diamond no Ace: Act II', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Kono Yo no Hate de Koi wo Utau Shoujo YU-NO', url: '../src/paginas/todos-los-animes/2019/informacion/'},
            { title: 'Cinderella Girls Gekijou: Climax Season', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Trinity Seven Movie 2: Tenkuu Toshokan to Shinku no Maou', url: '../src/paginas/todos-los-animes/2019/informacion/'},
            { title: 'High Score Girl: Extra Stage', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Grisaia: Phantom Trigger The Animation', url: '../src/paginas/todos-los-animes/2019/informacion/'},
            { title: 'Psycho-Pass: Sinners of the System Case.3 - Onshuu no Kanata ni', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Code Geass: Fukkatsu no Lelouch', url: '../src/paginas/todos-los-animes/2019/informacion/'},
            { title: 'Dungeon ni Deai wo Motomeru no wa Machigatteiru Darou ka Movie: Orion no Ya', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Psycho-Pass: Sinners of the System Case.2 - First Guardian', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Fight League: Gear Gadget Generators', url: '../src/paginas/todos-los-animes/2019/informacion/'},
            { title: 'Oushitsu Kyoushi Heine Movie', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Piano no Mori (TV) 2nd Season', url: '../src/paginas/todos-los-animes/2019/informacion/'},
            { title: 'Youjo Senki Movie: Manner Eizou', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Wei, Kanjian Erduo La! 2', url: '../src/paginas/todos-los-animes/2019/informacion/'},
            { title: 'Kemono Friends 2', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Koi to Uso OVA', url: '../src/paginas/todos-los-animes/2019/informacion/'},
            { title: 'Virtual-san wa Miteiru', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Eromanga-sensei OVA', url: '../src/paginas/todos-los-animes/2019/informacion/'},
            { title: 'Kouya no Kotobuki Hikoutai', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Kaguya-sama wa Kokurasetai: Tensai-tachi no Renai Zunousen', url: '../src/paginas/todos-los-animes/2019/informacion/'},
            { title: 'Result Endro~!', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Bermuda Triangle: Colorful Pastrale', url: '../src/paginas/todos-los-animes/2019/informacion/'},
            { title: 'Date A Live Ⅲ', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Mahou Shoujo Tokushusen Asuka', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Domestic na Kanojo', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Grimms Notes The Animation', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Girly Air Force', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Gotoubun no Hanayome', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Tate no Yuusha no Nariagari', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Yakusoku no Neverland', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Meiji Tokyo Renka', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Doukyonin wa Hiza, Tokidoki, Atama no Ue', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Watashi ni Tenshi ga Maiorita!', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Kakegurui××', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Ame-iro Cocoa: Side G', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Rinshi!! Ekoda-chan', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Pastel Memories', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Circlet Princess', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: '3D Kanojo: Real Girl 2nd Season', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Mob Psycho 100 II', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Papa datte, Shitai', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Dororo', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'BanG Dream! 2nd Season', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Ueno-san wa Bukiyou', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'B-Project: Zecchou*Emotion', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Fukigen na Mononokean Tsuzuki', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: "W'z", url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Mini Toji', url: '../src/paginas/todos-los-animes/2019/informacion/' },
            { title: 'Boogiepop wa Warawanai (2019)', url: '../src/paginas/todos-los-animes/2019/informacion/' },//(4)
            { title: 'Egao no Daika', url: '../src/paginas/todos-los-animes/2019/informacion/' },//(3)
            { title: 'Ikkitousen: Western Wolves', url: '../src/paginas/todos-los-animes/2019/informacion/' },//(2)
            { title: 'Nanatsu no Taizai Movie: Tenkuu no Torawarebito', url: '../src/paginas/todos-los-animes/2019/informacion/' },//(1) AQUI EMPIEZA EL 2019



            { title: 'Persona 5 the Animation: Dark Sun', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Meng Qi Shi Shen', url: '../src/paginas/todos-los-animes/2018/informacion/'},
            { title: 'Strike the Blood III', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Shingeki no Bahamut Manaria Friends', url: '../src/paginas/todos-los-animes/2018/informacion/'},
            { title: 'Uma Musume: Pretty Derby - BNW no Chikai', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Saint Seiya: Saintia Shou', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Karakuri Circus', url: '../src/paginas/todos-los-animes/2018/informacion/'},
            { title: 'Hangyakusei Million Arthur', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Tsurune: Kazemai Koukou Kyuudoubu', url: '../src/paginas/todos-los-animes/2018/informacion/'},
            { title: 'Youkoso Japari Park', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Kitsune no Koe', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Senran Kagura Shinovi Master: Tokyo Youma-hen', url: '../src/paginas/todos-los-animes/2018/informacion/'},
            { title: 'Quanzhi Fashi III', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Ore ga Suki nano wa Imouto dakedo Imouto ja Nai', url: '../src/paginas/todos-los-animes/2018/informacion/'},
            { title: 'Merc Storia: Mukiryoku no Shounen to Bin no Naka no Shoujo', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Conception', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Beelzebub-jou no Okinimesu mama', url: '../src/paginas/todos-los-animes/2018/informacion/'},
            { title: 'The iDOLM@STER SideM: Wake Atte Mini!', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Tokyo Ghoul:re 2nd Season', url: '../src/paginas/todos-los-animes/2018/informacion/'},
            { title: 'Re:Zero kara Hajimeru Isekai Seikatsu: Memory Snow', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Mahou Shoujo Lyrical Nanoha: Detonation', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Golden Kamuy 2nd Season', url: '../src/paginas/todos-los-animes/2018/informacion/'},
            { title: 'Mahou Shoujo Lyrical Nanoha: Reflection', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Zoku Owarimonogatari', url: '../src/paginas/todos-los-animes/2018/informacion/'},
            { title: 'Anima Yell!', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Ulysses: Jehanne Darc to Renkin no Kishi', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Gaikotsu Shotenin Honda-san', url: '../src/paginas/todos-los-animes/2018/informacion/'},
            { title: 'Himote House', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Gyakuten Saiban: Sono "Shinjitsu", Igi Ari! Season 2', url: '../src/paginas/todos-los-animes/2018/informacion/'},
            { title: 'Radiant', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Goblin Slayer', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Sword Art Online: Alicization', url: '../src/paginas/todos-los-animes/2018/informacion/'},
            { title: 'Fairy Tail: Final Series', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Irozuku Sekai no Ashita kara', url: '../src/paginas/todos-los-animes/2018/informacion/'},
            { title: 'Tonari no Kyuuketsuki-san', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Toaru Majutsu no Index III', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Hinomaruzumou', url: '../src/paginas/todos-los-animes/2018/informacion/'},
            { title: 'Uchi no Maid ga Uzasugiru!', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Dakaretai Otoko 1-i ni Odosarete Imasu', url: '../src/paginas/todos-los-animes/2018/informacion/'},
            { title: 'JoJo no Kimyou na Bouken: Ougon no Kaze', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Gurazeni: Season 2', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Kishuku Gakkou no Juliet', url: '../src/paginas/todos-los-animes/2018/informacion/'},
            { title: 'Zombieland Saga', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Bakumatsu', url: '../src/paginas/todos-los-animes/2018/informacion/'},
            { title: 'Kaze ga Tsuyoku Fuiteiru', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Sora to Umi no Aida', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Seishun Buta Yarou wa Bunny Girl Senpai no Yume wo Minai', url: '../src/paginas/todos-los-animes/2018/informacion/'},
            { title: 'Hora Mimi ga Mieteru yo', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Tensei shitara Slime Datta Ken', url: '../src/paginas/todos-los-animes/2018/informacion/'},
            { title: 'Ken En Ken: Aoki Kagayaki', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Souten no Ken: Regenesis 2nd Season', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Jingai-san no Yome', url: '../src/paginas/todos-los-animes/2018/informacion/'},
            { title: 'Akanesasu Shoujo', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Double Decker! Doug & Kirill', url: '../src/paginas/todos-los-animes/2018/informacion/'},
            { title: 'Natsume Yuujinchou Movie: Utsusemi ni Musubu', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'RErideD: Tokigoe no Derrida', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Yagate Kimi ni Naru', url: '../src/paginas/todos-los-animes/2018/informacion/'},
            { title: 'Kimi no Suizou wo Tabetai', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Xiao Lu He Xiao Lan', url: '../src/paginas/todos-los-animes/2018/informacion/'},
            { title: 'Non Non Biyori Movie: Vacation', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Aragne no Mushikago', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Piano no Mori (TV)', url: '../src/paginas/todos-los-animes/2018/informacion/'},
            { title: 'Devils Line: Anytime Anywhere', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Na Bbeun Sang Sa', url: '../src/paginas/todos-los-animes/2018/informacion/'},
            { title: 'Muhyo to Rouji no Mahouritsu Soudan Jimusho', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Boku no Hero Academia the Movie: Futari no Hero', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Cike Wu Liuqi Fanwai', url: '../src/paginas/todos-los-animes/2018/informacion/'},
            { title: 'Masamune-kun no Revenge OVA', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Shingeki no Kyojin Season 3', url: '../src/paginas/todos-los-animes/2018/informacion/'},
            { title: 'Mirai no Mirai', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Yuragi-sou no Yuuna-san', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Happy Sugar Life', url: '../src/paginas/todos-los-animes/2018/informacion/'},
            { title: 'Grand Blue', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'High Score Girl', url: '../src/paginas/todos-los-animes/2018/informacion/'},
            { title: 'Lord of Vermilion: Guren no Ou', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Free!: Dive to the Future', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Angolmois: Genkou Kassenki', url: '../src/paginas/todos-los-animes/2018/informacion/'},
            { title: 'Overlord III', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Phantom in the Twilight', url: '../src/paginas/todos-los-animes/2018/informacion/'},
            { title: 'Kyoto Teramachi Sanjou no Holmes', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Mo Dao Zu Shi', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Gintama.: Shirogane no Tamashii-hen 2', url: '../src/paginas/todos-los-animes/2018/informacion/'},
            { title: 'Planet With', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Hataraku Saibou (TV)', url: '../src/paginas/todos-los-animes/2018/informacion/'},
            { title: 'Hyakuren no Haou to Seiyaku no Valkyria', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Ongaku Shoujo (TV)', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Yami Shibai 6', url: '../src/paginas/todos-los-animes/2018/informacion/'},
            { title: 'Asobi Asobase', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Satsuriku no Tenshi', url: '../src/paginas/todos-los-animes/2018/informacion/'},
            { title: 'Harukana Receive', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Chio-chan no Tsuugakuro', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Isekai Maou to Shoukan Shoujo no Dorei Majutsu', url: '../src/paginas/todos-los-animes/2018/informacion/'},
            { title: 'Sunohara-sou no Kanrinin-san', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Shichisei no Subaru', url: '../src/paginas/todos-los-animes/2018/informacion/'},
            { title: 'Yuragi-sou no Yuuna-san OVA', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Aru Zombie Shoujo no Sainan (ONA)', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Chuukan Kanriroku Tonegawa', url: '../src/paginas/todos-los-animes/2018/informacion/'},
            { title: 'Senjuushi', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'One Room 2nd Season', url: '../src/paginas/todos-los-animes/2018/informacion/'},
            { title: 'Yama no Susume: Third Season', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Island', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Hanebado!', url: '../src/paginas/todos-los-animes/2018/informacion/'},
            { title: 'Emiya-san Chi no Kyou no Gohan', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Baki 2018', url: '../src/paginas/todos-los-animes/2018/informacion/'},
            { title: 'Chuunibyou demo Koi ga Shitai! Movie: Take On Me', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Dragon Ball Heroes', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Digimon Adventure tri. 6: Bokura no Mirai', url: '../src/paginas/todos-los-animes/2018/informacion/'},
            { title: 'Soutai Sekai', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Cike Wu Liuqi', url: '../src/paginas/todos-los-animes/2018/informacion/'},
            { title: 'Isekai Izakaya: Koto Aitheria no Izakaya Nobu', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Wotaku ni Koi wa Muzukashii', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Steins;Gate 0', url: '../src/paginas/todos-los-animes/2018/informacion/'},
            { title: 'Last Period: Owarinaki Rasen no Monogatari', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Butlers: Chitose Momotose Monogatari', url: '../src/paginas/todos-los-animes/2018/informacion/'},
            { title: 'Rokuhoudou Yotsuiro Biyori', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'High School DxD Hero', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Golden Kamuy', url: '../src/paginas/todos-los-animes/2018/informacion/'},
            { title: 'Fumikiri Jikan', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Jikkenhin Kazoku', url: '../src/paginas/todos-los-animes/2018/informacion/'},
            { title: 'Sword Art Online Alternative: Gun Gale Online', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Cutie Honey Universe', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Caligula', url: '../src/paginas/todos-los-animes/2018/informacion/'},
            { title: 'Shokugeki no Souma: San no Sara - Toutsuki Ressha-hen', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Nil Admirari no Tenbin: Teito Genwaku Kitan', url: '../src/paginas/todos-los-animes/2018/informacion/'},
            { title: 'Binan Koukou Chikyuu Boueibu Happy Kiss!', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Boku no Hero Academia 3rd Season', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Major 2nd (TV)', url: '../src/paginas/todos-los-animes/2018/informacion/'},
            { title: 'Hinamatsuri', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Devils Line', url: '../src/paginas/todos-los-animes/2018/informacion/'},
            { title: 'Persona 5 the Animation', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Hoozuki no Reitetsu 2nd Season: Sono Ni', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Amanchu! Advance', url: '../src/paginas/todos-los-animes/2018/informacion/'},
            { title: 'Nobunaga no Shinobi: Anegawa Ishiyama-hen', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Gurazeni', url: '../src/paginas/todos-los-animes/2018/informacion/'},
            { title: 'Akkun to Kanojo', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Lostorage Conflated WIXOSS', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Megalo Box', url: '../src/paginas/todos-los-animes/2018/informacion/'},
            { title: 'Comic Girls', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Saredo Tsumibito wa Ryuu to Odoru', url: '../src/paginas/todos-los-animes/2018/informacion/'},
            { title: 'Captain Tsubasa (2018)', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Gundam Build Divers', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Ginga Eiyuu Densetsu: Die Neue These - Kaikou', url: '../src/paginas/todos-los-animes/2018/informacion/'},
            { title: 'Tokyo Ghoul:re', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Lupin III: Part V', url: '../src/paginas/todos-los-animes/2018/informacion/'},
            { title: '3D Kanojo: Real Girl', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Kakuriyo no Yadomeshi', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Uchuu Senkan Tiramisu', url: '../src/paginas/todos-los-animes/2018/informacion/'},
            { title: 'Souten no Ken Re:Genesis', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Uma Musume: Pretty Derby (TV)', url: '../src/paginas/todos-los-animes/2018/informacion/'},
            { title: 'Lost Song', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Gegege no Kitarou (2018)', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Mahou Shoujo Ore', url: '../src/paginas/todos-los-animes/2018/informacion/'},
            { title: 'ReLIFE: Kanketsu-hen', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Mob Psycho 100 Reigen: Shirarezaru Kiseki no Reinouryokusha', url: '../src/paginas/todos-los-animes/2018/informacion/'},
            { title: 'Bungou Stray Dogs: Dead Apple', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Doraemon Movie 38: Nobita no Takarajima', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'B: The Beginning', url: '../src/paginas/todos-los-animes/2018/informacion/'},
            { title: 'Sayonara no Asa ni Yakusoku no Hana wo Kazarou', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Ling Qi 2', url: '../src/paginas/todos-los-animes/2018/informacion/'},
            { title: 'Mi Yu Xing Zhe', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Saiki Kusuo no Ψ-nan 2', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Darling in the FranXX', url: '../src/paginas/todos-los-animes/2018/informacion/'},
            { title: 'Gin no Guardian 2nd Season', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Hakumei to Mikochi', url: '../src/paginas/todos-los-animes/2018/informacion/'},
            { title: 'Hakyuu Houshin Engi', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Hakata Tonkotsu Ramens', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Beatless', url: '../src/paginas/todos-los-animes/2018/informacion/'},
            { title: 'Killing Bites', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Dagashi Kashi 2', url: '../src/paginas/todos-los-animes/2018/informacion/'},
            { title: 'Miira no Kaikata', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Death March kara Hajimaru Isekai Kyousoukyoku', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Marchen Madchen', url: '../src/paginas/todos-los-animes/2018/informacion/'},
            { title: 'Violet Evergarden', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Dame x Prince Anime Caravan', url: '../src/paginas/todos-los-animes/2018/informacion/'},
            { title: 'Koi wa Ameagari no You ni', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Overlord II', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Hitori no Shita: The Outcast 2nd Season', url: '../src/paginas/todos-los-animes/2018/informacion/'},
            { title: 'Kaijuu Girls: Ultra Kaijuu Gijinka Keikaku 2nd Season', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Karakai Jouzu no Takagi-san', url: '../src/paginas/todos-los-animes/2018/informacion/'},
            { title: 'Basilisk: Ouka Ninpouchou', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Ryuuou no Oshigoto!', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Yowamushi Pedal: Glory Line', url: '../src/paginas/todos-los-animes/2018/informacion/'},
            { title: 'Slow Start', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Poputepipikku', url: '../src/paginas/todos-los-animes/2018/informacion/'},
            { title: 'Cardcaptor Sakura: Clear Card-hen', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Gakuen Babysitters', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Kokkoku', url: '../src/paginas/todos-los-animes/2018/informacion/'},
            { title: 'Zoku Touken Ranbu: Hanamaru', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Nanatsu no Taizai: Imashime no Fukkatsu', url: '../src/paginas/todos-los-animes/2018/informacion/'},
            { title: 'Citrus', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Sanrio Danshi', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Toji no Miko', url: '../src/paginas/todos-los-animes/2018/informacion/'},
            { title: 'Grancrest Senki', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Ramen Daisuki Koizumi-san', url: '../src/paginas/todos-los-animes/2018/informacion/'},
            { title: 'Yuru Camp△', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Itou Junji: Collection', url: '../src/paginas/todos-los-animes/2018/informacion/' },
            { title: 'Sora yori mo Tooi Basho', url: '../src/paginas/todos-los-animes/2018/informacion/'},
            { title: 'IDOLiSH7', url: '../src/paginas/todos-los-animes/2018/informacion/'},
            { title: 'Banana Fish', url: '../src/paginas/todos-los-animes/2018/informacion/' },//AQUI EMPIEZA EL 2018------------------------------
            
            
            
            { title: 'Net-juu no Susume Special', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Yuuki Yuuna wa Yuusha de Aru: Yuusha no Shou', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: '3-gatsu no Lion 2nd Season', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: "Fate/stay night Movie: Heaven's Feel - I. Presage Flower", url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Inuyashiki', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'RoboMasters the Animated Series', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Boku no Kanojo ga Majimesugiru Sho-bitch na Ken', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Wake Up, Girls! Shin Shou', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Evil or Live', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Hyperventilation', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Animegataris', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Himouto! Umaru-chan R', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Imouto sae Ireba Ii.', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Kujira no Kora wa Sajou ni Utau', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Love Kome: We Love Rice 2nd Season', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'ClassicaLoid 2nd Season', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Code:Realize: Sousei no Himegimi', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Houseki no Kuni (TV)', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Love Live! Sunshine!! 2nd Season', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'The iDOLM@STER Side M', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Time Bokan: Gyakushuu no San Akunin', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Two Car', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Blend S', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Hoozuki no Reitetsu 2nd Season', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Mahoutsukai no Yome', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Kekkai Sensen & Beyond', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Kino no Tabi: The Beautiful World - The Animated Series', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Shoujo Shuumatsu Ryokou', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Yuuki Yuuna wa Yuusha de Aru: Washio Sumi no Shou', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Dies Irae', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Garo: Vanishing Line', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Net-juu no Susume', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Taishou Chicchai-san', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Just Because!', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Ousama Game The Animation', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Ame-iro Cocoa Series: Ame-con!!', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Konohana Kitan', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Urahara', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Tsukipro The Animation', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Black Clover (TV)', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Cinderella Girls Gekijou 2nd Season', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Juuni Taisen', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Sengoku Night Blood', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Osake wa Fuufu ni Natte kara', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Shokugeki no Souma: San no Sara', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Osomatsu-san 2', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'UQ Holder!: Mahou Sensei Negima! 2', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Omiai Aite wa Oshiego, Tsuyokina, Mondaij', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Gintama. Porori-hen', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Digimon Adventure tri. 5: Kyousei', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Wo de Tian Jie Nu You', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Quanzhi Fashi II', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Sakura Card Captor: Clear Card-hen - Prologue Sakura to Futatsu no Kuma', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Fastening Days 3', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Ku Pao Ying Xiong', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Owarimonogatari 2nd Season', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'The Reflection', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Seitokai Yakuindomo Movie', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'No Game No Life: Zero', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Jigoku Shoujo: Yoi no Togi', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Gamers!', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Clione no Akari', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Hajimete no Gal', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Youkoso Jitsuryoku Shijou Shugi no Kyoushitsu e (TV)', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Nora to Oujo to Noraneko Heart', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Teekyuu 9', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Lan Mo de Hua', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Isekai wa Smartphone to Tomo ni', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'New Game!!', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Tenshi no 3P!', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Shinya! Tensai Bakabon', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Centaur no Nayami', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Princess Principal', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Ballroom e Youkoso', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Hitorijime My Hero', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Made in Abyss', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Vatican Kiseki Chousakan', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Jikan no Shihaisha', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Shoukoku no Altair', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: '18if', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Konbini Kareshi', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Dive!!', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Saiyuuki Reload Blast', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Netsuzou TRap', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Nana Maru San Batsu', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Aho Girl', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Tsurezure Children', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Koi to Uso', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Youkai Apartment no Yuuga na Nichijou', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Isekai Shokudou', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Yami Shibai 5', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: "Knight's & Magic", url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Keppeki Danshi! Aoyama-kun', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Battle Girl High School: Battle Girl Project', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Skirt no Naka wa Kedamono Deshita', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Kakegurui', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Fate/Apocrypha', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Katsugeki/Touken Ranbu', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Senki Zesshou Symphogear AXZ: By Shedding Many Tears, the Reality You Face Is...', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Huyao Xiao Hongniang', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Boku no Hero Academia: Training of the Dead', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Demi-chan wa Kataritai Special', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Hina Logi: From Luck & Logic', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Mahouka Koukou no Rettousei Movie: Hoshi wo Yobu Shoujo', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Suki ni Naru Sono Shunkan wo.: Kokuhaku Jikkou Iinkai', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Yu☆Gi☆Oh! VRAINS', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Blame! Movie', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Koe no Katachi', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Minami Kamakura Koukou Joshi Jitensha-bu: Kita yo, Taiwan!', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Sin: Nanatsu no Taizai Recap', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'New Game!: Watashi, Shain Ryokou tte Hajimete nano de...', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Jian Wangchao', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Ao no Exorcist OVA', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Sword Art Online Movie: Ordinal Scale', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Atom: The Beginning', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Sin: Nanatsu no Taizai', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Danmachi: Sword Oratoria', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Saenai Heroine no Sodatekata Flat', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Kenka Banchou Otome: Girl Beats Boys', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Room Mate', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Fukumenkei Noise', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Shuumatsu Nani Shitemasu ka? Isogashii desu ka? Sukutte Moratte Ii desu ka?', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Natsume Yuujinchou Roku', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Zero kara Hajimeru Mahou no Sho', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'ID-0', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Kyoukai no Rinne (TV) 3rd Season', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Re:Creators', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Eromanga-sensei', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Uchouten Kazoku 2', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Hinako Note', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Kaitou Tenshi Twin Angel (TV)', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Shingeki no Bahamut: Virgin Soul', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Berserk (2017)', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Nobunaga no Shinobi: Ise Kanegasaki-hen', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Quanzhi Gaoshou', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Seikaisuru Kado', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Tsuki ga Kirei', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Clockwork Planet', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Kabukibu!', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Renai Boukun', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Busou Shoujo Machiavellianism', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Love Kome: We Love Rice', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Sakurada Reset', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Sakura Quest', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Rokudenashi Majutsu Koushi to Akashic Records', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Cinderella Girls Gekijou', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Oushitsu Kyoushi Haine', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Boruto: Naruto Next Generations', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Sekai no Yami Zukan', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Warau Salesman New', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Starmyu 2nd Season', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Frame Arms Girl', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Alice to Zouroku', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Tsugumomo', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Souryo to Majiwaru Shikiyoku no Yoru ni...', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Shingeki no Kyojin Season 2', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Gin no Guardian', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Boku no Hero Academia 2nd Season', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Feng Ling Yu Xiu', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Mahoutsukai no Yome: Hoshi Matsu Hito', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Digimon Adventure tri. 4: Soushitsu', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Trinity Seven Movie 1: Eternity Library to Alchemic Girl', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'ViVid Strike! Specials', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'BanG Dream!', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Granblue Fantasy The Animation', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Yami Shibai 4th Season', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Rewrite: Moon and Terra', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Marginal#4: Kiss kara Tsukuru Big Bang', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Super Lovers 2', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Kuzu no Honkai', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Piace: Watashi no Italian', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Kono Subarashii Sekai ni Shukufuku wo! 2', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Chaos;Child', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Kobayashi-san Chi no Maid Dragon', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'One Room', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'ACCA: 13-ku Kansatsu-ka', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Hand Shakers', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Kemono Friends', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Gabriel DropOut', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Chiruran: Nibun no Ichi', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Yowamushi Pedal: New Generation', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Onihei', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'ēlDLIVE', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Nyanko Days', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Tales of Zestiria the X (2017)', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Idol Jihen', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Little Witch Academia (TV)', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Gintama (2017)', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Demi-chan wa Kataritai', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Reikenzan: Eichi e no Shikaku', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Fuuka', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Youjo Senki', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Minami Kamakura Koukou Joshi Jitensha-bu', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Schoolgirl Strikers: Animation Channel', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Ao no Exorcist: Kyoto Fujouou-hen', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Shouwa Genroku Rakugo Shinjuu: Sukeroku Futatabi-hen', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Masamune-kun no Revenge', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Urara Meirochou', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Seiren', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Kizumonogatari III: Reiketsu-hen', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: "Akiba's Trip The Animation", url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Nanbaka (2017)', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'Ai Mai Mii: Surgical Friends', url: '../src/paginas/todos-los-animes/2017/informacion/'},
            { title: 'One Piece Film: Gold', url: '../src/paginas/todos-los-animes/2017/informacion/'},

            

            { title: 'Fate/Grand Order: First Order', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Kamisama Hajimemashita: Kamisama, Shiawase ni Naru', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Koro-sensei Quest!', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Chain Chronicle: Haecceitas no Hikari', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Danmachi OVA', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Strike the Blood II', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Ansatsu Kyoushitsu: 365-nichi no Jikan', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Pokemon Sun & Moon', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Monster Musume no Iru Nichijou OVA', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Pocket Monsters XY&Z Specials', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Yahari Ore no Seishun Love Comedy wa Machigatteiru. Zoku OVA', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Kubikiri Cycle: Aoiro Savant to Zaregototsukai', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Luger Code 1951', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Fune wo Amu', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Masou Gakuen HxH Special', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Getsuyoubi no Tawawa', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Occultic;Nine', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Sangatsu no Lion', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'ClassicaLoid', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Long Riders!', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Udon no Kuni no Kiniro Kemari', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Sengoku Choujuu Giga', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Drifters', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Ajin 2nd Season', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Haikyuu!! Third Season', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Watashi ga Motete Dousunda', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Lostorage Incited WIXOSS', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Girlish Number', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Flip Flappers', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Keijo!!!!!!!!', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'All Out!!', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Bernard-jou Iwaku', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Cheating Craft', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Brave Witches', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Bungou Stray Dogs 2nd Season', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Anitore! XX', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Yuri!!! on Ice', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Hibike! Euphonium 2', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Mahou Shoujo Nante Mou Ii Desukara. 2nd Season', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'To Be Hero', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Musaigen no Phantom World Special', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Bishoujo Yuugi Unit Crane Game Girls Galaxy', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Nazotokine', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Teekyuu 8', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Kiitarou Shounen no Youkai Enikki', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Nanbaka', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Soul Buster', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Soushin Shoujo Matoi', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Natsume Yuujinchou Go', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Zutto Mae kara Suki deshita.: Kokuhaku Jikkou Iinkai', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: '12-sai.: Chicchana Mune no Tokimeki 2nd Season', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Kaitou Joker 4th Season', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Shakunetsu no Takkyuu Musume', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Trickster: Edogawa Ranpo "Shounen Tanteidan" yori', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Gakuen Handsome', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Nobunaga no Shinobi', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Magic Kyun! Renaissance', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Mobile Suit Gundam: Iron-Blooded Orphans 2nd Season', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Oku-sama ga Seito Kaichou! 2nd Season', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Show By Rock!! #', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Ame-iro Cocoa in Hawaii', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Uta no☆Prince-sama♪ Maji Love Legend Star', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Ao Oni The Animation', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Idol Memories', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Stella no Mahou', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Touken Ranbu: Hanamaru', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Mahou Shoujo Ikusei Keikaku', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Bloodivores', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'WWW.Working!!', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Tiger Mask W', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'ViVid Strike!', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Time Bokan 24', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Bubuki Buranki: Hoshi no Kyojin', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Shuumatsu no Izetta', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Fate/kaleid liner Prisma☆Illya 3rei!! Specials', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Danganronpa 3: The End of Kibougamine Gakuen - Kibou-hen', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Ginga Kikoutai Majestic Prince: Mirai e no Tsubasa', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Sakamoto desu ga? Special', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Kaijuu Girls: Ultra Kaijuu Gijinka Keikaku', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Non Non Biyori Repeat OVA', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Dream Festival!', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Digimon Adventure tri. 3: Kokuhaku', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Nijiiro Days OVA', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Persona 5 the Animation: The Day Breakers', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Kuroko no Basket Movie 1: Winter Cup Soushuuhen - Kage to Hikari', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Quanzhi Fashi', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Nanatsu no Taizai: Seisen no Shirushi', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Kimi no Na wa', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Kizumonogatari II: Nekketsu-hen', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Gintama°: Aizome Kaori-hen', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Under the Dog', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Planetarian: Hoshi no Hito', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Fastening Days 2', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Battery', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Danganronpa 3: The End of Kibougamine Gakuen - Zetsubou-hen', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Danganronpa 3: The End of Kibougamine Gakuen - Mirai-hen', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Mob Psycho 100', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Active Raid: Kidou Kyoushuushitsu Dai Hachi Gakari 2nd', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Hitori no Shita: The Outcast', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Ange Vierge', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Qualidea Code', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Handa-kun', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Amanchu!', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Nejimaki Seirei Senki: Tenkyou no Alderamin', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: '91 Days', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Time Travel Shoujo: Mari Waka to 8-nin no Kagakusha-tachi', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Mahou Shoujo? Naria☆Girls', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Regalia: The Three Sacred Stars', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Kono Bijutsubu ni wa Mondai ga Aru!', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Binan Koukou Chikyuu Bouei-bu LOVE! LOVE!', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Planetarian: Chiisana Hoshi no Yume', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Sinbi Apateu: Ghost Ball Bimil', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Masou Gakuen HxH', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Tsukiuta. The Animation', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Ozmafia!!', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Naruto ga Hokage ni Natta Hi', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Fate/kaleid liner Prisma☆Illya 3rei!!', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Servamp', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Scared Rider Xechs', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Cheer Danshi!!', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Fudanshi Koukou Seikatsu', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'New Game!', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Amaama to Inazuma', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'D.Gray-man Hallow', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Taboo Tattoo', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Saiki Kusuo no Ψ-nan (TV)', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Fukigen na Mononokean', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Arslan Senki (TV): Fuujin Ranbu', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Tales of Zestiria the X', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'B-Project: Kodou*Ambitious', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Hatsukoi Monster', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Love Live! Sunshine!!', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Rewrite', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Food Wars - Shokugeki no Souma: Ni no Sara', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Days (TV)', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Orange', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Berserk (2016)', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'ReLIFE', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Momokuri', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Sansha Sanyou Specials', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'RS Keikaku: Rebirth Storage', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Kono Subarashii Sekai ni Shukufuku wo! Kono Subarashii Choker ni Shukufuku wo!', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Kuma Miko Specials', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Ling Qi', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Girls und Panzer der Film: Arisu War!', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Kekkai Sensen: Ousama no Restaurant no Ousama', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Ajin OVA', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Arslan Senki (TV) OVA', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Haikyuu!!: vs. Akaten', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'The iDOLM@STER Cinderella Girls: Anytime, Anywhere with Cinderella', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Shokugeki no Souma OVA', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Owari no Seraph: Kyuuketsuki Shahar', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Zhen Hun Jie', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Big Order (TV)', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Magi: Sinbad no Bouken (TV)', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Usakame', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Wagamama High Spec', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Sansha Sanyou', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Tonkatsu DJ Agetarou', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Kyoukai no Rinne (TV) 2nd Season', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Tanaka-kun wa Itsumo Kedaruge', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Kiznaiver', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Haifuri', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Flying Witch', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Concrete Revolutio: Choujin Gensou - The Last Song', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Sakamoto desu ga?', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Anne Happy♪', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Kuromukuro', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Netoge no Yome wa Onnanoko ja Nai to Omotta?', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Koutetsujou no Kabaneri', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Shounen Maid', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Sousei no Onmyouji', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Super Lovers', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Bungou Stray Dogs', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Bishoujo Yuugi Unit Crane Game Girls', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Onigiri', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Joker Game', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Musaigen no Phantom World: Limitless Phantom World', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: '12-sai.: Chicchana Mune no Tokimeki', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Kaitou Joker 3rd Season', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Seisen Cerberus: Ryuukoku no Fatalités', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Sailor Moon Crystal: Death Busters-hen', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Bakuon!!', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Hundred', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Boku no Hero Academia', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Kuma Miko', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Pan de Peace!', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Re:Zero kara Hajimeru Isekai Seikatsu', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Gakusen Toshi Asterisk 2nd Season', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Gyakuten Saiban: Sono "Shinjitsu", Igi Ari!', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Endride', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Mobile Suit Gundam Unicorn RE:0096', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Mayoiga', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Terra Formars Revenge', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Uchuu Patrol Luluco', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Ushio to Tora (TV) 2nd Season', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'JoJo no Kimyou na Bouken: Diamond wa Kudakenai', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Kagewani: Shou', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Brotherhood: Final Fantasy XV', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Shoujo-tachi wa Kouya wo Mezasu OVA', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Charlotte OVA', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Hai to Gensou no Grimgar Special', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Bakuon!! OVA', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Soul Worker: Your Destiny Awaits', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Mirai no Watashi', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Digimon Adventure tri. 2: Ketsui', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Kuusen Madoushi Kouhosei no Kyoukan OVA', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Kanojo to Kanojo no Neko: Everything Flows', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Prison School OVA', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Masamune Datenicle', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Kono Danshi, Mahou ga Oshigoto Desu', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'PriPara Movie: Mi~nna Atsumare! Prism☆Tours', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Okusama ga Seitokaichou! OVA', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: "Queen's Blade: Grimoire", url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Shinmai Maou no Testament Burst OVA', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Ajin', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Kono Subarashii Sekai ni Shukufuku wo!', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Ao no Kanata no Four Rhythm', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Saijaku Muhai no Bahamut', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Akagami no Shirayuki-hime 2nd Season', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Mahou Shoujo Nante Mou Ii Desukara', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Teekyuu 7', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Schwarzesmarken', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Ooyasan wa Shishunki!', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Tabi Machi Late Show', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Yami Shibai 3rd Season', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Nijiiro Days', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Hai to Gensou no Grimgar', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Dimension W', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Koyomimonogatari', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Durarara!!x2 Ketsu', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Nurse Witch Komugi-chan R', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Phantasy Star Online 2 The Animation', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Glass no Hana to Kowasu Sekai', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Divine Gate', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Koukaku no Pandora', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Oshiete! Galko-chan', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Sekkou Boys', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Reikenzan: Hoshikuzu-tachi no Utage', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Gate: Jieitai Kanochi nite, Kaku Tatakaeri - Enryuu-hen', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Shouwa Genroku Rakugo Shinjuu', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Kizumonogatari I: Tekketsu-hen', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Active Raid: Kidou Kyoushuushitsu Dai Hakkei', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Norn9: Norn+Nonet', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Shoujo-tachi wa Kouya wo Mezasu', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Boku dake ga Inai Machi', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Ansatsu Kyoushitsu (TV) 2nd Season', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Dagashi Kashi', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Ojisan to Marshmallow', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Haruchika: Haruta to Chika wa Seishun Suru', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Musaigen no Phantom World', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Prince of Stride: Alternative', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Akagami no Shirayuki-hime: Nandemonai Takaramono, Kono Page', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'To LOVE-Ru Darkness 2nd OVA', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Bubuki Buranki', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            { title: 'Mobile Suit Gundam Thunderbolt', url: '../src/paginas/todos-los-animes/2016/informacion/' },
            { title: 'Big Order', url: '../src/paginas/todos-los-animes/2016/informacion/'},
            


            { title: 'Macross Δ', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Luck & Logic', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Aoharu x Kikanjuu Special', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Aria The Avvenire', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Boruto: Naruto the Movie', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Kindaichi Shounen no Jikenbo Returns: Akechi Keibu no Jikenbo', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Working!!! Lord of the Takanashi', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Tokyo Ghoul: "Pinto"', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: '[Locodol]: Christmas Special', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Kuroko no Basket: Saikou no Present Desu', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'One Punch Man Specials', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Bikini Warriors Special', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'One Piece: Adventure of Nebulandia', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Valkyrie Drive: Mermaid Specials', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Love Live! The School Idol Movie', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Hibike! Euphonium: Kakedasu Monaka', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'High School DxD BorN: Yomigaerarenai Pheonix', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'One Punch Man: Road to Hero', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Steins;Gate: Kyoukaimenjou no Missing Link', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Shen Ming Zhi Zhou', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Strike the Blood: Valkyria no Oukoku-hen', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Girls und Panzer der Film', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Digimon Adventure tri', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Noragami Aragoto OVA', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Pokemon XY&Z', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Wakaba*Girl: Onsen Tsukaritai', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Nagato Yuki-chan no Shoushitsu OVA', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Ling Yu', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Himouto! Umaru-chan OVA', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Anitore! EX', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Brave Beats', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Gochuumon wa Usagi desu ka??', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Owari no Seraph: Nagoya Kessen-hen', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Valkyrie Drive: Mermaid', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: "Kyoukai no Kanata Movie: I'll Be Here - Mirai-hen", url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Garo: Guren no Tsuki', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Shinmai Maou no Testament Burst', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Subete ga F ni Naru: The Perfect Insider', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Fushigi na Somera-chan', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Sakurako-san no Ashimoto ni wa Shitai ga Umatteiru', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Dance with Devils', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Shomin Sample', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Taimadou Gakuen 35 Shiken Shoutai', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Tantei Team KZ Jiken Note', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Hidan no Aria AA', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'DD Hokuto II + Hokuto no Ken: Ichigo Aji', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Kowabon', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Tokyo Ghoul: "Jack"', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Hantsu x Trash', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Teekyuu 6', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'High School Star Musical', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'JK Meshi!', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Yuru Yuri San☆Hai!', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Peeping Life TV: Season 1??', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Osomatsu-san', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Mobile Suit Gundam: Iron-Blooded Orphans', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Comet Lucifer', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Concrete Revolutio: Choujin Gensou', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Komori-san wa Kotowarenai!', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Onsen Yousei Hakone-chan', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Ame-iro Cocoa: Rainy Color e Youkoso!', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Owarimonogatari', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Kindaichi Shounen no Jikenbo Returns 2nd Season', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Rakudai Kishi no Cavalry', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Gakusen Toshi Asterisk', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Utawarerumono: Itsuwari no Kamen', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Shingeki! Kyojin Chuugakkou', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Haikyuu!! Second Season', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Itoshi no Muco', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Owari no Seraph: The Beginning of the End', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Noragami Aragoto', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Heavy Object', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'K: Return of Kings', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Soukyuu no Fafner: Dead Aggressor - Exodus 2nd Season', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Miss Monochrome: The Animation 3', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Hacka Doll The Animation', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Kagewani', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: "Lance N' Masques'", url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Young Black Jack', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Fate/kaleid liner Prisma☆Illya 2wei Herz! Specials', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Akatsuki no Yona OVA', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Danchigai OVA', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Taifuu no Noruda', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Youkai Watch Movie 1: Tanjou no Himitsu da Nyan!', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'One Punch Man', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Lupin III (2015)', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Tamayura: Sotsugyou Shashin Part 1 - Kizashi', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Yowamushi Pedal Movie', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Isuca OVA', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Grisaia no Rakuen Specials', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'One Piece: Episode of Sabo - 3 Kyoudai no Kizuna Kiseki no Saikai to Uketsugareru Ishi', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Date A Live Movie: Mayuri Judgment', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Yuru Yuri Nachuyachumi! Plus', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Kamisama Hajimemashita: Kako-hen', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Diabolik Lovers More,Blood', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Overlord: Ple Ple Pleiades', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Ushinawareta Mirai wo Motomete: Ushinawareta Natsuyasumi wo Motomete', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Owari no Seraph: Owaranai Seraph', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Durarara!!x2 Shou 4.5', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Sora no Method: Aru Shoujo no Kyuujitsu★', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Psycho-Pass Movie', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Fate/kaleid liner Prisma☆Illya 2wei! OVA', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Fate/kaleid liner Prisma☆Illya 2wei Herz!', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'High School DxD BorN Specials', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Grisaia no Meikyuu Special', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'School Shock: Chu Feng B.E.E', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Pokemon the Movie XY: Ring no Choumajin Hoopa', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'The iDOLM@STER Cinderella Girls 2nd Season', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Aoki Hagane no Arpeggio: Ars Nova DC', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Makura no Danshi', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'God Eater', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Venus Project: Climax', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Prison School', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Bakemono no Ko', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Gakkou Gurashi!', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Danchigai', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Junjou Romantica 3', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Kuusen Madoushi Kouhosei no Kyoukan', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Himouto! Umaru-chan', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Bikini Warriors', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Heibai Wushang', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Monster Musume no Iru Nichijou', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Overlord', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Sore ga Seiyuu!', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Jitsu wa Watashi wa', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Non Non Biyori Repeat', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Teekyuu 5', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Akagami no Shirayuki-hime', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Million Doll', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Wakako-zake', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Durarara!!x2 Ten', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Charlotte', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Working!! Season 3', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Rokka no Yuusha', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Gatchaman Crowds Insight', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Dragon Ball Super', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Classroom☆Crisis', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Senki Zesshou Symphogear GX', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Aoharu x Kikanjuu', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Hetalia: The World Twinkle', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Ushio to Tora', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Aquarion Logos', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Gate: Jieitai Kanochi nite, Kaku Tatakaeri', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Shimoneta to Iu Gainen ga Sonzai Shinai Taikutsu na Sekai', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Miss Monochrome: The Animation 2', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Wakaba*Girl', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Little Witch Academia Movie', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Chaos Dragon: Sekiryuu Seneki', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Ranpo Kitan: Game of Laplace', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Joukamachi no Dandelion', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Sousei no Aquarion Evol', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Gangsta.', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Okusama ga Seitokaichou!', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'To LOVE-Ru Darkness 2nd', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Amagi Brilliant Park OVA', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Shinmai Maou no Testament OVA', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Gatchaman Crowds Insight: Inbound', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Pokemon XY: Cosplay Pikachu Special', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Nanatsu no Taizai OVA', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Hibike! Euphonium: Suisougaku-bu no Nichijou', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Kekkai Sensen 10.5', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Haiyore! Nyaruko-san F', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Ookami Shoujo to Kuro Ouji OVA', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Robot Girls Z Plus', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Shigatsu wa Kimi no Uso: Moments', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Etotama Specials', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Ansatsu Kyoushitsu (TV): Deai no Jikan', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Grisaia no Rakuen', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Dragon Ball Z Movie 15: Fukkatsu no F', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Ninja Slayer From Animation', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'K: Missing Kings', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Kyoukai no Kanata Movie: I´ll Be Here - Kako-hen', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Yamada-kun to 7-nin no Majo (TV)', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Grisaia no Meikyuu', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Sidonia no Kishi S2', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Saint Seiya: Soul of Gold', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Punchline', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Urawa no Usagi-chan', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Gintama° 2015', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Triage X', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Ore Monogatari!!', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Houkago no Pleiades (TV)', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Ai Mai Mii: Mousou Catastrophe Special', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Hibike! Euphonium', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Diamond no Ace S2', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Mikagura Gakuen Kumikyoku', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Kaitou Joker 2', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Teekyuu 4', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Ame-iro Cocoa', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Takamiya Nasuno Desu!: Teekyuu Spin-off', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Baby Steps 2', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Show By Rock!!', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Arslan Senki', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Hello!! Kiniro Mosaic', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Ghost in the Shell: Arise - Alternative Architecture', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'High School DxD BorN', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Owari no Seraph', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Gunslinger Stratos: The Animation', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Denpa Kyoushi', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Plastic Memories', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Fate/stay night: Unlimited Blade Works (TV) 2', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Kyoukai no Rinne', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Uta no☆Prince-sama♪ Maji Love Revolutions', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Tesagure! Bukatsumono Spin-off Purupurun Sharumu to Asobou', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Mahou Shoujo Lyrical Nanoha ViVid', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Danmachi', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Food Wars: Shokugeki no Soma', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Nagato Yuki-chan no Shoushitsu', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Kekkai Sensen', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Nisekoi S2', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Vampire Holmes', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Gintama 2015', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Rolling☆Girls: Chibi☆Rolling☆Girls Korokoro Gekijou', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Re-Kan!', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Oregairu 2', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Danna ga Nani wo Itteiru ka Wakaranai Ken 2 Sure-me', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Omoide no Marnie', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Shinmai Maou no Testament Specials', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'New Initial D Movie: Legend 1 - Kakusei', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Shingeki no Kyojin Movie 1: Guren no Yumiya', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Senran Kagura: Estival Versus - Shoujo-tachi no Sentaku', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Trinity Seven OVA', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Ongaku Shoujo', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Aki no Kanade', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Military! OVA', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Free!: Eternal Summer OVA', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'High School DxD New: Oppai, Tsutsumimasu!', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Etotama', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Haikyuu!! OAD', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Hitsugi no Chaika OVA', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Mobile Suit Gundam: The Origin', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Diabolik Lovers OVA', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Shirobako OVA', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Hoozuki no Reitetsu OVA', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Yuru Yuri Nachuyachumi!', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Anime de Wakaru Shinryounaika', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Go! Princess Precure', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Bokura wa Minna Kawaisou: Hajimete no', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Isuca', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Hyakka Ryouran: Samurai After', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Hyakka Ryouran: Samurai After Specials', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Pokemon XY: Pikachu, Kore Nan no Kagi?', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Sengoku Musou', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Seiken Tsukai no World Break', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Yoru no Yatterman', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Durarara!!x2 Shou', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Aldnoah.Zero 2nd Season', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Shounen Hollywood: Holly Stage for 50', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Rolling☆Girls', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: "Dog Days'' S3", url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Kuroko no Basket 3', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Soukyuu no Fafner: Dead Aggressor - Exodus', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Death Parade', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Ansatsu Kyoushitsu (TV)', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'The iDOLM@STER Cinderella Girls', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: "JoJo's Bizarre Adventure: Stardust Crusaders Egypt Arc", url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Saenai Heroine no Sodatekata', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Tokyo Ghoul √A', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Koufuku Graffiti', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Juuou Mujin no Fafnir', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Kantai Collection: KanColle', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Shinmai Maou no Testament', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Military!', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Binan Koukou Chikyuu Bouei-bu Love!', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Witch Craft Works OVA', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Yuri Kuma Arashi', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Kamisama Hajimemashita◎ S2', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Absolute Duo', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Junketsu no Maria', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            { title: 'Tantei Kageki Milky Holmes TD', url: '../src/paginas/todos-los-animes/2015/informacion/' },
            { title: 'Aishen Qiaokeli-ing...', url: '../src/paginas/todos-los-animes/2015/informacion/'},
            


            { title: 'Tsukimonogatari', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Tales of Zestiria: Doushi no Yoake', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Kono Danshi, Sekika ni Nayandemasu', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Ookami Shoujo to Kuro Ouji 12.5', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Garo: Honoo no Kokuin 12.5', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'The Disappearance of Conan Edogawa: The Worst Two Days in History', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Amagi Brilliant Park Specials', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Daitoshokan no Hitsujikai Specials', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Yama no Susume 2nd Season Special', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Grisaia no Kajitsu Specials', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'DRAMAtical Murder OVA: Data_xx_Transitory', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Ikkitousen: Extravaganza Epoch', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Strike Witches: Operation Victory Arrow', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Chuunibyou demo Koi ga Shitai! Ren Specials', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Brothers Conflict OVA', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Yamada-kun to 7-nin no Majo (OVA)', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Itsudatte My Santa!', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Aikatsu! Movie', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Shingeki no Kyojin: Kuinaki Sentaku', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Boku wa Imouto ni Koi wo Suru', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Date A Live II: Encore OVA', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Naruto: Shippuuden Movie 7 - The Last', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Wake Up, Girl Zoo!', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Kanojo ga Flag wo Oraretara OVA', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'IS: Infinite Stratos 2 - World Purge', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Mushibugyou OVA', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Love Stage!! OVA', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Akuma no Riddle: Shousha wa Dare? Nukiuchi Test', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Shingeki no Bahamut: Genesis Recap', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Diamond no Ace OVA', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Rakuen Tsuihou: Expelled From Paradise', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Expo de Animadores de Japón', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Ano Natsu de Matteru Special', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Fastening Days', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Ryuugajou Nanana no Maizoukin (TV) Specials', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Hybrid Child', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'New Prince of Tennis OVA vs. Genius 10', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Seirei Tsukai no Blade Dance Specials', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Miss Monochrome: OVA 2', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Kuroshitsuji: Book of Murder', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Sabagebu! SPECIAL MISSION', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Watamote! OVA', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Sword Art Offline II', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Go! Go! 575: Meippai ni, Hajiketeru?', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Mushishi Zoku Shou 2nd Season', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Imawa no Kuni no Alice', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Yuuki Yuuna wa Yuusha de Aru', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Steins;Gate: Soumei Eichi no Cognitive Computing', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Sekai Seifuku: Bouryaku no Zvezda - Shin Zvezda Daisakusen', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Tamako Love Story', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Girlfriend (Kari)', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Sword Art Online II: Debriefing 14.5', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Sanzoku no Musume Ronja', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Bonjour♪ Koiaji Pâtisserie', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Madan no Ou to Vanadis: Tigre-kun to Vanadi-chu', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Futari Ecchi 2014', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Psycho-Pass 2', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Ore, Twintails ni Narimasu', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Shigatsu wa Kimi no Uso', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Shirobako', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Parasyte - Kiseijuu Sei no Kakuritsu', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Hitsugi no Chaika: Avenging Battle', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Hi☆sCoool! SeHa Girls', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Daitoshokan no Hitsujikai', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Gundam Build Fighters Try', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Trinity Seven', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Akatsuki no Yona', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Amagi Brilliant Park', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Orenchi no Furo Jijou', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Inou-Battle wa Nichijou-kei no Naka de', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Yowamushi Pedal: Grande Road', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Kaitou Joker', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Ai Tenchi Muyo!', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Cross Ange: Tenshi to Ryuu no Rondo', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Grisaia no Kajitsu', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Gugure! Kokkuri-san', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Sora no Method', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Shingeki no Bahamut: Genesis', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Ookami Shoujo to Kuro Ouji', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Nanatsu no Taizai', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Log Horizon 2nd Season', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Fate/stay night: Unlimited Blade Works (TV)', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Madan no Ou to Vanadis', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Garo: Honoo no Kokuin', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'World Trigger', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Ushinawareta Mirai wo Motomete', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Donten ni Warau', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Nisekoi OVA', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Selector Spread WIXOSS', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Gundam: G no Reconguista', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Magic Kaito 1412', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Denki-gai no Honya-san', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Danna ga Nani wo Itteiru ka Wakaranai Ken', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Ane Log', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: '[Locodol] Yatte Mita.: Nagarekawa, Annai Shite Mita', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Toukiden Kiwami', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Buddy Complex: Kanketsu-hen - Ano Sora ni Kaeru Mirai de', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Kara no Kyoukai 4: Garan no Dou', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Kara no Kyoukai 5: Mujun Rasen', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Kara no Kyoukai 6: Boukyaku Rokuon', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Kara no Kyoukai 7: Satsujin Kousatsu (Part 2)', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Tribe Cool Crew', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Karen Senki', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Suisei no Gargantia: Meguru Kouro, Haruka', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Terra Formars', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Fate/kaleid liner Prisma☆Illya 2wei! Specials', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Gekkan Shoujo Nozaki-kun Specials', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'D-Frag! OVA', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Kara no Kyoukai 3: Tsuukaku Zanryuu', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Gokukoku no Brynhildr 11.5', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Kill la Kill Special', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Fantasista Stella', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Chuunibyou demo Koi ga Shitai! Ren: The Rikka Wars', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Ghost in the Shell: Arise - Border:4 Ghost Stands Alone', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Kill la Kill Ova', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'One Piece 3D2Y', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Sora no Otoshimono Final: Eternal My Master', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Mujaki no Rakuen', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Ao Haru Ride OVA', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Mushishi Zoku Shou: Odoro no Michi', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Terra Formars OVA', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Nozo x Kimi', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Hanamonogatari', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Hunter x Hunter: The Last Mission', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Kenzen Robo Daimidaler Specials', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Space☆Dandy Picture Drama', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Non Non Biyori OVA', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Pokemon XY: Hakai no Mayu to Diancie', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Inugami-san to Nekoyama-san: Nekoyama-san to Onsen Ryokou', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Girls und Panzer: Kore ga Hontou no Anzio-sen Desu!', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Sengoku Basara: Judge End', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Seirei Tsukai no Blade Dance', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Ghost in the Shell: Arise - Border:3 Ghost Tears', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Nobunaga Concerto', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Tokyo ESP', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Rokujouma no Shinryakusha!?', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Zankyou no Terror', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Persona 4 The Golden Animation', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Kuroshitsuji: Book of Circus', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Love Stage!!', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Shin Strange+', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Ai Mai Mi: Mousou Catastrophe', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Fate/kaleid liner Prisma☆Illya 2wei!', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Yama no Susume: Second Season', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Majimoji Rurumo', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Momo Kyun Sword', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Akame ga Kill! Theater', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Re: Hamatora', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Ao Haru Ride', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'DRAMAtical Murder', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'HaNaYaMaTa', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Jinsei', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Himegoto', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Fran♥cesca', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Puri Para', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Barakamon', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Akame ga Kill!', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Gekkan Shoujo Nozaki-kun', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Space☆Dandy 2nd Season', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Yami Shibai 2nd Season', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Mobile Suit Gundam-san', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Sailor Moon: Crystal', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Sword Art Online II', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Shounen Hollywood: Holly Stage for 49', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Aldnoah.Zero', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Shirogane no Ishi: Argevollen', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Tokyo Ghoul', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: '[Locodol]', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Rail Wars!', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Barakamon: Mijikamon', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Free!: Eternal Summer', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Bakumatsu Rock', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Kyoukai no Kanata: Shinonome', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'ImoCho. OVA', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Inari, Konkon, Koi Iroha. OVA', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'No Game No Life Specials', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Blade & Soul Specials', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Mangaka-san to Assistant-san Specials', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Sabagebu!', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Saint Seiya: Legend of Sanctuary', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Kuroko no Basket: Mou Ikkai Yarimasen ka', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Isshuukan Friends. Specials', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Miss Monochrome: Supporter', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Hayate no Gotoku! OVA', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: "Persona 3 the Movie 2: Midsummer Knight's Dream", url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Tamayura: More Aggressive - Tsuitachi Dake no Shuugakuryokou, Nanode', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Tonari no Seki-kun Specials', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Noucome OVA', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Magi: Sinbad no Bouken', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Initial D Final Stage', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Seitokai Yakuindomo* S2 OVA', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'GJ-bu@ OVA', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'World Fool News', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'M3: Sono Kuroki Hagane', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Escha & Logy no Atelier: Tasogare no Sora no Renkinjutsushi', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Mekakucity Actors', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Date A Live II', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Sidonia no Kishi', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Inugami-san to Nekoyama-san', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Gochuumon wa Usagi Desu ka?', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Ping Pong The Animation', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Ryuugajou Nanana no Maizoukin', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Yu-Gi-Oh! Arc-V', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Hitsugi no Chaika', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'No Game No Life', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Fuuun Ishin Dai☆Shogun', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Black Bullet', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Kanojo ga Flag wo Oraretara', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Mahou Shoujo Taisen', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Soul Eater Not!', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Isshuukan Friends', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Love Live! School Idol Project 2nd Season', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Mangaka-san to Assistant-san to', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Hero Bank', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Haikyuu!!', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Baby Steps', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Gokukoku no Brynhildr', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Break Blade (TV)', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Dragon Ball Kai (2014)', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Kamigami no Asobi', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Kenzen Robo Daimidaler', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Soredemo Sekai wa Utsukushii', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Kiniro no Corda: Blue♪Sky', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Kindaichi Shounen no Jikenbo Returns', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Mahouka Koukou no Rettousei', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Seikoku no Dragonar', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Captain Earth', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Abarenbou Kishi!! Matsutarou', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Lady Jewelpet', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: "JoJo's Bizarre Adventure: Stardust Crusaders", url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Fairy Tail S2', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Bokura wa Minna Kawaisou', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Mushishi Zoku Shou', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Akuma no Riddle', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Selector Infected WIXOSS', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Blade and Soul', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Pokemon XY: Mega Evolution', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: '12-sai.: Kiss, Kirai, Suki', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Marvel Disk Wars: The Avengers endgame', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Majin Bone', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Haiyore! Nyaruko-san W OVA', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Mikakunin de Shinkoukei OVA 2', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Maken-Ki! Two Specials', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Choujigen Game Neptune: The Animation OVA', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Wild Adapter', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Witch Craft Works Specials', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Onee-chan ga Kita Special', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Keroro', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Sengoku Musou SP: Sanada no Shou', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Paulette no Isu', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Mikakunin de Shinkoukei: Mite. Are ga Watashitachi no Tomatteiru Ryokan yo', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Tsubasa to Hotaru', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Sekaiichi Hatsukoi Movie: Yokozawa Takafumi no Baai', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Mitsuwano', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Yuushibu OVA', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Fate/kaleid liner Prisma☆Illya (2014)', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Harmonie', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Kuro no Sumika -Chronus-', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Ookii 1 Nensei to Chiisana 2 Nensei', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Brothers Conflict Special', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Hetalia: The Beautiful World Extra Disc', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Noragami OVA', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Wonder Momo', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Kamisama no Inai Nichiyoubi Special', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Happiness Charge Precure!', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Little Busters!: EX', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'The iDOLM@STER Movie: Kagayaki no Mukougawa e!', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Kimi no Iru Machi OVA', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Inari, Konkon, Koi Iroha', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Maken-Ki! Two', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Tonari no Seki-kun OVA', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Wizard Barristers: Benmashi Cecil', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Nourin', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Sakura Trick', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Sekai Seifuku: Bouryaku no Zvezda', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Nisekoi', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Wake Up, Girls!', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Wake Up, Girls! Shichinin no Idol', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Go! Go! 575', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Mikakunin de Shinkoukei', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Hoozuki no Reitetsu', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Strange+', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Onee-chan ga Kita', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Pupa', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Mahou Sensou', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Z/X: Ignition', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Chuunibyou demo Koi ga Shitai! Ren', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Gin no Saji 2nd Season', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Youkai Watch', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Super Sonico The Animation', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Wooser no Sono Higurashi 2 Kakusei-hen', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Hamatora The Animation', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'D-Frag!', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Nobunaga the Fool', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Toaru Hikuushi e no Koiuta', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Nobunagun', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Noragami', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Minna Atsumare! Falcom Gakuen', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'ImoCho', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Saki: Zenkoku-hen', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Witch Craft Works', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Tonari no Seki-kun', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Seitokai Yakuindomo* S2', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Mushishi Special: Hihamukage', url: '../src/paginas/todos-los-animes/2014/informacion/' },
            { title: 'Space☆Dandy', url: '../src/paginas/todos-los-animes/2014/informacion/'},
            { title: 'Robot Girls Z', url: '../src/paginas/todos-los-animes/2014/informacion/' },



            { title: 'Sword Art Online: Extra Edition', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Neppuu Kairiku Bushi Road', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Pokemon XY: New Year Special', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Ansatsu Kyoushitsu', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Zetsumetsu Kigu Shoujo: Amazing Twins', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Buddy Complex', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Majokko Shimai no Yoyo to Nene', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Chuu-ni Byou! Ren Lite', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Machine-Doll wa Kizutsukanai Specials', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Freezing Vibration Specials', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Uta no☆Prince-sama♪ Maji Love 2000%: Shining Star Xmas', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Pupipo!', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Genshiken Nidaime OVA', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Double Circle', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Natsume Yuujinchou: Nyanko-sensei to Hajimete no Otsukai', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Mou Hitotsu no Mirai wo', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Sekai de Ichiban Tsuyoku Naritai! Specials', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Shingeki no Kyojin OVA', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Date A Live OVA', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Blood Lad OVA', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Kuroko no Basket OVA', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Ghost in the Shell: Arise - Border:2 Ghost Whispers', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Love Live! School Idol Project OVA', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Bayonetta: Bloody Fate', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Persona 3 the Movie 1: Spring of Birth', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Kyoukai no Kanata: Idol Saiban! Mayoi Nagara mo Kimi wo Sabaku Tami', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Kyousou Giga (TV) Specials', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'IS: Infinite Stratos 2 - Hitonatsu no Omoide', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Sakasama no Patema', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Hinata no Aoshigure', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Diabolik Lovers Recap', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Mahou Shoujo Madoka★Magica Movie 3: Hangyaku no Monogatari', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Tonari no Kaibutsu-kun: Tonari no Gokudou-kun', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Tokyo Ravens Specials', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Pokemon XY', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Wonder Garden', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Meganebu!', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Kakumeiki Valvrave 2nd Season', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Ore no Nounai Sentakushi ga, Gakuen Love Comedy wo Zenryoku de Jama Shiteiru', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Kyousou Giga (TV)', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'BlazBlue: Alter Memory', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Galilei Donna', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Samurai Flamenco', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Yozakura Quartet: Tsuki ni Naku', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Tokyo Ravens', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Yowamushi Pedal', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Machine-Doll wa Kizutsukanai', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Non Non Biyori', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Gundam Build Fighters', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Magi 2', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Kuroko no Basket 2', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Hajime no Ippo: Rising', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Phi Brain: Kami no Puzzle 3rd Season', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Yozakura Quartet: Hana no Uta', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Aoki Hagane no Arpeggio: Ars Nova', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Naruto Shippuden: Sunny Side Battle', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Tesagure! Bukatsumono', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Log Horizon', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Teekyuu 3', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Little Busters!: Refrain', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Freezing Vibration', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Walkure Romanze', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Sekai de Ichiban Tsuyoku Naritai!', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Gingitsune', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Nagi no Asukara', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Kill la Kill', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Golden Time', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Strike the Blood', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Outbreak Company', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Yuushibu', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'White Album 2 ( 2013)', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Diamond no Ace', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'IS: Infinite Stratos 2', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Kyoukai no Kanata', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Coppelion', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Pokemon: The Origin', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Recorder to Randoseru Mi☆ Special', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Miss Monochrome', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Kara no Kyoukai: Mirai Fukuin', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Fate/kaleid liner Prisma☆Illya Specials', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Amnesia OVA', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Oregairu OVA', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Diabolik Lovers', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Super Seisyun Brothers', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Takanashi Rikka Kai: Chuunibyou demo Koi ga Shitai! Movie', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Chihayafuru 2: Waga Mi Yo ni Furu Nagame Seshi Ma ni', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Free! Specials', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Captain Harlock', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Ano Hi Mita Hana no Namae wo Bokutachi wa Mada Shiranai. Movie', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Suisei no Gargantia OVA', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Little Busters!: Sekai no Saitou wa Ore ga Mamoru!', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'One Piece: Episode of Merry - Mou Hitori no Nakama no Monogatari', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Kamisama Hajimemashita OVA', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Oreimo 2 Specials', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Fairy Tail x Rave', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Yowamushi Pedal: Special Ride', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Minami-ke Natsuyasumi', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Kobayashi ga Kawai Sugite Tsurai!!', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Sukitte Ii na yo. OVA', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Corpse Party: Tortured Souls - Bougyakusareta Tamashii no Jukyou', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Mirai Nikki Redial', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Jewelpet Twinkle☆: Hohoemi no Niji ni Dokki☆Doki!', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Mondaiji-tachi ga Isekai kara Kuru Sou Desu yo? OVA', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Buki yo Saraba', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Shingeki no Kyojin Picture Drama', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Yami Shibai', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Ark IX', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Gatchaman Crowds', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Kimi no Iru Machi', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Pokemon: Pikachu to Eevee Friends', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Futari wa Milky Holmes', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Choujigen Game Neptune: The Animation', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Gin no Saji', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Makai Ouji: Devils and Realist', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Watamote!', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Recorder to Randoseru Mi☆', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Fantasista Doll', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Hakkenden: Touhou Hakken Ibun 2nd Season', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'High School DxD New', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Genshiken Nidaime', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Blood Lad', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Kami nomi zo Shiru Sekai: Megami-hen', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Teekyuu 2', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Uchouten Kazoku', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Fate/kaleid liner Prisma☆Illya', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Monogatari Series: Second Season', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Genei wo Kakeru Taiyou', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Kiniro Mosaic', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Ro-Kyu-Bu! SS', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Shingeki no Kyojin Recap', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Gintama: Kanketsu-hen - Yorozuya yo Eien Nare', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Danganronpa: The Animation', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Love Lab', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Seitokai no Shukujitsu', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Servant x Service', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Stella Jogakuin Koutou-ka C³-bu', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Rozen Maiden (2013)', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Tamayura: More Aggressive', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Kitakubu Katsudou Kiroku', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Senki Zesshou Symphogear G', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Free!', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Brothers Conflict', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Senyuu. 2', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Gifuu Doudou!!: Kanetsugu to Keiji', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Kamisama no Inai Nichiyoubi', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Inu to Hasami wa Tsukaiyou', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Hyakka Ryouran: Samurai Bride Specials', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Busou Shinki OVA', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Hentai Ouji to Warawanai Neko. Specials', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Papa no Iukoto wo Kikinasai! OVA', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Ghost in the Shell: Arise - Border:1 Ghost Pain', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Ro-Kyu-Bu!: Tomoka no Ichigo Sundae', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Rescue Me!', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Chuunibyou demo Koi ga Shitai!: Kirameki no... Slapstick Noel', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Kami nomi zo Shiru Sekai:Magical☆Star Kanon 100%', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Kingdom 2', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Hal', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Kotonoha no Niwa', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Yuyushiki: Nyanyashiki', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Yama no Susume: Kabette Kowakunai no?', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Mangirl!: Asobu Henshuu Girl', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Saint☆Onii-san (Movie)', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Miyakawa-ke no Kuufuku', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Senyuu Specials', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Hetalia: The Beautiful World Specials', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Steins;Gate: Fuka Ryouiki no Déjà vu', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Hentai Ouji to Warawanai Neko', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Aura: Maryuuinkouga Saigo no Tatakai', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Toaru Kagaku no Railgun S', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Kakumeiki Valvrave', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Yuyushiki', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Puchitto Gargantia', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Hayate no Gotoku! Cuties', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Arata Kangatari', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: "Sparrow's Hotel", url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Haiyore! Nyaruko-san W', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Mushibugyou', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Aiura', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'OreImo 2', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Shingeki no Kyojin', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Yondemasu yo, Azazel-san. Z', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Namiuchigiwa no Muromi-san', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Suisei no Gargantia', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Toriko & One Piece & Dragon Ball Z Super Collaboration', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Hyakka Ryouran: Samurai Bride', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Zettai Bouei Leviathan', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Devil Survivor 2 The Animation', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Photokano', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Oregairu', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Karneval', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Aku no Hana', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Dansai Bunri no Crime Edge', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Hataraku Maou-sama!', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Ginga Kikoutai Majestic Prince', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Uta no☆Prince-sama♪ Maji Love 2000%', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Date A Live', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Ishida to Asakura Special', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Dragon Ball Z: Kami to Kami', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Dakara Boku wa, H ga Dekinai. OVA', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Vanquished Queens', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Koi to Senkyo to Chocolate Special', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Arcana Famiglia: Capriccio - stile Arcana Famiglia', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: "Tamako Market: Dera's BAR", url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Carnival Phantasm: HibiChika Special', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'RDG: Red Data Girl', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Vassalord', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Cyclops Shoujo Saipu~', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Hanasaku Iroha: Home Sweet Home', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Arve Rezzle: Kikaijikake no Yoseitachi', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Little Witch Academia', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Death Billiards', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Ryo', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Nozoki Ana', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Code:Breaker OVA', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Kuroko no Basket: Tip Off', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Toaru Majutsu no Index: Endymion no Kiseki', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Kagaku na Yatsura', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Fairy Tail: Prologue 「Hajimari no Asa」', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Joshiraku OVA', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Chokkyuu Hyoudai Robot Anime: Straight Title', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'SKET Dance OVA', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Kuroko no Basket NG-shuu', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Ebiten: Kouritsu Ebisugawa Koukou Tenmonbu OVA', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Hetalia: The Beautiful World', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Mondaiji-tachi ga Isekai kara Kuru Sou Desu yo?', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Chihayafuru 2', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Hunter x Hunter: Phantom Rouge', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Sasami-san@Ganbaranai', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Vividred Operation', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Boku wa Tomodachi ga Sukunai NEXT', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Tamako Market', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Kotoura-san', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'GJ-bu', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Senyuu', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Love Live!: School Idol Project', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Bakumatsu Gijinden Roman', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Zettai Karen Children: The Unlimited - Hyoubu Kyousuke', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Hakkenden: Touhou Hakken Ibun', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Amnesia', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'OreShura', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Senran Kagura', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Ishida to Asakura', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Minami-ke Tadaima', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Maoyuu Maou Yuusha', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Da Capo III Episode 0', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Da Capo III', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Cuticle Tantei Inaba', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Mangirl!', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Ai Mai Mi', url: '../src/paginas/todos-los-animes/2013/informacion/'},
            { title: 'Nekomonogatari: Kuro', url: '../src/paginas/todos-los-animes/2013/informacion/' },
            { title: 'Yama no Susume', url: '../src/paginas/todos-los-animes/2013/informacion/' },



            { title: 'Kokoro Connect: Michi Random', url: '../src/paginas/todos-los-animes/2012/informacion/'},
            { title: 'Ao no Exorcist Movie', url: '../src/paginas/todos-los-animes/2012/informacion/' },
            { title: 'OniAi Specials', url: '../src/paginas/todos-los-animes/2012/informacion/'},
            { title: 'Sukitte Ii na yo Specials', url: '../src/paginas/todos-los-animes/2012/informacion/' },
            { title: 'Inferno Cop', url: '../src/paginas/todos-los-animes/2012/informacion/'},
            { title: 'Saki: Achiga-hen - Episode of Side-A Specials', url: '../src/paginas/todos-los-animes/2012/informacion/' },
            { title: 'One Piece Special: Glorious Island', url: '../src/paginas/todos-los-animes/2012/informacion/'},
            { title: 'AKB0048 Next Stage', url: '../src/paginas/todos-los-animes/2012/informacion/' },
            { title: 'Boku no Imouto wa "Osaka Okan"', url: '../src/paginas/todos-los-animes/2012/informacion/'},
            { title: 'Girls und Panzer', url: '../src/paginas/todos-los-animes/2012/informacion/' },
            { title: 'Junjou Romantica OVA', url: '../src/paginas/todos-los-animes/2012/informacion/'},
            { title: 'Chuu-ni Byou!: Depth of Field - Ai to Nikushimi Gekijyo', url: '../src/paginas/todos-los-animes/2012/informacion/' },
            { title: 'Tasogare Otome x Amnesia Special', url: '../src/paginas/todos-los-animes/2012/informacion/'},
            { title: 'One Piece: Episode of Luffy - Hand Island no Bouken', url: '../src/paginas/todos-los-animes/2012/informacion/' },
            { title: 'One Piece Film Z', url: '../src/paginas/todos-los-animes/2012/informacion/'},
            { title: 'Acchi Kocchi: Place=Princess', url: '../src/paginas/todos-los-animes/2012/informacion/' },
            { title: 'Saint☆Onii-san', url: '../src/paginas/todos-los-animes/2012/informacion/'},
            { title: 'Ebiten: Kouritsu Ebisugawa Koukou Tenmonbu Specials', url: '../src/paginas/todos-los-animes/2012/informacion/' },
            { title: 'Haiyore! Nyaruko-san: Yasashii Teki no Shitome-kata', url: '../src/paginas/todos-los-animes/2012/informacion/'},
            { title: 'Evangelion: 3.33 You Can (Not) Redo', url: '../src/paginas/todos-los-animes/2012/informacion/' },
            { title: 'Girls und Panzer: Shoukai Shimasu!', url: '../src/paginas/todos-los-animes/2012/informacion/'},
            { title: 'Sword Art Offline', url: '../src/paginas/todos-los-animes/2012/informacion/' },
            { title: 'Kono Danshi, Ningyo Hiroimashita', url: '../src/paginas/todos-los-animes/2012/informacion/'},
            { title: 'Arata naru Sekai: Mirai-hen', url: '../src/paginas/todos-los-animes/2012/informacion/' },
            { title: 'Initial D Fifth Stage', url: '../src/paginas/todos-los-animes/2012/informacion/'},
            { title: 'Kore wa Zombie Desu ka? of the Dead OVA', url: '../src/paginas/todos-los-animes/2012/informacion/' },
            { title: 'The iDOLM@STER: Shiny Festa', url: '../src/paginas/todos-los-animes/2012/informacion/'},
            { title: 'Seitokai no Ichizon Lv.2', url: '../src/paginas/todos-los-animes/2012/informacion/' },
            { title: 'Aoi Sekai no Chuushin de', url: '../src/paginas/todos-los-animes/2012/informacion/'},
            { title: 'Fuse: Teppou Musume no Torimonochou', url: '../src/paginas/todos-los-animes/2012/informacion/' },
            { title: 'Nerawareta Gakuen', url: '../src/paginas/todos-los-animes/2012/informacion/'},
            { title: 'Kami nomi zo Shiru Sekai: Tenri-hen', url: '../src/paginas/todos-los-animes/2012/informacion/' },
            { title: 'Mahou Shoujo Madoka★Magica Movie 2: Eien no Monogatari', url: '../src/paginas/todos-los-animes/2012/informacion/'},
            { title: 'Upotte!! OVA', url: '../src/paginas/todos-los-animes/2012/informacion/' },
            { title: 'Psycho-Pass', url: '../src/paginas/todos-los-animes/2012/informacion/'},
            { title: 'Robotics;Notes', url: '../src/paginas/todos-los-animes/2012/informacion/' },
            { title: 'Medaka Box Abnormal', url: '../src/paginas/todos-los-animes/2012/informacion/'},
            { title: 'Jormungand: Perfect Order', url: '../src/paginas/todos-los-animes/2012/informacion/' },
            { title: 'Sakurasou no Pet na Kanojo', url: '../src/paginas/todos-los-animes/2012/informacion/'},
            { title: 'Girls und Panzer', url: '../src/paginas/todos-los-animes/2012/informacion/' },
            { title: 'Ixion Saga DT', url: '../src/paginas/todos-los-animes/2012/informacion/'},
            { title: 'Aikatsu!', url: '../src/paginas/todos-los-animes/2012/informacion/' },
            { title: 'Code:Breaker', url: '../src/paginas/todos-los-animes/2012/informacion/'},
            { title: 'Magi', url: '../src/paginas/todos-los-animes/2012/informacion/' },
            { title: 'Sukitte Ii na yo', url: '../src/paginas/todos-los-animes/2012/informacion/'},
            { title: 'Yu-Gi-Oh! Zexal Second', url: '../src/paginas/todos-los-animes/2012/informacion/' },
            { title: 'Teekyuu', url: '../src/paginas/todos-los-animes/2012/informacion/'},
            { title: 'Little Busters!', url: '../src/paginas/todos-los-animes/2012/informacion/' },
            { title: 'Onii-chan Dakedo Ai Sae Areba Kankeinai yo ne', url: '../src/paginas/todos-los-animes/2012/informacion/'},
            { title: 'Bakuman. 3', url: '../src/paginas/todos-los-animes/2012/informacion/' },
            { title: 'Mahou Shoujo Madoka★Magica Movie 1: Hajimari no Monogatari', url: '../src/paginas/todos-los-animes/2012/informacion/'},
            { title: "JoJo's Bizarre Adventure The Animation", url: '../src/paginas/todos-los-animes/2012/informacion/' },
            { title: 'To LOVE-Ru Darkness', url: '../src/paginas/todos-los-animes/2012/informacion/'},
            { title: 'K', url: '../src/paginas/todos-los-animes/2012/informacion/' },
            { title: 'Zetsuen no Tempest', url: '../src/paginas/todos-los-animes/2012/informacion/'},
            { title: 'Busou Shinki', url: '../src/paginas/todos-los-animes/2012/informacion/' },
            { title: 'Minami-ke Omatase', url: '../src/paginas/todos-los-animes/2012/informacion/'},
            { title: 'Btooom!', url: '../src/paginas/todos-los-animes/2012/informacion/' },
            { title: 'Chuunibyou demo Koi ga Shitai!', url: '../src/paginas/todos-los-animes/2012/informacion/'},
            { title: "Gintama' (2012)", url: '../src/paginas/todos-los-animes/2012/informacion/' },
            { title: 'Kamisama Hajimemashita', url: '../src/paginas/todos-los-animes/2012/informacion/'},
            { title: 'Hayate no Gotoku! Can’t Take My Eyes Off You', url: '../src/paginas/todos-los-animes/2012/informacion/' },
            { title: 'Wooser no Sono Higurashi', url: '../src/paginas/todos-los-animes/2012/informacion/'},
            { title: 'Tonari no Kaibutsu-kun', url: '../src/paginas/todos-los-animes/2012/informacion/' },
            { title: 'Hiiro no Kakera Dai Ni Shou', url: '../src/paginas/todos-los-animes/2012/informacion/'},
            { title: 'Shinsekai yori', url: '../src/paginas/todos-los-animes/2012/informacion/' },
            { title: 'Code Geass: Boukoku no Akito', url: '../src/paginas/todos-los-animes/2012/informacion/'},
            { title: 'Asura', url: '../src/paginas/todos-los-animes/2012/informacion/' },
            { title: 'Chuu-ni Byou! Lite', url: '../src/paginas/todos-los-animes/2012/informacion/'},
            { title: 'Boku wa Tomodachi ga Sukunai: Add-on Disc', url: '../src/paginas/todos-los-animes/2012/informacion/' },
            { title: 'Inu x Boku SS Special', url: '../src/paginas/todos-los-animes/2012/informacion/'},
            { title: 'Hagure Yuusha no Estetica: Hajirai Ippai', url: '../src/paginas/todos-los-animes/2012/informacion/' },
            { title: 'Hori-san to Miyamura-kun', url: '../src/paginas/todos-los-animes/2012/informacion/'},
            { title: 'Hashi no Mukou', url: '../src/paginas/todos-los-animes/2012/informacion/' },
            { title: 'Accel World EX', url: '../src/paginas/todos-los-animes/2012/informacion/'},
            { title: 'Highschool DxD OVA', url: '../src/paginas/todos-los-animes/2012/informacion/' },
            { title: 'One Piece: Episode of Nami', url: '../src/paginas/todos-los-animes/2012/informacion/'},
            { title: 'Dakara Boku wa, H ga Dekinai Recap', url: '../src/paginas/todos-los-animes/2012/informacion/' },
            { title: 'Nazo no Kanojo X OVA', url: '../src/paginas/todos-los-animes/2012/informacion/'},
            { title: 'Persona 4 The Animation: No One is Alone', url: '../src/paginas/todos-los-animes/2012/informacion/' },
            { title: 'Nogizaka Haruka no Himitsu: Finale', url: '../src/paginas/todos-los-animes/2012/informacion/'},
            { title: 'Fairy Tail: Houou no Miko', url: '../src/paginas/todos-los-animes/2012/informacion/' },
            { title: 'Tantei Opera Milky Holmes: Alternative', url: '../src/paginas/todos-los-animes/2012/informacion/'},
            { title: 'To LOVE-Ru Darkness OVA', url: '../src/paginas/todos-los-animes/2012/informacion/' },
            { title: 'Shinryaku!! Ika Musume OVA', url: '../src/paginas/todos-los-animes/2012/informacion/'},
            { title: 'Dantalian no Shoka: Ibarahime', url: '../src/paginas/todos-los-animes/2012/informacion/' },
            { title: 'Corpse Party: Missing Footage', url: '../src/paginas/todos-los-animes/2012/informacion/'},
            { title: 'Naruto: Shippuuden Movie 6 - Road to Ninja', url: '../src/paginas/todos-los-animes/2012/informacion/' },
            { title: 'Code Geass: Nunnally in Wonderland', url: '../src/paginas/todos-los-animes/2012/informacion/'},
            { title: 'Guilty Crown: Lost Christmas', url: '../src/paginas/todos-los-animes/2012/informacion/' },
            { title: 'Accel World Specials', url: '../src/paginas/todos-los-animes/2012/informacion/'},
            { title: 'Ijime', url: '../src/paginas/todos-los-animes/2012/informacion/' },
            { title: "Mahou Shoujo Lyrical Nanoha: The Movie 2nd A's", url: '../src/paginas/todos-los-animes/2012/informacion/'},
            { title: 'Ebiten: Kouritsu Ebisugawa Koukou Tenmonbu', url: '../src/paginas/todos-los-animes/2012/informacion/' },
            { title: 'Papa no Iukoto wo Kikinasai!: Pokkapoka', url: '../src/paginas/todos-los-animes/2012/informacion/'},
            { title: 'Oda Nobuna no Yabou', url: '../src/paginas/todos-los-animes/2012/informacion/' },
            { title: 'Kokoro Connect', url: '../src/paginas/todos-los-animes/2012/informacion/'},
            { title: 'Kyoukai Senjou no Horizon II', url: '../src/paginas/todos-los-animes/2012/informacion/' },
            { title: 'Hyouka: Motsubeki Mono wa', url: '../src/paginas/todos-los-animes/2012/informacion/'},
            { title: "Dog Days' S2", url: '../src/paginas/todos-los-animes/2012/informacion/' },
            { title: 'Dakara Boku wa, H ga Dekinai', url: '../src/paginas/todos-los-animes/2012/informacion/'},
            { title: 'Hagure Yuusha no Estetica', url: '../src/paginas/todos-los-animes/2012/informacion/' },
            { title: 'Koi to Senkyo to Chocolate', url: '../src/paginas/todos-los-animes/2012/informacion/'},
            { title: 'Kono Naka ni Hitori, Imouto ga Iru!', url: '../src/paginas/todos-los-animes/2012/informacion/' },
            { title: 'Joshiraku', url: '../src/paginas/todos-los-animes/2012/informacion/'},
            { title: 'Binbougami ga!', url: '../src/paginas/todos-los-animes/2012/informacion/' },
            { title: 'Yuru Yuri S2 ♪♪', url: '../src/paginas/todos-los-animes/2012/informacion/'},
            { title: 'Arcana Famiglia', url: '../src/paginas/todos-los-animes/2012/informacion/' },
            { title: 'Tari Tari', url: '../src/paginas/todos-los-animes/2012/informacion/'},
            { title: 'Muv-Luv Alternative: Total Eclipse', url: '../src/paginas/todos-los-animes/2012/informacion/' },
            { title: 'Campione!', url: '../src/paginas/todos-los-animes/2012/informacion/'},
            { title: 'The iDOLM@STER: 765 Pro to Iu Monogatari', url: '../src/paginas/todos-los-animes/2012/informacion/' },
            { title: "Queen's Blade: Rebellion Specials", url: '../src/paginas/todos-los-animes/2012/informacion/'},
            { title: 'Ookami Kodomo no Ame to Yuki', url: '../src/paginas/todos-los-animes/2012/informacion/' },
            { title: 'Sword Art Online', url: '../src/paginas/todos-los-animes/2012/informacion/'},
            { title: 'Asa Made Jugyou Chu!', url: '../src/paginas/todos-los-animes/2012/informacion/' },
            { title: 'Sankarea OVA', url: '../src/paginas/todos-los-animes/2012/informacion/'},
            { title: 'Kingdom', url: '../src/paginas/todos-los-animes/2012/informacion/' },
            { title: 'Blood-C: The Last Dark', url: '../src/paginas/todos-los-animes/2012/informacion/'},
            { title: "Queen's Blade Rebellion vs. Hagure Yuusha no Estetica", url: '../src/paginas/todos-los-animes/2012/informacion/' },
            { title: 'Another OVA', url: '../src/paginas/todos-los-animes/2012/informacion/'},
            { title: 'Ai Mai! Moe Can Change!', url: '../src/paginas/todos-los-animes/2012/informacion/' },
            { title: 'Tamayura: Hitotose - Attakai Kaze no Omoide Nanode', url: '../src/paginas/todos-los-animes/2012/informacion/'},
            { title: 'AKB0048', url: '../src/paginas/todos-los-animes/2012/informacion/' },
            { title: 'C³ Special', url: '../src/paginas/todos-los-animes/2012/informacion/'},
            { title: 'New Prince of Tennis SP', url: '../src/paginas/todos-los-animes/2012/informacion/' },
            { title: 'Hyouka', url: '../src/paginas/todos-los-animes/2012/informacion/'},
            { title: 'Eureka Seven AO', url: '../src/paginas/todos-los-animes/2012/informacion/' },
            { title: 'Jormungand', url: '../src/paginas/todos-los-animes/2012/informacion/'},
            { title: 'Haiyore! Nyaruko-san', url: '../src/paginas/todos-los-animes/2012/informacion/' },
            { title: 'Tasogare Otome x Amnesia', url: '../src/paginas/todos-los-animes/2012/informacion/'},
            { title: 'Saki: Achiga-hen - Episode of Side-A', url: '../src/paginas/todos-los-animes/2012/informacion/' },
            { title: 'Nazo no Kanojo X', url: '../src/paginas/todos-los-animes/2012/informacion/'},
            { title: 'Kuroko no Basket', url: '../src/paginas/todos-los-animes/2012/informacion/' },
            { title: 'Phi Brain: Kami no Puzzle 2nd Season', url: '../src/paginas/todos-los-animes/2012/informacion/'},
            { title: 'Upotte!!', url: '../src/paginas/todos-los-animes/2012/informacion/' },
            { title: 'Fate/Zero 2nd Season', url: '../src/paginas/todos-los-animes/2012/informacion/'},
            { title: 'Sankarea', url: '../src/paginas/todos-los-animes/2012/informacion/' },
            { title: 'Acchi Kocchi', url: '../src/paginas/todos-los-animes/2012/informacion/'},
            { title: 'Kore wa Zombie Desu ka? of the Dead', url: '../src/paginas/todos-los-animes/2012/informacion/' },
            { title: 'Medaka Box', url: '../src/paginas/todos-los-animes/2012/informacion/'},
            { title: 'Recorder to Randoseru Re♪', url: '../src/paginas/todos-los-animes/2012/informacion/' },
            { title: 'Rock Lee no Seishun Full-Power Ninden', url: '../src/paginas/todos-los-animes/2012/informacion/'},
            { title: 'Zetman', url: '../src/paginas/todos-los-animes/2012/informacion/' },
            { title: "Queen's Blade: Rebellion", url: '../src/paginas/todos-los-animes/2012/informacion/'},
            { title: 'Saint Seiya Omega', url: '../src/paginas/todos-los-animes/2012/informacion/' },
            { title: 'Uchuu Kyoudai', url: '../src/paginas/todos-los-animes/2012/informacion/'},
            { title: 'Hiiro no Kakera', url: '../src/paginas/todos-los-animes/2012/informacion/' },
            { title: 'Accel World', url: '../src/paginas/todos-los-animes/2012/informacion/'},
            { title: 'Highschool DxD Specials', url: '../src/paginas/todos-los-animes/2012/informacion/' },
            { title: 'Strike Witches Movie', url: '../src/paginas/todos-los-animes/2012/informacion/'},
            { title: 'Kimi no Iru Machi', url: '../src/paginas/todos-los-animes/2012/informacion/' },
            { title: 'Shijou Saikyou no Deshi Kenichi OVA', url: '../src/paginas/todos-los-animes/2012/informacion/'},
            { title: 'Maken-Ki! OVA', url: '../src/paginas/todos-los-animes/2012/informacion/' },
            { title: 'Sora no Otoshimono: Tokeijikake no Angeloid', url: '../src/paginas/todos-los-animes/2012/informacion/'},
            { title: 'Steins;Gate: Oukoubakko no Poriomania', url: '../src/paginas/todos-los-animes/2012/informacion/' },
            { title: 'Smile Precure!', url: '../src/paginas/todos-los-animes/2012/informacion/'},
            { title: 'Black★Rock Shooter (TV)', url: '../src/paginas/todos-los-animes/2012/informacion/' },
            { title: 'Inu x Boku SS', url: '../src/paginas/todos-los-animes/2012/informacion/'},
            { title: 'Papa no Iukoto wo Kikinasai!', url: '../src/paginas/todos-los-animes/2012/informacion/' },
            { title: 'Ano Natsu de Matteru', url: '../src/paginas/todos-los-animes/2012/informacion/'},
            { title: 'Nisemonogatari', url: '../src/paginas/todos-los-animes/2012/informacion/' },
            { title: 'Mouretsu Pirates', url: '../src/paginas/todos-los-animes/2012/informacion/'},
            { title: 'Aquarion Evol', url: '../src/paginas/todos-los-animes/2012/informacion/' },
            { title: 'Zero no Tsukaima F - Final Series', url: '../src/paginas/todos-los-animes/2012/informacion/'},
            { title: 'Area no Kishi', url: '../src/paginas/todos-los-animes/2012/informacion/' },
            { title: 'Sacred Seven: Shirogane no Tsubasa', url: '../src/paginas/todos-los-animes/2012/informacion/'},
            { title: 'Highschool DxD', url: '../src/paginas/todos-los-animes/2012/informacion/' },
            { title: 'Amagami SS+ plus', url: '../src/paginas/todos-los-animes/2012/informacion/'},
            { title: 'Kill Me Baby', url: '../src/paginas/todos-los-animes/2012/informacion/' },
            { title: 'Recorder to Randoseru Do♪', url: '../src/paginas/todos-los-animes/2012/informacion/' },
            { title: 'New Prince of Tennis', url: '../src/paginas/todos-los-animes/2012/informacion/'},
            { title: 'Tantei Opera Milky Holmes Dai 2 Maku', url: '../src/paginas/todos-los-animes/2012/informacion/' },



            { title: 'Fate/Prototype', url: '../src/paginas/todos-los-animes/2011/informacion/'},
            { title: 'Another', url: '../src/paginas/todos-los-animes/2011/informacion/' },
            { title: 'Senki Zesshou Symphogear', url: '../src/paginas/todos-los-animes/2011/informacion/'},
            { title: 'Toradora!: Bentou no Gokui', url: '../src/paginas/todos-los-animes/2011/informacion/' },
            { title: 'Ben-To Specials', url: '../src/paginas/todos-los-animes/2011/informacion/'},
            { title: 'Maken-Ki! Specials', url: '../src/paginas/todos-los-animes/2011/informacion/' },
            { title: 'Hidan no Aria OVA', url: '../src/paginas/todos-los-animes/2011/informacion/'},
            { title: 'Dragon Ball: Episode of Bardock', url: '../src/paginas/todos-los-animes/2011/informacion/' },
            { title: 'IS: Infinite Stratos Encore - Koi ni Kogareru Sextet', url: '../src/paginas/todos-los-animes/2011/informacion/'},
            { title: 'K-On! (Movie)', url: '../src/paginas/todos-los-animes/2011/informacion/' },
            { title: 'Carnival Phantasm EX Season', url: '../src/paginas/todos-los-animes/2011/informacion/'},
            { title: 'Ikkitousen: Shuugaku Toushi Keppuuroku', url: '../src/paginas/todos-los-animes/2011/informacion/' },
            { title: 'Usagi Drop Specials', url: '../src/paginas/todos-los-animes/2011/informacion/'},
            { title: "Carnival Phantasm: Ilya's Castle", url: '../src/paginas/todos-los-animes/2011/informacion/' },
            { title: 'Ao no Exorcist: Kuro no Iede', url: '../src/paginas/todos-los-animes/2011/informacion/'},
            { title: 'Guilty Crown', url: '../src/paginas/todos-los-animes/2011/informacion/' },
            { title: 'UN-GO', url: '../src/paginas/todos-los-animes/2011/informacion/'},
            { title: 'Kono Danshi, Uchuujin to Tatakaemasu', url: '../src/paginas/todos-los-animes/2011/informacion/' },
            { title: 'Ben-To', url: '../src/paginas/todos-los-animes/2011/informacion/'},
            { title: 'Mirai Nikki', url: '../src/paginas/todos-los-animes/2011/informacion/' },
            { title: 'Shakugan no Shana III (Final)', url: '../src/paginas/todos-los-animes/2011/informacion/'},
            { title: 'Deadman Wonderland OVA', url: '../src/paginas/todos-los-animes/2011/informacion/' },
            { title: 'Boku wa Tomodachi ga Sukunai', url: '../src/paginas/todos-los-animes/2011/informacion/'},
            { title: 'Persona 4 The Animation', url: '../src/paginas/todos-los-animes/2011/informacion/' },
            { title: 'Mashiro-iro Symphony: The Color of Lovers', url: '../src/paginas/todos-los-animes/2011/informacion/'},
            { title: 'Maken-Ki!', url: '../src/paginas/todos-los-animes/2011/informacion/' },
            { title: 'Chihayafuru', url: '../src/paginas/todos-los-animes/2011/informacion/'},
            { title: 'Tamayura: Hitotose', url: '../src/paginas/todos-los-animes/2011/informacion/' },
            { title: 'Manyuu Hikenchou Specials', url: '../src/paginas/todos-los-animes/2011/informacion/'},
            { title: 'Hunter x Hunter (2011)', url: '../src/paginas/todos-los-animes/2011/informacion/' },
            { title: 'Fate/Zero', url: '../src/paginas/todos-los-animes/2011/informacion/'},
            { title: 'Maji de Watashi ni Koi Shinasai!', url: '../src/paginas/todos-los-animes/2011/informacion/' },
            { title: 'Kyoukai Senjou no Horizon', url: '../src/paginas/todos-los-animes/2011/informacion/'},
            { title: 'Phi Brain: Kami no Puzzle', url: '../src/paginas/todos-los-animes/2011/informacion/' },
            { title: 'Hunter x Hunter (2011) Latino', url: '../src/paginas/todos-los-animes/2011/informacion/'},
            { title: 'Bakuman 2', url: '../src/paginas/todos-los-animes/2011/informacion/' },
            { title: 'C³', url: '../src/paginas/todos-los-animes/2011/informacion/'},
            { title: 'Toaru Hikuushi e no Tsuioku', url: '../src/paginas/todos-los-animes/2011/informacion/' },
            { title: 'Shinryaku!? Ika Musume 2', url: '../src/paginas/todos-los-animes/2011/informacion/'},
            { title: 'Sekaiichi Hatsukoi 2', url: '../src/paginas/todos-los-animes/2011/informacion/' },
            { title: 'Boku wa Tomodachi ga Sukunai Episode 0', url: '../src/paginas/todos-los-animes/2011/informacion/'},
            { title: 'Kami nomi zo Shiru Sekai: 4-nin to Idol', url: '../src/paginas/todos-los-animes/2011/informacion/' },
            { title: 'Busou Shinki Moon Angel', url: '../src/paginas/todos-los-animes/2011/informacion/'},
            { title: 'Astarotte no Omocha! EX', url: '../src/paginas/todos-los-animes/2011/informacion/' },
            { title: "Working'!! Season 2", url: '../src/paginas/todos-los-animes/2011/informacion/'},
            { title: 'Hotarubi no Mori e', url: '../src/paginas/todos-los-animes/2011/informacion/' },
            { title: 'Tantei Opera Milky Holmes: Summer Special', url: '../src/paginas/todos-los-animes/2011/informacion/'},
            { title: 'Carnival Phantasm', url: '../src/paginas/todos-los-animes/2011/informacion/' },
            { title: 'Dragon Ball Kai Special', url: '../src/paginas/todos-los-animes/2011/informacion/'},
            { title: 'Naruto: Shippuuden Movie 5 - Blood Prison', url: '../src/paginas/todos-los-animes/2011/informacion/' },
            { title: 'Naruto: Honoo no Chuunin Shiken! Naruto vs. Konohamaru!!', url: '../src/paginas/todos-los-animes/2011/informacion/'},
            { title: 'Higurashi no Naku Koro ni Kira', url: '../src/paginas/todos-los-animes/2011/informacion/' },
            { title: 'Dantalian no Shoka', url: '../src/paginas/todos-los-animes/2011/informacion/'},
            { title: 'Manyuu Hikenchou', url: '../src/paginas/todos-los-animes/2011/informacion/' },
            { title: 'Baka to Test to Shoukanjuu Ni!', url: '../src/paginas/todos-los-animes/2011/informacion/'},
            { title: 'Usagi Drop', url: '../src/paginas/todos-los-animes/2011/informacion/' },
            { title: 'Mayo Chiki!', url: '../src/paginas/todos-los-animes/2011/informacion/'},
            { title: 'No.6', url: '../src/paginas/todos-los-animes/2011/informacion/' },
            { title: 'The iDOLM@STER', url: '../src/paginas/todos-los-animes/2011/informacion/'},
            { title: 'Yuru Yuri', url: '../src/paginas/todos-los-animes/2011/informacion/' },
            { title: 'Kaitou Tenshi Twin Angel: Kyun Kyun☆Tokimeki Paradise!!', url: '../src/paginas/todos-los-animes/2011/informacion/'},
            { title: 'Uta no Prince-sama Maji Love 1000', url: '../src/paginas/todos-los-animes/2011/informacion/' },
            { title: 'Nurarihyon no Mago: Sennen Makyou', url: '../src/paginas/todos-los-animes/2011/informacion/'},
            { title: 'Last Exile: Ginyoku no Fam', url: '../src/paginas/todos-los-animes/2011/informacion/' },
            { title: 'Kamisama no Memochou', url: '../src/paginas/todos-los-animes/2011/informacion/'},
            { title: 'Fullmetal Alchemist: The Sacred Star of Milos', url: '../src/paginas/todos-los-animes/2011/informacion/' },
            { title: 'Blood-C', url: '../src/paginas/todos-los-animes/2011/informacion/'},
            { title: 'Ro-Kyu-Bu!', url: '../src/paginas/todos-los-animes/2011/informacion/' },
            { title: 'Kamisama Dolls', url: '../src/paginas/todos-los-animes/2011/informacion/'},
            { title: 'Inazuma Eleven Go', url: '../src/paginas/todos-los-animes/2011/informacion/' },
            { title: 'Amagami SS: Imouto', url: '../src/paginas/todos-los-animes/2011/informacion/'},
            { title: 'Highschool of the Dead: Drifters of the Dead', url: '../src/paginas/todos-los-animes/2011/informacion/' },
            { title: 'Ao no Exorcist', url: '../src/paginas/todos-los-animes/2011/informacion/'},
            { title: 'Deadman Wonderland', url: '../src/paginas/todos-los-animes/2011/informacion/' },
            { title: 'Fairy Tail OVA', url: '../src/paginas/todos-los-animes/2011/informacion/'},
            { title: 'Seitokai Yakuindomo OVA', url: '../src/paginas/todos-los-animes/2011/informacion/' },
            { title: 'Hidan no Aria', url: '../src/paginas/todos-los-animes/2011/informacion/'},
            { title: 'C The Money of Soul and Possibility Control', url: '../src/paginas/todos-los-animes/2011/informacion/' },
            { title: 'Seikon no Qwaser II', url: '../src/paginas/todos-los-animes/2011/informacion/'},
            { title: 'Kami nomi zo Shiru Sekai II', url: '../src/paginas/todos-los-animes/2011/informacion/' },
            { title: 'Yu☆Gi☆Oh! Zexal', url: '../src/paginas/todos-los-animes/2011/informacion/'},
            { title: 'Astarotte no Omocha!', url: '../src/paginas/todos-los-animes/2011/informacion/' },
            { title: 'Sekaiichi Hatsukoi', url: '../src/paginas/todos-los-animes/2011/informacion/'},
            { title: 'Maria†Holic Alive', url: '../src/paginas/todos-los-animes/2011/informacion/' },
            { title: 'Yondemasu yo, Azazel-san', url: '../src/paginas/todos-los-animes/2011/informacion/'},
            { title: 'SKET Dance', url: '../src/paginas/todos-los-animes/2011/informacion/' },
            { title: 'Gyakkyou Burai Kaiji Hakairoku-hen', url: '../src/paginas/todos-los-animes/2011/informacion/'},
            { title: 'Gintama 2011', url: '../src/paginas/todos-los-animes/2011/informacion/' },
            { title: 'Nichijou', url: '../src/paginas/todos-los-animes/2011/informacion/'},
            { title: 'Toriko', url: '../src/paginas/todos-los-animes/2011/informacion/' },
            { title: 'Tiger & Bunny', url: '../src/paginas/todos-los-animes/2011/informacion/'},
            { title: 'Freezing Specials', url: '../src/paginas/todos-los-animes/2011/informacion/' },
            { title: 'Dog Days', url: '../src/paginas/todos-los-animes/2011/informacion/'},
            { title: 'Hetalia World Series Extra Episodes', url: '../src/paginas/todos-los-animes/2011/informacion/' },
            { title: 'Luo Xiao Hei Zhan Ji', url: '../src/paginas/todos-los-animes/2011/informacion/'},
            { title: 'K-ON!! Second Season Special', url: '../src/paginas/todos-los-animes/2011/informacion/' },
            { title: 'Nichijou Episode 0', url: '../src/paginas/todos-los-animes/2011/informacion/'},
            { title: 'Steins;Gate', url: '../src/paginas/todos-los-animes/2011/informacion/' },
            { title: 'Rain Town', url: '../src/paginas/todos-los-animes/2011/informacion/'},
            { title: 'Baka to Test to Shoukanjuu: Matsuri', url: '../src/paginas/todos-los-animes/2011/informacion/' },
            { title: 'OreImo True Route', url: '../src/paginas/todos-los-animes/2011/informacion/'},
            { title: 'Houkago no Pleiades ONA', url: '../src/paginas/todos-los-animes/2011/informacion/' },
            { title: 'Fractale', url: '../src/paginas/todos-los-animes/2011/informacion/'},
            { title: 'Kimi ni Todoke 2nd Season', url: '../src/paginas/todos-los-animes/2011/informacion/' },
            { title: 'Kore wa Zombie Desu ka?', url: '../src/paginas/todos-los-animes/2011/informacion/'},
            { title: 'Dragon Crisis!', url: '../src/paginas/todos-los-animes/2011/informacion/' },
            { title: 'Beelzebub', url: '../src/paginas/todos-los-animes/2011/informacion/'},
            { title: 'Freezing', url: '../src/paginas/todos-los-animes/2011/informacion/' },
            { title: 'Mahou Shoujo Madoka Magica', url: '../src/paginas/todos-los-animes/2011/informacion/'},
            { title: 'IS: Infinite Stratos', url: '../src/paginas/todos-los-animes/2011/informacion/' },
            { title: 'Yumekui Merry', url: '../src/paginas/todos-los-animes/2011/informacion/' },
            { title: 'Rio: Rainbow Gate!', url: '../src/paginas/todos-los-animes/2011/informacion/'},
            


            { title: 'Gosick', url: '../src/paginas/todos-los-animes/2010/informacion/'},
            { title: 'Soukyuu no Fafner: Dead Aggressor - Heaven and Earth', url: '../src/paginas/todos-los-animes/2010/informacion/' },
            { title: 'Angel Beats! OVA', url: '../src/paginas/todos-los-animes/2010/informacion/'},
            { title: 'Angel Beats!: Another Epilogue', url: '../src/paginas/todos-los-animes/2010/informacion/' },
            { title: 'Mirai Nikki (OVA)', url: '../src/paginas/todos-los-animes/2010/informacion/'},
            { title: 'Hyakka Ryouran: Samurai Girls Specials', url: '../src/paginas/todos-los-animes/2010/informacion/' },
            { title: 'Soredemo Machi wa Mawatteiru', url: '../src/paginas/todos-los-animes/2010/informacion/'},
            { title: 'Fortune Arterial: Akai Yakusoku', url: '../src/paginas/todos-los-animes/2010/informacion/' },
            { title: 'Toaru Majutsu no Index II', url: '../src/paginas/todos-los-animes/2010/informacion/'},
            { title: 'Yozakura Quartet: Hoshi no Umi', url: '../src/paginas/todos-los-animes/2010/informacion/' },
            { title: 'Tantei Opera Milky Holmes', url: '../src/paginas/todos-los-animes/2010/informacion/'},
            { title: 'Motto To LOVE-Ru', url: '../src/paginas/todos-los-animes/2010/informacion/' },
            { title: 'Shinryaku! Ika Musume', url: '../src/paginas/todos-los-animes/2010/informacion/'},
            { title: 'Arakawa Under the Bridge x Bridge', url: '../src/paginas/todos-los-animes/2010/informacion/' },
            { title: 'Yosuga no Sora', url: '../src/paginas/todos-los-animes/2010/informacion/'},
            { title: 'Hakuouki Hekketsuroku', url: '../src/paginas/todos-los-animes/2010/informacion/' },
            { title: 'Tegami Bachi Reverse', url: '../src/paginas/todos-los-animes/2010/informacion/'},
            { title: 'OreImo', url: '../src/paginas/todos-los-animes/2010/informacion/' },
            { title: 'Shinrei Tantei Yakumo', url: '../src/paginas/todos-los-animes/2010/informacion/'},
            { title: 'Panty & Stocking with Garterbelt', url: '../src/paginas/todos-los-animes/2010/informacion/' },
            { title: 'Bakuman', url: '../src/paginas/todos-los-animes/2010/informacion/'},
            { title: 'Super Robot Taisen OG: The Inspector', url: '../src/paginas/todos-los-animes/2010/informacion/' },
            { title: 'Toaru Kagaku no Railgun OVA', url: '../src/paginas/todos-los-animes/2010/informacion/'},
            { title: 'MM!', url: '../src/paginas/todos-los-animes/2010/informacion/' },
            { title: 'Otome Youkai Zakuro', url: '../src/paginas/todos-los-animes/2010/informacion/'},
            { title: 'Kami nomi zo Shiru Sekai', url: '../src/paginas/todos-los-animes/2010/informacion/' },
            { title: 'Pokemon Best Wishes!', url: '../src/paginas/todos-los-animes/2010/informacion/'},
            { title: 'Togainu no Chi', url: '../src/paginas/todos-los-animes/2010/informacion/' },
            { title: 'Sora no Otoshimono: Forte', url: '../src/paginas/todos-los-animes/2010/informacion/'},
            { title: 'Star Driver: Kagayaki no Takuto', url: '../src/paginas/todos-los-animes/2010/informacion/' },
            { title: 'Sora no Otoshimono OVA', url: '../src/paginas/todos-los-animes/2010/informacion/'},
            { title: 'Tamayura', url: '../src/paginas/todos-los-animes/2010/informacion/' },
            { title: 'Hyakka Ryouran: Samurai Girls', url: '../src/paginas/todos-los-animes/2010/informacion/'},
            { title: 'Durarara!! Specials', url: '../src/paginas/todos-los-animes/2010/informacion/' },
            { title: "Queen's Blade: Utsukushiki Toushitachi", url: '../src/paginas/todos-los-animes/2010/informacion/'},
            { title: 'Naruto: Shippuuden Movie 4 - The Lost Tower', url: '../src/paginas/todos-los-animes/2010/informacion/' },
            { title: 'Black★Rock Shooter (OVA)', url: '../src/paginas/todos-los-animes/2010/informacion/'},
            { title: 'Iron Man', url: '../src/paginas/todos-los-animes/2010/informacion/' },
            { title: 'Sengoku Basara Two', url: '../src/paginas/todos-los-animes/2010/informacion/'},
            { title: 'Seikimatsu Occult Gakuin', url: '../src/paginas/todos-los-animes/2010/informacion/' },
            { title: 'Nurarihyon no Mago', url: '../src/paginas/todos-los-animes/2010/informacion/'},
            { title: 'Digimon Xros Wars', url: '../src/paginas/todos-los-animes/2010/informacion/' },
            { title: 'Kuroshitsuji II', url: '../src/paginas/todos-los-animes/2010/informacion/'},
            { title: 'Amagami SS', url: '../src/paginas/todos-los-animes/2010/informacion/' },
            { title: 'Ookami-san to Shichinin no Nakamatachi', url: '../src/paginas/todos-los-animes/2010/informacion/'},
            { title: 'Shiki', url: '../src/paginas/todos-los-animes/2010/informacion/' },
            { title: 'Highschool of the Dead', url: '../src/paginas/todos-los-animes/2010/informacion/'},
            { title: 'Shukufuku no Campanella', url: '../src/paginas/todos-los-animes/2010/informacion/' },
            { title: '11eyes OVA', url: '../src/paginas/todos-los-animes/2010/informacion/'},
            { title: 'Strike Witches 2', url: '../src/paginas/todos-los-animes/2010/informacion/' },
            { title: 'Sekirei: Pure Engagement', url: '../src/paginas/todos-los-animes/2010/informacion/'},
            { title: 'Seitokai Yakuindomo', url: '../src/paginas/todos-los-animes/2010/informacion/' },
            { title: 'Nodame Cantabile OVA 2', url: '../src/paginas/todos-los-animes/2010/informacion/'},
            { title: 'Gintama: Shinyaku Benizakura-hen', url: '../src/paginas/todos-los-animes/2010/informacion/' },
            { title: 'Magic Kaito', url: '../src/paginas/todos-los-animes/2010/informacion/'},
            { title: 'K-ON!! Second Season', url: '../src/paginas/todos-los-animes/2010/informacion/' },
            { title: 'Nodame Cantabile Finale Special', url: '../src/paginas/todos-los-animes/2010/informacion/'},
            { title: 'Mayoi Neko Overrun!', url: '../src/paginas/todos-los-animes/2010/informacion/' },
            { title: 'Senkou no Night Raid', url: '../src/paginas/todos-los-animes/2010/informacion/'},
            { title: 'Giant Killing', url: '../src/paginas/todos-los-animes/2010/informacion/' },
            { title: 'Hakuouki Shinsengumi Kitan', url: '../src/paginas/todos-los-animes/2010/informacion/'},
            { title: 'Arakawa Under the Bridge', url: '../src/paginas/todos-los-animes/2010/informacion/' },
            { title: 'Jewelpet Twinkle☆', url: '../src/paginas/todos-los-animes/2010/informacion/'},
            { title: 'Kaichou wa Maid-sama!', url: '../src/paginas/todos-los-animes/2010/informacion/' },
            { title: 'Trigun: Badlands Rumble', url: '../src/paginas/todos-los-animes/2010/informacion/'},
            { title: 'Rainbow: Nisha Rokubou no Shichinin', url: '../src/paginas/todos-los-animes/2010/informacion/' },
            { title: 'Heroman', url: '../src/paginas/todos-los-animes/2010/informacion/'},
            { title: 'B Gata H Kei', url: '../src/paginas/todos-los-animes/2010/informacion/' },
            { title: 'One Piece: Strong World Episode 0', url: '../src/paginas/todos-los-animes/2010/informacion/'},
            { title: 'Ladies versus Butlers! Specials', url: '../src/paginas/todos-los-animes/2010/informacion/' },
            { title: 'Ladies versus Butlers! Tokuten Disc Music Clip', url: '../src/paginas/todos-los-animes/2010/informacion/'},
            { title: 'Ikkitousen: Xtreme Xecutor', url: '../src/paginas/todos-los-animes/2010/informacion/' },
            { title: 'Hetalia World Series', url: '../src/paginas/todos-los-animes/2010/informacion/'},
            { title: 'Kiss x Sis (TV)', url: '../src/paginas/todos-los-animes/2010/informacion/' },
            { title: 'Angel Beats!', url: '../src/paginas/todos-los-animes/2010/informacion/'},
            { title: 'One Piece Recap', url: '../src/paginas/todos-los-animes/2010/informacion/' },
            { title: 'Working!', url: '../src/paginas/todos-los-animes/2010/informacion/'},
            { title: 'Katekyo Hitman Reborn! Special', url: '../src/paginas/todos-los-animes/2010/informacion/' },
            { title: 'Yondemasu yo, Azazel-san OVA', url: '../src/paginas/todos-los-animes/2010/informacion/'},
            { title: 'Suzumiya Haruhi no Shoushitsu', url: '../src/paginas/todos-los-animes/2010/informacion/' },
            { title: 'Katanagatari', url: '../src/paginas/todos-los-animes/2010/informacion/'},
            { title: 'Fate/stay night: Unlimited Blade Works', url: '../src/paginas/todos-los-animes/2010/informacion/' },
            { title: 'Mahou Shoujo Lyrical Nanoha: The Movie 1st', url: '../src/paginas/todos-los-animes/2010/informacion/'},
            { title: 'K-ON! Special: Live House!', url: '../src/paginas/todos-los-animes/2010/informacion/' },
            { title: 'Nodame Cantabile Finale', url: '../src/paginas/todos-los-animes/2010/informacion/'},
            { title: 'Hanamaru Youchien', url: '../src/paginas/todos-los-animes/2010/informacion/' },
            { title: 'Seikon no Qwaser', url: '../src/paginas/todos-los-animes/2010/informacion/'},
            { title: 'Durarara!!', url: '../src/paginas/todos-los-animes/2010/informacion/' },
            { title: 'Ookami Kakushi', url: '../src/paginas/todos-los-animes/2010/informacion/'},
            { title: 'Dance in the Vampire Bund', url: '../src/paginas/todos-los-animes/2010/informacion/' },
            { title: 'Omamori Himari', url: '../src/paginas/todos-los-animes/2010/informacion/' },
            { title: 'Baka to Test to Shoukanjuu', url: '../src/paginas/todos-los-animes/2010/informacion/'},
            { title: 'Sora no Woto', url: '../src/paginas/todos-los-animes/2010/informacion/' },



            { title: 'Kowarekake no Orgel', url: '../src/paginas/todos-los-animes/2009/informacion/'},
            { title: 'Ladies versus Butlers!', url: '../src/paginas/todos-los-animes/2009/informacion/' },
            { title: 'Chuu Bra!!', url: '../src/paginas/todos-los-animes/2009/informacion/'},
            { title: 'Baka to Test to Shoukanjuu: Christmas Special', url: '../src/paginas/todos-los-animes/2009/informacion/' },
            { title: 'Shakugan no Shana S', url: '../src/paginas/todos-los-animes/2009/informacion/'},
            { title: 'Winter Sonata', url: '../src/paginas/todos-los-animes/2009/informacion/' },
            { title: 'Fairy Tail', url: '../src/paginas/todos-los-animes/2009/informacion/'},
            { title: 'Darker than Black: Ryuusei no Gemini', url: '../src/paginas/todos-los-animes/2009/informacion/' },
            { title: 'Sasameki Koto', url: '../src/paginas/todos-los-animes/2009/informacion/'},
            { title: 'Kimi ni Todoke', url: '../src/paginas/todos-los-animes/2009/informacion/' },
            { title: 'Kobato', url: '../src/paginas/todos-los-animes/2009/informacion/'},
            { title: '11eyes', url: '../src/paginas/todos-los-animes/2009/informacion/' },
            { title: 'Nogizaka Haruka no Himitsu: Purezza', url: '../src/paginas/todos-los-animes/2009/informacion/'},
            { title: 'Natsu no Arashi! Akinaichuu', url: '../src/paginas/todos-los-animes/2009/informacion/' },
            { title: 'Sora no Otoshimono', url: '../src/paginas/todos-los-animes/2009/informacion/'},
            { title: 'Kanokon: Manatsu no Dai Shanikusai', url: '../src/paginas/todos-los-animes/2009/informacion/' },
            { title: 'Seiken no Blacksmith', url: '../src/paginas/todos-los-animes/2009/informacion/'},
            { title: 'Tegami Bachi', url: '../src/paginas/todos-los-animes/2009/informacion/' },
            { title: 'White Album 2nd Season', url: '../src/paginas/todos-los-animes/2009/informacion/'},
            { title: 'InuYasha: Kanketsu-hen', url: '../src/paginas/todos-los-animes/2009/informacion/' },
            { title: 'Shugo Chara! Party!', url: '../src/paginas/todos-los-animes/2009/informacion/'},
            { title: 'Seitokai no Ichizon', url: '../src/paginas/todos-los-animes/2009/informacion/' },
            { title: 'Toaru Kagaku no Railgun', url: '../src/paginas/todos-los-animes/2009/informacion/'},
            { title: 'Kampfer', url: '../src/paginas/todos-los-animes/2009/informacion/' },
            { title: 'Nyan Koi!', url: '../src/paginas/todos-los-animes/2009/informacion/'},
            { title: "Asura Cryin' 2", url: '../src/paginas/todos-los-animes/2009/informacion/' },
            { title: 'God Eater Prologue', url: '../src/paginas/todos-los-animes/2009/informacion/'},
            { title: "Queen's Blade: Gyokuza wo Tsugu Mono", url: '../src/paginas/todos-los-animes/2009/informacion/' },
            { title: 'Mahou Sensei Negima! Mou Hitotsu no Sekai', url: '../src/paginas/todos-los-animes/2009/informacion/'},
            { title: 'Fullmetal Alchemist: Brotherhood Ovas (Specials)', url: '../src/paginas/todos-los-animes/2009/informacion/' },
            { title: 'Naruto: Shippuuden Movie 3 - Hi no Ishi wo Tsugu Mono', url: '../src/paginas/todos-los-animes/2009/informacion/'},
            { title: 'Cencoroll', url: '../src/paginas/todos-los-animes/2009/informacion/' },
            { title: 'Evangelion: 2.22 You Can (Not) Advance', url: '../src/paginas/todos-los-animes/2009/informacion/'},
            { title: 'Hatsukoi Limited: Gentei Shoujo', url: '../src/paginas/todos-los-animes/2009/informacion/' },
            { title: 'Tokyo Magnitude 8.0', url: '../src/paginas/todos-los-animes/2009/informacion/'},
            { title: 'Spice and Wolf II', url: '../src/paginas/todos-los-animes/2009/informacion/' },
            { title: 'Sora no Manimani', url: '../src/paginas/todos-los-animes/2009/informacion/'},
            { title: 'Princess Lover!', url: '../src/paginas/todos-los-animes/2009/informacion/' },
            { title: 'Kanamemo', url: '../src/paginas/todos-los-animes/2009/informacion/'},
            { title: 'Canaan', url: '../src/paginas/todos-los-animes/2009/informacion/' },
            { title: 'Bakemonogatari', url: '../src/paginas/todos-los-animes/2009/informacion/'},
            { title: 'Needless', url: '../src/paginas/todos-los-animes/2009/informacion/' },
            { title: 'Umineko no Naku Koro ni', url: '../src/paginas/todos-los-animes/2009/informacion/'},
            { title: 'Taishou Yakyuu Musume', url: '../src/paginas/todos-los-animes/2009/informacion/' },
            { title: 'Aoi Hana', url: '../src/paginas/todos-los-animes/2009/informacion/'},
            { title: 'Clannad: Another World, Kyou Chapter', url: '../src/paginas/todos-los-animes/2009/informacion/' },
            { title: 'Fight Ippatsu! Juuden-Chan!!', url: '../src/paginas/todos-los-animes/2009/informacion/'},
            { title: 'Saint Seiya: The Lost Canvas', url: '../src/paginas/todos-los-animes/2009/informacion/' },
            { title: 'Weis Survive', url: '../src/paginas/todos-los-animes/2009/informacion/'},
            { title: 'Utawarerumono OVA', url: '../src/paginas/todos-los-animes/2009/informacion/' },
            { title: 'Suzumiya Haruhi no Yuuutsu (2009)', url: '../src/paginas/todos-los-animes/2009/informacion/'},
            { title: 'Dogs: Bullets & Carnage', url: '../src/paginas/todos-los-animes/2009/informacion/' },
            { title: 'Hatsukoi Limited', url: '../src/paginas/todos-los-animes/2009/informacion/'},
            { title: 'Higashi no Eden', url: '../src/paginas/todos-los-animes/2009/informacion/' },
            { title: '07-Ghost', url: '../src/paginas/todos-los-animes/2009/informacion/'},
            { title: 'Natsu no Arashi!', url: '../src/paginas/todos-los-animes/2009/informacion/' },
            { title: 'Dragon Ball Kai', url: '../src/paginas/todos-los-animes/2009/informacion/'},
            { title: 'Cross Game', url: '../src/paginas/todos-los-animes/2009/informacion/' },
            { title: 'Shangri-La', url: '../src/paginas/todos-los-animes/2009/informacion/'},
            { title: 'Fullmetal Alchemist: Brotherhood', url: '../src/paginas/todos-los-animes/2009/informacion/' },
            { title: 'Tayutama: Kiss on my Deity', url: '../src/paginas/todos-los-animes/2009/informacion/'},
            { title: 'Saki', url: '../src/paginas/todos-los-animes/2009/informacion/' },
            { title: 'Senjou no Valkyria: Gallian Chronicles', url: '../src/paginas/todos-los-animes/2009/informacion/'},
            { title: 'Shin Mazinger Shougeki! Z-Hen', url: '../src/paginas/todos-los-animes/2009/informacion/' },
            { title: 'Arad Senki: Slap Up Party', url: '../src/paginas/todos-los-animes/2009/informacion/'},
            { title: 'To LOVE-Ru OVA', url: '../src/paginas/todos-los-animes/2009/informacion/' },
            { title: 'Tears to Tiara', url: '../src/paginas/todos-los-animes/2009/informacion/'},
            { title: 'Hayate no Gotoku!! S2', url: '../src/paginas/todos-los-animes/2009/informacion/' },
            { title: 'Basquash!', url: '../src/paginas/todos-los-animes/2009/informacion/'},
            { title: "Asura Cryin'", url: '../src/paginas/todos-los-animes/2009/informacion/' },
            { title: 'Phantom: Requiem for the Phantom', url: '../src/paginas/todos-los-animes/2009/informacion/'},
            { title: 'K-ON!', url: '../src/paginas/todos-los-animes/2009/informacion/' },
            { title: 'Pandora Hearts', url: '../src/paginas/todos-los-animes/2009/informacion/'},
            { title: "Queen's Blade: Rurou no Senshi", url: '../src/paginas/todos-los-animes/2009/informacion/' },
            { title: 'Sengoku Basara', url: '../src/paginas/todos-los-animes/2009/informacion/'},
            { title: 'Tsubasa Chronicle: Shunraiki', url: '../src/paginas/todos-los-animes/2009/informacion/' },
            { title: 'xxxHOLiC Shunmuki', url: '../src/paginas/todos-los-animes/2009/informacion/'},
            { title: 'Higurashi no Naku Koro ni Rei', url: '../src/paginas/todos-los-animes/2009/informacion/' },
            { title: 'Toaru Majutsu no Index Specials', url: '../src/paginas/todos-los-animes/2009/informacion/'},
            { title: 'Hetalia Axis Powers', url: '../src/paginas/todos-los-animes/2009/informacion/' },
            { title: 'RideBack', url: '../src/paginas/todos-los-animes/2009/informacion/'},
            { title: 'Chrome Shelled Regios', url: '../src/paginas/todos-los-animes/2009/informacion/' },
            { title: 'Tetsuwan Birdy Decode:02', url: '../src/paginas/todos-los-animes/2009/informacion/'},
            { title: 'Asu no Yoichi!', url: '../src/paginas/todos-los-animes/2009/informacion/' },
            { title: 'Kurokami', url: '../src/paginas/todos-los-animes/2009/informacion/'},
            { title: 'Hajime no Ippo: New Challenger', url: '../src/paginas/todos-los-animes/2009/informacion/' },
            { title: 'Zoku Natsume Yuujinchou', url: '../src/paginas/todos-los-animes/2009/informacion/'},
            { title: 'Minami-ke Okaeri', url: '../src/paginas/todos-los-animes/2009/informacion/' },
            { title: 'Akikan!', url: '../src/paginas/todos-los-animes/2009/informacion/'},
            { title: 'White Album', url: '../src/paginas/todos-los-animes/2009/informacion/' },
            



            { title: 'Maria†Holic', url: '../src/paginas/todos-los-animes/2008/informacion/'},//(79)
            { title: 'Da Capo If', url: '../src/paginas/todos-los-animes/2008/informacion/' },//(78)
            { title: 'Kiss x Sis', url: '../src/paginas/todos-los-animes/2008/informacion/'},//(77)
            { title: 'One Piece: Romance Dawn', url: '../src/paginas/todos-los-animes/2008/informacion/' },//(76)
            { title: 'Seto no Hanayome OVA', url: '../src/paginas/todos-los-animes/2008/informacion/'},//(75)
            { title: 'Michiko to Hatchin', url: '../src/paginas/todos-los-animes/2008/informacion/' },//(74)
            { title: 'Junjou Romantica 2', url: '../src/paginas/todos-los-animes/2008/informacion/'},//(73)
            { title: 'Nodame Cantabile Paris Chapter', url: '../src/paginas/todos-los-animes/2008/informacion/'},//(72)
            { title: 'ChaoS;HEAd', url: '../src/paginas/todos-los-animes/2008/informacion/'},//(71)
            { title: 'One Outs', url: '../src/paginas/todos-los-animes/2008/informacion/' },//(70)
            { title: 'Kurozuka', url: '../src/paginas/todos-los-animes/2008/informacion/'},//(69)
            { title: 'ef - a tale of melodies', url: '../src/paginas/todos-los-animes/2008/informacion/' },//(68)
            { title: 'Skip Beat!', url: '../src/paginas/todos-los-animes/2008/informacion/'},//(67)
            { title: 'Vampire Knight Guilty', url: '../src/paginas/todos-los-animes/2008/informacion/' },//(66)
            { title: 'Ga-Rei: Zero', url: '../src/paginas/todos-los-animes/2008/informacion/'},//(65)
            { title: 'Inazuma Eleven', url: '../src/paginas/todos-los-animes/2008/informacion/' },//(64)
            { title: 'Macademi WAsshoi!', url: '../src/paginas/todos-los-animes/2008/informacion/'},//(63)
            { title: 'Kyou no Go no Ni (2008)', url: '../src/paginas/todos-los-animes/2008/informacion/' },//(62)
            { title: 'Mobile Suit Gundam 00 S2', url: '../src/paginas/todos-los-animes/2008/informacion/'},//(61)
            { title: 'Toaru Majutsu no Index', url: '../src/paginas/todos-los-animes/2008/informacion/' },//(60)
            { title: 'Kannagi', url: '../src/paginas/todos-los-animes/2008/informacion/'},//(58)
            { title: 'Shugo Chara!! Doki', url: '../src/paginas/todos-los-animes/2008/informacion/' },//(57)
            { title: 'Jigoku Shoujo Mitsuganae', url: '../src/paginas/todos-los-animes/2008/informacion/'},//(56)
            { title: 'Kurogane no Linebarrels', url: '../src/paginas/todos-los-animes/2008/informacion/' },//(55)
            { title: 'Tales of the Abyss', url: '../src/paginas/todos-los-animes/2008/informacion/'},//(54)
            { title: 'Yozakura Quartet', url: '../src/paginas/todos-los-animes/2008/informacion/' },//(53)
            { title: 'Akane-iro ni Somaru Saka', url: '../src/paginas/todos-los-animes/2008/informacion/'},//(52)
            { title: 'Kuroshitsuji', url: '../src/paginas/todos-los-animes/2008/informacion/' },//(51)
            { title: 'Rosario + Vampire Capu2', url: '../src/paginas/todos-los-animes/2008/informacion/'},//(50)
            { title: 'Clannad: After Story', url: '../src/paginas/todos-los-animes/2008/informacion/' },//(49)
            { title: 'Toradora!', url: '../src/paginas/todos-los-animes/2008/informacion/'},//(48)
            { title: 'Lucky ☆ Star OVA', url: '../src/paginas/todos-los-animes/2008/informacion/' },//(47)
            { title: 'Mahou Sensei Negima! Shiroki Tsubasa Ala Alba', url: '../src/paginas/todos-los-animes/2008/informacion/'},//(46)
            { title: 'Detroit Metal City', url: '../src/paginas/todos-los-animes/2008/informacion/' },//(45)
            { title: 'Naruto: Shippuuden Movie 2 - Kizuna', url: '../src/paginas/todos-los-animes/2008/informacion/'},//(44)
            { title: 'Clannad: Another World, Tomoyo Chapter', url: '../src/paginas/todos-los-animes/2008/informacion/' },//(43)
            { title: 'Blade of the Immortal', url: '../src/paginas/todos-los-animes/2008/informacion/'},//(42)
            { title: 'Natsume Yuujinchou', url: '../src/paginas/todos-los-animes/2008/informacion/' },//(41)
            { title: 'Zero no Tsukaima: Princesses no Rondo', url: '../src/paginas/todos-los-animes/2008/informacion/'},//(40)
            { title: 'Tetsuwan Birdy Decode', url: '../src/paginas/todos-los-animes/2008/informacion/' },//(39)
            { title: 'Nogizaka Haruka no Himitsu', url: '../src/paginas/todos-los-animes/2008/informacion/'},//(38)
            { title: 'Strike Witches', url: '../src/paginas/todos-los-animes/2008/informacion/' },//(37)
            { title: 'Sekirei', url: '../src/paginas/todos-los-animes/2008/informacion/'},//(36)
            { title: 'Ikkitousen: Great Guardians', url: '../src/paginas/todos-los-animes/2008/informacion/' },//(35)
            { title: 'Prince of Tennis: The National Tournament Finals', url: '../src/paginas/todos-los-animes/2008/informacion/'},//(34)
            { title: 'Penguin Musume Heart', url: '../src/paginas/todos-los-animes/2008/informacion/' },//(33)
            { title: 'Junjou Romantica', url: '../src/paginas/todos-los-animes/2008/informacion/'},//(32)
            { title: 'Vampire Knight', url: '../src/paginas/todos-los-animes/2008/informacion/' },//(31)
            { title: 'Soul Eater', url: '../src/paginas/todos-los-animes/2008/informacion/'},//(30)
            { title: 'Nabari no Ou', url: '../src/paginas/todos-los-animes/2008/informacion/' },//(29)
            { title: 'Code Geass: Hangyaku no Lelouch R2', url: '../src/paginas/todos-los-animes/2008/informacion/'},//(28)
            { title: 'Neo Angelique Abyss', url: '../src/paginas/todos-los-animes/2008/informacion/' },//(27)
            { title: 'Da Capo II Second Season', url: '../src/paginas/todos-los-animes/2008/informacion/'},//(26)
            { title: 'Zettai Karen Children', url: '../src/paginas/todos-los-animes/2008/informacion/' },//(25)
            { title: 'Special A', url: '../src/paginas/todos-los-animes/2008/informacion/'},//(24)
            { title: 'Kanokon', url: '../src/paginas/todos-los-animes/2008/informacion/' },//(23)
            { title: 'Kamen no Maid Guy', url: '../src/paginas/todos-los-animes/2008/informacion/'},//(22)
            { title: 'Amatsuki', url: '../src/paginas/todos-los-animes/2008/informacion/' },//(21)
            { title: 'Itazura na Kiss', url: '../src/paginas/todos-los-animes/2008/informacion/'},//(20)
            { title: 'To LOVE-Ru', url: '../src/paginas/todos-los-animes/2008/informacion/' },//(19)
            { title: 'Kure-nai', url: '../src/paginas/todos-los-animes/2008/informacion/'},//(18)
            { title: 'Macross Frontier', url: '../src/paginas/todos-los-animes/2008/informacion/' },//(17)
            { title: 'xxxHOLiC Kei', url: '../src/paginas/todos-los-animes/2008/informacion/'},//(16)
            { title: 'Yu-Gi-Oh 5D', url: '../src/paginas/todos-los-animes/2008/informacion/' },//(15)
            { title: 'School Days: Magical Heart Kokoro-chan', url: '../src/paginas/todos-los-animes/2008/informacion/'},//(14)
            { title: '.hack//G.U. Trilogy', url: '../src/paginas/todos-los-animes/2008/informacion/' },//(13)
            { title: 'Saint Seiya Saga de Hades Elysion', url: '../src/paginas/todos-los-animes/2008/informacion/'},//(12)
            { title: 'Baccano! Specials', url: '../src/paginas/todos-los-animes/2008/informacion/' },//(11)
            { title: 'Nodame Cantabile Special', url: '../src/paginas/todos-los-animes/2008/informacion/'},//(10)
            { title: 'School Days: Valentine Days', url: '../src/paginas/todos-los-animes/2008/informacion/' },//(9)
            { title: 'Yatterman', url: '../src/paginas/todos-los-animes/2008/informacion/'},//(8)
            { title: 'Spice and Wolf', url: '../src/paginas/todos-los-animes/2008/informacion/' },//(7)
            { title: 'Minami-ke Okawari', url: '../src/paginas/todos-los-animes/2008/informacion/'},//(6)
            { title: 'Shigofumi', url: '../src/paginas/todos-los-animes/2008/informacion/' },//(5)
            { title: 'Persona: Trinity Soul', url: '../src/paginas/todos-los-animes/2008/informacion/'},//(4)
            { title: 'True Tears', url: '../src/paginas/todos-los-animes/2008/informacion/' },//(3)
            { title: 'Rosario + Vampire', url: '../src/paginas/todos-los-animes/2008/informacion/'},//(2)
            { title: 'H2O: Footprints in the Sand', url: '../src/paginas/todos-los-animes/2008/informacion/'},//(1)



            { title: 'Kara no Kyoukai 2: Satsujin Kousatsu', url: '../src/paginas/todos-los-animes/2007/informacion/'},//(66)
            { title: 'Bleach: The DiamondDust Rebellion', url: '../src/paginas/todos-los-animes/2007/informacion/' },//(65)
            { title: 'Kara no Kyoukai 1: Fukan Fuukei', url: '../src/paginas/todos-los-animes/2007/informacion/'},//(64)
            { title: 'Tsubasa Chronicle: Tokyo Revelations', url: '../src/paginas/todos-los-animes/2007/informacion/' },//(63)
            { title: 'Ghost Hound - Shinreigari', url: '../src/paginas/todos-los-animes/2007/informacion/'},//(62)
            { title: 'Kodomo no Jikan', url: '../src/paginas/todos-los-animes/2007/informacion/' },//(61)
            { title: 'Genshiken 2', url: '../src/paginas/todos-los-animes/2007/informacion/'},//(60)
            { title: 'Minami-ke', url: '../src/paginas/todos-los-animes/2007/informacion/' },//(59)
            { title: 'Prism Ark', url: '../src/paginas/todos-los-animes/2007/informacion/'},//(58)
            { title: 'ef - a tale of memories.', url: '../src/paginas/todos-los-animes/2007/informacion/' },//(57)
            { title: 'Mobile Suit Gundam 00', url: '../src/paginas/todos-los-animes/2007/informacion/'},//(56)
            { title: 'Shugo Chara!', url: '../src/paginas/todos-los-animes/2007/informacion/' },//(55)
            { title: 'Clannad', url: '../src/paginas/todos-los-animes/2007/informacion/'},//(54)
            { title: 'Shakugan no Shana II', url: '../src/paginas/todos-los-animes/2007/informacion/' },//(53)
            { title: 'Gyakkyou Burai Kaiji Ultimate Survivor', url: '../src/paginas/todos-los-animes/2007/informacion/'},//(52)
            { title: 'Myself Yourself', url: '../src/paginas/todos-los-animes/2007/informacion/' },//(51)
            { title: 'Majin Tantei Nougami Neuro', url: '../src/paginas/todos-los-animes/2007/informacion/'},//(50)
            { title: 'Da Capo II', url: '../src/paginas/todos-los-animes/2007/informacion/' },//(49)
            { title: 'Sword of the Stranger', url: '../src/paginas/todos-los-animes/2007/informacion/'},//(48)
            { title: 'Evangelion: 1.11 You Are (Not) Alone', url: '../src/paginas/todos-los-animes/2007/informacion/' },//(47)
            { title: 'Bokusatsu Tenshi Dokuro-chan 2', url: '../src/paginas/todos-los-animes/2007/informacion/'},//(46)
            { title: 'Naruto: Shippuuden Movie 1', url: '../src/paginas/todos-los-animes/2007/informacion/' },//(45)
            { title: 'Higurashi no Naku Koro ni Gaiden Nekogoroshi-hen', url: '../src/paginas/todos-los-animes/2007/informacion/'},//(44)
            { title: 'Baccano!', url: '../src/paginas/todos-los-animes/2007/informacion/' },//(43)
            { title: 'Shigurui', url: '../src/paginas/todos-los-animes/2007/informacion/'},//(42)
            { title: 'Zero no Tsukaima: Futatsuki no Kishi', url: '../src/paginas/todos-los-animes/2007/informacion/' },//(41)
            { title: 'Moetan', url: '../src/paginas/todos-los-animes/2007/informacion/'},//(40)
            { title: 'Sayonara Zetsubou Sensei', url: '../src/paginas/todos-los-animes/2007/informacion/' },//(39)
            { title: 'Higurashi no Naku Koro ni Kai', url: '../src/paginas/todos-los-animes/2007/informacion/'},//(38)
            { title: 'Zombie-Loan', url: '../src/paginas/todos-los-animes/2007/informacion/' },//(37)
            { title: 'RDoujin Work', url: '../src/paginas/todos-los-animes/2007/informacion/'},//(36)
            { title: 'School Days', url: '../src/paginas/todos-los-animes/2007/informacion/' },//(35)
            { title: 'Prince of Tennis: The National Tournament Semifinals', url: '../src/paginas/todos-los-animes/2007/informacion/'},//(34)
            { title: 'Devil May Cry', url: '../src/paginas/todos-los-animes/2007/informacion/' },//(33)
            { title: 'Tales of Symphonia', url: '../src/paginas/todos-los-animes/2007/informacion/'},//(32)
            { title: 'Ice', url: '../src/paginas/todos-los-animes/2007/informacion/' },//(31)
            { title: 'Sousei no Aquarion OVA', url: '../src/paginas/todos-los-animes/2007/informacion/'},//(30)
            { title: 'The Skull Man', url: '../src/paginas/todos-los-animes/2007/informacion/' },//(29)
            { title: 'Shakugan no Shana Movie', url: '../src/paginas/todos-los-animes/2007/informacion/'},//(28)
            { title: 'Kaze no Stigma', url: '../src/paginas/todos-los-animes/2007/informacion/' },//(27)
            { title: 'Ookiku Furikabutte', url: '../src/paginas/todos-los-animes/2007/informacion/'},//(26)
            { title: 'Lucky☆Star', url: '../src/paginas/todos-los-animes/2007/informacion/' },//(25)
            { title: 'Eikoku Koi Monogatari Emma: Molders Hen', url: '../src/paginas/todos-los-animes/2007/informacion/'},//(24)
            { title: 'Blue Dragon', url: '../src/paginas/todos-los-animes/2007/informacion/' },//(23)
            { title: 'Lovely Complex', url: '../src/paginas/todos-los-animes/2007/informacion/'},//(22)
            { title: 'Shining Tears X Wind', url: '../src/paginas/todos-los-animes/2007/informacion/' },//(21)
            { title: 'sola', url: '../src/paginas/todos-los-animes/2007/informacion/'},//(20)
            { title: 'Koutetsushin Jeeg', url: '../src/paginas/todos-los-animes/2007/informacion/' },//(19)
            { title: 'Darker than Black: Kuro no Keiyakusha', url: '../src/paginas/todos-los-animes/2007/informacion/'},//(18)
            { title: 'Nagasarete Airantou', url: '../src/paginas/todos-los-animes/2007/informacion/' },//(17)
            { title: 'Claymore', url: '../src/paginas/todos-los-animes/2007/informacion/'},//(16)
            { title: 'Romeo x Juliet', url: '../src/paginas/todos-los-animes/2007/informacion/' },//(15)
            { title: 'Shinkyoku Soukai Polyphonica', url: '../src/paginas/todos-los-animes/2007/informacion/'},//(14)
            { title: 'iDOLM@STER Xenoglossia', url: '../src/paginas/todos-los-animes/2007/informacion/'},//(13)
            { title: 'Mahou Shoujo Lyrical Nanoha StrikerS', url: '../src/paginas/todos-los-animes/2007/informacion/'},//(12)
            { title: 'Heroic Age', url: '../src/paginas/todos-los-animes/2007/informacion/' },//(11)
            { title: 'Seto no Hanayome', url: '../src/paginas/todos-los-animes/2007/informacion/'},//(10)
            { title: 'Tengen Toppa Gurren Lagann', url: '../src/paginas/todos-los-animes/2007/informacion/'},//(9)
            { title: 'Hayate no Gotoku!', url: '../src/paginas/todos-los-animes/2007/informacion/'},//(8)
            { title: 'Hitohira', url: '../src/paginas/todos-los-animes/2007/informacion/' },//(7)
            { title: 'Evangelion@School', url: '../src/paginas/todos-los-animes/2007/informacion/' },//(6)
            { title: 'Ikkitousen: Dragon Destiny', url: '../src/paginas/todos-los-animes/2007/informacion/'},//(5)
            { title: 'Naruto Shippuden', url: '../src/paginas/todos-los-animes/2007/informacion/' },//(4)
            { title: 'Venus Versus Virus', url: '../src/paginas/todos-los-animes/2007/informacion/'},//(3)
            { title: 'Nodame Cantabile', url: '../src/paginas/todos-los-animes/2007/informacion/' },//(2)
            { title: 'Afro Samurai', url: '../src/paginas/todos-los-animes/2007/informacion/' },//(1)



            { title: 'Rozen Maiden: Ouvertüre', url: '../src/paginas/todos-los-animes/2006/informacion/'},//(51)
            { title: 'Genshiken OVA', url: '../src/paginas/todos-los-animes/2006/informacion/' },//(51)
            { title: 'Bleach: Memories of Nobody', url: '../src/paginas/todos-los-animes/2006/informacion/'},//(50)
            { title: 'Kashimashi: Girl Meets Girl OVA', url: '../src/paginas/todos-los-animes/2006/informacion/' },//(49)
            { title: 'Bartender', url: '../src/paginas/todos-los-animes/2006/informacion/'},//(48)
            { title: 'Katekyo Hitman Reborn!', url: '../src/paginas/todos-los-animes/2006/informacion/' },//(47)
            { title: 'Shijou Saikyou no Deshi Kenichi', url: '../src/paginas/todos-los-animes/2006/informacion/'},//(46)
            { title: 'Code Geass: Hangyaku no Lelouch', url: '../src/paginas/todos-los-animes/2006/informacion/' },//(45)
            { title: 'Jigoku Shoujo Futakomori', url: '../src/paginas/todos-los-animes/2006/informacion/'},//(44)
            { title: 'Kanon (2006)', url: '../src/paginas/todos-los-animes/2006/informacion/' },//(43)
            { title: 'Busou Renkin', url: '../src/paginas/todos-los-animes/2006/informacion/'},//(42)
            { title: 'Yoake Mae yori Ruriiro na', url: '../src/paginas/todos-los-animes/2006/informacion/' },//(41)
            { title: 'Death Note', url: '../src/paginas/todos-los-animes/2006/informacion/'},//(40)
            { title: 'Yamato Nadeshiko Shichi Henge', url: '../src/paginas/todos-los-animes/2006/informacion/' },//(39)
            { title: 'D.Gray-man', url: '../src/paginas/todos-los-animes/2006/informacion/'},//(38)
            { title: 'Black Lagoon: The Second Barrage', url: '../src/paginas/todos-los-animes/2006/informacion/' },//(37)
            { title: 'Pokemon Diamond Pearl', url: '../src/paginas/todos-los-animes/2006/informacion/'},//(36)
            { title: 'Toki wo Kakeru Shoujo', url: '../src/paginas/todos-los-animes/2006/informacion/' },//(35)
            { title: 'Welcome to the NHK!', url: '../src/paginas/todos-los-animes/2006/informacion/'},//(34)
            { title: 'Kujibiki♥Unbalance (TV)', url: '../src/paginas/todos-los-animes/2006/informacion/' },//(33)
            { title: 'Brave Story', url: '../src/paginas/todos-los-animes/2006/informacion/'},//(32)
            { title: 'Bokura ga Ita', url: '../src/paginas/todos-los-animes/2006/informacion/' },//(31)
            { title: 'Zero no Tsukaima', url: '../src/paginas/todos-los-animes/2006/informacion/'},//(30)
            { title: 'Demonbane (TV)', url: '../src/paginas/todos-los-animes/2006/informacion/' },//(29)
            { title: 'Tsubasa Chronicle 2nd Season', url: '../src/paginas/todos-los-animes/2006/informacion/'},//(28)
            { title: 'Tokko', url: '../src/paginas/todos-los-animes/2006/informacion/' },//(27)
            { title: 'Black Lagoon', url: '../src/paginas/todos-los-animes/2006/informacion/'},//(26)
            { title: 'Ah! My Goddess: Sorezore no Tsubasa', url: '../src/paginas/todos-los-animes/2006/informacion/' },//(25)
            { title: 'xxxHOLiC', url: '../src/paginas/todos-los-animes/2006/informacion/'},//(24)
            { title: 'Higurashi no Naku Koro ni', url: '../src/paginas/todos-los-animes/2006/informacion/' },//(23)
            { title: 'Ouran High School Host Club', url: '../src/paginas/todos-los-animes/2006/informacion/'},//(22)
            { title: 'Ray the Animation', url: '../src/paginas/todos-los-animes/2006/informacion/' },//(21)
            { title: 'Nana', url: '../src/paginas/todos-los-animes/2006/informacion/'},//(20)
            { title: 'Air Gear', url: '../src/paginas/todos-los-animes/2006/informacion/' },//(19)
            { title: 'Utawarerumono', url: '../src/paginas/todos-los-animes/2006/informacion/'},//(18)
            { title: 'Gintama', url: '../src/paginas/todos-los-animes/2006/informacion/' },//(17)
            { title: 'Suzumiya Haruhi no Yuuutsu', url: '../src/paginas/todos-los-animes/2006/informacion/'},//(16)
            { title: 'Strawberry Panic', url: '../src/paginas/todos-los-animes/2006/informacion/' },//(i15)
            { title: 'School Rumble Ni Gakki', url: '../src/paginas/todos-los-animes/2006/informacion/'},//(14)
            { title: 'Kiba', url: '../src/paginas/todos-los-animes/2006/informacion/' },//(13)
            { title: 'Fullmetal Alchemist: Premium Collection', url: '../src/paginas/todos-los-animes/2006/informacion/'},//(12)
            { title: 'Prince of Tennis: The National Tournament', url: '../src/paginas/todos-los-animes/2006/informacion/' },//(11)
            { title: 'Shinigami no Ballad', url: '../src/paginas/todos-los-animes/2006/informacion/'},//(10)
            { title: 'Hellsing Ultimate', url: '../src/paginas/todos-los-animes/2006/informacion/'},//(9)
            { title: 'Ergo Proxy', url: '../src/paginas/todos-los-animes/2006/informacion/'},//(8)
            { title: 'Rec', url: '../src/paginas/todos-los-animes/2006/informacion/' },//(7)
            { title: 'Shakugan No Shana-Tan', url: '../src/paginas/todos-los-animes/2006/informacion/'},//(6)
            { title: 'Hanbun no Tsuki ga Noboru Sora', url: '../src/paginas/todos-los-animes/2006/informacion/' },//(5)
            { title: 'Kashimashi: Girl Meets Girl', url: '../src/paginas/todos-los-animes/2006/informacion/'},//(4)
            { title: 'Fate/stay night', url: '../src/paginas/todos-los-animes/2006/informacion/' },//(3)
            { title: 'Amaenaide yo!! Katsu!!', url: '../src/paginas/todos-los-animes/2006/informacion/' },//(2)
            { title: 'Konjiki no Gash Bell!!: Hashire Gash!! Ubawareta Umagon', url: '../src/paginas/todos-los-animes/2006/informacion/'},//(1)



            { title: 'Soukyuu no Fafner: Right of Left', url: '../src/paginas/todos-los-animes/2005/informacion/'},//(46)
            { title: 'Naruto Narutimate Hero 3: Tsuini Gekitotsu! Jounin vs. Genin!! Musabetsu Dairansen Taikai Kaisai!!', url: '../src/paginas/todos-los-animes/2005/informacion/' },//(45)
            { title: 'Saint Seiya Saga de Hades Infierno', url: '../src/paginas/todos-los-animes/2005/informacion/'},//(44)
            { title: 'Arashi no Yoru ni', url: '../src/paginas/todos-los-animes/2005/informacion/'},//(43)
            { title: 'Pale Cocoon', url: '../src/paginas/todos-los-animes/2005/informacion/'},//(42)
            { title: 'King of Fighters: Another Day', url: '../src/paginas/todos-los-animes/2005/informacion/' },//(41)
            { title: 'Karin', url: '../src/paginas/todos-los-animes/2005/informacion/'},//(40)
            { title: 'Mushishi', url: '../src/paginas/todos-los-animes/2005/informacion/' },//(39)
            { title: 'Rozen Maiden: Traumend', url: '../src/paginas/todos-los-animes/2005/informacion/'},//(38)
            { title: 'Paradise Kiss', url: '../src/paginas/todos-los-animes/2005/informacion/' },//(37)
            { title: 'Ginban Kaleidoscope', url: '../src/paginas/todos-los-animes/2005/informacion/'},//(36)
            { title: 'Blood+', url: '../src/paginas/todos-los-animes/2005/informacion/' },//(35)
            { title: 'Shakugan no Shana', url: '../src/paginas/todos-los-animes/2005/informacion/'},//(34)
            { title: 'Solty Rei', url: '../src/paginas/todos-los-animes/2005/informacion/' },//(33)
            { title: 'Black Cat', url: '../src/paginas/todos-los-animes/2005/informacion/'},//(32)
            { title: 'Jigoku Shoujo', url: '../src/paginas/todos-los-animes/2005/informacion/' },//(31)
            { title: "Mahou Shoujo Lyrical Nanoha A's", url: '../src/paginas/todos-los-animes/2005/informacion/'},//(30)
            { title: 'Air in Summer', url: '../src/paginas/todos-los-animes/2005/informacion/' },//(29)
            { title: 'Fullmetal Alchemist: The Conqueror of Shamballa', url: '../src/paginas/todos-los-animes/2005/informacion/'},//(28)
            { title: 'Full Metal Panic! The Second Raid', url: '../src/paginas/todos-los-animes/2005/informacion/' },//(27)
            { title: 'PetoPeto-san', url: '../src/paginas/todos-los-animes/2005/informacion/'},//(26)
            { title: 'Shuffle!', url: '../src/paginas/todos-los-animes/2005/informacion/' },//(25)
            { title: 'Suzuka', url: '../src/paginas/todos-los-animes/2005/informacion/'},//(24)
            { title: 'Gun x Sword', url: '../src/paginas/todos-los-animes/2005/informacion/' },//(23)
            { title: 'Da Capo Second Season', url: '../src/paginas/todos-los-animes/2005/informacion/'},//(22)
            { title: 'Amaenaide yo!', url: '../src/paginas/todos-los-animes/2005/informacion/' },//(21)
            { title: 'Bleach: Memories in the Rain', url: '../src/paginas/todos-los-animes/2005/informacion/'},//(20)
            { title: 'Trinity Blood', url: '../src/paginas/todos-los-animes/2005/informacion/' },//(19)
            { title: 'Eureka Seven', url: '../src/paginas/todos-los-animes/2005/informacion/'},//(18)
            { title: 'Basilisk: Kouga Ninpou Chou', url: '../src/paginas/todos-los-animes/2005/informacion/'},//(17)
            { title: 'Tsubasa Chronicle', url: '../src/paginas/todos-los-animes/2005/informacion/'},//(16)
            { title: 'Loveless', url: '../src/paginas/todos-los-animes/2005/informacion/' },//(15)
            { title: 'Eyeshield 21', url: '../src/paginas/todos-los-animes/2005/informacion/'},//(14)
            { title: 'Ichigo 100%', url: '../src/paginas/todos-los-animes/2005/informacion/' },//(13)
            { title: 'Elemental Gelade', url: '../src/paginas/todos-los-animes/2005/informacion/'},//(12)
            { title: 'Sousei no Aquarion', url: '../src/paginas/todos-los-animes/2005/informacion/' },//(11)
            { title: 'Ueki no Housoku', url: '../src/paginas/todos-los-animes/2005/informacion/'},//(10)
            { title: 'Karas', url: '../src/paginas/todos-los-animes/2005/informacion/'},//(9)
            { title: 'Bokusatsu Tenshi Dokuro-chan', url: '../src/paginas/todos-los-animes/2005/informacion/'},//(8)
            { title: 'Buzzer Beater', url: '../src/paginas/todos-los-animes/2005/informacion/' },//(7)
            { title: 'Girls Bravo: Second Season', url: '../src/paginas/todos-los-animes/2005/informacion/'},//(6)
            { title: 'Peach Girl', url: '../src/paginas/todos-los-animes/2005/informacion/'},//(5)
            { title: 'Air', url: '../src/paginas/todos-los-animes/2005/informacion/'},//(4)
            { title: 'Ah! My Goddess', url: '../src/paginas/todos-los-animes/2005/informacion/' },//(3)
            { title: 'Mahou Sensei Negima!', url: '../src/paginas/todos-los-animes/2005/informacion/'},//(2)
            { title: 'Konjiki no Gash Bell!!: Ougon no Chichi wo Motsu Otoko', url: '../src/paginas/todos-los-animes/2005/informacion/'},//(1)



            { title: 'Kujibiki Unbalance', url: '../src/paginas/todos-los-animes/2004/informacion/'},//(33)
            { title: 'Tales of Phantasia: The Animation', url: '../src/paginas/todos-los-animes/2004/informacion/' },//(32)
            { title: 'Black Jack', url: '../src/paginas/todos-los-animes/2004/informacion/'},//(31)
            { title: 'Genshiken', url: '../src/paginas/todos-los-animes/2004/informacion/' },//(30)
            { title: 'Mobile Suit Gundam Seed Destiny', url: '../src/paginas/todos-los-animes/2004/informacion/'},//(29)
            { title: 'Rozen Maiden', url: '../src/paginas/todos-los-animes/2004/informacion/' },//(28)
            { title: 'Beck', url: '../src/paginas/todos-los-animes/2004/informacion/'},//(27)
            { title: 'Gankutsuou', url: '../src/paginas/todos-los-animes/2004/informacion/' },//(26)
            { title: 'Yu Gi Oh!: Duel Monsters GX', url: '../src/paginas/todos-los-animes/2004/informacion/'},//(25)
            { title: 'Bleach', url: '../src/paginas/todos-los-animes/2004/informacion/' },//(24)
            { title: 'School Rumble', url: '../src/paginas/todos-los-animes/2004/informacion/'},//(23)
            { title: 'Mahou Shoujo Lyrical Nanoha', url: '../src/paginas/todos-los-animes/2004/informacion/'},//(22)
            { title: 'Elfen Lied', url: '../src/paginas/todos-los-animes/2004/informacion/'},//(21)
            { title: 'DearS', url: '../src/paginas/todos-los-animes/2004/informacion/' },//(20)
            { title: '2x2=Shinobuden', url: '../src/paginas/todos-los-animes/2004/informacion/'},//(19)
            { title: 'Girls Bravo: First Season', url: '../src/paginas/todos-los-animes/2004/informacion/' },//(18)
            { title: 'Samurai 7', url: '../src/paginas/todos-los-animes/2004/informacion/'},//(17)
            { title: 'Green Green Thirteen: Erolutions', url: '../src/paginas/todos-los-animes/2004/informacion/'},//(16)
            { title: 'Samurai Champloo', url: '../src/paginas/todos-los-animes/2004/informacion/'},//(15)
            { title: 'Bakuretsu Tenshi', url: '../src/paginas/todos-los-animes/2004/informacion/' },//(14)
            { title: 'Onegai Twins OVA', url: '../src/paginas/todos-los-animes/2004/informacion/'},//(13)
            { title: 'Initial D Fourth Stage', url: '../src/paginas/todos-los-animes/2004/informacion/' },//(12)
            { title: 'Gantz', url: '../src/paginas/todos-los-animes/2004/informacion/'},//(11)
            { title: 'Monster', url: '../src/paginas/todos-los-animes/2004/informacion/' },//(10)
            { title: 'Soukyuu no Fafner: Dead Aggressor', url: '../src/paginas/todos-los-animes/2004/informacion/'},//(9)
            { title: 'Midori no Hibi', url: '../src/paginas/todos-los-animes/2004/informacion/' },//(8)
            { title: 'Aishiteruze Baby', url: '../src/paginas/todos-los-animes/2004/informacion/'},//(7)
            { title: 'Tenjou Tenge', url: '../src/paginas/todos-los-animes/2004/informacion/' },//(6)
            { title: 'Koi Kaze', url: '../src/paginas/todos-los-animes/2004/informacion/'},//(5)
            { title: 'Hunter x Hunter: Greed Island Final', url: '../src/paginas/todos-los-animes/2004/informacion/' },//(4)
            { title: 'Saint Seiya: Tenkai-hen', url: '../src/paginas/todos-los-animes/2004/informacion/'},//(3)
            { title: 'Paranoia Agent', url: '../src/paginas/todos-los-animes/2004/informacion/' },//(2)
            { title: 'Final Approach', url: '../src/paginas/todos-los-animes/2004/informacion/'},//(1)



            { title: 'Naruto: Takigakure no Shitou - Ore ga Eiyuu Dattebayo!', url: '../src/paginas/todos-los-animes/2003/informacion/'},//(31)
            { title: 'Chrno Crusade', url: '../src/paginas/todos-los-animes/2003/informacion/' },//(30)
            { title: 'Maburaho', url: '../src/paginas/todos-los-animes/2003/informacion/'},//(29)
            { title: 'Ai Yori Aoshi: Enishi', url: '../src/paginas/todos-los-animes/2003/informacion/' },//(28)
            { title: 'Shingetsutan Tsukihime', url: '../src/paginas/todos-los-animes/2003/informacion/'},//(27)
            { title: 'Gunslinger Girl', url: '../src/paginas/todos-los-animes/2003/informacion/' },//(26)
            { title: 'Gungrave', url: '../src/paginas/todos-los-animes/2003/informacion/'},//(25)
            { title: 'Kimi ga Nozomu Eien', url: '../src/paginas/todos-los-animes/2003/informacion/' },//(24)
            { title: 'Hundred Stories', url: '../src/paginas/todos-los-animes/2003/informacion/'},//(23)
            { title: 'Fullmetal Alchemist', url: '../src/paginas/todos-los-animes/2003/informacion/' },//(22)
            { title: 'Tokyo Godfathers', url: '../src/paginas/todos-los-animes/2003/informacion/'},//(21)
            { title: 'Full Metal Panic? Fumoffu', url: '../src/paginas/todos-los-animes/2003/informacion/' },//(20)
            { title: 'Ikkitousen', url: '../src/paginas/todos-los-animes/2003/informacion/'},//(19)
            { title: 'Onegai Twins', url: '../src/paginas/todos-los-animes/2003/informacion/' },//(18)
            { title: 'Green Green', url: '../src/paginas/todos-los-animes/2003/informacion/'},//(17)
            { title: 'Da Capo', url: '../src/paginas/todos-los-animes/2003/informacion/' },//(16)
            { title: 'Cinderella Boy', url: '../src/paginas/todos-los-animes/2003/informacion/'},//(15)
            { title: 'Naruto: Akaki Yotsuba no Clover wo Sagase', url: '../src/paginas/todos-los-animes/2003/informacion/' },//(14)
            { title: 'Ninja Scroll: The Series', url: '../src/paginas/todos-los-animes/2003/informacion/'},//(13)
            { title: 'Tantei Gakuen Q', url: '../src/paginas/todos-los-animes/2003/informacion/' },//(12)
            { title: 'Last Exile', url: '../src/paginas/todos-los-animes/2003/informacion/'},//(11)
            { title: 'Konjiki no Gash Bell!!', url: '../src/paginas/todos-los-animes/2003/informacion/' },//(10)
            { title: 'Witchblade', url: '../src/paginas/todos-los-animes/2003/informacion/'},//(9)
            { title: 'Matantei Loki Ragnarok', url: '../src/paginas/todos-los-animes/2003/informacion/' },//(8)
            { title: 'D.N.Angel', url: '../src/paginas/todos-los-animes/2003/informacion/'},//(7)
            { title: 'Kaleido Star', url: '../src/paginas/todos-los-animes/2003/informacion/' },//(6)
            { title: 'Hunter x Hunter: Greed Island', url: '../src/paginas/todos-los-animes/2003/informacion/'},//(5)
            { title: 'Cardcaptor Sakura: Leave It to Kero-chan', url: '../src/paginas/todos-los-animes/2003/informacion/' },//(4)
            { title: 'Ashita no Nadja', url: '../src/paginas/todos-los-animes/2003/informacion/'},//(3)
            { title: "Wolf's Rain", url: '../src/paginas/todos-los-animes/2003/informacion/' },//(2)
            { title: 'Dear Boys', url: '../src/paginas/todos-los-animes/2003/informacion/' },//(1)



            { title: 'Macross Zero', url: '../src/paginas/todos-los-animes/2002/informacion/'},//(27)
            { title: 'Green Green OVA', url: '../src/paginas/todos-los-animes/2002/informacion/' },//(26)
            { title: 'Pokemon Advance', url: '../src/paginas/todos-los-animes/2002/informacion/'},//(25)
            { title: 'Saint Seiya Saga de Hades Sanctuary', url: '../src/paginas/todos-los-animes/2002/informacion/' },//(24)
            { title: 'Onegai Teacher OVA', url: '../src/paginas/todos-los-animes/2002/informacion/'},//(23)
            { title: 'GetBackers', url: '../src/paginas/todos-los-animes/2002/informacion/' },//(22)
            { title: 'Mobile Suit Gundam Seed', url: '../src/paginas/todos-los-animes/2002/informacion/'},//(21)
            { title: 'Naruto', url: '../src/paginas/todos-los-animes/2002/informacion/' },//(20)
            { title: 'Hungry Heart: Wild Striker', url: '../src/paginas/todos-los-animes/2002/informacion/'},//(19)
            { title: 'Futari Ecchi', url: '../src/paginas/todos-los-animes/2002/informacion/' },//(18)
            { title: 'Saikano', url: '../src/paginas/todos-los-animes/2002/informacion/'},//(17)
            { title: 'Samurai Deeper Kyo', url: '../src/paginas/todos-los-animes/2002/informacion/' },//(16)
            { title: 'Ai Yori Aoshi', url: '../src/paginas/todos-los-animes/2002/informacion/'},//(15)
            { title: 'Juuni Kokuki', url: '../src/paginas/todos-los-animes/2002/informacion/' },//(14)
            { title: 'Azumanga Daioh', url: '../src/paginas/todos-los-animes/2002/informacion/'},//(13)
            { title: 'Digimon Frontier', url: '../src/paginas/todos-los-animes/2002/informacion/' },//(12)
            { title: 'Full Moon wo Sagashite', url: '../src/paginas/todos-los-animes/2002/informacion/'},//(11)
            { title: 'Tenshi na Konamaiki', url: '../src/paginas/todos-los-animes/2002/informacion/' },//(10)
            { title: '.hack//Sign', url: '../src/paginas/todos-los-animes/2002/informacion/'},//(9)
            { title: 'Abenobashi Mahou Shoutengai', url: '../src/paginas/todos-los-animes/2002/informacion/' },//(8)
            { title: 'Chobits', url: '../src/paginas/todos-los-animes/2002/informacion/'},//(7)
            { title: 'Tenchi Muyo! GXP', url: '../src/paginas/todos-los-animes/2002/informacion/' },//(6)
            { title: 'Sweat Punch', url: '../src/paginas/todos-los-animes/2002/informacion/'},//(5)
            { title: 'Love Hina Again', url: '../src/paginas/todos-los-animes/2002/informacion/' },//(4)
            { title: 'Hunter x Hunter OVA', url: '../src/paginas/todos-los-animes/2002/informacion/'},//(3)
            { title: 'Onegai Teacher', url: '../src/paginas/todos-los-animes/2002/informacion/' },//(2)
            { title: 'Full Metal Panic!', url: '../src/paginas/todos-los-animes/2002/informacion/'},//(1)



            { title: 'Rurouni Kenshin: Seisouhen', url: '../src/paginas/todos-los-animes/2001/informacion/'},//(18)
            { title: 'Groove Adventure Rave', url: '../src/paginas/todos-los-animes/2001/informacion/' },//(17)
            { title: 'Hellsing', url: '../src/paginas/todos-los-animes/2001/informacion/'},//(16)
            { title: 'Prince of Tennis', url: '../src/paginas/todos-los-animes/2001/informacion/' },//(15)
            { title: 'X', url: '../src/paginas/todos-los-animes/2001/informacion/'},//(14)
            { title: 'Spirited Away', url: '../src/paginas/todos-los-animes/2001/informacion/' },//(13)
            { title: 'Fruits Basket', url: '../src/paginas/todos-los-animes/2001/informacion/'},//(12)
            { title: 'Shaman King', url: '../src/paginas/todos-los-animes/2001/informacion/' },//(11)
            { title: 'I My Me! Strawberry Eggs', url: '../src/paginas/todos-los-animes/2001/informacion/'},//(10)
            { title: 'Noir', url: '../src/paginas/todos-los-animes/2001/informacion/' },//(9)
            { title: 'Love Hina Spring Special', url: '../src/paginas/todos-los-animes/2001/informacion/'},//(8)
            { title: 'Angelic Layer', url: '../src/paginas/todos-los-animes/2001/informacion/' },//(7)
            { title: 'Digimon Tamers', url: '../src/paginas/todos-los-animes/2001/informacion/'},//(6)
            { title: 'Initial D Third Stage', url: '../src/paginas/todos-los-animes/2001/informacion/' },//(5)
            { title: 'Earth Maiden Arjuna', url: '../src/paginas/todos-los-animes/2001/informacion/'},//(4)
            { title: 'Grappler Baki (TV)', url: '../src/paginas/todos-los-animes/2001/informacion/' },//(3)
            { title: 'Bakuten Shoot Beyblade', url: '../src/paginas/todos-los-animes/2001/informacion/'},//(2)
            { title: 'Zoids Shinseiki/Zero', url: '../src/paginas/todos-los-animes/2001/informacion/' },//(1)



            { title: 'Love Hina Christmas Special: Silent Eve', url: '../src/paginas/todos-los-animes/2000/informacion/'},//(16)
            { title: 'Dotto Koni-chan', url: '../src/paginas/todos-los-animes/2000/informacion/' },//(15)
            { title: 'Blood: The Last Vampire', url: '../src/paginas/todos-los-animes/2000/informacion/'},//(14)
            { title: 'Ghost Stories', url: '../src/paginas/todos-los-animes/2000/informacion/' },//(13)
            { title: 'InuYasha', url: '../src/paginas/todos-los-animes/2000/informacion/'},//(12)
            { title: 'Argento Soma', url: '../src/paginas/todos-los-animes/2000/informacion/' },//(11)
            { title: 'Hajime no Ippo', url: '../src/paginas/todos-los-animes/2000/informacion/'},//(10)
            { title: 'Gravitation', url: '../src/paginas/todos-los-animes/2000/informacion/' },//(9)
            { title: 'Yami no Matsuei', url: '../src/paginas/todos-los-animes/2000/informacion/'},//(8)
            { title: 'Cardcaptor Sakura Movie 2: The Sealed Card', url: '../src/paginas/todos-los-animes/2000/informacion/' },//(7)
            { title: 'Escaflowne', url: '../src/paginas/todos-los-animes/2000/informacion/'},//(6)
            { title: 'Angel Sanctuary', url: '../src/paginas/todos-los-animes/2000/informacion/' },//(5)
            { title: 'FLCL', url: '../src/paginas/todos-los-animes/2000/informacion/'},//(4)
            { title: 'Love Hina', url: '../src/paginas/todos-los-animes/2000/informacion/' },//(3)
            { title: 'Yu-Gi-Oh! Duel Monsters', url: '../src/paginas/todos-los-animes/2000/informacion/'},//(2)
            { title: 'Digimon Adventure 02', url: '../src/paginas/todos-los-animes/2000/informacion/' },//(1)



            { title: 'One Piece', url: '../src/paginas/todos-los-animes/1999/informacion/'},//(15)
            { title: 'Hunter x Hunter', url: '../src/paginas/todos-los-animes/1999/informacion/' },//(14)
            { title: 'Initial D Second Stage', url: '../src/paginas/todos-los-animes/1999/informacion/'},//(13)
            { title: 'Excel Saga', url: '../src/paginas/todos-los-animes/1999/informacion/' },//(12)
            { title: 'Majutsushi Orphen Revenge', url: '../src/paginas/todos-los-animes/1999/informacion/'},//(11)
            { title: 'Zoids', url: '../src/paginas/todos-los-animes/1999/informacion/' },//(10)
            { title: 'Cardcaptor Sakura: The Movie', url: '../src/paginas/todos-los-animes/1999/informacion/'},//(9)
            { title: 'Kachou Ouji', url: '../src/paginas/todos-los-animes/1999/informacion/' },//(8)
            { title: 'Medabots', url: '../src/paginas/todos-los-animes/1999/informacion/'},//(7)
            { title: 'Great Teacher Onizuka', url: '../src/paginas/todos-los-animes/1999/informacion/' },//(6)
            { title: 'Digimon Adventure', url: '../src/paginas/todos-los-animes/1999/informacion/' },//(5)
            { title: 'Digimon Adventure Movie', url: '../src/paginas/todos-los-animes/1999/informacion/'},//(4)
            { title: 'Petshop of Horrors', url: '../src/paginas/todos-los-animes/1999/informacion/' },//(3)
            { title: 'Rurouni Kenshin: Tsuiokuhen', url: '../src/paginas/todos-los-animes/1999/informacion/'},//(2)
            { title: 'Iketeru Futari', url: '../src/paginas/todos-los-animes/1999/informacion/' },//(1)



            { title: 'Saber Marionette J to X', url: '../src/paginas/todos-los-animes/1998/informacion/'},//(11)
            { title: 'Majutsushi Orphen', url: '../src/paginas/todos-los-animes/1998/informacion/'},//(10)
            { title: 'Kare Kano', url: '../src/paginas/todos-los-animes/1998/informacion/'},//(9)
            { title: 'One Piece: Taose! Kaizoku Ganzack', url: '../src/paginas/todos-los-animes/1998/informacion/' },//(8)
            { title: 'Serial Experiments Lain', url: '../src/paginas/todos-los-animes/1998/informacion/'},//(7)
            { title: 'Initial D First Stage', url: '../src/paginas/todos-los-animes/1998/informacion/' },//(6)
            { title: 'Cardcaptor Sakura', url: '../src/paginas/todos-los-animes/1998/informacion/'},//(5)
            { title: 'Jikuu Tenshou Nazca', url: '../src/paginas/todos-los-animes/1998/informacion/' },//(4)
            { title: 'Cowboy Bebop', url: '../src/paginas/todos-los-animes/1998/informacion/'},//(3)
            { title: 'Trigun', url: '../src/paginas/todos-los-animes/1998/informacion/' },//(2)
            { title: 'Devilman Lady', url: '../src/paginas/todos-los-animes/1998/informacion/' },//(1)



            { title: 'Saber Marionette J Again', url: '../src/paginas/todos-los-animes/1997/informacion/'},//(7)
            { title: 'Berserk', url: '../src/paginas/todos-los-animes/1997/informacion/' },//(6)
            { title: "B'tX Neo", url: '../src/paginas/todos-los-animes/1997/informacion/'},//(5)
            { title: 'Neon Genesis Evangelion: The End of Evangelion', url: '../src/paginas/todos-los-animes/1997/informacion/' },//(4)
            { title: 'Pokemon', url: '../src/paginas/todos-los-animes/1997/informacion/'},//(3)
            { title: 'Shin Tenchi Muyo!', url: '../src/paginas/todos-los-animes/1997/informacion/' },//(2)
            { title: 'Neon Genesis Evangelion: Death & Rebirth', url: '../src/paginas/todos-los-animes/1997/informacion/'},//(1)



            { title: "You're Under Arrest! (1996)", url: '../src/paginas/todos-los-animes/1996/informacion/'},//(9)
            { title: 'Saber Marionette J', url: '../src/paginas/todos-los-animes/1996/informacion/' },//(8)
            { title: 'Hana yori Dango', url: '../src/paginas/todos-los-animes/1996/informacion/'},//(7)
            { title: 'Jigoku Sensei Nube', url: '../src/paginas/todos-los-animes/1996/informacion/' },//(6)
            { title: "B'tX", url: '../src/paginas/todos-los-animes/1996/informacion/'},//(5)
            { title: 'Tenkuu no Escaflowne', url: '../src/paginas/todos-los-animes/1996/informacion/' },//(4)
            { title: 'Dragon Ball GT', url: '../src/paginas/todos-los-animes/1996/informacion/'},//(3)
            { title: 'Rurouni Kenshin', url: '../src/paginas/todos-los-animes/1996/informacion/' },//(2)
            { title: 'Detective Conan', url: '../src/paginas/todos-los-animes/1996/informacion/'},//(1)



            { title: 'Golden Boy', url: '../src/paginas/todos-los-animes/1995/informacion/'},//(13)
            { title: 'Neon Genesis Evangelion', url: '../src/paginas/todos-los-animes/1995/informacion/' },//(12)
            { title: 'Dragon Ball Z Movie 13: Wrath of the Dragon', url: '../src/paginas/todos-los-animes/1995/informacion/'},//(11)
            { title: 'Street Fighter II V', url: '../src/paginas/todos-los-animes/1995/informacion/' },//(10)
            { title: 'Magic Knight Rayearth II', url: '../src/paginas/todos-los-animes/1995/informacion/'},//(9)
            { title: 'Slayers', url: '../src/paginas/todos-los-animes/1995/informacion/' },//(8)
            { title: 'Mobile Suit Gundam Wing', url: '../src/paginas/todos-los-animes/1995/informacion/'},//(7)
            { title: 'Fushigi Yuugi', url: '../src/paginas/todos-los-animes/1995/informacion/' },//(6)
            { title: 'Tenchi Muyo!', url: '../src/paginas/todos-los-animes/1995/informacion/'},//(5)
            { title: 'Dragon Ball Z Movie 12: Fusion Reborn', url: '../src/paginas/todos-los-animes/1995/informacion/' },//(4)
            { title: 'DNA² OVA', url: '../src/paginas/todos-los-animes/1995/informacion/' },//(3)
            { title: 'Kishin Douji Zenki', url: '../src/paginas/todos-los-animes/1995/informacion/'},//(2)
            { title: 'Gulliver Boy', url: '../src/paginas/todos-los-animes/1995/informacion/' },//(1)



            { title: 'Aozora Shoujotai', url: '../src/paginas/todos-los-animes/1994/informacion/'},//(5)
            { title: 'Magic Knight Rayearth', url: '../src/paginas/todos-los-animes/1994/informacion/' },//(4)
            { title: 'Result 2', url: '../src/paginas/todos-los-animes/1994/informacion/'},//(3)
            { title: 'DNA²', url: '../src/paginas/todos-los-animes/1994/informacion/' },//(2)
            { title: 'Dragon Ball Z Movie 10: Broly - Second Coming', url: '../src/paginas/todos-los-animes/1994/informacion/'},//(1)



            { title: "JoJo's Bizarre Adventure", url: '../src/paginas/todos-los-animes/1993/informacion/'},//(7)
            { title: 'Slam Dunk', url: '../src/paginas/todos-los-animes/1993/informacion/' },//(6)
            { title: 'Dragon Ball Z Movie 09: Bojack Unbound', url: '../src/paginas/todos-los-animes/1993/informacion/'},//(5)
            { title: 'Ghost Sweeper GS Mikami', url: '../src/paginas/todos-los-animes/1993/informacion/' },//(4)
            { title: 'Mobile Suit Victory Gundam', url: '../src/paginas/todos-los-animes/1993/informacion/'},//(3)
            { title: 'Dragon Ball Z Movie 08: Broly - The Legendary Super Saiyan', url: '../src/paginas/todos-los-animes/1993/informacion/' },//(2)
            { title: 'Irresponsible Captain Tylor', url: '../src/paginas/todos-los-animes/1993/informacion/'},//(1)



            { title: 'Yu Yu Hakusho', url: '../src/paginas/todos-los-animes/1992/informacion/'},//(7)
            { title: 'Ushio to Tora OVA', url: '../src/paginas/todos-los-animes/1992/informacion/' },//(6)
            { title: 'Mobile Suit Gundam 0083: The Fading Light of Zeon', url: '../src/paginas/todos-los-animes/1992/informacion/'},//(5)
            { title: 'Dragon Ball Z Movie 07: Super Android 13', url: '../src/paginas/todos-los-animes/1992/informacion/' },//(4)
            { title: 'Dragon Ball Z Movie 06: Return of Cooler', url: '../src/paginas/todos-los-animes/1992/informacion/'},//(3)
            { title: 'Sailor Moon', url: '../src/paginas/todos-los-animes/1992/informacion/' },//(2)
            { title: 'Tekkaman Blade', url: '../src/paginas/todos-los-animes/1992/informacion/'},//(1)



            { title: 'Arslan Senki: The Heroic Legend of Arslan', url: '../src/paginas/todos-los-animes/1991/informacion/'},//(4)
            { title: "Dragon Ball Z Movie 05: Cooler's Revenge", url: '../src/paginas/todos-los-animes/1991/informacion/' },//(3)
            { title: 'Mobile Suit Gundam 0083: Stardust Memory', url: '../src/paginas/todos-los-animes/1991/informacion/'},//(2)
            { title: 'Dragon Ball Z Movie 04: Lord Slug', url: '../src/paginas/todos-los-animes/1991/informacion/' },//(1)



            { title: 'Dragon Ball Z Movie 03: The Tree of Might', url: '../src/paginas/todos-los-animes/1990/informacion/'},//(2)
            { title: "Dragon Ball Z Movie 02: The World's Strongest", url: '../src/paginas/todos-los-animes/1990/informacion/' },//(1)



            { title: "Kiki's Delivery Service", url: '../src/paginas/todos-los-animes/1989/informacion/'},//(4)
            { title: 'Dragon Ball Z Movie 01: The Deadzone', url: '../src/paginas/todos-los-animes/1989/informacion/' },//(3)
            { title: 'Dragon Ball Z (Original)', url: '../src/paginas/todos-los-animes/1989/informacion/'},//(2)
            { title: 'Ranma ½', url: '../src/paginas/todos-los-animes/1989/informacion/' },//(1)



            { title: 'Akira', url: '../src/paginas/todos-los-animes/1988/informacion/'},//(4)
            { title: 'Ronin Warriors', url: '../src/paginas/todos-los-animes/1988/informacion/' },//(3)
            { title: 'My Neighbor Totoro', url: '../src/paginas/todos-los-animes/1988/informacion/'},//(2)
            { title: 'Grave of the Fireflies', url: '../src/paginas/todos-los-animes/1988/informacion/' },//(1)



            { title: 'Kimagure Orange Road', url: '../src/paginas/todos-los-animes/1987/informacion/'},//(1)



            { title: 'Saint Seiya', url: '../src/paginas/todos-los-animes/1986/informacion/' },//(3)
            { title: 'Mobile Suit Gundam ZZ', url: '../src/paginas/todos-los-animes/1986/informacion/'},//(2)
            { title: 'Dragon Ball', url: '../src/paginas/todos-los-animes/1986/informacion/' },//(1)



            { title: 'Mobile Suit Zeta Gundam', url: '../src/paginas/todos-los-animes/1985/informacion/'},//(1)



            { title: 'fist of the north star', url: '../src/paginas/todos-los-animes/1984/informacion/' },//(1)



            { title: 'Capitan Tsubasa', url: '../src/paginas/todos-los-animes/1983/informacion/'},//(1)



            { title: 'Macross', url: '../src/paginas/todos-los-animes/1982/informacion/' },//(1)



            { title: 'Result 2', url: '../src/paginas/todos-los-animes/1980/informacion/'},//(1)



            { title: 'Result 3', url: '../src/paginas/todos-los-animes/1979/informacion/' },//(2)
            { title: 'Result 2', url: '../src/paginas/todos-los-animes/1979/informacion/'},//(1)



            { title: 'Candy Candy', url: '../src/paginas/todos-los-animes/1976/informacion/' },//(1)



            { title: 'Alps no Shoujo Heidi', url: '../src/paginas/todos-los-animes/1974/informacion/'},//(1)



            { title: 'Mazinger Z', url: '../src/paginas/todos-los-animes/1972/informacion/' },//(1)



            { title: 'Lupin III', url: '../src/paginas/todos-los-animes/1971/informacion/'},//(1)



            { title: 'Ashita no Joe', url: '../src/paginas/todos-los-animes/1970/informacion/' },//(1)



        ];

// Function to update search results
function updateSearchResults(query) {
    searchResults.innerHTML = '';
  
    // Filter simulated results based on query
    const filteredResults = simulatedResults.filter(result =>
      result.title.toLowerCase().includes(query.toLowerCase())
    );
  
    // Create and append list items for each result, removing default bullets
    filteredResults.forEach(result => {
      const cleanTitle = result.title.replace(/\./g, ''); // Remove dots from title
      const listItem = document.createElement('li');
      listItem.style.listStyleType = 'none'; // Set list style to none
      listItem.innerHTML = `<a href="${result.url}" class="block px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md">${cleanTitle}</a>`;
      searchResults.appendChild(listItem);
    });
  }
        // Event listener for input changes
        searchInput.addEventListener('input', () => {
            const query = searchInput.value.trim();

            // Show search results if query is not empty
            if (query) {
                updateSearchResults(query);
                searchResults.classList.remove('hidden');
            } else {
                searchResults.innerHTML = '';
                searchResults.classList.add('hidden');
            }
        });

        const vscode = require('vscode');
        const path = require('path');
        const fs = require('fs');
        
        // Función para abrir un archivo en VS Code
        function openFileInVSCode(filePath) {
            vscode.workspace.openTextDocument(filePath).then(doc => {
                vscode.window.showTextDocument(doc);
            });
        }
        
        // Función para analizar el archivo en busca de URLs y asignarles comandos
        function analyzeAndAssignCommands(editor) {
            const document = editor.document;
            const regex = /'(.*?)'/g; // Expresión regular para encontrar URLs entre comillas simples
        
            let match;
            while ((match = regex.exec(document.getText()))) {
                const url = match[1];
                if (url.startsWith('file://')) {
                    const command = vscode.commands.registerCommand('extension.openLocalFile', () => {
                        const filePath = url.replace('file://', '');
                        if (fs.existsSync(filePath)) {
                            openFileInVSCode(filePath);
                        } else {
                            vscode.window.showErrorMessage('El archivo no existe.');
                        }
                    });
                    vscode.context.subscriptions.push(command);
                }
            }
        }
        
        // Activación de la extensión
        exports.activate = function (context) {
            // Ejecutar la función cuando se abra un archivo
            vscode.window.onDidChangeActiveTextEditor(editor => {
                if (editor) {
                    analyzeAndAssignCommands(editor);
                }
            });
        };
        
        