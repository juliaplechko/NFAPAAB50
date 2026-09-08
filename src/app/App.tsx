import { useState } from "react";
import Lockup from "@/imports/Lockup/index";
import svgPaths from "@/imports/Prototype/svg-yhtj6dad64";
import imgIPhone1617ProMax2 from "@/imports/iStock-2188925842.png";
import imgPabtoroa2Mono1 from "@/imports/Prototype/a18cc3674ff0352a5c05e51f6ff913737b73c12c.png";
import imgFleximab2Mono1 from "@/imports/Prototype/f0063fc8baff80e73a1ecdc03a5c85485bd39af4.png";
import imgVerantMono1 from "@/imports/Prototype/e3da7b4b922e70b1db354192dee0b3c0390a5700.png";
import img06LogoTube2 from "@/imports/Prototype/98e5ad6c8be153f71bd9921714d0bae496630cad.png";
import { imgVector } from "@/imports/Prototype/svg-sdhq6";
import imgPabtroaSelected from "@/imports/Hotspot/eebf6ae1d9795daa5a577082ca74d41072337a20.png";
import imgFleximabSelected from "@/imports/Hotspot-2/a59fc3e24c4f54ec4ee2a1213b55eb90eec5ca98.png";
import imgVerantSelected from "@/imports/Hotspot-1/fb2ece5c3a1d853e537bdd5f6687e579ef13a56e.png";

type Brand = "pabtoroa" | "fleximab" | "verant" | null;

const FEEDBACK: Record<NonNullable<Brand>, { headline: string; body: string; correct: boolean }> = {
  pabtoroa: {
    headline: "POINT NOT FULLY ADDRESSED",
    body: "InspirAction is not the Patient Support Program for PABTORA.\nFinal ruling awaits resolution of the above.",
    correct: false,
  },
  fleximab: {
    headline: "WE ARE UNABLE TO LOCATE SUPPORT.",
    body: "InspirAction is not the Patient Support Program for FLEXIMAB.\nPlease direct your eyes to the other PAAB fictional brands.",
    correct: false,
  },
  verant: {
    headline: "YOUR ANSWER HAS BEEN REVIEWED AND ACCEPTED.",
    body: "Correct! InspirAction is the Patient Support Program for VERANT.",
    correct: true,
  },
};

