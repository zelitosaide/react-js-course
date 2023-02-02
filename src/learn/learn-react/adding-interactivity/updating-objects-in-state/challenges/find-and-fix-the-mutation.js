/**
 * Challenge 2 of 3: Find and fix the mutation
 *
 * There is a draggable box on a static background. You can change the
 * box’s color using the select input.
 *
 * But there is a bug. If you move the box first, and then change its color,
 * the background (which isn’t supposed to move!) will “jump” to the box
 * position. But this should not happen: the Background’s position prop is set
 * to initialPosition, which is { x: 0, y: 0 }. Why is the background moving
 * after the color change?
 */
