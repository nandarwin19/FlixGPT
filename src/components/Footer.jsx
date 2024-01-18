import React from "react";

const Footer = () => {
  return (
    <footer className="text-center pt-12 pb-8 text-gray-800">
      <p>&copy; 2024 MovieWeb. All rights reserved.</p>
      <p className="text-sm">
        Created by
        <span className="mx-2 text-md">
          <a
            href="https://github.com/nandarwin19"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline"
          >
            nwin
          </a>
        </span>
      </p>
    </footer>
  );
};

export default Footer;
