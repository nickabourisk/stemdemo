import {StoreObject, GenericObjectStore} from "Store";
import {StemDate} from "time/Time";

class TranscriptAuthor extends StoreObject {

}

class Transcript extends StoreObject {
    getAllLines() {
        return this.getStore("TranscriptLine").all().filter(line => line.transcriptId == this.id);
    }
}

class TranscriptLine extends StoreObject {
    getTranscript() {
        return this.getStore("Transcript").get(this.transcriptId);
    }
}

export const TranscriptAuthorStore = new GenericObjectStore("TranscriptAuthor", TranscriptAuthor);
export const TranscriptStore = new GenericObjectStore("Transcript", Transcript);
export const TranscriptLineStore = new GenericObjectStore("TranscriptLine", TranscriptLine);
