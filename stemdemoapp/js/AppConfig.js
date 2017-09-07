import {UI, CodeEditor} from "UI";

import {Ajax} from "base/Ajax";
import {ensure} from "base/Require";
import {getCookie} from "base/Utils";
import {PageTitleManager} from "base/PageTitleManager";
import {WebsocketSubscriber} from "websocket/WebsocketSubscriber";

import {GlobalState} from "state/State";

PageTitleManager.setDefaultTitle("Stem Demo");
