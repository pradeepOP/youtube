import {
  Navbar,
  TextInput,
  Tooltip,
  Dropdown,
  DropdownItem,
  Avatar,
} from "flowbite-react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { TbVideoPlus } from "react-icons/tb";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="p-1.5 py-2 md:p-4">
      <div className="flex flex-row items-center justify-between md:px-4">
        {/* left for hambuger and logo */}
        <div className="flex items-center gap-2 md:gap-5">
          {/* hamburger */}
          <div>
            <RxHamburgerMenu className="p-1.5 text-3xl md:text-4xl text-gray-700 rounded-full hover:bg-gray-100" />
          </div>
          {/* logo */}
          <Link to="/">
            <Tooltip
              content="YouTube Home"
              placement="bottom"
              arrow={false}
              className="text-xs tracking-wide  text-gray-800 bg-white border-[1px] rounded-none border-black dark:border-white dark:text-white dark:bg-gray-700 ">
              <div className="flex items-center gap-0.5">
                <FaYoutube className="text-2xl text-red-500 md:text-3xl" />
                <span className="text-lg font-bold leading-9 tracking-tighter text-gray-700 md:text-xl">
                  YouTube
                </span>
              </div>
            </Tooltip>
          </Link>
        </div>
        {/* search */}
        <div className="w-1/3">
          <form>
            <TextInput
              type="text"
              placeholder="Search..."
              rightIcon={AiOutlineSearch}
            />
          </form>
        </div>
        <div className="flex items-center gap-5">
          {/* create and profile button */}
          <Tooltip
            content="Create"
            placement="bottom"
            arrow={false}
            className="text-xs tracking-wide  text-gray-800 bg-white border-[1px] rounded-none border-black dark:border-white dark:text-white dark:bg-gray-700 ">
            <TbVideoPlus className="hidden text-4xl font-thin text-gray-600 md:inline " />
          </Tooltip>

          {/* avatar */}
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="user"
                img="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                rounded
                className="object-cover"
              />
            }>
            <Dropdown.Header>
              <span className="block text-sm">@ Pradeep</span>
              <span className="block text-sm font-medium truncate">
                pradeepkazi38@gmail.com
              </span>
            </Dropdown.Header>
            <Link to="/">
              <DropdownItem>Profile</DropdownItem>
            </Link>
            <Dropdown.Divider />
            <DropdownItem>Log out</DropdownItem>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};
export default Header;
