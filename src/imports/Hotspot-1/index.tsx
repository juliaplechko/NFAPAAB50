import imgVerant1 from "./fb2ece5c3a1d853e537bdd5f6687e579ef13a56e.png";

export default function Hotspot() {
  return (
    <div className="relative rounded-[500px] size-full" data-name="Hotspot">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="-translate-x-1/2 absolute aspect-[3000/3000] bottom-[-13.51%] left-1/2 top-[-13.51%]" data-name="verant 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgVerant1} />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#ffc300] border-solid inset-[-0.5px] pointer-events-none rounded-[500.5px] shadow-[0px_0px_36px_0px_rgba(255,255,255,0.5),0px_0px_16px_0px_#ffc300]" />
    </div>
  );
}