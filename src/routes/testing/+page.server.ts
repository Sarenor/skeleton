import type { Actions } from "@sveltejs/kit";

 
export const actions: Actions = {
  default: async (event) => {
    console.log(await event.request.formData());
  }
};