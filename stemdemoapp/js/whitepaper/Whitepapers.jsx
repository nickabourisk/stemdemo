import {UI, CardPanel, Level, Table, Button} from "ui/UI";
import {WhitepaperStore} from "./WhitepaperStore";
import {Ajax} from "base/Ajax";
import {TranscriptAuthorStore, TranscriptStore, TranscriptLineStore} from "../transcripts/TranscriptStore";

function updateWhitepaper(whitepaper, button) {
    button.setLevel(Level.WARNING);
    Ajax.postJSON("/update_whitepaper/", {
        whitepaperId: whitepaper.id
    }).then(() => {
        console.log("Done ajax");
        button.setLevel(Level.SUCCESS);
    });
}

class WhitepaperDate extends UI.Primitive("span") {
    getDate() {
        const whitepaper = this.options.whitepaper;
        return whitepaper.getDateModified().format("DD/MMM dd w YYYY HH:MM:ss")
    }

    render() {
        return this.getDate();
    }

    onMount() {
        this.attachUpdateListener(this.options.whitepaper, () => {
            this.redraw();
        });
    }
}

class WhitepaperTable extends Table {
    setColumns() {
        const cellStyle = {
            textAlign: "left",
            verticalAlign: "middle"
        };
        const headerStyle = cellStyle;

        let columns = [{
            value: whitepaper => whitepaper.name,
            headerName: "Whitepaper name",
            headerStyle: headerStyle,
            cellStyle: cellStyle
        }, {
            value: whitepaper => whitepaper.getAuthor(),
            headerName: "Author",
            headerStyle: headerStyle,
            cellStyle: cellStyle
        }, {
            value: whitepaper => <WhitepaperDate whitepaper={whitepaper}/>,
            headerName: "Date modified",
            headerStyle: headerStyle,
            cellStyle: cellStyle
        }, {
            value: whitepaper => {
                let button;
                button = <Button
                    onClick={() => updateWhitepaper(whitepaper, button)}
                    level={Level.PRIMARY}>Update time</Button>;
                return button;
            },
            headerName: "Update"
        }];
        super.setColumns(columns);
    }

    getEntries() {
        return WhitepaperStore.all();
    }
}


export class WhitepaperList extends UI.Element {
    render() {
        return [
            <h1>All whitepapers</h1>,
            <WhitepaperTable/>
        ]
    }
}