function Footer() {
  return (
    <footer>
      <section className=" bg-gray-300 opacity-90 py-8 rounded-tl-[3rem] rounded-tr-[3rem] shadow-lg">
        <div className="text-md md:text-xl text-center text-blueGray-500 font-semibold py-1">
          Copyright©
          <span id="get-current-year">{new Date().getFullYear()}</span>
          <span className="text-blueGray-500"> UList by</span>
          <a
            href="https://github.com/pintodas16?tab=repositories"
            className="text-blueGray-500 hover:text-blueGray-800 hover:border-b-2 border-b-sky-600 hover:hover:text-gray-800 hover:p-b-1"
            target="_blank"
          >
            {" "}
            Pinto Das
          </a>
          .
        </div>
      </section>
    </footer>
  );
}
export default Footer;
