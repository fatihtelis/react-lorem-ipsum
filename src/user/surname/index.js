import { randomFromRange } from '../../utils';
import surnames from '../../data/surnames.json';

export const getRandomSurname = () => surnames[randomFromRange(0, surnames.length - 1)];

const Surname = () => getRandomSurname();

export default Surname;
