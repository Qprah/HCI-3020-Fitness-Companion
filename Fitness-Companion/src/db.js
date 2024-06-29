function getExercises(selectedMuscle, selectedCategoryId, selectedDifficultyId) {

    const categories = [
        { id: 1, name: 'Free weight' },
        { id: 2, name: 'Machine' },
        { id: 3, name: 'No equipment' },
        { id: 4, name: 'All' },
    ];

    const difficulties = [
        { id: 1, name: 'Novice' },
        { id: 2, name: 'Intermediate' },
        { id: 3, name: 'Expert' },
        { id: 4, name: 'All' },
    ];

    // Fake dataset with 10 items
    const fakeDataset = [
        { id: 1, muscle: 'Calves', category: categories[1], difficulty: difficulties[2], name: 'Standing Calf Raises', hot: 103},
        { id: 2, muscle: 'Triceps', category: categories[2], difficulty: difficulties[1], name: 'Tricep Dips', hot: 122},
        { id: 3, muscle: 'Forearms', category: categories[0], difficulty: difficulties[0], name: 'Wrist Curls', hot: 126 },
        { id: 4, muscle: 'Biceps', category: categories[2], difficulty: difficulties[2], name: 'Bicep Curls' , hot: 110},
        { id: 5, muscle: 'Calves', category: categories[0], difficulty: difficulties[2], name: 'Seated Calf Raises', hot: 180 },
        { id: 6, muscle: 'Triceps', category: categories[2], difficulty: difficulties[1], name: 'Close Grip Bench Press', hot: 260  },
        { id: 7, muscle: 'Forearms', category: categories[1], difficulty: difficulties[2], name: 'Reverse Wrist Curls', hot: 11 },
        { id: 8, muscle: 'Biceps', category: categories[2], difficulty: difficulties[0], name: 'Hammer Curls', hot: 13 },
        { id: 9, muscle: 'Abs', category: categories[1], difficulty: difficulties[2], name: 'Crunches', hot: 14},
        { id: 10, muscle: 'Glutes', category: categories[0], difficulty: difficulties[1], name: 'Hip Thrusts', hot: 300},
        { id: 11, muscle: 'Quads', category: categories[1], difficulty: difficulties[2], name: 'Lunges', hot: 400},
        { id: 12, muscle: 'Chest', category: categories[0], difficulty: difficulties[1], name: 'Bench Press', hot: 500},
        { id: 13, muscle: 'Abs', category: categories[2], difficulty: difficulties[2], name: 'Planks', hot: 605},
        { id: 14, muscle: 'Glutes', category: categories[1], difficulty: difficulties[0], name: 'Donkey Kicks', hot: 744},
        { id: 15, muscle: 'Quads', category: categories[0], difficulty: difficulties[1], name: 'Squats', hot: 20},
        { id: 16, muscle: 'Chest', category: categories[2], difficulty: difficulties[2], name: 'Dumbbell Flyes', hot: 500 },
        { id: 17, muscle: 'Abs', category: categories[1], difficulty: difficulties[1], name: 'Leg Raises', hot: 600},
        { id: 18, muscle: 'Glutes', category: categories[0], difficulty: difficulties[2], name: 'Deadlifts', hot: 888},
        { id: 19, muscle: 'Quads', category: categories[1], difficulty: difficulties[0], name: 'Leg Press',hot: 92},
        { id: 20, muscle: 'Chest', category: categories[0], difficulty: difficulties[1], name: 'Push-ups',hot: 1340},
        { id: 21, muscle: 'Calves', category: categories[1], difficulty: difficulties[2], name: 'Jumping Calf Raises', hot: 1300 },
        { id: 22, muscle: 'Triceps', category: categories[2], difficulty: difficulties[1], name: 'Skull Crushers', hot: 1200},
        { id: 23, muscle: 'Forearms', category: categories[0], difficulty: difficulties[0], name: 'Plate Wrist Twists', hot: 1100},
        { id: 24, muscle: 'Biceps', category: categories[2], difficulty: difficulties[2], name: 'Zottman Curls', hot: 79},
        { id: 25, muscle: 'Calves', category: categories[0], difficulty: difficulties[2], name: 'Donkey Calf Raises', hot: 1008},
        { id: 26, muscle: 'Triceps', category: categories[2], difficulty: difficulties[1], name: 'Kickbacks', hot: 566},
        { id: 27, muscle: 'Forearms', category: categories[1], difficulty: difficulties[2], name: 'Grip Strengthener', hot: 180},
        { id: 28, muscle: 'Biceps', category: categories[2], difficulty: difficulties[0], name: 'Spider Curls', hot: 190},
        { id: 29, muscle: 'Abs', category: categories[1], difficulty: difficulties[2], name: 'Russian Twists', hot: 200},
        { id: 30, muscle: 'Glutes', category: categories[0], difficulty: difficulties[1], name: 'Step-Ups', hot: 400},
      ];
      
      
      
  
   
    return fakeDataset.filter(item => {
        const matchesMuscle = selectedMuscle === null || item.muscle === selectedMuscle;
        const matchesCategory = selectedCategoryId === null || selectedCategoryId === 4 || item.category.id === selectedCategoryId;
        const matchesDifficulty = selectedDifficultyId === null || selectedDifficultyId === 4 || item.difficulty.id === selectedDifficultyId;

        return matchesMuscle && matchesCategory && matchesDifficulty;
    });
}


export { getExercises };