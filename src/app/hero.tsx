"use client";

import { IconButton, Typography } from "@material-tailwind/react";

export default function Hero() {
  return (
    <section className="relative w-full">
      <div className="grid place-items-center min-h-[92vh] px-8">
        <div className="container mx-auto text-center">
          <Typography variant="h1" color="blue-gray">
            My Resume
          </Typography>

          <Typography
            variant="lead"
            color="gray"
            className="mt-4 mb-12 mx-auto max-w-4xl"
          >
            Welcome to my professional resume page! Below, you’ll find a
            comprehensive overview of my skills, qualifications, and experience
            in the field of web development.
          </Typography>

          <Typography
            variant="small"
            className="mt-12 mb-4 text-blue-gray-900 font-medium uppercase"
          >
            Connect with me
          </Typography>

          <div className="flex justify-center gap-2">
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
    </section>
  );
}
