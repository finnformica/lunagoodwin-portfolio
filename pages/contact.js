import Script from "next/script";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";

const ContactPage = () => {
  return (
    <>
      <article className="grid md:grid-rows-[1fr_100px] grid-cols-[1fr] md:grid-cols-[2fr_1fr] grid-rows-[1fr_200px_0_100px] h-[54.45rem] w-full">
        <div className="border-r border-black/10 dark:border-white/10 border-b h-full">
          <canvas id="canvas" />
        </div>
        <div className="border-b border-black/10 dark:border-white/10 h-full md:relative flex items-center">
          <div
            className="md:absolute md:right-0 md:bottom-0 md:m-4 md:text-right md:initial
        text-center w-full"
          >
            <p>
              I'm interested in freelance opportunities - especially ambitious
              or large projects. However, if you have other request or question,
              don't hesitate to use the form.
            </p>
            <h3 className="text-2xl">Contact Me!</h3>
          </div>
        </div>
        <div className="flex items-center border-r border-black/10 dark:border-white/10 h-full"></div>
        <div className="h-full flex justify-around items-center px-4 py-8">
          <BsInstagram size={20} className="cursor-pointer" />
          <BsLinkedin size={20} className="cursor-pointer" />
          <MdOutlineMail size={27} className="cursor-pointer" />
        </div>
      </article>
      <Script src="js/flowfield.js" />
    </>
  );
};

export default ContactPage;
