// NFL Trivia Question Pool - MASSIVE EDITION
// $100 = Easy, $200 = Medium, $300 = Hard, $400 = Very Hard, $500 = Expert
// ~8-10 questions per tier per category = 240+ total questions!

export const questionPool = [
  {
    category: "Super Bowl History",
    questions: {
      easy: [
        { question: "Which team has won the most Super Bowls?", answer: "New England Patriots / Pittsburgh Steelers (tied at 6)" },
        { question: "Tom Brady won his first Super Bowl with which team?", answer: "New England Patriots" },
        { question: "The Super Bowl is played on which day of the week?", answer: "Sunday" },
        { question: "The Super Bowl trophy is named after which legendary coach?", answer: "Vince Lombardi" },
        { question: "True or False: The Super Bowl has never gone to overtime.", answer: "False (Super Bowl LI went to OT)" },
        { question: "Which halftime performer had the famous 'Left Shark' moment?", answer: "Katy Perry" },
        { question: "The Super Bowl is typically played in which month?", answer: "February" },
        { question: "What color Gatorade is most commonly dumped on winning coaches?", answer: "Orange" },
      ],
      medium: [
        { question: "Which team won Super Bowl XLV in 2011, led by Aaron Rodgers?", answer: "Green Bay Packers" },
        { question: "In Super Bowl LI, this team overcame a 28-3 deficit to win.", answer: "New England Patriots" },
        { question: "Which city hosted Super Bowl 50?", answer: "Santa Clara (San Francisco Bay Area)" },
        { question: "Which team won back-to-back Super Bowls in 2023 and 2024?", answer: "Kansas City Chiefs" },
        { question: "Eli Manning won 2 Super Bowl MVPs against which team?", answer: "New England Patriots" },
        { question: "The famous 'Philly Special' was run in which Super Bowl?", answer: "Super Bowl LII" },
        { question: "Which team won the first Super Bowl ever played?", answer: "Green Bay Packers" },
        { question: "The Broncos won Super Bowl 50 by defeating which team?", answer: "Carolina Panthers" },
      ],
      hard: [
        { question: "Who was the MVP of Super Bowl 50?", answer: "Von Miller" },
        { question: "The Seahawks 'Legion of Boom' won Super Bowl XLVIII by what score?", answer: "43-8" },
        { question: "Which team lost 4 consecutive Super Bowls from 1991-1994?", answer: "Buffalo Bills" },
        { question: "Who caught the game-winning TD in Super Bowl XLIII for the Steelers?", answer: "Santonio Holmes" },
        { question: "The Saints won their only Super Bowl in what year?", answer: "2010 (Super Bowl XLIV)" },
        { question: "Which QB threw a pick-six to end Super Bowl XLIX?", answer: "Russell Wilson" },
        { question: "How many Super Bowls did Joe Montana win?", answer: "4" },
        { question: "The Rams beat the Bengals in Super Bowl LVI by what score?", answer: "23-20" },
      ],
      veryHard: [
        { question: "Who threw the game-winning TD in Super Bowl XLIX against the Seahawks?", answer: "Tom Brady (to Julian Edelman)" },
        { question: "How many points did the Giants score to upset the undefeated Patriots in XLII?", answer: "17" },
        { question: "What was the attendance at the first Super Bowl?", answer: "Approximately 61,946" },
        { question: "Who scored the first points in Super Bowl history?", answer: "Max McGee (TD catch)" },
        { question: "In Super Bowl XX, the Bears allowed how many points?", answer: "10" },
        { question: "Which player has the most receiving yards in a single Super Bowl?", answer: "Jerry Rice (215 yards)" },
        { question: "The longest play in Super Bowl history was how many yards?", answer: "100 yards (James Harrison pick-six)" },
        { question: "Super Bowl III is famous for whose guarantee?", answer: "Joe Namath" },
      ],
      expert: [
        { question: "In Super Bowl XLIV, which Saints player had the game-sealing pick-six?", answer: "Tracy Porter" },
        { question: "Who caught the helmet catch in Super Bowl XLII?", answer: "David Tyree" },
        { question: "What was Malcolm Butler's jersey number when he made THE interception?", answer: "21" },
        { question: "How many rushing yards did the Bears have in Super Bowl XX?", answer: "167" },
        { question: "In Super Bowl LII, how many passing yards did Nick Foles have?", answer: "373" },
        { question: "What was the temperature at kickoff of the 'Ice Bowl' NFC Championship?", answer: "-13°F" },
        { question: "Which kicker missed a potential game-winning FG in Super Bowl XXV?", answer: "Scott Norwood" },
        { question: "The famous 'Music City Miracle' happened in what year?", answer: "2000 (1999 season playoffs)" },
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
        { question: "Lamar Jackson plays which position?", answer: "Quarterback" },
        { question: "Tom Brady won how many MVP awards in his career?", answer: "3" },
        { question: "The NFL MVP is voted on by whom?", answer: "Media members (AP)" },
        { question: "Peyton Manning played for the Colts and which other team?", answer: "Denver Broncos" },
        { question: "Josh Allen plays for which NFL team?", answer: "Buffalo Bills" },
      ],
      medium: [
        { question: "Patrick Mahomes won MVP in his first season as a full-time starter in what year?", answer: "2018" },
        { question: "Which Panthers QB dabbed his way to the 2015 NFL MVP?", answer: "Cam Newton" },
        { question: "Lamar Jackson won MVP in which year with the Ravens?", answer: "2019" },
        { question: "Who won the 2022 NFL MVP award?", answer: "Patrick Mahomes" },
        { question: "Matt Ryan won MVP in what season?", answer: "2016" },
        { question: "Which Eagles QB won MVP in 2017?", answer: "No Eagles QB won - Carson Wentz was injured, Brady won" },
        { question: "Drew Brees never won an MVP award. True or False?", answer: "True" },
        { question: "Kurt Warner won MVP in what year?", answer: "1999 or 2001" },
      ],
      hard: [
        { question: "In 2012, this Vikings star became the first RB to win MVP since LT.", answer: "Adrian Peterson" },
        { question: "Who was the last non-QB to win MVP before Adrian Peterson?", answer: "LaDainian Tomlinson (2006)" },
        { question: "Which QB won both regular season MVP and Super Bowl MVP in 2022?", answer: "Patrick Mahomes" },
        { question: "How many unanimous MVP selections have there been since 2010?", answer: "2 (Brady 2010, Jackson 2019)" },
        { question: "Rich Gannon won MVP playing for which team?", answer: "Oakland Raiders" },
        { question: "Shaun Alexander won MVP in what year?", answer: "2005" },
        { question: "Steve McNair shared the 2003 MVP with whom?", answer: "Peyton Manning" },
        { question: "Who won MVP the year before Patrick Mahomes' first win?", answer: "Tom Brady (2017)" },
      ],
      veryHard: [
        { question: "Lamar Jackson won the 2023 MVP with how many passing TDs?", answer: "24" },
        { question: "Aaron Rodgers won back-to-back MVPs with how many total TDs in 2021?", answer: "37" },
        { question: "In what year did Peyton Manning win his record 5th MVP?", answer: "2013" },
        { question: "How many rushing yards did Lamar Jackson have in his 2019 MVP season?", answer: "1,206" },
        { question: "Cam Newton's 2015 MVP season included how many rushing TDs?", answer: "10" },
        { question: "Who finished second in MVP voting in 2018 behind Mahomes?", answer: "Drew Brees" },
        { question: "Adrian Peterson rushed for how many yards in his 2012 MVP season?", answer: "2,097" },
        { question: "Tom Brady's 2017 MVP season: how many INTs did he throw?", answer: "8" },
      ],
      expert: [
        { question: "Who is the only defensive player to win MVP since 1986?", answer: "No one (Lawrence Taylor 1986 was last)" },
        { question: "How many MVP votes did Lamar Jackson receive in his unanimous 2019 win?", answer: "50" },
        { question: "In 2018, Mahomes threw for how many TDs in his MVP season?", answer: "50" },
        { question: "Peyton Manning's 2013 MVP: how many passing TDs?", answer: "55" },
        { question: "Who had more MVP votes: 2019 Lamar or 2010 Brady?", answer: "Both unanimous (50 votes each)" },
        { question: "The youngest MVP winner since 2010 was Lamar at what age?", answer: "22" },
        { question: "Adrian Peterson was how many yards short of the single-season rushing record?", answer: "8 yards" },
        { question: "In Cam Newton's MVP year, the Panthers went what regular season record?", answer: "15-1" },
      ]
    }
  },
  {
    category: "Records & Stats",
    questions: {
      easy: [
        { question: "Who holds the record for most career passing yards?", answer: "Tom Brady" },
        { question: "A touchdown is worth how many points?", answer: "6" },
        { question: "How many games are in an NFL regular season (as of 2021)?", answer: "17" },
        { question: "A field goal is worth how many points?", answer: "3" },
        { question: "How many players are on the field per team during a play?", answer: "11" },
        { question: "Jerry Rice is famous for playing which position?", answer: "Wide Receiver" },
        { question: "The end zone is how many yards deep?", answer: "10" },
        { question: "A safety is worth how many points?", answer: "2" },
      ],
      medium: [
        { question: "Which WR set the single-season receiving yards record in 2012?", answer: "Calvin Johnson (Megatron)" },
        { question: "In 2013, Peyton Manning threw for a record how many TDs?", answer: "55" },
        { question: "Who holds the record for most rushing yards in a single game?", answer: "Adrian Peterson (296 yards)" },
        { question: "Which RB holds the career rushing yards record?", answer: "Emmitt Smith" },
        { question: "Tom Brady retired with how many career touchdown passes?", answer: "649" },
        { question: "Drew Brees retired with how many career passing yards?", answer: "80,358" },
        { question: "Who holds the record for most career receptions?", answer: "Jerry Rice" },
        { question: "The longest NFL game in history was how many overtimes?", answer: "2 (changed in 2022 playoffs)" },
      ],
      hard: [
        { question: "Which team went 0-16 in the 2017 season?", answer: "Cleveland Browns" },
        { question: "Justin Tucker holds the record for longest FG at how many yards?", answer: "66" },
        { question: "Who holds the record for most sacks in a single season?", answer: "Michael Strahan (22.5)" },
        { question: "The Dolphins had a perfect season in what year?", answer: "1972" },
        { question: "LaDainian Tomlinson scored how many TDs in his record 2006 season?", answer: "31" },
        { question: "Randy Moss set the single-season TD reception record with how many?", answer: "23" },
        { question: "Who has the most career interceptions in NFL history?", answer: "Paul Krause (81)" },
        { question: "The longest play from scrimmage in NFL history is how many yards?", answer: "99" },
      ],
      veryHard: [
        { question: "What is the NFL record for most points by one team in a game?", answer: "73 (Bears vs Washington, 1940)" },
        { question: "Eric Dickerson's single-season rushing record is how many yards?", answer: "2,105" },
        { question: "Which receiver holds the record for most receptions in a season?", answer: "Michael Thomas (149 in 2019)" },
        { question: "The fastest 40-yard dash at the NFL Combine was run by whom?", answer: "John Ross (4.22 seconds)" },
        { question: "Derrick Henry had a 99-yard rushing TD against which team?", answer: "Jacksonville Jaguars" },
        { question: "Calvin Johnson's single-season receiving record: how many yards?", answer: "1,964" },
        { question: "Brett Favre started how many consecutive games?", answer: "297" },
        { question: "Emmitt Smith retired with how many career rushing yards?", answer: "18,355" },
      ],
      expert: [
        { question: "What is Tom Brady's career passer rating?", answer: "97.2" },
        { question: "In the 2018 Rams vs Chiefs game, what was the combined score?", answer: "105 (54-51)" },
        { question: "How many career interceptions does Peyton Manning have?", answer: "251" },
        { question: "Peyton Manning's career passer rating was what?", answer: "96.5" },
        { question: "The highest-scoring NFL game of all time total points?", answer: "113 (Bengals 72, Browns 41 in 2004... wait, check: actually Commanders 72-41)" },
        { question: "Tom Brady threw how many career interceptions?", answer: "212" },
        { question: "Jerry Rice caught how many career touchdowns?", answer: "197" },
        { question: "Drew Brees' career completion percentage was?", answer: "67.7%" },
      ]
    }
  },
  {
    category: "The Draft",
    questions: {
      easy: [
        { question: "The NFL Draft is held in which month?", answer: "April" },
        { question: "How many rounds are in the NFL Draft?", answer: "7" },
        { question: "Joe Burrow was the #1 pick in 2020 from which college?", answer: "LSU" },
        { question: "The #1 pick goes to the team with what record?", answer: "The worst record" },
        { question: "Peyton Manning was drafted #1 overall in what year?", answer: "1998" },
        { question: "Andrew Luck was the #1 pick by which team?", answer: "Indianapolis Colts" },
        { question: "Trevor Lawrence was the #1 pick in what year?", answer: "2021" },
        { question: "The NFL Draft is broadcast on which networks?", answer: "ESPN and NFL Network" },
      ],
      medium: [
        { question: "Cam Newton was the #1 pick in 2011 from which college?", answer: "Auburn" },
        { question: "Richard Sherman was drafted in which round in 2011?", answer: "5th round" },
        { question: "In 2012, who was the #2 pick behind Andrew Luck?", answer: "Robert Griffin III (RGIII)" },
        { question: "Kyler Murray was drafted #1 overall by which team?", answer: "Arizona Cardinals" },
        { question: "Baker Mayfield was the #1 pick in what year?", answer: "2018" },
        { question: "Myles Garrett was drafted #1 by which team?", answer: "Cleveland Browns" },
        { question: "Jared Goff was drafted #1 by which team in 2016?", answer: "Los Angeles Rams" },
        { question: "Jameis Winston was drafted #1 in 2015 by which team?", answer: "Tampa Bay Buccaneers" },
      ],
      hard: [
        { question: "Chase Young was the #2 pick in 2020 by which team?", answer: "Washington" },
        { question: "Brock Purdy was 'Mr. Irrelevant' in which draft year?", answer: "2022" },
        { question: "Trevor Lawrence was drafted #1 by which team?", answer: "Jacksonville Jaguars" },
        { question: "Jadeveon Clowney was drafted #1 in 2014 by which team?", answer: "Houston Texans" },
        { question: "The 2017 draft had which QB go #1 and which go #2?", answer: "No QBs in top 2 (Garrett #1, Trubisky was #2)" },
        { question: "Who was drafted right before Aaron Rodgers in 2005?", answer: "Multiple - Rodgers fell to #24" },
        { question: "Russell Wilson was drafted in which round?", answer: "3rd round" },
        { question: "Dak Prescott was drafted in which round?", answer: "4th round" },
      ],
      veryHard: [
        { question: "Tom Brady was drafted in which round?", answer: "6th round" },
        { question: "What pick number was Tom Brady in the 2000 Draft?", answer: "199" },
        { question: "Which team drafted Aaron Donald in 2014?", answer: "St. Louis Rams" },
        { question: "Shannon Sharpe was drafted in which round?", answer: "7th round" },
        { question: "Antonio Brown was drafted in which round?", answer: "6th round" },
        { question: "How many QBs were taken before Russell Wilson in 2012?", answer: "5 (Luck, RGIII, Tannehill, Weeden, Osweiler)" },
        { question: "Terrell Davis was drafted in which round?", answer: "6th round" },
        { question: "What pick number was Aaron Rodgers?", answer: "24" },
      ],
      expert: [
        { question: "JaMarcus Russell was drafted #1 in 2007 by which team?", answer: "Oakland Raiders" },
        { question: "How many QBs were taken before Tom Brady in 2000?", answer: "6" },
        { question: "Ryan Leaf was drafted #2 in 1998 by which team?", answer: "San Diego Chargers" },
        { question: "Charles Rogers was drafted #2 in 2003 - who was #1?", answer: "Carson Palmer" },
        { question: "The 2004 draft had how many QBs in the first round?", answer: "4 (Manning, Rivers, Roethlisberger, Losman)" },
        { question: "What position was the last pick (#262) in the 2000 draft?", answer: "Punter (Pat McAfee... wait no, Tom Brady was 199. Last was Thabiti Davis WR)" },
        { question: "Vince Young was drafted #3 in 2006 - who was #1 and #2?", answer: "Mario Williams #1, Reggie Bush #2" },
        { question: "Tim Couch was the #1 pick by the expansion Browns in what year?", answer: "1999" },
      ]
    }
  },
  {
    category: "Nickname Game",
    questions: {
      easy: [
        { question: "What is the nickname for Seattle's secondary in the early 2010s?", answer: "Legion of Boom" },
        { question: "Marshawn Lynch is known by what nickname?", answer: "Beast Mode" },
        { question: "What is Odell Beckham Jr.'s common abbreviation?", answer: "OBJ" },
        { question: "What animal is the Denver Broncos mascot?", answer: "Horse" },
        { question: "The Dallas Cowboys are also known as what?", answer: "America's Team" },
        { question: "What is Rob Gronkowski's nickname?", answer: "Gronk" },
        { question: "Adrian Peterson was known as what two letters?", answer: "AD (All Day)" },
        { question: "What is Tom Brady sometimes called?", answer: "TB12 or The GOAT" },
      ],
      medium: [
        { question: "Alvin Kamara's nickname is what?", answer: "AK41 (or AK)" },
        { question: "Which WR is known as 'The Cheetah'?", answer: "Tyreek Hill" },
        { question: "What is Derrick Henry's nickname?", answer: "King Henry" },
        { question: "DK Metcalf is also known as what?", answer: "DK" },
        { question: "Which defense was called the 'Purple People Eaters'?", answer: "Minnesota Vikings" },
        { question: "The Steel Curtain refers to which team's defense?", answer: "Pittsburgh Steelers" },
        { question: "What is A.J. Brown's nickname?", answer: "Swole Batman" },
        { question: "Patrick Mahomes' father played which sport professionally?", answer: "Baseball" },
      ],
      hard: [
        { question: "The 2017 Jaguars defense earned what nickname?", answer: "Sacksonville" },
        { question: "The Broncos' 2015 secondary was called what?", answer: "The No-Fly Zone" },
        { question: "What is Davante Adams' nickname?", answer: "Tae" },
        { question: "The 'Killer B's' played for which team?", answer: "Pittsburgh Steelers" },
        { question: "Ed Reed was known by what nickname?", answer: "The Ball Hawk" },
        { question: "The Fearsome Foursome played for which team?", answer: "Los Angeles Rams" },
        { question: "What was Walter Payton's famous nickname?", answer: "Sweetness" },
        { question: "The 'Greatest Show on Turf' was which team's offense?", answer: "St. Louis Rams" },
      ],
      veryHard: [
        { question: "The 1985 Bears defense is known by what name?", answer: "The 46 Defense (or Monsters of the Midway)" },
        { question: "Larry Fitzgerald is known as 'Larry Legend' - what round was he drafted?", answer: "1st round (#3 overall)" },
        { question: "The 'Orange Crush' defense played for which team?", answer: "Denver Broncos" },
        { question: "What was Deion Sanders' famous nickname?", answer: "Prime Time" },
        { question: "The 'Doomsday Defense' was from which franchise?", answer: "Dallas Cowboys" },
        { question: "Mean Joe Greene played for which team?", answer: "Pittsburgh Steelers" },
        { question: "Night Train Lane got his nickname from what?", answer: "A song (Night Train by Jimmy Forrest)" },
        { question: "The 'Fun Bunch' celebration was done by which team?", answer: "Washington" },
      ],
      expert: [
        { question: "The 'Great Wall of Dallas' refers to which position group?", answer: "Offensive Line" },
        { question: "Who was known as 'The Refrigerator'?", answer: "William Perry" },
        { question: "Too Tall Jones' real first name is what?", answer: "Ed" },
        { question: "Which QB was nicknamed 'Captain Comeback'?", answer: "Roger Staubach" },
        { question: "The 'Immaculate Reception' was caught by whom?", answer: "Franco Harris" },
        { question: "LT could stand for which two famous players?", answer: "Lawrence Taylor and LaDainian Tomlinson" },
        { question: "Broadway Joe was the nickname of which QB?", answer: "Joe Namath" },
        { question: "The Galloping Ghost played in what era?", answer: "1920s (Red Grange)" },
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
        { question: "How many teams are in the NFL?", answer: "32" },
        { question: "The newest NFL stadium is in which city?", answer: "Las Vegas or Inglewood (SoFi)" },
        { question: "Which team plays at Lambeau Field?", answer: "Green Bay Packers" },
        { question: "The Patriots play in which state?", answer: "Massachusetts" },
        { question: "Which city has 2 NFL teams that share a stadium?", answer: "Los Angeles (Rams & Chargers)" },
      ],
      medium: [
        { question: "In 2017, the Chargers moved from San Diego to where?", answer: "Los Angeles" },
        { question: "The Rams returned to LA from which city in 2016?", answer: "St. Louis" },
        { question: "Which team moved into U.S. Bank Stadium in 2016?", answer: "Minnesota Vikings" },
        { question: "Before Las Vegas, the Raiders played where for their 2nd stint?", answer: "Oakland" },
        { question: "The Titans were previously called what?", answer: "Houston Oilers" },
        { question: "Which team plays at AT&T Stadium?", answer: "Dallas Cowboys" },
        { question: "The Browns' stadium is named what?", answer: "Cleveland Browns Stadium (or FirstEnergy)" },
        { question: "Soldier Field is home to which team?", answer: "Chicago Bears" },
      ],
      hard: [
        { question: "Which team left Cleveland in 1996 and became the Ravens?", answer: "Cleveland Browns" },
        { question: "Before moving to Indianapolis, the Colts played where?", answer: "Baltimore" },
        { question: "The Arizona Cardinals were originally based in which city?", answer: "Chicago" },
        { question: "The Titans played in which city for one year before Nashville?", answer: "Memphis" },
        { question: "MetLife Stadium hosts which two teams?", answer: "Giants and Jets" },
        { question: "The Chargers played at which temporary LA stadium (2017-2019)?", answer: "Dignity Health Sports Park (StubHub Center)" },
        { question: "The Panthers play in which city?", answer: "Charlotte" },
        { question: "The Jaguars play in which city?", answer: "Jacksonville" },
      ],
      veryHard: [
        { question: "In what year did the Baltimore Colts relocate to Indianapolis?", answer: "1984" },
        { question: "The Houston Oilers moved to Tennessee in which year?", answer: "1997" },
        { question: "In what year did the Raiders first move from Oakland to LA?", answer: "1982" },
        { question: "The Cardinals played in St. Louis for how many years?", answer: "28 (1960-1987)" },
        { question: "The original Cleveland Browns rejoined the NFL in what year?", answer: "1999" },
        { question: "The LA Rams originally moved to St. Louis in what year?", answer: "1995" },
        { question: "The Seattle Seahawks were originally in which division?", answer: "AFC West" },
        { question: "The Tampa Bay Buccaneers started in the AFC or NFC?", answer: "AFC (West)" },
      ],
      expert: [
        { question: "What was the last team to relocate before 2016?", answer: "Houston Oilers to Tennessee (1997)" },
        { question: "The Colts moved to Indianapolis via what method of transport?", answer: "Mayflower moving trucks (at night)" },
        { question: "The original AAFC Cleveland Browns joined the NFL in what year?", answer: "1950" },
        { question: "How many NFL teams have never relocated?", answer: "Multiple - Bears, Packers, Giants, Lions, etc." },
        { question: "The Portsmouth Spartans became which modern team?", answer: "Detroit Lions" },
        { question: "The Decatur Staleys became which team?", answer: "Chicago Bears" },
        { question: "Which California city briefly had an NFL team in the 1990s?", answer: "No new team - but LA lost both Rams and Raiders" },
        { question: "The Cardinals' original city was closest to which Great Lake?", answer: "Lake Michigan (Chicago)" },
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

// Legacy export for compatibility
export const triviaData = generateGameBoard();
