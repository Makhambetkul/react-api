const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

const quizzes = [
  {
    id: 1,
    title: "Adventure Time",
    categories: [
      {
        id: "finn",
        name: "Finn",
        questions: [
          {
            id: 101,
            question: "What is Finn's full name?",
            options: ["Finn Mertens", "Finn Johnson", "Finn Smith", "Finn the Great"],
            correctAnswer: "Finn Mertens",
            difficulty: "medium",
            explanation: "His full name is Finn Mertens.",
            image: null
          },
          {
            id: 102,
            question: "What does Finn always carry?",
            options: ["Backpack and sword", "Magic wand", "Map", "Shield"],
            correctAnswer: "Backpack and sword",
            difficulty: "easy",
            explanation: "Finn is rarely seen without his green backpack and sword.",
            image: null
          }
        ]
      },
      {
        id: "bmo",
        name: "BMO",
        questions: [
          {
            id: 201,
            question: "What kind of device is BMO?",
            options: ["Game console", "TV", "Computer", "Phone"],
            correctAnswer: "Game console",
            difficulty: "easy",
            explanation: "BMO is a living video game console.",
            image: null
          },
          {
            id: 202,
            question: "What is BMO's gender?",
            options: ["No gender", "Male", "Female", "Robot"],
            correctAnswer: "No gender",
            difficulty: "hard",
            explanation: "BMO does not identify as any gender.",
            image: null
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "The Amazing World of Gumball",
    categories: [
      {
        id: "gumball",
        name: "Gumball",
        questions: [
          {
            id: 301,
            question: "What animal is Gumball?",
            options: ["Cat", "Dog", "Rabbit", "Fish"],
            correctAnswer: "Cat",
            difficulty: "easy",
            explanation: "Gumball Watterson is a blue cat.",
            image: null
          },
          {
            id: 302,
            question: "Who is Gumball's best friend?",
            options: ["Darwin", "Tobias", "Banana Joe", "Penny"],
            correctAnswer: "Darwin",
            difficulty: "easy",
            explanation: "Darwin is Gumball’s pet goldfish and best friend.",
            image: null
          }
        ]
      },
      {
        id: "darwin",
        name: "Darwin",
        questions: [
          {
            id: 303,
            question: "What kind of animal is Darwin?",
            options: ["Goldfish", "Dog", "Cat", "Hamster"],
            correctAnswer: "Goldfish",
            difficulty: "easy",
            explanation: "Darwin is Gumball's pet goldfish who grew legs.",
            image: null
          },
          {
            id: 304,
            question: "What is Darwin's main personality trait?",
            options: ["Kindness", "Anger", "Greed", "Sarcasm"],
            correctAnswer: "Kindness",
            difficulty: "medium",
            explanation: "Darwin is known for being very kind and loyal.",
            image: null
          }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Regular Show",
    categories: [
      {
        id: "mordecai",
        name: "Mordecai",
        questions: [
          {
            id: 401,
            question: "What kind of animal is Mordecai?",
            options: ["Blue jay", "Raccoon", "Bear", "Owl"],
            correctAnswer: "Blue jay",
            difficulty: "easy",
            explanation: "Mordecai is a blue jay and one of the main characters.",
            image: null
          },
          {
            id: 402,
            question: "Who is Mordecai's best friend?",
            options: ["Rigby", "Muscle Man", "Skips", "Benson"],
            correctAnswer: "Rigby",
            difficulty: "easy",
            explanation: "Rigby is Mordecai’s lazy but loyal best friend.",
            image: null
          }
        ]
      },
      {
        id: "rigby",
        name: "Rigby",
        questions: [
          {
            id: 403,
            question: "What animal is Rigby?",
            options: ["Raccoon", "Skunk", "Ferret", "Rat"],
            correctAnswer: "Raccoon",
            difficulty: "easy",
            explanation: "Rigby is a raccoon and one of the show's two main characters.",
            image: null
          },
          {
            id: 404,
            question: "What is Rigby's biggest flaw?",
            options: ["Laziness", "Wisdom", "Discipline", "Ambition"],
            correctAnswer: "Laziness",
            difficulty: "medium",
            explanation: "Rigby is extremely lazy, which causes a lot of problems.",
            image: null
          }
        ]
      }
    ]
  },
  {
    id: 4,
    title: "SpongeBob SquarePants",
    categories: [
      {
        id: "spongebob",
        name: "SpongeBob",
        questions: [
          {
            id: 501,
            question: "Where does SpongeBob work?",
            options: ["The Krusty Krab", "Chum Bucket", "Pizza Planet", "Bikini Cafe"],
            correctAnswer: "The Krusty Krab",
            difficulty: "easy",
            explanation: "SpongeBob works as a fry cook at the Krusty Krab.",
            image: null
          },
          {
            id: 502,
            question: "Who is SpongeBob's boss?",
            options: ["Mr. Krabs", "Squidward", "Plankton", "Sandy"],
            correctAnswer: "Mr. Krabs",
            difficulty: "easy",
            explanation: "Mr. Krabs owns the Krusty Krab and is SpongeBob's boss.",
            image: null
          }
        ]
      },
      {
        id: "patrick",
        name: "Patrick Star",
        questions: [
          {
            id: 503,
            question: "Where does Patrick live?",
            options: ["Under a rock", "In a pineapple", "In a cave", "At the Krusty Krab"],
            correctAnswer: "Under a rock",
            difficulty: "easy",
            explanation: "Patrick lives under a rock next to SpongeBob.",
            image: null
          },
          {
            id: 504,
            question: "What is Patrick's intelligence level?",
            options: ["Very low", "Genius", "Normal", "Unknown"],
            correctAnswer: "Very low",
            difficulty: "easy",
            explanation: "Patrick is famously not very smart.",
            image: null
          }
        ]
      }
    ]
  },
  {
  id: 5,
  title: "Avatar: The Last Airbender",
  categories: [
    {
      id: "aang",
      name: "Aang",
      questions: [
        {
          id: 601,
          question: "What element is Aang's native?",
          options: ["Air", "Water", "Fire", "Earth"],
          correctAnswer: "Air",
          difficulty: "easy",
          explanation: "Aang is an Air Nomad.",
          image: null
        },
        {
          id: 602,
          question: "Who teaches Aang firebending?",
          options: ["Zuko", "Iroh", "Azula", "Toph"],
          correctAnswer: "Zuko",
          difficulty: "medium",
          explanation: "Zuko becomes Aang's firebending teacher.",
          image: null
        }
      ]
    },
    {
      id: "katara",
      name: "Katara",
      questions: [
        {
          id: 603,
          question: "What tribe is Katara from?",
          options: ["Southern Water Tribe", "Northern Water Tribe", "Fire Nation", "Earth Kingdom"],
          correctAnswer: "Southern Water Tribe",
          difficulty: "easy",
          explanation: "Katara is from the Southern Water Tribe.",
          image: null
        },
        {
          id: 604,
          question: "Who is Katara’s brother?",
          options: ["Sokka", "Zuko", "Bumi", "Jet"],
          correctAnswer: "Sokka",
          difficulty: "easy",
          explanation: "Sokka is her older brother.",
          image: null
        }
      ]
    }
  ]
},
{
  id: 6,
  title: "Teen Titans Go!",
  categories: [
    {
  id: "robin",
  name: "Robin",
  questions: [
    {
      id: 701,
      question: "What is Robin's signature weapon?",
      options: ["Batarang", "Staff", "Boomerang", "Sword"],
      correctAnswer: "Staff",
      difficulty: "easy",
      explanation: "Robin often uses a collapsible staff in battles.",
      image: null
    },
    {
      id: 702,
      question: "Who is Robin secretly in love with?",
      options: ["Raven", "Starfire", "Jinx", "Terra"],
      correctAnswer: "Starfire",
      difficulty: "easy",
      explanation: "Robin has an obvious crush on Starfire.",
      image: null
    }
  ]
},
{
  id: "beastboy",
  name: "Beast Boy",
  questions: [
    {
      id: 703,
      question: "What animal can Beast Boy turn into?",
      options: ["Any animal", "Only wolves", "Dragons", "Bats"],
      correctAnswer: "Any animal",
      difficulty: "medium",
      explanation: "Beast Boy can transform into any animal.",
      image: null
    },
    {
      id: 704,
      question: "What color is Beast Boy's skin?",
      options: ["Green", "Blue", "Red", "Yellow"],
      correctAnswer: "Green",
      difficulty: "easy",
      explanation: "Beast Boy has green skin and hair.",
      image: null
    }
  ]
}

  ]
}

];


app.get("/quizzes", (req, res) => {
  const summary = quizzes.map((quiz, i) => ({
    id: quiz.id,
    title: quiz.title,
    totalCategories: quiz.categories.length,
    characters: quiz.categories.map(cat => cat.name)
  }));
  res.json(summary);
});


app.get("/quizzes/:id", (req, res) => {
  const quiz = quizzes[parseInt(req.params.id) - 1];
  if (quiz) res.json(quiz);
  else res.status(404).json({ error: "Quiz not found" });
});


app.get("/quizzes/:quizId/categories/:categoryId", (req, res) => {
  const quiz = quizzes[parseInt(req.params.quizId) - 1];
  if (!quiz) return res.status(404).json({ error: "Quiz not found" });

  const category = quiz.categories.find(cat => cat.id === req.params.categoryId);
  if (!category) return res.status(404).json({ error: "Category not found" });

  res.json({
    character: category.name,
    questions: category.questions
  });
});


app.get("/quiz-by-category/:id", (req, res) => {
  const { id } = req.params;

  for (const quiz of quizzes) {
    const category = quiz.categories.find(cat => cat.id === id);
    if (category) {
      return res.json({
        id: category.id,
        title: category.name,
        questions: category.questions
      });
    }
  }

  res.status(404).json({ error: "Category not found" });
});



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


app.get("/search", (req, res) => {
  const query = req.query.query?.toLowerCase();
  if (!query) return res.status(400).json({ error: "Query is required" });

  const results = [];

  quizzes.forEach((quiz) => {

    
    if (quiz.title.toLowerCase().includes(query)) {
      results.push({
        type: "quiz",
        id: quiz.id,
        title: quiz.title
      });
    }

    
    quiz.categories.forEach((category) => {

      if (category.name.toLowerCase().includes(query)) {
        results.push({
          type: "category",
          quizId: quiz.id,
          id: category.id,
          name: category.name
        });
      }

      
      category.questions.forEach((q) => {
        if (q.question.toLowerCase().includes(query)) {
          results.push({
            type: "question",
            quizId: quiz.id,
            categoryId: category.id,
            question: q.question
          });
        }
      });
    });
  });

  res.json(results);
});