function PaabLogoSvg() {
  return (
    <div className="aspect-[181/66.18000030517578] h-full overflow-clip relative shrink-0">
      <div className="absolute contents inset-[0.76%_0.28%]">
        <div className="absolute inset-[0.76%_0.28%]">
          <div className="absolute inset-[-0.14%_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 82.6208 29.9725">
              <path d={svgPaths.p3ccc7700} fill="var(--fill-0, white)" stroke="var(--stroke-0, #231F20)" strokeMiterlimit="10" strokeWidth="0.0830428" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[20.28%_49.09%_66.82%_48.48%]"><svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.0177 3.91618"><path d={svgPaths.p25239c80} fill="#231F20" /></svg></div>
        <div className="absolute inset-[20.28%_45.69%_66.82%_52.3%]"><svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.67377 3.91618"><path d={svgPaths.p220c0380} fill="#231F20" /></svg></div>
        <div className="absolute inset-[20.26%_41.96%_66.83%_55.52%]"><svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.09566 3.91618"><path d={svgPaths.p19edc700} fill="#231F20" /></svg></div>
        <div className="absolute inset-[20.28%_39.87%_66.82%_59.46%]"><svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.559451 3.91618"><path d={svgPaths.p3b181000} fill="#231F20" /></svg></div>
        <div className="absolute inset-[20.28%_36.19%_66.82%_61.79%]"><svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.67378 3.91618"><path d={svgPaths.p2a72a200} fill="#231F20" /></svg></div>
        <div className="absolute inset-[20.26%_31.25%_66.83%_65.03%]"><svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.09075 3.91618"><path d={svgPaths.p2e9b800} fill="#231F20" /></svg></div>
        <div className="absolute inset-[20.28%_27.82%_66.82%_70.16%]"><svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.67378 3.91618"><path d={svgPaths.p2a72a200} fill="#231F20" /></svg></div>
        <div className="absolute inset-[20.28%_24.2%_66.8%_73.61%]"><svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.81593 3.92076"><path d={svgPaths.p3fb2f800} fill="#231F20" /></svg></div>
        <div className="absolute inset-[20.28%_18.15%_66.8%_79.65%]"><svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.82052 3.92076"><path d={svgPaths.p36ce36f0} fill="#231F20" /></svg></div>
        <div className="absolute inset-[20.28%_14.29%_66.82%_83.18%]"><svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.10024 3.91618"><path d={svgPaths.p15213c80} fill="#231F20" /></svg></div>
        <div className="absolute inset-[16.58%_54.44%_33.66%_21.75%]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.759 15.0996">
            <path d={svgPaths.p16f60780} fill="url(#pl1)" />
            <defs><linearGradient gradientUnits="userSpaceOnUse" id="pl1" x1="2.00853" x2="15.9995" y1="15.7217" y2="2.72588"><stop stopColor="#58595B" /><stop offset="1" stopColor="#BCBEC0" /></linearGradient></defs>
          </svg>
        </div>
        <div className="absolute inset-[60.5%_68.4%_32.35%_21.75%] mix-blend-multiply">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.17169 2.17057">
            <g style={{ mixBlendMode: "multiply" }}><path d={svgPaths.p140f8500} fill="#CFCFCE" /></g>
          </svg>
        </div>
        <div className="absolute inset-[47.88%_68.4%_13.65%_9.63%]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.2351 11.6747">
            <path d={svgPaths.p1d03b280} fill="url(#pl2)" />
            <defs><linearGradient gradientUnits="userSpaceOnUse" id="pl2" x1="-0.00216325" x2="18.2351" y1="5.83513" y2="5.83513"><stop stopColor="#58595B" /><stop offset="1" stopColor="#BCBEC0" /></linearGradient></defs>
          </svg>
        </div>
        {/* Mask group */}
        <div className="absolute inset-[60.49%_68.4%_33.5%_21.75%] mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-position-[0.017px_0.017px] mask-size-[29.823px_6.627px]" style={{ maskImage: `url("${imgVector}")` }}>
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.17628 1.82396">
            <path d={svgPaths.p14328400} fill="url(#pr1)" />
            <defs><radialGradient cx="0" cy="0" gradientTransform="translate(3.97579 1.77466) scale(4.72326 4.72326)" gradientUnits="userSpaceOnUse" id="pr1" r="1"><stop stopColor="white" /><stop offset="1" stopColor="white" /></radialGradient></defs>
          </svg>
        </div>
        <div className="absolute inset-[40.62%_53.59%_19.45%_36.12%]"><svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.54313 12.12"><path d={svgPaths.p470ee00} fill="#231F20" /></svg></div>
        <div className="absolute inset-[40.62%_40.76%_19.45%_44.35%]"><svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.3584 12.12"><path d={svgPaths.p2c7b4400} fill="#231F20" /></svg></div>
        <div className="absolute inset-[40.62%_25.25%_19.45%_59.86%]"><svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.3584 12.12"><path d={svgPaths.p33a8ee00} fill="#231F20" /></svg></div>
        <div className="absolute inset-[40.6%_13.13%_19.46%_76.08%]"><svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.95584 12.12"><path d={svgPaths.p3d5c100} fill="#231F20" /></svg></div>
        <div className="absolute inset-[17.23%_75.84%_62.65%_21.77%]"><svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.9856 6.10813"><path clipRule="evenodd" d={svgPaths.p1de04700} fill="#939598" fillRule="evenodd" /></svg></div>
        <div className="absolute inset-[17.23%_78.23%_62.65%_19.38%]"><svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.98102 6.10813"><path clipRule="evenodd" d={svgPaths.p6023200} fill="#58595B" fillRule="evenodd" /></svg></div>
        <div className="absolute inset-[27.52%_75.01%_53.7%_15.65%]"><svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.74981 5.70001"><path clipRule="evenodd" d={svgPaths.p289b1d00} fill="#58595B" fillRule="evenodd" /></svg></div>
        <div className="absolute inset-[27.52%_72.12%_53.7%_18.54%]"><svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.74981 5.70001"><path clipRule="evenodd" d={svgPaths.p14bc2000} fill="#939598" fillRule="evenodd" /></svg></div>
        <div className="absolute inset-[36.43%_78.23%_53.7%_18.54%]"><svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.67804 2.99445"><path clipRule="evenodd" d={svgPaths.pb8d1380} fill="#231F20" fillRule="evenodd" /></svg></div>
        <div className="absolute inset-[29.93%_76.33%_62.65%_21.77%]"><svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.58206 2.25157"><path clipRule="evenodd" d={svgPaths.p27ded80} fill="#231F20" fillRule="evenodd" /></svg></div>
        <div className="absolute inset-[29.93%_78.23%_62.65%_19.86%]"><svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.58665 2.25157"><path clipRule="evenodd" d={svgPaths.p154af300} fill="#231F20" fillRule="evenodd" /></svg></div>
        <div className="absolute inset-[45.86%_77.86%_48.55%_21.36%]"><svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.646582 1.6967"><path d={svgPaths.p1d0bda80} fill="#939598" /></svg></div>
      </div>
    </div>
  );
}

