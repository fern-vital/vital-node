/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Vital } from "@fern-api/vital";

export interface ClientFacingActivity {
    /** Source the data has come from. */
    source: Vital.Source;
    /** Date for specified record */
    date: string;
    /** < User id returned by vital create user request. This id should be stored in your database against the user and used for all interactions with the vital api. */
    userId: Vital.UserId;
    /** < User key returned by vital create user key request. This key should be stored in your database against the user and used for all interactions with the vital api. */
    userKey?: string;
    /** Total energy consumption during the day including Basal Metabolic Rate in kilocalories::kilocalories */
    caloriesTotal?: number;
    /** Energy consumption caused by the physical activity of the day in kilocalories::kilocalories */
    caloriesActive?: number;
    /** Total number of steps registered during the day::steps */
    steps?: number;
    /** Daily physical activity as equal meters i.e. amount of walking needed to get the same amount of activity::meters */
    dailyMovement?: number;
    /** Number of minutes during the day with low intensity activity (e.g. walking)::minutes */
    low?: number;
    /** Number of minutes during the day with medium intensity activity (e.g. walking)::minutes */
    medium?: number;
    /** Number of minutes during the day with high intensity activity (e.g. running)::minutes */
    high?: number;
    /** Number of floors climbed by the user::count */
    floorsClimbed?: number;
    /** Timezone offset from UTC as minutes. For example, EEST (Eastern European Summer Time, +3h) is 180. PST (Pacific Standard Time, -8h) is -480 */
    timezoneOffset?: number;
}
