export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <span className="inline-flex items-center gap-3">
      <span className="grid size-11 shrink-0 place-items-center rounded-md bg-white text-[#073f73] shadow-sm ring-1 ring-white/30">
        <svg
          aria-hidden="true"
          viewBox="0 0 44 44"
          className="size-9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 24.5C9 15.7 14.5 9.7 22 6c7.5 3.7 13 9.7 13 18.5 0 7.7-5.4 13.5-13 13.5S9 32.2 9 24.5Z"
            fill="#dff3ff"
            stroke="#0b5ea8"
            strokeWidth="2"
          />
          <path
            d="M15 18h5v4h4v-4h5v14h-5v-5h-4v5h-5V18Z"
            fill="#073f73"
          />
          <path
            d="M28 8 20 22h6l-3 12 9-16h-6l2-10Z"
            fill="#37b7ff"
            stroke="#073f73"
            strokeLinejoin="round"
            strokeWidth="1.4"
          />
        </svg>
      </span>
      {!compact && (
        <span className="leading-tight">
          <span className="block text-base font-black text-white">
            GH Plumbing & Electrics
          </span>
          <span className="block text-xs font-bold text-sky-100">
            Great Help
          </span>
        </span>
      )}
    </span>
  );
}
