const express = require("express");

const router = express.Router();

const api = [
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCBnA9UIRqgca4lldc0cwey4mNnXSFKTFFVkWPIGhk&s",
    name: "Fan",
    description:
      "Dolore ea fugiat irure consectetur non irure anim qui in reprehenderit quis. Ullamco excepteur dolore non labore laborum est cupidatat ipsum. Enim ex id fugiat anim minim excepteur labore Lorem ut. Esse qui officia commodo nostrud esse aliquip nostrud proident. Enim commodo do sit excepteur elit commodo. Ipsum incididunt ipsum exercitation ea consequat duis excepteur cillum. Nulla consequat duis exercitation sunt do esse elit ullamco.",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCBnA9UIRqgca4lldc0cwey4mNnXSFKTFFVkWPIGhk&s",
    name: "Refrigerator",
    description:
      "Dolore ea fugiat irure consectetur non irure anim qui in reprehenderit quis. Ullamco excepteur dolore non labore laborum est cupidatat ipsum. Enim ex id fugiat anim minim excepteur labore Lorem ut. Esse qui officia commodo nostrud esse aliquip nostrud proident. Enim commodo do sit excepteur elit commodo. Ipsum incididunt ipsum exercitation ea consequat duis excepteur cillum. Nulla consequat duis exercitation sunt do esse elit ullamco.",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCBnA9UIRqgca4lldc0cwey4mNnXSFKTFFVkWPIGhk&s",
    name: "Bulb",
    description:
      "Dolore ea fugiat irure consectetur non irure anim qui in reprehenderit quis. Ullamco excepteur dolore non labore laborum est cupidatat ipsum. Enim ex id fugiat anim minim excepteur labore Lorem ut. Esse qui officia commodo nostrud esse aliquip nostrud proident. Enim commodo do sit excepteur elit commodo. Ipsum incididunt ipsum exercitation ea consequat duis excepteur cillum. Nulla consequat duis exercitation sunt do esse elit ullamco.",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCBnA9UIRqgca4lldc0cwey4mNnXSFKTFFVkWPIGhk&s",
    name: "Coffee",
    description:
      "Dolore ea fugiat irure consectetur non irure anim qui in reprehenderit quis. Ullamco excepteur dolore non labore laborum est cupidatat ipsum. Enim ex id fugiat anim minim excepteur labore Lorem ut. Esse qui officia commodo nostrud esse aliquip nostrud proident. Enim commodo do sit excepteur elit commodo. Ipsum incididunt ipsum exercitation ea consequat duis excepteur cillum. Nulla consequat duis exercitation sunt do esse elit ullamco.",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCBnA9UIRqgca4lldc0cwey4mNnXSFKTFFVkWPIGhk&s",
    name: "Fan",
    description:
      "Dolore ea fugiat irure consectetur non irure anim qui in reprehenderit quis. Ullamco excepteur dolore non labore laborum est cupidatat ipsum. Enim ex id fugiat anim minim excepteur labore Lorem ut. Esse qui officia commodo nostrud esse aliquip nostrud proident. Enim commodo do sit excepteur elit commodo. Ipsum incididunt ipsum exercitation ea consequat duis excepteur cillum. Nulla consequat duis exercitation sunt do esse elit ullamco.",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCBnA9UIRqgca4lldc0cwey4mNnXSFKTFFVkWPIGhk&s",
    name: "Fan",
    description:
      "Dolore ea fugiat irure consectetur non irure anim qui in reprehenderit quis. Ullamco excepteur dolore non labore laborum est cupidatat ipsum. Enim ex id fugiat anim minim excepteur labore Lorem ut. Esse qui officia commodo nostrud esse aliquip nostrud proident. Enim commodo do sit excepteur elit commodo. Ipsum incididunt ipsum exercitation ea consequat duis excepteur cillum. Nulla consequat duis exercitation sunt do esse elit ullamco.",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCBnA9UIRqgca4lldc0cwey4mNnXSFKTFFVkWPIGhk&s",
    name: "Fan",
    description:
      "Dolore ea fugiat irure consectetur non irure anim qui in reprehenderit quis. Ullamco excepteur dolore non labore laborum est cupidatat ipsum. Enim ex id fugiat anim minim excepteur labore Lorem ut. Esse qui officia commodo nostrud esse aliquip nostrud proident. Enim commodo do sit excepteur elit commodo. Ipsum incididunt ipsum exercitation ea consequat duis excepteur cillum. Nulla consequat duis exercitation sunt do esse elit ullamco.",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCBnA9UIRqgca4lldc0cwey4mNnXSFKTFFVkWPIGhk&s",
    name: "Fan",
    description:
      "Dolore ea fugiat irure consectetur non irure anim qui in reprehenderit quis. Ullamco excepteur dolore non labore laborum est cupidatat ipsum. Enim ex id fugiat anim minim excepteur labore Lorem ut. Esse qui officia commodo nostrud esse aliquip nostrud proident. Enim commodo do sit excepteur elit commodo. Ipsum incididunt ipsum exercitation ea consequat duis excepteur cillum. Nulla consequat duis exercitation sunt do esse elit ullamco.",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCBnA9UIRqgca4lldc0cwey4mNnXSFKTFFVkWPIGhk&s",
    name: "Fan",
    description:
      "Dolore ea fugiat irure consectetur non irure anim qui in reprehenderit quis. Ullamco excepteur dolore non labore laborum est cupidatat ipsum. Enim ex id fugiat anim minim excepteur labore Lorem ut. Esse qui officia commodo nostrud esse aliquip nostrud proident. Enim commodo do sit excepteur elit commodo. Ipsum incididunt ipsum exercitation ea consequat duis excepteur cillum. Nulla consequat duis exercitation sunt do esse elit ullamco.",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCBnA9UIRqgca4lldc0cwey4mNnXSFKTFFVkWPIGhk&s",
    name: "Fan",
    description:
      "Dolore ea fugiat irure consectetur non irure anim qui in reprehenderit quis. Ullamco excepteur dolore non labore laborum est cupidatat ipsum. Enim ex id fugiat anim minim excepteur labore Lorem ut. Esse qui officia commodo nostrud esse aliquip nostrud proident. Enim commodo do sit excepteur elit commodo. Ipsum incididunt ipsum exercitation ea consequat duis excepteur cillum. Nulla consequat duis exercitation sunt do esse elit ullamco.",
  },
];

router.get("/", (req, res) => {
  res.json({
    status: "ok",
  });
});

router.get("/objects", (req, res) => {
  res.json(api);
});

module.exports = router;
