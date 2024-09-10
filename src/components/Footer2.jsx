import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

const Footer2 = () => {
  return (
    <Footer container={true} className="bg-gray-100 dark:bg-gray-900">
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          {/* Logo Section */}
          <div>
            <Footer.Brand
              href="https://flowbite.com"
              src="https://flowbite.com/docs/images/logo.svg"
              alt="Flowbite Logo"
              name="Flowbite"
            />
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            {/* About Section */}
            <div>
              <Footer.Title title="About" className="text-gray-900 dark:text-gray-100" />
              <Footer.LinkGroup col={true}>
                <Footer.Link href="#" className="hover:text-gray-700 dark:hover:text-gray-400">Flowbite</Footer.Link>
                <Footer.Link href="#" className="hover:text-gray-700 dark:hover:text-gray-400">Tailwind CSS</Footer.Link>
              </Footer.LinkGroup>
            </div>

            {/* Follow Us Section */}
            <div>
              <Footer.Title title="Follow us" className="text-gray-900 dark:text-gray-100" />
              <Footer.LinkGroup col={true}>
                <Footer.Link href="#" className="hover:text-gray-700 dark:hover:text-gray-400">Github</Footer.Link>
                <Footer.Link href="#" className="hover:text-gray-700 dark:hover:text-gray-400">Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>

            {/* Legal Section */}
            <div>
              <Footer.Title title="Legal" className="text-gray-900 dark:text-gray-100" />
              <Footer.LinkGroup col={true}>
                <Footer.Link href="#" className="hover:text-gray-700 dark:hover:text-gray-400">Privacy Policy</Footer.Link>
                <Footer.Link href="#" className="hover:text-gray-700 dark:hover:text-gray-400">Terms & Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>

        {/* Divider and Social Media Icons */}
        <Footer.Divider className="dark:border-gray-700" />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="Flowbite™"
            year={2022}
            className="text-gray-900 dark:text-gray-100"
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} className="text-gray-900 dark:text-gray-100" />
            <Footer.Icon href="#" icon={BsInstagram} className="text-gray-900 dark:text-gray-100" />
            <Footer.Icon href="#" icon={BsTwitter} className="text-gray-900 dark:text-gray-100" />
            <Footer.Icon href="#" icon={BsGithub} className="text-gray-900 dark:text-gray-100" />
            <Footer.Icon href="#" icon={BsDribbble} className="text-gray-900 dark:text-gray-100" />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default Footer2;
