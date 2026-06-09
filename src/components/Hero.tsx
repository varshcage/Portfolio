export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-24 pb-16 px-6 relative overflow-hidden bg-cream dark:bg-[#111112]"
    >
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
                  d: path("M 0,600 L 0,112 C 77.15789473684208,124.11483253588517 154.31578947368416,136.22966507177034 260,127 C 365.68421052631584,117.77033492822966 499.8947368421053,87.19617224880382 605,76 C 710.1052631578947,64.80382775119618 786.1052631578947,72.98564593301437 874,82 C 961.8947368421053,91.01435406698563 1061.6842105263158,100.86124401913875 1158,106 C 1254.3157894736842,111.13875598086125 1347.157894736842,111.56937799043062 1440,112 L 1440,600 L 0,600 Z");
                }
                25%{
                  d: path("M 0,600 L 0,112 C 109.67464114832532,127.64593301435407 219.34928229665064,143.29186602870814 310,149 C 400.65071770334936,154.70813397129186 472.27751196172255,150.47846889952154 557,144 C 641.7224880382774,137.52153110047846 739.5406698564594,128.79425837320574 840,131 C 940.4593301435406,133.20574162679426 1043.5598086124403,146.3444976076555 1144,145 C 1244.4401913875597,143.6555023923445 1342.22009569378,127.82775119617224 1440,112 L 1440,600 L 0,600 Z");
                }
                50%{
                  d: path("M 0,600 L 0,112 C 107.89473684210526,103.88516746411483 215.78947368421052,95.77033492822966 300,105 C 384.2105263157895,114.22966507177034 444.7368421052631,140.80382775119617 539,147 C 633.2631578947369,153.19617224880383 761.2631578947369,139.01435406698567 864,117 C 966.7368421052631,94.98564593301434 1044.2105263157896,65.13875598086125 1136,63 C 1227.7894736842104,60.86124401913876 1333.8947368421052,86.43062200956938 1440,112 L 1440,600 L 0,600 Z");
                }
                75%{
                  d: path("M 0,600 L 0,112 C 98.14354066985646,130.1818181818182 196.28708133971293,148.36363636363635 305,139 C 413.7129186602871,129.63636363636365 532.9952153110047,92.72727272727273 619,102 C 705.0047846889953,111.27272727272727 757.732057416268,166.72727272727272 835,164 C 912.267942583732,161.27272727272728 1014.0765550239234,100.36363636363637 1119,82 C 1223.9234449760766,63.636363636363626 1331.9617224880383,87.81818181818181 1440,112 L 1440,600 L 0,600 Z");
                }
                100%{
                  d: path("M 0,600 L 0,112 C 77.15789473684208,124.11483253588517 154.31578947368416,136.22966507177034 260,127 C 365.68421052631584,117.77033492822966 499.8947368421053,87.19617224880382 605,76 C 710.1052631578947,64.80382775119618 786.1052631578947,72.98564593301437 874,82 C 961.8947368421053,91.01435406698563 1061.6842105263158,100.86124401913875 1158,106 C 1254.3157894736842,111.13875598086125 1347.157894736842,111.56937799043062 1440,112 L 1440,600 L 0,600 Z");
                }
              }
              .path-1{
                animation:pathAnim-1 4s;
                animation-timing-function: linear;
                animation-iteration-count: infinite;
              }
              @keyframes pathAnim-1{
                0%{
                  d: path("M 0,600 L 0,262 C 93.59808612440187,244.60287081339715 187.19617224880375,227.20574162679426 283,234 C 378.80382775119625,240.79425837320574 476.8133971291867,271.77990430622003 572,275 C 667.1866028708133,278.22009569377997 759.5502392344498,253.67464114832535 856,262 C 952.4497607655502,270.32535885167465 1052.9856459330144,311.5215311004785 1151,317 C 1249.0143540669856,322.4784688995215 1344.5071770334928,292.2392344497607 1440,262 L 1440,600 L 0,600 Z");
                }
                25%{
                  d: path("M 0,600 L 0,262 C 80.74641148325358,254.06698564593302 161.49282296650716,246.133971291866 250,242 C 338.50717703349284,237.866028708134 434.77511961722496,237.53110047846891 542,236 C 649.224880382775,234.46889952153109 767.4066985645933,231.7416267942584 871,240 C 974.5933014354067,248.2583732057416 1063.598086124402,267.5023923444976 1156,273 C 1248.401913875598,278.4976076555024 1344.200956937799,270.2488038277512 1440,262 L 1440,600 L 0,600 Z");
                }
                50%{
                  d: path("M 0,600 L 0,262 C 79.6267942583732,237.80861244019138 159.2535885167464,213.61722488038276 267,234 C 374.7464114832536,254.38277511924124 510.6124401913876,319.3397129186603 624,313 C 737.3875598086124,306.6602870813397 828.2966507177032,229.02392344497605 917,206 C 1005.7033492822968,182.97607655502395 1092.2009569377992,214.56459330143542 1179,233 C 1265.7990430622008,251.43540669856458 1352.8995215311004,256.71770334928226 1440,262 L 1440,600 L 0,600 Z");
                }
                75%{
                  d: path("M 0,600 L 0,262 C 102.91866028708134,244.76555023923447 205.83732057416267,227.53110047846891 293,224 C 380.1626794258373,220.46889952153109 451.56937799043067,230.6411483253588 532,250 C 612.4306220095693,269.3588516746412 701.8851674641148,297.9043062200957 820,302 C 938.1148325358852,306.0956937799043 1084.88995215311,285.74162679425837 1193,275 C 1301.11004784689,264.25837320574163 1370.5550239234449,263.12918660287085 1440,262 L 1440,600 L 0,600 Z");
                }
                100%{
                  d: path("M 0,600 L 0,262 C 93.59808612440187,244.60287081339715 187.19617224880375,227.20574162679426 283,234 C 378.80382775119625,240.79425837320574 476.8133971291867,271.77990430622003 572,275 C 667.1866028708133,278.22009569377997 759.5502392344498,253.67464114832535 856,262 C 952.4497607655502,270.32535885167465 1052.9856459330144,311.5215311004785 1151,317 C 1249.0143540669856,322.4784688995215 1344.5071770334928,292.2392344497607 1440,262 L 1440,600 L 0,600 Z");
                }
              }
              .path-2{
                animation:pathAnim-2 4s;
                animation-timing-function: linear;
                animation-iteration-count: infinite;
              }
              @keyframes pathAnim-2{
                0%{
                  d: path("M 0,600 L 0,412 C 84.68899521531102,390.1626794258373 169.37799043062205,368.32535885167465 268,359 C 366.62200956937795,349.67464114832535 479.17703349282294,352.8612440191388 572,376 C 664.8229665071771,399.1387559808612 737.9138755980863,442.2296650717703 824,455 C 910.0861244019137,467.7703349282297 1009.1674641148325,450.22009569377997 1114,438 C 1218.8325358851675,425.77990430622003 1329.4162679425838,418.88995215311 1440,412 L 1440,600 L 0,600 Z");
                }
                25%{
                  d: path("M 0,600 L 0,412 C 82.20095693779902,418.0287081339713 164.40191387559804,424.0574162679426 267,429 C 369.59808612440196,433.9425837320574 492.5933014354067,437.799043062201 602,431 C 711.4066985645933,424.200956937799 807.2248803827752,406.74641148325355 884,415 C 960.7751196172248,423.25358851674645 1018.5071770334928,457.21531100478467 1108,461 C 1197.4928229665072,464.78468899521533 1318.7464114832537,438.39234449760767 1440,412 L 1440,600 L 0,600 Z");
                }
                50%{
                  d: path("M 0,600 L 0,412 C 126.70813397129186,379.4736842105263 253.41626794258372,346.9473684210526 334,357 C 414.5837320574163,367.0526315789474 449.0430622009569,419.6842105263158 547,426 C 644.9569377990431,432.3157894736842 806.4114832535885,392.31578947368416 908,381 C 1009.5885167464115,369.68421052631584 1051.311004784689,387.0526315789474 1130,397 C 1208.688995215311,406.9473684210526 1324.3444976076555,409.4736842105263 1440,412 L 1440,600 L 0,600 Z");
                }
                75%{
                  d: path("M 0,600 L 0,412 C 96.34449760765551,392.4593301435407 192.68899521531102,372.9186602870813 302,366 C 411.311004784689,359.0813397129187 533.5885167464114,364.7846889952154 622,376 C 710.4114832535886,387.2153110047846 764.9569377990431,403.94258373205736 862,410 C 959.0430622009569,416.05741626794264 1098.5837320574162,411.44497607655506 1202,410 C 1305.4162679425838,408.55502392344494 1372.7081339712918,410.27751196172244 1440,412 L 1440,600 L 0,600 Z");
                }
                100%{
                  d: path("M 0,600 L 0,412 C 84.68899521531102,390.1626794258373 169.37799043062205,368.32535885167465 268,359 C 366.62200956937795,349.67464114832535 479.17703349282294,352.8612440191388 572,376 C 664.8229665071771,399.1387559808612 737.9138755980863,442.2296650717703 824,455 C 910.0861244019137,467.7703349282297 1009.1674641148325,450.22009569377997 1114,438 C 1218.8325358851675,425.77990430622003 1329.4162679425838,418.88995215311 1440,412 L 1440,600 L 0,600 Z");
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
          <path d="M 0,600 L 0,112 C 77.15789473684208,124.11483253588517 154.31578947368416,136.22966507177034 260,127 C 365.68421052631584,117.77033492822966 499.8947368421053,87.19617224880382 605,76 C 710.1052631578947,64.80382775119618 786.1052631578947,72.98564593301437 874,82 C 961.8947368421053,91.01435406698563 1061.6842105263158,100.86124401913875 1158,106 C 1254.3157894736842,111.13875598086125 1347.157894736842,111.56937799043062 1440,112 L 1440,600 L 0,600 Z" stroke="none" strokeWidth="0" fill="url(#gradient)" fillOpacity="0.4" className="transition-all duration-300 ease-in-out delay-150 path-0"></path>
          <path d="M 0,600 L 0,262 C 93.59808612440187,244.60287081339715 187.19617224880375,227.20574162679426 283,234 C 378.80382775119625,240.79425837320574 476.8133971291867,271.77990430622003 572,275 C 667.1866028708133,278.22009569377997 759.5502392344498,253.67464114832535 856,262 C 952.4497607655502,270.32535885167465 1052.9856459330144,311.5215311004785 1151,317 C 1249.0143540669856,322.4784688995215 1344.5071770334928,292.2392344497607 1440,262 L 1440,600 L 0,600 Z" stroke="none" strokeWidth="0" fill="url(#gradient)" fillOpacity="0.53" className="transition-all duration-300 ease-in-out delay-150 path-1"></path>
          <path d="M 0,600 L 0,412 C 84.68899521531102,390.1626794258373 169.37799043062205,368.32535885167465 268,359 C 366.62200956937795,349.67464114832535 479.17703349282294,352.8612440191388 572,376 C 664.8229665071771,399.1387559808612 737.9138755980863,442.2296650717703 824,455 C 910.0861244019137,467.7703349282297 1009.1674641148325,450.22009569377997 1114,438 C 1218.8325358851675,425.77990430622003 1329.4162679425838,418.88995215311 1440,412 L 1440,600 L 0,600 Z" stroke="none" strokeWidth="0" fill="url(#gradient)" fillOpacity="1" className="transition-all duration-300 ease-in-out delay-150 path-2"></path>
        </svg>
      </div>

      {/* Warm background blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-30 pointer-events-none z-0"
        style={{ background: 'radial-gradient(circle, #E8C96B22 0%, transparent 70%)', transform: 'translate(30%, -30%)' }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-20 pointer-events-none z-0"
        style={{ background: 'radial-gradient(circle, #C9A84C18 0%, transparent 70%)', transform: 'translate(-30%, 30%)' }} />

      {/* Subtle dot grid */}
      <div className="absolute inset-0 opacity-[0.035] pointer-events-none z-0"
        style={{
          backgroundImage: 'radial-gradient(circle, #6B5B47 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }} />

      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-25 items-center relative z-10">
        {/* Left */}
        <div className="animate-fade-up">
          <div className="flex items-center gap-3 mb-6">
            
            <span className="w-8 h-px bg-gold" />
            <span className="text-gold text-xs font-mono tracking-widest uppercase">Available for Work</span>
          </div>

          <h1 className="font-alexana text-5xl md:text-6xl lg:text-5xl font-bold text-charcoal leading-[1.05] mb-6 dark:text-cream">
            Srishanker<br />
            <span className="italic text-gold shiny-text">Heshavarshaan</span>
          </h1>

          <p className="text-warm text-lg leading-relaxed mb-8 max-w-md font-body dark:text-cream/70">
            Front-End Developer &amp; Graphic Designer crafting elegant digital experiences — from intuitive interfaces to robust backends.
          </p>

          <div className="flex flex-wrap gap-2 mb-10">
            {['React + TypeScript', 'Java', 'Graphic Design', 'UI/UX'].map((t) => (
              <span
                key={t}
                className="border border-border-warm text-warm text-xs px-3 py-1.5 rounded-full font-body dark:border-white/10 dark:text-cream/70"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="bg-charcoal text-cream px-7 py-3.5 rounded-full font-medium text-sm hover:bg-gold hover:text-charcoal transition-all duration-200 inline-flex items-center gap-2 dark:bg-cream dark:text-charcoal dark:hover:bg-gold"
            >
              View Projects <i className="pi pi-arrow-right text-xs" />
            </a>
            <a
              href="#contact"
              className="border border-charcoal text-charcoal px-7 py-3.5 rounded-full font-medium text-sm hover:border-gold hover:text-gold transition-all duration-200 dark:border-cream/40 dark:text-cream dark:hover:border-gold dark:hover:text-gold"
            >
              Let's Talk
            </a>
          </div>
        </div>

        {/* Right — Stats card */}
        <div className="animate-fade-up" style={{ animationDelay: '0.15s' }}>
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-border-warm relative dark:bg-charcoal-light dark:border-white/10">
            {/* Decorative top accent */}
            <div className="absolute top-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent rounded-full" />

            <div className="grid grid-cols-2 gap-6 mb-8">
              {[
                { num: '7+', label: 'Projects Built' },
                { num: '2+', label: 'Years Coding' },
                { num: '3', label: 'Languages Spoken' },
                { num: '1', label: 'Year Work Exp.' },
              ].map((s) => (
                <div key={s.label} className="text-center p-4 rounded-2xl bg-cream-dark dark:bg-white/5">
                  <div className="font-display text-3xl font-bold text-gold mb-1">{s.num}</div>
                  <div className="text-xs text-muted uppercase tracking-wider font-body dark:text-cream/50">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="border-t border-border-warm pt-6 dark:border-white/10">
              <p className="text-xs text-muted uppercase tracking-widest mb-3 font-mono dark:text-cream/50">Currently at</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 border-amber-100 border flex items-center justify-center shrink-0">
                  <i className="pi pi-briefcase text-gold text-sm" />
                </div>
                <div>
                  <p className="font-semibold text-charcoal text-sm dark:text-cream">INFODATA System</p>
                  <p className="text-xs text-muted">Frontend Dev &amp; Designer · March 2025–Present</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
