export default function Header() {
  return (
    <div className="flex flex-row justify-between items-center p-6">
      <h1 className="text-white font-bold">ZK</h1>
      <div className="flex flex-row justify-between gap-2">
        <a
          href="/contact"
          className="text-[13px] font-semibold py-2 px-5 border border-white/20 rounded-lg text-white no-underline transition-all duration-300 ease-in-out"
        >
          Contact
        </a>
        <a
          href="/contact"
          className="text-[13px] font-semibold py-2 px-5 bg-accent rounded-lg text-white no-underline transition-all duration-300 ease-in-out"
        >
          View Resume
        </a>
      </div>
    </div>
  );
}