function CircleInner({ brand, selected }: { brand: NonNullable<Brand>; selected: boolean }) {
  if (brand === "pabtoroa") {
    if (selected) {
      return (
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[184px] top-1/2">
          <img alt="Pabtoroa" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPabtroaSelected} />
        </div>
      );
    }
    return (
      <div className="absolute left-[-366px] size-[868px] top-[-240px]">
        <img alt="Pabtoroa" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPabtoroa2Mono1} />
      </div>
    );
  }

  if (brand === "fleximab") {
    if (selected) {
      return (
        <div className="-translate-x-1/2 absolute aspect-[4096/4096] bottom-0 left-1/2 top-0">
          <img alt="Fleximab" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFleximabSelected} />
        </div>
      );
    }
    return (
      <div className="-translate-y-1/2 absolute aspect-[1920/1920] left-[-95.97%] right-[-116.94%] top-[calc(50%-99px)]">
        <img alt="Fleximab" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFleximab2Mono1} />
      </div>
    );
  }

  // verant
  if (selected) {
    return (
      <div className="-translate-x-1/2 absolute aspect-[3000/3000] bottom-[-13.51%] left-1/2 top-[-13.51%]">
        <img alt="Verant" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgVerantSelected} />
      </div>
    );
  }
  return (
    <div className="-translate-x-1/2 absolute aspect-[3000/3000] bottom-[-41.94%] left-[calc(50%+9px)] top-[-206.45%]">
      <img alt="Verant" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgVerantMono1} />
    </div>
  );
}

function HotspotCircle({
  brand,
  selected,
  dimmed,
  onClick,
}: {
  brand: NonNullable<Brand>;
  selected: boolean;
  dimmed: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`cursor-pointer relative rounded-[500px] shrink-0 size-[124px] transition-all duration-300 ${dimmed ? "opacity-30" : "opacity-100"}`}
    >
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <CircleInner brand={brand} selected={selected} />
      </div>
      <div
        aria-hidden
        className={`absolute border border-[#ffc300] border-solid inset-[-0.5px] pointer-events-none rounded-[500.5px] transition-all duration-300 ${
          selected
            ? "shadow-[0px_0px_36px_0px_rgba(255,255,255,0.5),0px_0px_16px_0px_yellow]"
            : "shadow-[0px_0px_16px_0px_yellow]"
        }`}
      />
    </button>
  );
}

