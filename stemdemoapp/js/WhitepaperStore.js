import {StoreObject, GenericObjectStore} from "Store";
import {StemDate} from "time/Time";

class Whitepaper extends StoreObject {
    getAuthor() {
        return this.author;
    }

    getDateModified() {
        return StemDate(this.lastModified)
    }
}

export const WhitepaperStore = new GenericObjectStore("whitepaper", Whitepaper);
