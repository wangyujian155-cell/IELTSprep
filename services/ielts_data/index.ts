
import { PART1_GENERAL_TOPICS } from './part1_general';
import { PART1_CURRENT_TOPICS } from './part1_current';
import { PART2_PEOPLE_TOPICS } from './part2_people';
import { PART2_EVENTS_TOPICS } from './part2_events';
import { PART2_OBJECTS_TOPICS } from './part2_objects';
import { PART2_NATURE_TOPICS } from './part2_nature';
import { PART2_PLACES_TOPICS } from './part2_places';
import { Topic } from './types';

export const ALL_TOPICS: Topic[] = [
  ...PART1_GENERAL_TOPICS,
  ...PART1_CURRENT_TOPICS,
  ...PART2_PEOPLE_TOPICS,
  ...PART2_EVENTS_TOPICS,
  ...PART2_OBJECTS_TOPICS,
  ...PART2_NATURE_TOPICS,
  ...PART2_PLACES_TOPICS
];
