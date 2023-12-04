import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { User } from "src/app/dashboard/modules/users/models";

export const authActions = createActionGroup({
    source: "Auth",
    events: {
        "Set As Auth User": props<{data: User}>(),
        "Delete Auth User": emptyProps(),
    }
})