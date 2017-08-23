import {StoreObject, GenericObjectStore} from "Store";

class Whitepaper extends StoreObject {
    getAuthor() {
        return this.author;
    }
}

export const WhitepaperStore = new GenericObjectStore("whitepaper", Whitepaper);
