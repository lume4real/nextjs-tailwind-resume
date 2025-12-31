"use client";

import { IconButton, Typography } from "@material-tailwind/react";

export default function Hero() {
  return (
    <div className="relative w-full">
      <div className="grid place-items-center min-h-[92vh] px-8">
        <div className="container mx-auto text-center">

          <Typography
            as={"h1"}
            variant={"h1"}
            color={"blue-gray"}
          >
            My Resume
          </Typography>

          <Typography
            as={"p"}
            variant={"lead"}
            color={"gray"}
            className="mt-4 mb-12 w-full md:max-w-full lg:max-w-4xl"
          >
            Welcome to my professional resume page! Below, you'll find a
            comprehensive overview of my skills, qualifications, and experience
            in the field of web development.
          </Typography>

          <Typography
            as={"p"}
            className="mt-12 mb-4 text-blue-gray-900 font-medium uppercase"
          >
            Connect me on:
          </Typography>

          <div className="flex gap-2 justify-center">
            <IconButton variant="text" color="gray">
              <i className="fa-brands fa-facebook text-lg" />
            </IconButton>
            <IconButton variant="text" color="gray">
              <i className="fa-brands fa-instagram text-lg" />
            </IconButton>
            <IconButton variant="text" color="gray">
              <i className="fa-brands fa-github text-lg" />
            </IconButton>
          </div>

        </div>
      </div>
    </div>
  );
}

