import React, { ImgHTMLAttributes } from 'react';

type gender = 'male' | 'female' | 'all';
interface AvatarProps extends ImgHTMLAttributes<AvatarProps> {
  gender?: gender;
}
/**
 * Avatar (Component) generates a icon
 *
 * Props :
 *  - gender = 'all' - Gender for the Avatar picture
 *  - ...Img HTML Attributes
 */
export const Avatar: React.FC<AvatarProps>;

/**
 * name (function) return a name
 *
 * Parameters :
 *  - gender = 'all' - Gender for the generated name
 */
export const name: (gender?: gender) => string;

/**
 * name (function) return a fullname
 *
 * Parameters :
 *  - gender = 'all' - Gender for the generated fullname
 */
export const fullname: (gender?: gender) => string;
/**
 * surname (function) return randomly generated surname
 */
export const surname: () => string;

/**
 * username (function) return randomly generated username
 */
export const username: () => string;

interface LoremIpsumProps {
  p?: string | number;
  avgWordsPerSentence?: string | number;
  avgSentencesPerParagraph?: string | number;
  startWithLoremIpsum?: boolean;
  random?: boolean;
}

/**
 * LoremIpsum (Component) generates JSX
 *
 * Props :
 *  - P = 1 - Number of paragraphs
 *  - avgWordsPerSentence = 8 - Avarage number of words per sentence
 *  - avgSentencesPerParagraph = 8 - Avarage number of sentences per paragraph
 *  - startWithLoremIpsum = true - Start with 'Lorem ipsum odor amet...' to first sentence of first paragraph
 *  - random = true - If disabled always generates the same text.
 */
export const LoremIpsum: React.FC<LoremIpsumProps>;
/**
 * loremIpsum (function) returns plain text array with paragraph length
 */
export const loremIpsum: (LoremIpsumProps?: LoremIpsumProps) => string[];

export default LoremIpsum;
