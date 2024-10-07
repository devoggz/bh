"use client";

import React, { useEffect, useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"; // Adjust this import path based on your setup
import { Label } from "@/components/ui/label"; // Adjust this import path based on your setup
import { Button } from "./ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import CompleteButton from "./CompleteButton";
import Confetti from "react-confetti";

type Question = {
  question: string;
  options: string[];
  answer: number; // Index of the correct answer
};

const quizQuestions: Question[] = [
  {
    question: "Bike gani kati ya hizi ni aina ya electric?",
    options: ["TVS", "Roam", "Captain", "Boxer", "Skygo"],
    answer: 1, // b. Roam
  },
  {
    question: "Bike gani imeweza kutoa filter ili kurefusha maisha ya engine?",
    options: ["Ranger", "Honda", "TVS", "Boxer", "Captain"],
    answer: 3, // d. Boxer
  },
  {
    question:
      "Ni kampuni gani kati ya hizi inatengeneza helmet hapa nchini Kenya?",
    options: [
      "Nairobi safety shop",
      "Helmets Kenya",
      "Bodaplus",
      "Safety hub enterprises",
      "Bike Suppliers",
    ],
    answer: 2, // c. Bodaplus
  },
  {
    question: "Bike za electric zinaweza kubadilisha battery kwa vituo vya",
    options: ["Shell", "Stima boda", "Kenya Power", "Boda power", "Total"],
    answer: 1, // b. Stima boda
  },
  {
    question: "Ni oil gani kati ya hizi inatumika kwa boda",
    options: [
      "V power",
      "Shell Helix",
      "Total excellium",
      "Total Hi Perf",
      "Rubis Ultra tec",
    ],
    answer: 3, // d. Total Hi Perf
  },
];

const Quiz = () => {
  const router = useRouter();
  const [Btn, setBtn] = useState(false);
  const [windowDimension, setWindowDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const detectSize = () => {
    setWindowDimension({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", detectSize);
    return () => window.removeEventListener("resize", detectSize);
  }, []);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<number[]>(
    Array(quizQuestions.length).fill(-1)
  );
  const [score, setScore] = useState<number | null>(null); // State to hold the score

  const handleOptionClick = (optionIndex: number) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestionIndex] = optionIndex;
    setUserAnswers(updatedAnswers);
  };

  const handleNext = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const calculateScore = () => {
    let calculatedScore = 0;
    userAnswers.forEach((answer, index) => {
      if (answer === quizQuestions[index].answer) {
        calculatedScore += 2; // 2 points per correct answer
      }
    });
    setScore(calculatedScore); // Set the calculated score
  };

  const handleComplete = (e: React.FormEvent) => {
    e.preventDefault();
    calculateScore(); // Calculate score on completion
  };

  return (
    <div className="p-6 border rounded-bl-xl rounded-br-xl shadow-sm bg-white">
      {/* Display quiz questions and radio options if quiz is not completed */}
      {score === null ? (
        <>
          <div className="space-y-6">
            <p className="font-bold text-wrap text-xl">
              {quizQuestions[currentQuestionIndex].question}
            </p>
            <RadioGroup
              defaultValue={userAnswers[currentQuestionIndex]?.toString() || ""}
              onValueChange={(value) => handleOptionClick(Number(value))}
            >
              {quizQuestions[currentQuestionIndex].options.map(
                (option, optionIndex) => (
                  <div
                    className="flex items-center space-x-2"
                    key={optionIndex}
                  >
                    <RadioGroupItem
                      value={optionIndex.toString()}
                      id={`option-${optionIndex}`}
                      checked={
                        userAnswers[currentQuestionIndex] === optionIndex
                      }
                    />
                    <Label htmlFor={`option-${optionIndex}`}>{option}</Label>
                  </div>
                )
              )}
            </RadioGroup>
          </div>

          <div className="flex flex-row gap-8 mt-8">
            <Button
              className="bg-bhgreen w-full"
              disabled={currentQuestionIndex === 0}
              onClick={handlePrevious}
            >
              Previous
            </Button>

            {currentQuestionIndex < quizQuestions.length - 1 ? (
              <Button className="bg-bhgreen w-full" onClick={handleNext}>
                Next
              </Button>
            ) : (
              <>
                <Button
                  className="bg-bhgreen full"
                  onClick={(e) => {
                    setBtn(!Btn); // Toggle Btn state
                    handleComplete(e); // Call handleComplete function
                  }}
                >
                  Complete
                </Button>
                {Btn && (
                  <Confetti
                    width={windowDimension.width}
                    height={windowDimension.height}
                    tweenDuration={1000}
                  />
                )}
              </>
            )}
          </div>
        </>
      ) : (
        // Display the score when the quiz is complete
        <>
          <div className="text-center ">
            <h2 className="text-2xl font-bold">Quiz Complete!</h2>
            <p className="mt-4 font-bold text-xl">
              Your score: {score} / {quizQuestions.length * 2}
            </p>
          </div>
          <Button
            onClick={() => router.push("/tasks")}
            className="w-full bg-bhgreen mt-6"
          >
            Return to Tasks
          </Button>
        </>
      )}
    </div>
  );
};

export default Quiz;
