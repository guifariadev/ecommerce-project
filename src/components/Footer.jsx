const Footer = () => {
  return (
    <footer className="text-black py-12 px-4 md:px-16 border-t border-zinc-400">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        {/* Help */}
        <div>
          <h3 className="uppercase font-bold mb-4 text-xs">Help</h3>
          <p className="mb-2">
            We are available to help with any questions  through <a href="#" className="underline">message</a> or <a href="mailto:email@domain.com" className="underline">email channels</a>.
          </p>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Frequently Asked Questions</a></li>
            <li><a href="#" className="hover:underline">Store</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="uppercase font-bold mb-4 text-xs">Navigation</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Collections</a></li>
            <li><a href="#" className="hover:underline">Best sellers</a></li>
          </ul>
        </div>

        {/* About Louis Vuitton */}
        <div>
          <h3 className="uppercase font-bold mb-4 text-xs">Socials</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Instagram</a></li>
            <li><a href="#" className="hover:underline">Facebook</a></li>
            <li><a href="#" className="hover:underline">X</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="uppercase font-bold mb-4 text-xs">Newsletter</h3>
          <p className="mb-4">
            Sign up to receive emails and get the latest news from the collections, new launches and everything in Essentia.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
