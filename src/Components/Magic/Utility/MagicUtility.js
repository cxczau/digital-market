const MARGIN_TOP = 10;
const MARGIN_LEFT = 10;
const CARD_WIDTH = 62;
const CARD_HEIGHT = 87;
const MARGIN_BETWEEN = 0;

/**
 * Only 9 trading cards per A4 page
 */
const TOP_ROW = [1, 2, 3];
const MIDDLE_ROW = [4, 5, 6];
const BOTTOM_ROW = [7, 8, 9];

const LEFT_COL = [1, 4, 7];
const MIDDLE_COL = [2, 5, 8];
const RIGHT_COL = [3, 6, 9];

/**
 * Determines where the next card img placement should be on A4 sheet
 * @param {*} index
 */
export const DeterminePosition = (index) => {
  const position = index % 9 + 1;

  let x = MARGIN_LEFT,
    y = MARGIN_TOP;

  if (MIDDLE_ROW.includes(position)) {
    y = MARGIN_TOP + CARD_HEIGHT + MARGIN_BETWEEN;
  }

  if (BOTTOM_ROW.includes(position)) {
    y = MARGIN_TOP + CARD_HEIGHT + MARGIN_BETWEEN + CARD_HEIGHT + MARGIN_BETWEEN;
  }

  if (MIDDLE_COL.includes(position)) {
    x = MARGIN_LEFT + CARD_WIDTH + MARGIN_BETWEEN;
  }

  if (RIGHT_COL.includes(position)) {
    x = MARGIN_LEFT + CARD_WIDTH + MARGIN_BETWEEN + CARD_WIDTH + MARGIN_BETWEEN;
  }

  return {
    x,
    y,
  };
};
