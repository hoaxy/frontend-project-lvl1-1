import {
  COMMON_GREETING,
  USER_NAME_QUESTION_TEXT,
  DEFAULT_USER_NAME,
  USER_GREETING,

  GAME_QUESTION_TEXT,
  GAME_ANSWER_TEXT,

  GAME_TRUE_MESSAGE,
  GAME_FALSE_MESSAGE,

  GAME_TRUE_END_MESSAGE,
  GAME_FALSE_END_MESSAGE,
} from './consts.js';
import { print, askUser } from './cli.js';

const gameEngine = (game, gameRules) => {
  const END_GAME_CORRECT_ANSWER_COUNT = 3;

  print(COMMON_GREETING);

  const userName = askUser(`${USER_NAME_QUESTION_TEXT} `, DEFAULT_USER_NAME);
  print(`${USER_GREETING}, ${userName}!`);

  print(gameRules);

  for (let i = 0; i < END_GAME_CORRECT_ANSWER_COUNT; i += 1) {
    const [question, answer] = game();

    print(`${GAME_QUESTION_TEXT}: ${question}`);

    const expectedAnswer = String(answer);
    const userAnswer = askUser(`${GAME_ANSWER_TEXT}: `);

    if (userAnswer !== expectedAnswer) {
      print(`'${userAnswer}' ${GAME_FALSE_MESSAGE} '${expectedAnswer}'.`);
      return print(`${GAME_FALSE_END_MESSAGE}, ${userName}!`);
    }

    print(GAME_TRUE_MESSAGE);
  }

  return print(`${GAME_TRUE_END_MESSAGE}, ${userName}!`);
};

export default gameEngine;