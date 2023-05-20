# BMI Calculator Web App

This repository contains a simple Single Page Application (SPA) that calculates the Body Mass Index (BMI) of the user. The BMI is a measure of body fat based on height and weight.

## Table of Contents
- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies and Libraries](#technologies-and-libraries)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The BMI Calculator Web App is designed to help users calculate their BMI easily and understand its significance. The app provides a user-friendly interface with the following sections:

### Welcome Page

Upon accessing the web app, users are greeted with a welcome page that introduces them to the concept of BMI and its importance in assessing overall health and fitness.

### Measurement Units Selection

In this section, users can select their preferred measurement units: either Imperial (pounds and inches) or Metric (kilograms and meters). This choice determines the unit of measurement for the subsequent height and weight input sections.

### Height Input

Users enter their height in the specified unit. The app validates the input and provides appropriate error messages for invalid entries.

### Weight Input

Users enter their weight in the selected unit. Similar to the height input, the app validates the input and provides feedback in case of errors.

### BMI Result

Upon submitting the height and weight values, the app calculates the BMI and displays the result. Additionally, a short description accompanies the result, providing users with an understanding of what the BMI number signifies in terms of their health status.

## Installation

To run the BMI Calculator Web App locally, follow these steps:

1. Clone the repository:

   ```
   git clone https://github.com/your-username/bmi-calculator.git
   ```

2. Navigate to the project directory:

   ```
   cd bmi-calculator
   ```

3. Install the dependencies:

   ```
   npm install
   ```

## Usage

After completing the installation steps, start the development server:

```
npm run dev
```

The app should be accessible at [http://localhost:3000](http://localhost:3000).

## Technologies and Libraries

The BMI Calculator Web App is built with the following technologies and libraries:

- React: A JavaScript library for building user interfaces.
- TypeScript: A typed superset of JavaScript that enhances developer productivity and code quality.
- Tailwind CSS: A utility-first CSS framework for rapidly building custom designs.
- Post CSS: A tool for transforming CSS with JavaScript plugins.
- React Router DOM: A declarative routing library for React applications.
- Vite.js: A fast and minimalist development build tool.

The use of React Context in this app enables efficient state management between different components.

## Contributing

Contributions to the BMI Calculator Web App are welcome! If you find any issues or have suggestions for improvement, please feel free to submit a pull request or open an issue in the repository.

To contribute, follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and ensure that the codebase is well-tested.
4. Commit your changes and push the branch to your forked repository.
5. Submit a pull request to the main repository.

## License

The BMI Calculator Web App is licensed under the [MIT License](LICENSE). Feel free to use and modify the code as per your needs.
