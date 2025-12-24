// NFL Trivia - 2015 and Up Edition
// Fresh categories with randomization for unique games every time!

const allCategories = [
  {
    category: "Mahomes Era",
    questions: {
      easy: [
        { question: "Patrick Mahomes plays for which team?", answer: "Kansas City Chiefs" },
        { question: "What number does Mahomes wear?", answer: "15" },
        { question: "Mahomes won his first Super Bowl in what year?", answer: "2020 (Super Bowl LIV)" },
      ],
      medium: [
        { question: "Mahomes won MVP in what season?", answer: "2018" },
        { question: "Who is Mahomes' favorite target and tight end?", answer: "Travis Kelce" },
        { question: "How many Super Bowls has Mahomes won through 2024?", answer: "3" },
      ],
      hard: [
        { question: "How many TDs did Mahomes throw in his 2018 MVP season?", answer: "50" },
        { question: "Mahomes threw for how many yards in Super Bowl LVII?", answer: "182" },
        { question: "Who did Mahomes replace as the Chiefs starting QB?", answer: "Alex Smith" },
      ],
      veryHard: [
        { question: "Mahomes' first playoff loss was to which team?", answer: "New England Patriots (2018 AFC Championship)" },
        { question: "In Super Bowl LIV, the Chiefs came back from being down by how many?", answer: "10 points" },
        { question: "What college did Mahomes attend?", answer: "Texas Tech" },
      ],
      expert: [
        { question: "What pick was Mahomes in the 2017 draft?", answer: "10th overall" },
        { question: "Mahomes' father Pat Sr. played what sport professionally?", answer: "Baseball (MLB pitcher)" },
        { question: "How many 4th quarter comeback wins did Mahomes have in the 2022 playoffs?", answer: "3" },
      ]
    }
  },
  {
    category: "Josh Allen & Bills",
    questions: {
      easy: [
        { question: "Josh Allen plays for which team?", answer: "Buffalo Bills" },
        { question: "What number does Josh Allen wear?", answer: "17" },
        { question: "The Bills play in which state?", answer: "New York" },
      ],
      medium: [
        { question: "Josh Allen was drafted in what year?", answer: "2018" },
        { question: "Allen's favorite WR who wore #14 was traded to which team in 2024?", answer: "Stefon Diggs to Houston Texans" },
        { question: "The Bills lost the famous '13 seconds' game to which team?", answer: "Kansas City Chiefs" },
      ],
      hard: [
        { question: "What college did Josh Allen attend?", answer: "Wyoming" },
        { question: "In the 2020 playoffs, Allen threw the game-winning TD against the Ravens to whom?", answer: "Stefon Diggs" },
        { question: "What pick was Josh Allen in the 2018 draft?", answer: "7th overall" },
      ],
      veryHard: [
        { question: "In the '13 seconds' game, how many points did the Chiefs score in the final 13 seconds?", answer: "10 (field goal, then OT TD)" },
        { question: "Josh Allen rushed for how many TDs in 2021?", answer: "6" },
        { question: "The Bills' drought of missing playoffs ended in what year?", answer: "2017" },
      ],
      expert: [
        { question: "Allen's famous hurdle was over which Vikings defender?", answer: "Anthony Barr" },
        { question: "How many passing TDs did Allen have in 2020?", answer: "37" },
        { question: "The Bills lost 4 straight Super Bowls from 1991-1994. Who was their QB?", answer: "Jim Kelly" },
      ]
    }
  },
  {
    category: "Lamar Jackson",
    questions: {
      easy: [
        { question: "Lamar Jackson plays for which team?", answer: "Baltimore Ravens" },
        { question: "What position does Lamar Jackson play?", answer: "Quarterback" },
        { question: "True or False: Lamar Jackson has won NFL MVP.", answer: "True (twice: 2019, 2023)" },
      ],
      medium: [
        { question: "Lamar Jackson won his first MVP in what year?", answer: "2019" },
        { question: "What college did Lamar Jackson attend?", answer: "Louisville" },
        { question: "How many MVP awards has Lamar Jackson won?", answer: "2" },
      ],
      hard: [
        { question: "Lamar rushed for how many yards in his 2019 MVP season?", answer: "1,206" },
        { question: "Lamar's 2019 MVP vote was unanimous. How many votes did he receive?", answer: "50" },
        { question: "Who did Lamar replace as the Ravens starting QB?", answer: "Joe Flacco" },
      ],
      veryHard: [
        { question: "What pick was Lamar Jackson in the 2018 draft?", answer: "32nd overall (last pick of round 1)" },
        { question: "Lamar threw how many TDs in his first MVP season (2019)?", answer: "36" },
        { question: "The Ravens went what record in Lamar's first MVP season?", answer: "14-2" },
      ],
      expert: [
        { question: "Lamar won his 2nd MVP in 2023 with how many total TDs (pass + rush)?", answer: "28 (24 pass, 4 rush)" },
        { question: "How many rushing TDs did Lamar have in 2019?", answer: "7" },
        { question: "Lamar's Heisman Trophy year was what season?", answer: "2016" },
      ]
    }
  },
  {
    category: "Super Bowl Moments (2015+)",
    questions: {
      easy: [
        { question: "Which team won Super Bowl 50 (2016)?", answer: "Denver Broncos" },
        { question: "The Eagles won their first Super Bowl in what year?", answer: "2018 (Super Bowl LII)" },
        { question: "The Chiefs ended their 50-year Super Bowl drought in what year?", answer: "2020" },
      ],
      medium: [
        { question: "Who was MVP of Super Bowl 50?", answer: "Von Miller" },
        { question: "The Patriots' famous 28-3 comeback was against which team?", answer: "Atlanta Falcons" },
        { question: "Nick Foles won Super Bowl MVP in which Super Bowl?", answer: "Super Bowl LII" },
      ],
      hard: [
        { question: "What trick play did the Eagles run in Super Bowl LII?", answer: "Philly Special" },
        { question: "The Rams beat the Bengals in Super Bowl LVI by what score?", answer: "23-20" },
        { question: "Who caught the game-winning TD in Super Bowl LVI?", answer: "Cooper Kupp" },
      ],
      veryHard: [
        { question: "In Super Bowl LI, what was the Patriots' deficit before the comeback?", answer: "25 points (28-3)" },
        { question: "Who was the MVP of Super Bowl LIII (Patriots vs Rams)?", answer: "Julian Edelman" },
        { question: "Super Bowl LVIII (2024) final score: Chiefs vs. 49ers?", answer: "25-22 (OT)" },
      ],
      expert: [
        { question: "How many passing yards did Nick Foles have in Super Bowl LII?", answer: "373" },
        { question: "What was Malcolm Butler's jersey number during the Super Bowl XLIX interception?", answer: "21" },
        { question: "Super Bowl LVI MVP Cooper Kupp had how many receiving yards?", answer: "92" },
      ]
    }
  },
  {
    category: "2020s Stars",
    questions: {
      easy: [
        { question: "Joe Burrow plays for which team?", answer: "Cincinnati Bengals" },
        { question: "Justin Jefferson plays which position?", answer: "Wide Receiver" },
        { question: "Jalen Hurts plays for which team?", answer: "Philadelphia Eagles" },
      ],
      medium: [
        { question: "What college did Joe Burrow win the national championship with?", answer: "LSU" },
        { question: "Justin Jefferson broke the rookie receiving record set by whom?", answer: "Anquan Boldin" },
        { question: "Ja'Marr Chase was drafted by the Bengals in what year?", answer: "2021" },
      ],
      hard: [
        { question: "Joe Burrow was the #1 pick in what year?", answer: "2020" },
        { question: "Justin Jefferson had how many receiving yards as a rookie?", answer: "1,400" },
        { question: "Which 2020 draft pick is called 'Mr. Irrelevant' but became a star?", answer: "Brock Purdy" },
      ],
      veryHard: [
        { question: "Micah Parsons was drafted by which team in 2021?", answer: "Dallas Cowboys" },
        { question: "CJ Stroud was drafted #2 overall in 2023 by which team?", answer: "Houston Texans" },
        { question: "The 2023 offensive rookie of the year was?", answer: "Puka Nacua" },
      ],
      expert: [
        { question: "Brock Purdy was pick #262 in what year's draft?", answer: "2022" },
        { question: "Justin Jefferson's 2022 receiving yards (single-season Vikings record)?", answer: "1,809" },
        { question: "Sauce Gardner was drafted by which team in 2022?", answer: "New York Jets" },
      ]
    }
  },
  {
    category: "Playoff Thrillers (2015+)",
    questions: {
      easy: [
        { question: "The 'Minneapolis Miracle' was a game-winning TD by which player?", answer: "Stefon Diggs" },
        { question: "Which team has appeared in the most Super Bowls since 2015?", answer: "Kansas City Chiefs" },
        { question: "The 49ers lost Super Bowl LIV to which team?", answer: "Kansas City Chiefs" },
      ],
      medium: [
        { question: "The 'Minneapolis Miracle' was against which team?", answer: "New Orleans Saints" },
        { question: "The Bills vs Chiefs 2022 playoff game is known for what?", answer: "13 seconds (Chiefs scored to tie in 13 sec)" },
        { question: "Who threw the TD pass for the Minneapolis Miracle?", answer: "Case Keenum" },
      ],
      hard: [
        { question: "The 2018 NFC Championship no-call was in a game between which teams?", answer: "Saints vs Rams" },
        { question: "The Titans upset the Ravens in the 2020 playoffs with which RB dominating?", answer: "Derrick Henry" },
        { question: "The 'Double Doink' playoff miss was by which Bears kicker?", answer: "Cody Parkey" },
      ],
      veryHard: [
        { question: "Derrick Henry rushed for how many yards vs the Ravens in that 2020 playoff game?", answer: "195" },
        { question: "The 2021 AFC Divisional (Chiefs-Bills) combined for how many points?", answer: "78" },
        { question: "Who caught the 'Immaculate Extension' TD for the Steelers vs Chiefs in 2017?", answer: "Antonio Brown" },
      ],
      expert: [
        { question: "The Saints lost the 2018 NFC Championship in OT on a TD pass to whom?", answer: "Greg Zuerlein (FG) - actually Brandin Cooks caught the winner" },
        { question: "How many total TDs were scored in the final 2 minutes of Bills-Chiefs 2022?", answer: "4" },
        { question: "The Eagles beat the Vikings 38-7 in the 2018 NFC Championship. Who was Philly's QB?", answer: "Nick Foles" },
      ]
    }
  },
  {
    category: "Record Breakers (2015+)",
    questions: {
      easy: [
        { question: "Who broke the single-season reception record in 2019?", answer: "Michael Thomas (149 catches)" },
        { question: "Justin Tucker kicked the longest FG ever at how many yards?", answer: "66 yards" },
        { question: "Cooper Kupp won the 'Triple Crown' in receiving in what year?", answer: "2021" },
      ],
      medium: [
        { question: "Derrick Henry rushed for 2,000+ yards in what season?", answer: "2020" },
        { question: "Who set the rookie receiving record before Justin Jefferson?", answer: "Anquan Boldin (the OLD record was Odell's 1,305)" },
        { question: "Justin Tucker's 66-yard FG was against which team?", answer: "Detroit Lions" },
      ],
      hard: [
        { question: "Derrick Henry's 2020 rushing yards total?", answer: "2,027" },
        { question: "Cooper Kupp's 2021 receiving yards?", answer: "1,947" },
        { question: "Patrick Mahomes set the record for most passing TDs in first 6 seasons at?", answer: "Over 200" },
      ],
      veryHard: [
        { question: "Michael Thomas had exactly how many receptions in 2019?", answer: "149" },
        { question: "Justin Jefferson's 2022 first-half receiving yards set a record at?", answer: "1,060 (through week 9)" },
        { question: "The 2018 Rams-Chiefs MNF game combined score?", answer: "105 points (54-51)" },
      ],
      expert: [
        { question: "How many receiving TDs did Cooper Kupp have in 2021?", answer: "16" },
        { question: "Derrick Henry's 99-yard TD run was against which team?", answer: "Jacksonville Jaguars" },
        { question: "Travis Kelce's record for TE receiving yards in a season?", answer: "1,416 (2020)" },
      ]
    }
  },
  {
    category: "Draft Day Drama (2015+)",
    questions: {
      easy: [
        { question: "Trevor Lawrence was drafted #1 by which team in 2021?", answer: "Jacksonville Jaguars" },
        { question: "Joe Burrow was the #1 pick in 2020 from which college?", answer: "LSU" },
        { question: "Kyler Murray won the Heisman at which school?", answer: "Oklahoma" },
      ],
      medium: [
        { question: "The 2018 draft had 5 QBs in the first round. Who went #1?", answer: "Baker Mayfield" },
        { question: "Who was drafted #2 behind Trevor Lawrence in 2021?", answer: "Zach Wilson" },
        { question: "Saquon Barkley was drafted #2 overall by which team?", answer: "New York Giants" },
      ],
      hard: [
        { question: "What pick was Lamar Jackson in 2018?", answer: "32nd overall" },
        { question: "Brock Purdy was 'Mr. Irrelevant' in 2022 at pick #?", answer: "262" },
        { question: "Chase Young was drafted #2 in 2020 by which team?", answer: "Washington" },
      ],
      veryHard: [
        { question: "How many QBs were drafted before Lamar Jackson in 2018?", answer: "4 (Mayfield, Darnold, Allen, Rosen)" },
        { question: "Caleb Williams was drafted #1 in 2024 by which team?", answer: "Chicago Bears" },
        { question: "Which team traded up for Jalen Hurts in 2020?", answer: "Philadelphia Eagles (2nd round)" },
      ],
      expert: [
        { question: "The 2016 draft had Goff #1 and Wentz #2. Who was #3?", answer: "Joey Bosa" },
        { question: "Jayden Daniels was drafted #2 in 2024 by which team?", answer: "Washington Commanders" },
        { question: "What round was Dak Prescott drafted in 2016?", answer: "4th round" },
      ]
    }
  },
  {
    category: "Division Dominance",
    questions: {
      easy: [
        { question: "The Chiefs have dominated which division since 2015?", answer: "AFC West" },
        { question: "The Eagles play in which division?", answer: "NFC East" },
        { question: "Tom Brady moved to which NFC South team in 2020?", answer: "Tampa Bay Buccaneers" },
      ],
      medium: [
        { question: "The Bills have been the top team in which division recently?", answer: "AFC East" },
        { question: "The 49ers play in which division?", answer: "NFC West" },
        { question: "Aaron Rodgers left the Packers for which AFC team?", answer: "New York Jets" },
      ],
      hard: [
        { question: "How many straight AFC West titles did the Chiefs win through 2023?", answer: "8" },
        { question: "The NFC North is home to the Packers, Bears, Lions, and?", answer: "Minnesota Vikings" },
        { question: "Russell Wilson left Seattle for which AFC West team?", answer: "Denver Broncos" },
      ],
      veryHard: [
        { question: "The Browns' first playoff win since 1994 was against which team in 2021?", answer: "Pittsburgh Steelers" },
        { question: "The Lions' 2023 playoff run ended in which game?", answer: "NFC Championship (lost to 49ers)" },
        { question: "Which AFC South team went to consecutive AFC Championships in 2019-2020?", answer: "Tennessee Titans" },
      ],
      expert: [
        { question: "The Jaguars made the AFC Championship in 2018 and lost to?", answer: "New England Patriots" },
        { question: "What was the Lions' record in 2023 before their playoff run?", answer: "12-5" },
        { question: "The last team to win back-to-back Super Bowls before the Chiefs?", answer: "New England Patriots (2003-2004)" },
      ]
    }
  },
  {
    category: "Coaching Carousel",
    questions: {
      easy: [
        { question: "Andy Reid is the head coach of which team?", answer: "Kansas City Chiefs" },
        { question: "Bill Belichick coached which team to 6 Super Bowls?", answer: "New England Patriots" },
        { question: "Sean McVay became the youngest HC with which team?", answer: "Los Angeles Rams" },
      ],
      medium: [
        { question: "What year did Bill Belichick leave the Patriots?", answer: "2024" },
        { question: "Kyle Shanahan is the head coach of which team?", answer: "San Francisco 49ers" },
        { question: "Mike Tomlin has coached the Steelers since what year?", answer: "2007" },
      ],
      hard: [
        { question: "Doug Pederson won Super Bowl LII with which team?", answer: "Philadelphia Eagles" },
        { question: "Which coach led the Bengals to Super Bowl LVI?", answer: "Zac Taylor" },
        { question: "Sean McVay was how old when hired as Rams HC?", answer: "30" },
      ],
      veryHard: [
        { question: "Dan Campbell became Lions HC in what year?", answer: "2021" },
        { question: "Nick Sirianni led the Eagles to Super Bowl LVII in his what season?", answer: "2nd season" },
        { question: "John Harbaugh has been Ravens HC since what year?", answer: "2008" },
      ],
      expert: [
        { question: "Which HC has the most playoff wins since 2015?", answer: "Andy Reid" },
        { question: "Kevin Stefanski won Coach of the Year in what year?", answer: "2020" },
        { question: "Matt LaFleur's Packers record in his first 2 seasons?", answer: "26-6" },
      ]
    }
  }
];

// Function to randomly select 6 categories for each game
const selectRandomCategories = () => {
  const shuffled = [...allCategories].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, 6);
};

// Function to generate a fresh game board with random categories and questions
export const generateGameBoard = () => {
  const selectedCategories = selectRandomCategories();
  const tiers = ['easy', 'medium', 'hard', 'veryHard', 'expert'];
  const points = [100, 200, 300, 400, 500];
  let questionId = 1;

  return selectedCategories.map(category => ({
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

// Export for the game
export const questionPool = allCategories;
export const triviaData = generateGameBoard();
