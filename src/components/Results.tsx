import  { useContext } from "react";
import { DataContext } from "./data-context";
import { useNavigate } from "react-router-dom";
import Box from "./Box";

type Props = {};

function Results({}: Props) {
  //Get data from global context
  const { height, weight, isMetric } = useContext(DataContext);
  const navigate = useNavigate();

  function calculateBMI(
    height: number,
    weight: number,
    isMetric: boolean
  ): number {
    if (isMetric) {
      // Calculate BMI using the metric system (BMI = weight (kg) / height (m)^2)
      let result = ((weight / (height * height)) * 10000).toFixed(1);
      return Number(result);
    } else {
      // Calculate BMI using the imperial system (BMI = 703 * weight (lbs) / height (in)^2)
      let result = ((703 * weight) / (height * height)).toFixed(1);
      return Number(result);
    }
  }

  const bmi = calculateBMI(height, weight, isMetric);

  let bmiResultsRating = "";
  let bmiNumStyles = { color: "" };
  let bmiResultText = "";


  //Showing different “BMI” results depending on the current state of the metric system and the user's weight and height.

  switch (true) {
    case bmi < 18.5:
      bmiResultsRating = "Underweight";
      bmiNumStyles = { color: "#2596BE" };
      bmiResultText =
        "This means that your body weight is too low for your height and you may be at risk of health problems such as malnutrition, osteoporosis, or infertility. You should try to gain some weight by eating more nutritious foods and doing some strength training exercises. A healthy weight range for you is between 18.5 and 24.9.";
      break;
    case bmi >= 18.5 && bmi <= 24.9:
      bmiResultsRating = "Normal";
      bmiNumStyles = { color: "#3ec756" };
      bmiResultText =
        "This means that your body weight is appropriate for your height and you have a lower risk of health problems such as diabetes, heart disease, or stroke. You should maintain your weight by eating a balanced diet and doing regular physical activity. A healthy lifestyle can help you prevent weight gain and keep your BMI in the normal range.";
      break;
    case bmi >= 25 && bmi <= 29.9:
      bmiResultsRating = "Overweight";
      bmiNumStyles = { color: "#f0eb0c" };
      bmiResultText =
        "This means that your body weight is higher than what is considered healthy for your height and you have an increased risk of health problems such as high blood pressure, high cholesterol, or arthritis. You should try to lose some weight by reducing your calorie intake and increasing your physical activity. A moderate weight loss of 5 to 10 percent of your body weight can improve your health and lower your BMI.";
      break;
    case bmi >= 30 && bmi <= 34.9:
      bmiResultsRating = "Obese";
      bmiNumStyles = { color: "#f0930c" };
      bmiResultText =
        "This means that your body weight is much higher than what is considered healthy for your height and you have a high risk of health problems such as heart attack, stroke, or cancer. You should try to lose weight by following a low-calorie diet and doing more vigorous physical activity. A significant weight loss of 10 to 20 percent of your body weight can reduce your health risks and lower your BMI.";
      break;
    default:
      bmiResultsRating = "Extremely Obese";
      bmiNumStyles = { color: "#f00c0c" };
      bmiResultText =
        "This means that your body weight is dangerously high for your height and you have a very high risk of health problems such as type 2 diabetes, sleep apnea, or liver disease. You should try to lose weight by seeking medical help and following a supervised weight loss program. A drastic weight loss of more than 20 percent of your body weight can save your life and lower your BMI.";
  }

  return (
    <div className="w-screen h-screen">
      <Box>
        <h1 className="text-xl mt-6 font-extrabold">Your BMI Index is:</h1>
        <p className="text-6xl font-bold" style={bmiNumStyles}>
          {bmi}
        </p>
        <p className="w-[80%] mx-auto my-6 text-justify text-lg">{bmiResultText}</p>
        <button
          onClick={() => navigate("/")}
          className="my-6 bg-[var(--primary-button)] p-3 rounded-lg hover:bg-[var(--primary-link)] font-extrabold text-xl"
          >
          Start Over
        </button>
      </Box>
    </div>
  );
}

export default Results;
