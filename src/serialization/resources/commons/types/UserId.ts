/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { VitalApi } from "@fern-api/vital";
import * as core from "../../../../core";

export const UserId: core.serialization.Schema<serializers.UserId.Raw, VitalApi.UserId> = core.serialization.string();

export declare namespace UserId {
    type Raw = string;
}