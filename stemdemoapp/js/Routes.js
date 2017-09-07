import {UI, Route} from "UI";
import {IndexPage} from "./IndexPage";
import {BlogRoute} from "BlogPanel";
import {ForumRoute} from "ForumPanel";
import {WhitepaperList} from "whitepaper/Whitepapers";
import {StateDependentElement} from "StateDependentElement";

export const MAIN_ROUTE = new Route(null, IndexPage, [
    new Route("whitepapers", StateDependentElement(WhitepaperList)),
    new BlogRoute(),
    new ForumRoute(),
]);