import { useEffect, useState } from "react";
import { Accordion, Button, Col, Container, Form, Row } from "react-bootstrap";

const CreateCharacter = () => {
  const [characterName, setCharacterName] = useState("");
  const [characterRace, setCharacterRace] = useState(false);
  const [characterClass, setCharacterClass] = useState(false);
  const [characterLevel, setCharacterLevel] = useState(1);
  const [characterHitpoints, setCharacterHitpoints] = useState(0);
  const [currentActiveKey, setCurrentActiveKey] = useState(false);
  const characterObject = {
    name: "",
    race: "",
    class: "",
    level: 1,
    hitpoints: 0,
  };

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Races
  const dwarfRace = {
    name: "Dwarf",
    description:
      "Dwarves are a short, stocky race; both male and female Dwarves stand around four feet tall and typically weigh around 120 pounds. Their long hair and thick beards are dark brown, gray or black. They take great pride in their beards, sometimes braiding or forking them. They have a fair to ruddy complexion. Dwarves have stout frames and a strong, muscular build. They are rugged and resilient, with the capacity to endure great hardships. Dwarves are typically practical, stubborn and courageous. They can also be introspective, suspicious and possessive. They have a lifespan of three to four centuries.",
    restrictions:
      "Dwarves may become Clerics, Fighters, or Thieves. They are required to have a minimum Constitution of 9. Due to their generally dour dispositions, they may not have a Charisma higher than 17. They may not employ Large weapons more than four feet in length (specifically, two-handed swords, polearms, and longbows).",
    specialAbilities:
      "All Dwarves have Darkvision with a 60' range, and are able to detect slanting passages, traps, shifting walls and new construction on a roll of 1-2 on 1d6; a search must be performed before this roll may be made.",
    savingThrows: {
      deathPoison: 4,
      wands: 4,
      paralysisStone: 4,
      dragonBreath: 3,
      spells: 4,
    },
    image: "https://www.pngfind.com/pngs/m/252-2529881_dwarf-banker-fantasy-dwarf-png-transparent-png.png"

  };
  const elfRace = {
    name: "Elf",
    description:
      "Elves are a slender race, with both genders standing around five feet tall and weighing around 130 pounds. Most have dark hair, with little or no body or facial hair. Their skin is pale, and they have pointed ears and delicate features. Elves are lithe and graceful. They have keen eyesight and hearing. Elves are typically inquisitive, passionate, self-assured, and sometimes haughty. Their typical lifespan is a dozen centuries or more.",
    restrictions:
      "Elves may become Clerics, Fighters, Magic-Users or Thieves; they are also allowed to combine the classes of Fighter and Magic-User, and of Magic-User and Thief (see Combination Classes, below). They are required to have a minimum Intelligence of 9. Due to their generally delicate nature, they may not have a Constitution higher than 17. Elves never roll larger than six-sided dice (d6) for hit points.",
    specialAbilities:
      "All Elves have Darkvision with a 60' range. They are able to find secret doors more often than normal (1-2 on 1d6 rather than the usual 1 on 1d6). An Elf is so observant that one has a 1 on 1d6 chance to find a secret door with a cursory look. Elves are immune to the paralyzing attack of ghouls. Also, they are less likely to be surprised in combat, reducing the chance of surprise by 1 in 1d6.",
    savingThrows: {
      deathPoison: 0,
      wands: 2,
      paralysisStone: 1,
      dragonBreath: 0,
      spells: 2,
    },
    image: "https://toppng.com/uploads/preview/dnd-5e-wood-elf-11563519567upqkcxl1cr.png"

  };
  const halflingRace = {
    name: "Halfling",
    description:
      "Halflings are small, slightly stocky folk who stand around three feet tall and weigh about 60 pounds. They have curly brown hair on their heads and feet, but rarely have facial hair. They are usually fair skinned, often with ruddy cheeks. Halflings are remarkably rugged for their small size. They are dexterous and nimble, capable of moving quietly and remaining very still. They usually go barefoot. Halflings are typically outgoing, unassuming and good-natured. They live about a hundred years.",
    restrictions:
      "Halflings may become Clerics, Fighters or Thieves. They are required to have a minimum Dexterity of 9. Due to their small stature, they may not have a Strength higher than 17. Halflings never roll larger than six-sided dice (d6) for hit points regardless of class. Halflings may not use Large weapons, and must wield Medium weapons with both hands",
    specialAbilities:
      "Halflings are unusually accurate with all sorts of ranged weapons, gaining a +1 attack bonus when employing them. When attacked in melee by creatures larger than man-sized, Halflings gain a +2 bonus to their Armor Class. Halflings are quick-witted, thus adding +1 to Initiative die rolls. Outdoors in their preferred forest terrain, they are able to hide very effectively; so long as they remain still there is only a 10% chance they will be detected. Even indoors, in dungeons or in non-preferred terrain they are able to hide such that there is only a 30% chance of detection. Note that a Halfling Thief will roll only once, using either the Thief ability or the Halfling ability, whichever is better.",
    savingThrows: {
      deathPoison: 4,
      wands: 4,
      paralysisStone: 4,
      dragonBreath: 3,
      spells: 4,
    },
    image: "https://static.wikia.nocookie.net/forgottenrealms/images/5/52/LightfootHalfling.png/revision/latest/scale-to-width-down/349?cb=20191221102705"
  };
  const humanRace = {
    name: "Human",
    description:
      "Humans come in a broad variety of shapes and sizes. The Game Master must decide what sorts of Humans live in the game world. An average Human male in good health stands around six feet tall and weighs about 175 pounds. Most Humans live around 75 years.",
    restrictions:
      "Humans may be any single class. They have no minimum or maximum ability score requirements.",
    specialAbilities:
      "Humans learn unusually quickly, gaining a bonus of 10% to all experience points earned",
    savingThrows: {
      deathPoison: 0,
      wands: 0,
      paralysisStone: 0,
      dragonBreath: 0,
      spells: 0,
    },
    image: "https://www.dndbeyond.com/avatars/thumbnails/6/258/420/618/636271801914013762.png"
  };

  // Classes

  const fighterClass = {
    name: "Fighter",
    description:
      " <p>Fighters include soldiers, guardsmen, barbarian warriors, and anyone else for whom fighting is a way of life. They train in combat, and they generally approach problems head on, weapon drawn.</p><p>Not surprisingly, Fighters are best at fighting of all the classes. They are also the hardiest, able to take more punishment than any other class. Although they are not skilled in the ways of magic, Fighters can nonetheless use many magic items, including but not limited to magical weapons and armor.</p><p>The Prime Requisite for Fighters is Strength; a character must have a Strength score of 9 or higher to become a Fighter. Members of this class may wear any armor and use any weapon.</p>",
      levels: {
        1: "1d8",
        2: "2d8",
        3: "3d8",
        4: "4d8",
        5: "5d8",
        6: "6d8",
        7: "7d8",
        8: "8d8",
        9: "9d8",
       10: "9d8+2",
       11: "9d8+4",
       12: "9d8+6",
       13: "9d8+8",
       14: "9d8+10",
       15: "9d8+12",
       16: "9d8+14",
       17: "9d8+16",
       18: "9d8+18",
       19: "9d8+20",
       20: "9d8+22",
      }
    };
  const clericClass = {
    name: "Cleric",
    description: "<p>Clerics are those who have devoted themselves to the service of a deity, pantheon or other belief system. Most Clerics spend their time in mundane forms of service such as preaching and ministering in a temple; but there are those who are called to go abroad from the temple and serve their deity in a more direct way, smiting undead monsters and aiding in the battle against evil and chaos. Player character Clerics are assumed to be among the latter group.</p> <p>Clerics fight about as well as Thieves, but not as well as Fighters. They are hardier than Thieves, at least at lower levels, as they are accustomed to physical labor that the Thief would deftly avoid. Clerics can cast spells of divine nature starting at 2nd level, and they have the power to Turn the Undead, that is, to drive away undead monsters by means of faith alone (see the Encounter section for details).</p> <p>The Prime Requisite for Clerics is Wisdom; a character must have a Wisdom score of 9 or higher to become a Cleric. They may wear any armor, but may only use blunt weapons (specifically including warhammer, mace, maul, club, quarterstaff, and sling).</p>",
    levels: {
      1: "1d6",
      2: "2d6",
      3: "3d6",
      4: "4d6",
      5: "5d6",
      6: "6d6",
      7: "7d6",
      8: "8d6",
      9: "9d6",
      10: "9d6+1",
      11: "9d6+2",
      12: "9d6+3",
      13: "9d6+4",
      14: "9d6+5",
      15: "9d6+6",
      16: "9d6+7",
      17: "9d6+8",
      18: "9d6+9",
      19: "9d6+10",
      20: "9d6+11",
    }
  };
  const magicUserClass = {
    name: "Magic User",
    description:"<p> Magic-Users are those who seek and use knowledge of the arcane. They do magic not as the Cleric does, by faith in a greater power, but rather through insight and understanding. </p> <p> Magic-Users are the worst of all the classes at fighting; hours spent studying massive tomes of magic do not lead a character to become strong or adept with weapons. They are the least hardy, equal to Thieves at lower levels but quickly falling behind. </p> <p> <u>The Prime Requisite for Magic-Users is Intelligence, a character must have an Intelligence score of 9 or higher to become a Magic-User. </u> The only weapons they become proficient with are the dagger and the walking staff (or cudgel). Magic-Users may not wear armor of any sort nor use a shield as such things interfere with spellcasting.</p> <p>A first level Magic-User begins play knowing read magic and one other spell of first level. These spells are written in a spellbook provided by his or her master. The GM may roll for the spell, assign it as he or she sees fit, or allow the player to choose it, at his or her option. See the Spells section for more details.</p>",
      levels: {
        1: "1d4",
        2: "2d4",
        3: "3d4",
        4: "4d4",
        5: "5d4",
        6: "6d4",
        7: "7d4",
        8: "8d4",
        9: "9d4",
        10: "9d4+1",
        11: "9d4+2",
        12: "9d4+3",
        13: "9d4+4",
        14: "9d4+5",
        15: "9d4+6",
        16: "9d4+7",
        17: "9d4+8",
        18: "9d4+9",
        19: "9d4+10",
        20: "9d4+11",
      }
    };

  const thiefClass = {
    name: "thief",
    description:
      "<p>Thieves are those who take what they want or need by stealth, disarming traps and picking locks to get to the gold they crave; or “borrowing” money from pockets, beltpouches, etc. right under the nose of the “mark” without the victim ever knowing. <p>Thieves fight better than Magic-Users but not as well as Fighters. Avoidance of honest work leads Thieves to be less hardy than the other classes, though they do pull ahead of the Magic-Users at higher levels.</p> <p><u>The Prime Requisite for Thieves is Dexterity; a character must have a Dexterity score of 9 or higher to become a Thief.</u> They may use any weapon, but may not wear metal armor as it interferes with stealthy activities, nor may they use shields of any sort. Leather armor is acceptable, however.</p> <p>Thieves have a number of special abilities, described below. One Turn must generally be spent to use any of these abilities, though the GM may amend this as he or she sees fit. The GM may choose to make any of these rolls on behalf of the player, at his or her option, to help maintain the proper state of uncertainty. Also note that the GM may apply situational adjustments (plus or minus percentage points) as he or she sees fit; for instance, it's obviously harder to climb a wall slick with slime than one that is dry, so the GM might apply a penalty of 20% for the slimy wall.</p>",
    abilities: [
      "<p><b>Open Locks</b> allows the Thief to unlock a lock without a proper key. It may only be tried once per lock. If the attempt fails, the Thief must wait until he or she has gained another level of experience before trying again.</p>",
      "<p><b>Remove Traps</b> is generally rolled twice: first to detect the trap, and second to disarm it. The GM will make these rolls as the player won't know for sure if the character is successful or not until someone actually tests the trapped (or suspected) area.</p>",
      "<p><b>Pick Pockets</b> allows the Thief to lift the wallet, cut the purse, etc. of a victim without the victim noticing. Obviously, if the roll is failed, the Thief didn't get what he or she wanted; but further, the intended victim (or an onlooker, at the GM's option) will notice the attempt if the die roll is more than two times the target number (or if the die roll is 00).</p>",
      "<p><b>Move Silently</b>, like Remove Traps, is always rolled by the GM. The Thief will usually believe he or she is moving silently regardless of the die roll, but those he or she is trying to avoid will hear the Thief if the roll is failed.</p>",
      "<p><b>Climb Walls</b> permits the Thief to climb sheer surfaces with few or no visible handholds. This ability should normally be rolled by the player. If the roll fails, the Thief falls from about halfway up the wall or other vertical surface. The GM may require multiple rolls if the distance climbed is more than 100 feet.</p>",
      "<p><b>Hide</b> permits the Thief to hide in any shadowed area large enough to contain his or her body. Like Move Silently, the Thief always believes he or she is being successful, so the GM makes the roll. A Thief hiding in shadows must remain still for this ability to work.</p>",
      "<p><b>Listen</b> is generally used to listen at a door, or to try to listen for distant sounds in a dungeon. The GM must decide what noises the Thief might hear; a successful roll means only that a noise could have been heard. The GM should always make this roll for the player. Note that the Thief and his or her party must try to be quiet in order for the Thief to use this ability.</p>",
      "<p><b>Sneak Attack</b> can be performed any time a thief is behind an opponent in melee and it is reasonably likely the opponent doesn't know the Thief is there. The GM may require a Move Silently or Hide roll to determine this. The Sneak Attack is made with a +4 attack bonus and does double damage if it is successful. A Thief usually can't make a Sneak Attack on the same opponent twice in any given combat.</p> <p><b> Sneak Attack</b> can be performed with any melee (but not missile) weapon, or may be performed bare-handed (in which case subduing damage is done; see the Encounter section for details). Also, the Sneak Attack can be performed with the “flat of the blade;” the bonuses and penalties cancel out, so the attack has a +0 attack bonus and does normal damage; the damage done in this case is subduing damage.</p>",
    ],
    levels: {
      1: "1d4",
      2: "2d4",
      3: "3d4",
      4: "4d4",
      5: "5d4",
      6: "6d4",
      7: "7d4",
      8: "8d4",
      9: "9d4",
      10: "9d4+2",
      11: "9d4+4",
      12: "9d4+6",
      13: "9d4+8",
      14: "9d4+10",
      15: "9d4+12",
      16: "9d4+14",
      17: "9d4+16",
      18: "9d4+18",
      19: "9d4+20",
      20: "9d4+22",
    }
  };

  // Classes End

  // functions

  const setCharacterClassFunc = (e) => {
    setCharacterClass(e.target.value);
    setCurrentActiveKey(1);
  };
  const setCharacterRaceFunc = (e) => {
    setCharacterRace(e.target.value);
    setCurrentActiveKey(0);
  };

  const hitpointCalculator = (hitDice) => {
    let numberOfDice;
    let sizeOfDice;
    let staticHitpoints = 0;
    if (hitDice.includes("d")) {
      let diceArray = hitDice.split("d");
      numberOfDice = parseInt(diceArray[0]);
      console.log("the number of dice is " + numberOfDice);

      if (diceArray[1].includes("+")) {
        let secondArray = diceArray[1].split("+");
        sizeOfDice = parseInt(secondArray[0]);
        staticHitpoints = parseInt(secondArray[1]);
      } else {
        sizeOfDice = parseInt(diceArray[1]);
      }
      let totalHitpoints = staticHitpoints;
      for (let index = 0; index < numberOfDice; index++) {
        let singleRoll = Math.floor(Math.random() * sizeOfDice + 1);
        console.log("the single roll is " + singleRoll);
        totalHitpoints = totalHitpoints + singleRoll;
      }
      console.log("the total hp is : " + totalHitpoints);
      setCharacterHitpoints(totalHitpoints)

    }
  };


  const preParsingHitDice = () => {
    let parsedClass = JSON.parse(characterClass)
    console.log("The parsed class is :", parsedClass);
    let parsedDice = parsedClass.levels[parseInt(characterLevel)]
    console.log("the parsed dice are ", parsedDice);

    hitpointCalculator(parsedDice)

  }
  const checkDisabledButton = () => {
    if (
      characterName.length > 2 &&
      characterRace &&
      characterClass &&
      characterHitpoints > 0
    ) {
      return false;
    } else {
      return true;
    }
  };
  // const [characterName, setCharacterName] = useState("");
  // const [characterRace, setCharacterRace] = useState(false);
  // const [characterClass, setCharacterClass] = useState(false);
  // const [characterLevel, setCharacterLevel] = useState(1);
  // const [characterHitpoints, setCharacterHitpoints] = useState(0);
  // END FUNCTIONS

  return (
    <div className="bgrad-light page-size">
      <Container>
        <Row className="bordered">
          <h1 className="text-center">Create a Character</h1>
        </Row>
        <div className="mt-3">
          <Row className="mt-2">
            <Col className="col-12 col-md-6">
              {/* Name Selection  */}
              <div className="form-floating ml-2 mb-3">
                <input
                  onChange={(e) => setCharacterName(e.target.value)}
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label htmlFor="floatingInput">Know a good name?</label>
              </div>
              {/* Race Selection  */}
              <div className="mt-2" id="race-selection">
                <div className="form-floating">
                  <select
                    onChange={(e) => setCharacterRaceFunc(e)}
                    className="form-select"
                    id="floatingSelect"
                    aria-label="Floating label select example"
                  >
                    <option disabled selected>
                      Choose a Race
                    </option>
                    <option value={JSON.stringify(humanRace)}>Human</option>
                    <option value={JSON.stringify(elfRace)}>Elf</option>
                    <option value={JSON.stringify(dwarfRace)}>Dwarf</option>
                    <option value={JSON.stringify(halflingRace)}>
                      Halfling
                    </option>
                  </select>
                  <label htmlFor="floatingSelect">Race</label>
                </div>
              </div>
              {/* Class Selection  */}
              <div className="mt-2" id="class-selection">
                <div className="form-floating">
                  <select
                    onChange={(e) => setCharacterClassFunc(e)}
                    className="form-select"
                    id="floatingSelect"
                    aria-label="Floating label select example"
                  >
                    <option disabled selected>
                      Choose a Class
                    </option>
                    <option value={JSON.stringify(fighterClass)}>
                      Fighter
                    </option>
                    <option value={JSON.stringify(thiefClass)}>Thief</option>
                    <option value={JSON.stringify(clericClass)}>Cleric</option>
                    <option value={JSON.stringify(magicUserClass)}>
                      Magic-User
                    </option>
                  </select>
                  <label htmlFor="floatingSelect">Class</label>
                </div>
              </div>
              {/* Level Selection  */}
              <div className="mt-2" id="level-selection">
                <div className="form-floating">
                  <select
                    onChange={(e) => setCharacterLevel(e.target.value)}
                    className="form-select"
                    id="floatingSelect"
                    aria-label="Floating label select example"
                  >
                    <option disabled selected>
                      Beginner or veteran?
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                  </select>
                  <label htmlFor="floatingSelect">Level</label>
                </div>
              </div>

              {/* Hitpoint Selection START  */}
              
              <p>{characterLevel}</p>
              <Row className="mb-3">
                  <Col className="col-4">
                  <div class="col">
                    <input type="number" size="lg" class="form-control" value={characterHitpoints} placeholder="First name"></input>
                </div>
                  </Col>
                  <Col className="col-8">
                      <Button onClick={e => {preParsingHitDice()}} variant="danger" >Roll!</Button>
                  </Col>
              </Row>

              {/* Hitpoint Selection  END */}

              <div className="mt-3 justify-content-center d-flex">
                <Button variant="danger" disabled={checkDisabledButton()} size="lg">
                  Next
                </Button>
              </div>
            </Col>
            <Col className="col-12 col-md-6">
              <h3>{characterName}</h3>
              {/* <p>{ characterRace}</p> */}
              <Accordion activeKey={[`${currentActiveKey}`]} flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Race</Accordion.Header>
                  <Accordion.Body>
                    {characterRace ? (
                      <div>
                        <div className="d-flex justify-content-center">
                        <img src={JSON.parse(characterRace).image} />
                        </div>
                        <u>
                          <h3
                            className="text-center underline"
                            dangerouslySetInnerHTML={{
                              __html: JSON.parse(characterRace).name,
                            }}
                          ></h3>
                        </u>

                        <h4>Description</h4>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: JSON.parse(characterRace).description,
                          }}
                        ></div>
                        <div>
                          <h4>Abilities</h4>
                          <div
                            dangerouslySetInnerHTML={{
                              __html:
                                JSON.parse(characterRace).specialAbilities,
                            }}
                          ></div>
                          <h4>Restrictions</h4>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: JSON.parse(characterRace).restrictions,
                            }}
                          ></div>
                        </div>
                      </div>
                    ) : (
                      <p>Select a race to learn more about them</p>
                    )}
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Class</Accordion.Header>
                  <Accordion.Body>
                    {characterClass ? (
                      <div>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: JSON.parse(characterClass).description,
                          }}
                        ></div>
                      </div>
                    ) : (
                      <p>Select a class to learn more about them</p>
                    )}
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
             
            </Col>
          </Row>
        </div>
     
      </Container>
    </div>
  );
};

export default CreateCharacter;
