import imgIPhone17MistBluePortrait from "@/app/assets/170813849b0ec03e90711c968791a17ab6e046ba.png";
import imgRectangle40299 from "@/app/assets/439e715248d6c072b4e144bf39049ca171d38fe2.png";
import imgMap from "@/app/assets/b52da504e3dd7ad970fbf0ea033d68b27a873f5c.png";
import imgAvatarOne from "@/app/assets/575c0b4ac0d9b4eb3b3e041d70a2c5199c21892b.png";
import imgAvatarTwo from "@/app/assets/e563ddd21b7959bee73919490744ca4ccf7acd81.png";
import imgAvatarThree from "@/app/assets/e549f871434f43dafe28369ca55e02fbc630195e.png";

export function PhoneMockup() {
  return (
    <div className="relative mx-auto aspect-[1350/2760] w-[min(90vw,390px)] drop-shadow-[0_40px_110px_rgba(246,112,17,0.24)]">
      <div className="absolute inset-x-[10.4%] bottom-[5.8%] top-[4.8%] overflow-hidden rounded-[2.8rem] bg-[#17171b]">
        <div className="relative h-full w-full overflow-hidden rounded-[2.8rem] bg-[#17171b]">
          <div className="absolute inset-x-0 top-0 z-20 bg-gradient-to-b from-black/78 via-black/34 to-transparent px-6 pb-6 pt-3">
            <div className="flex items-center justify-between text-white">
              <span className="text-sm font-semibold tracking-[-0.03em]">9:41</span>
              <div className="h-[1.9rem] w-[6.35rem] rounded-full bg-black/95" />
              <div className="flex items-center gap-1.5">
                <div className="flex items-end gap-[2px]">
                  <span className="h-2.5 w-[3px] rounded-full bg-white/95" />
                  <span className="h-3 w-[3px] rounded-full bg-white/95" />
                  <span className="h-3.5 w-[3px] rounded-full bg-white/95" />
                  <span className="h-4 w-[3px] rounded-full bg-white/95" />
                </div>
                <svg viewBox="0 0 16 12" className="h-3 w-4 fill-white/95" aria-hidden="true">
                  <path d="M8 11.6C5.36 11.6 2.7 10.06 0 5.8C2.7 1.54 5.36 0 8 0C10.64 0 13.3 1.54 16 5.8C13.3 10.06 10.64 11.6 8 11.6ZM8 8.85C9.69 8.85 11.06 7.49 11.06 5.8C11.06 4.11 9.69 2.75 8 2.75C6.31 2.75 4.94 4.11 4.94 5.8C4.94 7.49 6.31 8.85 8 8.85Z" />
                </svg>
                <div className="relative h-[13px] w-[23px] rounded-[4px] border border-white/80">
                  <div className="absolute inset-y-[2px] left-[2px] right-[4px] rounded-[2px] bg-white/95" />
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-[34%]">
            <img src={imgRectangle40299} alt="Building" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#17171b] via-[#17171b]/18 to-transparent" />
          </div>

          <div className="relative z-10 -mt-7 flex h-[calc(66%+1.75rem)] flex-col gap-4 px-5 pb-6">
            <div className="space-y-3">
              <h3 className="text-[1.02rem] font-bold leading-tight tracking-[-0.03em] text-white sm:text-[1.18rem]">
                Aventura ParkSquare
              </h3>
              <div className="flex items-center justify-between gap-2">
                <div className="flex min-w-0 items-center gap-2">
                  <span className="truncate text-[0.73rem] text-white sm:text-[0.82rem]">Aventura, FL</span>
                  <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-[#00b676]/35 bg-[#00b676]/10 px-2.5 py-1 text-[0.62rem] font-medium text-[#00d17d]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#00d17d]" />
                    Active
                  </span>
                </div>
                <span className="shrink-0 text-[0.72rem] font-medium text-[#ff7a00] underline underline-offset-2">
                  12 mins drive
                </span>
              </div>
              <p className="text-[0.74rem] text-white/80 sm:text-[0.8rem]">Assigned Area: Level 2 · North Elevation</p>
            </div>

            <div className="rounded-[1.15rem] bg-[#2a2a2b] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
              <div className="mb-3 flex items-center justify-between">
                <h4 className="text-[0.92rem] font-bold text-white sm:text-[1rem]">Today at Site</h4>
                <span className="text-[0.75rem] font-medium text-[#ff7a00] underline underline-offset-2">Start Timer</span>
              </div>
              <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                <div>
                  <div className="text-[0.7rem] text-white/42">Assigned Area:</div>
                  <div className="mt-1 text-[0.8rem] text-white sm:text-[0.86rem]">Level 2 · North Elevation</div>
                </div>
                <div>
                  <div className="text-[0.7rem] text-white/42">Assigned Task:</div>
                  <div className="mt-1 text-[0.8rem] text-white sm:text-[0.86rem]">Architectural Facade</div>
                </div>
                <div>
                  <div className="text-[0.7rem] text-white/42">Priority:</div>
                  <div className="mt-1 text-[0.8rem] text-white sm:text-[0.86rem]">Medium</div>
                </div>
                <div>
                  <div className="text-[0.7rem] text-white/42">Estimated Time:</div>
                  <div className="mt-1 text-[0.8rem] text-white sm:text-[0.86rem]">Nov 6, 2025</div>
                </div>
                <div>
                  <div className="text-[0.7rem] text-white/42">Condition:</div>
                  <div className="mt-1 text-[0.8rem] text-white sm:text-[0.86rem]">Partly Cloudy ⛅</div>
                </div>
                <div>
                  <div className="text-[0.7rem] text-white/42">Temperature:</div>
                  <div className="mt-1 text-[0.8rem] text-white sm:text-[0.86rem]">16°F</div>
                </div>
              </div>
              <p className="mt-3 text-[0.75rem] text-white/45 sm:text-[0.8rem]">
                Conditions for facade installation until 3 PM.
              </p>
            </div>

            <div className="rounded-[1.15rem] bg-[#2a2a2b] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
              <div className="mb-3 flex items-center justify-between">
                <h4 className="text-[0.92rem] font-bold text-white sm:text-[1rem]">Site Location</h4>
                <span className="text-[0.75rem] font-medium text-[#ff7a00] underline underline-offset-2">View Plan</span>
              </div>
              <div className="relative h-[8.6rem] overflow-hidden rounded-[0.8rem] sm:h-[9.5rem]">
                <img src={imgMap} alt="Map" className="h-full w-full object-cover" />
                <img
                  src={imgAvatarOne}
                  alt=""
                  className="absolute left-[43%] top-[46%] h-[1.4rem] w-[1.4rem] rounded-full border border-[#fbc6a0]"
                />
                <img
                  src={imgAvatarTwo}
                  alt=""
                  className="absolute left-[70%] top-[60%] h-[1.4rem] w-[1.4rem] rounded-full border border-[#a1eab6]"
                />
                <img
                  src={imgAvatarThree}
                  alt=""
                  className="absolute left-[18%] top-[24%] h-[1.4rem] w-[1.4rem] rounded-full border border-[#a2d2ff]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <img
        src={imgIPhone17MistBluePortrait}
        alt="iPhone mockup"
        className="absolute inset-0 z-20 h-full w-full object-contain pointer-events-none"
      />
    </div>
  );
}
