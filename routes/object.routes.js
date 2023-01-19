const express = require("express");

const router = express.Router();

const api = [
  {
    id:1,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCBnA9UIRqgca4lldc0cwey4mNnXSFKTFFVkWPIGhk&s",
    name: "Fan",
    description:
      "Dolore ea fugiat irure consectetur non irure anim qui in reprehenderit quis. Ullamco excepteur dolore non labore laborum est cupidatat ipsum. Enim ex id fugiat anim minim excepteur labore Lorem ut. Esse qui officia commodo nostrud esse aliquip nostrud proident. Enim commodo do sit excepteur elit commodo. Ipsum incididunt ipsum exercitation ea consequat duis excepteur cillum. Nulla consequat duis exercitation sunt do esse elit ullamco.",
  },
  {
    id:2,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCBnA9UIRqgca4lldc0cwey4mNnXSFKTFFVkWPIGhk&s",
    name: "Refrigerator",
    description:
      "Dolore ea fugiat irure consectetur non irure anim qui in reprehenderit quis. Ullamco excepteur dolore non labore laborum est cupidatat ipsum. Enim ex id fugiat anim minim excepteur labore Lorem ut. Esse qui officia commodo nostrud esse aliquip nostrud proident. Enim commodo do sit excepteur elit commodo. Ipsum incididunt ipsum exercitation ea consequat duis excepteur cillum. Nulla consequat duis exercitation sunt do esse elit ullamco.",
  },
  {
    id:3,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCBnA9UIRqgca4lldc0cwey4mNnXSFKTFFVkWPIGhk&s",
    name: "Bulb",
    description:
      "Dolore ea fugiat irure consectetur non irure anim qui in reprehenderit quis. Ullamco excepteur dolore non labore laborum est cupidatat ipsum. Enim ex id fugiat anim minim excepteur labore Lorem ut. Esse qui officia commodo nostrud esse aliquip nostrud proident. Enim commodo do sit excepteur elit commodo. Ipsum incididunt ipsum exercitation ea consequat duis excepteur cillum. Nulla consequat duis exercitation sunt do esse elit ullamco.",
  },
  {
    id:4,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCBnA9UIRqgca4lldc0cwey4mNnXSFKTFFVkWPIGhk&s",
    name: "Coffee",
    description:
      "Dolore ea fugiat irure consectetur non irure anim qui in reprehenderit quis. Ullamco excepteur dolore non labore laborum est cupidatat ipsum. Enim ex id fugiat anim minim excepteur labore Lorem ut. Esse qui officia commodo nostrud esse aliquip nostrud proident. Enim commodo do sit excepteur elit commodo. Ipsum incididunt ipsum exercitation ea consequat duis excepteur cillum. Nulla consequat duis exercitation sunt do esse elit ullamco.",
  },
  {
    id:5,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCBnA9UIRqgca4lldc0cwey4mNnXSFKTFFVkWPIGhk&s",
    name: "Fan",
    description:
      "Dolore ea fugiat irure consectetur non irure anim qui in reprehenderit quis. Ullamco excepteur dolore non labore laborum est cupidatat ipsum. Enim ex id fugiat anim minim excepteur labore Lorem ut. Esse qui officia commodo nostrud esse aliquip nostrud proident. Enim commodo do sit excepteur elit commodo. Ipsum incididunt ipsum exercitation ea consequat duis excepteur cillum. Nulla consequat duis exercitation sunt do esse elit ullamco.",
  },
  {
    id:6,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCBnA9UIRqgca4lldc0cwey4mNnXSFKTFFVkWPIGhk&s",
    name: "Fan",
    description:
      "Dolore ea fugiat irure consectetur non irure anim qui in reprehenderit quis. Ullamco excepteur dolore non labore laborum est cupidatat ipsum. Enim ex id fugiat anim minim excepteur labore Lorem ut. Esse qui officia commodo nostrud esse aliquip nostrud proident. Enim commodo do sit excepteur elit commodo. Ipsum incididunt ipsum exercitation ea consequat duis excepteur cillum. Nulla consequat duis exercitation sunt do esse elit ullamco.",
  },
  {
    id:7,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCBnA9UIRqgca4lldc0cwey4mNnXSFKTFFVkWPIGhk&s",
    name: "Fan",
    description:
      "Dolore ea fugiat irure consectetur non irure anim qui in reprehenderit quis. Ullamco excepteur dolore non labore laborum est cupidatat ipsum. Enim ex id fugiat anim minim excepteur labore Lorem ut. Esse qui officia commodo nostrud esse aliquip nostrud proident. Enim commodo do sit excepteur elit commodo. Ipsum incididunt ipsum exercitation ea consequat duis excepteur cillum. Nulla consequat duis exercitation sunt do esse elit ullamco.",
  },
  {
    id:8,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCBnA9UIRqgca4lldc0cwey4mNnXSFKTFFVkWPIGhk&s",
    name: "Fan",
    description:
      "Dolore ea fugiat irure consectetur non irure anim qui in reprehenderit quis. Ullamco excepteur dolore non labore laborum est cupidatat ipsum. Enim ex id fugiat anim minim excepteur labore Lorem ut. Esse qui officia commodo nostrud esse aliquip nostrud proident. Enim commodo do sit excepteur elit commodo. Ipsum incididunt ipsum exercitation ea consequat duis excepteur cillum. Nulla consequat duis exercitation sunt do esse elit ullamco.",
  },
  {
    id:9,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCBnA9UIRqgca4lldc0cwey4mNnXSFKTFFVkWPIGhk&s",
    name: "Fan",
    description:
      "Dolore ea fugiat irure consectetur non irure anim qui in reprehenderit quis. Ullamco excepteur dolore non labore laborum est cupidatat ipsum. Enim ex id fugiat anim minim excepteur labore Lorem ut. Esse qui officia commodo nostrud esse aliquip nostrud proident. Enim commodo do sit excepteur elit commodo. Ipsum incididunt ipsum exercitation ea consequat duis excepteur cillum. Nulla consequat duis exercitation sunt do esse elit ullamco.",
  },
  {
    id:10,
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
