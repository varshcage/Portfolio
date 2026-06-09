import { useReveal } from '../hooks/useReveal'

const info = [
  { icon: 'pi-map-marker', label: 'Location', value: 'Badulla, Sri Lanka' },
  { icon: 'pi-envelope', label: 'Email', value: 'heshavarshan@gmail.com', href: 'mailto:heshavarshan@gmail.com' },
  { icon: 'pi-phone', label: 'Phone', value: '0740 464 926', href: 'tel:0740464926' },
  { icon: 'pi-linkedin', label: 'LinkedIn', value: 'Srishanker Heshavarshaan', href: 'https://linkedin.com' },
  { icon: 'pi-palette', label: 'Design Portfolio', value: 'Varshcage', href: '#' },
]

const languages = ['English', 'Sinhala', 'Tamil']

export default function About() {
  const ref = useReveal()

  return (
    <section id="about" className="py-28 px-6 bg-white relative overflow-hidden dark:bg-charcoal">
      {/* Animated SVG Background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <svg 
          width="100%" 
          height="100%" 
          id="svg" 
          viewBox="0 0 1440 590" 
          xmlns="http://www.w3.org/2000/svg" 
          className="transition duration-300 ease-in-out delay-150 w-full h-full"
          preserveAspectRatio="none"
        >
          <style>
            {`
              .path-0{
                animation:pathAnim-0 4s;
                animation-timing-function: linear;
                animation-iteration-count: infinite;
              }
              @keyframes pathAnim-0{
                0%{
                  d: path("M 0,600 L 0,337 C 105.83732057416267,344.0430622009569 211.67464114832535,351.0861244019139 304,338 C 396.32535885167465,324.9138755980861 475.1387559808612,291.69856459330146 557,252 C 638.8612440191388,212.30143540669854 723.7703349282297,166.11961722488036 825,148 C 926.2296650717703,129.88038277511964 1043.7799043062203,139.82296650717703 1149,126 C 1254.2200956937797,112.17703349282297 1347.1100478468898,74.58851674641149 1440,37 L 1440,600 L 0,600 Z");
                }
                25%{
                  d: path("M 0,600 L 0,337 C 115.31100478468898,347.62200956937795 230.62200956937795,358.24401913875596 317,356 C 403.37799043062205,353.75598086124404 460.82296650717706,338.645933014354 555,295 C 649.1770334928229,251.35406698564597 780.0861244019139,179.17224880382776 872,140 C 963.9138755980861,100.82775119617224 1016.8325358851673,94.66507177033492 1105,83 C 1193.1674641148327,71.33492822966508 1316.5837320574165,54.16746411483254 1440,37 L 1440,600 L 0,600 Z");
                }
                50%{
                  d: path("M 0,600 L 0,337 C 61.67464114832532,327.0287081339713 123.34928229665064,317.0574162679426 236,313 C 348.65071770334936,308.9425837320574 512.2775119617226,310.79904306220095 629,275 C 745.7224880382774,239.20095693779905 815.5406698564593,165.7464114832536 890,140 C 964.4593301435407,114.2535885167464 1043.55980861244,136.2153110047847 1136,127 C 1228.44019138756,117.7846889952153 1334.22009569378,77.39234449760765 1440,37 L 1440,600 L 0,600 Z");
                }
                75%{
                  d: path("M 0,600 L 0,337 C 68.63157894736838,326.77033492822966 137.26315789473676,316.5406698564593 240,306 C 342.73684210526324,295.4593301435407 479.57894736842115,284.60765550239233 596,278 C 712.4210526315788,271.39234449760767 808.421052631579,269.0287081339713 901,238 C 993.578947368421,206.9712918660287 1082.7368421052631,147.2775119617225 1172,109 C 1261.2631578947369,70.7224880382775 1350.6315789473683,53.86124401913875 1440,37 L 1440,600 L 0,600 Z");
                }
                100%{
                  d: path("M 0,600 L 0,337 C 105.83732057416267,344.0430622009569 211.67464114832535,351.0861244019139 304,338 C 396.32535885167465,324.9138755980861 475.1387559808612,291.69856459330146 557,252 C 638.8612440191388,212.30143540669854 723.7703349282297,166.11961722488036 825,148 C 926.2296650717703,129.88038277511964 1043.7799043062203,139.82296650717703 1149,126 C 1254.2200956937797,112.17703349282297 1347.1100478468898,74.58851674641149 1440,37 L 1440,600 L 0,600 Z");
                }
              }
              .path-1{
                animation:pathAnim-1 4s;
                animation-timing-function: linear;
                animation-iteration-count: infinite;
              }
              @keyframes pathAnim-1{
                0%{
                  d: path("M 0,600 L 0,487 C 105.1866028708134,517.555023923445 210.3732057416268,548.11004784689 299,543 C 387.6267942583732,537.88995215311 459.6937799043062,497.1148325358852 570,449 C 680.3062200956938,400.8851674641148 828.8516746411484,345.43062200956933 917,308 C 1005.1483253588516,270.56937799043067 1032.8995215311004,251.16267942583733 1110,234 C 1187.1004784688996,216.83732057416267 1313.5502392344497,201.91866028708134 1440,187 L 1440,600 L 0,600 Z");
                }
                25%{
                  d: path("M 0,600 L 0,487 C 67.69377990430621,493.0382775119617 135.38755980861242,499.07655502392345 249,472 C 362.6124401913876,444.92344497607655 522.1435406698564,384.73205741626793 626,368 C 729.8564593301436,351.26794258373207 778.0382775119618,377.99521531100476 846,351 C 913.9617224880382,324.00478468899524 1001.7033492822968,243.28708133971293 1104,207 C 1206.2966507177032,170.71291866028707 1323.1483253588517,178.85645933014354 1440,187 L 1440,600 L 0,600 Z");
                }
                50%{
                  d: path("M 0,600 L 0,487 C 79.42583732057417,515.200956937799 158.85167464114835,543.4019138755981 259,541 C 359.14832535885165,538.5980861244019 480.01913875598086,505.5933014354067 590,463 C 699.9808612440191,420.4066985645933 799.0717703349284,368.2248803827751 881,334 C 962.9282296650716,299.7751196172249 1027.6937799043062,283.5071770334928 1118,262 C 1208.3062200956938,240.4928229665072 1324.153110047847,213.7464114832536 1440,187 L 1440,600 L 0,600 Z");
                }
                75%{
                  d: path("M 0,600 L 0,487 C 81.7129186602871,470.5023923444976 163.4258373205742,454.00478468899524 273,438 C 382.5741626794258,421.99521531100476 520.0095693779905,406.4832535885167 613,385 C 705.9904306220095,363.5167464114833 754.5358851674641,336.06220095693783 833,314 C 911.4641148325359,291.93779904306217 1019.8468899521531,275.26794258373207 1126,255 C 1232.153110047847,234.73205741626796 1336.0765550239234,210.86602870813397 1440,187 L 1440,600 L 0,600 Z");
                }
                100%{
                  d: path("M 0,600 L 0,487 C 105.1866028708134,517.555023923445 210.3732057416268,548.11004784689 299,543 C 387.6267942583732,537.88995215311 459.6937799043062,497.1148325358852 570,449 C 680.3062200956938,400.8851674641148 828.8516746411484,345.43062200956933 917,308 C 1005.1483253588516,270.56937799043067 1032.8995215311004,251.16267942583733 1110,234 C 1187.1004784688996,216.83732057416267 1313.5502392344497,201.91866028708134 1440,187 L 1440,600 L 0,600 Z");
                }
              }
              .path-2{
                animation:pathAnim-2 4s;
                animation-timing-function: linear;
                animation-iteration-count: infinite;
              }
              @keyframes pathAnim-2{
                0%{
                  d: path("M 0,600 L 0,637 C 112.98564593301435,672.6267942583731 225.9712918660287,708.2535885167464 326,683 C 426.0287081339713,657.7464114832536 513.1004784688996,571.6124401913876 599,539 C 684.8995215311004,506.38755980861237 769.6267942583733,527.2966507177032 851,521 C 932.3732057416267,514.7033492822968 1010.3923444976076,481.2009569377991 1108,446 C 1205.6076555023924,410.7990430622009 1322.8038277511962,373.89952153110045 1440,337 L 1440,600 L 0,600 Z");
                }
                25%{
                  d: path("M 0,600 L 0,637 C 110.53588516746413,624.0813397129186 221.07177033492826,611.1626794258373 320,612 C 418.92822966507174,612.8373205741627 506.2488038277512,627.4306220095694 598,599 C 689.7511961722488,570.5693779904306 785.9330143540669,499.11483253588517 866,450 C 946.0669856459331,400.88516746411483 1010.019138755981,374.11004784689 1103,359 C 1195.980861244019,343.88995215311 1317.9904306220096,340.444976076555 1440,337 L 1440,600 L 0,600 Z");
                }
                50%{
                  d: path("M 0,600 L 0,637 C 77.68421052631578,648.2822966507177 155.36842105263156,659.5645933014355 243,656 C 330.63157894736844,652.4354066985645 428.2105263157895,634.023923444976 542,591 C 655.7894736842105,547.976076555024 785.7894736842105,480.33971291866027 890,445 C 994.2105263157895,409.66028708133973 1072.6315789473683,406.6172248803828 1160,394 C 1247.3684210526317,381.3827751196172 1343.6842105263158,359.1913875598086 1440,337 L 1440,600 L 0,600 Z");
                }
                75%{
                  d: path("M 0,600 L 0,637 C 121.14832535885168,658.6937799043062 242.29665071770336,680.3875598086124 331,655 C 419.70334928229664,629.6124401913876 475.9617224880383,557.1435406698565 551,539 C 626.0382775119617,520.8564593301435 719.8564593301435,557.0382775119617 833,541 C 946.1435406698565,524.9617224880383 1078.6124401913876,456.7033492822967 1183,414 C 1287.3875598086124,371.2966507177033 1363.6937799043062,354.14832535885165 1440,337 L 1440,600 L 0,600 Z");
                }
                100%{
                  d: path("M 0,600 L 0,637 C 112.98564593301435,672.6267942583731 225.9712918660287,708.2535885167464 326,683 C 426.0287081339713,657.7464114832536 513.1004784688996,571.6124401913876 599,539 C 684.8995215311004,506.38755980861237 769.6267942583733,527.2966507177032 851,521 C 932.3732057416267,514.7033492822968 1010.3923444976076,481.2009569377991 1108,446 C 1205.6076555023924,410.7990430622009 1322.8038277511962,373.89952153110045 1440,337 L 1440,600 L 0,600 Z");
                }
              }
            `}
          </style>
          <defs>
            <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="5%" stop-color="#c9a84c"></stop>
              <stop offset="95%" stop-color="#ffffff"></stop>
            </linearGradient>
          </defs>
          <path d="M 0,600 L 0,337 C 105.83732057416267,344.0430622009569 211.67464114832535,351.0861244019139 304,338 C 396.32535885167465,324.9138755980861 475.1387559808612,291.69856459330146 557,252 C 638.8612440191388,212.30143540669854 723.7703349282297,166.11961722488036 825,148 C 926.2296650717703,129.88038277511964 1043.7799043062203,139.82296650717703 1149,126 C 1254.2200956937797,112.17703349282297 1347.1100478468898,74.58851674641149 1440,37 L 1440,600 L 0,600 Z" stroke="none" strokeWidth="0" fill="url(#gradient)" fillOpacity="0.4" className="transition-all duration-300 ease-in-out delay-150 path-0"></path>
          <path d="M 0,600 L 0,487 C 105.1866028708134,517.555023923445 210.3732057416268,548.11004784689 299,543 C 387.6267942583732,537.88995215311 459.6937799043062,497.1148325358852 570,449 C 680.3062200956938,400.8851674641148 828.8516746411484,345.43062200956933 917,308 C 1005.1483253588516,270.56937799043067 1032.8995215311004,251.16267942583733 1110,234 C 1187.1004784688996,216.83732057416267 1313.5502392344497,201.91866028708134 1440,187 L 1440,600 L 0,600 Z" stroke="none" strokeWidth="0" fill="url(#gradient)" fillOpacity="0.53" className="transition-all duration-300 ease-in-out delay-150 path-1"></path>
          <path d="M 0,600 L 0,637 C 112.98564593301435,672.6267942583731 225.9712918660287,708.2535885167464 326,683 C 426.0287081339713,657.7464114832536 513.1004784688996,571.6124401913876 599,539 C 684.8995215311004,506.38755980861237 769.6267942583733,527.2966507177032 851,521 C 932.3732057416267,514.7033492822968 1010.3923444976076,481.2009569377991 1108,446 C 1205.6076555023924,410.7990430622009 1322.8038277511962,373.89952153110045 1440,337 L 1440,600 L 0,600 Z" stroke="none" strokeWidth="0" fill="url(#gradient)" fillOpacity="1" className="transition-all duration-300 ease-in-out delay-150 path-2"></path>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div className="reveal">
            <span className="text-gold text-xs font-mono tracking-widest uppercase">01 — About</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal mt-3 mb-6 leading-tight dark:text-cream">
              Developer by logic,<br />
              <span className="italic">Designer by heart.</span>
            </h2>
            <div className="w-12 h-0.5 bg-gold mb-8" />

            <div className="space-y-4 text-warm leading-relaxed font-body dark:text-cream/70">
              <p>
                I'm a dedicated Software Engineering student with a strong foundation in both{' '}
                <strong className="text-charcoal font-semibold dark:text-cream">programming and graphic design</strong>. Specialising in
                React with TypeScript, I build modern, performant web applications with a strong eye for detail.
              </p>
              <p>
                My design toolkit — Photoshop, Illustrator, Canva, Affinity — lets me bridge the gap between engineering
                and aesthetics, creating products that are as{' '}
                <strong className="text-charcoal font-semibold dark:text-cream">beautiful as they are functional</strong>.
              </p>
              <p>
                Based in Badulla, Sri Lanka, I'm passionate about leveraging technology to build innovative, user-centered
                solutions that make a real difference.
              </p>
            </div>

            <div className="mt-8">
              <p className="text-xs text-muted uppercase tracking-widest font-mono mb-3 dark:text-cream/50">Languages</p>
              <div className="flex gap-2 flex-wrap">
                {languages.map((l) => (
                  <span
                    key={l}
                    className="border border-border-warm text-warm text-sm px-4 py-1.5 rounded-full font-body dark:border-white/10 dark:text-cream/70"
                  >
                    {l}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Info card */}
          <div className="reveal" style={{ transitionDelay: '0.15s' }}>
            <div className="rounded-3xl border border-border-warm overflow-hidden bg-white/90 backdrop-blur-sm dark:border-white/10 dark:bg-charcoal-light/90">
              {/* Card header */}
              <div className="bg-charcoal px-6 py-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 border-amber-100 border flex items-center justify-center shrink-0">
                    <span className="font-display text-gold font-bold text-lg items-center">SH</span>
                  </div>
                  <div>
                    <p className="text-cream font-display text-lg font-semibold">Srishanker Heshavarshaan</p>
                    <p className="text-muted text-sm">Full-Stack Developer &amp; Designer</p>
                  </div>
                </div>
              </div>

              {/* Info rows */}
              <div className="bg-white/90 backdrop-blur-sm divide-y divide-border-warm dark:bg-charcoal-light/90 dark:divide-white/10">
                {info.map((item) => (
                  <div key={item.label} className="flex items-center gap-4 px-6 py-4 hover:bg-cream/50 transition-colors dark:hover:bg-white/5">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 border-amber-100 border flex items-center justify-center shrink-0">
                      <i className={`pi ${item.icon} text-gold text-sm`} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-muted uppercase tracking-wider font-mono dark:text-cream/50">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-charcoal text-sm font-medium hover:text-gold transition-colors truncate block dark:text-cream"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-charcoal text-sm font-medium dark:text-cream">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
