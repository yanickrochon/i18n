import { createContext } from "react";
import type { TranslationContext } from "./types";
import { Messages } from "@i18n/t";

const Context = createContext<TranslationContext<Messages> | null>(null);

export default Context;