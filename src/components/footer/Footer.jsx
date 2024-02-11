function Footer() {
  return (
    <footer>
      <section className=" bg-gray-300 opacity-90 py-8 rounded-tl-[3rem] rounded-tr-[3rem] shadow-lg">
        <div className="text-xl text-center text-blueGray-500 font-semibold py-1">
          Copyright©
          <span id="get-current-year">{new Date().getFullYear()}</span>
          <a
            href=""
            className="text-blueGray-500 hover:text-gray-800"
            target="_blank"
          >
            {" "}
            UList by
          </a>
          <a href="" className="text-blueGray-500 hover:text-blueGray-800">
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
