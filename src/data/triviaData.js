// NFL Trivia Question Pool - Organized by Difficulty
// $100 = Easy, $200 = Medium, $300 = Hard, $400 = Very Hard, $500 = Expert

export const questionPool = [
  {
    category: "Super Bowl History",
    questions: {
      easy: [
        { question: "Which team has won the most Super Bowls?", answer: "New England Patriots / Pittsburgh Steelers (6 each, now tied with Patriots at 6)", altAnswer: "Patriots or Steelers" },
        { question: "Tom Brady won his first Super Bowl with which team?", answer: "New England Patriots" },
        { question: "The Super Bowl is played on which day of the week?", answer: "Sunday" },
      ],
      medium: [
        { question: "Which team won Super Bowl XLV in 2011, led by Aaron Rodgers?", answer: "Green Bay Packers" },
        { question: "In Super Bowl LI, this team overcame a 28-3 deficit to win.", answer: "New England Patriots" },
        { question: "Which city hosted Super Bowl 50?", answer: "Santa Clara (San Francisco Bay Area)" },
      ],
      hard: [
        { question: "Who was the MVP of Super Bowl 50, a defensive standout for the Broncos?", answer: "Von Miller" },
        { question: "The Seattle Seahawks 'Legion of Boom' defeated which team 43-8 in Super Bowl XLVIII?", answer: "Denver Broncos" },
        { question: "Which team lost 4 consecutive Super Bowls from 1991-1994?", answer: "Buffalo Bills" },
      ],
      veryHard: [
        { question: "Which city hosted Super Bowl LVI at SoFi Stadium?", answer: "Inglewood (Los Angeles)" },
        { question: "Who threw the game-winning touchdown in Super Bowl XLIX against the Seahawks?", answer: "Tom Brady (to Julian Edelman)" },
        { question: "How many points did the Giants score to upset the undefeated Patriots in Super Bowl XLII?", answer: "17" },
      ],
      expert: [
        { question: "In Super Bowl XLIV, which Saints player recorded the game-sealing pick-six against Peyton Manning?", answer: "Tracy Porter" },
        { question: "What was the final score of Super Bowl XLVIII where Seattle crushed Denver?", answer: "43-8" },
        { question: "Who caught the helmet catch in Super Bowl XLII for the Giants?", answer: "David Tyree" },
      ]
    }
  },
  {
    category: "MVP Race",
    questions: {
      easy: [
        { question: "Which position has won the most NFL MVP awards?", answer: "Quarterback" },
        { question: "Patrick Mahomes plays for which NFL team?", answer: "Kansas City Chiefs" },
        { question: "Aaron Rodgers won back-to-back MVPs in 2020 and 2021. True or False?", answer: "True" },
      ],
      medium: [
        { question: "He became the first player to win the MVP award in his first season as a full-time starter in 2018.", answer: "Patrick Mahomes" },
        { question: "Which Panthers QB dabbed his way to the 2015 NFL MVP?", answer: "Cam Newton" },
        { question: "Lamar Jackson won MVP in which year with the Ravens?", answer: "2019" },
      ],
      hard: [
        { question: "In 2012, this Vikings star became the first RB to win MVP since LaDainian Tomlinson.", answer: "Adrian Peterson" },
        { question: "Who was the last non-QB to win NFL MVP before Lamar Jackson (2019)?", answer: "Adrian Peterson (2012)" },
        { question: "Which QB won both the regular season MVP and Super Bowl MVP in the 2022 season?", answer: "Patrick Mahomes" },
      ],
      veryHard: [
        { question: "Who won the 2023 NFL MVP after leading his team to the #1 seed in the AFC?", answer: "Lamar Jackson" },
        { question: "This QB won back-to-back MVPs in 2020 and 2021 before moving to the Jets.", answer: "Aaron Rodgers" },
        { question: "In what year did Peyton Manning win his record 5th MVP award?", answer: "2013" },
      ],
      expert: [
        { question: "Who is the only defensive player to win MVP in the 21st century?", answer: "No one (Alan Page 1971, Lawrence Taylor 1986 were last)" },
        { question: "How many MVP votes did Lamar Jackson receive in his unanimous 2019 MVP season?", answer: "50 (all 50 votes)" },
        { question: "In 2018, Patrick Mahomes threw for how many touchdowns in his MVP season?", answer: "50" },
      ]
    }
  },
  {
    category: "Records & Stats",
    questions: {
      easy: [
        { question: "Who holds the record for most career passing yards, retiring in 2023?", answer: "Tom Brady" },
        { question: "A touchdown is worth how many points?", answer: "6" },
        { question: "How many games are in an NFL regular season (as of 2021)?", answer: "17" },
      ],
      medium: [
        { question: "Which WR set the record for most receiving yards in a single season in 2012?", answer: "Calvin Johnson (Megatron)" },
        { question: "In 2013, this QB threw for a record 55 touchdowns in a single season.", answer: "Peyton Manning" },
        { question: "Who holds the record for most rushing yards in a single game?", answer: "Adrian Peterson (296 yards)" },
      ],
      hard: [
        { question: "Which team went 0-16 in the 2017 season?", answer: "Cleveland Browns" },
        { question: "This kicker holds the record for the longest field goal in NFL history (66 yards).", answer: "Justin Tucker" },
        { question: "Who holds the record for most sacks in a single season?", answer: "Michael Strahan (22.5)" },
      ],
      veryHard: [
        { question: "What is the NFL record for most points scored by one team in a single game?", answer: "73 (Bears vs Washington, 1940)" },
        { question: "Eric Dickerson's single-season rushing record is how many yards?", answer: "2,105" },
        { question: "Which receiver holds the record for most receptions in a single season?", answer: "Michael Thomas (149 in 2019)" },
      ],
      expert: [
        { question: "What is Tom Brady's career passer rating?", answer: "97.2 (approximately)" },
        { question: "In the 2018 Rams vs Chiefs game, what was the combined final score?", answer: "105 (Rams 54, Chiefs 51)" },
        { question: "How many career interceptions does Peyton Manning have?", answer: "251" },
      ]
    }
  },
  {
    category: "The Draft",
    questions: {
      easy: [
        { question: "The NFL Draft is held in which month?", answer: "April" },
        { question: "How many rounds are in the NFL Draft?", answer: "7" },
        { question: "Joe Burrow was the #1 pick in 2020. Which college did he play for?", answer: "LSU" },
      ],
      medium: [
        { question: "Who was the #1 overall pick in the 2011 Draft out of Auburn?", answer: "Cam Newton" },
        { question: "The 'Legion of Boom' member Richard Sherman was drafted in which round of the 2011 Draft?", answer: "5th round" },
        { question: "In 2012, who was the #2 pick behind Andrew Luck?", answer: "Robert Griffin III (RGIII)" },
      ],
      hard: [
        { question: "Which Ohio State pass rusher was the #2 overall pick in 2020?", answer: "Chase Young" },
        { question: "Who was the last player drafted in the 2022 NFL Draft, earning the title 'Mr. Irrelevant'?", answer: "Brock Purdy" },
        { question: "Trevor Lawrence was drafted #1 overall by which team?", answer: "Jacksonville Jaguars" },
      ],
      veryHard: [
        { question: "Tom Brady was famously drafted in which round?", answer: "6th round" },
        { question: "What pick number was Tom Brady in the 2000 NFL Draft?", answer: "199" },
        { question: "Which team drafted Aaron Donald in 2014?", answer: "St. Louis Rams" },
      ],
      expert: [
        { question: "JaMarcus Russell, considered one of the biggest busts, was drafted #1 by which team in 2007?", answer: "Oakland Raiders" },
        { question: "How many quarterbacks were taken before Tom Brady in the 2000 NFL Draft?", answer: "6" },
        { question: "Ryan Leaf, drafted #2 in 1998, played for which team?", answer: "San Diego Chargers" },
      ]
    }
  },
  {
    category: "Nickname Game",
    questions: {
      easy: [
        { question: "What is the nickname for the Seattle Seahawks' secondary during the early 2010s?", answer: "Legion of Boom" },
        { question: "Marshawn Lynch is known by what nickname?", answer: "Beast Mode" },
        { question: "What is Odell Beckham Jr.'s common abbreviation?", answer: "OBJ" },
      ],
      medium: [
        { question: "What is New Orleans Saints star Alvin Kamara's nickname?", answer: "AK41 (or just AK)" },
        { question: "Which WR is known as 'The Cheetah'?", answer: "Tyreek Hill" },
        { question: "What is Travis Kelce's position nickname?", answer: "Tight End" },
      ],
      hard: [
        { question: "The 2017 Jacksonville Jaguars defense earned this nickname for their pass-rushing dominance.", answer: "Sacksonville" },
        { question: "What is Derrick Henry's nickname?", answer: "King Henry" },
        { question: "The Broncos' 2015 defense was nicknamed 'The No-Fly Zone'. What position group did this refer to?", answer: "Secondary (Defensive Backs)" },
      ],
      veryHard: [
        { question: "What was Ed Reed's defensive nickname at Baltimore?", answer: "The Ball Hawk" },
        { question: "The 1985 Chicago Bears defense is known by what name?", answer: "The 46 Defense (or Monsters of the Midway)" },
        { question: "Larry Fitzgerald is known as 'Larry Legend' - what position did he play?", answer: "Wide Receiver" },
      ],
      expert: [
        { question: "What is the nickname for the Dallas Cowboys' offensive line of the 1990s?", answer: "The Great Wall of Dallas" },
        { question: "The Purple People Eaters played for which team?", answer: "Minnesota Vikings" },
        { question: "What was Deion Sanders' famous nickname?", answer: "Prime Time" },
      ]
    }
  },
  {
    category: "Franchise Moves",
    questions: {
      easy: [
        { question: "The Raiders moved to which city in 2020?", answer: "Las Vegas" },
        { question: "Which team changed its name to 'Commanders' in 2022?", answer: "Washington" },
        { question: "The Los Angeles Rams play in which stadium?", answer: "SoFi Stadium" },
      ],
      medium: [
        { question: "In 2017, this team moved from San Diego to Los Angeles.", answer: "Chargers" },
        { question: "The Rams returned to Los Angeles from which city in 2016?", answer: "St. Louis" },
        { question: "Which team moved into U.S. Bank Stadium in 2016?", answer: "Minnesota Vikings" },
      ],
      hard: [
        { question: "Before Las Vegas, the Raiders played in which California city (2nd stint from 1995)?", answer: "Oakland" },
        { question: "The Tennessee Titans were previously known as what when based in Houston?", answer: "Houston Oilers" },
        { question: "Which team left Cleveland in 1996 and became the Ravens?", answer: "Cleveland Browns" },
      ],
      veryHard: [
        { question: "Before moving to Indianapolis, the Colts played in which city?", answer: "Baltimore" },
        { question: "In what year did the Baltimore Colts relocate to Indianapolis?", answer: "1984" },
        { question: "The Arizona Cardinals were originally based in which city before St. Louis?", answer: "Chicago" },
      ],
      expert: [
        { question: "The Houston Oilers moved to Tennessee in which year?", answer: "1997" },
        { question: "What was the last NFL team to relocate before the Rams in 2016?", answer: "Houston Oilers to Tennessee (1997)" },
        { question: "In what year did the Raiders first move from Oakland to Los Angeles?", answer: "1982" },
      ]
    }
  }
];

// Function to generate a game board by picking random questions from each tier
export const generateGameBoard = () => {
  const tiers = ['easy', 'medium', 'hard', 'veryHard', 'expert'];
  const points = [100, 200, 300, 400, 500];
  let questionId = 1;

  return questionPool.map(category => ({
    category: category.category,
    questions: tiers.map((tier, index) => {
      const pool = category.questions[tier];
      const randomQuestion = pool[Math.floor(Math.random() * pool.length)];
      return {
        id: questionId++,
        points: points[index],
        question: randomQuestion.question,
        answer: randomQuestion.answer,
        revealed: false,
        answered: false
      };
    })
  }));
};

// Legacy export for compatibility (generates one board)
export const triviaData = generateGameBoard();
