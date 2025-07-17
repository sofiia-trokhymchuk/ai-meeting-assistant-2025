import { type Config as LibraryConfig } from "@ai-assistant/shared";

import { type EnvironmentSchema } from "./types.js";

type Config = LibraryConfig<EnvironmentSchema>;

export { type Config };
