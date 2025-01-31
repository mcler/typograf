import Typograf from '../../../typograf';

import beforeBracket from './beforeBracket';
import bracket from './bracket';
import delBeforePercent from './delBeforePercent';
import delBeforePunctuation from './delBeforePunctuation';
import delBetweenExclamationMarks from './delBetweenExclamationMarks';
import delBeforeDot from './delBeforeDot';
import delLeadingBlanks from './delLeadingBlanks';
import delRepeatN from './delRepeatN';
import delRepeatSpace from './delRepeatSpace';
import delTrailingBlanks from './delTrailingBlanks';
import insertFinalNewline from './insertFinalNewline';
import replaceTab from './replaceTab';
import squareBracket from './squareBracket';
import trimLeft from './trimLeft';
import trimRight from './trimRight';
import afterColon from './afterColon';
import afterComma from './afterComma';
import afterQuestionMark from './afterQuestionMark';
import afterExclamationMark from './afterExclamationMark';
import afterSemicolon from './afterSemicolon';

Typograf.addRules([
    afterColon,
    afterComma,
    afterQuestionMark,
    afterExclamationMark,
    afterSemicolon,
    beforeBracket,
    bracket,
    delBeforeDot,
    delBeforePercent,
    delBeforePunctuation,
    delBetweenExclamationMarks,
    delLeadingBlanks,
    delRepeatN,
    delRepeatSpace,
    delTrailingBlanks,
    insertFinalNewline,
    replaceTab,
    squareBracket,
    trimLeft,
    trimRight
]);
