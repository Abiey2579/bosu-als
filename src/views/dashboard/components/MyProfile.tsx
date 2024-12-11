import { Avatar, Badge, Button } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import MKBHD from "../../../assets/images/mkbhd-lg.jpg";
import { CameraIcon, PencilSquareIcon } from "@heroicons/react/24/outline";

const MyProfile = () => {
  return (
    <div className="p-6 space-y-12">
      <h1 className="font-semibold text-2xl font-league-spartan">My Profile</h1>

      {/*  */}
      <div className="grid grid-cols-2 gap-8 items-center border-b-2 pb-4">
        <div className="w-fit flex items-center gap-8">
          <div className="space-y-2">
            <div className="relative rounded-full group cursor-pointer overflow-hidden">
              <Avatar size="xl" rounded img={MKBHD} alt="MKBHD" className="" />
              <div className="w-36 h-36 bg-slate-800/50 absolute top-0 left-0 pt-14 pl-14 hidden group-hover:block rounded-full">
                <CameraIcon className="w-8  text-peace" />
              </div>
            </div>
            <Badge
              color="dark"
              className="w-fit mx-auto text-success bg-dominance text-sm"
            >
              Teacher
            </Badge>
          </div>
          <div className="">
            <h4 className="text-4xl font-semibold mb-2">Marques Brownlee</h4>
            <p className="text-base text-gray-600 mb-6">
              YouTuber, Padcaster, Tech Head
            </p>
            <div className="flex gap-4 text-gray-300">
              <a href="">
                <BsFacebook className="w-6 h-6 hover:text-dominance" />
              </a>
              <a href="">
                <BsInstagram className="w-6 h-6 hover:text-dominance" />
              </a>
              <a href="">
                <BsTwitter className="w-6 h-6 hover:text-dominance" />
              </a>
              <a href="">
                <BsGithub className="w-6 h-6 hover:text-dominance" />
              </a>
              <a href="">
                <BsDribbble className="w-6 h-6 hover:text-dominance" />
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-evenly items-center">
            <div>
              <h1 className="text-2xl font-bold">21,328</h1>
              <h5>Followers</h5>
            </div>
            <div>
              <h1 className="text-2xl font-bold">--</h1>
              <h5>Following</h5>
            </div>
          </div>
          <Button className="w-fit mx-auto mt-4 bg-success text-dominance enabled:hover:bg-success">
            <PencilSquareIcon className="w-5 mr-4" />
            <span>Edit Profile</span>
          </Button>
        </div>
      </div>

      {/*  */}
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">About Marques</h1>
        <p className="">
          Marques Keith Brownlee, also known professionally as MKBHD, is an
          American YouTuber and professional ultimate frisbee player, best known
          for his technology-focused videos as well as his podcast, Waveform:
          The MKBHD Podcast. Marques posted his first YouTube videos while in
          high school, breaking down the inner workings of a HP Pavilion laptop
          he purchased with his saved allowance. His channel took off, and he's
          since made YouTube videos on smartphones, headphones, camcorders,
          smartwatches, tablets, speakers, Nike's self-lacing boots and Tesla's
          Cybertruck. More recently, he's interviewed thought leaders like
          President Barack Obama, Bill Gates and Mark Zuckerberg.
        </p>
      </div>
    </div>
  );
};

export default MyProfile;
