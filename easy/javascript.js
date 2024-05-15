const exerciseOfTheDay = () => {
    let exercise = "glutes";
    return (newExercise) => {
        exercise = newExercise;
        console.log("Todays Excercise " + exercise);
    };
}

const exerciseType = exerciseOfTheDay();

exerciseType("Back");
exerciseType("Biceps");
exerciseType("Triceps");
exerciseType("Quads");
exerciseType("Calfs");