export default function App() {
  const [selected, setSelected] = useState<Brand>(null);

  const handleCircle = (brand: NonNullable<Brand>) => {
    setSelected((prev) => (prev === brand ? null : brand));
  };

  const fb = selected ? FEEDBACK[selected] : null;

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="content-stretch flex flex-col h-[956px] items-center overflow-clip relative shrink-0 w-[440px]">

        {/* Background */}
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-gradient-to-b from-[#ecc063] from-[15%] inset-0 to-[#010101] via-[#4b3419] via-[65%]" />
          <img alt="" className="absolute max-w-none object-contain size-full" src={imgIPhone1617ProMax2} />
        </div>

        {/* Header — fixed height so circles never shift */}
        <div className="relative shrink-0 w-full h-[280px] overflow-visible">
          {/* Logo lockup — pinned to top */}
          <div className="absolute top-[60px] left-0 right-0 flex justify-center px-[36px]">
            <Lockup />
          </div>

          {/* Copy — sits below the pinned logo, swaps between question and feedback */}
          <div className={`absolute left-0 right-0 px-[36px] ${fb ? "top-[124px]" : "top-[144px]"}`}>
            {!fb ? (
              <div className="[word-break:break-word] flex flex-col gap-[8px] items-start text-[#010101] text-center w-full">
                <p className="font-['Unbounded:Bold',sans-serif] font-bold leading-none text-[20px] tracking-[-0.4px] uppercase w-full">
                  Think you know PAAB?
                </p>
                <p className="font-['Unbounded:Regular',sans-serif] font-normal leading-[0] not-italic text-[0px] w-full whitespace-pre-wrap">
                  <span className="font-['Inter:Regular',sans-serif] leading-[1.35] text-[11px]">
                    {"PAAB often uses fictional healthcare brands in its training materials. "}
                  </span>
                  <span className="font-['Inter:Bold',sans-serif] font-bold leading-[1.35] text-[11px]">
                    {"InspirAction is a Patient Support Program for "}
                    <br aria-hidden />
                    which fictional PAAB brand?
                  </span>
                </p>
              </div>
            ) : (
              <div className="[word-break:break-word] flex flex-col gap-[8px] items-center text-center w-full">
                <p className="font-['Unbounded:Bold',sans-serif] font-bold leading-tight text-[18px] tracking-[-0.3px] uppercase w-full text-[#010101] [text-wrap:pretty]">
                  {fb.headline}
                </p>
                <p className="font-['Inter:Regular',sans-serif] leading-[1.35] text-[11px] text-[#010101] w-full whitespace-pre-line">
                  {fb.body}
                </p>
                {!fb.correct && (
                  <button
                    onClick={() => setSelected(null)}
                    className="font-['Unbounded:Bold',sans-serif] font-bold text-[10px] tracking-[0.5px] uppercase text-[#010101] underline underline-offset-2 mt-[4px] cursor-pointer"
                  >
                    ← Try Again
                  </button>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Hotspots */}
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
          {/* M — top right */}
          <div className="h-[126px] relative shrink-0 w-full flex flex-row items-center justify-end">
            <div className="flex items-center justify-end px-[36px] size-full">
              <HotspotCircle
                brand="pabtoroa"
                selected={selected === "pabtoroa"}
                dimmed={selected !== null && selected !== "pabtoroa"}
                onClick={() => handleCircle("pabtoroa")}
              />
            </div>
          </div>
          {/* L — middle left */}
          <div className="h-[144px] relative shrink-0 w-full flex flex-row items-center">
            <div className="flex items-center px-[24px] size-full">
              <HotspotCircle
                brand="fleximab"
                selected={selected === "fleximab"}
                dimmed={selected !== null && selected !== "fleximab"}
                onClick={() => handleCircle("fleximab")}
              />
            </div>
          </div>
          {/* S — bottom right */}
          <div className="h-[99px] relative shrink-0 w-full flex flex-row items-center justify-end">
            <div className="flex items-center justify-end px-[48px] size-full">
              <HotspotCircle
                brand="verant"
                selected={selected === "verant"}
                dimmed={selected !== null && selected !== "verant"}
                onClick={() => handleCircle("verant")}
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="content-stretch flex flex-col isolate items-center justify-end relative shrink-0 w-[440px]">
          <div className="aspect-[1956/919] mb-[-48px] relative shrink-0 w-full z-[3]">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img06LogoTube2} />
          </div>
          <div className="relative shrink-0 w-full z-[2]">
            <div className="[word-break:break-word] content-stretch flex flex-col font-['Unbounded:Bold',sans-serif] font-bold gap-[8px] items-center pb-[48px] pt-[52px] px-[36px] text-center">
              <p className="leading-[normal] text-[#edc164] text-[14px] w-full">2013</p>
              <p className="leading-none text-[20px] text-white tracking-[-0.4px] uppercase w-full">Patients Become Partners</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
